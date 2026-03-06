import { useEffect, useState, type ImgHTMLAttributes } from 'react'

type ResolvedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  sources: string[]
  fallbackSources?: string[]
}

function ResolvedImage({
  sources,
  fallbackSources = [],
  alt,
  onError,
  ...imgProps
}: ResolvedImageProps) {
  const resolvedSources = [...sources, ...fallbackSources]
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0)
  const sourceKey = resolvedSources.join('|')

  useEffect(() => {
    setCurrentSourceIndex(0)
  }, [sourceKey])

  const handleError: ImgHTMLAttributes<HTMLImageElement>['onError'] = (event) => {
    if (currentSourceIndex < resolvedSources.length - 1) {
      setCurrentSourceIndex((index) => index + 1)
      return
    }

    onError?.(event)
  }

  return (
    <img
      {...imgProps}
      src={resolvedSources[currentSourceIndex] ?? ''}
      alt={alt}
      onError={handleError}
    />
  )
}

export default ResolvedImage
