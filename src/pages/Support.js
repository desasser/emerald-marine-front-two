import * as React from "react"
import { Typography } from '@material-ui/core'
import Hero from "../components/Hero"
import SupportContent from "../components/SupportContent"

const Support = () => (
  <>
    <Hero />
    <Typography variant='h2' style={{marginTop: '50px'}}>Support</Typography>
    <SupportContent></SupportContent>
  </>
)

export default Support