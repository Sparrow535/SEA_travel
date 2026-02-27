import './Home.css'
import { Link } from 'react-router-dom'
import ActionButton from '../../components/ActionButton/ActionButton'
import PopularTours from '../../components/PopularTours/PopularTours'
import contentHeader from '../../assets/Home/content1.svg'
import vector1 from '../../assets/Home/Vector1.svg'
import package1 from '../../assets/Home/package1.png'
import package2 from '../../assets/Home/package2.png'
import vector2 from '../../assets/Home/Vector2.svg'
import vector3 from '../../assets/Home/Vector3.svg'

const packageCategoryLinks = [
  { label: 'CULTURAL', path: '/packages/cultural' },
  { label: 'ADVENTURES', path: '/packages/adventures' },
  { label: 'FESTIVALS', path: '/packages/festivals' },
]

function Home() {
  return (
    <>
      <div className="home-hero">
        <div className="home-hero__bottom">
          <p className="home-hero__phrase home-hero__phrase--left">
            More than
            <br />
            destination.
          </p>

          <div className="home-hero__scroll" aria-label="Scroll down indicator">
            <span>Scroll Down</span>
            <span className="home-hero__scroll-arrow" aria-hidden="true">
              ↓
            </span>
          </div>

          <p className="home-hero__phrase home-hero__phrase--right">
            It's an
            <br />
            experience.
          </p>
        </div>
      </div>
      <div className="home-content-1">
        <img className="home-content-1__vector" src={vector1} alt="" aria-hidden="true" />
        <div className="small_header">
          <h5>01 WHY US</h5>
        </div>
        <div className="home-content-1__main">
          <div className="content_header">
            <img src={contentHeader} alt="header" />
          </div>
          <div className="content_para">
            <p>
              At Spiritual Escape Adventures, we believe that true peace is found in simplicity. We
              curate transformative journeys that take you away from the noise and into nature where
              you can reconnect with yourself, one mindful step at a time.
            </p>
            <ActionButton text="Get More Information" size="md" theme="primary" />
          </div>
        </div>
      </div>
      <PopularTours />
      <div className="packages_section">
        <div className="container-1">
          <img className="packages_section__vector" src={vector2} alt="" aria-hidden="true" />
          <div className="container-1__left">
            <div className="eyebrow">03 Packages</div>
            <div className="text">YOUR CHOICE OF ADVENTURE</div>
          </div>
          <div className="container-1__right">
            <img src={package1} alt="package" />
          </div>
        </div>
        <div className="container-2">
          <div className="container-2__left">
            <img src={package2} alt="package" />
          </div>
          <div className="container-2__right">
            <nav className="package-links" aria-label="Package categories">
              {packageCategoryLinks.map((item) => (
                <Link key={item.path} to={item.path} className="package-links__item">
                  <span>{item.label}</span>
                  <span className="package-links__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <img className="packages_section__vector-end" src={vector3} alt="" aria-hidden="true" />
      </div>

      <div className="content-3">
        <div className="text-1">
          Entrust us with the <br />
          routine and free up time <br />
          for more important things
        </div>
        <div className="text-2">
          Comfort and care for each client is our <br />
          main goal. Established connections allow <br />
          us to solve any task during your stay.
        </div>
      </div>
    </>
  )
}
export default Home
