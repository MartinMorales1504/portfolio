import React from 'react';
import s from './skills.module.scss'
import { motion } from 'framer-motion'

const About = () => {

  return (
    <>
      <div className={s.container}>
        <motion.div className={s.joinButton}>
          <h2
            animate={{ fontSize: 40, color: '#ff2994' }}
          >
            asd123
          </h2>
        </motion.div>
      </div>
    </>
  )
}

export default About