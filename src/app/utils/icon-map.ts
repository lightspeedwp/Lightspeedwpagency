/**
 * Icon Mapping Utility — Lucide to Phosphor
 *
 * Provides a complete mapping between Lucide React icon names and their
 * Phosphor Icons equivalents. Used during the parallel operation period
 * to support both libraries simultaneously.
 *
 * @see /guidelines/design-tokens/iconography.md
 * @see /reports/2026-03/phosphor-icon-audit.md
 */

import type { LucideIcon } from 'lucide-react';
import type { IconWeight } from '@phosphor-icons/react';

// ============================================
// TYPE DEFINITIONS
// ============================================

/**
 * Phosphor icon component type.
 * Matches the signature of Phosphor's exported icon components.
 */
export type PhosphorIconComponent = React.ComponentType<{
  size?: number | string;
  weight?: IconWeight;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
  mirrored?: boolean;
}>;

/**
 * Universal icon component type — accepts either Lucide or Phosphor icons.
 * Use this in component props that need to support both libraries.
 *
 * @example
 * interface FeatureCardProps {
 *   icon: UniversalIcon;
 *   title: string;
 * }
 */
export type UniversalIcon = LucideIcon | PhosphorIconComponent;

/**
 * Icon weight recommendation for different UI contexts.
 */
export type IconContext =
  | 'navigation'
  | 'cta'
  | 'feedback'
  | 'content-meta'
  | 'hero-decorative'
  | 'feature-card'
  | 'social-media'
  | 'data-chart'
  | 'active-state'
  | 'inactive-state'
  | 'icon-button';

// ============================================
// LUCIDE -> PHOSPHOR NAME MAPPING
// ============================================

/**
 * Complete mapping of Lucide icon names to Phosphor icon names.
 * Keys are Lucide names, values are Phosphor names.
 */
