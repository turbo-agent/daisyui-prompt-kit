'use client'

import { useState } from 'react'
import { FeedbackBar } from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function FeedbackBarPage() {
  const [visible, setVisible] = useState(true)

  return (
    <PageShell
      title="Feedback Bar"
      description="A bar for collecting user feedback (helpful / not helpful) with a close button."
    >
      <p className="text-base-content/50 text-xs font-medium">Default</p>
      {visible ? (
        <FeedbackBar
          title="Was this answer helpful?"
          onHelpful={() => window.alert('Marked helpful')}
          onNotHelpful={() => window.alert('Marked not helpful')}
          onClose={() => setVisible(false)}
        />
      ) : (
        <button className="btn btn-sm btn-outline w-fit" onClick={() => setVisible(true)}>
          Show again
        </button>
      )}

      <p className="text-base-content/50 text-xs font-medium">With icon</p>
      <FeedbackBar
        title="Rate this response"
        icon={<span className="icon-[lucide--sparkles] size-4 text-warning" />}
        onHelpful={() => window.alert('Helpful')}
        onNotHelpful={() => window.alert('Not helpful')}
        onClose={() => {}}
      />
    </PageShell>
  )
}
