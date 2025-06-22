import { MDXRemote } from "next-mdx-remote/rsc";
import { getDocBySlug } from "@/lib/content";
import rehypePrism from "rehype-prism-plus";

export default async function DocPage(props: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const params = await props.params;
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
  const path = slugArray.join("/");

  const { data, content } = await getDocBySlug(path); // if getDocBySlug is async

  return (
    <article className="prose p-8">
      <h1>{data.title}</h1>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: { rehypePlugins: [rehypePrism] },
        }}
      />
    </article>
  );
}
