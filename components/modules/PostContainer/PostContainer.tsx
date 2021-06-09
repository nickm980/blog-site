import styles from "./PostContainer.module.css";

export default function PostPreviewContainer(props) {
  return <section className={styles.container}>{props.children}</section>;
}
