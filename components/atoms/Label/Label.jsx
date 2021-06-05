import styles from "components/atoms/Label/Label.module.css";

export default function Label(props) {
  return <label className={styles.label}>{props.children}</label>;
}
