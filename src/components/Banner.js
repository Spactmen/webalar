import { React, useEffect } from 'react'
import styles from "./banner.module.css"
import play from "../images/play.png"
import bkgImage from "../images/Background.png"
import { useState } from "react"

// const aspectRatio = 600 / 1200; // Example aspect ratio (width/height)

const Banner = () => {
    // const [width, setWidth] = useState(0);
    // const height = width / aspectRatio;
    // useEffect(() => {
    //     setWidth(window.innerWidth);

    //     const handleResize = () => setWidth(window.innerWidth);
    //     window.addEventListener("resize", handleResize);

    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    return (
        <div style={{ backgroundImage: `url(${bkgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className={styles.banner_section}>
            <div>
                <img src={play} alt="play_butttno" className={styles.play_img}></img>
                <p className={styles.banner_head}>How it works?</p>
                <div>
                    <p className={styles.banner_bio}> This app does everything you could want it to do it</p><p className={styles.banner_bio}>is beautifully and extremely intuitive to use.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner