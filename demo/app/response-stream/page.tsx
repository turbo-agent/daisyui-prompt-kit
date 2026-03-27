'use client'

import { useEffect, useState } from 'react'
import { ResponseStream, Markdown, useTextStream } from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

function ResponseStreamMarkdown() {
  const mdText = `## Streaming Markdown

This example shows how to combine **useTextStream** with *Markdown* rendering.

- The text is processed by useTextStream
- Then rendered directly with Markdown
- Perfect for AI responses with formatting

\`\`\`js
// Code blocks work too!
function example() {
  return "Hello world";
}
\`\`\`
`

  const { displayedText, startStreaming } = useTextStream({
    textStream: mdText,
    mode: 'typewriter',
    speed: 30,
  })

  useEffect(() => {
    startStreaming()
  }, [startStreaming])

  return <Markdown>{displayedText}</Markdown>
}

export default function ResponseStreamPage() {
  const [seed, setSeed] = useState(0)

  return (
    <PageShell
      title="Response Stream"
      description="Streaming text output with typewriter and fade modes."
    >
      <button className="btn btn-sm btn-outline w-fit" onClick={() => setSeed((s) => s + 1)}>
        Restart Stream
      </button>
      <div className="rounded-box border-base-300 space-y-1 border p-4" key={seed}>
        <p className="text-base-content/50 text-xs font-medium">Typewriter</p>
        <ResponseStream
          textStream="This text is being typed out character by character, simulating a typewriter effect. You can use speed to control the speed or onComplete to run a function when the text is fully typed."
          mode="typewriter"
          speed={20}
          className="text-sm"
        />
      </div>
      <div className="rounded-box border-base-300 space-y-1 border p-4" key={`fade-${seed}`}>
        <p className="text-base-content/50 text-xs font-medium">Fade</p>
        <ResponseStream
          textStream="This text is fading in word by word. The fade mode creates a smooth and elegant text reveal. You can customize the fadeDuration but also the segmentDelay to control the speed of the animation."
          mode="fade"
          className="text-sm"
          fadeDuration={1200}
        />
      </div>
      <div className="rounded-box border-base-300 space-y-1 border p-4" key={`md-${seed}`}>
        <p className="text-base-content/50 text-xs font-medium">Streaming Markdown</p>
        <ResponseStreamMarkdown />
      </div>
    </PageShell>
  )
}
