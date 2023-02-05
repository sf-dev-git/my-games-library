import { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import '../styles/global.css'
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <>
          <Navbar/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer/>
      </>
  );
}

export default MyApp
