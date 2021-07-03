import React from "react";
import { makeStyles } from "@material-ui/core";
import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ExternalLink from "./ExternalLink";
import InputForm from "./InputForm";
import logo from "../images/EMP-Logo_white_480.png";
import Grid from "@material-ui/core/Grid";
import EmeraldMarineLogo from './EmeraldMarineLogo';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "linear-gradient(7.5deg, #74b4ab 50%, #78787a 50.5%)",
    minHeight: 400,
    marginTop: 50,
  },
  logo: {
    height: "5em",
    [theme.breakpoints.down("md")]: {
        height: "4em"
    },
  },
  logoAndNewsLetterContainer: {
    maxWidth: "30%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw"
    },
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center", 
    direction: "column",
    wrap: 'wrap',
    flexGrow: 1,
    padding: '1em'
  },
  inputFormStyle: {
    margin: "0 auto",
    maxWidth: '50vw',
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw",
      padding: '2em',
    },
  },
  rights: {
    maxWidth: '50vw',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '100vw',
    },
    margin: "0 auto",
    // justifyContent: "center",
    // alignItems: "center", 
    // direction: "column",
    // wrap: 'wrap'
  },
  siteNav: {
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center", 
    direction: "column",
    wrap: 'wrap'
  },
  rowContent: {
    direction: 'row',
    margin: "0 auto",
    justify: 'space-between',
    alignItems: 'center',
    maxWidth: "100%",
    justifyContent: "center",
    wrap: 'wrap'
  },
  linkStyles: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  iconStyle: {
    fontSize: "50px",
    color: "#78787a",
  },
  inputStyle: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: "0.5em",
    width: "75%",
    "& label.Mui-focused": {
      color: "black",
      backgroundColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#74b4ab",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
          <Grid container className={classes.logoAndNewsLetterContainer}>
            <Grid item>
              <Link to="/" underline="none" className={classes.linkStyles}>
                <EmeraldMarineLogo className={classes.logo} />
              </Link>
            </Grid>
            <Grid item>
              <Typography component="div">
                <Box textAlign="center">
                  {" "}
                  Manufactured in The United States of America.
                </Box>
              </Typography>
            </Grid>
          </Grid>
            <Grid item s={12} md={4} className={classes.inputFormStyle}>
              <InputForm
                classes={classes}
                text={"Sign up to receive our newsletter."}
                label={"email..."}
                buttonText={"submit"}
              />
            </Grid>

          <Grid container className={classes.siteNav} >
            <Grid item xs={1}>
              <Link to="/" underline="none" className={classes.linkStyles}>
                <Typography variant="body1">Home</Typography>
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Link to="/products" underline="none" className={classes.linkStyles}>
                <Typography variant="body1">Products</Typography>
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Link to="/news" underline="none" className={classes.linkStyles}>
                <Typography variant="body1">News</Typography>
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Link to="/support" underline="none" className={classes.linkStyles}>
                <Typography variant="body1">Support</Typography>
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Link to="/contact" underline="none" className={classes.linkStyles}>
                <Typography variant="body1">Contact</Typography>
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Link to="/cart" underline="none" className={classes.linkStyles}>
                <Typography variant="body1">Cart</Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid container className={classes.rowContent}>
              <Grid item md={3} xs={12}>
                <ExternalLink href="https://www.facebook.com/Emerald-Marine-Products-124794697574367/">
                  <FacebookIcon className={classes.iconStyle} />
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/company/emerald-marine-products/">
                  <LinkedInIcon className={classes.iconStyle} />
                </ExternalLink>
                <ExternalLink href="https://twitter.com/EMPsafety">
                  <TwitterIcon className={classes.iconStyle} />
                </ExternalLink>
                <ExternalLink href="https://www.youtube.com/channel/UCe3J3Kq-V16eD2MXD3SKI-w/feed">
                  <YouTubeIcon className={classes.iconStyle} />
                </ExternalLink>
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography style={{textAlign: 'center'}}>
                  &#169; 2021 Full House Ventures, Inc. All Rights Reserved.
                </Typography>
                <Typography style={{textAlign: 'center'}} >
                  Site design by Outer Limits Design and Designly LLC
                </Typography>
              </Grid>
            <Grid item md={3} xs={12}>
              <ContactInfo />
            </Grid>
          </Grid>
    </div>
  );
};

export default Footer;
