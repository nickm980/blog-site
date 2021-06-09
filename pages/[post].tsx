import * as stringutils from "lib/stringutils";
import { useRouter } from "next/router";
import DOMPurify from "isomorphic-dompurify";
import { findPost } from "pages/api/posts/[id]";
import { findUser } from "pages/api/users/[id]";
import { getPosts } from "pages/api/posts";
import { PostPreview } from "components";
import { isPropertySignature } from "typescript";
import { Post, User } from ".prisma/client";

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   console.log(posts);
//   const params = posts.map((post) => {
//     params: {
//       post: post.id;
//     }
//   });

//   return {
//     paths: params,
//     fallback: false,
//   };
// }

//Expect a lot of blog posts
export async function getServerSideProps({ params }) {
  const post: Post = await findPost(params.post);

  let id = null;

  if (post != null) {
    id = post.authorId;
  }

  const user: User = await findUser(id);

  return {
    props: {
      post: post,
      user: user,
    },
  };
}

export default function PostView(props) {
  if (props.post == null || props.user == null) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <PostPreview post={props.post} user={props.user}></PostPreview>
    </div>
  );
}
