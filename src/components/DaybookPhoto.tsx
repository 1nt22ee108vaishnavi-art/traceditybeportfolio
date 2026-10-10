import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
}

export default function DaybookPhoto({ src, alt, className = '' }: Props){
  const [failed, setFailed] = useState(false)

  return (
    <div className={`daybook-photo ${className}${failed ? ' is-missing' : ''}`}>
      {!failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      ) : (
        <span className="daybook-photo-placeholder" aria-label="Replace with a Daybook photograph">
          Add photograph
        </span>
      )}
    </div>
  )
}
