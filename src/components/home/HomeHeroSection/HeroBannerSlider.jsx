import { useEffect, useRef, useState } from 'react'

const AUTO_SLIDE_DELAY = 4000
const SWIPE_THRESHOLD = 40
const WHEEL_THRESHOLD = 30

function HeroBannerSlider({ banners }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(null)
  const wheelDeltaX = useRef(0)
  const hasMultipleBanners = banners.length > 1
  const getBannerAtOffset = (offset) => {
    const nextIndex = (activeIndex + offset + banners.length) % banners.length

    return banners[nextIndex]
  }
  const getPreviewBanners = () => {
    const offsets = []

    for (let index = 1; index < banners.length; index += 1) {
      offsets.push(-index, index)
    }

    return offsets
      .map((offset) => getBannerAtOffset(offset))
      .filter(
        (banner, index, previewBanners) =>
          banner.id !== getBannerAtOffset(0).id &&
          previewBanners.findIndex((previewBanner) => previewBanner.id === banner.id) === index,
      )
  }

  const goToPreviousBanner = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? banners.length - 1 : currentIndex - 1,
    )
  }

  const goToNextBanner = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === banners.length - 1 ? 0 : currentIndex + 1,
    )
  }

  const handlePointerDown = (event) => {
    if (!hasMultipleBanners) return

    touchStartX.current = event.clientX
  }

  const handlePointerUp = (event) => {
    if (!hasMultipleBanners || touchStartX.current === null) return

    const swipeDistance = event.clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(swipeDistance) < SWIPE_THRESHOLD) return

    if (swipeDistance > 0) {
      goToPreviousBanner()
      return
    }

    goToNextBanner()
  }

  const handleWheel = (event) => {
    if (!hasMultipleBanners || !event.shiftKey) return

    event.preventDefault()
    wheelDeltaX.current += event.deltaX || event.deltaY

    if (Math.abs(wheelDeltaX.current) < WHEEL_THRESHOLD) return

    if (wheelDeltaX.current > 0) {
      goToNextBanner()
    } else {
      goToPreviousBanner()
    }

    wheelDeltaX.current = 0
  }

  useEffect(() => {
    if (!hasMultipleBanners) return undefined

    const timerId = window.setInterval(goToNextBanner, AUTO_SLIDE_DELAY)

    return () => {
      window.clearInterval(timerId)
    }
  }, [hasMultipleBanners])

  return (
    <article
      className="hero-banner"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        touchStartX.current = null
      }}
      onWheel={handleWheel}
    >
      <div className="hero-banner__stage">
        {hasMultipleBanners &&
          getPreviewBanners().map((banner) => (
            <div
              key={banner.id}
              className={`hero-banner__preview`}
            >
              <img src={banner.image} alt="" />
              <div className="hero-banner__preview-title">
                {banner.title.split('\n').map((line) => (
                  <strong key={line}>{line}</strong>
                ))}
              </div>
            </div>
          ))}
        <div className="hero-banner__poster" key={getBannerAtOffset(0).id}>
          <img src={getBannerAtOffset(0).image} alt="" className="hero-banner__image" />
          <div className="hero-banner__content">
            {getBannerAtOffset(0).title.split('\n').map((line) => (
              <strong key={line}>{line}</strong>
            ))}
            <span>{getBannerAtOffset(0).subtitle}</span>
          </div>
        </div>
      </div>
      {hasMultipleBanners && (
        <div className="hero-banner__pagination" aria-hidden="true">
          {banners.map((banner, index) => (
            <span
              key={banner.id}
              className={index === activeIndex ? 'is-active' : undefined}
            />
          ))}
        </div>
      )}
    </article>
  )
}

export default HeroBannerSlider
