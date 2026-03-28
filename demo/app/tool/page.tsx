'use client'

import { Tool, type ToolPart } from '@turbo-agent/daisyui-prompt-kit'
import { PageShell } from '@/app/components/page-shell'

const toolStates: ToolPart[] = [
  {
    type: 'file_search',
    state: 'input-streaming',
    input: { pattern: '*.tsx', directory: '/components' },
  },
  {
    type: 'api_call',
    state: 'input-available',
    input: { endpoint: '/api/users', method: 'GET' },
  },
  {
    type: 'database_query',
    state: 'output-available',
    input: { table: 'users', limit: 10 },
    output: { count: 42, data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }] },
  },
  {
    type: 'email_send',
    state: 'output-error',
    output: { to: 'user@example.com', subject: 'Welcome!' },
    errorText: 'Failed to connect to SMTP server',
  },
]

const basicTool: ToolPart = {
  type: 'search_web',
  state: 'output-available',
  input: {
    query: 'prompt-kit documentation',
    max_results: 5,
  },
  output: {
    results: [
      {
        title: 'Prompt Kit - Documentation',
        url: 'https://prompt-kit.com/docs',
        snippet: 'A comprehensive guide to using Prompt Kit components...',
      },
      {
        title: 'Getting Started with Prompt Kit',
        url: 'https://prompt-kit.com/docs/installation',
        snippet: 'Learn how to install and use Prompt Kit in your project...',
      },
    ],
  },
}

export default function ToolPage() {
  return (
    <PageShell title="Tool" description="Displays tool call invocations, inputs, and outputs.">
      <div className="space-y-3">
        <p className="text-sm font-medium text-base-content/70">Basic tool output</p>
        <Tool className="w-full max-w-md" toolPart={basicTool} defaultOpen />
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-base-content/70">Tool states</p>
        <div className="flex w-full max-w-md flex-col gap-2">
          {toolStates.map((tool) => (
            <Tool key={`${tool.type}-${tool.state}`} toolPart={tool} defaultOpen />
          ))}
        </div>
      </div>
    </PageShell>
  )
}
