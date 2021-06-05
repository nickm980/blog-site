import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default (req, res) => {
  const { postId } = req.query;

  const matchPost = await prisma.post.findOne({
    where: {
      id: Number(postId),
    },
  });

  res.status(200).json({ name: "post" + `${id}` });
};
