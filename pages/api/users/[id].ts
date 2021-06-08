import { User } from "@prisma/client";
import prisma from "lib/prisma";

export async function findUser(id) {
  const user: User = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

export default (req, res) => {
  const { id } = req.query;
  res.status(200).send(findUser(id));
};
