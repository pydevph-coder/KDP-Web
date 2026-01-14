# KDP Books Landing Page

A professional, high-converting landing page for Amazon KDP books with a complete admin panel for managing books, testimonials, and viewing statistics.

## Features

### Landing Page
- **Hero Section** - Eye-catching hero with book cover, headline, and CTAs
- **Book Showcase** - Display featured books with covers, descriptions, and benefits
- **Who It's For** - Target audience section
- **Why These Books** - Feature highlights
- **Testimonials** - Customer reviews section
- **About the Author** - Author bio and credentials
- **Email Signup** - Newsletter subscription with free resource offer
- **Sticky CTA** - Mobile-optimized sticky "Buy on Amazon" button
- **Footer** - Links, contact info, and social media

### Admin Panel
- **Book Management** - Full CRUD operations for books
- **Testimonial Management** - Add, edit, and delete testimonials
- **Statistics Dashboard** - View clicks, subscribers, and analytics
- **Secure Authentication** - Password-protected admin area

### Technical Features
- **Next.js 14** - App Router with Server Components
- **Prisma** - Type-safe database ORM
- **Neon Database** - PostgreSQL database
- **Tailwind CSS** - Beautiful, responsive design
- **TypeScript** - Full type safety
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Pinterest Ready** - Open Graph tags for rich pins
- **Analytics Tracking** - Click tracking and statistics

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Database

1. Create a Neon database at [neon.tech](https://neon.tech)
2. Copy your connection string
3. Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
ADMIN_PASSWORD="your-secure-password-here"
```

### 3. Initialize Database

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your landing page.

### 5. Access Admin Panel

Visit [http://localhost:3000/admin/login](http://localhost:3000/admin/login) and use the password you set in `.env`.

## Admin Panel Usage

### Managing Books

1. Go to **Admin Dashboard** → **Manage Books**
2. Click **Add New Book** to create a book
3. Fill in:
   - Title
   - Cover Image URL (Amazon image URL or hosted image)
   - Description
   - Amazon Link
   - Benefits (bullet points)
   - Featured checkbox (to show on homepage)
   - Order (for sorting)

### Managing Testimonials

1. Go to **Admin Dashboard** → **Testimonials**
2. Click **Add New Testimonial**
3. Fill in name, text, rating, and mark as featured if desired

### Viewing Statistics

1. Go to **Admin Dashboard** → **Statistics**
2. View:
   - Total clicks
   - Clicks by source (hero, showcase, sticky)
   - Clicks by book
   - Total subscribers
   - Recent clicks

## Customization

### Colors

Edit `tailwind.config.ts` to change the color palette:
- Primary colors: `#F2A1B3` (pink), `#9DB8A0` (sage green)
- Background colors: `#FAFAF8`, `#E8DED5`
- Text color: `#3F3F3F`

### Content

- **Author Info**: Add author details through Prisma Studio or create an API endpoint
- **Meta Tags**: Edit `app/layout.tsx` to update SEO metadata
- **Footer Links**: Update `components/Footer.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `DATABASE_URL`
   - `ADMIN_PASSWORD`
4. Deploy!

### Other Platforms

Make sure to:
- Set environment variables
- Run `prisma generate` during build
- Run `prisma db push` or migrations

## Database Schema

The project uses Prisma with the following models:
- `Book` - Book information
- `Testimonial` - Customer reviews
- `Author` - Author information
- `EmailSubscriber` - Newsletter subscribers
- `Click` - Analytics tracking

## Adding Google Analytics & Pinterest Tag

To add tracking:

1. **Google Analytics**: Add the script to `app/layout.tsx`
2. **Pinterest Tag**: Add Pinterest pixel code to `app/layout.tsx`

## Support

For issues or questions, please check the codebase or create an issue in your repository.

