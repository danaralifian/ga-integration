import { container } from "~/assets/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "auto",
    marginTop : -60,
    padding : 20,
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "0px",
      marginRight: "0px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  socialMedia : {
    width : 30, 
    height : 30, 
    objectFit : 'contain',
    margin : 5
  },
  btn : {
    fontFamily : 'Ubuntu',
    fontSize : 16,
    fontWeight : 500
  },
  link : {
    color : '#fff',
    '&:hover' : {
      color : '#fff',
    },
    '&:focus' : {
      color : '#fff',
    }
  }
};

export default componentsStyle;
