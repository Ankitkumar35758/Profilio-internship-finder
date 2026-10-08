import { lazy, type ComponentType } from 'react';
import {
  ColorsPage,
  FontsPage,
  LayoutPage,
  OverviewPage,
} from './foundations';
import { BrandLogoPage, PrinciplesPage } from './brand';

function lazyPage(load: () => Promise<ComponentType>) {
  return lazy(async () => ({ default: await load() }));
}

const AvatarDemo = lazyPage(() =>
  import('./demos/avatar').then(({ AvatarDemo }) => AvatarDemo),
);
const BadgeDemo = lazyPage(() =>
  import('./demos/badge').then(({ BadgeDemo }) => BadgeDemo),
);
const ButtonDemo = lazyPage(() =>
  import('./demos/button').then(({ ButtonDemo }) => ButtonDemo),
);
const CardDemo = lazyPage(() =>
  import('./demos/card').then(({ CardDemo }) => CardDemo),
);
const InputDemo = lazyPage(() =>
  import('./demos/input').then(({ InputDemo }) => InputDemo),
);

export type PreviewEntry = {
  id: string;
  name: string;
  description: string;
  Page: ComponentType;
};

export type NavGroup = {
  name: string;
  entries: PreviewEntry[];
};

export const DESIGN_SYSTEM = {
  title: 'Profilio Design System',
  description:
    'A warm, confidence-building visual language for student portfolios, company discovery, and better-fit internship conversations.',
} as const;

export const OVERVIEW_ENTRY: PreviewEntry = {
  id: 'overview',
  name: 'Overview',
  description: 'The visual foundations and pilot components extracted from Profilio.',
  Page: OverviewPage,
};

export const NAV_GROUPS: NavGroup[] = [
  {
    name: 'Brand',
    entries: [
      {
        id: 'brand-logo',
        name: 'Logo',
        description: 'The retained Profilio mark and its placement guidance.',
        Page: BrandLogoPage,
      },
      {
        id: 'brand-principles',
        name: 'Principles',
        description: 'Composition, hierarchy, and voice rules derived from Profilio.',
        Page: PrinciplesPage,
      },
    ],
  },
  {
    name: 'Colors',
    entries: [
      {
        id: 'color-roles',
        name: 'Color roles',
        description: 'Forest, cream, sage, peach, and marigold roles.',
        Page: ColorsPage,
      },
    ],
  },
  {
    name: 'Fonts',
    entries: [
      {
        id: 'type-scale',
        name: 'Type scale',
        description: 'Plus Jakarta Sans display type with Inter body copy.',
        Page: FontsPage,
      },
    ],
  },
  {
    name: 'Layout',
    entries: [
      {
        id: 'spacing-radius',
        name: 'Spacing and radius',
        description: 'The 4px rhythm and soft rounded surface treatments.',
        Page: LayoutPage,
      },
    ],
  },
  {
    name: 'Pilot components',
    entries: [
      {
        id: 'pilot-button',
        name: 'Button',
        description: 'Primary, secondary, quiet, and peach actions.',
        Page: ButtonDemo,
      },
      {
        id: 'pilot-input',
        name: 'Input',
        description: 'Warm outlined fields with clear focus treatment.',
        Page: InputDemo,
      },
      {
        id: 'pilot-avatar',
        name: 'Avatar',
        description: 'Compact identity markers for student profiles.',
        Page: AvatarDemo,
      },
      {
        id: 'pilot-badge',
        name: 'Badge',
        description: 'Short status and match-score labels.',
        Page: BadgeDemo,
      },
      {
        id: 'pilot-card',
        name: 'Card',
        description: 'Quiet surfaces for work, profile, and opportunity content.',
        Page: CardDemo,
      },
    ],
  },
];

export const ALL_ENTRIES: PreviewEntry[] = [
  OVERVIEW_ENTRY,
  ...NAV_GROUPS.flatMap((group) => group.entries),
];

const duplicateIds = ALL_ENTRIES.map((entry) => entry.id).filter(
  (id, index, ids) => ids.indexOf(id) !== index,
);
if (duplicateIds.length > 0) {
  throw new Error(
    `Duplicate preview page id(s): ${[...new Set(duplicateIds)].join(
      ', ',
    )}. Every page id must be unique across all nav groups.`,
  );
}