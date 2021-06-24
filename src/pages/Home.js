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

  return (
    <Page>
      <Carousel
        indicators={false}
        interval='6000'
      >
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
      <div style={{ display: 'flex', minWidth: '80%', }}>
        <BlogBanner />
        <TestimonialBanner />
      </div>

      <MarketingInfo />
      <ProductBlock />
    </Page>
  )
}