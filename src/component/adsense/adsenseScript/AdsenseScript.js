import Script from "next/script";

const AdsenseScript = ({clientId}) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}}`}
      crossorigin="anonymous"
      strategy="lazyOnload"
    />
  );
};

export default AdsenseScript;
