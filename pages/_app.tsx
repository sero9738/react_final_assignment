import React, { useEffect, useState } from "react";
import Db from "../db";
import Head from "next/head";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Login from "../components/Login/Login";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import { User } from "../types";
import "../styles/globals.css";

export let SessionUserContext = React.createContext<User | undefined>(
  undefined
);

export default function App({ Component, pageProps }: AppProps) {
  const [sessionUserState, setSessionUserState] = useState<User | undefined>(
    undefined
  );

  return (
    <NextIntlProvider locale="en" messages={pageProps.messages}>
      <SessionUserContext.Provider value={sessionUserState}>
        <Head>
          <title>Final Assignment - Rooms Rental Application</title>
        </Head>
        <Header>
          <Navigation />
          <Login />
        </Header>
        <Component {...pageProps} />
      </SessionUserContext.Provider>
    </NextIntlProvider>
  );
}
