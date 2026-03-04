import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPlanBySlug } from '../../data/tours'
import PlanImage from '../../components/PlanImage/PlanImage'
import introImageLeft from '../../assets/Tours/content1.png'
import introImageRight from '../../assets/Tours/content2.png'
import introVector from '../../assets/Tours/Vector.svg'
import itineraryImage from '../../assets/Tours/iterinary1.png'
import itineraryVectorTop from '../../assets/Tours/Vector2.svg'
import itineraryVectorBottom from '../../assets/Tours/Vector3.svg'
import './TourDetails.css'

function TourDetails() {
  const { tourId = '' } = useParams()
  const tour = getPlanBySlug(tourId)
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)

  useEffect(() => {
    setSelectedDayIndex(0)
  }, [tourId])

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

  const selectedDayPlan = tour.dayPlans[selectedDayIndex] ?? tour.dayPlans[0]

  return (
    <main className="tour-details">
      <section className="tour-details__hero">
        <PlanImage className="tour-details__hero-image" plan={tour} alt={tour.title} />
        <div className="tour-details__hero-overlay" aria-hidden="true" />
        <div className="tour-details__hero-content">
          <h1>{tour.title}</h1>
        </div>
      </section>

      <section className="tour-details__story">
        <img className="tour-details__story-vector" src={introVector} alt="" aria-hidden="true" />
        <div className="tour-details__story-media tour-details__story-media--left">
          <img src={introImageLeft} alt="" aria-hidden="true" />
        </div>
        <h2>THE KINGDOM&apos;S SOUL</h2>
        <div className="tour-details__story-media tour-details__story-media--right">
          <img src={introImageRight} alt="" aria-hidden="true" />
        </div>
        <div className="tour-details__story-copy">
          <p>{tour.shortDesc}</p>
          <a
            className="tour-details__brochure"
            href={tour.brochurePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Brochure
          </a>
        </div>
      </section>

      <section className="tour-details__planner" aria-labelledby="tour-details-planner-title">
        <img
          className="tour-details__planner-vector tour-details__planner-vector--top"
          src={itineraryVectorTop}
          alt=""
          aria-hidden="true"
        />
        <img
          className="tour-details__planner-vector tour-details__planner-vector--bottom"
          src={itineraryVectorBottom}
          alt=""
          aria-hidden="true"
        />

        <div className="tour-details__planner-list">
          <h2 id="tour-details-planner-title">PLANNED ITINERARY</h2>
          <div className="tour-details__planner-days" aria-label="Tour itinerary days">
            {tour.dayPlans.map((dayPlan, index) => (
              <div
                key={`${tour.title}-${dayPlan.day}`}
                className={`tour-details__planner-item${
                  index === selectedDayIndex ? ' tour-details__planner-item--active' : ''
                }`}
              >
                <button
                  className={`tour-details__planner-day${
                    index === selectedDayIndex ? ' tour-details__planner-day--active' : ''
                  }`}
                  type="button"
                  aria-expanded={index === selectedDayIndex}
                  aria-controls={`tour-day-panel-${dayPlan.day}`}
                  onClick={() => setSelectedDayIndex(index)}
                >
                  <span>
                    Day {dayPlan.day} - {dayPlan.title}
                  </span>
                  <span className="tour-details__planner-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </button>

                <div
                  id={`tour-day-panel-${dayPlan.day}`}
                  className="tour-details__planner-panel"
                  aria-hidden={index !== selectedDayIndex}
                >
                  <p className="tour-details__planner-panel-copy">{dayPlan.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tour-details__planner-preview">
          <img src={itineraryImage} alt="" aria-hidden="true" />
          <div className="tour-details__planner-overlay" />
          <div className="tour-details__planner-copy">
            <p className="tour-details__planner-day-label">Day {selectedDayPlan.day}</p>
            <p className="para">{selectedDayPlan.desc}</p>
          </div>
        </div>
      </section>
      <section className="tour__end" aria-hidden="true">
        <div className="tour__end-rectangle" />
      </section>
    </main>
  )
}

export default TourDetails
