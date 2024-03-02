import Link from "next/link";
import styles from "./breadcrumb.module.css";

const BreadCrumb = ({ crumbs }) => {
  return (
    <div>
      <ul className={styles.arrows}>
        {crumbs.map((crumb, index) => (
          <li key={index}>
            {crumb.link ? (
              <Link href={crumb.link}>{crumb.title}</Link>
            ) : (
              <span>{crumb.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumb;
