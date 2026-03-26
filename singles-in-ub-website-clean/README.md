# Singles.in.UB Marketing Website

A bilingual (Mongolian + English) marketing website for Singles.in.UB — Mongolia's First Personal Matchmaking Service.

## 🌐 Live Site

**URL:** [https://singlesinub.com](https://singlesinub.com) *(update after deployment)*

## 🚀 Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** Client-side (Airtable/Supabase integration ready)
- **Hosting:** Vercel (auto-deploy on push)

## 📁 Project Structure

```
├── messages/              # Translation files
│   ├── mn.json           # Mongolian
│   └── en.json           # English
├── src/
│   ├── app/
│   │   ├── globals.css   # Tailwind with brand colors
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Single-page app with all sections
│   └── components/
│       ├── Navbar.tsx    # Navigation with language switcher
│       ├── Footer.tsx    # Footer
│       ├── Hero.tsx      # Hero section
│       ├── SocialProof.tsx # Testimonials
│       ├── AboutSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── EventsSection.tsx
│       ├── ApplySection.tsx    # Application form
│       └── ContactSection.tsx
├── .github/workflows/    # GitHub Actions
│   └── deploy.yml        # Auto-deploy to Vercel
└── next.config.ts
```

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Rose | `#8B1A4A` | Primary brand color, CTAs |
| Gold | `#C9A84C` | Accents, highlights |
| Cream | `#FAF7F2` | Background, cards |

## 🛠️ Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/singles-in-ub-website.git
cd singles-in-ub-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

## 🌍 Bilingual Support

The site supports two languages via client-side switching:
- **Mongolian** (default)
- **English**

To add new translations:
1. Edit `messages/mn.json` for Mongolian
2. Edit `messages/en.json` for English
3. Update the component that uses the translation

## 📝 Form Backend Setup

The application form currently simulates submission. To connect to a real backend:

### Option 1: Airtable
1. Create an Airtable base with fields: Name, Email, Phone, Age, Gender, Occupation, About, LookingFor
2. Get your API key and base ID
3. Update `src/components/ApplySection.tsx` with Airtable API calls

### Option 2: Supabase
1. Create a Supabase project
2. Create a table `applications` with appropriate columns
3. Add Supabase client and update form submission

## 🚀 Deployment

### Automatic (Recommended)

1. Push to `main` branch
2. GitHub Actions automatically deploys to Vercel
3. Zero downtime, instant updates

### Manual

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### First-Time Setup

1. Connect GitHub repo to Vercel
2. Add these secrets to GitHub:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## 📱 Sections

| Section | ID | Description |
|---------|-----|-------------|
| Hero | `#home` | Stats, CTAs |
| About | `#about` | Company story, mission, team |
| How It Works | `#how-it-works` | 3-step process |
| Events | `#events` | Upcoming/past events |
| Apply | `#apply` | Application form |
| Contact | `#contact` | Contact info, form |

## 🔒 Privacy Features

- "No photo required to apply" prominently displayed
- Privacy messaging on all forms
- Mongolian-first, respectful approach

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/name`
2. Make changes
3. Test locally: `npm run build`
4. Push and create PR
5. Auto-deploys on merge to main

## 📄 License

© 2025 Singles.in.UB. All rights reserved.

---

For questions, contact: hello@singlesinub.com
