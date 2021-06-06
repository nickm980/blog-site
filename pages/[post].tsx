import * as stringutils from "lib/stringutils";
import { useRouter } from "next/router";
import DOMPurify from "isomorphic-dompurify";

export async function getServerSideProps() {
  return {
    props: {
      post: stringutils.getIdFromUrl("a"),
    },
  };
}

export default function Post({ post: Post, user: User }) {
  const router = useRouter();
  const pid = router.query;

  return <div>{pid.post}</div>;
}
