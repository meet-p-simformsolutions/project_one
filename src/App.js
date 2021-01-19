import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SecOne from "./newComp/SecOne";
import SecTwo from "./newComp/SecTwo";
import './newScss/App.scss';

function App() {

  const width = (-1 * window.innerWidth)


  const variants = {
    prev: {
      x: width,
    },
    animate: {
      x: 0
    },
    next: {
      x: -width
    }
  }

  const [slide, setSlide] = useState(0)

  const changeSlideTo = () => {

    if (slide === 1) {
      setSlide(0)
    }
    else
      setSlide(slide + 1)
  }

  useEffect(() => {

    let timer;
    window.addEventListener('wheel', () => {

      if (timer) {
        window.clearTimeout(timer)
      }

      timer = window.setTimeout(() => {

        changeSlideTo()
        console.log(slide);
      }, 400)

    })
    return () => {

    }
  })

  return (
    <div className="App">
      <div className="logo">
        <p>NIKOLAS<br /> LPORO</p>
      </div>
      <div className="all">
        <motion.div className="first" 
        initial={{x: 0}}
        animate={{x: (slide === 0 ? 0: width)}}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
        >
          <SecOne slide = {slide} />
        </motion.div>
        <motion.div className="second"
        initial={{x: 0}}
        animate={{x: (slide === 0 ? 0 : width)}}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
        >
          <SecTwo slide = {slide} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;