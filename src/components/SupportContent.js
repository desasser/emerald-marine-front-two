import React, { useState, useEffect } from 'react'
import SupportAccordian from '../components/SupportAccordian'
import { Container, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import VerticalTabs from './VerticalTabs';
import SearchBar from './SearchBar';


const useStyles = makeStyles((theme) => ({
  flexBox: {
    flexGrow: 1,
  },
  boxMargin: {
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
  },
  linkStyle: {
    cursor: 'pointer',
    display: 'block',
    margin: '0.5em 0',
    color: 'goldenrod'
  }
}));



const videos = [
  {
    id: 0,
    title: 'ALERT418 Transmitter Pouch Placement',
    video: "https://www.youtube.com/watch?v=O5K72y2tbHA&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 1,
    title: 'ALERT418 Man-Overboard Alarm System Introduction',
    video: "https://www.youtube.com/watch?v=uQ9L2R6GBLU&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 2,
    title: 'ALERT2 Spraytight Pouch Alteration',
    video: "https://www.youtube.com/watch?v=x8qh6AobMjQ&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 3,
    title: 'ALERT2 Portable Direction Finder',
    video: "https://www.youtube.com/watch?v=7hTGM9L9El4&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 4,
    title: 'ALERT2 Battery and Circuit Board Replacement',
    video: "https://www.youtube.com/watch?v=I_tM94CLTCM&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 5,
    title: 'Proper Storage of ALERT2 Man-Overboard Transmitter',
    video: "https://www.youtube.com/watch?v=a8cmMlaPxhE&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 6,
    title: 'Demonstration of the ALERT2 Man-Overboard Alarm System',
    video: "https://www.youtube.com/watch?v=3u9OY94py8s&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 7,
    title: 'OSCAR - Water Rescue Training Dummy',
    video: "https://www.youtube.com/watch?v=grQ30xpWO_8&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 8,
    title: 'ALERT2 Man-Overboard Alarm System Testimonial',
    video: "https://www.youtube.com/watch?v=Bnh3caPYvhY&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 9,
    title: 'Testing the ALERT2 Man-Overboard Alarm System',
    video: "https://www.youtube.com/watch?v=Qh9KTNwu720&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 10,
    title: 'ALERT2 Spray-tight Pouch swap out',
    video: "https://www.youtube.com/watch?v=ooki3zs9g4k&ab_channel=EmeraldMarineProducts",
  },
]

const productsOne = [
  {
    link: 'https://drive.google.com/file/d/190S1GkyLBc58WFfIZtvchaOBFNEUSkAx/view?usp=sharing',
    title: "ALERT2 Man-Overboard Alarm System Owner's Manual",
  },
  {
    link: 'https://drive.google.com/file/d/17GAlVWUcf1JYkrbpcN09VsHre3mIbVXo/view?usp=sharing',
    title: 'ALERT2 Transmitter User Guide',
  },
  {
    link: 'https://drive.google.com/file/d/1qPNS68udmCNSyHP0MHNWZIpqKBiEwEp1/view?usp=sharing',
    title: 'ALERT Man Overboard Alarm System Frequently Asked Questions (FAQ)',
  },
  {
    link: 'https://drive.google.com/file/d/1cH8BxylNIwEqhKmNsshHesFIPbdYGRL_/view?usp=sharing',
    title: 'ALERT2 Intrinsically Safe Transmitter Replacement Batteries Product Sheet',
  },
  {
    link: 'https://drive.google.com/file/d/1ZiRJZjtSkSSFkhZumGhnilWvI394E3of/view?usp=sharing',
    title: 'How to Read Code on Printed Circuit Board on an ALERT2 Transmitter or ALERT Receivers',
  },
  {
    link: 'https://drive.google.com/file/d/1W5hnEUNgf5hC-BlftqmTPlRqSh51N4Th/view?usp=sharing',
    title: 'ALERT418 Transmitter User Guide',
  },
  {
    link: 'https://drive.google.com/file/d/1g5xLLdjQJgk9Z5BzscwND-qZi4QjnaII/view?usp=sharing',
    title: "ALERT418 Receiver Owner's Manual",
  },
  {
    link: 'https://drive.google.com/file/d/1CD1NysrhtsI7I6-X7uF0IZQ10oO1oqwm/view?usp=sharing',
    title: 'ALERT418 Product Specification Sheet',
  },
]

const productsTwo = [
  {
    link: 'https://drive.google.com/file/d/1kpG0pgr-5ctJmn_3IC_f48WDOGLP0Upy/view?usp=sharing',
    title: 'ALERT2 Receiver Antenna Specification Sheet',
  },
  {
    link: 'https://drive.google.com/file/d/1k-O8vnKjrwHYrrfF7fdCYRoRpyrRsP61/view?usp=sharing',
    title: 'ALERT2 Receiver Antenna Mount Assembly Instructions',
  },
  {
    link: 'https://drive.google.com/file/d/1Y4RY_-odpgafZkJYPpfc_F9aNXD-MCwX/view?usp=sharing',
    title: 'ALERT2 Receiver Mounting Bracket for Antenna with TNC Connector',
  },
  {
    link: 'https://drive.google.com/file/d/1JH3uiJyddrEQ8nyU3ainZh0kuFCqd_Dq/view?usp=sharing',
    title: 'ALERT2 Receiver Coaxial Cable Specifications Sheet',
  },
]

const productsThree = [
  {
    link: 'https://drive.google.com/file/d/1o-zR_-MrP2zb7vayuT-7Ss1h7l3zMZfB/view?usp=sharing',
    title: 'Engine Shutdown Instructions for use with either ALERT2 or ALERT418 Receivers',
  },
  {
    link: 'https://drive.google.com/file/d/1KKC5KMc-uMHLGMTqYzTiA4nIgRyfa38i/view?usp=sharing',
    title: 'Wiring Diagram to Cut Power for Engine Shutdown for use with either ALERT2 or ALERT418 Receivers',
  },
  {
    link: 'https://drive.google.com/file/d/1Sz2h3CjtzkQINEzobfRDxZlFYUGJGcR0/view?usp=sharing',
    title: 'Wiring Diagram for Applying Power for Engine Shutdown using a Double Pull Double Throw (DPDT) Relay for use with either ALERT2 or ALERT418 Receivers',
  },
  {
    link: 'https://drive.google.com/file/d/1OqW-cYW-TjCAhvoOYzuMCfLDnY66KvUv/view?usp=sharing',
    title: 'Wiring Diagram for the Singlehander or Solo Fisherman using a Single Pull Relay for use with either ALERT2 or ALERT418 Receivers',
  },
  {
    link: 'https://drive.google.com/file/d/1LZ2-1nyY0ClCJVMCrhDBQhAwF6FmP4RG/view?usp=sharing',
    title: 'Wiring Diagram for Attaching an External Alarm or Strobe using a Single Pull Relay for use with either ALERT2 or ALERT418 Receivers',
  },
]

const products = productsOne.concat(productsTwo, productsThree)

export default function SupportContent() {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const [productState, setProductState] = useState([])
  const [videoState, setVideoState] = useState([])

  useEffect(() => {
    if (input.length > 0) {
      const filteredProducts = productState.filter(item => {
        return item.title.toLowerCase().includes(input.toLowerCase())
      });
      const filteredVideos = videoState.filter(video => {
        return video.title.toLowerCase().includes(input.toLowerCase())
      });
      setProductState(filteredProducts)
      setVideoState(filteredVideos)
    } else {
      setProductState(products)
      setVideoState(videos)
    }
  }, [input])

  const updateInput = (input) => {
    setInput(input);
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <SearchBar input={input} onChange={updateInput} />
      <hr></hr>
      {input.length > 0 ?
        null
        :
        <>
          <div className={classes.boxMargin}>
            <Typography variant='h3' style={{ marginTop: '3rem', marginBottom: '1rem', color: '#74b4ab' }}>We are here to help.</Typography>
            <Typography style={{ width: '80%', margin: '0 auto' }}>
              Whether you have questions about the ALERT man-overboard system or the OSCAR Water Rescue Training Dummy, the experts at Emerald Marine Products are here for you. From answers to frequently asked questions to live support for our marine safety equipment, you'll find what you need here. We offer a variety of helpful information on our website, including documentation for our man-overboard systems and other marine safety equipment. If your question is not answered in the list below or in our product documentation, don't hesitate to contact us. We can be reached over the phone at 206.965.8207 and online via email.
            </Typography>
          </div>
        </>}
      {/* Marketing Info */}

      {/* FAQ */}
        <Typography variant='h3' style={{ margin: '1rem 0px', color: '#74b4ab' }}>
          FAQ
        </Typography>
      <SupportAccordian input={input}></SupportAccordian>
      {/* FAQ */}

      {/* Videos */}
      <Typography variant='h3' style={{ margin: '1rem 0px', color: '#74b4ab' }}>
        Video Library
      </Typography>
      <VerticalTabs content={videoState}></VerticalTabs>
      {/* Videos */}

      {/* Product Docs */}
      <div className={classes.boxMargin}>
      </div>
      <Typography variant='h3' style={{ margin: '1rem 0px', color: '#74b4ab' }}>
        Product Documentation and information
      </Typography>
      {input.length > 0 ?
        productState.map(item => (
          <Link href={item.link} target="_blank" rel="noopener" variant="h6" className={classes.linkStyle}>
            {item.title}
          </Link>
        ))
        :
        <div style={{ margin: '20px auto', width: '90%' }}>
          <Typography variant="h4" style={{ margin: '1rem 0' }}> ALERT Man-Overboard Alarm System Product Documentation </Typography>
          <div style={{ width: '85%', margin: '0 auto' }}>
            {productsOne.map(item => (
              <Link href={item.link} target="_blank" rel="noopener" variant="h6" className={classes.linkStyle}>
                {item.title}
              </Link>
            ))}
          </div>
          <Typography variant="h4" style={{ margin: '1em 0' }}>
            ALERT Man-Overboard Receiver Product Documentation
          </Typography>
          <Typography style={{ margin: '1em 0' }}>
            ALERT2 and ALERT418 Receivers ship with the same wiring components, therefore these documents apply to both types of ALERT Receivers.
          </Typography>
          <div style={{ width: '85%', margin: '0 auto' }}>
            {productsTwo.map(item => (
              <Link href={item.link} target="_blank" rel="noopener" variant="h6" className={classes.linkStyle}>
                {item.title}
              </Link>
            ))}
          </div>
          <Typography variant="h4" style={{ margin: '1em 0' }}>
            ALERT Man-Overboard Receiver Wiring Diagrams
          </Typography>
          <Typography style={{ margin: '1em 0' }}>
            ALERT2 and ALERT418 Receivers have the same dry contacts on the back of the units, therefore these documents apply to both type of ALERT Receivers.
          </Typography>
          <div style={{ width: '85%', margin: '0 auto' }}>
            {productsThree.map(item => (
              <Link href={item.link} target="_blank" rel="noopener" variant="h6" className={classes.linkStyle}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      }
    </Container>
  )
}


