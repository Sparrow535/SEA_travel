import './Packages.css'
import PlanCardsSection from '../../components/PlanCardsSection/PlanCardsSection'
import { getPlansByType } from '../../data/tours'
import Vector from '../../assets/Packages/Vector.svg'
import Content1 from '../../assets/Packages/content1.png'
import Content2 from '../../assets/Packages/content2.png'
import Content3 from '../../assets/Packages/content3.png'
import HeritageImg from '../../assets/Packages/heritage.png'
import { scrollToElementById } from '../../utils/scroll'

const packageSectionLinks = [
  { label: 'HERITAGE PATHS', targetId: 'heritage-paths' },
  { label: 'SUMMIT & SOUL', targetId: 'summit-soul' },
  { label: 'SACRED CELEBRATIONS', targetId: 'sacred-celebrations' },
]

function Packages() {
  const culturalPlans = getPlansByType('cultural')
  const trekPlans = getPlansByType('trek')
  const festivalPlans = getPlansByType('festivals')

  const handleScrollToSection = (targetId: string) => {
    scrollToElementById(targetId, 'smooth')
  }

  return (
    <>
      <div className="package__hero">
        <h1>
          Unique <br />
          BHUTANESE <br />
          Experiences
        </h1>
      </div>
      <div className="content__1">
        <img
          src={Vector}
          alt="Vector illustration"
          className="content__1__vector"
          loading="lazy"
          decoding="async"
        />
        <h2 className="text">
          Let us tailor your next luxury holiday <br />
          destinations
        </h2>
        <div className="left">
          <img src={Content1} alt="Content 1" className="top" loading="lazy" decoding="async" />
          <img
            src={Content3}
            alt="Content 2"
            className="bottom"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="right">
          <img src={Content2} alt="Content 3" loading="lazy" decoding="async" />
          <p>
            In Bhutan, Gross National Happiness is more than a philosophy it's a way of life.
            Ancient traditions breathe alongside pristine nature, inviting you to trek unspoiled
            landscapes, explore sacred monasteries, or simply sit in silence as the peace of Paro
            Valley washes over you. <br />
            <br />
            From subtropical jungles to high Himalayan passes, we craft journeys that go beyond
            sightseeing they touch something deeper.
          </p>
        </div>
      </div>

      <div className="packages__section-nav" aria-label="Package section navigation">
        {packageSectionLinks.map((sectionLink) => (
          <button
            key={sectionLink.targetId}
            className="packages__section-nav-button"
            type="button"
            onClick={() => handleScrollToSection(sectionLink.targetId)}
          >
            {sectionLink.label}
          </button>
        ))}
      </div>

      <div className="heritage__paths" id="heritage-paths">
        <h2 className="heritage_text">HERITAGE PATHS</h2>
        <div className="heritage_left">
          Step beyond the guidebooks and into the rhythm of daily life in the Himalayas. Visit
          ancient dzongs that have stood for centuries, wander through villages where traditions
          remain untouched by time, and sit quietly in monasteries where the only sound is the
          whisper of prayer flags in the wind. These are not just sightseeing tours they are
          invitations to connect, to learn, and to feel the gentle pulse of a culture still very
          much alive.
        </div>
        <div className="heritage_right">
          <img src={HeritageImg} alt="Heritage" loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="packages__plan-cards-wrap">
        <PlanCardsSection plans={culturalPlans} />
      </div>

      <div className="summit__soul" id="summit-soul">
        <h2 className="summit_text">SUMMIT & SOULS</h2>
        <p className="summit_content">
          Bhutan's mountains are more than a backdrop; they are a presence. Trek through pristine
          forests, and cross high Himalayan passes. Whether you're conquering one of the world's
          most challenging trails or simply walking in silence through ancient valleys, every step
          is a conversation with the land. Adventure here is not about conquering nature it's about
          reconnecting with it, and with yourself.
        </p>
      </div>
      <div className="packages__plan-cards-wrap">
        <PlanCardsSection plans={trekPlans} />
      </div>

      <div className="sacred__celebrations" id="sacred-celebrations">
        <h2 className="celebrations__text">SACRED CELEBRATIONS</h2>
        <p className="celebrations__content">
          Bhutan's festivals, or Tshechus, are explosions of color, music, and devotion but they are
          also something deeper. Sacred mask dances tell stories of gods and demons, of good
          triumphing over evil, passed down through centuries. Locals dress in their finest silk,
          families gather, and for a few days, the entire kingdom celebrates together. To witness a
          Tshechu is to see Bhutan at its most joyful, its most devout, its most alive.
        </p>
      </div>
      <div className="packages__plan-cards-wrap">
        <PlanCardsSection plans={festivalPlans} />
      </div>
    </>
  )
}

export default Packages
