'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! Check your email for your free resource.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary-1/10 to-primary-2/10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 sm:mb-4">
          Get Your Free Resource
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-text-primary/70 mb-6 sm:mb-8 px-2">
          Sign up to receive free prayer pages and journal prompts delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 sm:px-6 py-3.5 sm:py-3 rounded-full border-2 border-primary-1 focus:outline-none focus:border-primary-2 text-text-primary text-base min-h-[48px]"
            autoComplete="email"
            inputMode="email"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-base sm:text-lg w-full sm:w-auto"
          >
            {status === 'loading' ? 'Submitting...' : 'Get Free Resource'}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-sm sm:text-base px-4 ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

