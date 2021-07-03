import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
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

const faq = [
  {
    ariaControls: 'panel1a-content',
    id:"panel1a-header",
    question: 'What is the ALERT Man-Overboard Alarm System?',
    answer: "The ALERT Man-Overboard Alarm System is a marine safety system designed to notify the vessel if someone falls overboard within seconds, and locate the Crew Member Overboard (MOB). It includes an automatic, water-activated Transmitter and an on-vessel Receiver. Additionally, a Portable Direction Finder can be utilized to home in on the Transmitter's transmission. Upon hitting the water, the Transmitter immediately transmits to the Receiver on the boat, alerting the crew of a fall overboard. The Receiver sounds an internal siren and can be wired for additional Man-Overboard alerting functions. The Receiver can also shutdown the engine, and mark a position on a compatible chart-plotter system. There are two types of ALERT Man-Overboard Alarm System Products. Both work with each other's devices and have features and benefits that works best for your safety budget."
  },
  {
    ariaControls: 'panel2a-content',
    id:"panel2a-header",
    question: 'What is the ALERT Transmitter?',
    answer: "The ALERT2™ and ALERT418 Transmitters transmits to the vessel upon hitting water, immediately notifying the crew of a fall overboard. Because the transmitters are automatically water activated, they will perform the duty of fall overboard notification even if the person in the water is incapacitated or panicked."
  },
  {
    ariaControls: 'panel3a-content',
    id:"panel3a-header",
    question: 'What is the difference between the ALERT2 and ALERT418 Transmitters?',
    answer: "Both the ALERT2 and the ALERT418 Transmitters transmit to the vessel upon hitting water, immediately notifying the crew of a fall overboard. The ALERT418 was introduced to the market in Fall 2016. It has been engineered with the latest technology, making it more efficient and easy to use. It is also slightly smaller and lighter than the ALERT2, and includes a lanyard and clip to attach to the personal flotation device, making it even more seamless to wear. The ALERT418 also includes a bank of 6 LED lights for illumination when water-activated. The unit is undergoing review by the United States Coast Guard to meet regulations to use as a personal light beacon. Both the ALERT2 and ALERT418 Transmitters work with the ALERT2 and ALERT418 Receivers."
  },
  {
    ariaControls: 'panel4a-content',
    id:"panel4a-header",
    question: 'How does the ALERT Man-Overboard Alarm System know when someone falls overboard?',
    answer: "The ALERT Man-Overboard Alarm System has a water activated Transmitter (either the ALERT2 or the ALERT418) that is easily and comfortably worn by the deck crew. If the Transmitter becomes submerged for a few seconds, it switches on automatically, transmitting a radio signal to the ALERT Receiver on the boat. When the Receiver picks up the signal it sounds a loud alarm, alerting the deck crew, allowing for a locally managed rescue operation. It works in fresh or salt water. With the contacts on the back of the Receiver, additional functions can be programmed to kill the engine or amplify alerting functions."
  },
  {
    ariaControls: 'panel5a-content',
    id:"panel5a-header",
    question: 'How does the ALERT Man-Overboard Alarm System locate the person overboard?',
    answer: "With the optional ALERT2 Portable Direction Finder, the victim can be located when the hand held antenna is swept around the horizon and pointed in the direction of the MOB. Maximum range is 1 nautical mile."
  },
  {
    ariaControls: 'panel6a-content',
    id:"panel6a-header",
    question: 'How does the ALERT Man-Overboard Alarm System help the singlehander?',
    answer: "The shipboard mounted receiver has relay contacts that can be wired into various devices such as an engine shut down or autopilot disconnect. This gives the victim a chance to swim back to the boat."
  },
  {
    ariaControls: 'panel7a-content',
    id:"panel7a-header",
    question: 'What is the difference between the ALERT Man-Overboard Alarm System and an EPIRB?',
    answer: "An EPIRB is designed to transmit to a satellite which will retransmit a position to the authorities. It may take many hours before a search effort is coordinated. The ALERT Man-Overboard Alarm System is a local transmission beacon for the boat and provides quick notification for the fastest rescue because it's automatic water activation alerts the boat as the MOB is coming up for their first breath of fresh air."
  },
  {
    ariaControls: 'panel8a-content',
    id:"panel8a-header",
    question: 'How many ALERT Man-Overboard Transmitters can be used?',
    answer: "There is no limit to the number of Transmitters. Every crew member should wear one on their Personal Flotation Device (PFD)."
  },
  {
    ariaControls: 'panel9a-content',
    id:"panel9a-header",
    question: 'Will the ALERT Man-Overboard Transmitter switch on if I get splashed on deck?',
    answer: "When mounted in its pouch (included), rain and waves splashing against it will not activate the water sensor. However, in conditions where excessive water is around the crew member, for example commercial fishing vessels where pulling lines over shoulder will drip water over the Transmitter, a Spray-tight pouch is available to protect the ALERT2 and the ALERT418 from sending unwanted transmissions."
  },
  {
    ariaControls: 'panel10a-content',
    id:"panel10a-header",
    question: 'Will the ALERT interface with my chartplotter software?',
    answer: "The ALERT418 Receiver has a serial port and can be connected to Chartplotting software that accepts a NMEA 0183 complaint MOB command."
  },
  {
    ariaControls: 'panel11a-content',
    id:"panel11a-header",
    question: 'Will the ALERT Transmitters work underwater?',
    answer: "Technically the ALERT2 and ALERT418 Transmitters are transmitting underwater but the transmission might not be received by the Receiver if the transmitter is deep in the water. The UHF frequency is based on “line of sight” therefore the higher the transmitter is located (as in held overhead by the person in the water) a better reception can occur. This is why a PFD should be worn and the Transmitter mounted high on the PFD."
  },
  {
    ariaControls: 'panel12a-content',
    id:"panel12a-header",
    question: 'What do I have to do to maintain the ALERT Man-Overboard Alarm System?',
    answer: "The ALERT2 Transmitter uses two (2) 3.6 volt replaceable lithium batteries (included) with a 10-year shelf life. The ALERT418 Transmitter uses two (2) CR123A replaceable lithium batteries (included) with a 10-year shelf life. You can arm the Transmitter and leave it in that state for up to 10 years. Though we highly recommend testing your ALERT2 and ALERT418 Transmitters periodically. Replace the batteries after emergency use."
  },
  {
    ariaControls: 'panel13a-content',
    id:"panel13a-header",
    question: 'Where can I buy any of the ALERT Man-Overboard Alarm System products?',
    answer: "You can purchase directly from Emerald Marine Products by calling 800-426-4201, or contact your favorite Marine Supply Dealer and they can order it for you."
  },
  {
    ariaControls: 'panel14a-content',
    id:"panel14a-header",
    question: 'Do I need a radio license?',
    answer: "The ALERT Man-Overboard Alarm System is approved by the U.S. FCC and by Industry Canada. No license is required."
  },
  {
    ariaControls: 'panel15a-content',
    id:"panel15a-header",
    question: 'Who is using the ALERT Man-Overboard Alarm System?',
    answer: "The ALERT System is currently in use by the U.S. Coast Guard, Pilot Vessels, Tug Boats, Fishing Vessels, Powerboats, and Offshore Sailboats."
  },
]

export default function SimpleAccordion({ input }) {
  const classes = useStyles();
  const [filteredFaq, setFilteredFaq] = useState([]);

  // console.log('input search term', input)
  useEffect(() => {
    if (input.length > 0) {
      const filtered = filteredFaq.filter(item => {
        return item.question.toLowerCase().includes(input.toLowerCase())
      });
      setFilteredFaq(filtered)
    } else {
      setFilteredFaq(faq)
    }
  }, [input])

  return (
    <div className={classes.root}>
      {filteredFaq.map(question => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={question.ariaControls}
            id={question.id}
          >
            <Typography className={classes.heading}>{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {question.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
