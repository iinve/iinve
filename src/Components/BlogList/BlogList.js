import { Link } from "@heroui/react";
import InfoChip from "Components/InfoChip/InfoChip";
import { blogData } from "DB/blogs/blogData";
import Image from "next/image";
import ProIcon from "ProUI/Icons/icons";
import ProHeading from "ProUI/ProHeading/ProHeading";

export const BlogCard = ({ title, description, image, slug }) => {
  return (
    <div className="relative rounded-3xl border border-[1px] border-solid bg-black border-[#1444a8] overflow-hidden shadow-lg text-white w-full mx-auto flex items-center justify-between flex-col transition hover:scale-2">
    <div className="w-full relative">
      <Image
        src={image}
        alt={title}
        layout="responsive"
        width={16}
        height={9} // adjust these to your preferred aspect ratio
        className="object-cover"
      />
    </div>
  
    <div className="rounded-b-3xl w-full bg-[#000] p-5 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-white/80">{description}</p>
      <Link
        href={`/blog/${slug}`}
        className="font-bold w-full !mt-6 block text-right"
      >
        Read more
      </Link>
    </div>
  </div>
  
  );
};

const BlogList = () => {
  return (
    <div className="container mx-auto " id="blogs">
      <div className="text-center lg:text-left">  <InfoChip icon={<ProIcon name='FaRegStar' size={18} color='#fff' />} name={"Blogs"} className={"chip"} isLeft />
        <ProHeading>Latest Blogs</ProHeading></div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 my-[80px] px-4 lg:px-0">
        {blogData.map((blog, idx) => (
          <BlogCard
            key={idx}
            title={blog.title}
            description={blog.description}
            image={blog.og_image}
            slug={blog.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
