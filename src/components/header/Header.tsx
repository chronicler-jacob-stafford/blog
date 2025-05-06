
import { ThemeToggle } from './theme-toggle';
export default function Header() {
  return (
    <div className="sticky top-0 flex items-center justify-between gap-4 w-full p-2">
      <div className="flex items-center gap-4">
        <a> Home </a>
        <a> Newsletter </a>
      </div>

      <div className="flex items-center gap-4">
        <p>J.R. Stafford</p>
        <ThemeToggle />
      </div>

    </div>
  );
}