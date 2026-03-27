'use client'

import { Tool, type ToolPart } from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

const tools: ToolPart[] = [
  {
    type: 'searchFiles',
    state: 'input-streaming',
    input: { query: 'authentication middleware' },
    toolCallId: 'call_01',
  },
  {
    type: 'readFile',
    state: 'input-available',
    input: { path: 'src/middleware/auth.ts', lines: '1-50' },
    toolCallId: 'call_02',
  },
  {
    type: 'executeCommand',
    state: 'output-available',
    input: { command: 'npm test -- --coverage' },
    output: { exitCode: 0, testsRun: 42, testsPassed: 42, coverage: '87%' },
    toolCallId: 'call_03',
  },
  {
    type: 'writeFile',
    state: 'output-error',
    input: { path: '/etc/config.yaml', content: '...' },
    output: { error: 'Permission denied' },
    errorText: 'EACCES: permission denied, open \'/etc/config.yaml\'',
    toolCallId: 'call_04',
  },
]

export default function ToolPage() {
  return (
    <PageShell title="Tool" description="Displays tool call invocations, inputs, and outputs.">
      <div className="flex flex-col gap-2">
        {tools.map((tool) => (
          <Tool key={tool.toolCallId} toolPart={tool} defaultOpen />
        ))}
      </div>
    </PageShell>
  )
}
