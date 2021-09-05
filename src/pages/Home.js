import React, { useEffect } from "react"
import Rescue from '../images/rescue.jpg'
import cgRescue from '../images/coast_guard_rescue.jpg'
import constructionBarge from '../images/construction_barge_crop1.jpg'
import marineTerminal from '../images/marine_terminal.jpg'
import BlogBanner from "../components/BlogBanner"
import TestimonialBanner from "../components/TestimonialBanner"
import MarketingInfo from "../components/MarketingInfo"
import ProductBlock from "../components/ProductBlock"
import API from '../utils/API'
import Page from "../components/Page"
import Carousel from 'react-material-ui-carousel'
import { Typography, Grid, Hidden } from '@material-ui/core'
import coastGuard from '../images/coast_guard.jpg'
import dredgingBarge from '../images/dredging_barge.jpg'
import researchVessel from '../images/research_vessel.jpg'
import towAndTug from '../images/tow_and_tug.jpg'
import commercialFishing from '../images/commercial_fishing.jpg'
import EMPJstackTimeline from '../images/EMP_JStack_timeline_final.png'
import waterVoyager from '../images/water_voyager.jpg'
import VerticalTabs from '../components/VerticalTabs';
import SimpleTabs from '../components/SimpleTabs';
import { Helmet } from 'react-helmet';

