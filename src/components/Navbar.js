import { React, useState, useEffect } from 'react'
import styles from "./navbar.module.css"
import logo from "../images/logo.png"

const Navbar = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            style={{
                position: scrollHeight > 50 ? 'fixed' : 'relative',
                top: scrollHeight > 50 ? '0' : 'auto',
                transition: 'all 0.5s ease-in-out',
                backdropFilter: scrollHeight > 50 ? 'blur(10px)' : 'none',
                backgroundColor: scrollHeight > 50 ? 'rgba(255, 255, 255, 0.3)' : '#fff',
                width: '100%',
                zIndex: '100'
            }}
            className={styles.nav}>
            <div className={styles.nav_container}>
                <div className={styles.nav_group}>
                    <img src={logo} alt="logo"></img>
                    <ul className={styles.nav_list}>
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={styles.btns_group}>
                    <button className={styles.nav_btn}>login</button>
                    <p>or</p>
                    <button className={styles.nav_btn}>Create account</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar