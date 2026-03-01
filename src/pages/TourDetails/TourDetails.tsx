import { Link, useParams } from 'react-router-dom'
import { getPlanBySlug, getPlanImageSrc } from '../../data/tours'
import './TourDetails.css'

function TourDetails() {
  const { tourId = '' } = useParams()
  const tour = getPlanBySlug(tourId)

  if (!tour) {
    return (
      <main className="tour-details">
        <div className="tour-details__not-found">
          <h1>Tour Not Found</h1>
          <p>The selected tour does not exist.</p>
          <Link to="/">Back To Home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="tour-details">
      <section className="tour-details__hero">
        <img src={getPlanImageSrc(tour)} alt={tour.title} />
      </section>

      <section className="tour-details__content">
        <p className="tour-details__eyebrow">
          {tour.type.toUpperCase()} • {tour.days} DAYS
        </p>
        <h1>{tour.title}</h1>
        <p>{tour.shortDesc}</p>
        <div className="tour-details__actions">
          <a
            className="tour-details__brochure"
            href={tour.brochurePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Brochure
          </a>
          <Link className="tour-details__back" to="/">
            Back To Home
          </Link>
        </div>
      </section>

      <section className="tour-details__itinerary" aria-labelledby="tour-details-itinerary">
        <h2 id="tour-details-itinerary">Day By Day</h2>
        <div className="tour-details__days">
          {tour.dayPlans.map((dayPlan) => (
            <article key={`${tour.title}-${dayPlan.day}`} className="tour-details__day">
              <p className="tour-details__day-label">Day {dayPlan.day}</p>
              <h3>{dayPlan.title}</h3>
              <p>{dayPlan.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default TourDetails
