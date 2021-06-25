import * as React from "react"
import { Typography } from '@material-ui/core'
import HandsUp from '../images/hand_waver.jpg'
import SupportContent from "../components/SupportContent"
import Page from "../components/Page"

const Support = () => (
  <Page>
    <div
        style={{ backgroundImage: `url(${HandsUp})`, height: '450px', backgroundSize: 'cover', width: '100vw', backgroundPosition: 'bottom'  }}
        alt='Man overboard'
      />
    <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab' }}>Support</Typography>
    <SupportContent></SupportContent>
  </Page>
)

export default Support