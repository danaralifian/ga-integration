import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import React, { Component } from 'react'
import Homepage from '../views/Homepage/Homepage'
import LandingPage from '../views/LandingPage/LandingPages'

class index extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
      </div>
    )
  }
}
export default index