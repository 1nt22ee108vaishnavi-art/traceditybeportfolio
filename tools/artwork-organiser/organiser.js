const draftStorageKey = 'artwork-organiser-draft-v2'
const imageExtensions = new Set(['.avif', '.bmp', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp'])
const defaultCategories = [
  { id: 'charcoal', name: 'Cobalt', slug: 'charcoal', pigment: '#47677b', count: 2 },
  { id: 'watercolor', name: 'Moss', slug: 'watercolor', pigment: '#78805b', count: 2 },
  { id: 'ink-watercolor', name: 'Terracotta', slug: 'ink-and-watercolor', pigment: '#aa684e', count: 2 },
  { id: 'acrylic', name: 'Ochre', slug: 'acrylic', pigment: '#bf914d', count: 2 },
  { id: 'sketches-doodles', name: 'Rose', slug: 'sketches-and-doodles', pigment: '#aa7479', count: 2 },
  { id: 'other-creations', name: 'Plum', slug: 'other-creations', pigment: '#806b80', count: 2 }
]

const folderPicker = document.querySelector('#folder-picker')
const filesPicker = document.querySelector('#files-picker')
const folderStatus = document.querySelector('#folder-status')
const galleryGrid = document.querySelector('#gallery-grid')
const imageCount = document.querySelector('#image-count')
const sectionPicker = document.querySelector('#section-picker')
const sectionEditor = document.querySelector('#section-editor')
const validationSummary = document.querySelector('#validation-summary')
const validationResults = document.querySelector('#validation-results')
const validateButton = document.querySelector('#validate-button')
const mappingPreview = document.querySelector('#mapping-preview')
const draftStatus = document.querySelector('#draft-status')
const exportButton = document.querySelector('#export-button')
const exportStatus = document.querySelector('#export-status')

let images = []
let selectedPaths = new Set()
let sourceFolder = ''
let idSequence = 0
let draft = createDefaultDraft()
let lastValidation = { missing: [], unassigned: [], warnings: [] }

function createDefaultDraft(){
  return {
    homepage: { heroImage: null },
    about: { portrait: null },
    work: {
      categories: defaultCategories.map(category => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        pigment: category.pigment,
        artworks: Array.from({ length: category.count }, (_, index) => ({
          id: `${category.id}-artwork-${index + 1}`,
          image: null
        }))
      }))
    },
    sketchbook: Array.from({ length: 4 }, (_, index) => ({
      id: `sheet-${index + 1}`,
      image: null
    })),
    daybook: {
      coverImage: null,
      gallery: Array.from({ length: 8 }, (_, index) => ({
        id: `entry-${index + 1}`,
        image: null
      }))
    }
  }
}

function createId(prefix){
  idSequence += 1
  return `${prefix}-${Date.now().toString(36)}-${idSequence}`
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character])
}

