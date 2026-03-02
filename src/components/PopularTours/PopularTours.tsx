import { Link } from 'react-router-dom'
import { getPlanPath, popularPlans } from '../../data/tours'
import PlanImage from '../PlanImage/PlanImage'
import './PopularTours.css'

function PopularTours() {
  const featuredTour = popularPlans[0]
  const leftTour = popularPlans[1] ?? featuredTour
  const rightTour = popularPlans[2] ?? featuredTour

  if (!featuredTour) return null

  return (
    <section className="popular-tours" aria-labelledby="popular-tours-heading">
      <p className="popular-tours__eyebrow">02 TOURS</p>
      <h2 id="popular-tours-heading" className="popular-tours__title">
        POPULAR TOURS
      </h2>

      <div className="popular-tours__gallery">
        <article className="popular-tours__peek popular-tours__peek--left">
          <Link className="popular-tours__peek-link" to={getPlanPath(leftTour)}>
            <PlanImage plan={leftTour} alt={leftTour.title} />
          </Link>
        </article>

        <article className="popular-tours__feature">
          <Link className="popular-tours__feature-link" to={getPlanPath(featuredTour)}>
            <PlanImage plan={featuredTour} alt={featuredTour.title} />

            <div className="popular-tours__card">
              <p>DISCOVER MORE</p>
              <h3>{featuredTour.title}</h3>
            </div>
          </Link>
        </article>

        <article className="popular-tours__peek popular-tours__peek--right">
          <Link className="popular-tours__peek-link" to={getPlanPath(rightTour)}>
            <PlanImage plan={rightTour} alt={rightTour.title} />
          </Link>
        </article>
      </div>
    </section>
  )
}

export default PopularTours
