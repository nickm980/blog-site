import styles from "./DateTime.module.css";
import { Post } from "@prisma/client";
import getTimeFromLong from "lib/months";

export default function DateTime(props) {
  return <p className={styles.date}>{getTimeFromLong(props.createdAt)}</p>;
}
