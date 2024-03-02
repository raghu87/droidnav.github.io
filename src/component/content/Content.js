import AboutPage from "../aboutUs/aboutUs";
import AdsenseBottom from "../adsense/bottom/adsenseBottom";
import AdsenseLeft from "../adsense/left/adsenseLeft";
import AdsenseRight from "../adsense/right/adsenseRight";
import AdsenseTop from "../adsense/top/adsenseTop";
import BreadCrumb from "../breadcrumb/breadcrumb";
import ContactPage from "../contactUs/contactUs";
import InnerContent from "../innerContent/innerContent";
import NotFound from "../notfound/notfound";
import styles from "./content.module.css";

const Content = ({ error, crumbs, contact, about,showAdSense,clientId,adSlotId }) => {
  return (    
    <main className={styles.container}>
      <div className={styles.gridcontainer}>
        <div className={styles.griditemleft}>
          {showAdSense && <AdsenseLeft clientId={clientId} adSlotId={adSlotId}/>}          
        </div>
        <div className={styles.griditem}>
          <div>
            {showAdSense && <AdsenseTop  clientId={clientId} adSlotId={adSlotId}/>}
            <BreadCrumb crumbs={crumbs} />
          </div>
          <div>
            {!error ? (
              about ? (
                <AboutPage />
              ) : contact ? (
                <ContactPage />
              ) : (
                <InnerContent />
              )
            ) : (
              <NotFound />
            )}
          </div>
          <div>
            {showAdSense && <AdsenseBottom clientId={clientId} adSlotId={adSlotId}/>}
          </div>
        </div>
        <div className={styles.griditemright}>
          {showAdSense && <AdsenseRight clientId={clientId} adSlotId={adSlotId}/>}
        </div>
      </div>
    </main>
  );
};

export default Content;
