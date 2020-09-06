import React, { Component } from 'react'
import WebOutlinedIcon from '@material-ui/icons/WebOutlined'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import Link from 'next/link'

import Button from '~/src/components/CustomButtons/Button'
import styles from './styles'
import screen1 from '~/assets/img/ss-1.png'
import screen2 from '~/assets/img/ss-2.png'
import playstore from '~/assets/img/playstore.png'

import capture1 from '~/assets/img/Capture1.png'
import capture2 from '~/assets/img/Capture2.png'
import capture3 from '~/assets/img/Capture3.png'
import capture4 from '~/assets/img/Capture4.png'

class SectionPortofolio extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <h2 className={classes.sectionTitle}>Portofolio</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div style={{display : 'flex', justifyContent : 'space-between'}}>
              <img src={screen1} className={classes.portoMobile} style={{marginTop : 40}} alt='mobile portofolio'/>
              <img src={screen2} className={classes.portoMobile} alt='mobile portofolio'/>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h4 style={{fontWeight : 'bold', fontSize : 20}}>Mobile Apps</h4>
            <p style={{fontSize : 16}}>
            This is a fall detection application designed to help people who may have a high risk 
            of experiencing a fall, this device will notify their family members. 
            and this device makes use of the MiBand device to measure the user's heart rate value.
            </p>
            <p style={{fontWeight : 'bold', marginBottom :0}}>Application Features:</p>
            <ol style={{marginTop : 0}}>
              <li>Send notification when a fall event is detected.</li>
              <li>Provide information on the location of the fall.</li>
              <li>Provides heart rate information.</li>
              <li>Provide information on the nearest hospital.</li>
              <li>Integrated with MiBand devices.</li>
            </ol>
            <a href='https://play.google.com/store/apps/details?id=com.alifian.dan.sevaraapps' target='_blank'>
              <img src={playstore} alt='get it on playstore' className={classes.playstore}/>
            </a>
          </Grid>
        </Grid>
        <br/>
        <h4 style={{fontWeight : 'bold', textAlign : 'center', fontSize : 20}}>Ecommerce Protoype</h4>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img src={capture1} alt='banner' className={classes.webImage}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={capture2} alt='homepage' className={classes.webImage}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={capture3} alt='prodcut page' className={classes.webImage}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={capture4} alt='checkout page' className={classes.webImage}/>
          </Grid>
        </Grid>
        <a href='https://demo1.danar.site/' target='_blank'>
          <Button color='primary' style={{display : 'block', margin : 'auto', textTransform : 'capitalize', marginTop : 25, fontSize : 16}}>
            <WebOutlinedIcon/> Open Page
          </Button>
        </a>
      </div>
    )
  }
}

export default withStyles(styles)(SectionPortofolio)