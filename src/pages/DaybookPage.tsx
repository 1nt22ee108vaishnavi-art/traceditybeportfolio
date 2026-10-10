import DaybookPhoto from '../components/DaybookPhoto'
import { daybookEntries } from '../data/portfolio'

export default function DaybookPage(){
  return (
    <section className="daybook-page page-section" aria-labelledby="daybook-title">
      <h1 id="daybook-title">Daybook</h1>
      <div className="daybook-gallery">
        {daybookEntries.map((entry, index) => (
          <figure className={`daybook-gallery-item daybook-gallery-item-${index + 1}`} key={entry.src}>
            <DaybookPhoto src={entry.src} alt={entry.alt} />
          </figure>
        ))}
      </div>
    </section>
  )
}
