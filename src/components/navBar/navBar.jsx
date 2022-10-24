import React from 'react';
import { Link } from 'react-router-dom';

//CSS & EFFECTS
import s from './navBar.module.scss'
import { motion } from 'framer-motion'

//ASSETS
import moon from './images/moon.png'
import arrow from './images/arrow.png'


const navBar = () => {

  return (
    <nav className={s.container}>

      <div className={s.paths}>
      <div>Sobre mi</div>
      <div>Tecnologias</div>
      <div>Proyectos</div>
      <div>Contacto</div>
      </div>

      <div className={s.options}>
        <div className={s.darkMode}>
          <img src={moon} alt=""></img>
        </div>
        <div className={s.languages}>
          <h2>
            es
          </h2>
          <img src={arrow} alt=""></img>
        </div>

      </div>

    </nav>
  )
}

export default navBar