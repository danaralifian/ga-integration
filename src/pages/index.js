import React, { Component } from 'react'
import Head from 'next/head'
import LandingPage from '../views/LandingPage/LandingPages'

class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Danar Alifian</title>
        </Head>
        <LandingPage/>
      </React.Fragment>
    )
  }
}
export default index