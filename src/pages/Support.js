import * as React from "react"
import { Typography } from '@material-ui/core'
import Rescue from '../images/rescue.jpg'
import SupportContent from "../components/SupportContent"

const Support = () => (
  <>
    <div
      style={{ backgroundImage: `url(${Rescue})`, height: '500px', backgroundSize: 'cover', width: '80%', backgroundPosition: 'bottom' }}
      alt='Man overboard rescue exercise'
    />
    <Typography variant='h2' style={{marginTop: '50px'}}>Support</Typography>
    <SupportContent></SupportContent>
  </>
)

export default Support