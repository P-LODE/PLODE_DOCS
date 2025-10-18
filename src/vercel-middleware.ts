import { next } from "@vercel/edge";

/* eslint-disable @typescript-eslint/no-invalid-void-type */
// Edge-compatible middleware that implements a middleware chain pattern
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - auto-generated import
import i18nRedirect from "./middlewares/i18n-redirect";
import enRedirect from "./middlewares/en-redirect";
import { matcher } from "./middlewares/matcher-routes-dynamic";

export const config = {
  // eslint-disable-next-line  @typescript-eslint/no-unsafe-assignment
  matcher,
};

async function applyMiddleware(
  req: Request,
  middlewares: ((req: Request) => Promise<Response | void> | Response | void)[],
) {
  return middlewares.reduce<Promise<Response | void>>(
    async (chain, middleware) => {
      const response = await chain;
      if (response) return response;
      return middleware(req);
    },
    Promise.resolve(void 0),
  );
}

export default async function middleware(req: Request) {
  return await applyMiddleware(req, [
    enRedirect,
    i18nRedirect,
    next,
  ]);
}
