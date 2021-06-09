import styles from "./DateTime.module.css";
import { Post } from "@prisma/client";

export default function DateTime(props) {
  return (
    <div>
      <p className={styles.date}>{props.day}</p>
    </div>
  );
}
