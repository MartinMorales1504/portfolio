import React from 'react';
import s from './landing.module.scss'
import { motion } from 'framer-motion'

const Landing = () => {

    return (
        <div className={s.container}>
            <motion.div className={s.joinButton}>
                <h2
                    animate={{ fontSize: 40, color: '#ff2994' }}
                >
                    Hola como estas
                </h2>
            </motion.div>
        </div>
    )
}

export default Landing