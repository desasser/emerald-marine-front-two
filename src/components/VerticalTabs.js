import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Typography, Box } from '@material-ui/core';

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
        {/* <Tab label="Alerts in seconds" {...a11yProps(0)} />
        <Tab label="Automatically activated" {...a11yProps(1)} />
        <Tab label="Wired for engine kill" {...a11yProps(2)} />
        <Tab label="Plots overboard waypoint" {...a11yProps(3)} /> */}
        {content.map(e => (
          <Tab label={e.title} {...a11yProps(e.id)} />
        ))}
      </Tabs>
      {content.map(e => (
        <TabPanel value={value} index={e.id}>
          {e.content}
        </TabPanel>
      ))}

      {/* <TabPanel value={value} index={0}>
        <p>
          When every second counts, the ALERT system instantaneously alarms the vessel, providing the crew the critical time needed for a successful man-overboard rescue. Unlike AIS, the response of the ALERT System is immediate.
        </p>
        <p>
          There is no lag time connecting with satellites, and there is no reliance on another product to turn on our automatic water-activated alerting device.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>
          The lightweight, water-activated Transmitter easily attaches to a personal flotation device. Upon immersion, the Transmitter instantly alerts the crew of a man-overboard.
        </p>
        <p>
          The proprietary 418Mhz frequency allows it to be automatically activated so it doesn’t have to rely on additional equipment to be triggered.
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>
          For Singlehanders and Solo Fisherman, the ALERT System can be wired to the boat engine. In the event that someone falls overboard, the ALERT System can shut down the engine, giving the man-overboard the opportunity to get back to the vessel.
        </p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p>
          The ALERT Receiver can be connected to a compatible GPS plotter to instantly mark the boat’s location at the time of the fall overboard. This makes for a speedy and successful water rescue.
        </p>
      </TabPanel> */}
    </div>
  )
}
