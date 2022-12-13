import "../styles/globals.css";
import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider locale="en" messages={pageProps.messages}>
      <Header>
        <Navigation />
      </Header>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
