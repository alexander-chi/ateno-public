//  Styles
import 'bootstrap/scss/bootstrap.scss'
import '../styles/index.css'
import '../styles/brand.scss'
import '../styles/home.scss'

//  Next requirements
import { AppProps } from 'next/app';
import Head from 'next/head';

//  Components
import {Header} from "../components/navigation/header/Header";
import {Footer} from "../components/navigation/footer/Footer";

//  StoryBlok
import { storyblokInit, apiPlugin } from "@storyblok/react";

const components = {}


storyblokInit({
  accessToken: "L2SBR6pxbZVVsMZNu4AIbgtt",
  use: [apiPlugin],
  components,
});



function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/czq7gmu.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
              crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Elevate events through better technology"
        />
        <meta charSet="utf-8"/>
        <title>
          Ateno Systems Ltd
        </title>
      </Head>
      <Header/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  );
}

export default CustomApp;
