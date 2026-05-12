import { getPost } from "@/lib/mdx/getPost";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  console.log("SLUG:", slug);

  const post = getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-3xl px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      {/* Meta */}
      <p className="text-gray-500 mb-6">
        {post.readingTime} • {post.date}
      </p>

      {/* Markdown Content */}
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 leading-7 my-2">{children}</p>
    ),
    code: ({ children }) => (
      <code className="bg-gray-200 px-1 rounded">{children}</code>
    ),
  }}
>
  {post.content}
</ReactMarkdown>
      </article>
    </div>
  );
};

export default Page;