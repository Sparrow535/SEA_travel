import { useEffect, useMemo, useState, type ImgHTMLAttributes } from 'react'
import { getPlanImageSources, type TravelPlan } from '../../data/tours'

type PlanImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  plan: TravelPlan
}

function PlanImage({ plan, alt, onError, ...imgProps }: PlanImageProps) {
  const imageSources = useMemo(() => getPlanImageSources(plan), [plan])
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0)

  useEffect(() => {
    setCurrentSourceIndex(0)
  }, [imageSources])

  const handleError: ImgHTMLAttributes<HTMLImageElement>['onError'] = (event) => {
    if (currentSourceIndex < imageSources.length - 1) {
      setCurrentSourceIndex((index) => index + 1)
      return
    }

    onError?.(event)
  }

  return <img {...imgProps} src={imageSources[currentSourceIndex] ?? ''} alt={alt ?? plan.title} onError={handleError} />
}

export default PlanImage
