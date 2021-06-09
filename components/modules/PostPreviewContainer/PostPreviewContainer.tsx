import styles from "./PostPreviewContainer.module.css";

export default function PostPreviewContainer(props) {
  return <section className={styles.container}>{props.children}</section>;
}
