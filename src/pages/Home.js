import React, {useEffect} from "react"
import Hero from "../components/Hero"
import BlogBanner from "../components/BlogBanner"
import TestimonialBanner from "../components/TestimonialBanner"
import MarketingInfo from "../components/MarketingInfo"
import ProductBlock from "../components/ProductBlock"
import API from '../utils/API'
import store from '../utils/store'

const Home = () => {
  useEffect(() => {
    API.greeting().then(res => {
        console.log(res.data)
    });
});

  return (
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
}

export default Home