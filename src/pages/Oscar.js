import React, { useEffect } from "react"
import oscarOne from '../images/oscar_rescue_1_crop.jpg'
import oscarTwo from '../images/oscar_rescue_2_crop.jpg'
import oscarThree from '../images/oscar_rescue_3_crop.jpg'
import BlogBanner from "../components/BlogBanner"
import TestimonialBanner from "../components/TestimonialBanner"
import MarketingInfo from "../components/MarketingInfo"
import ProductBlock from "../components/ProductBlock"
import API from '../utils/API'
import Page from "../components/Page"
import Carousel from 'react-material-ui-carousel'
import SimpleTabs from "../components/SimpleTabs"
import VerticalTabs from "../components/VerticalTabs"
import { Typography, Grid, Hidden } from '@material-ui/core'
import { Helmet } from 'react-helmet'

export default function Home() {
  useEffect(() => {
    API.greeting().then(res => {
      console.log(res.data)
    });
  });

  const items = [
    {
      name: "Oscar Water Rescue Training One",
      description: "Rescuers train with the oscar water rescue training dummy",
      source: oscarOne
    },
    {
      name: "Oscar Water Rescue Training Two",
      description: "Rescuers train with the oscar water rescue training dummy",
      source: oscarTwo
    },
    {
      name: "Oscar Water Rescue Training Three",
      description: "Rescuers train with the oscar water rescue training dummy",
      source: oscarThree
    },
  ]

  const testimonials = [
    {
      content: `"We use OSCAR weekly for our training exercises. After over two years of weekly use, the mannequin is still very functional."`,
      author: ''
    },
    {
      content: `"What we really like about OSCAR is its parts are standard and replaceable, even though we've never had to replace any parts."`,
      author: ''
    },
    {
      content: `"Before we had OSCAR we dreaded training exercises just because of the weight of the training dummy we had to deal with. OSCAR made training a lot easier and more successful."`,
      author: ''
    },
  ]

  function Item(props) {
    return (
      <div
        style={{ backgroundImage: `url(${props.item.source})`, height: '450px', backgroundSize: 'cover', width: '100vw', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}
        alt={props.item.description}>

      </div>
    )
  }

  const marketing = [
    {
      id: 0,
      title: 'Simple and Easy to Use',
      content: `The simplicity of OSCAR’s construction makes it the best water rescue dummy and the best value for your man-overboard, swift water, and other rescue training procedures.
      Using a training dummy that weighs and floats like a human adult will make sure your rescue team is ready for the realities of a rescue operation.`,
    },
    {
      id: 1,
      title: 'Sturdy and Durable',
      content: `In comparison to other products, the OSCAR Water Rescue Training Dummy (National Supply Number NSN 6910015386497) is lighter, more durable, and less expensive.
      Our water rescue dummy features a realistic weight, an affordable price point, and a durable construction to withstand harsh environments and repeated use. OSCAR is constructed with heavy-duty vinyl and stainless-steel hardware that can be easily replaced if needed.`,
    },
    {
      id: 2,
      title: 'Transportable and Easy to Store',
      content: `Don't settle for sub-par training victims to teach your personnel water rescue operations. As a water rescue training dummy, OSCAR replicates a 180-pound victim, yet its storage weight is only 35 pounds, so you can easily transport it to your point of training operations. Its solid, heavy-duty vinyl and stainless-steel construction withstands repeated tosses and rescues for years of use.`,
    },
    {
      id: 3,
      title: 'Made in the USA',
      content: `OSCAR is manufactured from high-quality components in the United States. The construction comes with a 1-year parts and labor warranty.`,
    },
  ]

  return (
    //   <div style={{maxWidth: '80%'}}>

    //   <MarketingInfo marketing={marketing}/>
    //   <ProductBlock />
    //   </div>

    <Page>
      <Helmet>
        <title>OSCAR Water Rescue</title>
        <meta 
        name="description"
        content="The simplicity of OSCAR’s construction makes it the best water rescue dummy and the best value for your man-overboard, swift water, and other rescue training procedures. Using a training dummy that weighs and floats like a human adult will make sure your rescue team is ready for the realities of a rescue operation." />
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
          Why Oscar Water Rescue?
        </Typography>
        {/* Marketing Info */}
        <div style={{ margin: '20px auto' }}>
          <Hidden xsDown>
            <VerticalTabs content={marketing}></VerticalTabs>
          </Hidden>

          <Hidden smUp>
            <SimpleTabs content={marketing}></SimpleTabs>
          </Hidden>
        </div>
        <ProductBlock />
      </div>
    </Page>
  )
}