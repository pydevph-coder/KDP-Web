'use client';

import { useMemo, useState } from 'react';
import SubscribersNewsletterButton from './SubscribersNewsletterButton';

type Subscriber = {
  id: string;
  email: string;
  createdAt: string;
};

type Props = {
  subscribers: Subscriber[];
};

export default function SubscribersTableWithEmail({ subscribers }: Props) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const allSelected = subscribers.length > 0 && selectedIds.size === subscribers.length;

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(subscribers.map((s) => s.id)));
    }
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const selectedEmails = useMemo(
    () => subscribers.filter((s) => selectedIds.has(s.id)).map((s) => s.email),
    [selectedIds, subscribers],
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-text-primary">Email Subscribers</h2>
          <p className="text-xs text-text-primary/70">
            Select specific subscribers or send to everyone.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <SubscribersNewsletterButton label="Send to all subscribers" />
          <SubscribersNewsletterButton
            recipientEmails={selectedEmails}
            label={
              selectedEmails.length > 0
                ? `Send to ${selectedEmails.length} selected`
                : 'Send to selected'
            }
            disabled={selectedEmails.length === 0}
          />
        </div>
      </div>

      {subscribers.length === 0 ? (
        <p className="text-text-primary/70 text-sm">No subscribers yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm table-auto">
            <thead>
              <tr className="border-b border-background-2">
                <th className="w-10 text-left py-2 px-2">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                    aria-label="Select all subscribers"
                  />
                </th>
                <th className="text-left py-2 px-4 text-text-primary/70 w-2/3">Email</th>
                <th className="text-right py-2 px-4 text-text-primary/70 w-1/3">Subscribed At</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub) => (
                <tr key={sub.id} className="border-b border-background-2">
                  <td className="py-2 px-2">
                    <input
                      type="checkbox"
                      checked={selectedIds.has(sub.id)}
                      onChange={() => toggleSelectOne(sub.id)}
                      aria-label={`Select ${sub.email}`}
                    />
                  </td>
                  <td className="py-2 px-4 text-text-primary">{sub.email}</td>
                  <td className="py-2 px-4 text-text-primary/70 text-right">
                    {new Date(sub.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


