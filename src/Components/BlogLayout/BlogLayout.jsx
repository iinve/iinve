'use client';

import { blogData } from "DB/blogs/blogData";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import ActionButton from 'ProUI/ActionButton/ActionButton';

export default function BlogLayout({ blog }) {

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 2]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <div className="pt-[140px]">
      {/* Banner Section */}
      <div className="w-[90%] mx-auto flex justify-center mb-12 relative">
        <div className="w-full max-w-7xl h-[250px] md:h-[280px] relative rounded-3xl overflow-hidden shadow-xl">
          <motion.div className="absolute inset-0" style={{ scale }}>
            <Image
              src={blog.banner.image}
              alt={blog.banner.alt}
              className="object-cover opacity-30"
              fill
              priority
            />
          </motion.div>
          <motion.div
            style={{ scale, opacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className='text-center'>
              <h1 className="text-white text-2xl md:text-3xl font-bold text-center w-full md:w-1/2 mx-auto px-2 mb-6">
                {blog.title}
              </h1>
              <ActionButton color='primary' className='mx-auto' size='lg'>
                <Link href={blog.cta.url}>{blog.cta.label}</Link>
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Body */}
      <div className="max-w-3xl mx-auto px-4 text-gray-300">
        <p className="text-sm text-gray-400 mb-6 text-right w-full mb-8">
          Published: {blog.date} &middot; By: {blog.author}
        </p>

        {blog.sections.map((section, index) => (
          <div key={index} className="my-14">
            <h2 className="text-2xl font-semibold mt-8 mb-3">{section.heading}</h2>
            {section.body && <p className="mb-6" dangerouslySetInnerHTML={{ __html: section.body }} />}
            {section.list && section.type === "ol" ? (
              <ol className="list-decimal pl-5 mb-6 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            ) : (
              section.list && (
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
