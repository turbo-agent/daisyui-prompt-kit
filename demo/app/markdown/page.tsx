'use client'

import { Markdown } from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

const markdownContent = `
# Markdown Example

This is a **bold text** and this is an *italic text*.

## Lists

### Unordered List
- Item 1
- Item 2
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

## Links and Images

[Visit DaisyUI](https://daisyui.com)

## Code

Inline \`code\` example.

\`\`\`javascript
// Code block example
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`
`

export default function MarkdownPage() {
  return (
    <PageShell
      title="Markdown"
      description="Renders markdown content with support for GFM, math equations, and code blocks."
    >
      <div className="w-full max-w-3xl">
        <Markdown className="prose prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-sm prose-h6:text-xs dark:prose-invert">{markdownContent}</Markdown>
      </div>
    </PageShell>
  )
}
