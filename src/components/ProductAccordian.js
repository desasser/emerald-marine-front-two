import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function ProductAccordian({ details, classes }) {

  return (
    <div className={classes.root}>
      {JSON.parse(details).map(item => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.accordion}
          >
            <Typography variant='h5' className={classes.heading}>{item.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
