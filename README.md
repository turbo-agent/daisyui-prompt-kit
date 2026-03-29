# @turbo-agent/daisyui-prompt-kit

A DaisyUI-native React component library for building AI chat interfaces.

Based on [prompt-kit](https://github.com/ibelick/prompt-kit) by [@ibelick](https://github.com/ibelick), rebuilt with [DaisyUI 5](https://daisyui.com) and Tailwind CSS 4.

## Why

The original prompt-kit uses shadcn/ui and Radix primitives. This version provides the same components using DaisyUI classes and Tailwind utilities, so DaisyUI users can integrate AI chat UI without introducing a second design system.

## Installation

```bash
npm install @turbo-agent/daisyui-prompt-kit
# or
pnpm add @turbo-agent/daisyui-prompt-kit
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss daisyui @tailwindcss/typography @iconify/tailwind4 @iconify-json/lucide
```

> All peer dependencies are **required**. Typography plugin provides `prose` classes used by Markdown/Message components; Iconify provides icons used throughout the library.

### CSS Setup

Add the necessary plugins and source scanning to your global CSS file:

```css
@import "tailwindcss";
@plugin "@iconify/tailwind4";
@plugin "@tailwindcss/typography";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}

/* Required: scan the library's JS files so Tailwind detects its utility classes */
@source "../node_modules/@turbo-agent/daisyui-prompt-kit/dist/**/*.js";
```

Import the library's custom styles (animations, keyframes, markdown formatting):

```tsx
import '@turbo-agent/daisyui-prompt-kit/styles'
```

If you use math rendering (KaTeX), also import in your JS/TSX entry file:

```tsx
import 'katex/dist/katex.min.css'
```

> **Important:** The KaTeX CSS must be imported in JS/TSX, not via CSS `@import`, because PostCSS/Tailwind 4 cannot resolve bare Node module paths.

> **Note:** The library does NOT ship Tailwind CSS or DaisyUI — it only ships ~3 KB of custom animations/keyframes. All utility classes are resolved by your project's own Tailwind build via the `@source` directive above.

### Usage

```tsx
import {
  ChatContainerRoot,
  ChatContainerContent,
  Message,
  MessageContent,
  PromptInput,
  PromptInputTextarea,
} from '@turbo-agent/daisyui-prompt-kit'
```

## Components

21 components for AI chat interfaces:

| Category | Components |
|----------|-----------|
| Input | PromptInput, PromptSuggestion, FileUpload |
| Message | Message, ChatContainer, ScrollButton, ResponseStream, Markdown, CodeBlock, Image, JSXPreview |
| Agent | Reasoning, ChainOfThought, Steps, Tool, Source |
| Feedback | FeedbackBar, SystemMessage |
| Effect | Loader, TextShimmer, ThinkingBar |

## Demo

Run the interactive demo to preview all components:

```bash
cd demo
pnpm install
pnpm dev
```

Opens at [http://localhost:3005](http://localhost:3005).

Each component page has a **Preview / Code** toggle so you can inspect the source directly.

## LLM Documentation

A comprehensive component reference is provided for AI coding assistants:

- **File:** [`llms-full.txt`](./llms-full.txt)
- **In demo:** Navigate to **Docs → LLM Documentation** in the sidebar (includes rendered view and download)

This file describes every exported component, its props, built-in styling, dependency requirements, and integration examples. Feed it to your AI assistant for accurate code generation.

## Credits

- Original [prompt-kit](https://github.com/ibelick/prompt-kit) by [Julien Thibeaut (@ibelick)](https://github.com/ibelick)
- DaisyUI adaptation for the DaisyUI ecosystem
