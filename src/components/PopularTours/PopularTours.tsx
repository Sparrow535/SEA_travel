import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHourlyPopularPlans, getPlanPath, type TravelPlan } from '../../data/tours'
import PlanImage from '../PlanImage/PlanImage'
import './PopularTours.css'

const AUTO_SLIDE_INTERVAL_MS = 5000

const getPosition = (index: number, activeIndex: number, total: number) => {
  if (index === activeIndex) return 'center'
  if (index === (activeIndex - 1 + total) % total) return 'left'
  return 'right'
}

function PopularTours() {
  const [featuredPlans, setFeaturedPlans] = useState<TravelPlan[]>(() => getHourlyPopularPlans())
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const galleryRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let timeoutId: ReturnType<typeof window.setTimeout>

    const scheduleNextRefresh = () => {
      const now = new Date()
      const nextHour = new Date(now)
      nextHour.setMinutes(60, 0, 0)

      timeoutId = window.setTimeout(() => {
        setFeaturedPlans(getHourlyPopularPlans(new Date()))
        scheduleNextRefresh()
      }, nextHour.getTime() - now.getTime())
    }

    scheduleNextRefresh()

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    setActiveIndex(0)
  }, [featuredPlans])

  useEffect(() => {
    if (featuredPlans.length <= 1 || isPaused || !isInView) return

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % featuredPlans.length)
    }, AUTO_SLIDE_INTERVAL_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [featuredPlans.length, isPaused, isInView])

  useEffect(() => {
    const gallery = galleryRef.current

    if (!gallery) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.35 }
    )

    observer.observe(gallery)

    return () => {
      observer.disconnect()
    }
  }, [])

  const goToPrevious = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + featuredPlans.length) % featuredPlans.length
    )
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % featuredPlans.length)
  }

  if (featuredPlans.length === 0) return null

  return (
    <section className="popular-tours" aria-labelledby="popular-tours-heading">
      <p className="popular-tours__eyebrow">02 TOURS</p>
      <h2 id="popular-tours-heading" className="popular-tours__title">
        POPULAR TOURS
      </h2>

      <div
        className="popular-tours__gallery"
        ref={galleryRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        {featuredPlans.map((plan, index) => {
          const position = getPosition(index, activeIndex, featuredPlans.length)
          const isCenter = position === 'center'

          return (
            <article
              key={`${plan.type}-${plan.title}`}
              className={`popular-tours__item popular-tours__item--${position}`}
            >
              <Link
                className={`popular-tours__item-link ${
                  isCenter ? 'popular-tours__item-link--feature' : 'popular-tours__item-link--peek'
                }`}
                to={getPlanPath(plan)}
              >
                <PlanImage
                  plan={plan}
                  alt={plan.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />

                {!isCenter && <span className="popular-tours__peek-mask" aria-hidden="true" />}

                {isCenter && (
                  <div className="popular-tours__card">
                    <p>DISCOVER MORE</p>
                    <h3>{plan.title}</h3>
                  </div>
                )}
              </Link>
            </article>
          )
        })}
      </div>

      {featuredPlans.length > 1 && (
        <div className="popular-tours__controls" aria-label="Popular tours slider controls">
          <button
            type="button"
            className="popular-tours__control"
            onClick={goToPrevious}
            aria-label="Show previous popular tour"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="popular-tours__control"
            onClick={goToNext}
            aria-label="Show next popular tour"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </section>
  )
}

export default PopularTours
