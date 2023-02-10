import React from 'react'
import styles from "./pricecard.module.css"
import check from "../images/check.png"
import crosscheck from "../images/cross.png"

const PriceCard = (props) => {
    console.log(props.priceData)
    return (
        <div className={styles.price_card}>
            <div className={styles.price_card_main}>
                <div>
                    <h3>Basic</h3>
                    <button >Best Choice</button>
                </div>
                 <div className={styles.hr}></div>
                <h1>15$</h1>
                <p>Per month</p>
            </div>
            <div className={styles.price_card_list}>
            {props.priceData.map((data) => {
                const src = data.available ? check : crosscheck
                return(
                    <div className={styles.price_list_item} alt="check">
                        <img src={src} className={styles.check_img} alt="check"></img>
                        <p className={styles.price_item}>{data.text}</p>
                    </div>
                )
            })}
            </div>
            <button className={styles.price_card_btn}> Getting Started</button>
        </div>
    )
}

export default PriceCard