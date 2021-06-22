import * as React from "react"
import { Typography, Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Rescue from '../images/rescue.jpg'
import SupportContent from "../components/SupportContent"

const Support = () => (
  <>
      <div style={{ marginTop: '30px', width: '100%' }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" to="/" style={{ textDecoration: 'none', color: 'grey' }}>
            Home
          </Link>
          <Typography color="textPrimary">Support</Typography>
        </Breadcrumbs>
      </div>
      {/* <div
        style={{ backgroundImage: `url(${Rescue})`, height: '500px', backgroundSize: 'cover', width: '80%', backgroundPosition: 'bottom' }}
        alt='Man overboard rescue exercise'
      /> */}
      <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab' }}>Support</Typography>
      <SupportContent></SupportContent>
    </>
    )

    export default Support