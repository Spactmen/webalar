import React from 'react'
import usd from "../images/usd-circle.png"
import file from "../images/file-invoice-dollar.png"
import hand from "../images/hand-holding-usd.png"
import Card from "./Card"

const Cards = () => {
    return (
        <div style={{width:"85%",margin:"5rem auto"}}>
            <div style={{display:"flex",justifyContent:"center",gap:"2rem"}}>
                <Card 
                    imgsrc={usd}
                    head="Corporate finance"
                    bio="Leverage agile frameworks to provide a robust synopsis"
                ></Card>
                <Card
                    imgsrc={file}
                    head="Audit & Evaluation"
                    bio="Bring to the table win-win survival strategies to ensure proactive"
                ></Card>
                <Card
                    imgsrc={hand}
                    head="Market analysis"
                    bio="Nibh vel velit auctor aliqunean sollicitudinlorem bibendum auci …"
                ></Card>
            </div>
        </div>
    )
}

export default Cards