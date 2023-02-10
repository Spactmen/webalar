import React from 'react'
import styles from "./skillssection.module.css"
import Buttons from './Buttons'
import ProgressBar from './ProgressBar'

const SkillsSection = () => {

    const btnText = {
        btn1Text: "We are in the press",
        btn2Text: "Order Similar",
        btn1: true,
        btn2: false
    }

    return (
        <div className={styles.skills_section_section}>
            <div className={styles.skills_section_content}>
                <h1 className={styles.skills_section_head}> Our skills & expertise</h1>
                <p className={styles.skills_section_bio}>We help company set up business strategy including design brand identiy or product design service. So company can focus on their core business.  Morbi accumsan ipsum velit. Nam nec tellus.</p>
                <Buttons btnText={btnText} />
            </div>
            <div className={styles.skills}>
                <ProgressBar done="50" skill="Branding"></ProgressBar>
                <ProgressBar done="81" skill="Design & Development"></ProgressBar>
                <ProgressBar done="90" skill="PR & Marketing"></ProgressBar>
                <ProgressBar done="88" skill="PR & Marketing"></ProgressBar>
            </div>


        </div>
    )
}

export default SkillsSection