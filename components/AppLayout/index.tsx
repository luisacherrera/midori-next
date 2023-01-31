import Head from 'next/head'

type AppLayoutProps = {
  children: React.ReactNode
}

export default function AppLayout({ children } : AppLayoutProps) {
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