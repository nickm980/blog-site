import { Post, PrismaClient } from "@prisma/client";
import prisma from "lib/prisma";

export default async function handler(req, res) {
  const id = req.query.id;
  const postId = await parseInt(id);

  console.log(postId);

  const post: Post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  res.status(200).send(`Post: ${post.title}`);
}
