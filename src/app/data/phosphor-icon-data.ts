/**
 * Phosphor Icon Reference — Data
 *
 * All icon mapping data for the Lucide → Phosphor migration reference page.
 *
 * Extracted from PhosphorIconReference.tsx for file size compliance.
 *
 * @see /src/app/components/templates/PhosphorIconReference.tsx
 */

import {
  ArrowRight, CaretRight, CaretDown, CaretLeft, CaretUp,
  ArrowLeft, ArrowSquareOut, House, Compass as CompassIcon, List as ListIcon,
  ArrowsDownUp,
  Check, CheckCircle, Warning, WarningCircle, X, XCircle, Info,
  Question, CheckSquare,
  Calendar, Clock, Users, User, FileText, Tag, BookOpen, Hash,
  Newspaper, FileCode, TextT, BookmarkSimple,
  Eye, MagnifyingGlass, Funnel, Copy, ArrowsClockwise, ShareNetwork,
  EyeSlash, SlidersHorizontal, GearSix, Plus, Minus,
  Lightning, Star, Trophy, Sparkle, Rocket, Lightbulb, Heart,
  ThumbsUp, Robot, Brain, FigmaLogo, Scales, Crosshair, Cursor,
  Play, VideoCamera, Images, Image, Camera, FilmStrip, Microphone,
  Headphones, SpeakerHigh, PlayCircle, Pause, SkipForward, SkipBack,
  TwitterLogo, LinkedinLogo, FacebookLogo, InstagramLogo, YoutubeLogo,
  Globe, TrendUp, ChartBar, ChartLine, ChartPie, CurrencyDollar,
  TrendDown, Database,
  Shield, Briefcase, Envelope, Phone, MapPin, PaperPlaneTilt,
  ChatCenteredDots, ChatCircle, Lock, ShieldCheck,
  Code, CodeBlock, Palette, Stack, Layout, Wrench, Package,
  PenNib, PencilSimple, Ruler, SquaresFour, Columns, Browser,
  Megaphone, DownloadSimple, UploadSimple, CloudArrowUp, SpinnerGap,
  ArrowCounterClockwise, ShoppingCart, Link, Selection,
  Ear, Wheelchair, Sun, Moon, DotsThree, Quotes, Keyboard,
  Circle, MagnifyingGlassMinus
} from '@phosphor-icons/react';
import type { IconWeight } from '@phosphor-icons/react';

export interface IconEntry {
  phosphorName: string;
  lucideName: string;
  component: React.ComponentType<{ size?: number; weight?: IconWeight; className?: string }>;
  category: string;
  usageCount: number;
}

