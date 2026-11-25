/**
 * Escapes HTML special characters and safely transforms lightweight inline markdown
 * (**bold** and `code`) into semantic <strong> and <code> tags for static Astro rendering.
 */
export function formatInlineRichText(input: string): string {
  const escaped = input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  return escaped
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}
