import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../../../hooks/useProducts'
import { formatPrice } from '../../../utils/formatPrice'
import { getPublicAssetPath } from '../../../utils/getPublicAssetPath'

function NewArrivalVideoCard({ content }) {
  const {products} = useProducts();
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const relatedProducts = useMemo(()=>{
    if(!products) return [];
    return products.filter((products)=>content.relatedProductIds.includes(products.id))
  },[products, content.relatedProductIds]);

  return (
    <article className="new-arrival-card">
      <div className="new-arrival-card__media">
        <video src={getPublicAssetPath(content.image)} autoPlay loop muted playsInline />
        {/*<img src={getPublicAssetPath(content.image)} alt="" />*/}
        {relatedProducts.length ? (
          <button
            type="button"
            className="new-arrival-card__product-toggle"
            aria-expanded={isProductsOpen}
            onClick={() => setIsProductsOpen((current) => !current)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M11 5.5V16.5M5.5 11H16.5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="square"
              />
            </svg>
          </button>
        ) : null}
        <div className="new-arrival-card__copy">
          {content.subtitle ? <span>{content.subtitle}</span> : null}
          <strong>{content.title}</strong>
        </div>
        {isProductsOpen ? (
          <div className="new-arrival-card__products" aria-label="관련상품">
            <div className="new-arrival-card__product-list">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="new-arrival-card__product"
                >
                  <img src={getPublicAssetPath(product.image)} alt="" />
                  <span>
                    <strong>{formatPrice(product.price)}</strong>
                    <em>{product.name}</em>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default NewArrivalVideoCard
