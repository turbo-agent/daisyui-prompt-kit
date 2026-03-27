'use client'

import { useState } from 'react'
import {
  FileUpload,
  FileUploadContent,
  FileUploadTrigger,
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function FileUploadPage() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles])
  }

  const handleSubmit = () => {
    if (input.trim() || files.length > 0) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setInput('')
        setFiles([])
      }, 2000)
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <PageShell title="File Upload" description="File upload with button trigger and drag-and-drop support.">
      <FileUpload onFilesAdded={handleFilesAdded} accept=".jpg,.jpeg,.png,.pdf,.docx">
        <PromptInput
          value={input}
          onValueChange={setInput}
          isLoading={isLoading}
          onSubmit={handleSubmit}
          className="w-full max-w-xl"
        >
          {files.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pb-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-base-200 flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="icon-[lucide--paperclip] size-4 shrink-0" />
                    <span className="max-w-[80px] truncate text-sm">{file.name}</span>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="btn btn-ghost btn-xs btn-circle"
                  >
                    <span className="icon-[lucide--x] size-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <PromptInputTextarea placeholder="Type a message or drop files..." />

          <PromptInputActions className="flex items-center justify-between gap-2 pt-2">
            <PromptInputAction tooltip="Attach files">
              <FileUploadTrigger asChild>
                <span className="icon-[lucide--paperclip] text-primary size-5 cursor-pointer" />
              </FileUploadTrigger>
            </PromptInputAction>

            <PromptInputAction
              tooltip={isLoading ? 'Stop generation' : 'Send message'}
              className="btn-primary btn-circle"
              onClick={handleSubmit}
            >
              {isLoading ? (
                <span className="icon-[lucide--square] size-4 fill-current" />
              ) : (
                <span className="icon-[lucide--arrow-up] size-4" />
              )}
            </PromptInputAction>
          </PromptInputActions>
        </PromptInput>

        <FileUploadContent>
          <div className="flex min-h-[200px] w-full items-center justify-center backdrop-blur-sm">
            <div className="bg-base-100/90 rounded-box m-4 w-full max-w-md border p-8 shadow-lg">
              <div className="mb-4 flex justify-center">
                <span className="icon-[lucide--cloud-upload] text-base-content/50 size-8" />
              </div>
              <h3 className="mb-2 text-center text-base font-medium">Drop files to upload</h3>
              <p className="text-base-content/50 text-center text-sm">
                Release to add files to your message
              </p>
            </div>
          </div>
        </FileUploadContent>
      </FileUpload>
    </PageShell>
  )
}
