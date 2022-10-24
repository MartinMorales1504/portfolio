import React from 'react';
import s from './about.module.scss'
import NavBar from '../navBar/navBar';
import { motion } from 'framer-motion'

const About = () => {

  return (
    <>
      <div className={s.container}>
        {/*NAME*/}
        <div className={s.name}>
          <h1>Martin Morales</h1>
        </div>
        {/*TITLE*/}
        <div className={s.title}>
          <h1>Sobre mi</h1>
        </div>

        {/*DESCRIPTION*/}
        <div className={s.description}>
        <div className={s.text}>
            <h3>
              Soy desarrollador Full Stack orientado a Front End y ocasionalmente diseño. Me gusta crear agradables, solidos y escalables productos frontend que cuenten con una gran experiencia de usuario.
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default About