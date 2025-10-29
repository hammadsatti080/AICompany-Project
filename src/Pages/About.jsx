import React from 'react'
import Header from '../Components/Aboutportion/Header'
import Ownerinfo from '../Components/Aboutportion/Ownerinfo'
import Contactportion from '../Components/Aboutportion/Contactportion'
import Companymission from '../Components/Aboutportion/Companymission'
import QA from '../Components/Aboutportion/QA'
import Officetiming from '../Components/Aboutportion/Officetiming'
export default function About() {
  return (
    <div>
      <Header/>
      <Ownerinfo/>
      <Contactportion/>
      <Companymission/>
      <QA/>
      <Officetiming/>
    </div>
  )
}
