import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getDocBySlug = (slug: string) => {
    const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);
    return { data, content };
};
