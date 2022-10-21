import React from 'react';
import s from './about.module.scss'
import NavBar from '../navBar/navBar';
import { motion } from 'framer-motion'

const About = () => {

  return (
    <>
    <NavBar />
      <div className={s.container}>
        <motion.div className={s.joinButton}>
          <h2
            animate={{ fontSize: 40, color: '#ff2994' }}
          >
            Hola como estas
          </h2>
        </motion.div>
      </div>
    </>
  )
}

export default About