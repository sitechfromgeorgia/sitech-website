# SiTech.ge - ციფრული სააგენტო

თანამედროვე, სრულად ანიმირებული სააგენტო ვებსაიტი Next.js 15, React 19 და Framer Motion-ით.

## 🚀 Features

- ✅ **Next.js 15** + **React 19** - უახლესი ვერსიები
- ✅ **Tailwind CSS v4** - თანამედროვე სტილიზაცია
- ✅ **Framer Motion** - გლუვი ანიმაციები
- ✅ **Dark Mode** - მუქი/ღია თემა ჩამრთველით
- ✅ **Georgian Language** - სრულად ქართული ინტერფეისი
- ✅ **Responsive Design** - მობილური-პირველი დიზაინი
- ✅ **SEO Optimized** - საძიებო ოპტიმიზირებული
- ✅ **Bento Grid Layout** - თანამედროვე ბლოკური დიზაინი
- ✅ **Production Ready** - მზადაა დეპლოიმენტისთვის

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Theme:** next-themes (Dark/Light mode)
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Dokploy (Docker)

## 🏗️ Project Structure

```
sitech-website/
├── app/
│   ├── (pages)/
│   │   ├── page.tsx           # Home
│   │   ├── services/          # Services
│   │   ├── portfolio/         # Portfolio
│   │   ├── pricing/           # Pricing
│   │   ├── about/             # About
│   │   └── contact/           # Contact
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── theme-toggle.tsx
│   └── providers/
│       └── theme-provider.tsx
├── public/
├── Dockerfile
└── tailwind.config.ts
```

## 🎨 Pages

1. **მთავარი (Home)** - Hero section, სერვისების მიმოხილვა, სტატისტიკა, CTA
2. **სერვისები (Services)** - 8 სრული სერვისი დეტალური აღწერით
3. **პორტფოლიო (Portfolio)** - პროექტების showcase (WIG, MOS)
4. **ფასები (Pricing)** - 4 პაკეტი (Starter, Business, Growth, Enterprise)
5. **ჩვენ შესახებ (About)** - კომპანიის ისტორია, ღირებულებები, ტექნოლოგიები
6. **კონტაქტი (Contact)** - ფორმა, WhatsApp/Telegram ღილაკები

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Docker Deployment

```bash
# Build Docker image
docker build -t sitech-website .

# Run container
docker run -p 3000:3000 sitech-website
```

### Dokploy Deployment

1. Create new project in Dokploy
2. Connect to GitHub repository
3. Set build settings:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Port:** `3000`
4. Add domain: `sitech.ge`
5. Deploy!

## 🎨 Design Features

### Bento Grid Layout
- თანამედროვე ბლოკური დიზაინი
- Responsive cards და sections
- Hover ეფექტები

### Animations
- Page transitions
- Scroll-triggered animations
- Hover states
- Loading states
- Stagger animations

### Color Scheme
- **Primary:** Purple gradient (#8B5CF6)
- **Dark Mode:** Premium dark aesthetic
- **Accents:** Pink, Blue, Green gradients
- **Neutral:** Slate grays

### Typography
- **Font:** Geist Sans & Geist Mono
- **Headings:** Bold, large sizes
- **Body:** Readable, comfortable spacing

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://sitech.ge
```

### Tailwind Config

Custom design tokens in `tailwind.config.ts`:
- Colors (primary, secondary, accent)
- Border radius
- Animations
- Typography

## 📱 Mobile-First Design

- Responsive breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly buttons (min 44x44px)
- Mobile menu
- Optimized images
- Fast loading

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Color contrast (WCAG 2.1)

## 🔍 SEO

- Meta tags
- Open Graph tags
- Structured data
- Sitemap
- Robots.txt

## 📊 Performance

- Next.js Image optimization
- Code splitting
- Lazy loading
- Standalone output
- Minimal bundle size

## 🛠️ Customization

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 262 83% 58%;
  /* ... */
}
```

### Add Pages

1. Create folder in `app/`
2. Add `page.tsx`
3. Update `navbar.tsx` links

### Modify Services

Edit `app/services/page.tsx` - `services` array

### Update Pricing

Edit `app/pricing/page.tsx` - `plans` array

## 📞 Contact Integration

Update contact details in:
- `components/footer.tsx`
- `app/contact/page.tsx`

Replace placeholder links:
- WhatsApp: `https://wa.me/995XXXXXXXXX`
- Telegram: `https://t.me/your_username`
- Email: `info@sitech.ge`

## 🚀 Deployment Checklist

- [ ] Update contact information
- [ ] Add real portfolio images
- [ ] Configure analytics (GA4)
- [ ] Set up contact form backend
- [ ] Add sitemap.xml
- [ ] Configure robots.txt
- [ ] Set up SSL certificate
- [ ] Test on multiple devices
- [ ] Optimize images
- [ ] Run Lighthouse audit

## 📝 License

© 2026 SiTech. All rights reserved.

## 🤝 Support

For questions or support:
- Email: info@sitech.ge
- Phone: +995 123 456 789
- Telegram: [@sitech_ge](https://t.me/sitech_ge)

---

Built with ❤️ by SiTech - ციფრული სააგენტო
