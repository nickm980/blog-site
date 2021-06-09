import styles from "components/Post/Post.module.css";
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
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div>
        <SmallProfile user={props.user}></SmallProfile>
        <DateTime day={post.date.getDay}></DateTime>
      </div>

      <SplashImage src={post.splashImage}></SplashImage>
      <div dangerouslySetInnerHTML={{ __html: convertor.makeHtml(text) }}></div>
    </div>
  );
}
