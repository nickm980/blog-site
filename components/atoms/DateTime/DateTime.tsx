import styles from "./DateTime.module.css";
import { Post } from "@prisma/client";
import monthNames from "lib/months";

export default function DateTime(props) {
  const date = new Date(props.createdAt);
  console.log("Created-props: " + props.createdAt);
  console.log(date.getDay());
  console.log("now date: " + new Date().getTime());

  return (
    <div>
      date:
      <p className={styles.date}>
        {date.getFullYear()} {monthNames[date.getMonth()]}
      </p>
    </div>
  );
}
