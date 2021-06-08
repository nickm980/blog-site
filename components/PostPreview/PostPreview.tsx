import styles from "components/PostPreview/PostPreview.module.css";
import { Post, User } from "@prisma/client";

export default function PostPreview(props) {
  const user: User = props.user;
  const post: Post = props.post;

  return (
    <article className={styles.article}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </article>
  );
}
