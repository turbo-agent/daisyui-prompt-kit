export function PageShell({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex flex-col items-start space-y-1">
        <h1 className="text-base-content text-2xl font-bold tracking-tight lg:text-3xl">
          {title}
        </h1>
        <p className="text-base-content/60 max-w-lg text-sm">{description}</p>
      </div>

      <div className="card card-border bg-base-100">
        <div className="bg-base-200/30 border-base-300 border-b px-5 py-3 text-sm font-medium">
          Preview
        </div>
        <div className="flex flex-col gap-4 p-6">{children}</div>
      </div>
    </div>
  )
}
