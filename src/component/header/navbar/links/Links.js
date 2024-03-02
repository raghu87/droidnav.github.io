"use client";

import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import {useState} from "react";
import menu from "@/images/menu.png"
import Image from "next/image";

const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    }
];

const Links = () => {       
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {
                    // links.map(link => <Link href={link.path} key={link.title}>{link.title}</Link>)
                    links.map((link => (<NavLink item={link} key={link.title} />)))
                }
            </div>
            <Image src={menu} alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} className={styles.menuButton} />
            {
                open && <div className={styles.mobileLinks}>
                    {
                        links.map((link => (
                            <NavLink item={link} key={link.title} />
                        )))
                    }
                </div>
            }
        </div>        
    )
}

export default Links;