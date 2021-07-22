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
import waterVoyager from '../images/water_voyager.jpg'
import VerticalTabs from '../components/VerticalTabs';
import SimpleTabs from '../components/SimpleTabs';
import {Helmet} from 'react-helmet';

export default function Home() {
  useEffect(() => {
    API.greeting().then(res => {
      console.log(res.data)
    });
  });

  const items = [
    {
      name: "Rescue Practice",
      description: "Two coast guard members practice marine rescue techniques",
      source: Rescue
    },
    {
      name: "Marine Terminal",
      description: "A marine terminal where goods are loaded onto barges",
      source: marineTerminal
    },
    {
      name: "Coast Guard Rescue",
      description: "Coast guard rescuing an individual from open waters",
      source: cgRescue
    },
    {
      name: "Construction Barge",
      description: "A barge with a crane on it used for construction in marine environments",
      source: constructionBarge
    },
  ]

  function Item(props) {
    return (
      <div
        style={{ backgroundImage: `url(${props.item.source})`, height: '450px', backgroundSize: 'cover', width: '100vw', backgroundPosition: 'bottom' }}
        alt={props.item.description}>

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
      content: "When every second counts, the ALERT system instantaneously alarms the vessel, providing the crew the critical time needed for a successful man-overboard rescue. Unlike AIS, the response of the ALERT System is immediate. There is no lag time connecting with satellites, and there is no reliance on another product to turn on our automatic water-activated alerting device.",
    },
    {
      id: 1,
      title: 'Automatically Activated',
      content: "The lightweight, water-activated Transmitter easily attaches to a personal flotation device. Upon immersion, the Transmitter instantly alerts the crew of a man-overboard. The proprietary 418Mhz frequency allows it to be automatically activated so it doesn’t have to rely on additional equipment to be triggered.",
    },
    {
      id: 2,
      title: 'Wired for Engine Kill',
      content: "For Singlehanders and Solo Fisherman, the ALERT System can be wired to the boat engine. In the event that someone falls overboard, the ALERT System can shut down the engine, giving the man-overboard the opportunity to get back to the vessel.",
    },
    {
      id: 3,
      title: 'Plots Overboard Waypoint',
      content: "The ALERT Receiver can be connected to a compatible GPS plotter to instantly mark the boat’s location at the time of the fall overboard. This makes for a speedy and successful water rescue.",
    },
  ]

  const protectedClients = [
    {
      id: 0,
      photo: towAndTug,
      title: 'Tow, Tug, and Barge',
      content: "The ALERT Man-Overboard Alarm System protects crewmembers who ply the swift coastal and inland waters. “Wearing the ALERT2 gives me a real sense of security” has been echoed by employees of major towboat companies. As a member of the American Waterways Operators organization, Emerald Marine Products understands the dangerous yet vital activities of people working the Tow and Tug Industry. We design our products to function in these demanding environments.",
    },
    {
      id: 1,
      photo: waterVoyager,
      title: 'Singlehander and Blue Water Voyager',
      content: "The ALERT Man-Overboard Alarm System was originally invented to serve the singlehander and blue water voyager. When sailing or motoring alone or with a small crew, it's imperative that in the event of a fall-overboard the engine can stop, or at a minimum alert someone to the fall-overboard. It's the precious seconds upon immersion that is the life-saving difference between the ALERT System and AIS or range dynamic systems. ALERT products have also been used to protect children and animals while under motor in recreational vessels.",
    },
    {
      id: 2,
      photo: dredgingBarge,
      title: 'Dredging, Marine Construction and Marine Terminals',
      content: "Maybe your employees aren't on boats, but they work dangerously close to water. Water that could sweep them out of sight or, in cold weather, send them into shock and restrict their muscles within minutes. The ALERT Man-Overboard Alarm System protects employees working near water on dredging, marine construction, or terminal operations. The ALERT Receiver can be mounted in the office or wired to communicate via an auto-dialer of HF Radio to immediately alert rescue operations of a fall-overboard situation.",
    },
    {
      id: 3,
      photo: researchVessel,
      title: 'Research Vessels',
      content: "Though a ship has its safety procedures, sometimes people on vessels are not as savvy about working near water as experienced crew. The ALERT Man-Overboard Alarm System is easily worn by visitors or scientists who are aboard research vessels. If a person loses their balance and falls overboard, the ALERT System instantly notifies the vessel for a quick and successful rescue.",
    },
    {
      id: 4,
      photo: commercialFishing,
      title: 'Commercial Fishermen',
      content: "Lore and TV Shows showcase the danger involved in making a living as a commercial fisherman. The ALERT Man-Overboard Alarm System protects crews and solo fisherman who wear the lightweight and durable Transmitter. This device is automatically activated in the event of a fall-overboard, and its Spray-Tight Pouch will protect from false alarms when working in wet conditions. Should a simple mistake take a person over the side of a boat, the ALERT System will instantly notify the vessel.",
    },
    {
      id: 5,
      photo: coastGuard,
      title: 'Military and Law Enforcement Vessels',
      content: "Law enforcement officials operate in high stake and fast-acting environments on the water. It is critical to protect these officials, so they feel confident moving quickly onboard. The ALERT Man-Overboard Alarm System is easy to setup and seamlessly attach to any PFD. The Alert System provides extra confidence and security, making it possible for law enforcement officials to focus on the task at hand.",
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
      <Grid container >
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={5} >
          <BlogBanner />
        </Grid>
        <Grid item xs={12} sm={5} >
          <TestimonialBanner testimonials={testimonials} />
        </Grid>
        <Grid item xs={12} sm={1} />
      </Grid>
      <div style={{ maxWidth: '80%' }}>
        <Typography variant='h3' style={{ color: '#74b4ab', textAlign: 'left', width: '95%' }}>
          Why Emerald Marine?
        </Typography>
        <MarketingInfo marketing={marketing} />
        <Typography variant='h3' style={{ margin: '1em 0px', color: '#74b4ab' }}>
          Who is protected with the ALERT products?
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
        <ProductBlock />
      </div>
    </Page>
  )
}

// style={{ display: 'flex', width: '100vw' }}