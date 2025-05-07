import BlogHeader from "@/components/blog/BlogHeader";
import { useParams } from "react-router-dom";
import blogRepo from "@/blogs/BlogRepo";
import PageNotFound from "@/pages/PageNotFound";

export default function BlogPage() {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogRepo.find((_blog) => _blog.id === blogId);
  if(!blog) return (
    <PageNotFound></PageNotFound>
  )
  return (
    <div>
        <BlogHeader blog={blog}/>
        {blog.content}
    </div>
    
  );
}