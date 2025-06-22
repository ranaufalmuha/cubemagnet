import { MDXRemote } from "next-mdx-remote/rsc";
import { getDocBySlug } from "@/lib/content";
import rehypePrism from "rehype-prism-plus";
import { PageParams } from "@/types/route";

export default function DocPage({ params }: PageParams) {
  const { data, content } = getDocBySlug(params.slug.join("/"));

  return (
    <article className="prose p-8">
      <h1>{data.title}</h1>
      <MDXRemote
        source={content}
        options={{ mdxOptions: { rehypePlugins: [rehypePrism] } }}
      />
    </article>
  );
}
