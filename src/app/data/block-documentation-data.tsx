/**
 * Block Documentation — Static Data
 *
 * Extracted from BlockDocumentation.tsx for data-content separation.
 * Contains all WordPress block category definitions with icon imports.
 *
 * @split March 17, 2026
 */

import type { ComponentType } from 'react';
import {
  TextT,
  ImageSquare,
  Layout,
  Code,
  GridFour,
} from '@phosphor-icons/react';

export interface BlockDefinition {
  id: string;
  name: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  description: string;
  props: string[];
  usage: string;
  file: string;
}

export interface BlockCategory {
  id: string;
  name: string;
  description: string;
  blocks: BlockDefinition[];
}

export const blockCategories: BlockCategory[] = [
  {
    id: 'design',
    name: 'Design Blocks',
    description: 'Core design blocks for content creation',
    blocks: [
      {
        id: 'buttons',
        name: 'Buttons Block',
        icon: TextT,
        description: 'WordPress Buttons block with 3 size variants (sm, md, lg)',
        props: ['variant', 'size', 'alignment', 'orientation'],
        usage: 'CTAs, navigation, forms',
        file: '/src/app/components/blocks/design/Buttons.tsx',
      },
      {
        id: 'heading',
        name: 'Heading Block',
        icon: TextT,
        description: 'WordPress Heading block with H1-H6 levels',
        props: ['level', 'textAlign', 'content'],
        usage: 'Section titles, page headings',
        file: '/src/app/components/blocks/design/Heading.tsx',
      },
      {
        id: 'image',
        name: 'Image Block',
        icon: ImageSquare,
        description: 'WordPress Image block with alt text and captions',
        props: ['src', 'alt', 'caption', 'width', 'height'],
        usage: 'Content images, featured images',
        file: '/src/app/components/blocks/design/Image.tsx',
      },
    ],
  },
  {
    id: 'theme',
    name: 'Theme Blocks',
    description: 'WordPress FSE theme blocks',
    blocks: [
      {
        id: 'site-title',
        name: 'Site Title',
        icon: TextT,
        description: 'Site title with link to homepage',
        props: ['level', 'isLink'],
        usage: 'Site header, branding',
        file: '/src/app/components/blocks/theme/SiteTitle.tsx',
      },
      {
        id: 'site-logo',
        name: 'Site Logo',
        icon: ImageSquare,
        description: 'Site logo with automatic theme switching (220px width)',
        props: ['width', 'height', 'isLink'],
        usage: 'Site header, footer',
        file: '/src/app/components/blocks/theme/SiteLogo.tsx',
      },
      {
        id: 'site-tagline',
        name: 'Site Tagline',
        icon: TextT,
        description: 'Site tagline/description',
        props: [],
        usage: 'Site header, branding',
        file: '/src/app/components/blocks/theme/SiteTagline.tsx',
      },
      {
        id: 'navigation',
        name: 'Navigation',
        icon: Layout,
        description: 'WordPress Navigation block with mega menus',
        props: ['menuLocation', 'orientation', 'showSubMenus'],
        usage: 'Site header, footer navigation',
        file: '/src/app/components/blocks/theme/Navigation.tsx',
      },
      {
        id: 'search',
        name: 'Search',
        icon: Code,
        description: 'WordPress Search block',
        props: ['label', 'placeholder', 'buttonText'],
        usage: 'Site header, search pages',
        file: '/src/app/components/blocks/theme/Search.tsx',
      },
      {
        id: 'template-part',
        name: 'Template Part',
        icon: Layout,
        description: 'WordPress Template Part block for headers/footers',
        props: ['slug', 'theme', 'area'],
        usage: 'Site structure, reusable parts',
        file: '/src/app/components/blocks/theme/TemplatePart.tsx',
      },
    ],
  },
  {
    id: 'container',
    name: 'Container Blocks',
    description: 'Layout and structure blocks',
    blocks: [
      {
        id: 'group',
        name: 'Group',
        icon: GridFour,
        description: 'WordPress Group block for grouping content',
        props: ['tagName', 'layout', 'backgroundColor'],
        usage: 'Content sections, layout',
        file: '/src/app/components/blocks/container/Group.tsx',
      },
      {
        id: 'stack',
        name: 'Stack',
        icon: GridFour,
        description: 'Vertical stack layout',
        props: ['spacing', 'orientation'],
        usage: 'Vertical content flow',
        file: '/src/app/components/blocks/container/Stack.tsx',
      },
      {
        id: 'row',
        name: 'Row',
        icon: GridFour,
        description: 'Horizontal row layout',
        props: ['spacing', 'wrap', 'verticalAlignment'],
        usage: 'Horizontal content flow',
        file: '/src/app/components/blocks/container/Row.tsx',
      },
      {
        id: 'grid',
        name: 'Grid',
        icon: GridFour,
        description: 'CSS Grid layout',
        props: ['columns', 'gap', 'minItemWidth'],
        usage: 'Card grids, galleries',
        file: '/src/app/components/blocks/container/Grid.tsx',
      },
      {
        id: 'columns',
        name: 'Columns',
        icon: GridFour,
        description: 'WordPress Columns block',
        props: ['columns', 'isStackedOnMobile'],
        usage: 'Multi-column layouts',
        file: '/src/app/components/blocks/container/Columns.tsx',
      },
    ],
  },
];
