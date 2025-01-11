import { getAllPosts } from "@/lib/api";

export const generateStaticParams = async () => {
	const posts = await getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;

	return (
		<div>
			<div>asdfasf</div>
		</div>
	);
};

export default Page;
