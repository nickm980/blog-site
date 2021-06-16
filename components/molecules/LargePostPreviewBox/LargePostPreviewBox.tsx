import { Post, User } from "@prisma/client";
import { SmallProfile } from "components";
import React from "react";
import styles from "./LargePostPreviewBox.module.css";
//import { Post, User } from "@prisma/client";

export default function LargePostPreviewBox(props) {
  const user: User = props.user;
  const post: Post = props.post;

  return (
    <article className={styles.container}>
      <a className={styles.containerChild} href={post.id + " "}>
        <img className={styles.splashImage} src={post.splashImage}></img>
        <div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <SmallProfile className={styles.profile} user={user}></SmallProfile>
        </div>
      </a>
    </article>
  );
}
