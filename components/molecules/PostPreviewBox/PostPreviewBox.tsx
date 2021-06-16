import { Post, User } from "@prisma/client";
import { SmallProfile } from "components";
import React from "react";
import styles from "./PostPreviewBox.module.css";
//import { Post, User } from "@prisma/client";

export default function PostPreviewBox(props) {
  const user: User = props.user;
  const post: Post = props.post;

  return (
    <article className={styles.article}>
      <a href={post.id + " "}>
        <img className={styles.splashImage} src={post.splashImage}></img>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <SmallProfile user={user}></SmallProfile>
      </a>
    </article>
  );
}
