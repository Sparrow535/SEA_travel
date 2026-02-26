import './Home.css'
import ActionButton from '../../components/ActionButton/ActionButton'
import contentHeader from '../../assets/Home/content1.svg'
import vector1 from '../../assets/Home/Vector1.svg'

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
    </>
  )
}
export default Home
