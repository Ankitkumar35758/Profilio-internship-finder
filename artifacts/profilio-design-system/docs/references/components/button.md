# Button

## Source contract

- Source: `artifacts/profilio/src/App.tsx`, inline `Button` primitive.
- Props: `children`, `className`, `variant`, `onClick`, `type`, `disabled`, and test id.
- Variants observed: primary, secondary, quiet, peach.
- Behavior observed: inline-flex layout, icon gap, 12px corners, compact 10px/16px padding, 200ms transition, one-pixel lift on hover, disabled opacity.

## Visual extraction

- Primary uses forest green with warm cream text.
- Secondary is a cream outlined action.
- Quiet is text-first and gains a soft sage hover surface.
- Peach is a high-attention secondary action without competing with primary.

## Pilot implementation

The pilot uses the scaffold `Button` family as the behavior base and maps its
theme to the extracted Profilio tokens. Product-specific variants are recorded
here for the next fidelity pass.