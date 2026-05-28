import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../../data/products'
import { formatPrice } from '../../../utils/formatPrice'

function NewArrivalVideoCard({ content }) {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const relatedProducts = content.relatedProductIds
    ?.map((productId) => products.find((product) => product.id === productId))
    .filter(Boolean)
    ?? []

  return (
    <article className="new-arrival-card">
      <div className="new-arrival-card__media">
        <img src={content.image} alt="" />
        {relatedProducts.length ? (
          <button
            type="button"
            className="new-arrival-card__product-toggle"
            aria-expanded={isProductsOpen}
            onClick={() => setIsProductsOpen((current) => !current)}
          >
            {isProductsOpen ? '상품 닫기' : '상품 보기'}
          </button>
        ) : null}
        <div className="new-arrival-card__copy">
          {content.subtitle ? <span>{content.subtitle}</span> : null}
          <strong>{content.title}</strong>
        </div>
        {isProductsOpen ? (
          <div className="new-arrival-card__products" aria-label="관련상품">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="new-arrival-card__product"
              >
                <img src={product.image} alt="" />
                <span>
                  <strong>{formatPrice(product.price)}</strong>
                  <em>{product.name}</em>
                </span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default NewArrivalVideoCard
