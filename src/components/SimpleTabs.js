import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box, AppBar } from '@material-ui/core';
import ReactPlayer from 'react-player/youtube'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: 20
  },
}));

export default function SimpleTabs({ content }) {
  const classes = useStyles();
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="Scrollable tabs for marketing info"
          indicatorColor="primary"
          scrollButtons="on"
          elevation={0}
        >
          {content.map(e => (
            <Tab label={e.title} {...a11yProps(e.id)} />
          ))}
        </Tabs>
      </AppBar>
      {content.map((e, index) => (
        (e.content ?
          <TabPanel value={value} index={index}>
            <img src={e.photo} style={{ width: '100%', margin: '1rem auto', display: 'block', maxWidth: '100%', maxHeight: '100%', }} />
            {e.content}
          </TabPanel>
          :
          <TabPanel value={value} index={index}>
            <ReactPlayer url={e.video} width={'100%'} style={{ margin: '3.5em 0', }} />
          </TabPanel>
        )
      ))}
    </div>
  )
}