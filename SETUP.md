# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
ADMIN_PASSWORD="your-secure-password-here"
```

### Getting Your Neon Database URL

1. Go to [neon.tech](https://neon.tech) and sign up/login
2. Create a new project
3. Copy the connection string from the dashboard
4. Paste it as `DATABASE_URL` in your `.env` file

## Step 3: Initialize Database

```bash
npm run db:generate
npm run db:push
```

This will:
- Generate Prisma Client
- Push the schema to your Neon database

## Step 4: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 5: Access Admin Panel

1. Go to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Enter the password you set in `.env` (ADMIN_PASSWORD)
3. Start adding books and testimonials!

## First Steps After Setup

1. **Add Author Information** (Optional)
   - You can add author info through Prisma Studio:
   ```bash
   npm run db:studio
   ```
   - Or create an API endpoint to manage author info

2. **Add Your First Book**
   - Go to Admin → Manage Books
   - Click "Add New Book"
   - Fill in all required fields
   - Mark as "Featured" to show on homepage

3. **Add Testimonials** (Optional)
   - Go to Admin → Testimonials
   - Add customer reviews

4. **Customize Content**
   - Update meta tags in `app/layout.tsx`
   - Update footer links in `components/Footer.tsx`
   - Customize colors in `tailwind.config.ts`

## Troubleshooting

### Database Connection Issues
- Make sure your `DATABASE_URL` is correct
- Check that your Neon database is active
- Ensure SSL mode is enabled (`?sslmode=require`)

### Prisma Errors
- Run `npm run db:generate` again
- Make sure Prisma Client is generated before running the app

### Admin Login Not Working
- Check that `ADMIN_PASSWORD` is set in `.env`
- Restart the dev server after changing `.env`

## Production Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `DATABASE_URL`
   - `ADMIN_PASSWORD`
4. Deploy!

The build will automatically run `prisma generate` and set up your database.

