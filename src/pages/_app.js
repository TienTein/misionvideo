import "@/styles/globals.css";
import "../styles/styles.scss";
import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../redux/store";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import Loading from "@/components/loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  // handle loading when router changes state
  // React.useEffect(() => {
  //   Router.events.on("routeChangeStart", (url) => {
  //     setIsLoading(true);
  //   });

  //   Router.events.on("routeChangeComplete", (url) => {
  //     setIsLoading(false);
  //   });

  //   Router.events.on("routeChangeError", (url) => {
  //     setIsLoading(false);
  //   });
  // }, [Router]);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ToastContainer />
        <Header setIsLoading={setIsLoading} />
        <div
          className="main bg-[#1F1E1C]"
          style={{
            marginTop: `${headerHeight ? headerHeight + 5 : 85}px`,
          }}
        >
          {/* <Component {...pageProps} /> */}
          {isLoading ? Loading : <Component {...pageProps} />}
        </div>
        <Footer />
      </SessionProvider>
    </Provider>
  );
}
