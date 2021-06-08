import * as React from "react"
import { Typography } from '@material-ui/core'
import ProductContent from "../components/ProductContent"

const Products = () => (
  <>
    <Typography variant='h2' style={{marginTop: '50px'}}>All Products</Typography>
    <ProductContent></ProductContent>
  </>
)

export default Products