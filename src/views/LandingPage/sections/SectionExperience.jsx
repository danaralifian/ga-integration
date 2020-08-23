import React, { Component } from 'react'
import mobile from '~/assets/img/mobile_apps.svg'
import web from '~/assets/img/web.svg'
import backend from '~/assets/img/backend.svg'
import Fade from 'react-reveal/Fade'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import styles from './styles'

class SectionExperience extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <h2 className={classes.sectionTitle}>My Experience</h2>

      </div>
    )
  }
}

export default withStyles(styles)(SectionExperience)