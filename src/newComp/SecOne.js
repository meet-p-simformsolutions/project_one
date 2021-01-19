import { motion } from 'framer-motion'
import React from 'react'
import main from '../images/main.jpg'


const variantText = {
    initial: {
        y: 150
    },
    animate: {
        y: 0
    },
}
const variantImg = {
    initial: {
        y: 1000
    },
    animate: {
        y: 0
    },
}


const transition = {

    duration: 1,
    delay: 1,
    ease: [0.16, 1, 0.3, 1],

}

const SecOne = ({ slide }) => {
    return (
        <div className="secOne">
            <div className="teat-wrap">

                <div className="text-up">
                    <div className="line-one line">
                        <motion.div variants={variantText} transition={{...transition, delay: 1.5}} initial="initial" animate={slide === 0 ? "animate" : "initial"} className="wrap">
                            SHAPES
                        </motion.div>
                    </div>
                    <div className="line-two line">
                        <motion.div variants={variantText} transition={{ ...transition, delay: 1.8 }} initial="initial" animate={slide === 0 ? "animate" : "initial"} className="wrap">
                            &
                        </motion.div>
                    </div>
                </div>
                <div className="text-down line">
                    <motion.div variants={variantText} transition={{ ...transition, delay: 2 , }} initial="initial" animate={slide === 0 ? "animate" : "initial"} className="wrap">
                        VALUE
                        </motion.div>

                </div>
            </div>
            <div className="img">
                <motion.div className="overlay"
                    variants={variantImg}
                    initial="initial"
                    animate={slide === 0 ? "animate" : "initial"}
                    transition={{ ...transition, delay: 0.5, duration: 1.5 }}
                >
                    <motion.img src={main} alt=""
                        variants={variantImg}
                        initial="initial"
                        animate={slide === 0 ? "animate" : "initial"}
                        transition={{ ...transition, delay: 1, duration:1.5 }}

                    />
                </motion.div>
            </div>
        </div>
    )
}

export default SecOne
