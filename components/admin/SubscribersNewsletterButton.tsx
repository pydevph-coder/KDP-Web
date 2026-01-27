'use client';

import { useState } from 'react';

type Props = {
  recipientEmails?: string[];
  label?: string;
  disabled?: boolean;
};

export default function SubscribersNewsletterButton({ recipientEmails, label, disabled }: Props) {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const resetForm = () => {
    setSubject('');
    setMessage('');
    setFiles([]);
    setStatus('idle');
    setFeedback('');
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      let attachments:
        | {
            tempFilename: string;
            filename: string;
          }[]
        | undefined;

      if (files.length > 0) {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append('file', file);
        });

        const uploadRes = await fetch('/api/admin/newsletter/upload', {
          method: 'POST',
          body: formData,
        });

        const uploadData = await uploadRes.json();

        if (!uploadRes.ok) {
          throw new Error(uploadData.error || 'Failed to upload attachment');
        }

        const uploadedFiles = uploadData.files as
          | { tempFilename: string; originalName: string }[]
          | undefined;

        if (uploadedFiles && uploadedFiles.length > 0) {
          attachments = uploadedFiles.map((f) => ({
            tempFilename: f.tempFilename,
            filename: f.originalName,
          }));
        }
      }

      const response = await fetch('/api/admin/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          html: message.replace(/\n/g, '<br />'),
          attachments,
          onlyEmails: recipientEmails && recipientEmails.length > 0 ? recipientEmails : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send newsletter');
      }

      setStatus('success');
      setFeedback(`Email sent to ${data.sentTo} subscribers.`);
      resetForm();
      setOpen(false);
    } catch (err: any) {
      setStatus('error');
      setFeedback(err.message || 'Failed to send newsletter.');
    }
  };

  return (
    <>
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          if (disabled) return;
          setOpen(true);
        }}
        className="bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm disabled:opacity-50"
      >
        {label ?? 'Send email to subscribers'}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-text-primary">Send email to subscribers</h2>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  resetForm();
                }}
                className="text-text-primary/60 hover:text-text-primary text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1" htmlFor="subj">
                  Subject
                </label>
                <input
                  id="subj"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm"
                  placeholder="Email subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1" htmlFor="msg">
                  Message
                </label>
                <textarea
                  id="msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm resize-vertical"
                  placeholder="Write your email content..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1" htmlFor="file">
                  Attachments (optional)
                </label>
                <input
                  id="file"
                  type="file"
                  multiple
                  onChange={(e) =>
                    setFiles(e.target.files ? Array.from(e.target.files) : [])
                  }
                  className="block w-full text-sm text-text-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-1 file:text-white hover:file:bg-primary-2"
                />
                <p className="mt-1 text-xs text-text-primary/60">
                  Files will be uploaded temporarily and deleted after sending (even if there is an
                  error).
                </p>
              </div>

              {feedback && (
                <p
                  className={`text-sm ${
                    status === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {feedback}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    resetForm();
                  }}
                  className="text-sm text-text-primary/70 hover:text-text-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send email'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


