import React from 'react'
import usd from "../images/usd-circle.png"
import file from "../images/file-invoice-dollar.png"
import hand from "../images/hand-holding-usd.png"
import styles from "./section4.module.css"
import Card from './Card'
import Buttons from './Buttons'
const Section4 = () => {
    const btnText= {
        btn1Text: "ContactUs",
        btn2Text: "Order Similar",
        btn1:true,
        btn2:false
    }
    return (
        <div className={styles.section4}>
            <div className={styles.section4_cards}>
                <div className={styles.cards_column1}>
                    <Card
                        imgsrc={usd}
                        head="Corporate finance"
                        bio="Leverage agile frameworks to provide a robust synopsis"
                    ></Card>
                    <Card
                        imgsrc={file}
                        head="Audit & Evaluation"
                        bio="Bring to the table win-win survival strategies to ensure proactive"
                        className="third-child"
                    ></Card>
                </div>
                <div className={styles.cards_column2}>
                    <Card
                        imgsrc={file}
                        head="Audit & Evaluation"
                        bio="Bring to the table win-win survival strategies to ensure proactive"

                    ></Card>
                    <Card
                        imgsrc={hand}
                        head="Sales & Trade"
                        bio="Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi …"
                    ></Card>
                </div>
            </div>
            <div className={styles.section4_content}>
                <h1 className={styles.section4_head}>Get a solutions to your businesses</h1>
                <p className={styles.section4_bio}>Our consultants help address your most challenging issues by providing strategic, financial, operational, and IT services.</p>
               <Buttons btnText={btnText}></Buttons>
            </div>
        </div>
    )
}

export default Section4