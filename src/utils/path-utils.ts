export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = /\/([a-z]{2}-?[a-z]{0,2})\//.exec(pathname);
  return langCodeMatch ? langCodeMatch[1] : "en";
}

export function removeLeadingSlash(path: string) {
  return path.replace(/^[/\\]+/, "");
}

export function removeTrailingSlash(path: string) {
  return path.replace(/[/\\]+$/, "");
}

export const stripLangFromSlug = (slug: string) => slug.split("/").slice(1).join("/");

export const getLangFromSlug = (slug: string) => slug.split("/")[0];
