import BlogLayout from "Components/BlogLayout/BlogLayout";
import { blogData } from "DB/blogs/blogData";

export async function generateMetadata({ params }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | iinve",
      description: "The blog you are looking for doesn't exist.",
    };
  }

  return {
    title: `${blog.title} | iinve`,
    description: blog.description || "Read more about digital innovation, e-invites, and customer engagement with iinve.",
    openGraph: {
      title: blog.title,
      description: blog.description || blog.title,
      url: `https://iinve.com/blog/${blog.slug}`,
      images: [
        {
          url: blog.og_image || "/default-og.jpg",
          alt: blog.banner?.alt || blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt || blog.title,
      images: [blog.og_image || "/default-og.jpg"],
    },
  };
}

const page = ({ params }) => {
  const { slug } = params;
  const blog = blogData.find((b)=> b.slug === slug)
  return (
    <div>
      <BlogLayout blog={blog} />
    </div>
  )
}

export default page