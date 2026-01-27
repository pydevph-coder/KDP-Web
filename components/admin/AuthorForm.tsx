'use client';

import { useEffect, useState } from 'react';

type Author = {
  id?: string;
  name: string;
  bio: string;
  photo?: string | null;
  credentials?: string | null;
};

export default function AuthorForm() {
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await fetch('/api/admin/author');
        if (!res.ok) {
          throw new Error('Failed to load author');
        }
        const data = await res.json();
        if (data) {
          setAuthor({
            id: data.id,
            name: data.name ?? '',
            bio: data.bio ?? '',
            photo: data.photo ?? null,
            credentials: data.credentials ?? '',
          });
        } else {
          setAuthor({
            name: '',
            bio: '',
            photo: null,
            credentials: '',
          });
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load author');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthor();
  }, []);

  const handleChange =
    (field: keyof Author) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!author) return;
      setAuthor({ ...author, [field]: e.target.value });
    };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!author) return;
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setSuccess(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to upload image');
      }

      setAuthor({ ...author, photo: data.url });
      setSuccess('Image uploaded successfully.');
    } catch (err: any) {
      setError(err.message || 'Failed to upload image');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author) return;

    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/admin/author', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: author.name,
          bio: author.bio,
          photo: author.photo,
          credentials: author.credentials,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to save author');
      }

      setSuccess('Author information saved successfully.');
      setAuthor({
        id: data.id,
        name: data.name ?? '',
        bio: data.bio ?? '',
        photo: data.photo ?? null,
        credentials: data.credentials ?? '',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to save author');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8 text-text-primary/70">Loading author...</div>;
  }

  if (!author) {
    return <div className="text-center py-8 text-red-600">Failed to load author.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-[2fr,1fr] gap-6 items-start">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={author.name}
              onChange={handleChange('name')}
              required
              className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-text-primary mb-1"
              htmlFor="credentials"
            >
              Credentials / Title
            </label>
            <input
              id="credentials"
              type="text"
              value={author.credentials ?? ''}
              onChange={handleChange('credentials')}
              placeholder="e.g. Licensed Guidance Counselor"
              className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              value={author.bio}
              onChange={handleChange('bio')}
              required
              rows={8}
              className="w-full px-4 py-2.5 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm resize-vertical"
              placeholder="Write the author bio here..."
            />
            <p className="mt-1 text-xs text-text-primary/60">
              Separate paragraphs with a blank line. This bio appears on the public site.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Author Photo
            </label>
            {author.photo ? (
              <div className="mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={author.photo}
                  alt={author.name}
                  className="w-40 h-40 rounded-full object-cover mx-auto border border-background-2"
                />
              </div>
            ) : (
              <p className="text-xs text-text-primary/60 mb-2">No photo set yet.</p>
            )}

            <div className="space-y-3">
              <div>
                <label
                  htmlFor="photoUrl"
                  className="block text-xs font-medium text-text-primary/80 mb-1"
                >
                  Photo URL
                </label>
                <input
                  id="photoUrl"
                  type="url"
                  value={author.photo ?? ''}
                  onChange={handleChange('photo')}
                  placeholder="Paste image URL from gallery or elsewhere"
                  className="w-full px-3 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-xs"
                />
                <p className="mt-1 text-[11px] text-text-primary/60">
                  You can copy an image URL from the admin Image Gallery and paste it here.
                </p>
              </div>

              <div>
                <label
                  htmlFor="photo"
                  className="block text-xs font-medium text-text-primary/80 mb-1"
                >
                  Or upload a new photo
                </label>
                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-text-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-1 file:text-white hover:file:bg-primary-2"
                />
                <p className="mt-1 text-xs text-text-primary/60">
                  Upload an author photo (max 5MB). It will be stored in Supabase like book covers.
                </p>
              </div>
            </div>
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
        {saving ? 'Saving...' : 'Save Author'}
      </button>
    </form>
  );
}


