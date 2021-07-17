import React from 'react'
import VerticalTabs from './VerticalTabs';
import SimpleTabs from './SimpleTabs'
import Hidden from '@material-ui/core/Hidden';

export default function MarketingInfo({ marketing }) {
  return (
    <>
      <Hidden  xsDown>
        <VerticalTabs content={marketing}></VerticalTabs>
      </Hidden>

      <Hidden smUp>
        <SimpleTabs content={marketing}></SimpleTabs>
      </Hidden>
    </>
  )
}