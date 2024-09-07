"use client";
import { Button } from "./ui/moving-border";

export function ButtonBordred({ injectedText }: { injectedText: string }) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {injectedText}
      </Button>
    </div>
  );
}
