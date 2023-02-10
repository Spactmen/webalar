import React from 'react'
import arrow from "../images/arrow-right.png"
import styles from "./buttons.module.css"

const Buttons = (props) => {
    const {btn1Text,btn2Text,btn1,btn2} = props.btnText
   
    return (
        <div className={styles.hero_btns_group}>
            <button style={{display:btn1?"block":"none"}} className={styles.hero_btn_1}>{btn1Text}</button>
            <button style={{display:btn2?"block":"none"}} className={styles.hero_btn_2}>{btn2Text}<img src={arrow} alt="arrow" className={styles.btn_arrow}></img></button>
        </div>
    )
}

export default Buttons