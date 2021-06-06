import prisma from "lib/prisma";

export default async function handler(req, res) {
  const posts = await prisma.post.findMany();

  console.log(posts);
  res.status(200).send(posts);
}
