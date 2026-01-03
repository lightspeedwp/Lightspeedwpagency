# 📝 **STORYBOOK STORY TEMPLATE GUIDE**

**Use this template to create stories for all LSX Design components**

---

## 📋 **BASIC STORY TEMPLATE**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

/**
 * Component Description
 * 
 * Detailed description of what this component does and when to use it.
 * 
 * ## Design System Compliance
 * - Uses CSS variables for all colors
 * - Uses Lexend for headings/labels
 * - Uses Manrope for body text
 * - WCAG 2.1 AA compliant
 */
const meta = {
  title: 'Category/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered', // or 'fullscreen', 'padded'
    docs: {
      description: {
        component: 'Short description for auto-generated docs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    propName: {
      control: 'text', // or 'select', 'boolean', 'number', etc.
      description: 'Prop description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    // Add more props...
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story
 */
export const Default: Story = {
  args: {
    // Default props
  },
};

/**
 * Variant story
 */
export const Variant: Story = {
  args: {
    // Variant props
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Showcase all variants */}
    </div>
  ),
};
```

---

## 🎯 **STORY CATEGORIES**

Use these category names to match WordPress block structure:

```typescript
// Design Blocks
title: 'Design Blocks/Button'
title: 'Design Blocks/Group'
title: 'Design Blocks/Grid'
title: 'Design Blocks/Stack'

// Theme Blocks
title: 'Theme Blocks/Site Logo'
title: 'Theme Blocks/Navigation'

// Forms
title: 'Forms/Form Fields'
title: 'Forms/Contact Form'

// Utility
title: 'Utility/Badge'
title: 'Utility/Tooltip'

// Navigation
title: 'Navigation/Breadcrumbs'
title: 'Navigation/Tabs'

// Data Display
title: 'Data Display/Table'

// E-commerce
title: 'E-commerce/Product Card'

// Feedback
title: 'Feedback/Alert'
title: 'Feedback/Toast'

// Layout
title: 'Layout/Skeleton'

// Media
title: 'Media/Optimized Image'
```

---

## 🎨 **CONTROL TYPES**

### **Text Input:**

```typescript
argTypes: {
  label: {
    control: 'text',
    description: 'Button label',
  },
}
```

### **Select Dropdown:**

```typescript
argTypes: {
  variant: {
    control: 'select',
    options: ['default', 'outline', 'ghost'],
    description: 'Visual style variant',
  },
}
```

### **Boolean Toggle:**

```typescript
argTypes: {
  disabled: {
    control: 'boolean',
    description: 'Disabled state',
  },
}
```

### **Number Slider:**

```typescript
argTypes: {
  count: {
    control: { type: 'number', min: 0, max: 100, step: 1 },
    description: 'Item count',
  },
}
```

### **Radio Buttons:**

```typescript
argTypes: {
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg'],
    description: 'Component size',
  },
}
```

### **Color Picker:**

```typescript
argTypes: {
  backgroundColor: {
    control: 'color',
    description: 'Background color',
  },
}
```

### **Action Handler:**

```typescript
argTypes: {
  onClick: {
    action: 'clicked',
    description: 'Click handler',
  },
}
```

---

## 📖 **STORY DESCRIPTIONS**

### **Component-Level Description:**

```typescript
const meta = {
  title: 'Forms/Input Field',
  component: InputField,
  parameters: {
    docs: {
      description: {
        component: `
Advanced input field with validation states, character counters,
and accessibility features. Perfect for forms and user input.

## Features
- Error/success/warning states
- Character counter
- Prefix/suffix icons
- Helper text
- WCAG 2.1 AA compliant
        `,
      },
    },
  },
};
```

### **Story-Level Description:**

```typescript
export const WithError: Story = {
  args: {
    error: 'Email is invalid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field showing an error state with validation message.',
      },
    },
  },
};
```

---

## 🎭 **INTERACTIVE STORIES**

### **With State (useState):**

```typescript
import { useState } from 'react';

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <InputField
        id="interactive"
        label="Email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
```

### **With Form Submission:**

```typescript
export const CompleteForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Submitted: ${JSON.stringify(formData)}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <InputField
          id="name"
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    );
  },
};
```

---

## 🎨 **LAYOUT OPTIONS**

### **Centered (Default for small components):**

```typescript
parameters: {
  layout: 'centered',
}
```

### **Fullscreen (For full-width components):**

```typescript
parameters: {
  layout: 'fullscreen',
}
```

### **Padded (With padding around component):**

```typescript
parameters: {
  layout: 'padded',
}
```

---

## 🌈 **DESIGN SYSTEM STYLES**

### **Use CSS Variables:**

```typescript
<div style={{
  backgroundColor: 'var(--background)',
  color: 'var(--foreground)',
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-base)',
  padding: '1rem',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--border)',
}}>
  Content
</div>
```

### **Typography:**

```typescript
// Headings (Lexend)
<h3 style={{
  fontFamily: 'Lexend, sans-serif',
  fontSize: 'var(--text-h3)',
  fontWeight: '500',
}}>
  Heading
</h3>

// Body text (Manrope)
<p style={{
  fontFamily: 'Manrope, sans-serif',
  fontSize: 'var(--text-base)',
}}>
  Body text
</p>
```

---

## 📊 **SHOWCASE PATTERNS**

### **All Variants in Grid:**

```typescript
export const AllVariants: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1rem',
    }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  ),
};
```

### **All Sizes:**

```typescript
export const AllSizes: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
```

### **Side-by-Side Comparison:**

```typescript
export const Comparison: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      gap: '2rem',
    }}>
      <div>
        <h4>Light Theme</h4>
        <ComponentName />
      </div>
      <div>
        <h4>Dark Theme</h4>
        <ComponentName />
      </div>
    </div>
  ),
};
```

---

## 🧪 **TESTING EXAMPLES**

### **Interaction Testing:**

```typescript
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Click button
    await userEvent.click(canvas.getByRole('button'));
    
    // Assert result
    await expect(canvas.getByText('Clicked')).toBeInTheDocument();
  },
};
```

---

## ✅ **STORY CHECKLIST**

Before committing a story file:

- [ ] Component description added
- [ ] All props have controls
- [ ] Default story exists
- [ ] All variants showcased
- [ ] CSS variables used (no hard-coded colors)
- [ ] Proper fonts used (Lexend/Manrope)
- [ ] Accessibility tested (a11y addon)
- [ ] Works in both light/dark themes
- [ ] Interactive examples included
- [ ] Documentation is clear

---

## 🚀 **QUICK START**

### **1. Copy Template:**

Copy the basic template to your component folder:

```bash
ComponentName.stories.tsx
```

### **2. Update Imports:**

```typescript
import { ComponentName } from './ComponentName';
```

### **3. Update Metadata:**

```typescript
const meta = {
  title: 'Category/ComponentName',
  component: ComponentName,
  // ...
};
```

### **4. Add Stories:**

```typescript
export const Default: Story = {
  args: { /* props */ },
};
```

### **5. Test:**

```bash
npm run storybook
```

---

## 📚 **EXAMPLES**

See these complete examples:

1. **Button:** `/src/app/components/blocks/design/Button.stories.tsx`
2. **Form Fields:** `/src/app/components/blocks/forms/FormField.stories.tsx`
3. **Badge:** `/src/app/components/blocks/utility/Badge.stories.tsx`

---

**Prepared by:** AI Assistant  
**Date:** December 30, 2024

**USE THIS TEMPLATE FOR ALL 85+ COMPONENTS!** 🚀📚✨
