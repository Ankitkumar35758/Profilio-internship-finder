# Card

## Source contract

- Source evidence: `studio-card` utility used throughout `Dashboard`, `Portfolio`, `SettingsSurface`, `SupportSurface`, and `AnalyticsSurface`.
- Common composition: rounded surface, warm border, quiet off-white fill, and internal 20–28px padding.
- Behavior observed: cards group one decision or one content story; hover lift is used selectively for discovery items.

## Visual extraction

- Card surfaces are distinct from the cream page without a heavy shadow.
- Corners are soft and consistent, with larger 16px treatments on feature surfaces.
- Long-form pages use two-column card grids on desktop and collapse to a single column on mobile.

## Pilot implementation

The pilot uses the scaffold `Card` family with the extracted card surface,
foreground, border, radius, and spacing tokens.