import Blog from '@/types/Blog';
import tailwindImg from '@/assets/tailwind.jfif';

const BlogRepo: Blog[] = [
  {
    title: 'Tailwind CSS for UI Libraries',
    imageUrl: tailwindImg,
    description: 'Is Tailwind helpful for your Pattern Library?',
    contentId: 'tailwind',
    badges: ['Pattern Library', 'Tailwind', 'CSS'],
    datePublished: new Date()
  },
  {
    title: 'Painpoint: C# in Godot 2025',
    imageUrl: tailwindImg,
    description: 'What are the current challenges of C# in Godot.',
    contentId: 'godot',
    badges: ['Game Dev', 'Godot', 'C#'],
    datePublished:  new Date()
  },
  {
    title: 'Shadcn UI for boilerplate patterns?',
    imageUrl: tailwindImg,
    description: 'My recommendation to use Shadcn to kickstart you Pattern Library.',
    contentId: 'godot',
    badges: ['Pattern Library', 'Shadcn', 'React'],
    datePublished:  new Date()
  },
  {
    title: 'Shadcn UI for boilerplate patterns?',
    imageUrl: tailwindImg,
    description: 'My recommendation to use Shadcn to kickstart you Pattern Library.',
    contentId: 'godot',
    badges: ['Pattern Library', 'Shadcn', 'React'],
    datePublished:  new Date()
  },
  {
    title: 'Shadcn UI for boilerplate patterns?',
    imageUrl: tailwindImg,
    description: 'My recommendation to use Shadcn to kickstart you Pattern Library.',
    contentId: 'godot',
    badges: ['Pattern Library', 'Shadcn', 'React'],
    datePublished:  new Date()
  },
];



export default BlogRepo;