import { ArrowIcon } from '../../icons'
import { iconSize } from '../../../tokens/size'
import './SectionHeader.scss'

function SectionHeader({ title, moreLabel = '더보기' }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <a href="/" aria-label={`${title} ${moreLabel}`}>
        {moreLabel}
        <ArrowIcon size={iconSize.xxs} className="section-header__more-icon" aria-hidden="true" />
      </a>
    </div>
  )
}

export default SectionHeader
