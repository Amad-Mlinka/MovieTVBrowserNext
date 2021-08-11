import Layout from '../components/layout/Layout'
import '../styles/globals.scss'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}

export default MyApp
