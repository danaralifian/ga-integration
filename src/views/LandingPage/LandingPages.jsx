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

import styles from "~/assets/jss/nextjs-material-kit/pages/components.js";
import '../../assets/scss/styles.scss'

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
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <div className={classes.container}>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionIntro/>
                <br/>
                <SectionExperience/>
              </div>
            </div>
            <Footer />
          </div>
        )
    }
}

export default withStyles(styles)(LandingPages)