'use client'

import {
  Source,
  SourceContent,
  SourceTrigger,
} from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

const sources = [
  {
    href: 'https://ibelick.com',
    title: 'Ibelick',
    description:
      'Julien Thibeaut (@Ibelick). Design Engineer passionate about crafting beautiful, functional interfaces and tools.',
  },
  {
    href: 'https://www.google.com',
    title: 'Google',
    description:
      'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
  },
  {
    href: 'https://www.figma.com',
    title: 'Figma',
    description:
      'Figma is the leading collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single platform.',
  },
  {
    href: 'https://github.com/ibelick/prompt-kit',
    title:
      'Core building blocks for AI apps. High-quality, accessible, and customizable components for AI interfaces.',
    description:
      'Customizable, high-quality components for AI applications. Build chat experiences, AI agents, autonomous assistants, and more, quickly and beautifully.',
  },
  {
    href: 'https://www.wikipedia.org',
    title: 'Wikipedia',
    description:
      'Welcome to Wikipedia. ,. the free encyclopedia that anyone can edit. 107,267 active editors; 7,034,015 articles in English. From today\'s featured article.',
  },
]

export default function SourcePage() {
  return (
    <PageShell title="Source" description="Citation links with hoverable content previews.">
      <div className="flex flex-wrap justify-center gap-2">
        {sources.map((s) => (
          <Source key={s.href} href={s.href}>
            <SourceTrigger showFavicon />
            <SourceContent title={s.title} description={s.description} />
          </Source>
        ))}
      </div>
    </PageShell>
  )
}
