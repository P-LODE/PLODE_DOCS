declare module 'astro:env/client' {
	export const ALGOLIA_APP_ID: string | undefined;	
	export const ALGOLIA_SEARCH_API_KEY: string | undefined;	
	export const ALGOLIA_INDEX_NAME: string | undefined;	
	export const GTAG_ID: string | undefined;	
	export const PUBLIC_FIREBASE_API_KEY: string | undefined;	
	export const PUBLIC_FIREBASE_AUTH_DOMAIN: string | undefined;	
	export const PUBLIC_FIREBASE_PROJECT_ID: string | undefined;	
	export const PUBLIC_FIREBASE_APP_ID: string | undefined;	
}declare module 'astro:env/server' {
	export const GITHUB_TOKEN: string | undefined;	
	export const ENABLE_API_REFERENCE: string;	
	export const ENABLE_MOVE_REFERENCE: string;	
	export const OG_IMAGES_SECRET: string | undefined;	
}