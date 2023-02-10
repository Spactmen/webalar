import React from 'react'
import PriceCard from "./PriceCard"
import styles from "./pricecards.module.css"

const PriceCards = () => {
    const priceData = [[
        {
            text: "Free updates",
            available: true
        },
        {
            text: "Custom domain",
            available: true
        },
        {
            text: "Outstanding support",
            available: true
        },
        {
            text: "Unlimited storage",
            available: false
        },
        {
            text: "Build responsive website",
            available: false
        }], [{
            text: "Free updates",
            available: true
        },
        {
            text: "Custom domain",
            available: true
        },
        {
            text: "Outstanding support",
            available: true
        },
        {
            text: "Unlimited storage",
            available: true
        },
        {
            text: "Build responsive website",
            available: false
        }], [        {
            text: "Free updates",
            available: true
        },
        {
            text: "Custom domain",
            available: true
        },
        {
            text: "Outstanding support",
            available: true
        },
        {
            text: "Unlimited storage",
            available: true
        },
        {
            text: "Build responsive website",
            available: true
        }]
    ]
    // const priceData2 = [
    //     {
    //         text: "Free updates",
    //         available: true
    //     },
    //     {
    //         text: "Custom domain",
    //         available: true
    //     },
    //     {
    //         text: "Outstanding support",
    //         available: true
    //     },
    //     {
    //         text: "Unlimited storage",
    //         available: true
    //     },
    //     {
    //         text: "Build responsive website",
    //         available: false
    //     },
    // ]
    // const priceData3 = [
    //     {
    //         text: "Free updates",
    //         available: true
    //     },
    //     {
    //         text: "Custom domain",
    //         available: true
    //     },
    //     {
    //         text: "Outstanding support",
    //         available: true
    //     },
    //     {
    //         text: "Unlimited storage",
    //         available: true
    //     },
    //     {
    //         text: "Build responsive website",
    //         available: true
    //     },
    // ]
    return (
        <div className={styles.price_cards_section}>
            <PriceCard priceData={priceData[0]}></PriceCard>
            <PriceCard priceData={priceData[1]}></PriceCard>
            <PriceCard priceData={priceData[2]}></PriceCard>
        </div>
    )
}

export default PriceCards