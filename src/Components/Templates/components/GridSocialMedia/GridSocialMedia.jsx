'use client'
import ActionButton from "@/ProUI/ActionButton/ActionButton";
import useWindowDimensions from "@/utils/useWindowDimensions";
import Image from "next/image";

const PostGrid = ({data}) => {
  const {width}= useWindowDimensions()
  const gridItems = data?.map((item, index) => (
    <div key={index} className="rounded-xl w-[70px] md:w-[100px] object-cover h-[70px] md:h-[100px] overflow-hidden">
      <Image src={item?.thumbnail_url} alt="post" width={200} height={200} className="object-cover rounded-xl" />
    </div>
  ));
  return (
    <div className={`grid gap-2 w-full ${width > 768 ? 'grid-cols-3' : 'grid-cols-3'} md:w-[50%] justify-between`}>
      {gridItems?.slice(0, 6)}
    </div>
  );
}

const GridSocialMedia = ({key, data}) => {
  // const {name} = data;
  const userName = data?.data?.user?.username
  const profile_pic = data?.data?.user?.profile_pic_url
  return (
    <div key={`social_${key}`} className='md:flex flex-col md:flex-row w-[90%] md:w-[700px] mx-auto items-center justify-center bg-zinc-900 p-10 rounded-2xl my-10'>
      <div className='md:mr-14 mb-10 md:mb-0'>
         <div className="flex items-center mb-6 md:flex-col">
         <span><Image src={profile_pic} height={50} width={50} alt="instagram" className="rounded-full" /></span>
         <h5 className="text-3xl font-semibold mb-2 ml-4 md:ml-0 md:mt-4">{userName}</h5>
         </div>
        {/* <p className="text-xl"><b className="mr-2">100K</b>followers</p> */}
        <ActionButton className="w-full mt-2 bg-black text-white py-2 rounded-3xl ">Follow me</ActionButton>
      </div>
      <PostGrid data={data?.data?.items}/>
    </div>
  )
}

export default GridSocialMedia