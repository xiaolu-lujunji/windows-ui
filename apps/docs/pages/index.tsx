import React from 'react'
import Head from 'next/head'
import Layout from 'components/layout'
import type { GetServerSideProps } from 'next'

export default function Home({ mode }: { mode: 'light' | 'dark' }) {
  return (
    <Layout mode={mode}>
      <Head>
        <title>Windows UI</title>
        <meta name="description" content="Implement Windows UI in React." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundImage: `url("/images/wallpapers/${mode}/wallpaper-1.jpg")`,
          backgroundPosition: '5% 20%',
        }}
        className="h-[256px] rounded-[7px] pt-[90px] pl-[50px]"
      >
        <h1 className="text-3xl font-bold">Windows UI</h1>
        <p className="mt-2 text-base">Implement Windows UI in React.</p>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{ mode: 'light' | 'dark' }> = async (
  context
) => {
  const mode = context.query.mode === undefined || context.query.mode === 'light' ? 'light' : 'dark'
  return {
    props: {
      mode,
    },
  }
}
