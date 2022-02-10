import Footer from "../helpers/footer/Footer";
import Layout from "../helpers/layout/Layout";
import Navbar from "../helpers/navbar/Navbar";
import PrimaryLoading from "../helpers/PrimaryLoading/PrimaryLoading"
import "../styles/globals.css";
import 'react-multi-carousel/lib/styles.css';
// import 'react-markdown-editor-lite/lib/index.css';
import {useState} from "react"
import Router from "next/router"

function MyApp({ Component, pageProps }) {
  const [isLoading, SetIsLoading] = useState(false);
  Router.events.on("routeChangeStart", (url)=>{
    SetIsLoading(true)
  })
  Router.events.on("routeChangeComplete", (url)=>{
    SetIsLoading(false)
  })

  return (
    <>
    {isLoading && <PrimaryLoading />}
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default MyApp;
