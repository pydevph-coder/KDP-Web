# Supabase Image Upload Setup

This project uses Supabase Storage for book cover image uploads.

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Wait for the project to be fully provisioned

### 2. Create Storage Bucket

1. In your Supabase dashboard, go to **Storage**
2. Click **Create a new bucket**
3. Name it: `book-images`
4. Set it as **Public bucket** (so images can be accessed via URLs)
5. Click **Create bucket**

### 3. Set Up Environment Variables

Add the following to your `.env` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

You can find these values in your Supabase project settings:
- Go to **Settings** → **API**
- Copy the **Project URL** as `NEXT_PUBLIC_SUPABASE_URL`
- Copy the **anon/public** key as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Configure Bucket Policies (Optional but Recommended)

For security, you may want to configure bucket policies:

1. Go to **Storage** → **Policies** for the `book-images` bucket
2. Add a policy to allow authenticated users to upload:
   - Policy name: "Allow authenticated uploads"
   - Allowed operation: INSERT
   - Target roles: authenticated
   - USING expression: `auth.role() = 'authenticated'`

Note: Since we're using admin authentication (not Supabase auth), the current setup works with a public bucket. For production, consider using Supabase Row Level Security (RLS) or service role keys for more security.

## Usage

When adding or editing a book in the admin panel:

1. Click **Choose File** under "Upload Image"
2. Select an image file (JPG, PNG, etc. - max 5MB)
3. The image will be uploaded to Supabase and the URL will be automatically filled in
4. Alternatively, you can paste an image URL directly

## Storage Structure

Images are stored in Supabase Storage at:
```
book-images/
  └── book-covers/
      └── {timestamp}-{random}.{ext}
```

Example: `book-images/book-covers/1698765432123-abc123.jpg`



