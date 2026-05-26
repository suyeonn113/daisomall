function FeatureShortcutButton({ shortcut }) {
  return (
    <button type="button" className="feature-shortcut-button">
      <img src={shortcut.image} alt="" />
      <span>{shortcut.label}</span>
    </button>
  )
}

export default FeatureShortcutButton
