'use client'

import {
  Steps,
  StepsContent,
  StepsItem,
  StepsTrigger,
} from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function StepsPage() {
  return (
    <PageShell title="Steps" description="A collapsible step list with a sidebar progress line.">
      <p className="text-base-content/50 text-xs font-medium">Basic</p>
      <Steps defaultOpen>
        <StepsTrigger>Research Phase</StepsTrigger>
        <StepsContent>
          <StepsItem>Searched the web for "React server components best practices"</StepsItem>
          <StepsItem>Read 5 articles about streaming and suspense</StepsItem>
          <StepsItem>Compared different data fetching strategies</StepsItem>
        </StepsContent>
      </Steps>

      <p className="text-base-content/50 text-xs font-medium">Multiple steps</p>
      <div className="flex flex-col gap-2">
        <Steps defaultOpen>
          <StepsTrigger>Analyzing repository structure</StepsTrigger>
          <StepsContent>
            <StepsItem>Found 12 component files in src/components/</StepsItem>
            <StepsItem>Detected TypeScript configuration</StepsItem>
          </StepsContent>
        </Steps>
        <Steps>
          <StepsTrigger>Applying code changes</StepsTrigger>
          <StepsContent>
            <StepsItem>Updated 3 files with new imports</StepsItem>
            <StepsItem>Refactored utility functions</StepsItem>
            <StepsItem>Added unit tests for new features</StepsItem>
          </StepsContent>
        </Steps>
        <Steps>
          <StepsTrigger>Running verification</StepsTrigger>
          <StepsContent>
            <StepsItem>All 42 tests passed</StepsItem>
            <StepsItem>Build completed successfully</StepsItem>
          </StepsContent>
        </Steps>
      </div>
    </PageShell>
  )
}
