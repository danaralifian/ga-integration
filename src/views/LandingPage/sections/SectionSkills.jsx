import React, { Component } from 'react'
import html from '~/assets/img/html.png'
import css from '~/assets/img/css.png'
import js from '~/assets/img/js.png'
import php from '~/assets/img/php.png'
import firebase from '~/assets/img/firebase.png'
import mysql from '~/assets/img/mysql.png'
import mongodb from '~/assets/img/mongodb.png'
import nodejs from '~/assets/img/nodejs.png'
import android from '~/assets/img/android.png'
import reactjs from '~/assets/img/reactjs.png'
import nextjs from '~/assets/img/nextjs.svg'
import laravel from '~/assets/img/laravel.png'
import flutter from '~/assets/img/flutter.png'
import vue from '~/assets/img/vue.png'
import Fade from 'react-reveal/Fade'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import styles from './styles'

class SectionSkills extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <h2 className={classes.sectionTitle}>My Skills</h2>
        <Grid container spacing={3}>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={html} alt='Hyper Text Markup Language' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  HTML
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={css} alt='Cascading Style Sheet' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  CSS
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={js} alt='Javascript' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  JavaScript
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={php} alt='PHP' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  PHP
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={firebase} alt='Firebase Realtime Database' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  Firebase
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={mysql} alt='Mysql' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  MySql
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={mongodb} alt='Mongodb' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  mongoDB
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={nodejs} alt='nodejs' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  nodeJS
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={android} alt='Android Studio' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  Android Studio
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={reactjs} alt='ReactJs' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  ReactJs
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={nextjs} alt='nextjs' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  NEXT.JS
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={laravel} alt='laravel' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  Laravel
                </div>
              </div>
            </Fade>
          </Grid>
          {/* <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={flutter} alt='Flutter' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  Coming Soon (Flutter)
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={reactjs} alt='React Native' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  Coming Soon (React Native)
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={6} md={3}>
            <Fade bottom>
              <div className={classes.card}>
                <img src={vue} alt='Vue' className={classes.imageDevelop}/>
                <div className={classes.devLabel}>
                  Coming Soon (Vue)
                </div>
              </div>
            </Fade>
          </Grid> */}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(SectionSkills)