import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./TextEditor.module.css";
import { Button } from "components";
import axios from "axios";

const importJodit = () => import("jodit-react");

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

export default function TextEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    maxHeight: 400,
    minHeight: 400,
    buttons:
      "bold,italic,underline,strikethrough,superscript,subscript,ul,ol,indent,outdent,left,fontsize,paragraph,image,video,table,link",
  };

  function submitContent(obj) {
    axios
      .post("/api/posts", {
        content: content,
        description: "Description",
        createdAt: new Date().getTime(),
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  /*  id          Int    @id @default(autoincrement())
  title       String
  description String
  content     String
  splashImage String
  createdAt   Int
  authorId    String
  author      User   @relation(fields: [authorId], references: [id])*/

  return (
    <div>
      <input className={styles.title}></input>
      <JoditEditor
        className={styles.joditcontainer}
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <Button
        placeholder="Click me"
        onClick={() => submitContent(content)}
      ></Button>
    </div>
  );
}
