import { React, useState, useEffect } from 'react'
import styles from "./progressbar.module.css"


const ProgressBar = ({ done ,skill}) => {
    // console.log({ done })
    const [style, setStyle] = useState({});

    useEffect(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    },[done]);

    return (
        <div className={styles.progress_bar_content}>
            <div className={styles.progress_bar_data}>
                <p className={styles.progress_name}>{skill} </p>
                <p className={styles.progress_number}>{`${done}%`}</p>
            </div>
            <div className={styles.progress_bar} >
                <div style={style} className={styles.progress}></div>
            </div>
        </div>
    )
}

export default ProgressBar