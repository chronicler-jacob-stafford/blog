import { useTheme } from '@/hooks/useTheme';
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

}