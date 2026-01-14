'use client';

import { useState, useEffect } from 'react';

interface Statistics {
  totalClicks: number;
  clicksBySource: { source: string; count: number }[];
  clicksByBook: { bookId: string; bookTitle: string; count: number }[];
  totalSubscribers: number;
  recentClicks: {
    id: string;
    link: string;
    source: string;
    bookTitle: string | null;
    createdAt: string;
  }[];
}

export default function StatisticsView() {
  const [stats, setStats] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/statistics');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch statistics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading statistics...</div>;
  }

  if (!stats) {
    return <div className="text-center py-12 text-red-600">Failed to load statistics</div>;
  }

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-text-primary/70 mb-2">Total Clicks</h3>
          <p className="text-4xl font-bold text-primary-1">{stats.totalClicks}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-text-primary/70 mb-2">Total Subscribers</h3>
          <p className="text-4xl font-bold text-primary-2">{stats.totalSubscribers}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-text-primary/70 mb-2">Books</h3>
          <p className="text-4xl font-bold text-text-primary">{stats.clicksByBook.length}</p>
        </div>
      </div>

      {/* Clicks by Source */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Clicks by Source</h2>
        <div className="space-y-3">
          {stats.clicksBySource.length > 0 ? (
            stats.clicksBySource.map((item) => (
              <div key={item.source} className="flex items-center justify-between">
                <span className="text-text-primary capitalize">{item.source}</span>
                <span className="font-bold text-primary-1">{item.count}</span>
              </div>
            ))
          ) : (
            <p className="text-text-primary/70">No clicks yet</p>
          )}
        </div>
      </div>

      {/* Clicks by Book */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Clicks by Book</h2>
        <div className="space-y-3">
          {stats.clicksByBook.length > 0 ? (
            stats.clicksByBook.map((item) => (
              <div key={item.bookId} className="flex items-center justify-between">
                <span className="text-text-primary">{item.bookTitle}</span>
                <span className="font-bold text-primary-2">{item.count}</span>
              </div>
            ))
          ) : (
            <p className="text-text-primary/70">No book clicks yet</p>
          )}
        </div>
      </div>

      {/* Recent Clicks */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Recent Clicks</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-background-2">
                <th className="text-left py-2 text-text-primary/70">Source</th>
                <th className="text-left py-2 text-text-primary/70">Book</th>
                <th className="text-left py-2 text-text-primary/70">Time</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentClicks.length > 0 ? (
                stats.recentClicks.map((click) => (
                  <tr key={click.id} className="border-b border-background-2">
                    <td className="py-2 text-text-primary capitalize">{click.source}</td>
                    <td className="py-2 text-text-primary">{click.bookTitle || 'N/A'}</td>
                    <td className="py-2 text-text-primary/70">
                      {new Date(click.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="py-4 text-center text-text-primary/70">
                    No clicks yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

