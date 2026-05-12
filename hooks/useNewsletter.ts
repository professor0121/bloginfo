'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function useNewsletter() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const subscribe = async (email: string) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message ?? 'Successfully subscribed!');
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

  const reset = () => {
    setStatus('idle');
    setMessage('');
  };

  return { status, message, subscribe, reset };
}
