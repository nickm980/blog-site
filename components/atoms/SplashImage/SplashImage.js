import Image from "next/image";
import styles from "./SplashImage.module.css";

export default function SplashImage(props) {
  console.log(props.src);
  return <img className={styles.img} src={props.src}></img>;
}
