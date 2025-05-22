import Blog from "@/types/Blog";
import image from '@/assets/tailwind.jfif'
import { CodeBlock } from "@/components/ui/code-block";

const blog: Blog = {
  title: 'This Blog Template (stafford-blog)',
  imageUrl: image ,
  description: 'What motivated me to make this template and some of the decisions that were made while creating it.',
  id: '1',
  badges: ['React', 'TypeScript', 'Shadcn', 'Tailwind'],
  datePublished:  new Date(),
  content: <BlogPage />
};

function BlogPage() {
  return (
    <div className="flex flex-col gap-4">
      <h2>Motivations</h2>
      <p> 
        I've always wanted a blog to ramble about the riff-raff of the full-stack experience. Why not simply post on LinkedIn, Medium, all the other sites, surely these wonderful sites give enough capability to express an engineer's thoughts. And sure they have builtin features to help display code either generic markdown or custom tooling. Yet, why not give full reign to include anything in the HTML + CSS + TypeScript world. Basically limitless ways one with frontend knowledge could display <b>anything</b>. This blog post was made using React and JSX inline, allowing for anything possible to appended. Including react-code-blocks for syntax highlight of specific languages as shown below.
      </p>
        <CodeBlock  language={"typescript"} code={`import { useTheme } from '@/hooks/useTheme';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import './code-block.css'

type CodeBlockProps = {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}


export function CodeBlock({ code, language, showLineNumbers = false}: CodeBlockProps) {
  const {theme} = useTheme();

  return (
    <div className="codeblock-container m-6 p-4 rounded-2xl w-fit max-w-full overflow-auto">
      <SyntaxHighlighter 
        language={language} 
        style={theme === 'dark' ? a11yDark : dark} 
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
            borderRadius: '1rem',
            padding: '1rem 2rem',
            display: 'inline-block',
          }}
        >
        {code}
      </SyntaxHighlighter>
    </div>
  );

}`} 
          />
      <h2>Decisions</h2>
      <h3>Shadcn UI</h3>
      <p> 
        The popularity and configurability of shadcn made it a great choice to jump start the component library. The code first approach, downloading code snippets as components, allows users to add existing shadcn components and then modify them how they see fit for their design, including with the use of LLM's. In the same vain tailwind enables developer velocity.
      </p>
      <h3>Tailwind</h3>
      <p>
        Tailwind is great for streamlining single file updates, and allows us to easily observe the CSS attributes inline. Combine with Shadcn's use of tailwind, styling the blog is trivial. If you've never used tailwind I'd recommend taking a look at their documentation <a href="https://tailwindcss.com/">Tailwind CSS</a>
        , it utilizes CSS classes into composable, reusable snippets commonly only a single line. I'll deepdive in another blog about the benefits and downsides of tailwind.
      </p>
      <h3>TypeScript</h3>
      <p>
        In any project, small or enormous, I'd always advise using TypeScript. Type safety enables pre-compilation features in editors that increases developer speed, reduction of bugs due to misstyping, and including the insidious undefined property bugs. Setting up Typescript properly with all the systems in a codebase can be a pain, e.g. linting, testing, transpilation, types the list goes on. Vite has made this process less painful, and the configuration in this template hopefully eases the pain of utilizing TypeScript.
      </p>
      <h3>React</h3>
      <p>
        React makes for an obvious choice. DOM manipulation simplified, JSX has powerful tooling, lifecycle hooks, and so forth. I don't really make it a point over similar frameworks, like Vue, especially now that Vue3 directly supports using TypeScript. At a certain point it's a matter of preference, both offer eerily similar capabilities and each have mostly menial painpoints the other may not have. Ultimately, the availability of React Snippets scattered across GitHub and blogs enables developers and LLM's to add custom features to the blog seemlessly.
      </p>

      <h3>Template Usage Guide</h3>
      <p>
        The GitHub's readme goes into more details of using this template.
        <a> GitHub</a>
      </p>
    </div>
  );
}

export default blog;