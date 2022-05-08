import Head from 'next/head'

export default function AppLayout({ children }) {
    return (
    <>
      <Head>
        <title>Midori Arquitectura</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}