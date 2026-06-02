import ArrowIcon from '../../icons/ArrowIcon'
import TimeIcon from '../../icons/TimeIcon'
import { iconSize } from '../../../tokens/size'
import './FloatingActionButtons.scss'

function FloatingActionButtons() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="floating-action-buttons" aria-label="빠른 메뉴">
      <button type="button" className="floating-action-button" aria-label="최근 본 상품">
        <TimeIcon size={iconSize.sm}/>
      </button>
      <button
        type="button"
        className="floating-action-button floating-action-button--top"
        aria-label="위로가기"
        onClick={handleScrollTop}
      >
        <ArrowIcon size={iconSize.sm} />
      </button>
    </div>
  )
}

export default FloatingActionButtons
