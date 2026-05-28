import { getPublicAssetPath } from '../../../utils/getPublicAssetPath'

function FeatureShortcutButton({ shortcut }) {
  return (
    <button type="button" className="feature-shortcut-button">
      <img src={getPublicAssetPath(shortcut.image)} alt="" />
      <span>{shortcut.label}</span>
    </button>
  )
}

export default FeatureShortcutButton
