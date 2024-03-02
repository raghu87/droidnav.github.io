import AdBanner from "../banner/AdBanner";
import styles from "./adsensetop.module.css";

const AdsenseTop = ({ adSlotId,clientId }) => {
  return (
    <AdBanner
      data-ad-slot={adSlotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-ad-client={clientId}
    />
  );
};

export default AdsenseTop;
