import React from 'react'
import Buttons from './Buttons'
import styles from "./section3.module.css"
import person3 from "../images/person3.png"

const Section3 = () => {
    const btnText = {
        btn1Text: "View Proces",
        btn2Text: "More Info",
        btn1: true,
        btn2: true
    }
    return (
            <div className={styles.section3_section}>
                <div className={styles.section3_content}>
                    <h1 className={styles.section3_head}> We offer a full range of digital marketing services</h1>
                    <p className={styles.section3_bio}>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free.</p>
                    <Buttons btnText={btnText} />
                </div>
                <div>
                    <img src={person3} className={styles.section3_img} alt="heroimg"></img>
                </div>

            </div>
            
    )
}

export default Section3