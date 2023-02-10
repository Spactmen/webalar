import React from 'react'
import styles from "./herosection.module.css"
import Buttons from "./Buttons"

import heroimg from "../images/heroimg.png"
import down_arrow from "../images/arrow-down.png"

const HeroSection = () => {
    const btnText= {
        btn1Text: "ContactUs",
        btn2Text: "Order Similar",
        btn1:true,
        btn2:true
    }
    return (
        <div className={styles.hero_section}>
            <div className={styles.hero_content}>
                <h1 className={styles.hero_head}> Realize your full potential</h1>
                <p className={styles.hero_bio}>We help our clients make realize <br></br>their most important business goals.</p>
                <Buttons btnText={btnText}/>
            </div>
            <div>
                <img src={heroimg} className={styles.hero_img} alt="heroimg"></img>
            </div>
            <button className={styles.arrow_btn}>
                <img src={down_arrow} alt="down_arrow" className={styles.down_arrow}></img>
            </button>
        </div>
    )
}

export default HeroSection