import { motion } from 'framer-motion'
import React from 'react'
import main from '../images/main.jpg'
export const SectionOne = () => {
    return (
        <div className="mainsec">
            
            <div className="text">
                <div className="lineOne">
                    <div className="line-wrapper">
                        <div className="top word">Shapes</div>
                    </div>
                    <div className="line-wrapper">
                        <div className="top word">&</div>
                    </div>
                </div>
                <div className="linetwo">
                    <div className="line-wrapper">
                        <div className="down word">value</div>
                    </div>
                </div>
            </div>
            <motion.div className="imgSec">
                <motion.img initial={{opacity : 0, y: 0}} animate={{opacity: 1 , y:10}} className="mainImg" src={main} alt="" />
            </motion.div>
        </div>
    )
}
