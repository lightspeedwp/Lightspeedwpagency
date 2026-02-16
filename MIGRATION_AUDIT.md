# Shadcn UI to WordPress Blocks Audit Report

## 1. Files to Delete Immediately
These components have direct replacements in `/src/app/components/blocks/` or are redundant.

- `src/app/components/ui/accordion.tsx` -> Replaced by `blocks/design/Accordion.tsx`
- `src/app/components/ui/alert.tsx` -> Replaced by `blocks/feedback/Alert.tsx`
- `src/app/components/ui/badge.tsx` -> Replaced by `blocks/design/Badge.tsx`
- `src/app/components/ui/breadcrumbs.tsx` -> Replaced by `blocks/navigation/Breadcrumbs.tsx`
- `src/app/components/ui/pagination.tsx` -> Replaced by `blocks/navigation/Pagination.tsx`
- `src/app/components/ui/separator.tsx` -> Replaced by `blocks/design/Separator.tsx`
- `src/app/components/ui/skeleton.tsx` -> Replaced by `blocks/feedback/SkeletonLoader.tsx`
- `src/app/components/ui/toast.tsx` -> Replaced by `blocks/feedback/ToastSystem.tsx`
- `src/app/components/ui/ContactForm.tsx` -> Replaced by `blocks/forms/ContactForm.tsx`
- `src/app/components/ui/FormField.tsx` -> Replaced by `blocks/forms/FormField.tsx`

## 2. Forms Batch (Migrate & Replace)
These components form the core form system and need strict WordPress block alignment.

- `src/app/components/ui/input.tsx` -> `src/app/components/blocks/forms/Input.tsx`
- `src/app/components/ui/textarea.tsx` -> `src/app/components/blocks/forms/Textarea.tsx`
- `src/app/components/ui/label.tsx` -> `src/app/components/blocks/forms/Label.tsx`
- `src/app/components/ui/select.tsx` -> `src/app/components/blocks/forms/Select.tsx`
- `src/app/components/ui/checkbox.tsx` -> `src/app/components/blocks/forms/Checkbox.tsx`
- `src/app/components/ui/radio-group.tsx` -> `src/app/components/blocks/forms/RadioGroup.tsx`
- `src/app/components/ui/switch.tsx` -> `src/app/components/blocks/forms/Switch.tsx`
- `src/app/components/ui/form.tsx` -> `src/app/components/blocks/forms/Form.tsx`

## 3. Feedback & Overlay Batch (Next Priority)
- `dialog.tsx` -> `blocks/feedback/Modal.tsx`
- `sheet.tsx` -> `blocks/layout/OffCanvas.tsx`
- `popover.tsx` -> `blocks/utility/Popover.tsx`
- `tooltip.tsx` -> `blocks/utility/Tooltip.tsx`
- `dropdown-menu.tsx` -> `blocks/utility/DropdownMenu.tsx`

## 4. Keep (Temporary / Complex)
These require significant refactoring and should be handled in later batches.
- `Calendar.tsx`
- `Carousel.tsx`
- `Chart.tsx`
- `Command.tsx`
- `ContextMenu.tsx`
- `DataTable.tsx`
- `Drawer.tsx`
- `Menubar.tsx`
- `NavigationMenu.tsx`
- `Resizable.tsx`
- `ScrollArea.tsx`
- `Slider.tsx`
- `Sonner.tsx` (Toast provider)
- `Table.tsx` (Data table primitives)
- `Tabs.tsx` (Complex state)
