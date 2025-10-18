/// <reference types="astro/client" />

declare module "astro:env/client" {
  export const PUBLIC_FIREBASE_API_KEY: string | undefined;
  export const PUBLIC_FIREBASE_AUTH_DOMAIN: string | undefined;
  export const PUBLIC_FIREBASE_PROJECT_ID: string | undefined;
  export const PUBLIC_FIREBASE_APP_ID: string | undefined;
}

