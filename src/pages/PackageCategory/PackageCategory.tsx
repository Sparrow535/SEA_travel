import { Link, useParams } from 'react-router-dom'
import './PackageCategory.css'

const packageCopy: Record<string, { title: string; description: string }> = {
  cultural: {
    title: 'CULTURAL',
    description:
      'Discover temples, monasteries, heritage towns, and local traditions through guided cultural journeys.'
  },
  adventures: {
    title: 'ADVENTURES',
    description:
      'Explore mountain trails, valley routes, and immersive outdoor activities crafted for active travelers.'
  },
  festivals: {
    title: 'FESTIVALS',
    description:
      'Experience vibrant ceremonies, mask dances, and authentic seasonal celebrations across Bhutan.'
  }
}

function PackageCategory() {
  const { category = '' } = useParams()
  const content = packageCopy[category.toLowerCase()]

  if (!content) {
    return (
      <main className="package-category">
        <div className="package-category__content">
          <h1>Category Not Found</h1>
          <Link className="package-category__back" to="/">
            Back To Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="package-category">
      <section className="package-category__content">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <Link className="package-category__back" to="/">
          Back To Home
        </Link>
      </section>
    </main>
  )
}

export default PackageCategory
