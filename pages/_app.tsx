import { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import '../styles/global.css'
import Navbar from "../src/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <Layout>
        <Navbar/>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp
