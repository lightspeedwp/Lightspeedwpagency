/**
 * Stats Icon Resolver
 *
 * Helper utility to map icon name strings to Phosphor Icon components.
 * Supports all commonly used Phosphor icons in the stats system.
 *
 * Usage:
 * ```typescript
 * import { resolveStatIcon } from './icon-resolver';
 *
 * const stat = { icon: 'Rocket', value: '250+', label: 'Sites migrated' };
 * const IconComponent = resolveStatIcon(stat.icon); // Returns Rocket component
 * ```
 *
 * @see /src/app/data/stats/types.ts
 */

import {
  // General
  Rocket,
  Lightning,
  Clock,
  Users,
  CheckCircle,
  CheckSquare,
  Star,
  Sparkle,
  ArrowRight,
  CaretRight,
  Circle,
  
  // Data & Infrastructure
  Database,
  Globe,
  CloudArrowUp,
  HardDrives,
  
  // Design & Development
  Palette,
  PaintBrush,
  Code,
  Cube,
  Swatches,
  FigmaLogo,
  Plug,
  Plugs,
  GitBranch,
  
  // Communication & Support
  ChatCircle,
  Headset,
  Handshake,
  Buildings,
  CalendarBlank,
  CalendarCheck,
  Timer,
  
  // Analytics & Performance
  ChartLine,
  ChartBar,
  ChartPie,
  TrendUp,
  TrendDown,
  Minus,
  
  // Documents & Files
  FolderOpen,
  File,
  FileText,
  FilePdf,
  FileDoc,
  DownloadSimple,
  UploadSimple,
  
  // Actions & Status
  Play,
  Pause,
  Stop,
  Hammer,
  Wrench,
  ShieldCheck,
  Warning,
  Info,
  
  // Finance
  CreditCard,
  CurrencyDollar,
  Receipt,
  
  // Search & Visibility
  MagnifyingGlass,
  Eye,
  Crosshair,
  Target,
  
  // AI & Automation
  Brain,
  Robot,
  Cpu,
  Circuitry,
  
  // Content
  Article,
  PenNib,
  Pencil,
  TextAlignLeft,
  
  // Misc
  ArrowsClockwise,
  Package,
  Tag,
  Flag,
  Trophy,
  Medal,
  type Icon,
} from '@phosphor-icons/react';

/**
 * Icon mapping registry
 * Maps lowercase icon name strings to Phosphor Icon components
 */
const iconMap: Record<string, Icon> = {
  // General
  rocket: Rocket,
  lightning: Lightning,
  clock: Clock,
  users: Users,
  checkcircle: CheckCircle,
  checksquare: CheckSquare,
  star: Star,
  sparkle: Sparkle,
  arrowright: ArrowRight,
  caretright: CaretRight,
  circle: Circle,
  
  // Data & Infrastructure
  database: Database,
  server: HardDrives,
  globe: Globe,
  cloudarrowup: CloudArrowUp,
  harddrives: HardDrives,
  
  // Design & Development
  palette: Palette,
  paintbrush: PaintBrush,
  code: Code,
  cube: Cube,
  swatches: Swatches,
  figmalogo: FigmaLogo,
  plugin: Plug,
  plugs: Plugs,
  gitbranch: GitBranch,
  
  // Communication & Support
  chatcircle: ChatCircle,
  headset: Headset,
  handshake: Handshake,
  buildings: Buildings,
  calendarblank: CalendarBlank,
  calendarcheck: CalendarCheck,
  timer: Timer,
  
  // Analytics & Performance
  chartline: ChartLine,
  chartbar: ChartBar,
  chartpie: ChartPie,
  trendup: TrendUp,
  trenddown: TrendDown,
  minus: Minus,
  
  // Documents & Files
  folderopen: FolderOpen,
  file: File,
  filetext: FileText,
  filepdf: FilePdf,
  filedoc: FileDoc,
  downloadsimple: DownloadSimple,
  uploadsimple: UploadSimple,
  
  // Actions & Status
  play: Play,
  pause: Pause,
  stop: Stop,
  hammer: Hammer,
  wrench: Wrench,
  shieldcheck: ShieldCheck,
  warning: Warning,
  info: Info,
  
  // Finance
  creditcard: CreditCard,
  currencydollar: CurrencyDollar,
  receipt: Receipt,
  
  // Search & Visibility
  magnifyingglass: MagnifyingGlass,
  eye: Eye,
  crosshair: Crosshair,
  target: Target,
  
  // AI & Automation
  brain: Brain,
  robot: Robot,
  cpu: Cpu,
  circuitboard: Circuitry,
  
  // Content
  article: Article,
  pennib: PenNib,
  pencil: Pencil,
  textalignleft: TextAlignLeft,
  
  // Misc
  arrowsclockwise: ArrowsClockwise,
  package: Package,
  tag: Tag,
  flag: Flag,
  trophy: Trophy,
  medal: Medal,
};

/**
 * Resolve icon string to Phosphor Icon component
 *
 * @param iconName - Icon name (case-insensitive, e.g., 'Rocket', 'rocket', 'ROCKET')
 * @returns Phosphor Icon component or undefined if not found
 *
 * @example
 * ```typescript
 * const RocketIcon = resolveStatIcon('Rocket');
 * if (RocketIcon) {
 *   return <RocketIcon size={24} weight="duotone" />;
 * }
 * ```
 */
export function resolveStatIcon(iconName?: string): Icon | undefined {
  if (!iconName) return undefined;
  
  // Normalize to lowercase and remove spaces/hyphens
  const normalizedName = iconName
    .toLowerCase()
    .replace(/[\s-_]/g, '');
  
  return iconMap[normalizedName];
}

/**
 * Check if an icon name is valid
 *
 * @param iconName - Icon name to validate
 * @returns true if icon exists in registry, false otherwise
 *
 * @example
 * ```typescript
 * if (isValidIcon('Rocket')) {
 *   console.log('Valid icon!');
 * }
 * ```
 */
export function isValidIcon(iconName?: string): boolean {
  if (!iconName) return false;
  return resolveStatIcon(iconName) !== undefined;
}

/**
 * Get all available icon names
 *
 * @returns Array of all registered icon names (original casing)
 *
 * @example
 * ```typescript
 * const allIcons = getAvailableIcons();
 * console.log(allIcons); // ['Rocket', 'Lightning', 'Clock', ...]
 * ```
 */
export function getAvailableIcons(): string[] {
  return Object.keys(iconMap).map((key) => {
    // Convert back to PascalCase for display
    return key.charAt(0).toUpperCase() + key.slice(1);
  });
}

/**
 * Resolve multiple icons at once
 *
 * @param iconNames - Array of icon names
 * @returns Map of icon name to Icon component (excluding invalid icons)
 *
 * @example
 * ```typescript
 * const icons = resolveMultipleIcons(['Rocket', 'Database', 'Invalid']);
 * // Returns: Map { 'Rocket' => RocketComponent, 'Database' => DatabaseComponent }
 * ```
 */
export function resolveMultipleIcons(iconNames: string[]): Map<string, Icon> {
  const resolved = new Map<string, Icon>();
  
  for (const name of iconNames) {
    const icon = resolveStatIcon(name);
    if (icon) {
      resolved.set(name, icon);
    }
  }
  
  return resolved;
}
