import { useState } from 'react'
import './F&Q.css'

const faqItems = [
  {
    q: 'WHY SHOULD I CHOOSE SPIRITUAL ESCAPE ADVENTURE?',
    a: 'Spiritual Escape Adventure focuses on carefully designed Bhutan journeys that balance cultural depth, scenic travel, and personal comfort. Rather than rushing between landmarks, we plan trips that give you enough time to experience monasteries, valleys, local traditions, festivals, and daily life in a more meaningful way. We also support travelers with trip planning, local coordination, transport, and on-ground guidance so the journey feels smooth from arrival to departure.',
  },
  {
    q: 'CAN I BOOK A SHORT TRIP OR ONLY A FEW DAYS?',
    a: 'Yes. If you do not have time for a long itinerary, we can help arrange shorter experiences based on your arrival point, available dates, and interests. This can include cultural sightseeing, monastery visits, valley excursions, festival days, or a compact Bhutan highlight tour. Short trips still need proper planning, so it is best to contact us early with your travel dates and preferred experience.',
  },
  {
    q: 'WHAT SERVICES DO YOU OFFER?',
    a: 'We offer cultural tours, festival journeys, trekking-focused itineraries, and custom travel planning within Bhutan. Depending on the package, this can include itinerary design, local transportation, guiding support, accommodation coordination, sightseeing arrangements, and assistance with general travel flow. We aim to provide a complete and well-organized experience rather than only individual bookings.',
  },
  {
    q: 'CAN YOU CUSTOMIZE A TOUR FOR MY INTERESTS?',
    a: 'Yes. If you are interested in culture, festivals, spirituality, photography, trekking, slower wellness-oriented travel, or a mix of experiences, we can shape the itinerary around that. We can also adjust the pace of the journey, the number of nights in each destination, and the overall route depending on your group size, travel season, and time available.',
  },
  {
    q: 'WHAT IS USUALLY INCLUDED IN A TOUR?',
    a: 'What is included depends on the package you choose, but most tours are structured around accommodation, guided touring, planned travel between destinations, and the activities listed in the itinerary. Some tours may also include special cultural visits, hikes, or festival access based on the route. Before confirming a booking, we recommend reviewing the final itinerary carefully so you know exactly what is covered and what should be prepared separately.',
  },
  {
    q: 'DO I NEED TO BE VERY FIT FOR THESE TOURS?',
    a: 'Not always. Many of our cultural and festival itineraries are suitable for travelers with average fitness, although some days may include walking, stairs, monastery climbs, or higher-altitude travel. Trekking itineraries require a stronger fitness level and better preparation. If you have concerns about mobility, altitude, or the pace of the trip, we can recommend the most suitable route before booking.',
  },
  {
    q: 'WHEN IS THE BEST TIME TO TRAVEL TO BHUTAN?',
    a: 'Bhutan can be visited in different seasons depending on the kind of experience you want. Spring and autumn are often preferred for clear mountain views, comfortable weather, and major festivals. Winter can be rewarding for quieter travel and certain valley experiences, while summer is greener and less predictable due to rain. The best time for you depends on whether your priority is trekking, festivals, scenic photography, or a calmer cultural journey.',
  },
  {
    q: 'CAN YOU HELP WITH LAST-MINUTE TRAVEL REQUESTS?',
    a: 'Yes, but it depends on timing, accommodation availability, transport arrangements, and the type of trip you want to take. Festival periods and peak travel seasons usually require earlier planning, while some shorter or simpler itineraries may still be possible on shorter notice. If your request is urgent, send your dates, group size, and travel goals as clearly as possible so we can assess the best options quickly.',
  },
]

export default function FQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-page">
      <h1 className="faq-page__title">FAQ</h1>

      <div className="faq-list">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <article key={item.q} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
              <button
                className="faq-card__head"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="faq-card__icon" aria-hidden="true">
                  →
                </span>
              </button>

              {item.a && (
                <div className="faq-card__body">
                  <div className="faq-card__body-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
