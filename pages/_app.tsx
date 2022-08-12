import "../styles/global.css";
import Head from "next/head";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="#" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Professional Software Developer & Marketer"
        />
        <title>Hi! I'm Rodrigo.</title>
        <meta
          property="og:locale"
          content={pageProps?._nextI18Next?.initialLocale ?? "en"}
        />
        <meta property="og:title" content="Rodrigo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Shared inbox, Live Chat, Knowledge base & Help Center Software"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
