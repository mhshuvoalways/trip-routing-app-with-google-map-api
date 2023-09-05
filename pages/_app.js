import "@/styles/globals.css";
import AppStore from "../context/Context";

export default function App({ Component, pageProps }) {
  return (
    <AppStore>
      <Component {...pageProps} />
    </AppStore>
  );
}
