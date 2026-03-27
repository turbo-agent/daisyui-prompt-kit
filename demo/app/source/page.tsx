'use client'

import {
  Source,
  SourceContent,
  SourceTrigger,
} from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

const sources = [
  {
    href: 'https://daisyui.com/',
    label: 'daisyui.com',
    title: 'DaisyUI',
    description: 'The most popular component library for Tailwind CSS.',
  },
  {
    href: 'https://tailwindcss.com/',
    label: 'tailwindcss.com',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapid UI development.',
  },
  {
    href: 'https://react.dev/',
    label: 'react.dev',
    title: 'React',
    description: 'The library for web and native user interfaces.',
  },
  {
    href: 'https://nextjs.org/',
    label: 'nextjs.org',
    title: 'Next.js',
    description: 'The React framework for the web.',
  },
  {
    href: 'https://vitejs.dev/',
    label: 'vitejs.dev',
    title: 'Vite',
    description: 'Next generation frontend tooling.',
  },
]

export default function SourcePage() {
  return (
    <PageShell title="Source" description="Citation links with hoverable content previews.">
      <div className="flex flex-wrap gap-2">
        {sources.map((s) => (
          <Source key={s.href} href={s.href}>
            <SourceTrigger label={s.label} showFavicon />
            <SourceContent title={s.title} description={s.description} />
          </Source>
        ))}
      </div>
    </PageShell>
  )
}