function slugify(value){
  return value.trim().toLowerCase().normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function isImageFile(file){
  const extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase()
  return file.type.startsWith('image/') || imageExtensions.has(extension)
}

function relativePathFor(file){
  const parts = file.webkitRelativePath.split('/')
  return parts.length > 1 ? parts.slice(1).join('/') : file.name
}

function revokeImageUrls(){
  images.forEach(image => URL.revokeObjectURL(image.url))
}

function imageByPath(path){
  return images.find(image => image.path === path)
}

function imageReference(path){
  if (!path) return null
  const image = imageByPath(path)
  return {
    file: image?.relativePath || path,
    importKey: path,
    fileName: image?.file.name || path.split('/').at(-1)
  }
}

function persistDraft(){
  try {
    localStorage.setItem(draftStorageKey, JSON.stringify({ sourceFolder, draft }))
    draftStatus.textContent = 'Draft saved in this browser on this device. It is not exported until you download the JSON.'
  } catch (error) {
    draftStatus.textContent = `Could not save the local draft: ${error instanceof Error ? error.message : String(error)}`
  }
}

function restoreDraft(){
  try {
    const saved = localStorage.getItem(draftStorageKey)
    if (!saved) return
    const parsed = JSON.parse(saved)
    if (parsed?.draft?.homepage && parsed?.draft?.work?.categories && Array.isArray(parsed?.draft?.sketchbook) && parsed?.draft?.daybook) {
      draft = parsed.draft
      sourceFolder = typeof parsed.sourceFolder === 'string' ? parsed.sourceFolder : ''
      draftStatus.textContent = 'Restored your saved local draft. Re-select its image folder to preview the saved paths.'
    }
  } catch (error) {
    draftStatus.textContent = `Could not restore the saved draft: ${error instanceof Error ? error.message : String(error)}`
  }
}

function createImageSelect(selectedPath, label){
  const select = document.createElement('select')
  select.setAttribute('aria-label', label)
  const empty = document.createElement('option')
  empty.value = ''
  empty.textContent = images.length ? 'Unassigned — choose an image…' : 'Choose an image folder first…'
  select.append(empty)

  if (selectedPath && !imageByPath(selectedPath)) {
    const missing = document.createElement('option')
    missing.value = selectedPath
    missing.textContent = `Missing image: ${selectedPath}`
    select.append(missing)
  }

  images.forEach(image => {
    const option = document.createElement('option')
    option.value = image.path
    option.textContent = `${image.file.name} — ${image.path}`
    select.append(option)
  })
  select.value = selectedPath || ''
  return select
}

function selectedImagePreview(path){
  const image = imageByPath(path)
  if (!path) return '<span class="assignment-placeholder">No image assigned</span>'
  if (!image) return `<span class="assignment-missing">Missing: ${escapeHtml(path)}</span>`
  return `<span class="inline-image"><img src="${image.url}" alt=""><span>${escapeHtml(image.file.name)}</span></span>`
}

function assignmentControl(path, label, onChange){
  const row = document.createElement('div')
  row.className = 'slot-row'
  const preview = document.createElement('div')
  preview.className = 'slot-preview'
  preview.innerHTML = selectedImagePreview(path)
  const select = createImageSelect(path, label)
  select.addEventListener('change', () => {
    onChange(select.value || null)
    renderAll()
  })
  row.append(preview, select)
  return row
}

function renderHomeEditor(){
  sectionEditor.innerHTML = `
    <p class="section-intro">Choose an image for the homepage hero. This draft does not update the site until you later apply the exported mapping.</p>
    <div class="editor-group">
      <h3>Main hero artwork</h3>
      <div id="hero-slot"></div>
    </div>`
  sectionEditor.querySelector('#hero-slot').append(
    assignmentControl(draft.homepage.heroImage, 'Homepage hero image', path => { draft.homepage.heroImage = path })
  )
}

function renderAboutEditor(){
  sectionEditor.innerHTML = `
    <p class="section-intro">Choose the photograph for the existing About Me portrait slot.</p>
    <div class="editor-group">
      <h3>About Me portrait</h3>
      <div id="about-slot"></div>
    </div>`
  sectionEditor.querySelector('#about-slot').append(
    assignmentControl(draft.about.portrait, 'About Me portrait', path => { draft.about.portrait = path })
  )
}

function categoryCard(category){
  const card = document.createElement('section')
  card.className = 'category-card'
  card.dataset.categoryId = category.id

  const heading = document.createElement('div')
  heading.className = 'category-heading'
  const fields = document.createElement('div')
  fields.className = 'category-fields'

  const nameLabel = document.createElement('label')
  nameLabel.textContent = 'Category name'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.maxLength = 50
  nameInput.value = category.name
  nameInput.setAttribute('aria-label', 'Work category name')
  nameInput.addEventListener('change', () => {
    const name = nameInput.value.trim()
    if (!name) {
      nameInput.value = category.name
      return
    }
    category.name = name
    if (!defaultCategories.some(item => item.id === category.id)) category.slug = uniqueSlug(name, category.id)
    renderAll()
  })
  nameLabel.append(nameInput)

  const colorLabel = document.createElement('label')
  colorLabel.textContent = 'Palette colour'
  const colorInput = document.createElement('input')
  colorInput.type = 'color'
  colorInput.value = /^#[0-9a-f]{6}$/i.test(category.pigment) ? category.pigment : '#9b7451'
  colorInput.setAttribute('aria-label', 'Category palette colour')
  colorInput.addEventListener('input', () => {
    category.pigment = colorInput.value
    persistAndPreview()
  })
  colorLabel.append(colorInput)

  fields.append(nameLabel, colorLabel)
  heading.append(fields)

  const removeCategory = document.createElement('button')
  removeCategory.type = 'button'
  removeCategory.className = 'button button-danger button-small'
  removeCategory.textContent = 'Remove category'
  removeCategory.addEventListener('click', () => {
    if (!window.confirm(`Remove “${category.name}” and its ${category.artworks.length} artwork entries from this draft?`)) return
    draft.work.categories = draft.work.categories.filter(item => item.id !== category.id)
    renderAll()
  })
  heading.append(removeCategory)

  const artworkHeading = document.createElement('div')
  artworkHeading.className = 'subheading-row'
  const artworkTitle = document.createElement('h4')
  artworkTitle.textContent = `Artwork entries (${category.artworks.length})`
  const addArtwork = document.createElement('button')
  addArtwork.type = 'button'
  addArtwork.className = 'button button-secondary button-small'
  addArtwork.textContent = 'Add artwork entry'
  addArtwork.addEventListener('click', () => {
    category.artworks.push({ id: createId('artwork'), image: null })
    renderAll()
  })
  artworkHeading.append(artworkTitle, addArtwork)

  const artworkList = document.createElement('div')
  artworkList.className = 'ordered-list'
  category.artworks.forEach((artwork, index) => {
    artworkList.append(orderedImageRow({
      item: artwork,
      index,
      total: category.artworks.length,
      label: `${category.name} artwork ${index + 1}`,
      onImage: path => { artwork.image = path },
      onMove: delta => moveItem(category.artworks, index, delta, renderAll),
      onRemove: () => {
        category.artworks.splice(index, 1)
        renderAll()
      }
    }))
  })
  card.append(heading, artworkHeading, artworkList)
  return card
}

function uniqueSlug(name, exceptId){
  const base = slugify(name) || 'new-category'
  let slug = base
  let suffix = 2
  while (draft.work.categories.some(category => category.id !== exceptId && category.slug === slug)) slug = `${base}-${suffix++}`
  return slug
}

function renderWorkEditor(){
  sectionEditor.replaceChildren()
  const intro = document.createElement('p')
  intro.className = 'section-intro'
  intro.textContent = 'Create as many categories and artwork entries as you need. Assignments can reuse the same image in multiple places. The website must later be updated to read any new categories or entries.'

  const bulk = bulkAssignPanel('Work category', 'Choose a category for the selected images…', selected => {
    const category = draft.work.categories.find(item => item.id === bulk.categorySelect.value)
    if (!category) return
    selected.forEach(path => category.artworks.push({ id: createId('artwork'), image: path }))
    selectedPaths.clear()
    renderAll()
  })
  const addCategory = document.createElement('button')
  addCategory.type = 'button'
  addCategory.className = 'button button-secondary'
  addCategory.textContent = 'Create category'
  addCategory.addEventListener('click', () => {
    const name = `New category ${draft.work.categories.length + 1}`
    const id = createId('category')
    draft.work.categories.push({
      id,
      name,
      slug: uniqueSlug(name),
      pigment: '#9b7451',
      artworks: []
    })
    renderAll()
  })
  const categoryList = document.createElement('div')
  categoryList.className = 'category-list'
  draft.work.categories.forEach(category => categoryList.append(categoryCard(category)))
  sectionEditor.append(intro, bulk.element, addCategory, categoryList)
}

function orderedImageRow({ item, index, total, label, onImage, onMove, onRemove }){
  const row = document.createElement('div')
  row.className = 'ordered-row'
  const order = document.createElement('span')
  order.className = 'order-number'
  order.textContent = String(index + 1)
  const preview = document.createElement('div')
  preview.className = 'slot-preview'
  preview.innerHTML = selectedImagePreview(item.image)
  const select = createImageSelect(item.image, label)
  select.addEventListener('change', () => {
    onImage(select.value || null)
    renderAll()
  })
  const controls = document.createElement('div')
  controls.className = 'order-controls'
  controls.append(
    actionButton('Move up', '↑', index === 0, () => onMove(-1)),
    actionButton('Move down', '↓', index === total - 1, () => onMove(1)),
    actionButton('Remove entry', 'Remove', false, onRemove, 'button-danger')
  )
  row.append(order, preview, select, controls)
  return row
}

function actionButton(label, text, disabled, action, variant = 'button-secondary'){
  const button = document.createElement('button')
  button.type = 'button'
  button.className = `button ${variant} button-small`
  button.textContent = text
  button.setAttribute('aria-label', label)
  button.disabled = disabled
  button.addEventListener('click', action)
  return button
}

function moveItem(list, index, delta, render){
  const next = index + delta
  if (next < 0 || next >= list.length) return
  const [item] = list.splice(index, 1)
  list.splice(next, 0, item)
  render()
}

function bulkAssignPanel(labelText, placeholderText, assign){
  const element = document.createElement('div')
  element.className = 'bulk-panel'
  const help = document.createElement('p')
  help.className = 'helper'
  help.textContent = 'Select images in the collection, then add them as new entries here.'
  const controls = document.createElement('div')
  controls.className = 'bulk-controls'
  const label = document.createElement('label')
  label.className = 'visually-hidden'
  label.textContent = labelText
  const select = document.createElement('select')
  select.setAttribute('aria-label', labelText)
  const placeholder = document.createElement('option')
  placeholder.value = ''
  placeholder.textContent = placeholderText
  select.append(placeholder)
  draft.work.categories.forEach(category => {
    const option = document.createElement('option')
    option.value = category.id
    option.textContent = category.name
    select.append(option)
  })
  label.append(select)
  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'button button-secondary'
  button.textContent = 'Add selected images'
  button.disabled = selectedPaths.size === 0
  button.addEventListener('click', () => {
    if (!select.value) {
      select.focus()
      return
    }
    assign([...selectedPaths])
  })
  controls.append(label, button)
  element.append(help, controls)
  return { element, categorySelect: select }
}

function renderSketchbookEditor(){
  sectionEditor.replaceChildren()
  const intro = document.createElement('p')
  intro.className = 'section-intro'
  intro.textContent = 'Add as many sheets as you want, select any imported image for each, and set the page order with the arrows.'
  const bulk = bulkAssignPanel('Sketchbook section', 'Sketchbook sheets', selected => {
    selected.forEach(path => draft.sketchbook.push({ id: createId('sheet'), image: path }))
    selectedPaths.clear()
    renderAll()
  })
  bulk.categorySelect.disabled = true
  bulk.categorySelect.innerHTML = '<option value="sketchbook">Sketchbook sheets</option>'
  const add = document.createElement('button')
  add.type = 'button'
  add.className = 'button button-secondary'
  add.textContent = 'Add empty sheet'
  add.addEventListener('click', () => {
    draft.sketchbook.push({ id: createId('sheet'), image: null })
    renderAll()
  })
  const list = document.createElement('div')
  list.className = 'ordered-list'
  draft.sketchbook.forEach((item, index) => list.append(orderedImageRow({
    item,
    index,
    total: draft.sketchbook.length,
    label: `Sketchbook sheet ${index + 1}`,
    onImage: path => { item.image = path },
    onMove: delta => moveItem(draft.sketchbook, index, delta, renderAll),
    onRemove: () => { draft.sketchbook.splice(index, 1); renderAll() }
  })))
  sectionEditor.append(intro, bulk.element, add, list)
}

function renderDaybookEditor(){
  sectionEditor.innerHTML = `
    <p class="section-intro">Set the homepage cover independently from the gallery. Add and order as many gallery photos as you need.</p>
    <div class="editor-group">
      <h3>Daybook homepage cover</h3>
      <div id="daybook-cover-slot"></div>
    </div>`
  sectionEditor.querySelector('#daybook-cover-slot').append(
    assignmentControl(draft.daybook.coverImage, 'Daybook homepage cover', path => { draft.daybook.coverImage = path })
  )

  const bulk = bulkAssignPanel('Daybook gallery', 'Daybook gallery', selected => {
    selected.forEach(path => draft.daybook.gallery.push({ id: createId('daybook-entry'), image: path }))
    selectedPaths.clear()
    renderAll()
  })
  bulk.categorySelect.disabled = true
  bulk.categorySelect.innerHTML = '<option value="daybook">Daybook gallery</option>'
  const add = document.createElement('button')
  add.type = 'button'
  add.className = 'button button-secondary'
  add.textContent = 'Add empty gallery photo'
  add.addEventListener('click', () => {
    draft.daybook.gallery.push({ id: createId('daybook-entry'), image: null })
    renderAll()
  })
  const list = document.createElement('div')
  list.className = 'ordered-list'
  draft.daybook.gallery.forEach((item, index) => list.append(orderedImageRow({
    item,
    index,
    total: draft.daybook.gallery.length,
    label: `Daybook gallery photo ${index + 1}`,
    onImage: path => { item.image = path },
    onMove: delta => moveItem(draft.daybook.gallery, index, delta, renderAll),
    onRemove: () => { draft.daybook.gallery.splice(index, 1); renderAll() }
  })))
  sectionEditor.append(bulk.element, add, list)
}

function renderSection(){
  const section = sectionPicker.value
  if (section === 'home') renderHomeEditor()
  else if (section === 'about') renderAboutEditor()
  else if (section === 'work') renderWorkEditor()
  else if (section === 'sketchbook') renderSketchbookEditor()
  else renderDaybookEditor()
}

function renderGallery(){
  galleryGrid.replaceChildren()
  if (images.length === 0) {
    imageCount.textContent = 'Choose a folder or files to see image thumbnails.'
    return
  }
  imageCount.textContent = `${images.length} image${images.length === 1 ? '' : 's'} · ${selectedPaths.size} selected`
  const fragment = document.createDocumentFragment()
  images.forEach(image => {
    const card = document.createElement('article')
    card.className = `image-card${selectedPaths.has(image.path) ? ' is-selected' : ''}`
    const label = document.createElement('label')
    label.className = 'image-choice'
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = selectedPaths.has(image.path)
    checkbox.setAttribute('aria-label', `Select ${image.file.name}`)
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) selectedPaths.add(image.path)
      else selectedPaths.delete(image.path)
      renderAll()
    })
    const preview = document.createElement('img')
    preview.src = image.url
    preview.alt = ''
    preview.loading = 'lazy'
    const filename = document.createElement('span')
    filename.className = 'image-name'
    filename.textContent = image.file.name
    const path = document.createElement('span')
    path.className = 'image-subpath'
    path.textContent = image.path
    label.append(checkbox, preview, filename, path)
    card.append(label)
    fragment.append(card)
  })
  galleryGrid.append(fragment)
}

