import Head from "next/head";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return {
    props: {
      users: users,
      posts: posts,
    },
  };
}

export default function Home({ users, posts }) {
  const user = users[0];

  if (user != null && user.posts != null) {
    const items = [];

    for (let i = 0; i < user.length; i++) {
      items.push(<div key={i}>s</div>);
      console.log("A");
    }

    return (
      <div>
        Hi:
        {items}
      </div>
    );
  } else {
    return <div>User Not Found</div>;
  }
}
