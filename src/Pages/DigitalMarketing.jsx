import React from 'react'
import Headers from '../Components/Service/DigitalMarketing/Headers'
import SEOSection from '../Components/Service/DigitalMarketing/SeoSection'
import ContentSection from '../Components/Service/DigitalMarketing/ContentSection'
import Socialsection from '../Components/Service/DigitalMarketing/Socialsection'
import Networkingsection from '../Components/Service/DigitalMarketing/Networkingsection'
import Emailsection from '../Components/Service/DigitalMarketing/Emailsection'
import Analytics from '../Components/Service/DigitalMarketing/Analytices'
import Scroll from '../Components/Service/DigitalMarketing/Scroll'

export default function DigitalMarketing() {
  return (
    <div>
      <Scroll/>
      <Headers/>
      <SEOSection/>
      <ContentSection/>
     <Socialsection/>
    </div>
  )
}