function validateDraft(){
  const missing = []
  const unassigned = []
  const warnings = []
  const destinations = []
  const addDestination = (id, label, path) => destinations.push({ id, label, path })

  addDestination('homepage:hero', 'Homepage hero artwork', draft.homepage.heroImage)
  addDestination('about:portrait', 'About Me portrait', draft.about.portrait)
  draft.work.categories.forEach(category => category.artworks.forEach((artwork, index) => {
    addDestination(`work:${category.id}:${artwork.id}`, `${category.name} · artwork ${index + 1}`, artwork.image)
  }))
  draft.sketchbook.forEach((item, index) => addDestination(`sketchbook:${item.id}`, `Sketchbook · sheet ${index + 1}`, item.image))
  addDestination('daybook:cover', 'Daybook · homepage cover', draft.daybook.coverImage)
  draft.daybook.gallery.forEach((item, index) => addDestination(`daybook:${item.id}`, `Daybook · gallery photo ${index + 1}`, item.image))

  destinations.forEach(destination => {
    if (!destination.path) unassigned.push(destination)
    else if (!imageByPath(destination.path)) missing.push(destination)
  })
  if (draft.work.categories.length === 0) warnings.push('Work has no categories.')
  draft.work.categories.forEach(category => {
    if (category.artworks.length === 0) warnings.push(`Work category “${category.name}” has no artwork entries.`)
  })
  if (draft.sketchbook.length === 0) warnings.push('Sketchbook has no sheets.')
  if (draft.daybook.gallery.length === 0) warnings.push('Daybook has no gallery photos.')
  if (images.length === 0) warnings.push('No image folder or files are currently loaded.')
  if (!sourceFolder) warnings.push('The source folder name is unknown until you load images.')

  lastValidation = { missing, unassigned, warnings }
  return lastValidation
}

