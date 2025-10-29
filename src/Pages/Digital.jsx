import React from 'react'
import Header from '../Components/Service/Digital/Header'
import Digitalintro from '../Components/Service/Digital/Digitalintro'
import DigitalSection from '../Components/Service/Digital/DigitalSection'
import OurProcess from '../Components/Service/Digital/OurProcess'
import FAQSection from '../Components/Service/Digital/FAQSection'

export default function Digital() {
  return (
    <div>
      <Header/>
      <Digitalintro/>
      <DigitalSection/>
      <OurProcess/>
      <FAQSection/>
    </div>
  )
}
