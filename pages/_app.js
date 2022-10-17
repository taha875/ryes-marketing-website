import React from "react";
import "tailwindcss/tailwind.css";
import "../style/style.css";
import Head from "next/head";
function _app({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default _app;