function renderValidation(){
  const result = validateDraft()
  validationResults.replaceChildren()
  const summary = `${result.missing.length} missing image${result.missing.length === 1 ? '' : 's'} · ${result.unassigned.length} unassigned destination${result.unassigned.length === 1 ? '' : 's'} · ${result.warnings.length} section warning${result.warnings.length === 1 ? '' : 's'}`
  validationSummary.textContent = summary
  const groups = [
    ['Missing images', result.missing.map(item => `${item.label}: ${item.path}`)],
    ['Unassigned destinations', result.unassigned.map(item => item.label)],
    ['Section checks', result.warnings]
  ]
  groups.forEach(([title, messages]) => {
    const group = document.createElement('div')
    group.className = `validation-group${messages.length ? ' has-issues' : ' is-clear'}`
    const heading = document.createElement('h3')
    heading.textContent = `${title} (${messages.length})`
    group.append(heading)
    if (messages.length === 0) {
      const clear = document.createElement('p')
      clear.textContent = 'None'
      group.append(clear)
    } else {
      const list = document.createElement('ul')
      messages.slice(0, 40).forEach(message => {
        const item = document.createElement('li')
        item.textContent = message
        list.append(item)
      })
      if (messages.length > 40) {
        const more = document.createElement('li')
        more.textContent = `And ${messages.length - 40} more…`
        list.append(more)
      }
      group.append(list)
    }
    validationResults.append(group)
  })
}

