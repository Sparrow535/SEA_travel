import { Link, useParams } from 'react-router-dom'
import { getPopularTourById } from '../../data/tours'
import './TourDetails.css'

function TourDetails() {
  const { tourId = '' } = useParams()
  const tour = getPopularTourById(tourId)

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
        <img src={tour.image} alt={tour.title} />
      </section>

      <section className="tour-details__content">
        <p className="tour-details__eyebrow">{tour.location}</p>
        <h1>{tour.title}</h1>
        <p>{tour.description}</p>
        <Link className="tour-details__back" to="/">
          Back To Home
        </Link>
      </section>
    </main>
  )
}

export default TourDetails
