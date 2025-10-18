/* eslint sort-keys: error */
import { useConfig } from "nextra-theme-docs";

interface FrontmatterConfig {
  description?: string;
  image?: string;
  title?: string;
}

function isFullUrl(url: string): boolean {
  // This regex checks for strings that start with a scheme like http:// or https://
  const pattern = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//;
  return pattern.test(url);
}

function getLocale(locale?: string): string {
  return locale || "ko";
}

const url = new URL("https://github.com/plode-io/plode-docs");

const config = {
  darkMode: true,
  docsRepositoryBase: url.toString(),
  banner: {
    content: function useBanner() {
      return (
        <div>
          🎉 Welcome to the new Aptos Docs!{" "}
          <a
            className="text-blue-400 dark:text-blue-400 hover:underline"
            target="_blank"
            href="https://github.com/aptos-labs/developer-docs/issues/new/choose"
          >
            Click here to submit an issue.
          </a>
        </div>
      );
    },
  },
  feedback: {
    content: function useFeedback() {},
    labels: "feedback",
    useLink() {},
  },
  footer: {
    content: function useText() {
      return (
        <a
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-2 font-semibold"
          href={"/"}
        >
          {"Plode Docs"}
        </a>
      );
    },
  },
  gitTimestamp: function GitTimestamp({ timestamp }) {
    return (
      <>
        {"Last Updated On "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString("ko", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  head: function useHead() {
    let ogImage: string;
    let twitterImage: string;
    const url = new URL("https://plode.io");
    const imagePath = "/api/og.png";
    const title = `Plode Docs | Plode Docs`;

    if (isFullUrl(imagePath)) {
      ogImage = imagePath;
      twitterImage = imagePath;
    } else {
      url.pathname = imagePath;
      twitterImage = url.toString();

      url.searchParams.append("title", title);
      ogImage = url.toString();
    }

    return (
      <>
        <title>{title}</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta property="og:title" content={title} />
        <meta name="description" content={"Plode Docs"} />
        <meta property="og:description" content={"Plode Docs"} />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={"Plode Docs"} />
        <meta name="twitter:image:title" content={title + " OG Image"} />
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:image:width" content="2400" />
        <meta name="twitter:image:height" content="1256" />
        <meta name="twitter:image:content_type" content="image/png" />
      </>
    );
  },
  logo: function Logo() {
    return (
      <>
        <span className="select-none font-semibold uppercase ltr:ml-2 rtl:mr-2 gap-3 flex items-center">
          Developers
        </span>
      </>
    );
  },
  nextThemes: {
    defaultTheme: "system",
  },
  project: {
    link: "https://github.com/plode-io/plode-docs",
  },
  search: {
    emptyResult: function useEmptyResult() {
      return "Empty Result";
    },
    error: function useError() {
      return "Error";
    },
    loading: function useLoading() {
      return "Loading";
    },
    placeholder: function usePlaceholder() {
      return "Search";
    },
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
  },
};

export default config;
