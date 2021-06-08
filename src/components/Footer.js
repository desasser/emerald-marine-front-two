import React from 'react'
import { makeStyles } from '@material-ui/core'
import ContactInfo from './ContactInfo';
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ExternalLink from './ExternalLink';
import InputForm from './InputForm';
import logo from '../images/EMP-Logo_white_480.png'

const useStyles = makeStyles(theme => ({
  footer: {
    background: 'linear-gradient(7.5deg, #74b4ab 50%, #78787a 50.5%)',
    minHeight: 400,
    marginTop: 50
  },
  footerLogoWrapper: {
    margin: '0 auto',
    width: 287
  },
  footerContent: {
    maxWidth: '80%',
    margin: '0 auto',
    padding: '30px'
  },
  contact: {
    float: 'right'
  },
  linkStyles: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px'
  },
  flexWrapper: {
    display: 'flex',
  },
  iconStyle: {
    fontSize: '50px',
    color: '#78787a'
  },
  copyrightText: {
    margin: 0,
    textAlign: 'center'
  },
  formStyle: {
    margin: '10px auto',
    width: '50%'
  },
  inputStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: '0.5em',
    width: '75%',
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#74b4ab',
      },
    }
  }
}))

const Footer = ({ siteTitle, menuLinks }) => {
  const classes = useStyles()

  return (
    <div className={classes.footer} >
      <Container className={classes.footerContent}>
        <div className={classes.footerLogoWrapper}>
          <img
            src={logo}
            alt='Emerald Marine Products Logo'
            as='div'
            style={{height: '100px'}}
          />
        </div>
        <Typography style={{ textAlign: 'center' }}> Manufactured in The United States of America.</Typography>
        <InputForm classes={classes} text={'Sign up to receive our newsletter.'} label={'email...'} buttonText={'submit'} />
        <hr style={{ margin: '0' }} />
        <div style={{ backgroundColor: '#78787a50', height: '50px', display: 'flex', alignItems: 'center' }}>
          <div style={{ margin: '0px auto', width: '50%' }}>
            {/*TODO: <ul className={classes.flexWrapper} style={{ margin: '0px' }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    paddingLeft: `1rem`,
                    paddingRight: `1rem`
                  }}
                >
                  <Link className={classes.linkStyles} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
        <hr style={{ margin: '0' }} />
        <div className={classes.flexWrapper} style={{ justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px' }}>
          <div>
            <ExternalLink href='https://www.facebook.com/Emerald-Marine-Products-124794697574367/'>
              <FacebookIcon className={classes.iconStyle} />
            </ExternalLink>
            <ExternalLink href='https://www.linkedin.com/company/emerald-marine-products/'>
              <LinkedInIcon className={classes.iconStyle} />
            </ExternalLink>
            <ExternalLink href='https://twitter.com/EMPsafety'>
              <TwitterIcon className={classes.iconStyle} />
            </ExternalLink>
            <ExternalLink href='https://www.youtube.com/channel/UCe3J3Kq-V16eD2MXD3SKI-w/feed'>
              <YouTubeIcon className={classes.iconStyle} />
            </ExternalLink>

          </div>
          <ContactInfo />
        </div>
        <Typography className={classes.copyrightText}>&#169; 2021 Full House Ventures, Inc. All Rights Reserved.</Typography>
        <Typography className={classes.copyrightText}>Site design by Outer Limits Design and Designly LLC</Typography>
      </Container>
    </div>
  )
}

export default Footer
