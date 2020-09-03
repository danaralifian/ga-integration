import React from 'react'
import App from 'next/app'
import Router from "next/router"
import withGA from "next-ga"
import '~/assets/scss/nextjs-material-kit.scss'
import Store from '~/utils/store'
import { Provider as ReduxProvider } from 'react-redux'

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return (
      <ReduxProvider store={Store}>
        <Component {...pageProps} />
      </ReduxProvider>
    )
  }
}

export default withGA("UA-154580794-1", Router)(MyApp)
