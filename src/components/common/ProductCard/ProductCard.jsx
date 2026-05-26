import ProductCardImage from './ProductCardImage'
import ProductCardInfo from './ProductCardInfo'
import './ProductCard.scss'

function ProductCard({ product, rank }) {
  return (
    <article className="product-card">
      {rank ? <strong className="product-card__rank">{rank}</strong> : null}
      <ProductCardImage product={product} />
      <ProductCardInfo product={product} />
    </article>
  )
}

export default ProductCard