export default function Home() {

  useEffect(() => {
    API.greeting().then(res => {
    });
  });

  const items = [
    {
      name: "Rescue Practice",
      description: "Two coast guard members practice marine rescue techniques",
      text: 'An immediate alert ensures a quick response to launch a locally-managed rescue.',
      source: Rescue
    },
    {
      name: "Marine Terminal",
      description: "A marine terminal where goods are loaded onto barges",
      text: 'Companies can alert help when employees are working in remote Marine Terminals',
      source: marineTerminal
    },
    {
      name: "Coast Guard Rescue",
      description: "Coast guard rescuing an individual from open waters",
      text: 'The ALERT System can be wired to the boat engine to shut down the engine in the event that someone falls overboard, giving the man-overboard the chance to get back to the vessel',
      source: cgRescue
    },
    {
      name: "Construction Barge",
      description: "A barge with a crane on it used for construction in marine environments",
      text: 'When a person falls overboard, every seconds counts. The ALERT System immediately notifies the crew of a man-overboard for quick rescue.',
      source: constructionBarge
    },
  ]

  function Item(props) {
    return (
      <div
        style={{ backgroundImage: `url(${props.item.source})`, height: '45vh', backgroundSize: 'cover', width: '100vw', backgroundPosition: 'bottom', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        alt={props.item.description}>
        <div style={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.9) 100%)'}}>
          <Typography variant='h5' style={{ color: 'white', padding: '50px', width: '80%', fontSize: '1.5rem', textAlign: 'center' }}>
            {props.item.text}
          </Typography>
        </div>
        {/* <Typography variant='h5' style={{ color: 'white', padding: '50px', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', boxShadow: '0 0 25px 25px rgba(0, 0, 0, 0.5)', borderRadius: '2rem', fontSize: '1.75rem', textAlign: 'center' }}>
          {props.item.text}
        </Typography> */}
      </div>
    )
  }

  const testimonials = [
    {
      content: `"The Coast Guard have Boatswain Mates of the Watch (BMOW's) that are doing regular rounds of the weather decks at all hours and because of the size of the cutter the OOD is unable to monitor them. Another great use we thought of is for the tiedown crews during helo ops. The lifelines of the ship are lowered during helo ops and the tie down crews are running back and forth on deck sometimes in inclement weather increasing the chance of a MOB."`,
      author: 'United States Coast Guard Lieutenant'
    },
    {
      content: `"We tested the unit by going the furthest away that we could and getting behind a barge. That test was successful. One of our guys decided to do a real life test this morning, and the Alert2 worked perfectly."`,
      author: 'Riverland AG'
    },
    {
      content: `"The ‘ALERT2 engine kill’ and a permanent ladder to get back in the boat was the answer."`,
      author: 'Jim Colomy. F/V Destiny'
    },
    {
      content: `"When we saw the ALERT2 Alarm System, we decided to implement it at all of our sites. And we saved a life using it this time."`,
      author: 'Consol Energy'
    },
    {
      content: `"We took the ALERT Man-Overboard Alarm System a step further and set it up to alert our dispatchers, who can then mobilize additional support if needed."`,
      author: 'Adam Binsfeld, COO, Brennan Marine'
    },
    {
      content: `"We chose the ALERT system because of its simplicity and affordability—it's a good value, and, we received great customer care during the purchase process."`,
      author: 'Captain Douglas Russell, Manager of Marine Operations, University of Washington'
    },
    {
      content: `"Recently we installed an external alarm to our ALERT2 system and it helped us respond quickly when we did have a MOB situation. Thankfully the rescue occurred under seven minutes all made possible by the quick alarm functionality of the ALERT2 Man-Overboard Alarm System"`,
      author: 'Marine Terminal on Mississippi River'
    },
  ]

  const marketing = [
    {
      id: 0,
      title: 'Alerts in Seconds',
      content: "When every second counts in a man-overboard rescue, the Emerald Marine Products’ ALERT system instantaneously alarms the vessel upon hitting water. This immediate alarm provides the crew the critical time needed for a successful man-overboard rescue. Unlike AIS, the response of the ALERT System is immediate. There is no lag time connecting with satellites, and there is no reliance on another product to turn on our automatic water-activated alerting device.",
    },
    {
      id: 1,
      title: 'SIMPLE TO USE, AUTOMATICALLY ACTIVATED',
      content: "The automatic water-activated ALERT Transmitter easily attaches to a Personal Flotation Device. It is extremely light and small, making it easy to set it and forget it. There are no antennas or complicated set-up to get in the way of everyday activity.",
    },
    {
      id: 2,
      title: 'AFFORDABLE',
      content: "The ALERT Man-Overboard Alarm System is the lowest priced commercial grade fall overboard alarm system on the market. Over a three year period, it only costs $1 per day to protect a life. With more crew members, it costs even less per person. Systems have been in use for an average of five years, saving lives everyday.",
    },
    {
      id: 3,
      title: 'MADE IN THE USA, USED AROUND THE WORLD',
      content: "Emerald Marine Products have been manufactured to exact industrial specifications made with high quality materials in the USA since 1996. The ALERT Man-Overboard Alarm System has been protecting hundreds of ships and locations around the world for over 25 years.",
    },
    {
      id: 4,
      title: 'WIRED FOR ENGINE KILL',
      content: "For Singlehanders and Solo Fisherman, the ALERT System can be wired to the boat engine. In the event that someone falls overboard, the ALERT System can shut down the engine, giving the man-overboard the opportunity to get back to the vessel.",
    },
  ]

  const protectedClients = [
    {
      id: 0,
      photo: towAndTug,
      title: 'TOW, TUG, AND BARGE',
      content: "The ALERT Man-Overboard Alarm System protects crewmembers who ply the swift coastal and inland waters. “Wearing the ALERT2 gives me a real sense of security” has been echoed by employees of major towboat companies. As a member of the American Waterways Operators organization, Emerald Marine Products understands the dangerous yet vital activities of people working the Tow and Tug Industry. We design our products to function in these demanding environments.",
    },
    {
      id: 1,
      photo: dredgingBarge,
      title: 'DREDGING, MARINE CONSTRUCTION AND MARINE TERMINALS',
      content: "Maybe your employees aren't on boats, but they work dangerously close to water. Water that could sweep them out of sight or, in cold weather, send them into shock and restrict their muscles within minutes. The ALERT Man-Overboard Alarm System protects employees working near water on dredging, marine construction, or terminal operations. The ALERT Receiver can be mounted in the office or wired to communicate via an auto-dialer of HF Radio to immediately alert rescue operations of a fall-overboard situation.",
    },
    {
      id: 2,
      photo: researchVessel,
      title: 'RESEARCH VESSELS',
      content: "Though a ship has its safety procedures, sometimes people on vessels are not as savvy about working near water as experienced crew. The ALERT Man-Overboard Alarm System is easily worn by visitors or scientists who are aboard research vessels. If a person loses their balance and falls overboard, the ALERT System instantly notifies the vessel for a quick and successful rescue.",
    },
    {
      id: 3,
      photo: commercialFishing,
      title: 'COMMERCIAL FISHERMEN',
      content: "Lore and TV Shows showcase the danger involved in making a living as a commercial fisherman. The ALERT Man-Overboard Alarm System protects crews and solo fishermen who wear the lightweight and durable Transmitter. This device is automatically activated in the event of a fall-overboard, and its Spray-Tight Pouch will protect from false alarms when working in wet conditions. Should a simple mistake take a person over the side of a boat, the ALERT System will instantly notify the vessel.",
    },
    {
      id: 4,
      photo: coastGuard,
      title: 'MILITARY AND LAW ENFORCEMENT VESSELS',
      content: "Law enforcement officials operate in high stake and fast-acting environments on the water. It is critical to protect these officials, so they feel confident moving quickly onboard. The ALERT Man-Overboard Alarm System is easy to set up and seamlessly attached to any PFD. The Alert System provides extra confidence and security, making it possible for law enforcement officials to focus on the task at hand.",
    },
    {
      id: 5,
      photo: waterVoyager,
      title: 'SINGLEHANDER AND BLUE WATER VOYAGER',
      content: "When sailing or motoring alone or with a small crew, it's imperative that in the event of a fall-overboard the engine can stop, or at a minimum alert someone to the fall-overboard. It's the precious seconds upon immersion that is the life-saving difference between the ALERT System and AIS or range dynamic systems. ALERT products have also been used to protect children and animals while under motor in recreational vessels.",
    },
  ]

  return (
    <Page>
      <Helmet>
        <title>Emerald Marine Products</title>
        <meta
          name="description"
          content="Keeping employees as safe as possible working on water, marine safety, and man-overboard protection need to be built-in to the culture of the organization."
        />
      </Helmet>
      <Carousel
        indicators={false}
        interval='6000'
      >
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
      <div style={{ maxWidth: '80%' }}>
        <Typography variant='h3' style={{ color: '#74b4ab', textAlign: 'left', width: '95%', marginTop: '2rem' }}>
          Why Emerald Marine Products?
        </Typography>
        <MarketingInfo marketing={marketing} />
        <Typography variant='h3' style={{ margin: '1em 0px', color: '#74b4ab' }}>
          Who is protected with the Emerald Marine ALERT products?
        </Typography>
        {/* Marketing Info */}
        <div style={{ margin: '20px auto' }}>
          <Hidden xsDown>
            <VerticalTabs content={protectedClients}></VerticalTabs>
          </Hidden>

          <Hidden smUp>
            <SimpleTabs content={protectedClients}></SimpleTabs>
          </Hidden>
        </div>
        <Typography variant='h3' style={{ margin: '1em 0px', color: '#74b4ab' }}>
          How does ALERT work?
        </Typography>
        <Grid container>
          <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
            <img src={EMPJstackTimeline} style={{ maxWidth: '90%', margin: '0 auto' }} />
          </Grid>
        </Grid>
        <ProductBlock />
      </div>
      <Grid container style={{ marginTop: '3rem' }} >
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={5} >
          <BlogBanner />
        </Grid>
        <Grid item xs={12} sm={5} >
          <TestimonialBanner testimonials={testimonials} />
        </Grid>
        <Grid item xs={12} sm={1} />
      </Grid>
    </Page>
  )
}

// style={{ display: 'flex', width: '100vw' }}