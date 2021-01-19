import React from 'react'
import imgOne from '../images/img_one.jpg'
import imgTwo from '../images/img_two.jpg'
import imgThree from '../images/img_three.jpg'

const SectionThree = () => {
    return (
        <div>
            <div className="secThree">
                <div className="images">
                    <div className="img-one-st img-div">
                        <img src={imgThree} alt="" />
                    </div>
                    <div className="img-two-st img-div">
                        <img src={imgTwo} alt="" />
                    </div>
                </div>
                <div className="text-st"> <p>

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit possimus repudiandae eligendi numquam reprehenderit dolorem minima doloremque quos illo sequi, quas magnam cumque commodi soluta, voluptas laboriosam.
            </p>
                </div>
            </div>
        </div>
    )
}

export default SectionThree
