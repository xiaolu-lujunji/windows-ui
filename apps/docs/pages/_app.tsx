import SideBar from 'layout/side-bar'
import '@wui/windows/themes/light.scss'
import '@wui/windows/utilities.scss'
import '@wui/windows/materials/mica/mica.scss'
import '@wui/windows/button/button.scss'
import '@wui/windows/toggle-button/toggle-button.scss'
import '../styles/globals.css'
import '../styles/material.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="container">
      <SideBar />
      <Component {...pageProps} />
    </main>
  )
}
