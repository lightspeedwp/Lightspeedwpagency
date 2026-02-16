# Files to Delete

The following files have been identified as unnecessary following the LightSpeed Design System refactor and should be deleted:

## Block Components (Migrated)
- `/src/app/components/blocks/design/Buttons.tsx` (Migrated to `/src/app/components/blocks/Button.tsx`)

## Legacy UI Proxies (Ready for Deletion)
These files have been updated to re-export the new Block components. They can be deleted once you verify all imports in the codebase have been updated to point to the new locations.

- `/src/app/components/ui/alert.tsx` (Proxies `blocks/design/Alert`)
- `/src/app/components/ui/badge.tsx` (Proxies `blocks/design/Badge`)
- `/src/app/components/ui/button.tsx` (Proxies `blocks/Button`)
- `/src/app/components/ui/card.tsx` (Proxies `blocks/design/Card`)
- `/src/app/components/ui/dialog.tsx` (Proxies `blocks/feedback/Modal`)
- `/src/app/components/ui/popover.tsx` (Proxies `blocks/utility/Popover`)
- `/src/app/components/ui/scroll-area.tsx` (Proxies `blocks/utility/ScrollArea`)
- `/src/app/components/ui/separator.tsx` (Proxies `blocks/design/Separator`)
- `/src/app/components/ui/sheet.tsx` (Proxies `blocks/layout/OffCanvas`)
- `/src/app/components/ui/skeleton.tsx` (Proxies `blocks/design/Skeleton`)
- `/src/app/components/ui/tabs.tsx` (Proxies `blocks/navigation/Tabs`)
- `/src/app/components/ui/input.tsx` (Proxies `blocks/forms/Input`)
- `/src/app/components/ui/textarea.tsx` (Proxies `blocks/forms/Textarea`)
- `/src/app/components/ui/label.tsx` (Proxies `blocks/forms/Label`)
- `/src/app/components/ui/checkbox.tsx` (Proxies `blocks/forms/Checkbox`)
- `/src/app/components/ui/switch.tsx` (Proxies `blocks/forms/Switch`)
- `/src/app/components/ui/radio-group.tsx` (Proxies `blocks/forms/RadioGroup`)
- `/src/app/components/ui/select.tsx` (Proxies `blocks/forms/Select`)
- `/src/app/components/ui/avatar.tsx` (Proxies `blocks/media/Avatar`)
- `/src/app/components/ui/table.tsx` (Proxies `blocks/text/Table`)
- `/src/app/components/ui/dropdown-menu.tsx` (Proxies `blocks/utility/DropdownMenu`)
- `/src/app/components/ui/tooltip.tsx` (Proxies `blocks/utility/Tooltip`)
- `/src/app/components/ui/alert-dialog.tsx` (Proxies `blocks/feedback/AlertDialog`)
- `/src/app/components/ui/progress.tsx` (Proxies `blocks/feedback/Progress`)
- `/src/app/components/ui/slider.tsx` (Proxies `blocks/forms/Slider`)
- `/src/app/components/ui/toggle.tsx` (Proxies `blocks/forms/Toggle`)
- `/src/app/components/ui/toggle-group.tsx` (Proxies `blocks/forms/ToggleGroup`)
- `/src/app/components/ui/aspect-ratio.tsx` (Proxies `blocks/utility/AspectRatio`)
- `/src/app/components/ui/command.tsx` (Proxies `blocks/utility/Command`)
- `/src/app/components/ui/hover-card.tsx` (Proxies `blocks/feedback/HoverCard`)
- `/src/app/components/ui/collapsible.tsx` (Proxies `blocks/design/Collapsible`)
- `/src/app/components/ui/resizable.tsx` (Proxies `blocks/layout/Resizable`)
- `/src/app/components/ui/calendar.tsx` (Proxies `blocks/forms/Calendar`)
- `/src/app/components/ui/carousel.tsx` (Proxies `blocks/media/Carousel`)
- `/src/app/components/ui/chart.tsx` (Proxies `blocks/data-display/Chart`)
- `/src/app/components/ui/drawer.tsx` (Proxies `blocks/layout/Drawer`)
- `/src/app/components/ui/menubar.tsx` (Proxies `blocks/navigation/Menubar`)
- `/src/app/components/ui/navigation-menu.tsx` (Proxies `blocks/navigation/NavigationMenu`)
- `/src/app/components/ui/context-menu.tsx` (Proxies `blocks/utility/ContextMenu`)

## Legacy UI Components (Requires Manual Migration)
These components have complex API changes and cannot be simply proxied. Usages must be manually refactored to use the new Block components.

- `/src/app/components/ui/breadcrumb.tsx` -> Use `blocks/theme/Breadcrumbs` (Array-based API)
- `/src/app/components/ui/pagination.tsx` -> Use `blocks/theme/Pagination` (Simplified API)
- `/src/app/components/ui/accordion.tsx` -> Use `blocks/design/Accordion` (Check API match)
- `/src/app/components/ui/form.tsx` -> Complex React Hook Form wrapper. Consider replacing with raw `react-hook-form` usage or keeping as a utility adapter.
- `/src/app/components/ui/toast.tsx` -> Use `sonner` directly or create `blocks/feedback/Toast`

## CSS Files
- Any CSS files found within `/src/app/components/` should be deleted (CSS has been centralized in `/src/styles/`).
