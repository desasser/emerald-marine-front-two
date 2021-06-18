import React from 'react'
import InputForm from '../components/InputForm'
import SupportAccordian from '../components/SupportAccordian'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import VerticalTabs from './VerticalTabs';

const useStyles = makeStyles((theme) => ({
  flexBox: {
    flexGrow: 1,
    // backgroundColor: 'salmon',
    // height: 200,
  },
  boxMargin: {
    width: '80%',
    margin: '20px auto',
  },
  mediaRoot: {
    maxWidth: 350,
  },
  mediaHeight: {
    height: 250
  },
  formStyle: {
    margin: '10px auto',
    width: '100%',
    display: 'flex',
  },
  inputStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: '0.5em',
    flex: '1 0 auto',
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#74b4ab',
      },
    }
  }
}));

export default function SupportContent() {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: '20px' }}>
      <InputForm classes={classes} text={''} label={'search...'} buttonText={'search'} />
      <hr></hr>
      <div className={`${classes.attnBox} ${classes.boxMargin}`}>
        <Typography>
          Whether you have questions about the ALERT man-overboard system or the OSCAR Water Rescue Training Dummy, the experts at Emerald Marine Products are here for you. From answers to frequently asked questions to live support for our marine safety equipment, you'll find what you need here. We offer a variety of helpful information on our website, including documentation for our man-overboard systems and otehr marine safety equipment. If your question is not answered in the list below or in our product documentation, don't hesitate to contact us. We can be reached over the phone at 206.965.8207 and online via email.
        </Typography>
      </div>

      <Typography variant='h3' style={{ margin: '1em 0px', color: '#74b4ab' }}>
        Who is protected with the ALERT products?
      </Typography>
      <div className={`${classes.attnBox} ${classes.boxMargin}`}>
        {/* TODO: Make tabs dynamic via props */}
        <VerticalTabs></VerticalTabs>
      </div>
      <Typography variant='h3' style={{ margin: '1em 0px', color: '#74b4ab' }}>
        FAQ
      </Typography>
      <SupportAccordian></SupportAccordian>
      <Typography variant='h3' style={{ margin: '1em 0px', color: '#74b4ab' }}>
        Video Library
      </Typography>
      <div className={classes.boxMargin}>
        <VerticalTabs></VerticalTabs>
      </div>
      <Typography variant='h3' style={{ margin: '1em 0px', color: '#74b4ab' }}>
        Product Documentation and information
      </Typography>
      <div className={classes.boxMargin}>
        <VerticalTabs></VerticalTabs>
      </div>
    </Container>
  )
}
