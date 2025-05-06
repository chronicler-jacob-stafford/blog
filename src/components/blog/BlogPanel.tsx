import BlogRepo from '@/blogs/BlogRepo';
import Blog from '@/types/Blog';
import { useState } from 'react';
import BlogCard from './BlogCard';



export default function BlogPanel() {

  const [blogs, _setBlogs] = useState<Blog[]>(BlogRepo);

 return (
  <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 place-items-center'>
      {blogs && blogs.map((blog) => <BlogCard key={blog.contentId} blog={blog} /> )}
  </div>
 );
}