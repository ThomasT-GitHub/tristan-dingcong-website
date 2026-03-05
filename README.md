# Tristan Portfolio - Three Website Iterations

Three beautiful portfolio websites for a videographer/photographer/media production professional.

## Website 1: Dynamic Masonry Grid Portfolio
**Location:** `website1/`

A modern, dynamic portfolio featuring:
- Masonry grid layout with smooth animations
- Category filtering (Portrait, Landscape, Event, Commercial)
- Lightbox gallery with keyboard navigation
- Mobile-responsive design
- Scroll-reveal animations
- Clean, contemporary aesthetic

## Website 2: StudioBCV Replica
**Location:** `website2/`

A bold, dark-themed portfolio inspired by studiobcv.com:
- Dark background with high contrast white text
- Grid-based asymmetrical layout
- Service breakdown sections (Concept, Production, Post-Production, Amplification)
- Full-width hero sections
- Professional, industry-standard design
- Mobile-optimized

## Website 3: Sleek, Elegant & Conversion-Focused
**Location:** `website3/`

A luxury, conversion-focused portfolio designed to win clients:
- Elegant serif and sans-serif typography
- Generous white space and refined aesthetics
- Stats section showcasing credibility
- Client testimonials
- Multiple strong call-to-action buttons
- Detailed service descriptions with clear value propositions
- Professional contact form with budget/timeline fields
- Optimized for client conversion

---

## How to Run Each Website

### Option 1: Using Python (Recommended - Works on all systems)

**IMPORTANT:** Run the server from the root `tristan-portfolio/` directory so it can access the `media/` folder!

```bash
# From the tristan-portfolio directory:
python3 -m http.server 8000
```

Then open in your browser:
- **Website 1:** http://localhost:8000/website1/
- **Website 2:** http://localhost:8000/website2/
- **Website 3:** http://localhost:8000/website3/

### Option 2: Using PHP

```bash
# From the tristan-portfolio directory:
php -S localhost:8000
```

Then open:
- **Website 1:** http://localhost:8000/website1/
- **Website 2:** http://localhost:8000/website2/
- **Website 3:** http://localhost:8000/website3/

### Option 3: Using Node.js (if you have npx installed)

```bash
# From the tristan-portfolio directory:
npx serve -p 8000
```

Then open:
- **Website 1:** http://localhost:8000/website1/
- **Website 2:** http://localhost:8000/website2/
- **Website 3:** http://localhost:8000/website3/

### Option 4: Using VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on any `index.html` file
3. Select "Open with Live Server"

---

## Quick Comparison

| Feature | Website 1 | Website 2 | Website 3 |
|---------|-----------|-----------|-----------|
| Style | Modern & Dynamic | Bold & Dark | Elegant & Luxury |
| Layout | Masonry Grid | Asymmetric Grid | Clean Sections |
| Color Scheme | Light with Accents | Dark with White Text | Minimal with Earth Tones |
| Best For | Creative Portfolios | Edgy/Modern Brands | High-End Clients |
| Conversion Focus | Medium | Medium | High |
| Filtering | Yes | No | No |
| Lightbox | Yes | No | No |
| Testimonials | No | No | Yes |
| Stats | No | No | Yes |

---

## Features Comparison

### Website 1
- ✅ Category filtering
- ✅ Lightbox gallery
- ✅ Mobile hamburger menu
- ✅ Smooth scroll
- ✅ Intersection Observer animations
- ✅ Contact form

### Website 2
- ✅ Bold typography
- ✅ Grid-based portfolio
- ✅ Service breakdown sections
- ✅ Parallax effects
- ✅ Auto-hide header
- ✅ Contact form

### Website 3
- ✅ Luxury aesthetic
- ✅ Stats counter animation
- ✅ Client testimonials
- ✅ Multiple CTAs
- ✅ Detailed service cards
- ✅ Professional contact form
- ✅ Budget & timeline fields
- ✅ Conversion-optimized

---

## Media Files

All websites use images from the `media/` folder (34 images total). The images are referenced relatively, so the folder structure must remain:

```
tristan-portfolio/
├── media/
│   ├── IMG_*.jpg
├── website1/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── website2/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── website3/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## Customization Tips

### To customize client name:
- Search for "Tristan" in HTML files and replace with actual name

### To add/remove images:
- Add images to `media/` folder
- Edit the HTML gallery sections in each website's `index.html`

### To change colors:
- Edit CSS variables at the top of each `style.css` file

### To modify contact form:
- Forms currently show success alerts
- Add actual form handling by connecting to a backend service or using services like Formspree, EmailJS, or Netlify Forms

---

## Browser Compatibility

All websites are compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## No Build Process Required

These websites use pure HTML, CSS, and JavaScript with no frameworks or build tools. They're ready to deploy to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any web server

Simply upload the files and you're done!
