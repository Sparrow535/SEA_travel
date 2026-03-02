import { Link } from 'react-router-dom'
import { getPlanPath, type TravelPlan } from '../../data/tours'
import PlanImage from '../PlanImage/PlanImage'
import './PlanCardsSection.css'

type PlanCardsSectionProps = {
  plans: TravelPlan[]
}

function PlanCardsSection({ plans }: PlanCardsSectionProps) {
  if (plans.length === 0) return null

  return (
    <div className="plan-cards-section">
      <div className="plan-cards-section__track">
        {plans.map((plan) => (
          <Link
            key={`${plan.type}-${plan.title}`}
            className="plan-cards-section__card-link"
            to={getPlanPath(plan)}
            aria-label={`Discover more about ${plan.title}`}
          >
            <article className="plan-cards-section__card">
              <PlanImage
                plan={plan}
                alt={plan.title}
                loading="lazy"
                decoding="async"
                draggable={false}
              />

              <span className="plan-cards-section__days">{plan.days} DAYS</span>

              <div className="plan-cards-section__content">
                <h3>{plan.title}</h3>
                <span className="plan-cards-section__link">Discover More</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PlanCardsSection
