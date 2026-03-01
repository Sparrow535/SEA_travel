import './About.css'
import ActionButton from '../../components/ActionButton/ActionButton'
import vect1 from '../../assets/About/vect1.png'
import Abt from '../../assets/About/abt1.png'
import Abt2 from '../../assets/About/Abt2.png'
import Abt3 from '../../assets/About/abt3.png'
import Phill from '../../assets/About/Phill.png'



function Home() {
  return (
    <>
      <div className="about-hero">
        <div className="about-hero__bottom">
          <p className="about-hero__phrase about-hero__phrase--left">STORY</p>
        </div>
      </div>

      <div className="about-content-1">
        <img className="about-content-1__vector" src={vect1} alt="" aria-hidden="true" />
        <div className="about-content-1__main">
          <div className="about-content-1__para">
            <p>
              What started as quiet walks and personal retreats slowly grew into a desire to share these
               moments with others. We began curating small, intentional journeys for those seeking more than just a vacation  for those longing for meaning, silence, and a sense of belonging.
            </p>
            <ActionButton text="Contact Us" size="md" theme="primary" href="#contact" />
          </div>
        </div>
      </div>
      <div className="about-purpose">
        <p className="about-purpose__headline">
           To create space for stillness. To guide travelers toward inner peace through meaningful 
           connections with nature. To remind people that the most important destination is often within.
        </p>

        <p className="about-purpose__text">
            Spiritual Escape Adventures was born from a simple idea: that true peace is found in
            simplicity, and that nature is the most sacred space to reconnect with who you truly are.
        </p>
    </div>

      <div className="about-gallery">
        <div className="about-gallery__side about-gallery__side--left">
            <img src={Abt2} alt="Traveler by the river" />
        </div>

        <div className="about-gallery__main">
            <img src={Abt} alt="Mountain village landscape" />
        </div>

        <div className="about-gallery__side about-gallery__side--right">
            <img src={Abt3} alt="Traditional local food" />
        </div>
    </div>
    <div className="about-philosophy">
  <div className="about-philosophy__image">
    <img src={Phill} alt="Candle lights representing stillness and meditation" />
  </div>

  <div className="about-philosophy__content">
    <h2>OUR PHILOSOPHY</h2>
    <p>We believe travel should transform, not just transport.</p>
    <p>Every journey with us is designed with real intention:</p>
    <ul>
      <li>to quiet the mind and awaken the soul</li>
      <li>to walk gently through ancient forests and sacred lands</li>
      <li>to offer moments of meditation, breath, and presence</li>
      <li>to reconnect you with what is simple, true, and real</li>
      <li>to return home lighter, clearer, and more yourself</li>
    </ul>
  </div>
</div>

    </>
  )
}
export default Home
