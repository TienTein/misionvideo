import "@/styles/globals.css";
import "../styles/styles.scss";
import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [headerHeight, setHeaderHeight] = React.useState(0);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ToastContainer />
        <Header />
        <div
          className="main bg-[#1F1E1C]"
          style={{
            marginTop: `${headerHeight ? headerHeight + 5 : 85}px`,
          }}
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </SessionProvider>
    </Provider>
  );
}
