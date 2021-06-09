import styles from "components/Post/Post.module.css";
import { SplashImage } from "components";

export default function Post(props) {
  const post = props.post;

  return (
    <main>
      <SplashImage></SplashImage>
    </main>
  );
}
