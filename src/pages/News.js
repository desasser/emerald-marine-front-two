import * as React from "react"
import { Typography } from '@material-ui/core'
import NewsContent from "../components/NewsContent"

const News = () => (
  <>
    <Typography variant='h2' style={{marginTop: '50px'}}>News</Typography>
    <NewsContent></NewsContent>
  </>
)

export default News
