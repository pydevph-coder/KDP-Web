# Troubleshooting Image Upload Issues

If images are not uploading to Supabase Storage, check the following:

## 1. Check Environment Variables

Make sure these are in your `.env` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Important:** After adding/updating `.env`, restart your dev server:
```bash
# Stop the server (Ctrl+C) and restart
npm run dev
```

## 2. Verify Bucket Configuration

In Supabase Dashboard → Storage:

1. **Bucket Name:** Must be exactly `book-images` (case-sensitive)
2. **Public Bucket:** Must be checked ✅
3. **File Size Limit:** Check if there's a limit set (we allow up to 5MB)

## 3. Check Bucket Policies

The bucket needs policies to allow uploads. Since we're using server-side uploads:

### Option A: Public Bucket (Easier)
- If bucket is **public**, anon key should work
- Make sure "Public bucket" checkbox is enabled

### Option B: Use Service Role Key (More Secure - Recommended)
Add this to your `.env`:
```env
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**Where to find:** Supabase Dashboard → Settings → API → `service_role` key (secret)

⚠️ **Important:** Service role key bypasses RLS policies - keep it secret and never expose it in client-side code!

## 4. Check Browser Console for Errors

1. Open browser DevTools (F12)
2. Go to Console tab
3. Try uploading an image
4. Look for error messages that show:
   - "Upload failed: [specific error message]"
   - Network errors
   - Authentication errors

## 5. Check Server Logs

Check your terminal/console where `npm run dev` is running for:
- Supabase upload errors
- Missing environment variable warnings
- Authentication errors

## 6. Common Error Messages & Solutions

### "Supabase is not configured"
- **Fix:** Add environment variables to `.env` and restart server

### "Upload failed: new row violates row-level security policy"
- **Fix:** Make bucket public OR use service role key OR add bucket policy

### "Upload failed: The resource already exists"
- **Fix:** This shouldn't happen (we use unique filenames), but if it does, the upload code might have an issue

### "Upload failed: Bucket not found"
- **Fix:** Check bucket name is exactly `book-images` and it exists in Supabase

## 7. Test Upload Manually

You can test if Supabase is working by checking the browser Network tab:

1. Open DevTools → Network tab
2. Try uploading an image
3. Look for `/api/upload/image` request
4. Check the response:
   - **200 OK** with `{"url": "..."}` = Success! ✅
   - **401 Unauthorized** = Authentication issue
   - **500 Internal Server Error** = Check error message in response body
   - **400 Bad Request** = File validation failed (size/type)

## 8. Verify in Supabase Dashboard

After upload attempt:
1. Go to Supabase Dashboard → Storage → `book-images` bucket
2. Check if files appear in `book-covers/` folder
3. If files appear, the upload is working!

## Quick Checklist

- [ ] Environment variables added to `.env`
- [ ] Dev server restarted after adding env vars
- [ ] Bucket named exactly `book-images`
- [ ] Bucket is set to **Public**
- [ ] Service role key added (optional but recommended)
- [ ] Browser console checked for errors
- [ ] Server logs checked for errors
- [ ] Supabase Storage shows files after upload attempt

## Still Not Working?

Check the specific error message from the browser console or server logs and:
1. Search for the exact error message online
2. Verify all Supabase settings match the instructions
3. Try creating a new test bucket to verify Supabase is working
4. Ensure your Supabase project is active (not paused/suspended)



