import * as React from "react"
import { Typography, Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CartContent from "../components/CartContent.js"

const Cart = () => (
  <>
    <div style={{ marginTop: '30px', width: '100%' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'grey' }}>
          Home
        </Link>
        <Typography color="textPrimary">Cart</Typography>
      </Breadcrumbs>
    </div>
    <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab' }}>Shopping Cart</Typography>
    <CartContent></CartContent>
  </>
)

export default Cart