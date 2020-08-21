import React, { Component } from 'react'
import mobile from '~/assets/img/mobile_apps.svg'
import web from '~/assets/img/web.svg'
import backend from '~/assets/img/backend.svg'
import Fade from 'react-reveal/Fade'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import styles from './styles'

class SectionIntro extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <h2 className={classes.sectionTitle}>My Services</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={mobile} alt='Mobile Apps Developer' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  Mobile Apps Developer
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={web} alt='Web Front-End Developer' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  Front-End Developer
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={12} md={4}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={backend} alt='Backend' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  Backend Developer (Beginner)
                </div>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(SectionIntro)