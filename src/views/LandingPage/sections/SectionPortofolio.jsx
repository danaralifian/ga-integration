import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import styles from './styles'

class SectionPortofolio extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <h2 className={classes.sectionTitle}>My Portofolio</h2>
        
      </div>
    )
  }
}

export default withStyles(styles)(SectionPortofolio)