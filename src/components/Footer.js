import React from 'react'
import styles from "./footer.module.css"
import footer_blob from "../images/footer-blob.png"
import headset from "../images/headset2.png"
import sendImage from "../images/paper-plane.png"

const Footer = () => {
    // style={{ backgroundImage: `url(${footerbkg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}

    return (
        <div className={styles.footer_section}>
            <div>
                <div className={styles.footer_content}>
                    <div className={styles.footer_contact}>
                        <h3>Contacts</h3>
                        <div className={styles.contact_innerdiv}>
                            <div>
                                <img src={headset} className={styles.headset_img} alt="headset"></img>
                                <div className={styles.question_div}>
                                    <p>Have questions?</p>
                                    <h3>+44 141 552 3000</h3>
                                </div>
                            </div>
                            <p className={styles.contact_address}>Address: 2 St Gabriel Walk, London SE1 6FG, United Kingdom</p>
                            <p className={styles.contact_email}>E-mail: info@betria.com</p>
                        </div>
                    </div>
                    <div className={styles.footer_links_section}>
                        <h3>Links</h3>
                        <div>
                            <a href='/'>About</a>
                            {/* <a href='/'>Company</a> */}
                            <a href='/'>Our services</a>
                            <a href='/'>Team members</a>
                            <a href='/'>Portfolio</a>
                        </div>
                    </div>
                    <div className={styles.footer_links_2}>
                        <div>
                            <a href='/'>Our services</a>
                            <a href='/'>Team members</a>
                            <a href='/'>Portfolio</a>
                        </div>
                    </div>
                    <div className={styles.footer_subscribe_section}>
                        <h3>Subscribe</h3>
                        <div className={styles.footer_input_div}>
                            <input className={styles.footer_input} placeholder='Enter your email'></input>
                            <img src={sendImage} className={styles.send_img} alt="send"></img>
                        </div>
                        <p>Keep up to date with all new themes and updates.</p>
                    </div>
                </div>
                <div className={styles.copywrites}>
                    {/* <div></div> */}
                    <div>
                        <div className={styles.border_div}></div>
                        <p>© Elipso 2019. Landing Page Template by merkulove</p>
                    </div>
                </div>
                <img src={footer_blob} alt="blob" className={styles.footer_blob}></img>
                <div className={styles.violet_circle_big}></div>
                <div className={styles.violet_circle_small}></div>
                {/* <div className={styles.violet_circle_medium}></div> */}
                <div className={styles.pink_circle}></div>
            </div>
        </div>

    )
}

export default Footer