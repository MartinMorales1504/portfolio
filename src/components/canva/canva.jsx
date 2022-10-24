import React from 'react';
import s from './canva.module.scss'
import NavBar from '../navBar/navBar';
import { motion } from 'framer-motion'
import Skills from '../skills/skills'
import About from '../about/about'

const Canva = () => {

  return (
    <>
    <NavBar />
      <div className={s.canvaContainer}>
      <About/>
      <Skills/>
      <About/>
      <Skills/>
      <About/>
      <Skills/>
      </div>
    </>
  )
}

export default Canva