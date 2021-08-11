import Layout from '../components/layout/Layout'
import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { useStore } from '../store/store'


function MyApp({ Component, pageProps }) {
  return (

      <Layout>
        <Component {...pageProps} />
      </Layout>

  )
}

export default MyApp
