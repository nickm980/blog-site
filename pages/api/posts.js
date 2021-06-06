import prisma from "lib/prisma";

export default (req, res) => {
  const posts = prisma.post.findMany({
    take: 10,
  });

  console.log(posts);
  res.status(200).send(posts);
};
