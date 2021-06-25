import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import PDFLibrary from './PDFLibrary';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '80%' }}
    >
      {value === index && (
        <Box p={3} >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#cfcfcf84',
    display: 'flex',
    width: '100%',
    margin: 20
  },
  tabs: {
    borderRight: `1px solid green`,
  },
}));

export default function VerticalTabs({ content }) {
  const classes = useStyles();
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  console.log('contents', content);

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs for marketing info"
        className={classes.tabs}
      >
        {content.map(e => (
          <Tab label={e.title} {...a11yProps(e.id)} />
        ))}
      </Tabs>
      {content.map(e => (
        <TabPanel value={value} index={e.id}>
          {e.content}
        </TabPanel>
      ))}
      {/* {content[0].file ? {
        content.map(e => (

        ))
      } : null} */}
    </div>
  )
}
