import Title  from "../ui/title";
import Date from '../ui/date';
import Blog from "@/types/Blog";

type BlogHeaderProps = {
  blog: Blog
}
export default function BlogHeader({blog}: BlogHeaderProps) {
  return (
    <div className="flex flex-col">
      <Title> {blog.title} </Title>
      <Date date={blog.datePublished}/>
    </div>
  )
}