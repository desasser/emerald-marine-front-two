import React from 'react'
import VerticalTabs from './VerticalTabs';

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

export default function MarketingInfo() {
  return (
    <VerticalTabs content={marketing}></VerticalTabs>
  )
}