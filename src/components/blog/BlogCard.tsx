import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Blog from '@/types/Blog';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog } : BlogCardProps) {
  const navigate = useNavigate();

  return (
  <Card 
    className="justify-between
     hover:border-green-300 hover:scale-[1.02] 
      w-[300px]
      overflow-hidden p-0"
    onClick={() => void navigate(`blog/${blog.id}`)}
  >
    <CardHeader className="flex flex-col gap-4 p-4 pb-2">
      <CardTitle>{blog.title}</CardTitle>
      <div className="flex gap-2">
        {
          blog.badges?.map((badge, i) => 
          <Badge key={badge} variant={i == 0 ? 'default' : 'secondary'}>{badge}</Badge>
          )
        }
      </div>
    </CardHeader>

    <CardDescription className="p-4 pt-0"> {blog.description}</CardDescription>

    <img
      src={blog.imageUrl}
      className=" w-full h-40 object-cover"
    />
</Card>
  );
}