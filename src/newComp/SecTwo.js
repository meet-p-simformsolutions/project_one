import React from 'react'
import imgOne from '../images/img_one.jpg'
import imgTwo from '../images/img_two.jpg'
import imgThree from '../images/img_three.jpg'
import { motion } from 'framer-motion'


const variantImg = {
    initial: {
        y: 1000
    },
    animate: {
        y: 0
    },
    exit: {
        y: 0
    }
}

const transition = {

    duration: 1,
    ease: "easeOut",
    delay: 1

}
const ease = [0.16, 1, 0.3, 1]


const SecTwo = ({ slide }) => {
    return (
        <div className="secTwo">
            <div className="images">
                <div className="one image">
                    <motion.div className="overlay"
                        variants={variantImg}
                        initial="initial"
                        animate={slide === 1 ? "animate" : "initial"}
                        exit="exit"
                        transition={{ ...transition, delay: 0.3, duration: 2, ease: ease }}
                    >
                        <motion.img src={imgOne} alt=""
                            variants={variantImg}
                            initial="initial"
                            exit="exit"
                            animate={slide === 1 ? "animate" : "initial"}
                            transition={{ ...transition, delay: 0.5, duration: 2, ease: ease }}

                        />
                    </motion.div>
                </div>
                <div className="two image">
                    <motion.div className="overlay"
                        variants={variantImg}
                        initial="initial"
                        animate={slide === 1 ? "animate" : "initial"}
                        transition={{ ...transition, delay: 0.5, duration: 2, ease: ease }}
                    >
                        <motion.img src={imgTwo} alt=""
                            variants={variantImg}
                            initial="initial"
                            animate={slide === 1 ? "animate" : "initial"}
                            transition={{ ...transition, delay: 0.7, duration: 2, ease: ease }}

                        />
                    </motion.div>
                </div>
                <div className="three image">
                    <motion.div className="overlay"
                        variants={variantImg}
                        initial="initial"
                        animate={slide === 1 ? "animate" : "initial"}
                        transition={{ ...transition, delay: 0.7, duration: 2, ease: ease }}
                    >
                        <motion.img src={imgThree} alt=""
                            variants={variantImg}
                            initial="initial"
                            animate={slide === 1 ? "animate" : "initial"}
                            transition={{ ...transition, delay: 0.9, duration: 2, ease: ease }}

                        />
                    </motion.div>
                </div>
            </div>


            <div className="text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere at expedita laudantium soluta iste, fugit saepe consequuntur nobis amet architecto aperiam, eveniet distinctio necessitatibus voluptatem sunt dolorem doloru
                        </p>
            </div>


        </div>

    )
}

export default SecTwo
