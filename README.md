# Earth Stewards LLC Website

Professional native landscape design and installation services website for Earth Stewards LLC, serving Muskegon and Ottawa Counties, Michigan.

## Features

- 🌿 Modern, organic design with earth-tone color palette
- 📱 Fully responsive layout (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 for optimal performance
- 🎨 Custom animations and micro-interactions
- 🎯 SEO-optimized structure
- 📝 Contact form for consultation requests
- 🖼️ Project portfolio showcase
- 💬 Client testimonials section
- 📚 Educational resources section

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom theme
- **Typography:** Fraunces (display) & Instrument Sans (body)
- **Animations:** CSS animations + Framer Motion
- **Deployment:** Optimized for Vercel

## Project Structure

```
earth-stewards-llc/
├── app/
│   ├── globals.css          # Global styles with animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── Navigation.tsx        # Header with scroll behavior
│   ├── Hero.tsx              # Hero section with CTA
│   ├── Services.tsx          # Services overview
│   ├── WhyNative.tsx         # Benefits of native landscaping
│   ├── Process.tsx           # 4-step process
│   ├── Projects.tsx          # Portfolio with filters
│   ├── Testimonials.tsx      # Client testimonials
│   ├── Resources.tsx         # Educational content
│   ├── Contact.tsx           # Contact form & info
│   └── Footer.tsx            # Footer with links
├── public/                   # Static assets (add images here)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production

```bash
npm run build
```

## Deployment to Vercel

### Option 1: Deploy from Git Repository

1. Push this code to a GitHub/GitLab/Bitbucket repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts to complete deployment.

## Customization

### Adding Images

Replace placeholder images in components with actual project photos:

1. Add images to `/public/images/`
2. Update image sources in components
3. Recommended image sizes:
   - Hero image: 1200x1500px
   - Project photos: 800x600px
   - Before/after: 600x450px each

### Color Customization

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  earth: { ... },  // Brown earth tones
  moss: { ... },   // Green accent colors
  sage: { ... },   // Muted green tones
}
```

### Contact Form Integration

The contact form is currently set up with a placeholder. To make it functional:

1. **Option A - Formspree:**
   ```javascript
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Option B - Vercel Forms:**
   Add `name` attribute to form and enable Vercel Forms in project settings

3. **Option C - Custom API:**
   Create API route in `/app/api/contact/route.ts`

### Navigation Links

Update navigation links in `components/Navigation.tsx` to match your needs.

### SEO Metadata

Edit SEO information in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... other metadata
}
```

## Environment Variables

If you add email functionality or other integrations, create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://earthstewardsllc.com
CONTACT_EMAIL=info@earthstewardsllc.com
```

## Performance Optimization

- ✅ Static export enabled for faster loading
- ✅ Images optimized (when using Next.js Image component)
- ✅ CSS animations for performance
- ✅ Minimal JavaScript bundle
- ✅ Lazy loading ready

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

© 2024 Earth Stewards LLC. All rights reserved.

## Support

For questions or support, contact: info@earthstewardsllc.com
