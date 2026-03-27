'use client'

import { cn } from '@/utils/cn'
import { useTextStream, type TextStreamMode } from '@/hooks/useTextStream'
import React, { useCallback, useEffect, useRef } from 'react'

export type ResponseStreamProps = {
  textStream: string | AsyncIterable<string>
  mode?: TextStreamMode
  speed?: number
  className?: string
  onComplete?: () => void
  as?: keyof React.JSX.IntrinsicElements
  fadeDuration?: number
  segmentDelay?: number
  characterChunkSize?: number
}

function ResponseStream({
  textStream,
  mode = 'typewriter',
  speed = 20,
  className,
  onComplete,
  as = 'div',
  fadeDuration,
  segmentDelay,
  characterChunkSize,
}: ResponseStreamProps) {
  const animationEndRef = useRef<(() => void) | null>(null)
  const { displayedText, isComplete, segments, getFadeDuration, getSegmentDelay } = useTextStream({
    textStream,
    speed,
    mode,
    onComplete,
    fadeDuration,
    segmentDelay,
    characterChunkSize,
  })

  useEffect(() => {
    animationEndRef.current = onComplete ?? null
  }, [onComplete])

  const handleLastSegmentAnimationEnd = useCallback(() => {
    if (animationEndRef.current && isComplete) {
      animationEndRef.current()
    }
  }, [isComplete])

  const fadeStyle = `
    @keyframes daisyuiPromptKitFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .dpk-fade-segment {
      display: inline-block;
      opacity: 0;
      animation: daisyuiPromptKitFadeIn ${getFadeDuration()}ms ease-out forwards;
    }

    .dpk-fade-space {
      white-space: pre;
    }
  `

  const Container = as as keyof React.JSX.IntrinsicElements

  if (mode === 'fade') {
    return (
      <Container className={className}>
        <style>{fadeStyle}</style>
        <div className="relative">
          {segments.map((segment, index) => {
            const isWhitespace = /^\s+$/.test(segment.text)
            const isLastSegment = index === segments.length - 1

            return (
              <span
                key={`${segment.text}-${index}`}
                className={cn('dpk-fade-segment', isWhitespace && 'dpk-fade-space')}
                style={{ animationDelay: `${index * getSegmentDelay()}ms` }}
                onAnimationEnd={isLastSegment ? handleLastSegmentAnimationEnd : undefined}
              >
                {segment.text}
              </span>
            )
          })}
        </div>
      </Container>
    )
  }

  return <Container className={className}>{displayedText}</Container>
}

export { ResponseStream }