function mappingObject(){
  const result = validateDraft()
  return {
    format: 'artwork-organiser-mapping',
    version: 2,
    sourceFolder: sourceFolder || null,
    exportedAt: new Date().toISOString(),
    homepage: {
      heroImage: imageReference(draft.homepage.heroImage)
    },
    about: {
      portrait: imageReference(draft.about.portrait)
    },
    work: {
      categories: draft.work.categories.map((category, categoryIndex) => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        pigment: category.pigment,
        order: categoryIndex + 1,
        artworks: category.artworks.map((artwork, index) => ({
          id: artwork.id,
          order: index + 1,
          image: imageReference(artwork.image)
        }))
      }))
    },
    sketchbook: draft.sketchbook.map((item, index) => ({
      id: item.id,
      order: index + 1,
      image: imageReference(item.image)
    })),
    daybook: {
      coverImage: imageReference(draft.daybook.coverImage),
      gallery: draft.daybook.gallery.map((item, index) => ({
        id: item.id,
        order: index + 1,
        image: imageReference(item.image)
      }))
    },
    validation: {
      valid: result.missing.length === 0 && result.unassigned.length === 0 && result.warnings.length === 0,
      missingImages: result.missing,
      unassignedDestinations: result.unassigned.map(({ id, label }) => ({ id, label })),
      warnings: result.warnings
    }
  }
}

