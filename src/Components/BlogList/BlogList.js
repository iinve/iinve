import { Assets } from "assets/assets";
import Image from "next/image";

export const BlogCard = ({ title, description }) => {
  return (
    <div className="relative rounded-3xl  border border-[1px] border-solid border-[#1444a8] overflow-hidden shadow-lg text-white w-full h-[400px] mx-auto">
      <Image
        src={Assets.Banner_mob}
        alt={title}
        className="h-[220px] w-full object-cover"
      />

      <div className="rounded-b-3xl w-full bg-[#000]  p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-white/80">{description}</p>
        <button className="w-full mt-3 bg-[#1444a8] text-white py-2 rounded-full font-medium">
          Book now
        </button>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 px-6 my-6">
        <BlogCard
          title="Bali Jungle Villa"
          description="Escape to a peaceful retreat tucked in Ubud’s lush jungle, perfect for a slow, mindful reset."
        />
        <BlogCard
          title="Santorini Sunset Loft"
          description="Experience a cliffside loft with iconic white walls, blue domes, and magical sunset views."
        />
        <BlogCard
          title="Dubai Skyline Suite"
          description="Romantic views of the Burj Khalifa with floor-to-ceiling windows and a private balcony."
        />
        <BlogCard
          title="Bali Jungle Villa"
          description="Escape to a peaceful retreat tucked in Ubud’s lush jungle, perfect for a slow, mindful reset."
        />
      </div>
    </div>
  );
};

export default BlogList;
