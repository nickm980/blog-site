import styles from "components/PostPreview/PostPreview.module.css";
import { Post, User } from "@prisma/client";

export default function PostPreview(props) {
  const user: User = props.user;
  const post: Post = props.post;

  return (
    <article>
      <div className={styles.leftside}>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{user.firstName}</p>
      </div>
      <div className={styles.rightside}></div>
    </article>
  );
}
