import React from 'react'
import Buttons from './Buttons'
import person2 from "../images/person2.png"
import styles from "./section2.module.css"
const Section2 = () => {
  const btnText = {
    btn1Text: "Get Started",
    btn2Text: "Read more",
    btn1: true,
    btn2: true
  }

  return (
    <div className={styles.section2_section}>
      <div>
        <img src={person2} className={styles.section2_img} alt="heroimg"></img>
      </div>
      <div className={styles.section2_content}>
        <h1 className={styles.section2_head}> Get the ultimate tool and learn how to grow your audience</h1>
        <p className={styles.section2_bio}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Many desktop publishing packages and web..</p>
        <Buttons btnText={btnText} />
      </div>
    </div>
  )
}

export default Section2