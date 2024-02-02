import React from 'react'
import Herosection from './Herosection'
import Popularplaces from './Popularplaces'
import Features from './Features'
import Banner from './Banner'
import Themes from './Themes'
import ClientTestimonial from './Clienttestimonial'
import Contactus from './Contactus'
import Imageslider from './Imageslider';


export default function Home() {
  return (
    <div>
        <Herosection/>
        <Popularplaces/>
        <Features/>
        <Imageslider/>
       <Banner/>
       <Themes/>
       <ClientTestimonial/>
       <Contactus/>
       
    </div>
  )
}
