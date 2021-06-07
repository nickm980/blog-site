import prisma from "lib/prisma";
import DOMPurify from "isomorphic-dompurify";

export async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export default async function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).send(getPosts());
    return;
  }

  if (req.method == "POST") {
    const body = DOMPurify.sanitize(req.body);

    const post = prisma.post.create({
      data: req.body,
    });

    console.log(req.body);

    res.status(201).send({
      message:
        "The request has succeeded and has led to the creation of a resourc",
    });
  }
}
