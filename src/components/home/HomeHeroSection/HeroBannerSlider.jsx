import { useEffect, useRef, useState } from 'react'

const AUTO_SLIDE_DELAY = 4000
const SWIPE_THRESHOLD = 40

function HeroBannerSlider({ banners }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(null)
  const hasMultipleBanners = banners.length > 1
  const getBannerAtOffset = (offset) => banners[(activeIndex + offset) % banners.length]

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
    >
      <div className="hero-banner__stage">
        {hasMultipleBanners && (
          <>
            <img
              src={getBannerAtOffset(1).image}
              alt=""
              className="hero-banner__preview hero-banner__preview--primary"
            />
            <img
              src={getBannerAtOffset(2).image}
              alt=""
              className="hero-banner__preview hero-banner__preview--secondary"
            />
          </>
        )}
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
          {activeIndex + 1} / {banners.length}
        </div>
      )}
    </article>
  )
}

export default HeroBannerSlider
