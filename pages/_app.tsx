import React from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@styles/base/Global.styles";
import "@styles/base/fonts.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GlobalStyles />
      <>{getLayout(<Component {...pageProps} />)}</>
    </>
  );
}

export default MyApp;
