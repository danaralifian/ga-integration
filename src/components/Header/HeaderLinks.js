/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "~/src/components/CustomButtons/Button.js";

import styles from "~/assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import Router from "next/router"

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <Link href='/?nav=home'>
        <Button color="transparent" className={classes.navLink}>
          Home
        </Button>
        </Link>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink} onClick={()=>{Router.push('/?nav=about', undefined, { shallow : true})}}>
          About Me
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink} onClick={()=>{Router.push('/?nav=experience', undefined, { shallow : true})}}>
          Experience
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink} onClick={()=>{Router.push('/?nav=portofolio', undefined, { shallow : true})}}>
          Portofolio
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" className={classes.navLink} onClick={()=>{Router.push('/?nav=skills', undefined, { shallow : true})}}>
          Skills
        </Button>
      </ListItem>
    </List>
  );
}
