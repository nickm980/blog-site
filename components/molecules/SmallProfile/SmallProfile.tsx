import { User } from "@prisma/client";
import styles from "./SmallProfile.module.css";

export default function SmallProfile(props) {
  const user: User = props.user;
  const fullName = user.firstName + " " + user.lastName;

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={user.avatar}></img>
      <p className={styles.inline}>{fullName}</p>
    </div>
  );
}
