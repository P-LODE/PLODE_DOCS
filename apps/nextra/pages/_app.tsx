import { GoogleAnalytics } from "@next/third-parties/google";
import { Layout } from "nextra-theme-docs";
import themeConfig from "../theme.config";
import "../styles.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout themeConfig={themeConfig}>
      {/* <GoogleAnalytics gaId={docsConfig.googleAnalyticsId} /> */}
      <Component {...pageProps} />
    </Layout>
  );
}
