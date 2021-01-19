import React from 'react'
import imgOne from '../images/img_one.jpg'
import imgTwo from '../images/img_two.jpg'
import imgThree from '../images/img_three.jpg'

const SectionTwo = () => {
    return (

        <div className="secTwo">
            <div className="images">
                <div className="img-one img-div">
                    <img src={imgOne} alt="" />
                </div>
                <div className="img-two img-div">
                    <img src={imgTwo} alt="" />
                </div>
                <div className="img-three img-div">
                    <img src={imgThree} alt="" />
                </div>
            </div>
            <div className="text"> <p>

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit possimus repudiandae eligendi numquam reprehenderit dolorem minima doloremque quos illo sequi, quas magnam cumque commodi soluta, voluptas laboriosam. 
            </p>
            </div>
        </div>
    )
}

export default SectionTwo
