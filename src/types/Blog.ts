type Blog = {
  title: string;
  imageUrl: string;
  datePublished: Date,
  description: string;
  id: string;
  badges?: string[];
  content: React.ReactElement<any>
}

export default Blog;