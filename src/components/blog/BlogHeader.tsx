import Title  from "../ui/title";
import Date from '../ui/date';
import Blog from "@/types/Blog";
import { Badge } from "../ui/badge";

type BlogHeaderProps = {
  blog: Blog
}
export default function BlogHeader({blog}: BlogHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <Title> {blog.title} </Title>
      <Date date={blog.datePublished}/>
      {
        blog.badges?.map((badge, i) => 
        <Badge key={badge} variant={i == 0 ? 'default' : 'secondary'}>{badge}</Badge>
        )
      }
    </div>
  );
}