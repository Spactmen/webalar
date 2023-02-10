import React from 'react'
import arrow from "../images/arrow-right.png"
import styles from "./support.module.css"
import questioncircle from "../images/question-circle.png"
import headset from "../images/headset.png"

const Support = () => {

  return (
    <div className={styles.support_section}>
        <div className={styles.support_section_1}>
            <img src={questioncircle} className={styles.question_img} alt="qestion mark"></img>
            <div className={styles.support_1_content}>
                <h3>View common questions</h3>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p>
                <button className={styles.support_btn}>View more<img src={arrow} alt="arrow" className={styles.btn_arrow}></img></button>
            </div>
        </div>
        <div className={styles.support_section_2}>
            <img src={headset} className={styles.headset_img} alt="headset"></img>
            <div className={styles.support_2_content}>
                <h3>Looking for support?</h3>
                <p>On the other hand, we denounce with righteous dislike so men who are beguiled indignation and  they foresee.</p>
                <button  className={styles.support_btn}>View more<img src={arrow} alt="arrow" className={styles.btn_arrow}></img></button>
            </div>
        </div>
    </div>
  )
}

export default Support