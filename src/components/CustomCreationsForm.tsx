import React, { FormEvent, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { commissionMediums, contactEmail } from '../data/portfolio'

// The Custom Creations enquiry form, used on the notebook page and on the Custom Creations screen
// of the main menu. It sends the enquiry to my inbox through FormSubmit.

function deadlineProblem(value: string){
  if (!value) return ''
  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{2})$/)
  if (!match) return 'Please enter the date as DD/MM/YY.'
  const [day, month, year] = [Number(match[1]), Number(match[2]), 2000 + Number(match[3])]
  const date = new Date(year, month - 1, day)
  if (date.getDate() !== day || date.getMonth() !== month - 1) return "That date doesn't exist. Please check it."
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (date < today) return "Please choose a date that hasn't passed yet."
  return ''
}

const maxReferenceFiles = 3
const maxReferenceBytes = 5 * 1024 * 1024

// Friendly messages for anything missing or mistyped, keyed by field name.
function enquiryErrors(field: (name: string) => string, references: File[]){
  const errors: Record<string, string> = {}
  if (!field('idea')) errors.idea = 'Please tell me a little about what you would like me to create.'
  const deadline = deadlineProblem(field('deadline'))
  if (deadline) errors.deadline = deadline
  if (!field('name')) errors.name = 'Please add your name so I know who I am talking to.'
  const phone = field('phone')
  if (!phone) errors.phone = 'Please add your contact number so I can get back to you.'
  else if (!/^[6-9]\d{9}$/.test(phone)) errors.phone = 'Please enter a 10-digit Indian mobile number, without +91.'
  if (references.length > maxReferenceFiles) errors.references = `Please choose up to ${maxReferenceFiles} images.`
  else if (references.some(file => !file.type.startsWith('image/'))) errors.references = 'Reference files need to be images.'
  else if (references.reduce((total, file) => total + file.size, 0) > maxReferenceBytes) {
    errors.references = 'Those images are a little large. Please keep them under 5 MB in total, or share links in the details.'
  }
  return errors
}

