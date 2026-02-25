import './Home.css'

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
        <h2 className="home-content-1__heading">Discover Your Next Spiritual Escape</h2>
      </div>
    </>
  )
}

export default Home
