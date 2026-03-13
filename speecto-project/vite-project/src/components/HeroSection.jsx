import React from 'react'
import Home from './pages/Home'
import Section1 from './sections/Section1'
import Requirments from './sections/Requirments'
import ProductDesign from './sections/ProductDesgin'
import SystemDesign from './sections/SystemDesign'
import Development from './sections/Development'
import Testing from './sections/Testing'

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
    </>
  )
}

export default HeroSection
