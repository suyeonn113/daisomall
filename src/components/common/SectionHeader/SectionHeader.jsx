import './SectionHeader.scss'

function SectionHeader({ title, moreLabel = '더보기' }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <a href="/" aria-label={`${title} ${moreLabel}`}>
        {moreLabel}
      </a>
    </div>
  )
}

export default SectionHeader
