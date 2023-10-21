import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <body className=' w-full'>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </body>

  )
}
