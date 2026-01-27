'use client';

import { useEffect, useState } from 'react';

type ImageFile = {
  name: string;
  path: string;
  url: string;
  createdAt: string | null;
  size: number | null;
};

export default function ImageGallery() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [folder, setFolder] = useState('book-covers');
  const [uploading, setUploading] = useState(false);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const fetchImages = async (folderToUse?: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/admin/images${folderToUse ? `?folder=${encodeURIComponent(folderToUse)}` : ''}`,
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to load images');
      }
      setImages(data.files || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(folder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || 'book-covers';
    setFolder(value);
    fetchImages(value);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    setCopyMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      await fetchImages(folder);
      setCopyMessage('Image uploaded. URL copied to clipboard.');
      if (navigator.clipboard && data.url) {
        await navigator.clipboard.writeText(data.url);
      }
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const handleCopy = async (url: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopyMessage('Copied image URL to clipboard.');
        setTimeout(() => setCopyMessage(null), 2500);
      }
    } catch {
      setCopyMessage('Failed to copy URL.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Image Gallery</h2>
          <p className="text-sm text-text-primary/70">
            Browse images stored in your Supabase bucket and copy URLs to reuse in books, author,
            or other fields.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div>
            <label className="block text-xs font-medium text-text-primary/70 mb-1">
              Folder (optional)
            </label>
            <input
              type="text"
              value={folder}
              onChange={handleFolderChange}
              className="px-3 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-xs sm:text-sm"
              placeholder="book-covers"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-primary/70 mb-1">
              Upload new image
            </label>
            <input
              type="file"
              accept="image/*"
              disabled={uploading}
              onChange={handleUpload}
              className="block w-full text-xs sm:text-sm text-text-primary file:mr-2 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary-1 file:text-white hover:file:bg-primary-2 disabled:opacity-50"
            />
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {copyMessage && !error && <p className="text-sm text-green-600">{copyMessage}</p>}

      {loading ? (
        <p className="text-sm text-text-primary/70">Loading images...</p>
      ) : images.length === 0 ? (
        <p className="text-sm text-text-primary/70">No images found in this folder.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div
              key={img.path}
              className="border border-background-2 rounded-xl overflow-hidden bg-background-1 flex flex-col"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.url}
                alt={img.name}
                className="w-full h-40 object-cover bg-background-2"
              />
              <div className="p-3 space-y-1 flex-1 flex flex-col">
                <p className="text-xs font-medium text-text-primary break-all">{img.name}</p>
                <p className="text-[11px] text-text-primary/60 break-all line-clamp-2">{img.url}</p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-text-primary/50">
                  <span>
                    {img.size ? `${(img.size / 1024).toFixed(0)} KB` : ''}
                  </span>
                  <span>
                    {img.createdAt
                      ? new Date(img.createdAt).toLocaleDateString()
                      : ''}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(img.url)}
                  className="mt-2 w-full text-xs bg-primary-1 hover:bg-primary-2 text-white font-semibold py-1.5 rounded-full transition-colors"
                >
                  Copy URL
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


