import HeartIcon from '../../icons/HeartIcon'
import { iconSize } from '../../../tokens/size'
import { getPublicAssetPath } from '../../../utils/getPublicAssetPath'
import ProductCardLabel from './ProductCardLabel'

function ProductCardImage({ product, showWish = true }) {
  return (
    <div className="product-card__image-wrap">
      <img src={getPublicAssetPath(product.image)} alt="" className="product-card__image" />
      {product.label ? <ProductCardLabel label={product.label} /> : null}
      {showWish ? (
        <button type="button" className="product-card__wish" aria-label="찜하기">
          <HeartIcon
            outerColor="var(--color-white)"
            innerColor="var(--color-black)"
            outerOpacity={0.9}
            innerOpacity={0.1}
            size={iconSize.sm}
          />
        </button>
      ) : null}
    </div>
  )
}

export default ProductCardImage
