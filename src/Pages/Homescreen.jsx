import React from 'react'
import Header from '../Components/Mainscreen/Header'
import Headers from '../Components/Service/DigitalMarketing/Headers'
import Aboutsection from '../Components/Mainscreen/Aboutsection'
import Number from '../Components/Mainscreen/Number'
import Services from '../Components/Mainscreen/Services'
import FAQ from '../Components/Mainscreen/FAQ'
import Team from '../Components/Mainscreen/Team'
import Process from '../Components/Mainscreen/Process'
import Scroll from '../Components/Service/DigitalMarketing/Scroll'
export default function Homescreen() {
  return (
    <div>
      <Headers/>
      <Header/>
<Aboutsection/>
<Number/>
<Services/>
<FAQ/>
<Process/>
<Team/>
    </div>
  )
}
