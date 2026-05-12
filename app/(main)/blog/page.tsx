import { getPosts } from "@/lib/mdx/getPosts";

export default function BlogPosts() {
  const posts = getPosts();
  console.table(posts);
  return <div>post page is loaded</div>;
}
