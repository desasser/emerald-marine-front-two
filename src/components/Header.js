// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import React from 'react'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'
import EmeraldMarineLogo from './EmeraldMarineLogo';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    display: 'flex',
    flexGrow: 1,
    cursor: 'pointer',
  },
  header: {
    backgroundColor: 'white',
    position: 'fixed',
    height: 120,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    margin: theme.spacing(1),
    color: '#fff',
  },
  linkContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    margin:'0 auto'
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linkStyles: {
    color: 'black',
    textDecoration: 'none',
    padding: 12,
    cursor: 'pointer',
  },
  linkTextStyle: {
    fontWeight: 'bold',
  },
  imgContainer: {
    maxHeight: 70,
  }
}))

const Header = () => {

  const classes = useStyles()
  return (
    <AppBar className={classes.header}>
      
      <div className={classes.linkContainer}>
         <Toolbar className={classes.toolbar}>
          <Link to='/' className={classes.link}>
            <EmeraldMarineLogo className={classes.imgContainer} />
          </Link>
          <Link to="/" underline='none' className={classes.linkStyles}>
            <Typography variant='h6' className={classes.linkTextStyle}>
              Home
            </Typography>
          </Link>
          <Link to="/oscarwaterrescue" underline='none' className={classes.linkStyles}>
            <Typography variant='h6' className={classes.linkTextStyle}>
              OSCAR
            </Typography>
          </Link>
          <Link to="/products" underline='none' className={classes.linkStyles}>
            <Typography variant='h6' className={classes.linkTextStyle}>
              Products
            </Typography>
          </Link>
          <Link to="/news" underline='none' className={classes.linkStyles}>
            <Typography variant='h6' className={classes.linkTextStyle}>
              News
            </Typography>
          </Link>
          <Link to="/support" underline='none' className={classes.linkStyles}>
            <Typography variant='h6' className={classes.linkTextStyle}>
              Support
            </Typography>
          </Link>
          <Link to="/contact" underline='none' className={classes.linkStyles}>
            <Typography variant='h6' className={classes.linkTextStyle}>
              Contact
            </Typography>
          </Link>
          <Link to="/cart" underline='none' className={classes.linkStyles}>
            <Typography variant='h6' className={classes.linkTextStyle}>
              Cart
            </Typography>
          </Link>
        </Toolbar>
      </div>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header