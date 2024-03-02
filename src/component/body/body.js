"use client";

import styles from "./body.module.css";
import Content from "../content/Content";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { checkFooterPattern, checkLogoPattern } from "@/shared/utils";
import { useEffect, useState } from 'react';
import AdsenseScript from "../adsense/adsenseScript/AdsenseScript";


const Body = ({error, about, contact}) => {  
  const [showAdSense,setShowAdSense] = useState(false);
  const [domainname,setdomainname] = useState('');

  useEffect(() => {
      setdomainname(window.location.hostname);
      // if(process.env.NODE_ENV === "production" && window.location.hostname.match(/droidnav.com/)) {
      //   setShowAdSense(true);
      // }
  }, []);

  const headerDomain = checkLogoPattern(domainname);
  const footerDomain = checkFooterPattern(domainname);
  //   const crumbs = [
  //     { title: "Home", link: "/" },
  //     { title: "Category", link: "/category" },
  //     { title: "Subcategory", link: "/category/subcategory" },
  //     { title: "Current Page" },
  //   ];
  const crumbs = [];

  const clientId = "ca-pub-3968207394235712";
  const adSlotId = "7901467180";

  return (
    <div>
      <AdsenseScript clientId={clientId} />
      <Header domainname={headerDomain} />      
      <Content error={error || false} crumbs={crumbs} contact={contact || false} about={about || false} showAdSense={showAdSense} clientId={clientId} adSlotId={adSlotId}/>
      <Footer domainname={footerDomain} />
    </div>
  );
};

export default Body;
