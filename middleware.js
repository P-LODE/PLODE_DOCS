const __create = Object.create;
const __defProp = Object.defineProperty;
const __getOwnPropDesc = Object.getOwnPropertyDescriptor;
const __getOwnPropNames = Object.getOwnPropertyNames;
const __getProtoOf = Object.getPrototypeOf;
const __hasOwnProp = Object.prototype.hasOwnProperty;
const __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {},
          }).exports,
          mod,
        ),
      mod.exports
    );
  };
const __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
const __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    !mod || !mod.__esModule
      ? __defProp(target, "default", {
          value: mod,
          enumerable: true,
        })
      : target,
    mod,
  )
);
const require_headers = __commonJS({
  "../functions/headers.js"(exports, module) {
    const __defProp2 = Object.defineProperty;
    const __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    const __getOwnPropNames2 = Object.getOwnPropertyNames;
    const __hasOwnProp2 = Object.prototype.hasOwnProperty;
    const __export = (target, all) => {
      for (const name in all)
        __defProp2(target, name, {
          get: all[name],
          enumerable: true,
        });
    };
    const __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    const __toCommonJS = (mod) =>
      __copyProps2(
        __defProp2({}, "__esModule", {
          value: true,
        }),
        mod,
      );
    const headers_exports = {};
    __export(headers_exports, {
      CITY_HEADER_NAME: () => CITY_HEADER_NAME2,
      COUNTRY_HEADER_NAME: () => COUNTRY_HEADER_NAME2,
      EMOJI_FLAG_UNICODE_STARTING_POSITION: () => EMOJI_FLAG_UNICODE_STARTING_POSITION2,
      IP_HEADER_NAME: () => IP_HEADER_NAME2,
      LATITUDE_HEADER_NAME: () => LATITUDE_HEADER_NAME2,
      LONGITUDE_HEADER_NAME: () => LONGITUDE_HEADER_NAME2,
      POSTAL_CODE_HEADER_NAME: () => POSTAL_CODE_HEADER_NAME2,
      REGION_HEADER_NAME: () => REGION_HEADER_NAME2,
      REQUEST_ID_HEADER_NAME: () => REQUEST_ID_HEADER_NAME2,
      geolocation: () => geolocation2,
      ipAddress: () => ipAddress2,
    });
    module.exports = __toCommonJS(headers_exports);
    const CITY_HEADER_NAME2 = "x-vercel-ip-city";
    const COUNTRY_HEADER_NAME2 = "x-vercel-ip-country";
    const IP_HEADER_NAME2 = "x-real-ip";
    const LATITUDE_HEADER_NAME2 = "x-vercel-ip-latitude";
    const LONGITUDE_HEADER_NAME2 = "x-vercel-ip-longitude";
    const REGION_HEADER_NAME2 = "x-vercel-ip-country-region";
    const POSTAL_CODE_HEADER_NAME2 = "x-vercel-ip-postal-code";
    const REQUEST_ID_HEADER_NAME2 = "x-vercel-id";
    const EMOJI_FLAG_UNICODE_STARTING_POSITION2 = 127397;
    function getHeader(headers, key) {
      return headers.get(key) ?? void 0;
    }
    function getHeaderWithDecode(request, key) {
      const header = getHeader(request.headers, key);
      return header ? decodeURIComponent(header) : void 0;
    }
    function getFlag(countryCode) {
      const regex = new RegExp("^[A-Z]{2}$").test(countryCode);
      if (!countryCode || !regex) return void 0;
      return String.fromCodePoint(
        ...countryCode
          .split("")
          .map((char) => EMOJI_FLAG_UNICODE_STARTING_POSITION2 + char.charCodeAt(0)),
      );
    }
    function ipAddress2(input) {
      const headers = "headers" in input ? input.headers : input;
      return getHeader(headers, IP_HEADER_NAME2);
    }
    function getRegionFromRequestId(requestId) {
      if (!requestId) {
        return "dev1";
      }
      return requestId.split(":")[0];
    }
    function geolocation2(request) {
      return {
        city: getHeaderWithDecode(request, CITY_HEADER_NAME2),
        country: getHeader(request.headers, COUNTRY_HEADER_NAME2),
        flag: getFlag(getHeader(request.headers, COUNTRY_HEADER_NAME2)),
        countryRegion: getHeader(request.headers, REGION_HEADER_NAME2),
        region: getRegionFromRequestId(getHeader(request.headers, REQUEST_ID_HEADER_NAME2)),
        latitude: getHeader(request.headers, LATITUDE_HEADER_NAME2),
        longitude: getHeader(request.headers, LONGITUDE_HEADER_NAME2),
        postalCode: getHeader(request.headers, POSTAL_CODE_HEADER_NAME2),
      };
    }
    },
});
const require_middleware = __commonJS({
  "../functions/middleware.js"(exports, module) {
    const __defProp2 = Object.defineProperty;
    const __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    const __getOwnPropNames2 = Object.getOwnPropertyNames;
    const __hasOwnProp2 = Object.prototype.hasOwnProperty;
    const __export = (target, all) => {
      for (const name in all)
        __defProp2(target, name, {
          get: all[name],
          enumerable: true,
        });
    };
    const __copyProps2 = (to, from, except, desc) => {
      if ((from && typeof from === "object") || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
            });
      }
      return to;
    };
    const __toCommonJS = (mod) =>
      __copyProps2(
        __defProp2({}, "__esModule", {
          value: true,
        }),
        mod,
      );
    const middleware_exports = {};
    __export(middleware_exports, {
      next: () => next2,
      rewrite: () => rewrite2,
    });
    module.exports = __toCommonJS(middleware_exports);
    function handleMiddlewareField(init, headers) {
      let _a;
      if ((_a = init == null ? void 0 : init.request) == null ? void 0 : _a.headers) {
        if (!(init.request.headers instanceof Headers)) {
          throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers) {
          headers.set("x-middleware-request-" + key, value);
          keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
      }
    }
    function rewrite2(destination, init) {
      const headers = new Headers((init == null ? void 0 : init.headers) ?? {});
      headers.set("x-middleware-rewrite", String(destination));
      handleMiddlewareField(init, headers);
      return new Response(null, {
        ...init,
        headers,
      });
    }
    function next2(init) {
      const headers = new Headers((init == null ? void 0 : init.headers) ?? {});
      headers.set("x-middleware-next", "1");
      handleMiddlewareField(init, headers);
      return new Response(null, {
        ...init,
        headers,
      });
    }
    },
});
const import_headers = __toESM(require_headers());
const import_middleware = __toESM(require_middleware());
import_headers.CITY_HEADER_NAME;
import_headers.COUNTRY_HEADER_NAME;
import_headers.EMOJI_FLAG_UNICODE_STARTING_POSITION;
import_headers.IP_HEADER_NAME;
import_headers.LATITUDE_HEADER_NAME;
import_headers.LONGITUDE_HEADER_NAME;
import_headers.POSTAL_CODE_HEADER_NAME;
import_headers.REGION_HEADER_NAME;
import_headers.REQUEST_ID_HEADER_NAME;
import_headers.geolocation;
import_headers.ipAddress;
const export_next = import_middleware.next;
import_middleware.rewrite;
const SUPPORTED_LANGUAGES = [
  {
    code: "en",
    label: "English",
    default: true,
  },
  {
    code: "es",
    label: "Español",
  },
  {
    code: "zh",
    label: "简体中文",
  },
  //{
  //  code: "ja",
  //  label: "日本語",
  //},
];
const LANGUAGE_CODES = SUPPORTED_LANGUAGES.map((lang) => lang.code);
const DEFAULT_LANG = "en";
const NON_DEFAULT_LANGS = LANGUAGE_CODES.filter((code) => code !== DEFAULT_LANG);
const MOST_COMMON_CRAWLERS = [
  "Googlebot\\/",
  "Googlebot-Mobile",
  "Googlebot-Image",
  "Googlebot-News",
  "Googlebot-Video",
  "AdsBot-Google([^-]|$)",
  "AdsBot-Google-Mobile",
  "Feedfetcher-Google",
  "Mediapartners-Google",
  "Mediapartners \\(Googlebot\\)",
  "APIs-Google",
  "Google-InspectionTool",
  "Storebot-Google",
  "GoogleOther",
  "bingbot",
  "LinkedInBot",
  "yandex\\.com\\/bots",
  "Baiduspider",
  "ezooms",
  "heritrix",
  "Ahrefs(Bot|SiteAudit)",
  "IndeedBot",
  "ZoominfoBot",
  "SeznamBot",
  "facebookexternalhit",
  "Twitterbot",
  "BUbiNG",
  "Applebot",
  "Slack-ImgProxy",
  "SkypeUriPreview",
  "Slackbot",
  "redditbot",
  "Google-Adwords-Instant",
  "WhatsApp",
  "pinterest\\.com\\/bot",
  "BingPreview\\/",
  "Yahoo Link Preview",
  "Discordbot",
  "TelegramBot",
  "DuckDuckGo-Favicons-Bot",
  "^Apache-HttpClient",
  "AppEngine-Google",
  "Google Web Preview",
  "Baidu-YunGuanCe",
  "FlipboardProxy",
  "google-xrawler",
  "Amazon CloudFront",
  "Google-Structured-Data-Testing-Tool",
  "ZoomBot",
  "W3C_Validator",
].map((crawler) => new RegExp(crawler, "i"));
function isCrawler(userAgent) {
  if (!userAgent) {
    return true;
  }
  return MOST_COMMON_CRAWLERS.some((regexp) => regexp.test(userAgent));
}
function middleware$2(request) {
  let _a, _b;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const userAgent = request.headers.get("user-agent");
  if (isCrawler(userAgent)) {
    return void 0;
  }
  const cookies = request.headers.get("cookie") ?? "";
  const langCookieMatch = /preferred_locale=([a-z-]+)/.exec(cookies);
  let preferredLocale = langCookieMatch ? langCookieMatch[1] : null;
  if (!preferredLocale) {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    preferredLocale =
      ((_b = (_a = acceptLanguage.split(",")[0]) == null ? void 0 : _a.split(";")[0]) == null
        ? void 0
        : _b.split("-")[0]) ?? DEFAULT_LANG;
  }
  const langPathMatch = /^\/([a-z]{2})(\/.*|$)/.exec(pathname);
  const currentLang = langPathMatch ? langPathMatch[1] : DEFAULT_LANG;
  if (currentLang !== preferredLocale) {
    if (preferredLocale === DEFAULT_LANG) {
      url.pathname = langPathMatch ? (langPathMatch[2] ?? "/") : pathname;
    } else if (NON_DEFAULT_LANGS.includes(preferredLocale)) {
      if (!langPathMatch) {
        url.pathname = `/${preferredLocale}${pathname}`;
      } else {
        url.pathname = `/${preferredLocale}${langPathMatch[2] ?? "/"}`;
      }
    }
    if (url.pathname !== pathname) {
      return Response.redirect(url);
    }
  }
  return void 0;
}
function middleware$1(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const enPathMatch = /^\/en(\/.*|$)/.exec(pathname);
  if (enPathMatch) {
    const restOfPath = enPathMatch[1] ?? "/";
    url.pathname = restOfPath;
    return Response.redirect(url);
  }
  return void 0;
}
async function applyMiddleware(req, middlewares) {
  return middlewares.reduce(
    async (chain, middleware2) => {
      const response = await chain;
      if (response) return response;
      return middleware2(req);
    },
    Promise.resolve(void 0),
  );
}
export const config = {
  matcher: [
    "/",
    "/build/:path*",
    "/contribute/:path*",
    "/guides/:path*",
    "/network/:path*",
    "/move-reference",
    "/move-reference/:path*",
    "/en",
    "/en/:path*",
    "/es",
    "/es/:path*",
    "/zh",
    "/zh/:path*",
  ],
};
export default async function middleware(req) {
  return await applyMiddleware(req, [middleware$1, middleware$2, export_next]);
}
