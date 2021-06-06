import prisma from "@prisma/client";

export default (req, res) => {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  }

  const body = req.body;

  console.log(req.body);

  res.status(201).send({
    message:
      "The request has succeeded and has led to the creation of a resourc",
  });
};
