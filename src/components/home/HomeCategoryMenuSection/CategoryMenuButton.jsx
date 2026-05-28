import { getPublicAssetPath } from '../../../utils/getPublicAssetPath'

function CategoryMenuButton({ category }) {
  return (
    <a className="category-menu-button" href={`/category/${category.id}`}>
      <img src={getPublicAssetPath(category.image)} alt="" />
      <span>{category.label}</span>
    </a>
  )
}

export default CategoryMenuButton
