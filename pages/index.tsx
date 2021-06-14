import Head from "next/head";
import Image from "next/image";
import { Post, PrismaClient, User } from "@prisma/client";
import { PostPreviewBox, RecentPosts } from "components";
import { findUser } from "pages/api/users/[id]";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  let posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  const users = [];

  for (let i = 0; i < posts.length; i++) {
    users.push(posts[i].author);
  }

  return {
    props: {
      users: users,
      posts: posts,
    },
  };
}

export default function Home(props) {
  const posts = props.posts;

  if (posts != null) {
    return <RecentPosts posts={props.posts} users={props.users}></RecentPosts>;
  } else {
    return <div>User Not Found</div>;
  }
}