export default function CustomCreationsForm(){
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const fieldError = (name: string) => fieldErrors[name] && (
    <span className="field-error" id={`${name}-error`} role="alert">{fieldErrors[name]}</span>
  )
  const describedBy = (name: string) => fieldErrors[name] ? `${name}-error` : undefined

  // Keeps only the 10 digits after +91, even if someone pastes "+91 98765 43210".
  function updatePhone(event: React.ChangeEvent<HTMLInputElement>){
    let digits = event.currentTarget.value.replace(/\D/g, '')
    if (digits.length > 10 && digits.startsWith('91')) digits = digits.slice(2)
    else if (digits.length > 10 && digits.startsWith('0')) digits = digits.slice(1)
    event.currentTarget.value = digits.slice(0, 10)
  }

  // Formats the deadline as DD/MM/YY while typing.
  function updateDeadline(event: React.ChangeEvent<HTMLInputElement>){
    const input = event.currentTarget
    const digits = input.value.replace(/\D/g, '').slice(0, 6)
    input.value = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 6)].filter(Boolean).join('/')
  }

  // Clears a field's message as soon as it is edited.
  function clearFieldError(event: FormEvent<HTMLFormElement>){
    const name = (event.target as HTMLInputElement).name
    if (fieldErrors[name]) setFieldErrors(({ [name]: _cleared, ...rest }) => rest)
  }

  // Sends the enquiry to my inbox through FormSubmit. Success shows only once FormSubmit
  // confirms delivery; on failure everything typed stays in place so it can be retried.
  async function sendEnquiry(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const field = (name: string) => String(formData.get(name) || '').trim()
    const references = formData.getAll('references').filter((file): file is File => file instanceof File && file.size > 0)

    const errors = enquiryErrors(field, references)
    setFieldErrors(errors)
    const firstInvalid = Object.keys(errors)[0]
    if (firstInvalid){
      setFormStatus('idle')
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const enquiry = new FormData()
    enquiry.append('_subject', `Custom enquiry from ${field('name')}`)
    enquiry.append('_template', 'table')
    enquiry.append('_captcha', 'false')
    enquiry.append('Name', field('name'))
    enquiry.append('Contact number', `+91 ${field('phone')}`)
    enquiry.append('What would you like me to create?', field('idea'))
    enquiry.append('Preferred medium', field('medium') || 'Not specified')
    enquiry.append('Budget', field('budget') || 'Not specified')
    enquiry.append('Preferred deadline', field('deadline') || 'Not specified')
    enquiry.append('Colours, size, occasion, references, and other details', field('details') || 'None')
    references.forEach((file, index) => enquiry.append(`attachment${index + 1}`, file, file.name))

    setFormStatus('sending')
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: enquiry
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || String(result?.success) !== 'true') throw new Error(result?.message || 'Not sent')
      form.reset()
      setFormStatus('sent')
    } catch (error) {
      console.warn('Enquiry not delivered:', error)
      setFormStatus('error')
    }
  }

  return (
  <form className="order-form" onSubmit={sendEnquiry} onChange={clearFieldError} noValidate>
    <label className="form-wide">What would you like me to create?
      <textarea name="idea" rows={3} required placeholder="Tell me about the idea that's been on your mind…" aria-invalid={Boolean(fieldErrors.idea)} aria-describedby={describedBy('idea')} />
      {fieldError('idea')}
    </label>
    <label>Preferred medium
      <select name="medium" defaultValue="">
        <option value="">Choose a medium</option>
        {commissionMediums.map(medium => <option key={medium} value={medium}>{medium}</option>)}
      </select>
    </label>
    <label>Budget (optional)<input name="budget" type="text" inputMode="decimal" placeholder="Your comfortable range" /></label>
    <label className="form-wide">Colours, size, occasion, references, and other details<textarea name="details" rows={3} placeholder="Add any details or reference links you'd like to share" /></label>
    <label>Preferred deadline (optional)
      <input name="deadline" type="text" inputMode="numeric" placeholder="DD/MM/YY" maxLength={8} autoComplete="off" onChange={updateDeadline} aria-invalid={Boolean(fieldErrors.deadline)} aria-describedby={describedBy('deadline')} />
      {fieldError('deadline')}
    </label>
    <label>Name
      <input name="name" autoComplete="name" required aria-invalid={Boolean(fieldErrors.name)} aria-describedby={describedBy('name')} />
      {fieldError('name')}
    </label>
    <label className="form-wide">Contact number
      <span className="phone-field">
        <span className="phone-prefix" aria-hidden="true">+91</span>
        <input
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="10-digit mobile number"
          required
          aria-label="Contact number, +91"
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={describedBy('phone')}
          onChange={updatePhone}
        />
      </span>
      {fieldError('phone')}
    </label>
    <label className="form-wide">Reference images (optional)
      <input name="references" type="file" accept="image/*" multiple aria-invalid={Boolean(fieldErrors.references)} aria-describedby={describedBy('references') || 'references-hint'} />
      <small id="references-hint">Up to 3 images, 5 MB in total.</small>
      {fieldError('references')}
    </label>
    <div className="form-wide">
      <button className="button button-dark" type="submit" disabled={formStatus === 'sending'}>
        {formStatus === 'sending' ? 'Sending…' : <>Send custom enquiry <ArrowUpRight size={16} /></>}
      </button>
      <p className="form-disclaimer">Every request is reviewed individually. I’ll confirm availability, pricing, and the estimated timeline with you before beginning any work. Submitting an enquiry does not guarantee acceptance of the request.</p>
      {Object.keys(fieldErrors).length > 0 && <p className="form-feedback" role="alert">A few details need another look. Please check the highlighted fields.</p>}
      {formStatus === 'sent' && <p className="form-feedback" role="status">Your enquiry has been received! I’ll review your idea and get back to you about the possibilities, pricing, and timeline.</p>}
      {formStatus === 'error' && <p className="form-feedback" role="alert">Sorry, your enquiry didn’t send. Everything you typed is still here, so please try again in a moment, or email me at {contactEmail}.</p>}
    </div>
  </form>
  )
}
