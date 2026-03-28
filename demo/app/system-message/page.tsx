'use client'

import { SystemMessage } from '@turbo-agent/daisyui-prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function SystemMessagePage() {
  return (
    <PageShell title="System Message" description="System-level status messages with semantic variants.">
      <p className="text-base-content/50 text-xs font-medium">Outlined (default)</p>
      <div className="flex flex-col gap-3">
        <SystemMessage variant="info">Model is warming up.</SystemMessage>
        <SystemMessage variant="success">Tool call completed successfully.</SystemMessage>
        <SystemMessage variant="warning">Rate limit is near threshold.</SystemMessage>
        <SystemMessage variant="error">Execution failed. Retry recommended.</SystemMessage>
      </div>

      <p className="text-base-content/50 text-xs font-medium">Filled</p>
      <div className="flex flex-col gap-3">
        <SystemMessage variant="info" fill>Searching the web for results...</SystemMessage>
        <SystemMessage variant="warning" fill>Your API key will expire soon.</SystemMessage>
      </div>

      <p className="text-base-content/50 text-xs font-medium">With CTA</p>
      <SystemMessage
        variant="warning"
        fill
        cta={{ label: 'Upgrade', onClick: () => window.alert('Upgrade clicked') }}
      >
        You have used 90% of your free tier quota.
      </SystemMessage>

      <p className="text-base-content/50 text-xs font-medium">Hidden icon</p>
      <SystemMessage variant="info" isIconHidden>
        This message has no icon.
      </SystemMessage>
    </PageShell>
  )
}
