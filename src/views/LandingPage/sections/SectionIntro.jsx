import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "~/src/components/Header/Header.js";
import HeaderLinks from "~/src/components/Header/HeaderLinks.js";
import Footer from "~/src/components/Footer/Footer.js";
import GridContainer from "~/src/components/Grid/GridContainer.js";
import GridItem from "~/src/components/Grid/GridItem.js";
import Button from "~/src/components/CustomButtons/Button.js";
import Parallax from "~/src/components/Parallax/Parallax.js";

import styles from "~/assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("~/assets/img/nextjs_header.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>NextJS Material Kit.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{width : '100%', height : 1000}}/>
      </div>
      <Footer />
    </div>
  );
}
