# Mobile Navigation

**Version:** 1.0  
**Last Updated:** December 25, 2024

---

## Overview

Mobile navigation must be touch-friendly, accessible, and performant. The LSX Design System uses a hamburger menu pattern with slide-in drawer.

---

## 🍔 Hamburger Menu Pattern

### Mobile Header with Hamburger

```tsx
<header style={{
  position: 'sticky',
  top: 0,
  zIndex: 50,
  backgroundColor: 'var(--background)',
  borderBottom: '1px solid var(--border-soft)',
  padding: '12px 16px'
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    {/* Logo */}
    <a href="/" aria-label="Home">
      <Logo />
    </a>

    {/* Hamburger Button - 48×48px touch target */}
    <button
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      style={{
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--foreground)'
      }}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
</header>
```

---

## 📱 Mobile Menu Drawer

### Slide-In Navigation

```tsx
{/* Overlay */}
{isOpen && (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(4px)',
      zIndex: 40,
      animation: 'fadeIn 0.3s ease'
    }}
    onClick={() => setIsOpen(false)}
    aria-hidden="true"
  />
)}

{/* Drawer */}
<nav
  aria-label="Mobile navigation"
  style={{
    position: 'fixed',
    top: 0,
    right: isOpen ? 0 : '-100%',
    bottom: 0,
    width: '80%',
    maxWidth: '320px',
    backgroundColor: 'var(--background)',
    boxShadow: 'var(--shadow-lg)',
    zIndex: 50,
    transition: 'right 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    overflowY: 'auto',
    padding: '24px 0'
  }}
>
  {/* Close Button */}
  <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 16px 16px'
  }}>
    <button
      aria-label="Close menu"
      onClick={() => setIsOpen(false)}
      style={{
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      <X size={24} />
    </button>
  </div>

  {/* Navigation Items */}
  <ul style={{
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>
    {mainNavigation.map(item => (
      <li key={item.href}>
        <a
          href={item.href}
          onClick={() => setIsOpen(false)}
          style={{
            display: 'block',
            minHeight: '48px',
            padding: '12px 24px',
            fontSize: 'var(--text-base)',
            fontFamily: 'Lexend, sans-serif',
            color: 'var(--foreground)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--border-extra-soft)',
            transition: 'background-color 0.2s'
          }}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>

  {/* CTA in Mobile Menu */}
  <div style={{ padding: '24px' }}>
    <button style={{
      width: '100%',
      minHeight: '48px',
      padding: '14px 24px',
      fontSize: 'var(--text-base)',
      fontFamily: 'Lexend, sans-serif',
      fontWeight: 'var(--font-weight-medium)',
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none',
      borderRadius: 'var(--radius)',
      cursor: 'pointer'
    }}>
      Get Started
    </button>
  </div>
</nav>
```

---

## 🎯 Touch-Friendly Menu Items

### Menu Item Pattern

```tsx
<a
  href="/about"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '48px',  // Touch target
    padding: '12px 24px',
    fontSize: 'var(--text-base)',
    fontFamily: 'Lexend, sans-serif',
    color: 'var(--foreground)',
    textDecoration: 'none',
    borderBottom: '1px solid var(--border-extra-soft)'
  }}
>
  <span>About</span>
  <ChevronRight size={20} color="var(--muted-foreground)" />
</a>
```

---

## 📂 Expandable Sub-Menus

### Accordion Pattern

