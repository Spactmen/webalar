import React from 'react'
import styles from "./banner2.module.css"
import bkg from "../images/Bg.png"

const Banner2 = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bkg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className={styles.banner2_section}>
                <div className={styles.banner2_inner1}>
                    <div className={styles.banner2_inner2}>
                        <p className={styles.banner2_head}>Build your successful business with us. Want to know how to do this?</p>
                        <button className={styles.banner2_btn}>Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2