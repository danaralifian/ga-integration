import React, { Component } from 'react'
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "~/src/components/Header/Header.js";
import HeaderLinks from "~/src/components/Header/HeaderLinks.js";
import Footer from "~/src/components/Footer/Footer.js";
import GridContainer from "~/src/components/Grid/GridContainer.js";
import GridItem from "~/src/components/Grid/GridItem.js";
import Button from "~/src/components/CustomButtons/Button.js";
import Parallax from "~/src/components/Parallax/Parallax.js";

import SectionIntro from './sections/SectionIntro'
import SectionExperience from './sections/SectionExperience'
import SectionPortofolio from './sections/SectionPortofolio'
import SectionSkills from './sections/SectionSkills'
import SectionAbout from './sections/SectionAbout'

import githubLogo from '~/assets/img/github.png'
import linkedinLogo from '~/assets/img/linkedin.png'
import facebookLogo from '~/assets/img/facebook.png'

import styles from "~/assets/jss/nextjs-material-kit/pages/components.js";
import { ButtonBase } from '@material-ui/core';

class LandingPages extends Component {
    render() {
        const  { classes, rest } = this.props
        return (
            <div>
            <Header
              brand="NextJS Material Kit"
              rightLinks={<HeaderLinks />}
              fixed
              color="white"
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              {...rest}
            />
            <Parallax image={require("~/assets/img/background.png")}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem>
                    <div className={classes.brand}>
                      <h1 className={classes.title}>Hello There,</h1>
                      <h3 className={classes.subtitle}>
                        My name is Danar Alifian and this is my litle corner on the internet.
                      </h3>
                      <h5 style={{fontWeight : 'bold', marginBottom : 0}}>Find Me on</h5>
                      <a href='https://github.com/danaralifian' target='_blank' className={classes.link}>
                        <ButtonBase disableRipple className={classes.btn}>
                          <img src={githubLogo} alt='github' className={classes.socialMedia}/>
                          Github
                        </ButtonBase>
                      </a>
                      <a href='https://www.linkedin.com/in/danar-alifian-1a1581174/' target='_blank' className={classes.link}>
                        <ButtonBase disableRipple className={classes.btn}>
                          <img src={linkedinLogo} alt='linkedin' className={classes.socialMedia}/>
                          LinkedIn
                        </ButtonBase>
                      </a>
                      <a href='https://www.facebook.com/danar.alifian.73' target='_blank' className={classes.link}>
                        <ButtonBase disableRipple className={classes.btn}>
                          <img src={facebookLogo} alt='facebook' className={classes.socialMedia}/>
                          Facebook
                        </ButtonBase>
                      </a>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <div className={classes.container}>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionAbout/>
                {/* <br/>
                <SectionIntro/> */}
                <br/>
                <SectionExperience/>
                <br/>
                <SectionPortofolio/>
                <br/>
                <SectionSkills/>
              </div>
            </div>
            <Footer />
          </div>
        )
    }
}

export default withStyles(styles)(LandingPages)