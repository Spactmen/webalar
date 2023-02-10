import React from 'react'
import styles from "./header.module.css"
import envelope from "../images/envelope.png"

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header_bio}>Trendy theme for companies, agencies and startups</p>
      <div>
        <img src={envelope} className={styles.phone} alt="phone"></img>
        <p className={styles.phone_numer}> +44 141 552 3000</p>
      </div>
    </header>
  )
}

export default Header