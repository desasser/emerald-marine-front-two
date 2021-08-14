import React, { useState, useEffect } from 'react'
import SupportAccordian from '../components/SupportAccordian'
import { Container, Typography, Link, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import VerticalTabs from './VerticalTabs';
import SimpleTabs from './SimpleTabs';
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
    title: 'ALERT2 Man-Overboard Alarm System Testimonial',
    video: "https://www.youtube.com/watch?v=Bnh3caPYvhY&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 1,
    title: 'Demonstration of the ALERT2 Man-Overboard Alarm System',
    video: "https://www.youtube.com/watch?v=3u9OY94py8s&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 2,
    title: 'Testing the ALERT2 Man-Overboard Alarm System',
    video: "https://www.youtube.com/watch?v=Qh9KTNwu720&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 3,
    title: 'ALERT2 Portable Direction Finder',
    video: "https://www.youtube.com/watch?v=7hTGM9L9El4&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 4,
    title: 'ALERT418 Man-Overboard Alarm System Introduction',
    video: "https://www.youtube.com/watch?v=uQ9L2R6GBLU&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 5,
    title: 'OSCAR - Water Rescue Training Dummy',
    video: "https://www.youtube.com/watch?v=grQ30xpWO_8&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 6,
    title: 'Proper Storage of ALERT2 Man-Overboard Transmitter',
    video: "https://www.youtube.com/watch?v=a8cmMlaPxhE&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 7,
    title: 'ALERT2 Battery and Circuit Board Replacement',
    video: "https://www.youtube.com/watch?v=I_tM94CLTCM&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 8,
    title: 'ALERT2 Spray-tight Pouch swap out',
    video: "https://www.youtube.com/watch?v=ooki3zs9g4k&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 9,
    title: 'ALERT2 Spraytight Pouch Alteration',
    video: "https://www.youtube.com/watch?v=x8qh6AobMjQ&ab_channel=EmeraldMarineProducts",
  },
  {
    id: 10,
    title: 'ALERT418 Transmitter Pouch Placement',
    video: "https://www.youtube.com/watch?v=O5K72y2tbHA&ab_channel=EmeraldMarineProducts",
  },
]

