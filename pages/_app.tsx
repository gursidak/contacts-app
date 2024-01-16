import store from "@/state/store";
import "@/styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App(props: AppProps) {
  const {pageProps, Component} = props;
  return (
    <AppCacheProvider {...props}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </AppCacheProvider>
  );
}
