# Fix Row-Level Security Policy Error

You're getting this error: `new row violates row-level security policy`

This means your Supabase Storage bucket has RLS (Row Level Security) enabled, which is blocking uploads.

## Solution: Configure Bucket Policy

You have **3 options** to fix this:

### Option 1: Make Bucket Public (Easiest)

1. Go to Supabase Dashboard → **Storage**
2. Click on your `book-images` bucket
3. Make sure **"Public bucket"** checkbox is ✅ **CHECKED**
4. If it's already checked, you may need to add policies (see Option 2)

### Option 2: Add Upload Policy to Bucket (Recommended)

Since you're using server-side uploads, you need to allow INSERT operations:

1. Go to Supabase Dashboard → **Storage** → **Policies**
2. Select the `book-images` bucket
3. Click **"New Policy"** or **"Add Policy"**
4. Choose **"For full customization"**
5. Configure as follows:

**Policy Name:** `Allow public uploads` (or any name)

**Allowed operation:** `INSERT`

**Target roles:** `anon` (or `public`)

**USING expression:**
```sql
true
```

**WITH CHECK expression:**
```sql
true
```

6. Click **Save**

**Alternative Policy (if above doesn't work):**
- **Allowed operation:** `INSERT`
- **Target roles:** `authenticated, anon`
- **USING expression:** `bucket_id = 'book-images'`
- **WITH CHECK expression:** `bucket_id = 'book-images'`

### Option 3: Use Service Role Key (Most Secure)

This bypasses RLS entirely. **Only use this if you trust your server code.**

1. Go to Supabase Dashboard → **Settings** → **API**
2. Copy the **`service_role` key** (⚠️ KEEP THIS SECRET!)
3. Add to your `.env` file:

```env
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

4. Restart your dev server

The code already supports service role key - it will use it automatically if present.

## Quick Fix Steps (Recommended Order)

1. **First, try making the bucket public:**
   - Storage → `book-images` → Make sure "Public bucket" is checked ✅

2. **If still not working, add a policy:**
   - Storage → Policies → `book-images` → New Policy
   - Operation: INSERT
   - Roles: anon
   - Expression: `true`

3. **If still failing, use service role key:**
   - Settings → API → Copy service_role key
   - Add to `.env` as `SUPABASE_SERVICE_ROLE_KEY`
   - Restart server

## Verify the Fix

After applying one of the above:

1. Try uploading an image in your admin panel
2. Check Supabase Dashboard → Storage → `book-images` bucket
3. You should see files appear in the `book-covers/` folder

## Which Option Should I Use?

- **Option 1 (Public Bucket):** Good for development, simple to set up
- **Option 2 (Policy):** Good balance of security and functionality
- **Option 3 (Service Role Key):** Most secure for production, but requires careful handling of secrets

For most cases, **Option 1 or 2** is sufficient.





