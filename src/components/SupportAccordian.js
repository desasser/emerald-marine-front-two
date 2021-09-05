import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold'
  },
}));



export default function SimpleAccordion({ input, content, classes }) {
  const customClasses = useStyles();
  const [filteredContent, setFilteredContent] = useState([]);

  useEffect(() => {
    if (input.length > 0) {
      const filtered = filteredContent.filter(item => {
        if (item.question) {
          return item.question.toLowerCase().includes(input.toLowerCase())
        } else {
          return item.links.link.toLowerCase().includes(input.toLowerCase())
        }
      });
      setFilteredContent(filtered)
    } else {
      setFilteredContent(content)
    }
  }, [input])

  return (
    <div className={customClasses.root} id='faq'>
      {filteredContent.map(item => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={item.ariaControls}
            id={item.id}
          >
            <Typography className={customClasses.heading}>{item.question ? item.question : item.subHeader}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{flexDirection: 'column'}}>
            {item.answer ?
                (item.answer.map(e => <Typography style={{marginBottom: '1rem'}}> {item.answer} </Typography>))
              :
              <div>
                <Typography>
                  {item.subText}
                </Typography>
                <div style={{margin:'1rem'}}>
                  {item.links.map(link =>
                    <Link href={link.link} target="_blank" rel="noopener" variant="h6" className={classes.linkStyle}>
                      {link.title}
                    </Link>
                  )}
                </div>
              </div>
            }
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
