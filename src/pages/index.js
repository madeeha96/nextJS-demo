import Layout from "../layouts/layout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello" title="Hello Next.js" />
      <PostLink id="learn" title="Learn Next.js is awesome" />
      <PostLink id="deploy0 " title="Deploy apps with Madeeha" />
    </ul>
  </Layout>
);
