import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  // Gallery photos open the artwork preview; the homepage teaser stays a link to /daybook.
  previewable?: boolean
}

export default function DaybookPhoto({ src, alt, className = '', previewable = false }: Props){
  const [failed, setFailed] = useState(false)

  return (
    <div className={`daybook-photo ${className}${failed ? ' is-missing' : ''}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          {...(previewable ? { 'data-preview': true, tabIndex: 0, role: 'button', 'aria-label': `Preview ${alt}` } : {})}
        />
      ) : (
        <span className="daybook-photo-placeholder" aria-label="Replace with a Daybook photograph">
          Add photograph
        </span>
      )}
    </div>
  )
}
