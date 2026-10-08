# Profilio component inventory

Source: `artifacts/profilio`

This inventory normalizes reusable UI families from Profilio's current product
surface. The pilot is intentionally limited to five foundational families so
the visual contract can be reviewed before the rest of the catalog is built.

| Family | Reference | Source evidence | Dependencies / blockers | Chunk | Status |
| --- | --- | --- | --- | --- | --- |
| Button | `components/button.md` | `src/App.tsx` inline `Button` primitive, around the shared primitive declarations | `cn`, class-variance-compatible variants can be added later | pilot | implemented |
| Input | `components/input.md` | `src/App.tsx` inline `Input` primitive, around the shared primitive declarations | `cn` | pilot | implemented |
| Avatar | `components/avatar.md` | `src/App.tsx` inline `Avatar` primitive and Shell profile card | None | pilot | implemented |
| Badge | `components/badge.md` | Match, visibility, and verification badge patterns across `SettingsSurface`, `AnalyticsSurface`, and opportunity cards | None | pilot | implemented |
| Card | `components/card.md` | `studio-card` surface pattern across dashboard, portfolio, settings, support, and analytics | None | pilot | implemented |
| Logo | `components/logo.md` | `src/App.tsx` `Logo` primitive; retained from `public/profilio-logo.png` | Raster brand asset retained | later-1 | pending |
| Shell / navigation | `components/shell-navigation.md` | `src/App.tsx` `Shell` primitive and responsive sidebar | Wouter routing and product state remain app-owned | later-1 | pending |
| Toast | `components/toast.md` | `src/App.tsx` `Toast` primitive and `showToast` interactions | Product state remains app-owned | later-1 | pending |
| Page header | `components/page-header.md` | `PageTitle` and `SurfaceHeader` primitives | None | later-1 | pending |
| Toggle | `components/toggle.md` | `SettingToggle` and notification/privacy controls | None | later-2 | pending |
| Stat card | `components/stat-card.md` | `StatCard` in `AnalyticsSurface` | None | later-2 | pending |
| Project art | `components/project-art.md` | `ProjectArt` and `ProjectMini` in portfolio surfaces | Product-specific illustration variants | later-2 | pending |
| Opportunity card | `components/opportunity-card.md` | `OpportunityCard` in opportunity discovery | Product-specific match and bookmark behavior | later-3 | pending |
| Checklist | `components/checklist.md` | `Checklist` in opportunity detail | None | later-3 | pending |

## Chunk plan

- **Pilot:** Button, Input, Avatar, Badge, Card.
- **Later 1:** Logo, Shell / navigation, Toast, Page header.
- **Later 2:** Toggle, Stat card, Project art.
- **Later 3:** Opportunity card, Checklist.

Later chunks remain unchanged until the pilot is approved.