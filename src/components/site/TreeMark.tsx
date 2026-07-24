export const TREE_MARK_PATH =
  "M16 2c4 3 7 6 7 10a7 7 0 0 1-5 6.7V22h3a1 1 0 0 1 0 2h-3v5a1 1 0 0 1-2 0v-5h-3a1 1 0 0 1 0-2h3v-3.3A7 7 0 0 1 9 12c0-4 3-7 7-10Z";

export function TreeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="currentColor" d={TREE_MARK_PATH} />
    </svg>
  );
}
