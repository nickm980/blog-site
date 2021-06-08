import styles from "components/PostPreview/PostPreview.module.css";
import { Post, User } from "@prisma/client";

export default function PostPreview(props) {
  const user: User = props.user;
  const post: Post = props.post;

  return (
<<<<<<< HEAD
    <article className={styles.article}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
=======
    <article>
      <div className={styles.leftside}>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
      <div className={styles.rightside}>
        //<Image src={post.src}</Image>
      </div>
>>>>>>> 7480f83e87b5c5ad070db35c0c0514d1f6606b2b
    </article>
  );
}
