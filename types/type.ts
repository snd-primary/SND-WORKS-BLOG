export type Author = {
	name: string;
	image: string;
};

export type Thumbnail = {
	url: string;
	alt: string;
	width: number;
	height: number;
};

export type FrontMatter = {
	title: string;
	date: string;
	author: Author;
	description: string;
	modifiedDate?: string;
	category?: string;
	tags?: string[];
	thumbnail?: Thumbnail;
	canonicalUrl?: string;
	isPublished?: boolean;
	isaFeatured?: boolean;
	lang?: string;
};

export type Post = {
	slug: string;
	data: FrontMatter;
	content: string;
};
