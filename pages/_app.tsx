import store from "@/state/store";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { fetchContacts } from "@/slices/contactSlice";

export default function App(props: AppProps) {
  useEffect(() => {
    if (store.getState().contact.contacts.length === 0) {
      store.dispatch(fetchContacts());
    }
  }, []);

  const { pageProps, Component } = props;
  return (
    <AppCacheProvider {...props}>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </Provider>
    </AppCacheProvider>
  );
}
