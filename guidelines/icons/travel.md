# Travel Icons

Icons specific to travel, tourism, and destination content. All icons are from **Lucide React**.

**CRITICAL:** Always verify an icon exists before using it. See [../overview-icons.md](../overview-icons.md) for verification process.

---

## Icon Categories

### Destinations & Navigation

**Common use:** Location indicators, maps, direction features

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Map` | Maps, geographic features | `grep "Map" node_modules/lucide-react/dist/esm/icons/index.js` |
| `MapPin` | Specific locations, markers | `grep "MapPin" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Navigation` | Directions, GPS | `grep "Navigation" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Compass` | Exploration, discovery | `grep "Compass" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Globe` | International travel | `grep "Globe" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { MapPin, Compass } from 'lucide-react';

<div style={{ display: 'flex', gap: 'var(--wp--preset--spacing--10)' }}>
  <MapPin size={16} />
  <span>Nairobi, Kenya</span>
</div>
```

---

### Transportation

**Common use:** Mode of travel, journey features

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Plane` | Air travel, flights | `grep "Plane" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Ship` | Cruises, boat trips | `grep "Ship" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Train` | Rail travel | `grep "Train" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Bus` | Bus tours, ground transport | `grep "Bus" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Car` | Road trips, rentals | `grep "Car" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { Plane, Ship } from 'lucide-react';

// Transportation options
<ul>
  <li>
    <Plane size={16} />
    Flight included
  </li>
  <li>
    <Ship size={16} />
    Boat transfer
  </li>
</ul>
```

---

### Time & Scheduling

**Common use:** Duration, dates, booking times

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Calendar` | Dates, schedules | `grep "Calendar" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Clock` | Time, duration | `grep "Clock" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Sun` | Daytime activities | `grep "Sun" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Moon` | Nighttime, stargazing | `grep "Moon" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Sunrise` | Dawn tours | `grep "Sunrise" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Sunset` | Evening tours | `grep "Sunset" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { Calendar, Clock } from 'lucide-react';

// Tour details
<div>
  <span style={{ color: 'var(--wp--preset--color--neutral-500)' }}>
    <Calendar size={14} />
    7 days
  </span>
  <span style={{ color: 'var(--wp--preset--color--neutral-500)' }}>
    <Clock size={14} />
    Daily departures
  </span>
</div>
```

---

### Activities & Experiences

**Common use:** Tour features, activity types

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Camera` | Photography tours | `grep "Camera" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Mountain` | Hiking, trekking | `grep "Mountain" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Palmtree` | Beach destinations | `grep "Palmtree" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Trees` | Nature, forests | `grep "Trees" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Waves` | Water activities | `grep "Waves" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Tent` | Camping, glamping | `grep "Tent" node_modules/lucide-react/dist/esm/icons/index.js` |

**Note:** Some icons may not exist. Always verify before use.

**Example:**
```tsx
// VERIFY FIRST
grep "Mountain" node_modules/lucide-react/dist/esm/icons/index.js

// If exists, then use:
import { Mountain, Camera } from 'lucide-react';

<ul>
  <li><Mountain size={16} /> Hiking</li>
  <li><Camera size={16} /> Photography</li>
</ul>
```

---

### Accommodation

**Common use:** Lodging features, amenities

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Home` | Accommodation, lodging | `grep "Home" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Hotel` | Hotels, resorts | `grep "Hotel" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Bed` | Sleeping arrangements | `grep "Bed" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Coffee` | Meals, dining | `grep "Coffee" node_modules/lucide-react/dist/esm/icons/index.js` |
| `Utensils` | Food included | `grep "Utensils" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { Home, Coffee } from 'lucide-react';

// Accommodation features
<ul>
  <li><Home size={16} /> Boutique hotel</li>
  <li><Coffee size={16} /> Breakfast included</li>
</ul>
```

---

### People & Groups

**Common use:** Group size, tour participants

| Icon Name | Use Case | Verification Command |
|-----------|----------|---------------------|
| `Users` | Group size, participants | `grep "Users" node_modules/lucide-react/dist/esm/icons/index.js` |
| `User` | Solo travel, individual | `grep "User" node_modules/lucide-react/dist/esm/icons/index.js` |

**Example:**
```tsx
import { Users } from 'lucide-react';

<div>
  <Users size={16} />
  <span>Max 12 guests</span>
</div>
```

---

## Common Travel Patterns

### Destination Card

```tsx
import { MapPin, Calendar, Users } from 'lucide-react';

