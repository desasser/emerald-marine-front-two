import * as React from "react"
import { Typography } from '@material-ui/core'
import Contact from "../components/Contact"

const News = () => (
  <>
    <Typography variant='h2' style={{marginTop: '50px'}}>Contact Info</Typography>
    <Contact></Contact>
  </>
)

export default News