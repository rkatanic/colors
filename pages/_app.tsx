import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-900">
      <div className="grid-lines fixed inset-0"></div>
      <div className="dots fixed inset-0"></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
