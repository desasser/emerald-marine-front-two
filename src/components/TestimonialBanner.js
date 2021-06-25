import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Typography } from '@material-ui/core';

export default function BlogBanner() {
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

  function Item(props) {
    return (
      <div style={{width: '90%', overflow: 'hidden'}}>
        <Typography><em>{props.item.content}</em></Typography>
        <Typography variant="body2" style={{textAlign: 'right', color: 'grey'}}>-{props.item.author}</Typography>
      </div>
    )
  }

  return (
    <div style={{ height: '150px', width: '50vw', padding: '20px' }}>
      <Carousel
        indicators={false}
        // timeout='500'
        interval='10000'
        // animation='slide'
        navButtonsAlwaysInvisible={true}
      >
        {
          testimonials.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
    </div >
  )
}

