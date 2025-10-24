// Utility functions for markdown processing
export function parseMarkdown(markdown: string): string {
  // Basic markdown to HTML conversion
  // In production, you'd use a library like marked or remark
  let html = markdown

  // Headers
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>")
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>")
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>")

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")

  // Lists
  html = html.replace(/^- (.*$)/gim, "<li>$1</li>")
  html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")

  // Paragraphs
  html = html.replace(/\n\n/g, "</p><p>")
  html = "<p>" + html + "</p>"

  return html
}
