import '../styles/globals.css'
import { SearchProvider, Context } from '../contexts/store';

function MyCustomApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  )
}

export default MyCustomApp
