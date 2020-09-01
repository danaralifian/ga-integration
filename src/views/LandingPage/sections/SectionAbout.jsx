import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import styles from './styles'

class SectionAbout extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <h2 className={classes.sectionTitle}>About Me</h2>
        <Grid container direction='row' justify='center'>
          <Grid item xs={12} md={8}>
            <h3 style={{textAlign : 'justify', fontSize : 20, fontStyle : 'italic', marginTop : 0}}>
              ``Experience as Front-End and Mobile Apps developer with a demonstrated history of working
              in the information technology and services industry. Skilled in Firebase, HTML, PHP, Cascading Style Sheet (CSS),
              ReactJs & Redux, Next.Js, and mongoDB. Strong engineer professional with high integrity.``
            </h3>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(SectionAbout)