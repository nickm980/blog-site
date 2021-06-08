import { User } from "@prisma/client";
import prisma from "lib/prisma";

export async function findUser(id: string) {
  const user: User = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

export default async (req, res) => {
  const id = req.query.id;

  const user = await findUser(id);

  if (user == null) {
    res.status(201).send({ message: "Not a value userId" });
    return;
  }

  res.status(200).send(user);
};
