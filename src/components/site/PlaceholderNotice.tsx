import { Info } from "lucide-react";

export function PlaceholderNotice({ text }: { text?: string }) {
  return (
    <p className="flex items-start gap-2 rounded-md border border-dashed border-border bg-muted/60 px-4 py-3 text-xs text-muted-foreground">
      <Info className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
      <span>
        {text ??
          "All figures, names and contact details on this site are placeholders. Replace them with verified company information before publishing."}
      </span>
    </p>
  );
}
