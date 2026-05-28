export function getPublicAssetPath(path) {
  if (!path || !path.startsWith('/')) return path

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
