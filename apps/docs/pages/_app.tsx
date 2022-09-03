import "win-ui/themes/light-theme.css";
import "win-ui/icon/icon.scss";
import "win-ui/list-item/list-item.scss";
import "win-ui/divider/divider.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