<article 
  className="p-6 space-y-3"
  style={{
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)'
  }}
>
  <h3 style={{
    fontFamily: 'Lexend, sans-serif',
    fontSize: 'var(--text-h3)',
    fontWeight: 'var(--font-weight-medium)'
  }}>
    Maasai Mara Safari
  </h3>
  
  {/* Metadata with icons */}
  <div className="flex gap-6">
    <span 
      className="flex items-center gap-2"
      style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: 'var(--text-small)',
        color: 'var(--muted-foreground)'
      }}
    >
      <MapPin size={14} />
      Kenya
    </span>
    <span 
      className="flex items-center gap-2"
      style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: 'var(--text-small)',
        color: 'var(--muted-foreground)'
      }}
    >
      <Calendar size={14} />
      7 days
    </span>
    <span 
      className="flex items-center gap-2"
      style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: 'var(--text-small)',
        color: 'var(--muted-foreground)'
      }}
    >
      <Users size={14} />
      Max 12
    </span>
  </div>
</article>
```

### Tour Features List

```tsx
import { Camera, Mountain, Coffee } from 'lucide-react';

<ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
  <li className="flex gap-4">
    <Mountain size={20} style={{ color: 'var(--primary)' }} />
    <div>
      <strong style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
        Hiking
      </strong>
      <p style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        color: 'var(--muted-foreground)'
      }}>
        Daily guided treks
      </p>
    </div>
  </li>
  <li className="flex gap-4">
    <Camera size={20} style={{ color: 'var(--primary)' }} />
    <div>
      <strong style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
        Photography
      </strong>
      <p style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        color: 'var(--muted-foreground)'
      }}>
        Professional photo workshops
      </p>
    </div>
  </li>
  <li className="flex gap-4">
    <Coffee size={20} style={{ color: 'var(--primary)' }} />
    <div>
      <strong style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-medium)'
      }}>
        All Meals
      </strong>
      <p style={{
        fontFamily: 'Lexend, sans-serif',
        fontSize: 'var(--text-base)',
        color: 'var(--muted-foreground)'
      }}>
        Breakfast, lunch, dinner included
      </p>
    </div>
  </li>
</ul>
```

---

## Icon Verification Workflow

**REQUIRED before using any icon:**

```bash
# 1. Search for the icon
grep "Mountain" node_modules/lucide-react/dist/esm/icons/index.js

# 2. Expected output if icon EXISTS:
# export { default as Mountain } from './mountain.js';

# 3. If NO output, icon does NOT exist. Try alternatives:
grep -i "hill\|peak\|trek" node_modules/lucide-react/dist/esm/icons/index.js
```

---

## Common Mistakes

### ❌ DON'T

```tsx
// Assuming icon exists without verification
import { Safari } from 'lucide-react';  // May not exist!

// Using icon without accessible text
<MapPin size={16} />  // Screen readers don't know what this means

// Icon too large for context
<span style={{ fontSize: 'var(--wp--preset--font-size--100)' }}>
  <Calendar size={24} />  // Icon much larger than text
  7 days
</span>
```

### ✅ DO

```tsx
// Verify icon exists first
grep "MapPin" node_modules/lucide-react/dist/esm/icons/index.js

// Only if verified:
import { MapPin } from 'lucide-react';

// Provide accessible context
<div>
  <MapPin size={16} />
  <span>Location: Kenya</span>  // Text provides meaning
</div>

// Match icon size to text
<span style={{ 
  fontSize: 'var(--wp--preset--font-size--100)',
  display: 'flex',
  gap: 'var(--wp--preset--spacing--10)'
}}>
  <Calendar size={14} />  // 14px icon with 12px text
  7 days
</span>
```

---

## Size Guidelines

| Context | Text Size | Icon Size |
|---------|-----------|-----------|
| Metadata / Small | `100` (12px) | 14px |
| Body text | `200` (14px) | 16px |
| Large text | `300` (16px) | 18px |
| Headings | `400+` (18px+) | 20-24px |

---

## Related Documentation

- [../overview-icons.md](../overview-icons.md) — Icon verification process
- [interface.md](./interface.md) — UI/interface icons
- [../design-tokens/spacing.md](../design-tokens/spacing.md) — Icon spacing
- [../design-tokens/typography.md](../design-tokens/typography.md) — Text sizing

---

**Last Updated:** December 24, 2024  
**Icon Library:** Lucide React v0.487.0