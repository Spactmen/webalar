import React, { useState } from 'react'
import styles from "./card.module.css"
import right_arrow from "../images/white-arrow-right.png"



const Card = ({imgsrc,head,bio}) => {

    const [isHovered,setIsHovered] = useState(false)
  return (        
        <div 
        style={{background:isHovered?"linear-gradient(26.57deg, #6852ED 16.67%, #BA43FC 100%)": "white",cursor:isHovered?"pointer":"auto"}}
        className={styles.card}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}>

            {!isHovered && <img src={imgsrc} alt="dollar" className={styles.card_img}></img>}
            <h3 style={{color:isHovered? "white" : "#554D89"}} className={styles.card_head}>{head}</h3>
            <p style={{color:isHovered? "white" :"#716C80"}} className={styles.card_bio}>{bio}</p>
            {isHovered && <div className={styles.card_read_more}>
                <p className={styles.card_read_more_bio}>Read more </p>
                <img src={right_arrow} alt="right_arrow"></img>
            </div>}

        </div>
  )
}

export default Card