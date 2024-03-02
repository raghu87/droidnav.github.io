import Link from "next/link";
import styles from "./footer.module.css"

const Footer = ({domainname}) => {
    return (
        <footer className={styles.container}>
            <p className={styles.text}>&copy; 2024 <Link href="/">{domainname}</Link>. All rights reserved. | <Link href="/">Privacy Policy</Link> | <Link href="/">Terms of Service</Link></p>
        </footer>
    )
}

export default Footer;