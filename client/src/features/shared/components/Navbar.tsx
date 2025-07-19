import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex w-64 flex-col gap-4 pt-8">
      <ThemeToggle />
    </nav>
  );
}
