import React from 'react'
import Home from './pages/Home'
import Section1 from './sections/Section1'
import Requirments from './sections/Requirments'
import ProductDesign from './sections/ProductDesgin'
import SystemDesign from './sections/SystemDesign'
import Development from './sections/Development'
import Testing from './sections/Testing'
import Production from './sections/Production'
import AutomatedDep from './sections/AutomatedDep'
import SectionMsg from './sections/SectionMsg'

const HeroSection = () => {
  return (
    <>
    <Home/>
    <Section1/>
    <Requirments/>
    <ProductDesign/>
    <SystemDesign/>
    <Development/>
    <Testing/>
    <Production/>
    <AutomatedDep/>
    {/* <SectionMsg/> */}
    </>
  )
}

export default HeroSection
