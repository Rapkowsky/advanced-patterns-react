import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/Button";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      className="justify-start p-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-6 w-6" />
          Light Mode
        </>
      ) : (
        <>
          <Moon className="h-6 w-6" />
          Dark Mode
        </>
      )}
    </Button>
  );
}