export const ICON_DATA: IconEntry[] = [
  // Navigation
  { phosphorName: 'ArrowRight', lucideName: 'ArrowRight', component: ArrowRight, category: 'Navigation', usageCount: 42 },
  { phosphorName: 'CaretRight', lucideName: 'ChevronRight', component: CaretRight, category: 'Navigation', usageCount: 12 },
  { phosphorName: 'CaretDown', lucideName: 'ChevronDown', component: CaretDown, category: 'Navigation', usageCount: 10 },
  { phosphorName: 'CaretLeft', lucideName: 'ChevronLeft', component: CaretLeft, category: 'Navigation', usageCount: 6 },
  { phosphorName: 'CaretUp', lucideName: 'ChevronUp', component: CaretUp, category: 'Navigation', usageCount: 3 },
  { phosphorName: 'ArrowLeft', lucideName: 'ArrowLeft', component: ArrowLeft, category: 'Navigation', usageCount: 6 },
  { phosphorName: 'ArrowSquareOut', lucideName: 'ExternalLink', component: ArrowSquareOut, category: 'Navigation', usageCount: 10 },
  { phosphorName: 'House', lucideName: 'Home', component: House, category: 'Navigation', usageCount: 3 },
  { phosphorName: 'ListIcon', lucideName: 'Menu', component: ListIcon, category: 'Navigation', usageCount: 1 },
  { phosphorName: 'ArrowsDownUp', lucideName: 'ArrowUpDown', component: ArrowsDownUp, category: 'Navigation', usageCount: 2 },

  // Feedback & Status
  { phosphorName: 'Check', lucideName: 'Check', component: Check, category: 'Feedback', usageCount: 34 },
  { phosphorName: 'CheckCircle', lucideName: 'CheckCircle', component: CheckCircle, category: 'Feedback', usageCount: 17 },
  { phosphorName: 'Warning', lucideName: 'AlertTriangle', component: Warning, category: 'Feedback', usageCount: 10 },
  { phosphorName: 'WarningCircle', lucideName: 'AlertCircle', component: WarningCircle, category: 'Feedback', usageCount: 7 },
  { phosphorName: 'X', lucideName: 'X', component: X, category: 'Feedback', usageCount: 13 },
  { phosphorName: 'XCircle', lucideName: 'XCircle', component: XCircle, category: 'Feedback', usageCount: 3 },
  { phosphorName: 'Info', lucideName: 'Info', component: Info, category: 'Feedback', usageCount: 3 },
  { phosphorName: 'Question', lucideName: 'HelpCircle', component: Question, category: 'Feedback', usageCount: 1 },
  { phosphorName: 'CheckSquare', lucideName: 'CheckSquare', component: CheckSquare, category: 'Feedback', usageCount: 1 },

  // Content & Meta
  { phosphorName: 'Calendar', lucideName: 'Calendar', component: Calendar, category: 'Content', usageCount: 33 },
  { phosphorName: 'Clock', lucideName: 'Clock', component: Clock, category: 'Content', usageCount: 26 },
  { phosphorName: 'Users', lucideName: 'Users', component: Users, category: 'Content', usageCount: 14 },
  { phosphorName: 'User', lucideName: 'User', component: User, category: 'Content', usageCount: 10 },
  { phosphorName: 'FileText', lucideName: 'FileText', component: FileText, category: 'Content', usageCount: 9 },
  { phosphorName: 'Tag', lucideName: 'Tag', component: Tag, category: 'Content', usageCount: 6 },
  { phosphorName: 'BookOpen', lucideName: 'BookOpen', component: BookOpen, category: 'Content', usageCount: 6 },
  { phosphorName: 'Hash', lucideName: 'Hash', component: Hash, category: 'Content', usageCount: 3 },
  { phosphorName: 'Newspaper', lucideName: 'Newspaper', component: Newspaper, category: 'Content', usageCount: 1 },
  { phosphorName: 'FileCode', lucideName: 'FileCode', component: FileCode, category: 'Content', usageCount: 1 },
  { phosphorName: 'TextT', lucideName: 'Type', component: TextT, category: 'Content', usageCount: 3 },
  { phosphorName: 'BookmarkSimple', lucideName: 'Bookmark', component: BookmarkSimple, category: 'Content', usageCount: 1 },

  // UI Actions
  { phosphorName: 'Eye', lucideName: 'Eye', component: Eye, category: 'UI Actions', usageCount: 14 },
  { phosphorName: 'MagnifyingGlass', lucideName: 'Search', component: MagnifyingGlass, category: 'UI Actions', usageCount: 10 },
  { phosphorName: 'Funnel', lucideName: 'Filter', component: Funnel, category: 'UI Actions', usageCount: 5 },
  { phosphorName: 'Copy', lucideName: 'Copy', component: Copy, category: 'UI Actions', usageCount: 4 },
  { phosphorName: 'ArrowsClockwise', lucideName: 'RefreshCw', component: ArrowsClockwise, category: 'UI Actions', usageCount: 4 },
  { phosphorName: 'ShareNetwork', lucideName: 'Share2', component: ShareNetwork, category: 'UI Actions', usageCount: 5 },
  { phosphorName: 'EyeSlash', lucideName: 'EyeOff', component: EyeSlash, category: 'UI Actions', usageCount: 2 },
  { phosphorName: 'SlidersHorizontal', lucideName: 'SlidersHorizontal', component: SlidersHorizontal, category: 'UI Actions', usageCount: 2 },
  { phosphorName: 'GearSix', lucideName: 'Settings', component: GearSix, category: 'UI Actions', usageCount: 2 },
  { phosphorName: 'Plus', lucideName: 'Plus', component: Plus, category: 'UI Actions', usageCount: 1 },
  { phosphorName: 'Minus', lucideName: 'Minus', component: Minus, category: 'UI Actions', usageCount: 1 },
  { phosphorName: 'MagnifyingGlassMinus', lucideName: 'SearchX', component: MagnifyingGlassMinus, category: 'UI Actions', usageCount: 1 },

  // Decorative & Brand
  { phosphorName: 'Lightning', lucideName: 'Zap', component: Lightning, category: 'Decorative', usageCount: 13 },
  { phosphorName: 'Star', lucideName: 'Star', component: Star, category: 'Decorative', usageCount: 15 },
  { phosphorName: 'Trophy', lucideName: 'Award', component: Trophy, category: 'Decorative', usageCount: 11 },
  { phosphorName: 'Sparkle', lucideName: 'Sparkles', component: Sparkle, category: 'Decorative', usageCount: 8 },
  { phosphorName: 'Rocket', lucideName: 'Rocket', component: Rocket, category: 'Decorative', usageCount: 3 },
  { phosphorName: 'Lightbulb', lucideName: 'Lightbulb', component: Lightbulb, category: 'Decorative', usageCount: 3 },
  { phosphorName: 'Heart', lucideName: 'Heart', component: Heart, category: 'Decorative', usageCount: 1 },
  { phosphorName: 'ThumbsUp', lucideName: 'ThumbsUp', component: ThumbsUp, category: 'Decorative', usageCount: 1 },
  { phosphorName: 'Robot', lucideName: 'Bot', component: Robot, category: 'Decorative', usageCount: 1 },
  { phosphorName: 'Brain', lucideName: 'Brain', component: Brain, category: 'Decorative', usageCount: 2 },
  { phosphorName: 'Crosshair', lucideName: 'Target', component: Crosshair, category: 'Decorative', usageCount: 8 },
  { phosphorName: 'Cursor', lucideName: 'MousePointer', component: Cursor, category: 'Decorative', usageCount: 3 },
  { phosphorName: 'Scales', lucideName: 'Scale', component: Scales, category: 'Decorative', usageCount: 1 },

  // Media
  { phosphorName: 'Play', lucideName: 'Play', component: Play, category: 'Media', usageCount: 13 },
  { phosphorName: 'VideoCamera', lucideName: 'Video', component: VideoCamera, category: 'Media', usageCount: 5 },
  { phosphorName: 'Images', lucideName: 'Images', component: Images, category: 'Media', usageCount: 4 },
  { phosphorName: 'Image', lucideName: 'Image', component: Image, category: 'Media', usageCount: 2 },
  { phosphorName: 'Camera', lucideName: 'Camera', component: Camera, category: 'Media', usageCount: 3 },
  { phosphorName: 'FilmStrip', lucideName: 'Film', component: FilmStrip, category: 'Media', usageCount: 1 },
  { phosphorName: 'Microphone', lucideName: 'Mic', component: Microphone, category: 'Media', usageCount: 6 },
  { phosphorName: 'Headphones', lucideName: 'Headphones', component: Headphones, category: 'Media', usageCount: 3 },
  { phosphorName: 'SpeakerHigh', lucideName: 'Volume2', component: SpeakerHigh, category: 'Media', usageCount: 1 },
  { phosphorName: 'PlayCircle', lucideName: 'PlayCircle', component: PlayCircle, category: 'Media', usageCount: 1 },
  { phosphorName: 'Pause', lucideName: 'Pause', component: Pause, category: 'Media', usageCount: 1 },

  // Social Media
  { phosphorName: 'TwitterLogo', lucideName: 'Twitter', component: TwitterLogo, category: 'Social', usageCount: 4 },
  { phosphorName: 'LinkedinLogo', lucideName: 'Linkedin', component: LinkedinLogo, category: 'Social', usageCount: 4 },
  { phosphorName: 'FacebookLogo', lucideName: 'Facebook', component: FacebookLogo, category: 'Social', usageCount: 1 },
  { phosphorName: 'InstagramLogo', lucideName: 'Instagram', component: InstagramLogo, category: 'Social', usageCount: 1 },
  { phosphorName: 'YoutubeLogo', lucideName: 'Youtube', component: YoutubeLogo, category: 'Social', usageCount: 1 },
  { phosphorName: 'Globe', lucideName: 'Globe', component: Globe, category: 'Social', usageCount: 6 },
  { phosphorName: 'FigmaLogo', lucideName: 'Figma', component: FigmaLogo, category: 'Social', usageCount: 1 },

  // Data & Analytics
  { phosphorName: 'TrendUp', lucideName: 'TrendingUp', component: TrendUp, category: 'Data', usageCount: 13 },
  { phosphorName: 'ChartBar', lucideName: 'BarChart3', component: ChartBar, category: 'Data', usageCount: 5 },
  { phosphorName: 'ChartLine', lucideName: 'LineChart', component: ChartLine, category: 'Data', usageCount: 2 },
  { phosphorName: 'ChartPie', lucideName: 'PieChart', component: ChartPie, category: 'Data', usageCount: 1 },
  { phosphorName: 'CurrencyDollar', lucideName: 'DollarSign', component: CurrencyDollar, category: 'Data', usageCount: 2 },
  { phosphorName: 'TrendDown', lucideName: 'TrendingDown', component: TrendDown, category: 'Data', usageCount: 1 },
  { phosphorName: 'Database', lucideName: 'Database', component: Database, category: 'Data', usageCount: 2 },

  // Business
  { phosphorName: 'Shield', lucideName: 'Shield', component: Shield, category: 'Business', usageCount: 8 },
  { phosphorName: 'Briefcase', lucideName: 'Briefcase', component: Briefcase, category: 'Business', usageCount: 6 },
  { phosphorName: 'Envelope', lucideName: 'Mail', component: Envelope, category: 'Business', usageCount: 8 },
  { phosphorName: 'Phone', lucideName: 'Phone', component: Phone, category: 'Business', usageCount: 3 },
  { phosphorName: 'MapPin', lucideName: 'MapPin', component: MapPin, category: 'Business', usageCount: 5 },
  { phosphorName: 'PaperPlaneTilt', lucideName: 'Send', component: PaperPlaneTilt, category: 'Business', usageCount: 2 },
  { phosphorName: 'ChatCenteredDots', lucideName: 'MessageSquare', component: ChatCenteredDots, category: 'Business', usageCount: 7 },
  { phosphorName: 'ChatCircle', lucideName: 'MessageCircle', component: ChatCircle, category: 'Business', usageCount: 2 },
  { phosphorName: 'Lock', lucideName: 'Lock', component: Lock, category: 'Business', usageCount: 1 },
  { phosphorName: 'ShieldCheck', lucideName: 'ShieldCheck', component: ShieldCheck, category: 'Business', usageCount: 2 },

  // Development & Tools
  { phosphorName: 'Code', lucideName: 'Code', component: Code, category: 'Dev Tools', usageCount: 5 },
  { phosphorName: 'CodeBlock', lucideName: 'Code2', component: CodeBlock, category: 'Dev Tools', usageCount: 1 },
  { phosphorName: 'Palette', lucideName: 'Palette', component: Palette, category: 'Dev Tools', usageCount: 5 },
  { phosphorName: 'Stack', lucideName: 'Layers', component: Stack, category: 'Dev Tools', usageCount: 7 },
  { phosphorName: 'Layout', lucideName: 'Layout', component: Layout, category: 'Dev Tools', usageCount: 3 },
  { phosphorName: 'Wrench', lucideName: 'Wrench', component: Wrench, category: 'Dev Tools', usageCount: 2 },
  { phosphorName: 'Package', lucideName: 'Package', component: Package, category: 'Dev Tools', usageCount: 2 },
  { phosphorName: 'PenNib', lucideName: 'PenTool', component: PenNib, category: 'Dev Tools', usageCount: 3 },
  { phosphorName: 'PencilSimple', lucideName: 'Edit3', component: PencilSimple, category: 'Dev Tools', usageCount: 1 },
  { phosphorName: 'Ruler', lucideName: 'Ruler', component: Ruler, category: 'Dev Tools', usageCount: 2 },
  { phosphorName: 'SquaresFour', lucideName: 'LayoutGrid', component: SquaresFour, category: 'Dev Tools', usageCount: 1 },
  { phosphorName: 'Columns', lucideName: 'Columns2', component: Columns, category: 'Dev Tools', usageCount: 1 },
  { phosphorName: 'Browser', lucideName: 'PanelTop', component: Browser, category: 'Dev Tools', usageCount: 1 },

  // Misc
  { phosphorName: 'Megaphone', lucideName: 'Megaphone', component: Megaphone, category: 'Misc', usageCount: 1 },
  { phosphorName: 'DownloadSimple', lucideName: 'Download', component: DownloadSimple, category: 'Misc', usageCount: 1 },
  { phosphorName: 'UploadSimple', lucideName: 'Upload', component: UploadSimple, category: 'Misc', usageCount: 1 },
  { phosphorName: 'CloudArrowUp', lucideName: 'CloudUpload', component: CloudArrowUp, category: 'Misc', usageCount: 1 },
  { phosphorName: 'SpinnerGap', lucideName: 'Loader2', component: SpinnerGap, category: 'Misc', usageCount: 1 },
  { phosphorName: 'ArrowCounterClockwise', lucideName: 'RotateCcw', component: ArrowCounterClockwise, category: 'Misc', usageCount: 1 },
  { phosphorName: 'ShoppingCart', lucideName: 'ShoppingCart', component: ShoppingCart, category: 'Misc', usageCount: 3 },
  { phosphorName: 'Link', lucideName: 'Link', component: Link, category: 'Misc', usageCount: 2 },
  { phosphorName: 'Selection', lucideName: 'BoxSelect', component: Selection, category: 'Misc', usageCount: 1 },
  { phosphorName: 'Ear', lucideName: 'Ear', component: Ear, category: 'Misc', usageCount: 1 },
  { phosphorName: 'Wheelchair', lucideName: 'Accessibility', component: Wheelchair, category: 'Misc', usageCount: 1 },
  { phosphorName: 'Sun', lucideName: 'Sun', component: Sun, category: 'Misc', usageCount: 1 },
  { phosphorName: 'Moon', lucideName: 'Moon', component: Moon, category: 'Misc', usageCount: 1 },
  { phosphorName: 'DotsThree', lucideName: 'MoreHorizontal', component: DotsThree, category: 'Misc', usageCount: 3 },
  { phosphorName: 'Quotes', lucideName: 'Quote', component: Quotes, category: 'Misc', usageCount: 7 },
  { phosphorName: 'Keyboard', lucideName: 'Keyboard', component: Keyboard, category: 'Misc', usageCount: 3 },
  { phosphorName: 'Circle', lucideName: 'Circle', component: Circle, category: 'Misc', usageCount: 2 },
  { phosphorName: 'CompassIcon', lucideName: 'Navigation', component: CompassIcon, category: 'Misc', usageCount: 1 },
];

export const WEIGHTS: IconWeight[] = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

export const SAMPLE_ICONS_FOR_COMPARISON = [
  { name: 'ArrowRight', component: ArrowRight },
  { name: 'Check', component: Check },
  { name: 'Star', component: Star },
  { name: 'Lightning', component: Lightning },
  { name: 'Envelope', component: Envelope },
  { name: 'Calendar', component: Calendar },
  { name: 'Shield', component: Shield },
  { name: 'Rocket', component: Rocket },
];
