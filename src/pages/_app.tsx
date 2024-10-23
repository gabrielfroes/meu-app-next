import { AppProps } from "next/app";
import "../styles/globals.css";
import "@fontsource/inter";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
