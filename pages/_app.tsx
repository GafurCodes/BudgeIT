import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //provides the session value to be used by the useSession hook all over the app
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
