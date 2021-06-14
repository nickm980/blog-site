import styles from "./RecentPosts.module.css";
import { PreviewContainer, PostPreviewBox } from "components";

export default function RecentPosts(props) {
  const items = [];

  for (let i = 0; i < props.posts.length && i < props.users.length; i++) {
    console.log(i);
    items.push(
      <PostPreviewBox
        post={props.posts[i]}
        user={props.users[i]}
      ></PostPreviewBox>
    );
  }

  return <PreviewContainer>{items}</PreviewContainer>;
}
