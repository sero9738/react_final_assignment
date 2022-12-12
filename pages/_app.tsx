import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { Route } from "../types";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [route, setRoute] = React.useState(Route.LIST);

  return (
    <NextIntlProvider locale="en">
      <Head>
        <title>Final Assignment - Rooms Rental Application</title>
      </Head>
      <Header title="Arrrbnb">
        <Navigation />
      </Header>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
