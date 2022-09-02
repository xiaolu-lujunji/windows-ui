import "win-ui/themes/light-theme.css";
import "win-ui/link-button/link-button.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
