import Head from "next/head";

export default function SEO({
    title = "Default Title",
    description = "Default description for your website.",
    keywords = "AI, Content Scheduler, Social Media, Automation",
    image = "/og-image.jpg",
    url = "https://yourdomain.com",
    type = "website",
    author = "Your Brand Name",
}) {
    return (
        <Head>
            {/* Basic SEO */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={url} />

            {/* Open Graph (Facebook, LinkedIn, etc.) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image.startsWith("http") ? image : `${url}${image}`} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={author} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image.startsWith("http") ? image : `${url}${image}`} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
