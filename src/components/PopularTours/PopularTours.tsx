import { Link } from 'react-router-dom'
import { popularTours } from '../../data/tours'
import './PopularTours.css'

function PopularTours() {
  const featuredTour = popularTours[0]
  const leftTour = popularTours[1] ?? featuredTour
  const rightTour = popularTours[2] ?? featuredTour

  if (!featuredTour) return null

  return (
    <section className="popular-tours" aria-labelledby="popular-tours-heading">
      <p className="popular-tours__eyebrow">02 TOURS</p>
      <h2 id="popular-tours-heading" className="popular-tours__title">
        POPULAR TOURS
      </h2>

      <div className="popular-tours__gallery">
        <article className="popular-tours__peek popular-tours__peek--left">
          <Link className="popular-tours__peek-link" to={`/tours/${leftTour.id}`}>
            <img src={leftTour.image} alt={leftTour.title} />
          </Link>
        </article>

        <article className="popular-tours__feature">
          <Link className="popular-tours__feature-link" to={`/tours/${featuredTour.id}`}>
            <img src={featuredTour.image} alt={featuredTour.title} />

            <div className="popular-tours__card">
              <p>{featuredTour.subtitle}</p>
              <h3>{featuredTour.title}</h3>
            </div>
          </Link>
        </article>

        <article className="popular-tours__peek popular-tours__peek--right">
          <Link className="popular-tours__peek-link" to={`/tours/${rightTour.id}`}>
            <img src={rightTour.image} alt={rightTour.title} />
          </Link>
        </article>
      </div>
    </section>
  )
}

export default PopularTours
