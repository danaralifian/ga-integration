import React, { Component } from 'react'
import Head from 'next/head'
import LandingPage from '../views/LandingPage/LandingPages'

class index extends Component {

  static async getInitialProps(context) {
    return{}
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Danar Alifian</title>
          <meta name="description" content="Experience as Front-End and Mobile Apps developer with a demonstrated history of working
              in the information technology and services industry. Skilled in Firebase, HTML, PHP, Cascading Style Sheet (CSS),
              ReactJs & Redux, Next.Js, and mongoDB. Strong engineer professional with high integrity."></meta>
        
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://danar.site/"></meta>
        <meta property="og:title" content="Danar Alifian"></meta>
        <meta property="og:description" content="Experience as Front-End and Mobile Apps developer with a demonstrated history of working
              in the information technology and services industry. Skilled in Firebase, HTML, PHP, Cascading Style Sheet (CSS),
              ReactJs & Redux, Next.Js, and mongoDB. Strong engineer professional with high integrity."></meta>
        <meta property="og:image" content={require("~/assets/img/favicon.png")}></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://metatags.io/"></meta>
        <meta property="twitter:title" content="Danar Alifian"></meta>
        <meta property="twitter:description" content="Experience as Front-End and Mobile Apps developer with a demonstrated history of working
              in the information technology and services industry. Skilled in Firebase, HTML, PHP, Cascading Style Sheet (CSS),
              ReactJs & Redux, Next.Js, and mongoDB. Strong engineer professional with high integrity."></meta>
        <meta property="twitter:image" content={require("~/assets/img/favicon.png")}></meta>
        </Head>
        <LandingPage/>
      </React.Fragment>
    )
  }
}
export default index