import React, { Component } from 'react'
import { withRouter } from 'next/router'
import ReactGA from 'react-ga'

export const initGA = () => {
  console.log("init GA")
  ReactGA.initialize("UA-154580794-1")
}

export const logPageView=()=>{
  ReactGA.set({page : window.location.pathname})
  ReactGA.pageview(window.location.pathname+window.location.search)
  console.log(window.location.pathname+window.location.search)
}

class second extends Component {

	componentDidMount() {
		initGA()
		logPageView()
	}
	
	render() {
		return (
			<div>
				<title>second</title>
				Welcome to Next.js!
				<p>This second index page</p>
			</div>
		)
	}
}


export default withRouter(second)