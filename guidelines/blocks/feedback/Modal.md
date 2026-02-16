# Modal Block (Dialog)

**WordPress Block:** `lsx-design/modal`  
**Category:** Feedback  
**Status:** ✅ Production  
**Version:** 1.0  
**Created:** 2025-02-03

---

## 📋 Overview

The Modal component (also known as Dialog) is a window overlaid on either the primary window or another dialog window, rendering the content underneath inert. It captures focus and requires user interaction to close or confirm.

**Common Use Cases:**
- Confirming critical actions (delete, reset)
- Displaying forms without leaving the context
- Showing detailed information
- Alert dialogs requiring acknowledgment

---

## 🎨 Design System

### Typography
- **Title:** `var(--font-primary)` (Lexend), `var(--text-lg)`, `font-weight: 600`
- **Description:** `var(--font-primary)`, `var(--text-sm)`, `color: var(--muted-foreground)`

### Colors
- **Overlay:** Black with 50% opacity (`rgb(0 0 0 / 0.5)`) and blur backdrop
- **Content Background:** `var(--background)`
- **Text:** `var(--foreground)`
- **Border:** `var(--border)`

### Spacing
- **Padding:** `var(--spacing-6)`
- **Gap:** `var(--spacing-4)`

### Animation
- **Enter:** Fade in + Zoom in
- **Exit:** Fade out + Zoom out

---

## 💻 Usage

### Basic Import

```tsx
import { 
  Modal, 
  ModalTrigger, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription,
  ModalFooter
} from '@/app/components/blocks/feedback/Modal';
import { Button } from '@/app/components/blocks/design/Buttons';

// In your component
<Modal>
  <ModalTrigger asChild>
    <Button variant="outline">Open Modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Edit Profile</ModalTitle>
      <ModalDescription>
        Make changes to your profile here. Click save when you're done.
      </ModalDescription>
    </ModalHeader>
    
    <div>
      {/* Form content */}
    </div>
    
    <ModalFooter>
      <Button type="submit">Save changes</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

---

## 📊 Props

The Modal component is built on top of [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog), and supports all standard Radix props.

| Component | Description |
|-----------|-------------|
| `Modal` | The root component that contains the open state. |
| `ModalTrigger` | The button that opens the modal. Use `asChild` to compose with custom buttons. |
| `ModalContent` | The component that contains content to be rendered in the open modal. |
| `ModalHeader` | Header section for title and description. |
| `ModalTitle` | An accessible title to be announced when the modal is opened. |
| `ModalDescription` | An accessible description to be announced when the modal is opened. |
| `ModalFooter` | Footer section for actions (e.g., Save, Cancel). |
| `ModalOverlay` | The layer that covers the inert portion of the view when the modal is open. |

---

## 🎨 Styling

### CSS Implementation

```css
/* Overlay */
.wp-block-modal-overlay {
  background-color: rgb(0 0 0 / 0.5);
  backdrop-filter: blur(4px);
}

/* Content */
.wp-block-modal-content {
  background-color: var(--background);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  gap: var(--spacing-4);
  max-width: 32rem;
  box-shadow: var(--shadow-lg);
}
```

See `/src/styles/blocks/feedback/modal.css` for full styles.

---

## 🧪 Accessibility

- ✅ **Focus Management:** Focus is trapped within the modal when open.
- ✅ **Screen Readers:** Uses `dialog` role, `aria-labelledby`, and `aria-describedby`.
- ✅ **Keyboard Navigation:** Escape key closes the modal.
- ✅ **Inert Background:** Content outside the modal is hidden from assistive technology.

---

## 🚀 Design System Tokens Used

### Typography
- `var(--font-primary)`
- `var(--text-lg)`
- `var(--text-sm)`

### Colors
- `var(--background)`
- `var(--foreground)`
- `var(--border)`
- `var(--muted-foreground)`

### Spacing
- `var(--spacing-6)`
- `var(--spacing-4)`
- `var(--spacing-2)`

---

**File Location:** `/src/app/components/blocks/feedback/Modal.tsx`