export const LUCIDE_TO_PHOSPHOR: Record<string, string> = {
  // Navigation
  ArrowRight: 'ArrowRight',
  ArrowLeft: 'ArrowLeft',
  ChevronRight: 'CaretRight',
  ChevronLeft: 'CaretLeft',
  ChevronDown: 'CaretDown',
  ChevronUp: 'CaretUp',
  ExternalLink: 'ArrowSquareOut',
  Home: 'House',
  Menu: 'List',
  ArrowUpDown: 'ArrowsDownUp',
  Navigation: 'Compass',

  // Feedback & Status
  Check: 'Check',
  CheckCircle: 'CheckCircle',
  CheckCircle2: 'CheckCircle',
  AlertTriangle: 'Warning',
  AlertCircle: 'WarningCircle',
  X: 'X',
  XCircle: 'XCircle',
  Info: 'Info',
  HelpCircle: 'Question',
  CheckSquare: 'CheckSquare',

  // Content & Meta
  Calendar: 'Calendar',
  Clock: 'Clock',
  Users: 'Users',
  User: 'User',
  FileText: 'FileText',
  Tag: 'Tag',
  BookOpen: 'BookOpen',
  Hash: 'Hash',
  Newspaper: 'Newspaper',
  FileCheck: 'FileText', // FileCheck doesn't exist in Phosphor, use FileText
  FileSearch: 'FileMagnifyingGlass',
  FileCode: 'FileCode',
  Type: 'TextT',
  Bookmark: 'BookmarkSimple',

  // UI Actions
  Eye: 'Eye',
  EyeOff: 'EyeSlash',
  Search: 'MagnifyingGlass',
  SearchX: 'MagnifyingGlassMinus',
  Filter: 'Funnel',
  Copy: 'Copy',
  RefreshCw: 'ArrowsClockwise',
  Share2: 'ShareNetwork',
  SlidersHorizontal: 'SlidersHorizontal',
  Settings: 'GearSix',
  Plus: 'Plus',
  Minus: 'Minus',

  // Decorative & Brand
  Zap: 'Lightning',
  Star: 'Star',
  Award: 'Trophy', // Award doesn't exist in Phosphor, use Trophy
  Sparkles: 'Sparkle',
  Rocket: 'Rocket',
  Lightbulb: 'Lightbulb',
  Heart: 'Heart',
  ThumbsUp: 'ThumbsUp',
  Bot: 'Robot',
  Brain: 'Brain',
  Figma: 'FigmaLogo',
  Compass: 'Compass',
  Scale: 'Scales',
  Target: 'Crosshair',
  MousePointer: 'Cursor',

  // Media
  Play: 'Play',
  Pause: 'Pause',
  PlayCircle: 'PlayCircle',
  Video: 'VideoCamera',
  Images: 'Images',
  Image: 'Image',
  Camera: 'Camera',
  Film: 'FilmStrip',
  Mic: 'Microphone',
  Headphones: 'Headphones',
  Volume2: 'SpeakerHigh',
  SkipForward: 'SkipForward',
  SkipBack: 'SkipBack',

  // Social Media
  Twitter: 'TwitterLogo',
  Linkedin: 'LinkedinLogo',
  Facebook: 'FacebookLogo',
  Instagram: 'InstagramLogo',
  Youtube: 'YoutubeLogo',
  Globe: 'Globe',

  // Data & Analytics
  TrendingUp: 'TrendUp',
  TrendingDown: 'TrendDown',
  BarChart3: 'ChartBar',
  BarChart: 'ChartBar',
  LineChart: 'ChartLine',
  PieChart: 'ChartPie',
  DollarSign: 'CurrencyDollar',
  Database: 'Database',
  Server: 'HardDrives', // Server doesn't exist in Phosphor, use HardDrives

  // Business & Professional
  Shield: 'Shield',
  ShieldCheck: 'ShieldCheck',
  Briefcase: 'Briefcase',
  Mail: 'Envelope',
  Phone: 'Phone',
  MapPin: 'MapPin',
  Send: 'PaperPlaneTilt',
  MessageSquare: 'ChatSquare',
  MessageCircle: 'ChatCircle',
  Lock: 'Lock',

  // Development & Tools
  Code: 'Code',
  Code2: 'CodeBlock',
  Palette: 'Palette',
  Layers: 'Stack',
  Layout: 'Layout',
  Wrench: 'Wrench',
  Package: 'Package',
  PenTool: 'PenNib',
  Edit3: 'PencilSimple',
  Ruler: 'Ruler',
  RulerIcon: 'Ruler',
  LayoutGrid: 'SquaresFour',
  Columns2: 'Columns',
  PanelTop: 'Browser',
  PanelBottom: 'Dock',

  // Miscellaneous
  Megaphone: 'Megaphone',
  Download: 'DownloadSimple',
  Upload: 'UploadSimple',
  CloudUpload: 'CloudArrowUp',
  Loader2: 'SpinnerGap',
  RotateCcw: 'ArrowCounterClockwise',
  ShoppingCart: 'ShoppingCart',
  Link: 'Link',
  LinkIcon: 'Link',
  BoxSelect: 'Selection',
  Ear: 'Ear',
  Accessibility: 'Wheelchair',
  Sun: 'Sun',
  Moon: 'Moon',
  MoreHorizontal: 'DotsThree',
  Quote: 'Quotes',
  Keyboard: 'Keyboard',
  List: 'List',
  Circle: 'Circle',
};

// ============================================
// WEIGHT RECOMMENDATIONS
// ============================================

/**
 * Recommended Phosphor weight for each UI context.
 * Use this to ensure consistent icon weight across the app.
 */
export const CONTEXT_WEIGHT: Record<IconContext, IconWeight> = {
  navigation: 'regular',
  cta: 'bold',
  feedback: 'fill',
  'content-meta': 'regular',
  'hero-decorative': 'duotone',
  'feature-card': 'duotone',
  'social-media': 'fill',
  'data-chart': 'regular',
  'active-state': 'fill',
  'inactive-state': 'regular',
  'icon-button': 'bold',
};

/**
 * Get the recommended Phosphor weight for a UI context.
 */
export function getWeight(context: IconContext): IconWeight {
  return CONTEXT_WEIGHT[context];
}

/**
 * Get the Phosphor icon name for a Lucide icon name.
 * Returns the Lucide name unchanged if no mapping exists.
 */
export function getPhosphorName(lucideName: string): string {
  return LUCIDE_TO_PHOSPHOR[lucideName] ?? lucideName;
}

// ============================================
// SIZE TOKENS (matching CSS variables)
// ============================================

/**
 * Icon size constants matching the CSS variable --icon-size-* tokens.
 * Use these for consistent sizing across components.
 */
export const ICON_SIZES = {
  xs: 14,
  sm: 16,
  md: 20,
  base: 24,
  lg: 28,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
} as const;

export type IconSize = keyof typeof ICON_SIZES;

/**
 * Get the numeric pixel size for a named icon size.
 */
export function getIconSize(size: IconSize): number {
  return ICON_SIZES[size];
}