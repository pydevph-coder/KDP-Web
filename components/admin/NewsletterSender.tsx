'use client';

import { useState } from 'react';

export default function NewsletterSender() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
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
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFeedback(`Newsletter sent to ${data.sentTo} subscribers.`);
        setSubject('');
        setMessage('');
        setFiles([]);
      } else {
        setStatus('error');
        setFeedback(data.error || 'Failed to send newsletter.');
      }
    } catch (error) {
      setStatus('error');
      setFeedback('Failed to send newsletter. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-1">Send Newsletter</h2>
        <p className="text-sm text-text-primary/70">
          Email all subscribers with a newsletter. You can optionally upload a file to attach; it
          will be stored temporarily and deleted after sending.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
            placeholder="Your newsletter subject"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={8}
            className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 resize-vertical"
            placeholder="Write your newsletter content here..."
          />
          <p className="mt-1 text-xs text-text-primary/60">
            Line breaks will be preserved in the email. For more advanced formatting, paste HTML.
          </p>
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
            Files will be uploaded temporarily and deleted after sending (even if there is an error).
          </p>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-semibold py-2.5 sm:py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 text-sm sm:text-base"
        >
          {status === 'loading' ? 'Sending...' : 'Send Newsletter'}
        </button>
      </form>

      {feedback && (
        <p
          className={`text-sm ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}


