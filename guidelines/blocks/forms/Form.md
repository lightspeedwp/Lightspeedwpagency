# WordPress Block: Form Builder Components

**Block Name:** `lsx/form` (Collection)
**Category:** Forms
**Status:** ✅ Production Ready
**WordPress FSE:** Full compatibility
**Accessibility:** WCAG 2.1 AA compliant

---

## Overview

The **Form Builder components** provide a set of composable building blocks for creating accessible, styled forms. These components abstract the complexity of label association, error messaging, and accessibility attributes, ensuring all forms meet strict accessibility standards by default.

**Components:**
- `Form` (Provider)
- `FormField` (Controller)
- `FormItem` (Wrapper)
- `FormLabel` (Label)
- `FormControl` (Input Wrapper)
- `FormDescription` (Helper Text)
- `FormMessage` (Error Message)

---

## React Component

### Basic Usage

Designed to work with `react-hook-form` and `zod` schema validation.

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/app/components/blocks/design/Buttons"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/blocks/forms/Form"
import { Input } from "@/app/components/blocks/forms/Input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

---

## Component API

### FormField

Connects the form state to the UI components.

| Prop | Description |
|------|-------------|
| `control` | The `control` object from `useForm` |
| `name` | The name of the field (matches schema) |
| `render` | Render prop function receiving field props |

### FormItem

Wrapper `<div>` for a form field. Provides context for IDs.
- **Class:** `.wp-block-form-item`

### FormLabel

Accessible label element. Automatically associates with the input via ID.
- **Class:** `.wp-block-form-field__label`

### FormControl

Wrapper for the input element. Handles `aria-describedby` and `aria-invalid`.
- **Class:** (Uses `Slot` to merge props onto child)

### FormDescription

Helper text displayed below the input.
- **Class:** `.wp-block-form-field__message`

### FormMessage

Error message display. Automatically shows validation errors.
- **Class:** `.wp-block-form-field__message--error`

---

## Accessibility Requirements

The system automatically handles:
- ✅ **Label Association:** `htmlFor` matches input `id`.
- ✅ **Description Association:** `aria-describedby` links helper text and errors to input.
- ✅ **Error States:** `aria-invalid="true"` added when error exists.
- ✅ **Focus Management:** Focus moves to first error on submit (handled by react-hook-form).

---

## Styling System

### CSS Variables

All styling uses CSS variables from `/src/styles/theme-base.css`:

**Colors:**
```css
--foreground              /* Label color */
--muted-foreground        /* Description color */
--destructive             /* Error color */
--border                  /* Input border */
--input                   /* Input background */
--ring                    /* Focus ring color */
```

**Typography:**
```css
--font-primary            /* Label font */
--font-secondary          /* Input/Message font */
--text-small              /* Message size */
--font-weight-medium      /* Label weight */
```

**Spacing:**
```css
--spacing-2               /* Gap between label/input/message */
```

### CSS Classes

Styles are defined in `/src/styles/blocks/forms/form-field.css`.

```css
.wp-block-form-item
.wp-block-form-field__label
.wp-block-form-field__message
.wp-block-form-field__message--error
```

---

## Related Components

- **[Input](./Input.md)** — Text input component
- **[Select](./Select.md)** — Dropdown select component
- **[Checkbox](./Checkbox.md)** — Checkbox component
- **[RadioGroup](./RadioGroup.md)** — Radio button group
- **[Textarea](./Textarea.md)** — Multiline text input

---

## Resources

- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
- [WAI-ARIA Form Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/form/)
