import prisma from "lib/prisma";
import DOMPurify from "isomorphic-dompurify";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const posts = await prisma.post.findMany();

    console.log(posts);
    res.status(200).send(posts);
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
