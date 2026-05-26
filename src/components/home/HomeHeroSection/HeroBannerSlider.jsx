function HeroBannerSlider({ banners }) {
  const [banner] = banners

  return (
    <article className="hero-banner">
      <img src={banner.image} alt="" className="hero-banner__image" />
      <div className="hero-banner__content">
        {banner.title.split('\n').map((line) => (
          <strong key={line}>{line}</strong>
        ))}
      </div>
      <div className="hero-banner__pagination" aria-hidden="true">
        <span />
        <span />
      </div>
    </article>
  )
}

export default HeroBannerSlider
