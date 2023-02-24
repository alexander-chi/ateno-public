//  Styles
import 'bootstrap/scss/bootstrap.scss'
import '../styles/index.css'
import '../styles/App.scss'
import '../styles/brand.scss'
import '../styles/home.scss'

//  Next requirements
import { AppProps } from 'next/app';
import Head from 'next/head';

//  Components
import {Header} from "../components/navigation/header/Header";
import {Footer} from "../components/navigation/footer/Footer";



function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/czq7gmu.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
              crossOrigin="anonymous"/>
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
