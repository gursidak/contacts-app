import store from "@/state/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App(props: AppProps) {
  const {pageProps, Component} = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
