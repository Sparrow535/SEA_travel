import homeHeroImage from '../assets/Home/Home_hero.png'
import punakhaTsechuImage from '../assets/Packages/Punakha_tshechu.png'
import phobjikhaImage from '../assets/Packages/phobjikha.png'

export type PopularTour = {
  id: string
  title: string
  subtitle: string
  location: string
  image: string
  description: string
}

export type TourPackage = {
  id: string
  name: string
  duration: string
  price: string
}

export const popularTours: PopularTour[] = [
  {
    id: 'punakha-tsechu',
    title: 'PUNAKHA TSECHU',
    subtitle: 'DISCOVER MORE',
    location: 'Punakha, Bhutan',
    image: punakhaTsechuImage,
    description:
      "Experience Bhutan's vibrant spring celebration with sacred mask dances, monastic rituals, and valley village encounters."
  },
  {
    id: 'paro-valley-culture',
    title: 'PARO VALLEY CULTURE',
    subtitle: 'DISCOVER MORE',
    location: 'Paro, Bhutan',
    image: phobjikhaImage,
    description:
      "Explore heritage dzongs, local artisan spaces, and scenic trails woven through Paro's historic valleys and monasteries."
  },
  {
    id: 'thimphu-heritage',
    title: 'THIMPHU HERITAGE',
    subtitle: 'DISCOVER MORE',
    location: 'Thimphu, Bhutan',
    image: homeHeroImage,
    description:
      "Discover the capital's living culture with temple visits, craft markets, and curated local experiences across Thimphu."
  },
]

export const tourPackages: TourPackage[] = [
  {
    id: 'culture-loop',
    name: 'Culture Loop',
    duration: '5 Days',
    price: 'From $1,450',
  },
  {
    id: 'festival-signature',
    name: 'Festival Signature',
    duration: '7 Days',
    price: 'From $2,180',
  },
  {
    id: 'highland-escape',
    name: 'Highland Escape',
    duration: '9 Days',
    price: 'From $2,760',
  },
]

export const getPopularTourById = (id: string) => popularTours.find((tour) => tour.id === id)
