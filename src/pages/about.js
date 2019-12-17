import React, { Component } from 'react'
import Layout from '../components/MyLayout';
import App from "../components/pages/App"
import ReactGA from 'react-ga'

export const initGA = () => {
  console.log("init GA")
  ReactGA.initialize("UA-154580794-1")
}

export const logPageView=()=>{
  ReactGA.set({page : window.location.pathname})
  ReactGA.pageview(window.location.pathname)
  console.log(window.location.pathname)
}

const aboutPageContent = <App/>;

 class about extends Component {
   componentDidMount() {
     initGA()
     logPageView()
   }
   
  render() {
    return (
      <div>
        <App/>
      </div>
    )
  }
}

export default about