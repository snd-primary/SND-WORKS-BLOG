// next.config.mjs
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMDX = createMDX({
	options: {},
});

export default withMDX(nextConfig);
