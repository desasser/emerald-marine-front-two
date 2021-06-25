import React from 'react';
import { Typography } from '@material-ui/core';

const NotFound = () => (
  <div style={{height: '50vh'}}>
    <Typography variant='h2' style={{color: '#74b4ab', marginTop:'2em'}}>404 - Not Found! </Typography>
    <Typography>This page does not exist, please return to a different page.</Typography>
  </div>
);

export default NotFound;