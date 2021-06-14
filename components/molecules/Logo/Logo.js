import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className={styles.span}>
      nickm.codes
    </Link>
  );
}
