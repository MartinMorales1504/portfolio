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
    <div className={s.container}>

      <div className={s.paths}>
      <Link to='/' className={s.links}><div>Sobre mi</div></Link>
      <Link to='/' className={s.links}><div>Proyectos</div></Link>
      <Link to='/' className={s.links}><div>Contacto</div></Link>
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

    </div>
  )
}

export default navBar