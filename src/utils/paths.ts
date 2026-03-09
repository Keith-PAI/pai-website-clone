/** Prepend the Astro base path to an absolute URL path. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  // base already has trailing slash, path has leading slash — avoid double slash
  return base + path.replace(/^\//, '');
}
