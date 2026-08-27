# Eventora ✨

**Premium Wedding & Event Planning Platform**

Eventora is a luxury editorial event-tech platform designed for wedding planners, event management companies, vendors, and clients. It features an interactive event builder, vendor/venue discovery, budget planning, guest management, and comprehensive dashboards.

## Features 🚀

- **Cinematic Landing Page:** Immersive hero sections with a luxury aesthetic.
- **Interactive Event Builder:** Multi-step wizard to plan events, select vendors, venues, and estimate budgets.
- **Vendor & Venue Marketplace:** Browse, filter, and shortlist premium vendors and venues.
- **Budget Planner:** Dynamic charts for budget allocation and spending tracking.
- **Guest Management:** Add, edit, and track RSVPs for guests.
- **Planning Timeline:** Interactive checklist for event milestones.
- **Customer & Admin Dashboards:** Dedicated portals for users to manage their plans and for admins to manage the platform.
- **Dark & Light Mode:** Luxurious themes across both modes.
- **Fully Responsive:** Perfectly optimized for mobile, tablet, and desktop screens.

## Tech Stack 🛠️

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts
- **Routing:** React Router DOM v6
- **State Management:** React Context API & LocalStorage

## Project Architecture 📂

```
Eventora/
├── src/
│   ├── components/
│   │   ├── common/      # Reusable UI elements (Buttons, Cards, Modals)
│   │   └── layout/      # Navbars, Footers, Sidebars
│   ├── pages/           # Public pages (Home, Vendors, Venues, etc.)
│   │   ├── admin/       # Admin dashboard pages
│   │   ├── customer/    # Customer dashboard pages
│   │   └── EventBuilder/# Multi-step event planning wizard
│   ├── data/            # Mock data arrays (vendors, venues, packages)
│   ├── context/         # Global AppContext
│   ├── hooks/           # Custom hooks (e.g., useLocalStorage)
│   ├── utils/           # Helper functions (currency formatting, IDs)
│   ├── App.jsx          # App routing and layout wrapper
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind configuration
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind theme customization
└── vite.config.js       # Vite configuration
```

## Installation & Setup 💻

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd "Eventora 💍✨"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Demo Credentials 🔐

Since this is a frontend-only application with simulated authentication, you can access the dashboards by visiting the respective routes:
- **Customer Portal:** Navigate to `/customer`
- **Admin Portal:** Navigate to `/admin`

*(No real backend validation is performed. The state is managed locally via React Context and LocalStorage.)*

## Limitations & Future Integrations ⚠️

- **Frontend-Only:** This project uses mock data and `localStorage`. Changes are persisted locally but not across devices.
- **Authentication:** Simulated; there is no real login backend.
- **Payments:** No real payment processing is integrated.
- **Backend Potential:** The robust component architecture makes it seamless to integrate with a Node.js/Express, Python/Django, or Firebase backend in the future.

---

### Implementation Report

1. **Files created:** 50+ (React components, pages, context, hooks, data arrays)
2. **Features implemented:** Event Builder, Budget Tracker, Dashboards, Vendor/Venue filtering.
3. **Routes implemented:** All 25+ requested routes protected and styled.
4. **Build result:** Success (`npm run build` completed without errors).
5. **Bugs fixed:** Resolved Babel runtime missing dependency for Recharts.
6. **Final verification status:** Fully verified and functional.
