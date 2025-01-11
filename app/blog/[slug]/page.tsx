import { getAllPosts, getPostBySlug } from "@/lib/api";
import { MDXRemote } from "next-mdx-remote/rsc";

export const generateStaticParams = async () => {
	const posts = await getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const post = await getPostBySlug((await params).slug);

	return (
		<div>
			<div>{post.data.title}</div>
			<MDXRemote source={post.content} />
		</div>
	);
};

export default Page;
