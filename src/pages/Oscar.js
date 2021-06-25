import React, { useEffect } from "react"
import stormy from '../images/stormy_seas.jpg'
import BlogBanner from "../components/BlogBanner"
import TestimonialBanner from "../components/TestimonialBanner"
import MarketingInfo from "../components/MarketingInfo"
import ProductBlock from "../components/ProductBlock"
import API from '../utils/API'
import Page from "../components/Page"

export default function Home() {
  useEffect(() => {
    API.greeting().then(res => {
      console.log(res.data)
    });
  });

  return (
    <Page>
      <div
        style={{ backgroundImage: `url(${stormy})`, height: '450px', backgroundSize: 'cover', width: '100vw', backgroundPosition: 'bottom right'  }}
        alt='Man overboard'
      />
      <div style={{ display: 'flex', minWidth: '80%', }}>
        <BlogBanner />
        <TestimonialBanner />
      </div>

      <MarketingInfo />
      <ProductBlock />
    </Page>
  )
}