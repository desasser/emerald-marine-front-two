import * as React from "react"
import { Typography } from '@material-ui/core'
import HandsUp from '../images/hand_waver.jpg'
import SupportContent from "../components/SupportContent"
import Page from "../components/Page"
import {Helmet} from 'react-helmet'

const Support = () => (
  <Page>
    <Helmet>
      <title>Emerald Marine Products Support</title>
      <meta
      name="description"
      content="Emerald Marine Products offers a variety of helpful information on our website, including documentation for our man-overboard systems and other marine safety equipment."/>
    </Helmet>
    <div
        style={{ backgroundImage: `url(${HandsUp})`, height: '450px', backgroundSize: 'cover', width: '100vw', backgroundPosition: 'bottom'  }}
        alt='Man overboard'
      />
    <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab' }}>Support</Typography>
    <div style={{maxWidth: '80%'}}>
      <SupportContent></SupportContent>
    </div>
  </Page>
)

export default Support