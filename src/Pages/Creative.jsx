import React from 'react'
import Header from '../Components/Service/Creative/Header'
import CreativeSection from '../Components/Service/Creative/CreativeSection'
import Creativeintro from '../Components/Service/Creative/Creativeintro'
import OurProcess from '../Components/Service/Creative/OurProcess'
import FAQSection from '../Components/Service/Creative/FAQSection'

export default function Creative() {
  return (
    <div>
      <Header/>
      <Creativeintro/>
      <CreativeSection/>
      <OurProcess/>
      <FAQSection/>
    </div>
  )
}
