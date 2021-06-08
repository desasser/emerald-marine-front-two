import Link from '@material-ui/core/Link';
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
    backgroundColor: '#78787a',
    position: 'fixed',
    height: 75,
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    margin: theme.spacing(1),
    color: '#fff',
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  toolbar: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linkStyles: {
    color: 'white',
    textDecoration: 'none',
    padding: 10,
    cursor: 'pointer',
  },
  imgContainer: {
    maxHeight: 50,
  }
}))

const activeStyles = {
  background: 'white',
  color: 'black',
  padding: 5,
}

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.header}>
      <div className={classes.linkContainer}>
        <Toolbar className={classes.toolbar}>
          <a to='/' className={classes.link}>
            <EmeraldMarineLogo className={classes.imgContainer} />
          </a>
          <Link to="/" className={classes.linkStyles}>
            <Typography variant='h6'>
              Home
            </Typography>
          </Link>
          <Link to="/products" className={classes.linkStyles}>
            <Typography variant='h6'>
              Products
            </Typography>
          </Link>
          <Link to="/news" className={classes.linkStyles}>
            <Typography variant='h6'>
              News
            </Typography>
          </Link>
          <Link to="/support" className={classes.linkStyles}>
            <Typography variant='h6'>
              Support
            </Typography>
          </Link>
          <Link to="/contact" className={classes.linkStyles}>
            <Typography variant='h6'>
              Contact
            </Typography>
          </Link>
          <a to="/cart" className={classes.linkStyles}>
            <Typography variant='h6'>
              Cart
            </Typography>
          </a>
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