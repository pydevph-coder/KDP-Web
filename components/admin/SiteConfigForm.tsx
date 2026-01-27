'use client';

import { useEffect, useState } from 'react';

type SiteConfig = {
  id?: string;
  siteTitle: string;
  siteDescription: string;
  shortDescription?: string | null;
  metaImageUrl?: string | null;
  pagination: number;
};

export default function SiteConfigForm() {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch('/api/admin/site-config');
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Failed to load site config');
        }
        if (data && data.siteTitle) {
          setConfig({
            id: data.id,
            siteTitle: data.siteTitle,
            siteDescription: data.siteDescription,
            shortDescription: data.shortDescription ?? '',
            metaImageUrl: data.metaImageUrl ?? '',
            pagination: data.pagination ?? 10,
          });
        } else {
          setConfig({
            siteTitle: 'Faith-Based Books & Guided Journals',
            siteDescription:
              'Discover faith-based books and guided journals for mental wellness, written by a licensed guidance counselor.',
            shortDescription: '',
            metaImageUrl: '',
            pagination: 10,
          });
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load site config');
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const handleChange =
    (field: keyof SiteConfig) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!config) return;
      const value =
        field === 'pagination' ? parseInt(e.target.value || '10', 10) || 10 : e.target.value;
      setConfig({ ...config, [field]: value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!config) return;

    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/admin/site-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteTitle: config.siteTitle,
          siteDescription: config.siteDescription,
          shortDescription: config.shortDescription,
          metaImageUrl: config.metaImageUrl,
          pagination: config.pagination,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to save site config');
      }

      setSuccess('Site settings saved.');
      setConfig({
        id: data.id,
        siteTitle: data.siteTitle,
        siteDescription: data.siteDescription,
        shortDescription: data.shortDescription ?? '',
        metaImageUrl: data.metaImageUrl ?? '',
        pagination: data.pagination ?? 10,
      });
    } catch (err: any) {
      setError(err.message || 'Failed to save site config');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8 text-text-primary/70">Loading site settings...</div>;
  }

  if (!config) {
    return <div className="text-center py-8 text-red-600">Failed to load site settings.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1" htmlFor="siteTitle">
            Site title
          </label>
          <input
            id="siteTitle"
            type="text"
            value={config.siteTitle}
            onChange={handleChange('siteTitle')}
            required
            className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm"
          />
          <p className="mt-1 text-xs text-text-primary/60">
            Appears in the browser tab and search engine results.
          </p>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-text-primary mb-1"
            htmlFor="siteDescription"
          >
            Site description
          </label>
          <textarea
            id="siteDescription"
            value={config.siteDescription}
            onChange={handleChange('siteDescription')}
            required
            rows={4}
            className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm resize-vertical"
          />
          <p className="mt-1 text-xs text-text-primary/60">
            Used for meta description and on some parts of the site.
          </p>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-text-primary mb-1"
            htmlFor="shortDescription"
          >
            Short description (optional)
          </label>
          <input
            id="shortDescription"
            type="text"
            value={config.shortDescription ?? ''}
            onChange={handleChange('shortDescription')}
            placeholder="Short tagline shown in certain sections"
            className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm"
          />
          <p className="mt-1 text-xs text-text-primary/60">
            A shorter tagline you can use in the header, hero, or other UI instead of the full
            description.
          </p>
        </div>

        <div className="grid sm:grid-cols-[2fr,1fr] gap-4 items-start">
          <div>
            <label
              className="block text-sm font-medium text-text-primary mb-1"
              htmlFor="metaImageUrl"
            >
              Meta image URL
            </label>
            <input
              id="metaImageUrl"
              type="url"
              value={config.metaImageUrl ?? ''}
              onChange={handleChange('metaImageUrl')}
              placeholder="Paste an image URL for social sharing (from Image Gallery)"
              className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm"
            />
            <p className="mt-1 text-xs text-text-primary/60">
              This image is used for social sharing previews (Open Graph). You can copy a URL from
              the admin Image Gallery.
            </p>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-text-primary mb-1"
              htmlFor="pagination"
            >
              Books per page
            </label>
            <input
              id="pagination"
              type="number"
              min={1}
              max={100}
              value={config.pagination}
              onChange={handleChange('pagination')}
              className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm"
            />
            <p className="mt-1 text-xs text-text-primary/60">
              Controls how many books show per page in listings.
            </p>
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-green-600">{success}</p>}

      <button
        type="submit"
        disabled={saving}
        className="bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm disabled:opacity-50"
      >
        {saving ? 'Saving...' : 'Save Site Settings'}
      </button>
    </form>
  );
}


