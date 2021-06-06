import { Post, PrismaClient, User } from "@prisma/client";
import prisma from "lib/prisma";
import isInt from "validator/lib/isInt";
import escape from "validator/lib/escape";
import DOMPurify from "isomorphic-dompurify";

export default async function handler(req, res) {
  const id = DOMPurify.sanitize(req.query.id);

  if (!isInt(id)) {
    console.log(id);
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
