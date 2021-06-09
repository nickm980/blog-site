import { Post, User } from "@prisma/client";
import { SmallProfile } from "components";
import React from "react";
import styles from "./PostPreview.module.css";
//import { Post, User } from "@prisma/client";

export default function PostPreview(props) {
  const user: User = props.user;
  const post: Post = props.post;

  return (
    <article className={styles.article}>
      <div className={styles.leftside}>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <SmallProfile user={user}></SmallProfile>
      </div>
      <div className={styles.rightside}>
        <img src={post.splashImage}></img>
      </div>
    </article>
  );
}
