import * as stringutils from "lib/stringutils";
import { useRouter } from "next/router";
import DOMPurify from "isomorphic-dompurify";
import { findPost } from "pages/api/posts/[id]";
import { findUser } from "pages/api/users/[id]";
import { getPosts } from "pages/api/posts";
import { PostPreview } from "components";
import { isPropertySignature } from "typescript";

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
  const posts = await findPost(params.post);
  const user = await findUser(params.post.authorId);
  return {
    props: {
      postList: posts,
      user: user,
    },
  };
}

export default function Post(props) {
  console.log("getStaticProps- " + props);
  return (
    <div>
      {props.postList.id}
      <PostPreview post={props.postList}></PostPreview>
    </div>
  );
}
