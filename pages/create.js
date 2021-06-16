import Head from "next/head";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { TextEditor, EditorContainer } from "components";

export default function Create() {
  return (
    <EditorContainer>
      <TextEditor></TextEditor>
    </EditorContainer>
  );
}
