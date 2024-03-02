import Body from "@/component/body/body";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className="container">
      <Body about={true} />
    </div>
  );
}
