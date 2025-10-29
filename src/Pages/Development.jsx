import React from 'react'
import Header from '../Components/Service/Development/Header'
import Developmentintro from '../Components/Service/Development/Developmentintro'
import DevelopmentSection from '../Components/Service/Development/DevelopmentSection'
import OurProcess from '../Components/Service/Development/OurProcess'
import FAQSection from '../Components/Service/Development/FAQSection'

export default function Development() {
  return (
    <div>
      <Header/>
      <Developmentintro/>
      <DevelopmentSection/>
      <OurProcess/>
      <FAQSection/>
    </div>
  )
}
