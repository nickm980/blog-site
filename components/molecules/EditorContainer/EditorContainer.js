import styles from "./EditorContainer.module.css";

export default function EditorContainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}
