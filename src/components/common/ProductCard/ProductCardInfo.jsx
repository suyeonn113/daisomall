import { formatPrice } from '../../../utils/formatPrice'

function ProductCardInfo({ product }) {
  return (
    <div className="product-card__info">
      <strong>{formatPrice(product.price)}</strong>
      <p>{product.name}</p>
      <span>
        ★ {product.rating} ({product.reviewCount.toLocaleString()})
      </span>
    </div>
  )
}

export default ProductCardInfo
