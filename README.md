# OTT Platform React UI

React + Vite UI recreation for the provided OTT design screens.

## Included screens
- Mobile Home
- Desktop Home
- Content Details
- Search / Explore
- User Profile

## Run locally
```bash
npm install
npm run dev
```

## Routes
- `/` - Mobile home
- `/desktop` - Desktop home
- `/details` - Content details
- `/search` - Search / explore
- `/profile` - User profile

## Folder structure
```text
ott-react-ui/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── data/
    │   └── content.js
    ├── components/
    │   ├── AppShell.jsx
    │   ├── BrandLogo.jsx
    │   ├── Buttons.jsx
    │   ├── CastCard.jsx
    │   ├── CategoryPill.jsx
    │   ├── MobileNav.jsx
    │   ├── MovieCard.jsx
    │   ├── ProfileMenuCard.jsx
    │   ├── SearchInput.jsx
    │   └── SectionTitle.jsx
    └── pages/
        ├── DetailsPage.jsx
        ├── HomeDesktopPage.jsx
        ├── HomePage.jsx
        ├── ProfilePage.jsx
        └── SearchPage.jsx
```
