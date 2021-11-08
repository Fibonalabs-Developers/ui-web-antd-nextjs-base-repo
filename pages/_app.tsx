import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'antd/dist/antd.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Fibonalabs</title>
                <meta name="description" content="Home" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
