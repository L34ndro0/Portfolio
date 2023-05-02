import 'bootswatch/dist/cyborg/bootstrap.min.css'
import  '../global.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio de Leandro Carrizo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
  

  