```tsx
const [expandedItem, setExpandedItem] = useState<string | null>(null);

<li>
  {/* Parent Item */}
  <button
    onClick={() => setExpandedItem(
      expandedItem === 'services' ? null : 'services'
    )}
    aria-expanded={expandedItem === 'services'}
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '48px',
      padding: '12px 24px',
      fontSize: 'var(--text-base)',
      fontFamily: 'Lexend, sans-serif',
      color: 'var(--foreground)',
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: '1px solid var(--border-extra-soft)',
      textAlign: 'left',
      cursor: 'pointer'
    }}
  >
    <span>Services</span>
    <ChevronDown 
      size={20} 
      style={{
        transform: expandedItem === 'services' ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s'
      }}
    />
  </button>

  {/* Sub-Menu */}
  {expandedItem === 'services' && (
    <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      backgroundColor: 'var(--muted)',
      animation: 'slideDown 0.2s ease'
    }}>
      {servicesSubMenu.map(subItem => (
        <li key={subItem.href}>
          <a
            href={subItem.href}
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              minHeight: '44px',
              padding: '10px 24px 10px 48px', // Indented
              fontSize: 'var(--text-base)',
              fontFamily: 'Lexend, sans-serif',
              color: 'var(--foreground)',
              textDecoration: 'none'
            }}
          >
            {subItem.label}
          </a>
        </li>
      ))}
    </ul>
  )}
</li>
```

---

## 🔒 Lock Body Scroll When Menu Open

### Prevent Background Scrolling

```tsx
useEffect(() => {
  if (isOpen) {
    // Lock scroll
    document.body.style.overflow = 'hidden';
  } else {
    // Unlock scroll
    document.body.style.overflow = '';
  }

  // Cleanup
  return () => {
    document.body.style.overflow = '';
  };
}, [isOpen]);
```

---

## ⌨️ Keyboard Navigation

### Focus Management

```tsx
const menuRef = useRef<HTMLElement>(null);

useEffect(() => {
  if (isOpen && menuRef.current) {
    // Focus first link when menu opens
    const firstLink = menuRef.current.querySelector('a');
    firstLink?.focus();
  }
}, [isOpen]);

// Close on Escape key
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  document.addEventListener('keydown', handleEscape);
  return () => document.removeEventListener('keydown', handleEscape);
}, [isOpen]);
```

---

## 🎨 Animations

### CSS Animations

```tsx
<style>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 500px;
      opacity: 1;
    }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`}</style>
```

---

## 📊 Bottom Navigation (Alternative Pattern)

### Fixed Bottom Bar

```tsx
<nav style={{
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'var(--background)',
  borderTop: '1px solid var(--border-soft)',
  padding: '8px 0',
  zIndex: 40
}}>
  <div style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto'
  }}>
    {[
      { icon: Home, label: 'Home', href: '/' },
      { icon: Search, label: 'Search', href: '/search' },
      { icon: User, label: 'Account', href: '/account' },
      { icon: Menu, label: 'Menu', href: '/menu' }
    ].map(item => (
      <a
        key={item.href}
        href={item.href}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          minWidth: '64px',
          minHeight: '56px',
          padding: '8px',
          color: 'var(--foreground)',
          textDecoration: 'none'
        }}
      >
        <item.icon size={24} />
        <span style={{
          fontSize: 'var(--text-small)',
          fontFamily: 'Manrope, sans-serif'
        }}>
          {item.label}
        </span>
      </a>
    ))}
  </div>
</nav>
```

---

## ♿ Accessibility Checklist

- [ ] Hamburger button has aria-label
- [ ] Menu has aria-expanded state
- [ ] Menu items are keyboard navigable
- [ ] Escape key closes menu
- [ ] Focus trapped in open menu
- [ ] Focus returns to button when closed
- [ ] All touch targets ≥ 48×48px
- [ ] Color contrast meets WCAG AA
- [ ] Reduced motion support

---

## ✅ Best Practices

### Do's ✅
- Use 48×48px hamburger button
- Slide menu from right (thumb-friendly)
- Lock body scroll when open
- Close on overlay tap
- Close on Escape key
- Minimum 48px menu item height
- Include CTA in mobile menu
- Show current page indicator

### Don'ts ❌
- Don't use hover-only interactions
- Don't make menu items too small
- Don't forget close button
- Don't forget overlay
- Don't nest menus > 2 levels
- Don't auto-close too quickly
- Don't forget keyboard support
- Don't forget reduced motion

---

**Last Updated:** December 25, 2024  
**Pattern:** Hamburger menu with slide-in drawer  
**Touch Target:** 48×48px minimum  
**Accessibility:** Full keyboard support + ARIA
