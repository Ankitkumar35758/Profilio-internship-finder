# Avatar

## Source contract

- Source: `artifacts/profilio/src/App.tsx`, inline `Avatar` primitive and responsive Shell profile card.
- Props: `name` and `size` (`sm`, `md`, `lg`).
- Behavior observed: initials are derived from the first two name parts; photo support is product-owned.

## Visual extraction

- Initials use a marigold circle with deep green text.
- Small avatars appear beside identity metadata in the sidebar and top bar.
- The treatment is friendly and compact, never decorative for its own sake.

## Pilot implementation

The pilot uses the scaffold `Avatar` family with a warm fallback surface and
the same round identity silhouette.