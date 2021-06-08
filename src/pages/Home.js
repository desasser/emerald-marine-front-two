import React from "react"
import Hero from "../components/Hero"
import BlogBanner from "../components/BlogBanner"
import TestimonialBanner from "../components/TestimonialBanner"
import MarketingInfo from "../components/MarketingInfo"
import ProductBlock from "../components/ProductBlock"

const Home = () => (
  <>
    <Hero />
    <div style={{display: 'flex', minWidth: '80%'}}>
      <BlogBanner />
      <TestimonialBanner />
    </div>
    <MarketingInfo />
    <ProductBlock />
  </>
)

export default Home