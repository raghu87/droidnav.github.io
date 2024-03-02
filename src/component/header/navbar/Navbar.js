import Links from "./links/Links";
import styles from "./navbar.module.css"
import Link from "next/link";

const Navbar = ({domainname}) => {    
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>{domainname}</Link>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar;