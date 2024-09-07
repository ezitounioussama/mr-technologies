"use client";
import { Button } from "./ui/moving-border";

interface ButtonBordredProps {
  injectedText: string;
  onClick?: () => void; // Optional onClick handler
}

export function ButtonBordred({ injectedText, onClick }: ButtonBordredProps) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        onClick={onClick} // Pass onClick handler if provided
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {injectedText}
      </Button>
    </div>
  );
}
