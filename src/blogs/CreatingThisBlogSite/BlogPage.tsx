import BlogHeader from "@/components/blog/BlogHeader";
import Blog from "@/types/Blog";

const blog: Blog = {
  title: 'Shadcn UI for boilerplate patterns?',
  imageUrl: '' ,
  description: 'My recommendation to use Shadcn to kickstart you Pattern Library.',
  contentId: 'godot',
  badges: ['Pattern Library', 'Shadcn', 'React'],
  datePublished:  new Date()
};

export default function BlogPage() {

  return (
    <div>
        <BlogHeader blog={blog}/>
    </div>
  );
}

export {blog};