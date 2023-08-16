import '../styles/globals.css'
import Layout from '../components/Layout'
import {IBM_Plex_Sans} from "next/font/google"

const ibm = IBM_Plex_Sans({subsets: ["latin"], weight:['200', '600']})
export default function App({ Component, pageProps }) {
  return (
    <Layout className={ibm.className}>
      <Component {...pageProps} />
    </Layout>
  )
}
