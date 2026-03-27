'use client'

import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtItem,
  ChainOfThoughtStep,
  ChainOfThoughtTrigger,
  CodeBlock,
  CodeBlockCode,
} from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function ChainOfThoughtPage() {
  return (
    <PageShell
      title="Chain of Thought"
      description="A vertical timeline showing reasoning steps, each with collapsible content."
    >
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium text-base-content/70">Basic reasoning steps</p>
          <ChainOfThought>
            <ChainOfThoughtStep>
              <ChainOfThoughtTrigger>
                Analyzing the user&apos;s request
              </ChainOfThoughtTrigger>
              <ChainOfThoughtContent>
                <ChainOfThoughtItem>
                  The user asked about implementing a sorting algorithm
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  This appears to be a technical question requiring code examples
                </ChainOfThoughtItem>
              </ChainOfThoughtContent>
            </ChainOfThoughtStep>

            <ChainOfThoughtStep>
              <ChainOfThoughtTrigger>
                Considering implementation options
              </ChainOfThoughtTrigger>
              <ChainOfThoughtContent>
                <ChainOfThoughtItem>
                  Quick sort: O(n log n) average case, good for general purpose
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  Merge sort: O(n log n) worst case, stable and predictable
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  Bubble sort: O(n²), simple but inefficient for large datasets
                </ChainOfThoughtItem>
              </ChainOfThoughtContent>
            </ChainOfThoughtStep>

            <ChainOfThoughtStep>
              <ChainOfThoughtTrigger>
                Selecting the best approach
              </ChainOfThoughtTrigger>
              <ChainOfThoughtContent>
                <ChainOfThoughtItem>
                  Given the educational context, I&apos;ll demonstrate merge sort for its clarity
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  It shows the divide-and-conquer principle effectively
                </ChainOfThoughtItem>
              </ChainOfThoughtContent>
            </ChainOfThoughtStep>
          </ChainOfThought>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-base-content/70">Advanced reasoning steps</p>
          <ChainOfThought>
            <ChainOfThoughtStep>
              <ChainOfThoughtTrigger leftIcon={<span className="icon-[lucide--search] size-4" />}>
                Research phase: Understanding the problem space
              </ChainOfThoughtTrigger>
              <ChainOfThoughtContent>
                <ChainOfThoughtItem>
                  The problem involves optimizing database queries for a high-traffic e-commerce platform
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  Current bottlenecks: slow product search (2-3 seconds), category filtering delays
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  Database: PostgreSQL with 10M+ products, complex joins across multiple tables
                </ChainOfThoughtItem>
              </ChainOfThoughtContent>
            </ChainOfThoughtStep>

            <ChainOfThoughtStep>
              <ChainOfThoughtTrigger leftIcon={<span className="icon-[lucide--lightbulb] size-4" />}>
                Analysis: Identifying optimization opportunities
              </ChainOfThoughtTrigger>
              <ChainOfThoughtContent>
                <ChainOfThoughtItem>
                  Missing indexes on frequently queried columns (product_name, category_id, price_range)
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  N+1 query problem in product listing API - need eager loading
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  Full table scans occurring due to non-optimized WHERE clauses
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  Consider implementing database partitioning for better performance
                </ChainOfThoughtItem>
              </ChainOfThoughtContent>
            </ChainOfThoughtStep>

            <ChainOfThoughtStep>
              <ChainOfThoughtTrigger leftIcon={<span className="icon-[lucide--target] size-4" />}>
                Solution: Implementing targeted improvements
              </ChainOfThoughtTrigger>
              <ChainOfThoughtContent>
                <ChainOfThoughtItem>
                  <strong>Step 1:</strong> Add composite indexes for common query patterns
                  <CodeBlock className="mt-2">
                    <CodeBlockCode
                      code={`CREATE INDEX CONCURRENTLY idx_products_search\nON products (category_id, price, rating DESC)\nWHERE active = true;`}
                      language="sql"
                    />
                  </CodeBlock>
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  <strong>Step 2:</strong> Optimize ORM queries with eager loading
                  <CodeBlock className="mt-2">
                    <CodeBlockCode
                      code={`// Before: N+1 queries\nproducts.map(p => p.category.name)\n\n// After: Single query with joins\nProduct.findAll({\n  include: [{ model: Category, as: 'category' }]\n})`}
                      language="javascript"
                    />
                  </CodeBlock>
                </ChainOfThoughtItem>
                <ChainOfThoughtItem>
                  <strong>Step 3:</strong> Implement query result caching for popular searches
                </ChainOfThoughtItem>
              </ChainOfThoughtContent>
            </ChainOfThoughtStep>
          </ChainOfThought>
        </div>
      </div>
    </PageShell>
  )
}
