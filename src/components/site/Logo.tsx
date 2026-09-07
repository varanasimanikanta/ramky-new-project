export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-sm bg-accent font-display text-lg font-bold text-accent-foreground"
      >
        R
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-base font-bold tracking-tight ${
            inverted ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          Ramky Infrastructure
        </span>
        <span
          className={`block text-[0.65rem] font-medium uppercase tracking-[0.18em] ${
            inverted ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          Infrastructure &amp; Development
        </span>
      </span>
    </span>
  );
}
