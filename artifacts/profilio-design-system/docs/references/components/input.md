# Input

## Source contract

- Source: `artifacts/profilio/src/App.tsx`, inline `Input` primitive.
- Props: optional `label`, controlled `value`, `onChange`, `placeholder`, `type`, and test id.
- Behavior observed: label and field stack with a 6px gap; focused fields use a forest border and soft green ring.

## Visual extraction

- Fields are 44px tall with 12px corners.
- Surface is warm white against the cream page.
- Border is warm neutral, not cool gray.
- Labels use Inter at compact UI size and green-gray text.

## Pilot implementation

The pilot uses the scaffold `Input` family for the reusable field behavior and
the extracted border, surface, ring, and typography tokens.