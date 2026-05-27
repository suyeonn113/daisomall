import HeartIcon from '../../icons/HeartIcon'
import { iconSize } from '../../../tokens/size'
import ProductCardLabel from './ProductCardLabel'

function ProductCardImage({ product }) {
  return (
    <div className="product-card__image-wrap">
      <img src={product.image} alt="" className="product-card__image" />
      {product.label ? <ProductCardLabel label={product.label} /> : null}
      <button type="button" className="product-card__wish" aria-label="찜하기">
        <HeartIcon 
          outerColor="white"
          innerColor="black"
          outerOpacity={0.9}
          innerOpacity={0.1}
          size={iconSize.sm} />
      </button>
    </div>
  )
}

export default ProductCardImage
