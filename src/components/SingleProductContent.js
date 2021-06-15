import React from 'react'
import { Typography, Grid, Button, Container } from '@material-ui/core';

export default function SingleProductContent() {
  return (
    <Grid container style={{ width: '80%' }} spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h2' style={{ marginTop: '50px', color: '#74b4ab', textAlign: 'right', marginBottom: '20px' }}>
          Product Name
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src="https://via.placeholder.com/350x550" style={{ display: 'inline-block' }} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5" style={{ marginBottom: '1.5rem', textAlign: 'right' }}>
          $XXXX.XX
        </Typography>
        <Typography style={{ width: '50%' }} component='span'>
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
        </Typography>
        <br></br>
        <img src="https://via.placeholder.com/150" style={{ display: 'inline-block' }} />
        <Typography variant="subtitle2">
          SKU:
        </Typography>
        <Typography variant="subtitle2">
          Categories:
        </Typography>
        <Typography variant="subtitle2">
          Tags:
        </Typography>
        <Button variant="contained" style={{ height: '56px', width: '100%', backgroundColor: '#f5ed5eff', fontSize: '16px' }}>RFQ</Button>
      </Grid>
      {/* <Grid item xs={7}></Grid>
      <Grid item xs={3}>
        
      </Grid>
      <Grid item xs={2}></Grid> */}
      <Grid item xs={12}>
        <Typography variant="h5" style={{marginTop: '20px'}}>Details</Typography>
        <Container maxWidth='md' style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>

        </Container>
      </Grid>
      <Grid item xs={12} ></Grid>
      <Grid item xs={12} >
        <div style={{ display: 'inline-block', display: 'flex', justifyContent: "space-between" }}>
          <Typography variant="h5" component="span">Specifications</Typography>
          <Typography variant="subtitle2" component="span" style={{ alignSelf: 'flex-end' }}>Download Product Sheet</Typography>
        </div>
        <Container maxWidth='md' style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>

        </Container>
      </Grid>
    </Grid>
  )
}
