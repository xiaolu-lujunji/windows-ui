import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="content">
      <Head>
        <title>Windows UI</title>
        <meta name="description" content="Implement windows ui in react." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Windows UI</h1>
      <p>Implement Windows UI in React.</p>
    </div>
  )
}