const allProducts = [
  {
    subHeader: 'ALERT Man-Overboard Alarm System Product Documentation',
    subText: '',
    links: [
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
  },
  {
    subHeader: 'ALERT Man-Overboard Receiver Product Documentation',
    subText: 'ALERT2 and ALERT418 Receivers ship with the same wiring components, therefore these documents apply to both types of ALERT Receivers.',
    links: [
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
  },
  {
    subHeader: 'ALERT Man-Overboard Receiver Wiring Diagrams',
    subText: 'ALERT2 and ALERT418 Receivers have the same dry contacts on the back of the units, therefore these documents apply to both type of ALERT Receivers.',
    links: [
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
  },
]

const allProductLinks = allProducts[0].links.concat(allProducts[1].links,allProducts[2].links)

const faq = [
  {
    ariaControls: 'panel1a-content',
    id: "panel1a-header",
    question: 'What is the ALERT Man-Overboard Alarm System?',
    answer: "The ALERT Man-Overboard Alarm System is a marine safety system designed to notify the vessel if someone falls overboard within seconds, and locate the Crew Member Overboard (MOB). It includes an automatic, water-activated Transmitter and an on-vessel Receiver. Additionally, a Portable Direction Finder can be utilized to home in on the Transmitter's transmission. Upon hitting the water, the Transmitter immediately transmits to the Receiver on the boat, alerting the crew of a fall overboard. The Receiver sounds an internal siren and can be wired for additional Man-Overboard alerting functions. The Receiver can also shutdown the engine, and mark a position on a compatible chart-plotter system. There are two types of ALERT Man-Overboard Alarm System Products. Both work with each other's devices and have features and benefits that works best for your safety budget."
  },
  {
    ariaControls: 'panel2a-content',
    id: "panel2a-header",
    question: 'What is the ALERT Transmitter?',
    answer: "The ALERT2™ and ALERT418 Transmitters transmits to the vessel upon hitting water, immediately notifying the crew of a fall overboard. Because the transmitters are automatically water activated, they will perform the duty of fall overboard notification even if the person in the water is incapacitated or panicked."
  },
  {
    ariaControls: 'panel3a-content',
    id: "panel3a-header",
    question: 'What is the difference between the ALERT2 and ALERT418 Transmitters?',
    answer: "Both the ALERT2 and the ALERT418 Transmitters transmit to the vessel upon hitting water, immediately notifying the crew of a fall overboard. The ALERT418 was introduced to the market in Fall 2016. It has been engineered with the latest technology, making it more efficient and easy to use. It is also slightly smaller and lighter than the ALERT2, and includes a lanyard and clip to attach to the personal flotation device, making it even more seamless to wear. The ALERT418 also includes a bank of 6 LED lights for illumination when water-activated. The unit is undergoing review by the United States Coast Guard to meet regulations to use as a personal light beacon. Both the ALERT2 and ALERT418 Transmitters work with the ALERT2 and ALERT418 Receivers."
  },
  {
    ariaControls: 'panel4a-content',
    id: "panel4a-header",
    question: 'How does the ALERT Man-Overboard Alarm System know when someone falls overboard?',
    answer: "The ALERT Man-Overboard Alarm System has a water activated Transmitter (either the ALERT2 or the ALERT418) that is easily and comfortably worn by the deck crew. If the Transmitter becomes submerged for a few seconds, it switches on automatically, transmitting a radio signal to the ALERT Receiver on the boat. When the Receiver picks up the signal it sounds a loud alarm, alerting the deck crew, allowing for a locally managed rescue operation. It works in fresh or salt water. With the contacts on the back of the Receiver, additional functions can be programmed to kill the engine or amplify alerting functions."
  },
  {
    ariaControls: 'panel5a-content',
    id: "panel5a-header",
    question: 'How does the ALERT Man-Overboard Alarm System locate the person overboard?',
    answer: "With the optional ALERT2 Portable Direction Finder, the victim can be located when the hand held antenna is swept around the horizon and pointed in the direction of the MOB. Maximum range is 1 nautical mile."
  },
  {
    ariaControls: 'panel6a-content',
    id: "panel6a-header",
    question: 'How does the ALERT Man-Overboard Alarm System help the singlehander?',
    answer: "The shipboard mounted receiver has relay contacts that can be wired into various devices such as an engine shut down or autopilot disconnect. This gives the victim a chance to swim back to the boat."
  },
  {
    ariaControls: 'panel7a-content',
    id: "panel7a-header",
    question: 'What is the difference between the ALERT Man-Overboard Alarm System and an EPIRB?',
    answer: "An EPIRB is designed to transmit to a satellite which will retransmit a position to the authorities. It may take many hours before a search effort is coordinated. The ALERT Man-Overboard Alarm System is a local transmission beacon for the boat and provides quick notification for the fastest rescue because it's automatic water activation alerts the boat as the MOB is coming up for their first breath of fresh air."
  },
  {
    ariaControls: 'panel8a-content',
    id: "panel8a-header",
    question: 'How many ALERT Man-Overboard Transmitters can be used?',
    answer: "There is no limit to the number of Transmitters. Every crew member should wear one on their Personal Flotation Device (PFD)."
  },
  {
    ariaControls: 'panel9a-content',
    id: "panel9a-header",
    question: 'Will the ALERT Man-Overboard Transmitter switch on if I get splashed on deck?',
    answer: "When mounted in its pouch (included), rain and waves splashing against it will not activate the water sensor. However, in conditions where excessive water is around the crew member, for example commercial fishing vessels where pulling lines over shoulder will drip water over the Transmitter, a Spray-tight pouch is available to protect the ALERT2 and the ALERT418 from sending unwanted transmissions."
  },
  {
    ariaControls: 'panel10a-content',
    id: "panel10a-header",
    question: 'Will the ALERT interface with my chartplotter software?',
    answer: "The ALERT418 Receiver has a serial port and can be connected to Chartplotting software that accepts a NMEA 0183 complaint MOB command."
  },
  {
    ariaControls: 'panel11a-content',
    id: "panel11a-header",
    question: 'Will the ALERT Transmitters work underwater?',
    answer: "Technically the ALERT2 and ALERT418 Transmitters are transmitting underwater but the transmission might not be received by the Receiver if the transmitter is deep in the water. The UHF frequency is based on “line of sight” therefore the higher the transmitter is located (as in held overhead by the person in the water) a better reception can occur. This is why a PFD should be worn and the Transmitter mounted high on the PFD."
  },
  {
    ariaControls: 'panel12a-content',
    id: "panel12a-header",
    question: 'What do I have to do to maintain the ALERT Man-Overboard Alarm System?',
    answer: "The ALERT2 Transmitter uses two (2) 3.6 volt replaceable lithium batteries (included) with a 10-year shelf life. The ALERT418 Transmitter uses two (2) CR123A replaceable lithium batteries (included) with a 10-year shelf life. You can arm the Transmitter and leave it in that state for up to 10 years. Though we highly recommend testing your ALERT2 and ALERT418 Transmitters periodically. Replace the batteries after emergency use."
  },
  {
    ariaControls: 'panel13a-content',
    id: "panel13a-header",
    question: 'Where can I buy any of the ALERT Man-Overboard Alarm System products?',
    answer: "You can purchase directly from Emerald Marine Products by calling 800-426-4201, or contact your favorite Marine Supply Dealer and they can order it for you."
  },
  {
    ariaControls: 'panel14a-content',
    id: "panel14a-header",
    question: 'Do I need a radio license?',
    answer: "The ALERT Man-Overboard Alarm System is approved by the U.S. FCC and by Industry Canada. No license is required."
  },
  {
    ariaControls: 'panel15a-content',
    id: "panel15a-header",
    question: 'Who is using the ALERT Man-Overboard Alarm System?',
    answer: "The ALERT System is currently in use by the U.S. Coast Guard, Pilot Vessels, Tug Boats, Fishing Vessels, Powerboats, and Offshore Sailboats."
  },
]

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
      setProductState(allProductLinks)
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
            <Typography variant="h3" style={{ color: '#74b4ab', marginBottom: '1rem' }}>
              Contents
            </Typography>
            <Link href="#videos" style={{ display: 'block', fontSize: '1.5rem', marginLeft: '3rem' }}>Product Video Library</Link>
            <Link href="#docs" style={{ display: 'block', fontSize: '1.5rem', marginLeft: '3rem' }}>Product Documentation and information</Link>
            <Link href="#faq" style={{ display: 'block', fontSize: '1.5rem', marginLeft: '3rem' }}>Frequently Asked Questions</Link>

            <Typography variant='h3' style={{ marginTop: '3rem', marginBottom: '1rem', color: '#74b4ab' }}>We are here to help</Typography>
            <Typography style={{ width: '80%', margin: '0 auto' }}>
              Whether you have questions about the ALERT man-overboard system or the OSCAR Water Rescue Training Dummy, the experts at Emerald Marine Products are here for you. From answers to frequently asked questions to live support for our marine safety equipment, you'll find what you need here. We offer a variety of helpful information on our website, including documentation for our man-overboard systems and other marine safety equipment. If your question is not answered in the list below or in our product documentation, don't hesitate to contact us. We can be reached over the phone at 206.965.8207 and online via email.
            </Typography>
          </div>
        </>}
      {/* Marketing Info */}

      {/* Videos */}
      <Typography variant='h3' style={{ margin: '1rem 0px', color: '#74b4ab' }} id="videos">
        Product Video Library
      </Typography>

      <Hidden xsDown>
        <VerticalTabs content={videoState}></VerticalTabs>
      </Hidden>

      <Hidden smUp>
        <SimpleTabs content={videoState}></SimpleTabs>
      </Hidden>
      {/* Videos */}



      {/* Product Docs */}
      <div className={classes.boxMargin}>
      </div>
      <Typography variant='h3' style={{ margin: '1rem 0px', color: '#74b4ab' }} id="docs">
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

          <div>
            <SupportAccordian input={input} content={allProducts} classes={classes} />
          </div>
        </div>
      }
      {/* Product Docs */}

      {/* FAQ */}
      <Typography variant='h3' style={{ margin: '1rem 0px', color: '#74b4ab' }}>
        Frequently Asked Questions
      </Typography>
      <SupportAccordian input={input} content={faq}></SupportAccordian>
      {/* FAQ */}
    </Container>
  )
}


