'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

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
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [filterLoading, setFilterLoading] = useState(false);

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async (withFilter = false) => {
    try {
      if (withFilter) {
        setFilterLoading(true);
      }
      const params = new URLSearchParams();
      if (startDate) params.set('startDate', startDate);
      if (endDate) params.set('endDate', endDate);

      const url =
        params.toString().length > 0
          ? `/api/admin/statistics?${params.toString()}`
          : '/api/admin/statistics';

      const response = await fetch(url);
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch statistics:', error);
    } finally {
      setLoading(false);
      setFilterLoading(false);
    }
  };

  const handleApplyFilter = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStats(true);
  };

  const clicksOverTime = useMemo(() => {
    if (!stats) return [];

    const countsByDate: Record<string, number> = {};

    stats.recentClicks.forEach((click) => {
      const dateKey = new Date(click.createdAt).toISOString().slice(0, 10);
      countsByDate[dateKey] = (countsByDate[dateKey] || 0) + 1;
    });

    return Object.entries(countsByDate)
      .sort(([a], [b]) => (a < b ? -1 : 1))
      .map(([date, count]) => ({
        date,
        count,
      }));
  }, [stats]);

  if (loading) {
    return <div className="text-center py-12">Loading statistics...</div>;
  }

  if (!stats) {
    return <div className="text-center py-12 text-red-600">Failed to load statistics</div>;
  }

  return (
    <div className="space-y-8">
      {/* Date Filter */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-1">Date Filter</h2>
            <p className="text-sm text-text-primary/70">
              Filter statistics by a specific date range. Leave empty to see all time.
            </p>
          </div>
          <form
            onSubmit={handleApplyFilter}
            className="flex flex-col sm:flex-row gap-3 items-start sm:items-end"
          >
            <div className="flex flex-col">
              <label className="text-xs font-medium text-text-primary/70 mb-1" htmlFor="startDate">
                Start date
              </label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="px-3 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-medium text-text-primary/70 mb-1" htmlFor="endDate">
                End date
              </label>
              <input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="px-3 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={filterLoading}
              className="bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm disabled:opacity-50"
            >
              {filterLoading ? 'Applying...' : 'Apply filter'}
            </button>
          </form>
        </div>
      </div>
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

      {/* Clicks over time (chart) */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Clicks Over Time</h2>
        {clicksOverTime.length > 0 ? (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={clicksOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-text-primary/70">No clicks yet for this period.</p>
        )}
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

