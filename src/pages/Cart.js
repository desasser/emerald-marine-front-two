import * as React from "react"
import { Typography, Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CartContent from "../components/CartContent.js"
import Page from "../components/Page"

const Cart = () => (
  <Page>
    <div style={{ marginTop: '30px', width: '80%' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'grey' }}>
          Home
        </Link>
        <Typography color="textPrimary">Cart</Typography>
      </Breadcrumbs>
    </div>
    <CartContent></CartContent>
  </Page>
)

export default Cart