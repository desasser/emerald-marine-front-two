import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function ContactInfo() {
  return (
    <div>
      <Typography variant="body1" component="p" style={{color: 'white', textAlign: 'right'}}><strong>Toll Free US and Canada:</strong> +1 800.426.4201</Typography>
      <Typography variant="body1" component="p" style={{color: 'white', textAlign: 'right'}}><strong>Telephone:</strong> +1 206.965.8207</Typography>
      <Typography variant="body1" component="p" style={{color: 'white', textAlign: 'right'}}><strong>Email:</strong> info@emeraldmarineproducts.com</Typography>
    </div>
  )
}