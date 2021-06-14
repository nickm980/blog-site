import { Post, User } from "@prisma/client";
import styles from "./SmallProfile.module.css";
import { DateTime } from "components";

export default function SmallProfile(props) {
  const user: User = props.user;

  const fullName = user.firstName + " " + user.lastName;

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={user.avatar}></img>
      <div className={styles.nameAndDateContainer}>
        <p className={styles.fullName}>{fullName}</p>
        <DateTime
          className={styles.datetime}
          createdAt={props.createdAt}
        ></DateTime>
      </div>
    </div>
  );
}
