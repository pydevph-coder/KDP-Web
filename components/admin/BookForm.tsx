"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { FullBook } from "./BooksManager";

interface BookFormProps {
  book: FullBook | null;
  onClose: () => void;
  onSave: () => void;
}

// Helpers for textarea arrays
const parseTextareaToArray = (text: string): string[] =>
  text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

const arrayToTextarea = (arr?: string[] | null): string =>
  arr?.join("\n") ?? "";

export default function BookForm({ book, onClose, onSave }: BookFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    coverImage: "",
    description: "",
    introduction: "",
    amazonLink: "",
    painPoints: "",
    painPointsHeader: "",
    benefits: "",
    benefitsHeader: "",
    features: "",
    featuresHeader: "",
    targetAudience: "",
    targetAudienceHeader: "",
    faithMessage: "",
    faithMessageHeader: "",
    featured: false,
    order: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        coverImage: book.coverImage,
        description: book.description,
        introduction: book.introduction ?? "",
        amazonLink: book.amazonLink,
        painPoints: arrayToTextarea(book.painPoints ?? []),
        painPointsHeader: book.painPointsHeader ?? "",
        benefits: arrayToTextarea(book.benefits ?? []),
        benefitsHeader: book.benefitsHeader ?? "",
        features: arrayToTextarea(book.features ?? []),
        featuresHeader: book.featuresHeader ?? "",
        targetAudience: arrayToTextarea(book.targetAudience ?? []),
        targetAudienceHeader: book.targetAudienceHeader ?? "",
        faithMessage: book.faithMessage ?? "",
        faithMessageHeader: book.faithMessageHeader ?? "",
        featured: book.featured,
        order: book.order,
      });
    }
  }, [book]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const url = book ? `/api/admin/books/${book.id}` : "/api/admin/books";
      const method = book ? "PUT" : "POST";

      // Convert textarea strings to arrays for submission
      const submitData = {
        title: formData.title,
        coverImage: formData.coverImage,
        description: formData.description,
        introduction: formData.introduction.trim() || null,
        amazonLink: formData.amazonLink,
        painPoints: parseTextareaToArray(formData.painPoints),
        painPointsHeader: formData.painPointsHeader.trim() || null,
        benefits: parseTextareaToArray(formData.benefits),
        benefitsHeader: formData.benefitsHeader.trim() || null,
        features: parseTextareaToArray(formData.features),
        featuresHeader: formData.featuresHeader.trim() || null,
        targetAudience: parseTextareaToArray(formData.targetAudience),
        targetAudienceHeader: formData.targetAudienceHeader.trim() || null,
        faithMessage: formData.faithMessage.trim() || null,
        faithMessageHeader: formData.faithMessageHeader.trim() || null,
        featured: formData.featured,
        order: formData.order,
      };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Failed to save book");
      } else {
        onSave();
      }
    } catch {
      setError("Failed to save book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">
          {book ? "Edit Book" : "Add New Book"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ...all your input/textarea fields... */}
        </form>
      </div>
    </div>
  );
}
