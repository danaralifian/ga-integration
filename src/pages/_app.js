import React from 'react'
import App from 'next/app'
import Router from "next/router"
import withGA from "next-ga"
import '~/assets/scss/nextjs-material-kit.scss'
// import '../assets/scss/styles.scss'

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default withGA("UA-154580794-1", Router)(MyApp)
