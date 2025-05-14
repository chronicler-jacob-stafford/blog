
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ui/theme-toggle';

export default function Header() {
  return (
    <div className="top-0 flex items-center justify-between gap-4 w-full p-2 border-b border-dashed">
    <div className="px-2">
      <Link to="/" className="">Home</Link>
      <Link to="/" className="ml-4">Newsletter</Link>
    </div>

      <div className="flex items-center gap-4 px-2">
        <p>J.R. Stafford</p>
        <ThemeToggle />
      </div>

    </div>
  );
}