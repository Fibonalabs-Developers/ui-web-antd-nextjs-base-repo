import fetcher from '@/src/lib/swr'
import { NextPageWithLayout } from '@/src/types/app/next'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'
import { SWRConfig } from 'swr'
import '../styles/globals.css'

interface MyAppProps extends AppProps {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
    const getLayout = Component.getLayout || ((page: ReactElement) => page)

    return (
        <>
            <SWRConfig
                value={{
                    revalidateOnFocus: false,
                    refreshInterval: 0,
                    fetcher: (url: string) => fetcher(url),
                }}
            >
                <Head>
                    <title>Fibonalabs</title>
                    <meta name="description" content="Home" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    />
                </Head>
                {getLayout(<Component {...pageProps} />)}
            </SWRConfig>
        </>
    )
}
