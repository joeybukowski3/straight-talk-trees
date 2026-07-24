export const TREE_MARK_PATH =
  "M16 2 23 11h-4l6 7h-5l6 7h-8v5h-4v-5H6l6-7H7l6-7H9l7-9Z";

export function TreeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path fill="currentColor" d={TREE_MARK_PATH} />
    </svg>
  );
}
