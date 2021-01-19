import { motion } from 'framer-motion'
import React from 'react'



const Image = () => {
    return (
        <>
         <motion.div className="overlay"
                    variants={variantImg}
                    initial="initial"
                    animate={slide === 0 ? "animate" : "initial"}
                    transition={{ ...transition, delay: 0.5, duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                >
                    <motion.img src={main} alt=""
                        variants={variantImg}
                        initial="initial"
                        animate={slide === 0 ? "animate" : "initial"}
                        transition={{ ...transition, delay: 1, duration:1.5, ease: [0.33, 1, 0.68, 1] }}

                    />
                </motion.div>   
        </>
    )
}

export default Image
