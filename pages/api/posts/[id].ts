import { Post, PrismaClient } from "@prisma/client";
import prisma from "lib/prisma";
import isInt from "validator/lib/isInt";

export default async function handler(req, res) {
  const id = req.query.id;

  if (!isInt(id)) {
    res.status(400).send({ message: "Query must be a valid number" });
    return;
  }

  const postId = await parseInt(id);
  console.log(postId);

  const post: Post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  console.log(post);
  res.status(200).send(post);
}
