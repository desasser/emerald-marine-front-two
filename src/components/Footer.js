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
import Grid from "@material-ui/core/Grid";
import EmeraldMarineLogo from './EmeraldMarineLogo';
import MadeInUsa from './MadeInUsa';

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
    margin: "0 auto",
    maxWidth: '50vw',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '100vw',
    }
  },
  siteNav: {
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center", 
    direction: "column",
    wrap: 'wrap',
  },
  rowContent: {
    direction: 'row',
    justify: 'space-between',
    alignItems: 'center',
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
    marginLeft: 190,
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
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: 15,
    },
  },
  siteNavBtns: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: "1em",
    marginBottom: "1em",
    backgroundColor: "rgba(46, 46, 46, 0.1)",
    padding: "0.5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5em",
      marginBottom: "0em",
    },
  },
  socialButtonsContainer: {
    [theme.breakpoints.down("sm")]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center'
    },
  },
  logoUSA: {
    height: '8rem'
  }
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
          </Grid>
            <Grid item /* s={12} md={4} className={classes.inputFormStyle} */>
              <InputForm
                classes={classes}
                text={"Sign up to receive our newsletter."}
                label={"email..."}
                buttonText={"submit"}
              />
            </Grid>

          <Grid container className={classes.siteNav} >
            <Grid item xs={3} md={1}>
              <Link to="/" underline="none" className={classes.linkStyles}>
                <Typography variant="body1" className={classes.siteNavBtns}>Home</Typography>
              </Link>
            </Grid>
            <Grid item xs={3} md={1}>
              <Link to="/products" underline="none" className={classes.linkStyles}>
                <Typography variant="body1" className={classes.siteNavBtns}>Products</Typography>
              </Link>
            </Grid>
            <Grid item xs={3} md={1}>
              <Link to="/news" underline="none" className={classes.linkStyles}>
                <Typography variant="body1" className={classes.siteNavBtns}>News</Typography>
              </Link>
            </Grid>
            <Grid item xs={3} md={1}>
              <Link to="/support" underline="none" className={classes.linkStyles}>
                <Typography variant="body1" className={classes.siteNavBtns}>Support</Typography>
              </Link>
            </Grid>
            <Grid item xs={3} md={1}>
              <Link to="/contact" underline="none" className={classes.linkStyles}>
                <Typography variant="body1" className={classes.siteNavBtns}>Contact</Typography>
              </Link>
            </Grid>
            <Grid item xs={3} md={1}>
              <Link to="/cart" underline="none" className={classes.linkStyles}>
                <Typography variant="body1" className={classes.siteNavBtns}>Cart</Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid container className={classes.rowContent}>
              <Grid item md={4} xs={12} style={{marginTop: '0.5em'}}>
                <Container className={classes.socialButtonsContainer}>
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
                </Container>
              </Grid>
              
              <Grid item md={4} xs={12}>
                <Grid item style={{display: 'flex',flexDirection: 'row',alignItems: 'center', justifyContent: 'center', margin: '2rem',}}>
                  <MadeInUsa className={classes.logoUSA} />
                </Grid>
                <Typography style={{textAlign: 'center', color: 'white',}}>
                  &#169; 2021 Full House Ventures, Inc. All Rights Reserved.
                </Typography>
                <Typography style={{textAlign: 'center', color: 'white',}} >
                  Site design by Outer Limits Design and Designly LLC
                </Typography>
              </Grid>
            <Grid item md={4} xs={12} style={{marginTop: '0.5em'}}>
              <ContactInfo />
            </Grid>
          </Grid>
    </div>
  );
};

export default Footer;
