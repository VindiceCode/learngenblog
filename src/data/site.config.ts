interface SiteConfig {
	author: string
	Design_author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'DanielCG', // Site author
	Design_author: 'Ian Melchor',
	title: 'LeadGen.IO', // Site title.
	description: 'This website is a blog about technology, sales, AI, and more.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
