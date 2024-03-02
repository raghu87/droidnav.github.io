import Navbar from "./navbar/Navbar";
import styles from "./header.module.css"

const Header = ({domainname}) => {
    return (
       <header className={styles.container}>
            <Navbar domainname={domainname}/>
       </header>
    )
}

export default Header;