function renderPreview(){
  const mapping = mappingObject()
  mappingPreview.textContent = JSON.stringify(mapping, null, 2)
  persistDraft()
}

function persistAndPreview(){
  renderValidation()
  renderPreview()
}

function renderAll(){
  renderGallery()
  renderSection()
  renderValidation()
  renderPreview()
}

function loadFiles(fileList, folderLabel){
  const incomingFiles = [...fileList].filter(isImageFile)
  if (incomingFiles.length === 0) {
    folderStatus.textContent = 'No image files found. Try a folder or select JPG, PNG, WEBP, GIF, BMP, AVIF, or SVG images.'
    return
  }
  revokeImageUrls()
  const pathCounts = new Map()
  incomingFiles.forEach(file => {
    const path = relativePathFor(file)
    pathCounts.set(path, (pathCounts.get(path) || 0) + 1)
  })
  const duplicateIndexes = new Map()
  images = incomingFiles.map(file => {
    const relativePath = relativePathFor(file)
    const duplicateIndex = duplicateIndexes.get(relativePath) || 0
    duplicateIndexes.set(relativePath, duplicateIndex + 1)
    return {
      file,
      relativePath,
      path: pathCounts.get(relativePath) > 1 ? `${relativePath} [import ${duplicateIndex + 1}]` : relativePath,
      url: URL.createObjectURL(file)
    }
  }).sort((left, right) => left.path.localeCompare(right.path, undefined, { numeric: true, sensitivity: 'base' }))
  sourceFolder = folderLabel || incomingFiles[0].webkitRelativePath.split('/')[0] || 'Selected files'
  selectedPaths = new Set([...selectedPaths].filter(path => imageByPath(path)))
  folderStatus.textContent = `${images.length} image${images.length === 1 ? '' : 's'} loaded from “${sourceFolder}”. Source files remain unchanged and local.`
  exportStatus.textContent = ''
  renderAll()
}

function exportMapping(){
  const mapping = mappingObject()
  const summary = lastValidation
  if (summary.missing.length || summary.unassigned.length) {
    const proceed = window.confirm(`The draft contains ${summary.missing.length} missing image(s) and ${summary.unassigned.length} unassigned destination(s). Export this mapping anyway?`)
    if (!proceed) return
  }

  try {
    const blob = new Blob([JSON.stringify(mapping, null, 2)], { type: 'application/json' })
    const downloadUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = 'artwork-mapping.json'
    link.click()
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000)
    exportStatus.textContent = 'Complete draft mapping downloaded. The portfolio website and original images were not changed.'
  } catch (error) {
    exportStatus.textContent = `Could not export the mapping: ${error instanceof Error ? error.message : String(error)}`
  }
}

restoreDraft()
folderPicker.addEventListener('change', () => loadFiles(folderPicker.files || [], folderPicker.files?.[0]?.webkitRelativePath.split('/')[0]))
filesPicker.addEventListener('change', () => loadFiles(filesPicker.files || [], 'Selected files'))
sectionPicker.addEventListener('change', renderSection)
validateButton.addEventListener('click', renderValidation)
exportButton.addEventListener('click', exportMapping)
window.addEventListener('pagehide', revokeImageUrls)
renderAll()
