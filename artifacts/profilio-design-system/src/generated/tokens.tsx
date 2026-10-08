/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#FBF9F5",
      "foreground": "#24453B",
      "border": "#DED9CF",
      "card": "#FFFDFC",
      "cardForeground": "#24453B",
      "popover": "#FFFDFC",
      "popoverForeground": "#24453B",
      "primary": "#1B4332",
      "primaryForeground": "#FBF9F5",
      "secondary": "#E8F0E6",
      "secondaryForeground": "#315247",
      "muted": "#F0ECE3",
      "mutedForeground": "#557066",
      "accent": "#F6C978",
      "accentForeground": "#1B4332",
      "destructive": "#B84B42",
      "destructiveForeground": "#FBF9F5",
      "input": "#D9D4CA",
      "ring": "#43705A",
      "chart1": "#1B4332",
      "chart2": "#A6CBB6",
      "chart3": "#F3B39D",
      "chart4": "#F6C978",
      "chart5": "#CF795F",
      "sidebar": "#1B4332",
      "sidebarForeground": "#FBF9F5",
      "sidebarBorder": "#2E5B48",
      "sidebarPrimary": "#F6C978",
      "sidebarPrimaryForeground": "#1B4332",
      "sidebarAccent": "#2C614B",
      "sidebarAccentForeground": "#FBF9F5",
      "sidebarRing": "#F6C978"
    },
    "dark": {
      "background": "#15261F",
      "foreground": "#F6F1E8",
      "border": "#355345",
      "card": "#20362B",
      "cardForeground": "#F6F1E8",
      "popover": "#20362B",
      "popoverForeground": "#F6F1E8",
      "primary": "#A6CBB6",
      "primaryForeground": "#15261F",
      "secondary": "#2C463A",
      "secondaryForeground": "#E8F0E6",
      "muted": "#2A4034",
      "mutedForeground": "#B7C6BC",
      "accent": "#F6C978",
      "accentForeground": "#1B4332",
      "destructive": "#CF795F",
      "destructiveForeground": "#15261F",
      "input": "#355345",
      "ring": "#F6C978",
      "chart1": "#A6CBB6",
      "chart2": "#F3B39D",
      "chart3": "#F6C978",
      "chart4": "#7FB59A",
      "chart5": "#CF795F",
      "sidebar": "#10271D",
      "sidebarForeground": "#F6F1E8",
      "sidebarBorder": "#294638",
      "sidebarPrimary": "#F6C978",
      "sidebarPrimaryForeground": "#15261F",
      "sidebarAccent": "#244536",
      "sidebarAccentForeground": "#F6F1E8",
      "sidebarRing": "#F6C978"
    }
  },
  "fontFamily": {
    "sans": [
      "Inter",
      "sans-serif"
    ],
    "serif": [
      "Plus Jakarta Sans",
      "sans-serif"
    ],
    "mono": [
      "SFMono-Regular",
      "Consolas",
      "monospace"
    ]
  },
  "radius": "0.5rem",
  "spacing": "0.25rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
