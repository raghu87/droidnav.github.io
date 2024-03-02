import Body from "@/component/body/body";
import styles from "./page.module.css";
// import Error from "@/component/error/error";

const NotFound = () => {
  return (
    <div className="container">
      <Body error={true} />
    </div>
  );
};

export default NotFound;
