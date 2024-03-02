import Body from "@/component/body/body";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className="container">
      <Body contact={true} />
    </div>
  );
}
