# Widget Blocks

Complete guidelines for WordPress widget blocks as React components.

## 📚 Available Widget Blocks

1. **[Archives](./archives.md)** - Post archives by date
2. **[Calendar](./calendar.md)** - Calendar widget with posts
3. **[Categories List](./categories-list.md)** - Categories navigation
4. **[Custom HTML](./custom-html.md)** - Custom HTML widget
5. **[Latest Comments](./latest-comments.md)** - Recent comments list
6. **[Latest Posts](./latest-posts.md)** - Recent posts list
7. **[Page List](./page-list.md)** - Site pages navigation
8. **[RSS](./rss.md)** - RSS feed display
9. **[Search](./search.md)** - Search form widget (see also Theme blocks)
10. **[Shortcode](./shortcode.md)** - Shortcode execution
11. **[Social Icons](./social-icons.md)** - Social media links
12. **[Tag Cloud](./tag-cloud.md)** - Tag cloud widget
13. **[Terms List](./terms-list.md)** - Custom taxonomy terms

## 🎯 Widget Blocks Principles

### 1. Data Display

Widgets display dynamic content from WordPress:

```tsx
// Use centralized data from /src/app/data/
import { blogPosts } from '@/app/data/posts';
import { pages } from '@/app/data/pages';
import { blogCategories } from '@/app/data/posts';
```

### 2. Interactive Widgets

Widgets with user interaction:

- Search forms
- Category filters
- Tag navigation
- Social sharing

### 3. Widget Areas

Widgets commonly used in:

- Sidebars
- Footer columns
- Header utility areas
- Below content areas

## 📁 File Structure

### Component Location
```
/src/app/components/blocks/widgets/
├── Archives.tsx
├── Calendar.tsx
├── CategoriesList.tsx
├── CustomHTML.tsx
├── LatestComments.tsx
├── LatestPosts.tsx
├── PageList.tsx
├── RSS.tsx
├── Search.tsx
├── Shortcode.tsx
├── SocialIcons.tsx
├── TagCloud.tsx
├── TermsList.tsx
└── index.ts
```

### CSS Location
```
/src/styles/blocks/widgets/
├── archives.css
├── calendar.css
├── categories-list.css
├── latest-comments.css
├── latest-posts.css
├── page-list.css
├── social-icons.css
└── tag-cloud.css
```

## 🎨 Design System Integration

### Widget Container

```css
.wp-block-latest-posts {
  /* Spacing */
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-8);
  
  /* Background */
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  
  /* Typography */
  font-family: var(--font-primary);
}

.wp-block-latest-posts__title {
  font-size: var(--text-h4);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin-bottom: var(--spacing-4);
}

.wp-block-latest-posts__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.wp-block-latest-posts__list-item {
  padding: var(--spacing-3);
  border-bottom: 1px solid var(--border);
}

.wp-block-latest-posts__list-item:last-child {
  border-bottom: none;
}
```

### Social Icons Widget

```css
.wp-block-social-links {
  display: flex;
  gap: var(--spacing-3);
  flex-wrap: wrap;
}

.wp-block-social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: var(--primary-foreground);
  border-radius: var(--radius);
  transition: all 0.2s ease;
}

.wp-block-social-link:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}
```

## 📦 Common Props Interface

```tsx
interface CommonWidgetBlockProps {
  /** Widget title */
  title?: string;
  
  /** Number of items to display */
  numberOfItems?: number;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Show/hide various elements */
  showDate?: boolean;
  showAuthor?: boolean;
  showExcerpt?: boolean;
}
```

## ✅ Widget Block Checklist

### Component Structure

- [ ] Created in `/src/app/components/blocks/widgets/`
- [ ] Has dedicated CSS file in `/src/styles/blocks/widgets/`
- [ ] Uses WordPress block class naming (`.wp-block-{name}`)
- [ ] Imports data from `/src/app/data/`
- [ ] Exports from index.ts

### Design System Compliance

- [ ] Uses CSS variables for ALL styling
- [ ] Uses design system spacing, colors, typography
- [ ] Uses WordPress utility classes for layout
- [ ] NO hardcoded values
- [ ] NO Tailwind classes

### Accessibility

- [ ] Semantic HTML (`<nav>`, `<ul>`, `<li>`)
- [ ] ARIA labels for navigation
- [ ] Keyboard navigation support
- [ ] Focus states visible
- [ ] Screen reader friendly

### WordPress Mapping

- [ ] Maps to WordPress widget block
- [ ] Uses WordPress block class names
- [ ] Supports block attributes
- [ ] Compatible with widget areas

## 🚀 Latest Posts Example

### Component

```tsx
/**
 * Latest Posts Widget Block
 * 
 * WordPress core block: wp:latest-posts
 */

import { blogPosts } from '@/app/data/posts';
import '@/styles/blocks/widgets/latest-posts.css';

export interface LatestPostsProps {
  title?: string;
  numberOfItems?: number;
  showDate?: boolean;
  showExcerpt?: boolean;
  className?: string;
}

export const LatestPosts = ({ 
  title = 'Recent Posts',
  numberOfItems = 5,
  showDate = true,
  showExcerpt = false,
  className = ''
}: LatestPostsProps) => {
  const recentPosts = blogPosts.slice(0, numberOfItems);
  
  return (
    <div className={`wp-block-latest-posts ${className}`}>
      {title && <h3 className="wp-block-latest-posts__title">{title}</h3>}
      
      <ul className="wp-block-latest-posts__list">
        {recentPosts.map((post) => (
          <li key={post.id} className="wp-block-latest-posts__list-item">
            <a href={`/blog/${post.slug}`}>
              {post.title}
            </a>
            
            {showDate && (
              <time className="wp-block-latest-posts__post-date">
                {post.date}
              </time>
            )}
            
            {showExcerpt && (
              <p className="wp-block-latest-posts__post-excerpt">
                {post.excerpt}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
```

### CSS

```css
/**
 * Latest Posts Widget Styles
 */

.wp-block-latest-posts {
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-8);
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.wp-block-latest-posts__title {
  font-family: var(--font-primary);
  font-size: var(--text-h4);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
  margin-bottom: var(--spacing-4);
}

.wp-block-latest-posts__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.wp-block-latest-posts__list-item {
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--border);
}

.wp-block-latest-posts__list-item:last-child {
  border-bottom: none;
}

.wp-block-latest-posts__list-item a {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.wp-block-latest-posts__list-item a:hover {
  color: var(--primary-hover);
}

.wp-block-latest-posts__post-date {
  display: block;
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  color: var(--foreground-subtle);
  margin-top: var(--spacing-1);
}

.wp-block-latest-posts__post-excerpt {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--foreground-subtle);
  margin-top: var(--spacing-2);
}
```

## 📚 Related Documentation

- **[Search Block](../theme/search.md)** - Search form (also in Theme blocks)
- **[Social Icons](./social-icons.md)** - Social media links
- **[Latest Posts](./latest-posts.md)** - Recent posts widget
- **[Data System](../../data/README.md)** - Centralized data
- **[Main Guidelines](../../Guidelines.md)** - System principles

---

**Last Updated:** January 22, 2025  
**Category:** Widget Blocks  
**WordPress Compatibility:** FSE (Full Site Editing)
