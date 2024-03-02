import Link from "next/link";
import styles from "./notfound.module.css";

const NotFound = () => {
  return (
    <div>
      <div className={styles.empty}>
        <div className={styles.emptyheader}>404</div>
        <p className={styles.emptytitle}>Oops… You just found an error page</p>
        <p className={styles.textmuted}>
          We are sorry but the page you are looking for was not found
        </p>
        <div className={styles.emptyaction}>
          <Link href="/" className={styles.btn}>
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
