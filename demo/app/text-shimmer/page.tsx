'use client'

import { TextShimmer } from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function TextShimmerPage() {
  return (
    <PageShell title="Text Shimmer" description="A shimmering text effect for loading states.">
      <p className="text-base-content/50 text-xs font-medium">Default</p>
      <TextShimmer as="p">
        Generating response from the reasoning chain...
      </TextShimmer>

      <p className="text-base-content/50 text-xs font-medium">Custom duration</p>
      <TextShimmer as="p" duration={1.5}>
        Thinking deeply about your question...
      </TextShimmer>

      <p className="text-base-content/50 text-xs font-medium">Wide spread</p>
      <TextShimmer as="p" duration={3} spread={24}>
        Analyzing data and preparing your results...
      </TextShimmer>
    </PageShell>
  )
}
