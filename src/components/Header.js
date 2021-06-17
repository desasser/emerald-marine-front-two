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
    padding: 15,
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
          <Link href="/" underline='none' className={classes.linkStyles}>
            <Typography variant='body1'>
              Home
            </Typography>
          </Link>
          <Link href="/products" underline='none' className={classes.linkStyles}>
            <Typography variant='body1'>
              Products
            </Typography>
          </Link>
          <Link href="/news" underline='none' className={classes.linkStyles}>
            <Typography variant='body1'>
              News
            </Typography>
          </Link>
          <Link href="/support" underline='none' className={classes.linkStyles}>
            <Typography variant='body1'>
              Support
            </Typography>
          </Link>
          <Link href="/contact" underline='none' className={classes.linkStyles}>
            <Typography variant='body1'>
              Contact
            </Typography>
          </Link>
          <Link href="/cart" underline='none' className={classes.linkStyles}>
            <Typography variant='body1'>
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