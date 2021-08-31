import Layout from '../components/layout/Layout'
import '../styles/Global/globals.scss'
import { Provider } from 'react-redux'
import store from '../store/store'
import SimpleReactLightbox from 'simple-react-lightbox'



function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <SimpleReactLightbox>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SimpleReactLightbox>
    </Provider>

  )
}

export default MyApp
