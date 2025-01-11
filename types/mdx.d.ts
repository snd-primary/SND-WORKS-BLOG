// types/mdx.d.ts
declare module "*.mdx" {
	import type { MDXProps } from "mdx/types";

	export default function MDXContent(props: MDXProps): JSX.Element;
}
