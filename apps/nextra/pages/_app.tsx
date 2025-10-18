import { GoogleAnalytics } from "@next/third-parties/google";
import "../styles.css";

export const config = {
  runtime: "experimental-edge",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GoogleAnalytics gaId={docsConfig.googleAnalyticsId} /> */}
      <Component {...pageProps} />
    </>
  );
}
