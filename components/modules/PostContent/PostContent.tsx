import styles from "./PostContent.module.css";
import { SplashImage } from "components";
import showdown from "showdown";
import DOMPurify from "isomorphic-dompurify";
import { isPropertySignature } from "typescript";
import { SmallProfile } from "components";
import { Post } from "@prisma/client";
import { DateTime } from "components";

export default function PostContent(props) {
  const post: Post = props.post;
  const convertor = new showdown.Converter();
  const text = post.content;

  return (
    <div>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.description}</p>
      <div className={styles.information}>
        <SmallProfile
          className={styles.smallprofile}
          user={props.user}
          createdAt={post.createdAt}
        ></SmallProfile>
      </div>

      <SplashImage src={post.splashImage}></SplashImage>
      <div dangerouslySetInnerHTML={{ __html: convertor.makeHtml(text) }}></div>
    </div>
  );
}
