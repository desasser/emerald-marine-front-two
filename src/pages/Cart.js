import * as React from "react"
import { Typography } from '@material-ui/core'
import CartContent from "../components/CartContent.js"

const Cart = () => (
  <>
    <Typography variant='h2' style={{marginTop: '50px', color: '#74b4ab'}}>Shopping Cart</Typography>
    <CartContent></CartContent>
  </>
)

export default Cart