import { checkPropTypes } from "prop-types";
import styles from "./PreviewContainer.module.css";

export default function PreviewContainer(props) {
  return <div className={styles.container}>{props.children}</div>;
}
