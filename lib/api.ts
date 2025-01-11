import fs from "node:fs";
import { join } from "node:path";
import type { Post } from "@/types/type";
import matter from "gray-matter";

//mdxが格納されているディレクトリ(絶対パス)
const postsDirectory = join(process.cwd(), "/app/content");

// mdxファイル名の配列 -> [ 'test.mdx', 'にほんご.mdx' ]
const getPostSlugs = () => {
	return fs.readdirSync(postsDirectory);
};

//記事データの取得
export const getPostBySlug = async (slug: string): Promise<Post> => {
	try {
		const realSlug = slug.replace(/\.mdx$/, "");
		const fullPath = join(postsDirectory, `${realSlug}.mdx`);
		const fileContents = await fs.promises.readFile(fullPath, "utf-8");

		//frontmatterとコンテンツの分離
		const { data, content } = matter(fileContents);

		return {
			slug: realSlug,
			data: {
				title: data.title,
				date: data.date,
				author: data.author,
				description: data.description,
				tags: data.tags,
				thumbnail: data.thumbnail,
				canonicalUrl: data.canonicalUrl,
				isPublished: data.isPublished,
				isaFeatured: data.isaFeatured,
				lang: data.lang,
			},
			content,
		};
	} catch (error) {
		console.error(`Error laoding post ${slug}: `, error);
		throw error;
	}
};

//mdxコンテンツの全件取得
export const getAllPosts = async (): Promise<Post[]> => {
	try {
		const slugs = getPostSlugs();
		const posts = await Promise.all(
			slugs.map(async (slug) => {
				try {
					return await getPostBySlug(slug);
				} catch (error) {
					console.error(error);
					return null;
				}
			}),
		);

		return posts
			.filter((post): post is Post => post !== null)
			.sort(
				(a, b) =>
					new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
			);
	} catch (error) {
		console.error(error);
		throw error;
	}
};
