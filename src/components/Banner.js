import { React } from 'react'
import styles from "./banner.module.css"
import play from "../images/play.png"
import bkgImage from "../images/Background.png"


const Banner = () => {


    return (
        <div style={{ backgroundImage: `url(${bkgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className={styles.banner_section}>
            <div>
                <img src={play} alt="play-button" className={styles.play_img}></img>
                <p className={styles.banner_head}>How it works?</p>
                <div>
                    <p className={styles.banner_bio}> This app does everything you could want it to do it</p><p className={styles.banner_bio}>is beautifully and extremely intuitive to use.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner