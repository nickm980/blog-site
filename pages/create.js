import Head from "next/head";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

export default function Create() {
  return (
    <div>
      Hi:
      {items}
    </div>
  );
}
