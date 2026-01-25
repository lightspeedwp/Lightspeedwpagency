# Theme Blocks

Complete guidelines for WordPress theme blocks as React components.

## 📚 Available Theme Blocks

### Site Identity
1. **[Site Logo](./site-logo.md)** ✅ - Site logo with automatic theme switching
2. **[Site Title](./site-title.md)** ✅ - Site title
3. **[Site Tagline](./site-tagline.md)** ✅ - Site tagline/description

### Navigation
4. **[Navigation](./navigation.md)** ✅ - Site navigation with mega menus
5. **[Search](./search.md)** ✅ - Search form

### Template Parts
6. **[Template Part](./template-part.md)** ✅ - Reusable template parts (header/footer)

### Query & Loop
7. **[Query Loop](./query-loop.md)** - Display post loops
8. **[Post Template](./post-template.md)** - Template for post items
9. **[Pagination](./pagination.md)** - Pagination controls
10. **[Query Total](./query-total.md)** - Total results count

### Post Meta
11. **[Title](./title.md)** - Post title
12. **[Excerpt](./excerpt.md)** - Post excerpt
13. **[Featured Image](./featured-image.md)** - Post featured image
14. **[Post Date](./post-date.md)** - Post publication date
15. **[Modified Date](./modified-date.md)** - Post modified date
16. **[Categories](./categories.md)** - Post categories
17. **[Tags](./tags.md)** - Post tags
18. **[Author](./author.md)** - Post author
19. **[Author Name](./author-name.md)** - Author name only
20. **[Author Biography](./author-biography.md)** - Author bio
21. **[Avatar](./avatar.md)** - Author avatar

### Navigation
22. **[Next Post](./next-post.md)** - Next post link
23. **[Previous Post](./previous-post.md)** - Previous post link
24. **[Post Navigation Link](./post-navigation-link.md)** - Generic post navigation
25. **[Read More](./read-more.md)** - Read more link

### Comments
26. **[Comments](./comments.md)** - Comments display
27. **[Comments Title](./comments-title.md)** - Comments section title
28. **[Comment Template](./comment-template.md)** - Single comment template
29. **[Comment Author Name](./comment-author-name.md)** - Commenter name
30. **[Comment Date](./comment-date.md)** - Comment date
31. **[Comment Content](./comment-content.md)** - Comment text
32. **[Comment Reply Link](./comment-reply-link.md)** - Reply link
33. **[Comment Edit Link](./comment-edit-link.md)** - Edit link
34. **[Comments Form](./comments-form.md)** - Comment submission form

### Archive
35. **[Archive Title](./archive-title.md)** - Archive page title
36. **[Search Results Title](./search-results-title.md)** - Search results title
37. **[Term Description](./term-description.md)** - Taxonomy term description

### Utility
38. **[Login/Logout](./login-logout.md)** - Login/logout link

## 🎯 Theme Blocks Principles

### 1. Dynamic Content

Theme blocks display **dynamic WordPress content**:

```tsx
// Use centralized data from /src/app/data/
import { blogPosts } from '@/app/data/blog-posts';
import { siteLogo, siteTitle, siteTagline } from '@/app/data/site-pages';
```

### 2. Template System

Theme blocks build **WordPress templates**:

- **Site Identity:** Logo, title, tagline
- **Navigation:** Menus, search
- **Query Loops:** Post listings
- **Post Meta:** Author, date, categories
- **Comments:** Comment display and forms

### 3. FSE Compatibility

All theme blocks MUST map to WordPress FSE:

- Header templates
- Footer templates
- Page templates
- Single post templates
- Archive templates

## 📁 File Structure

### Component Location
```
/src/app/components/blocks/theme/
├── Navigation.tsx           ✅
├── Search.tsx               ✅
├── SiteLogo.tsx             ✅
├── SiteTitle.tsx            ✅
├── SiteTagline.tsx          ✅
├── TemplatePart.tsx         ✅
├── QueryLoop.tsx            📝
├── PostTemplate.tsx         📝
├── Pagination.tsx           📝
├── Title.tsx                📝
├── Excerpt.tsx              📝
├── FeaturedImage.tsx        📝
├── PostDate.tsx             📝
├── Categories.tsx           📝
├── Tags.tsx                 📝
├── Author.tsx               📝
├── Avatar.tsx               📝
├── Comments.tsx             📝
├── CommentsForm.tsx         📝
└── index.ts
```

### CSS Location
```
/src/styles/blocks/theme/
├── navigation.css           ✅
├── search.css               ✅
├── site-logo.css            ✅
├── site-title.css           ✅
├── site-tagline.css         ✅
├── template-part.css        ✅
├── query-loop.css           📝
├── post-template.css        📝
├── pagination.css           📝
├── title.css                📝
├── excerpt.css              📝
├── featured-image.css       📝
└── comments.css             📝
```

## 🎨 Design System Integration

### Site Identity Block

```tsx
/**
 * Site Logo Component
 * 
 * WordPress block: wp:site-logo
 */

import '@/styles/blocks/theme/site-logo.css';

export const SiteLogo = ({ width = 220 }) => {
  return (
    <div className="wp-block-site-logo">
      <img 
        src="var(--logo-url)" 
        alt="Site Logo"
        width={width}
        height="auto"
      />
    </div>
  );
};
```

### Site Logo CSS

```css
.wp-block-site-logo {
  display: block;
}

.wp-block-site-logo img {
  width: auto;
  height: auto;
  max-width: 100%;
  /* Automatic theme switching via CSS variables */
  content: var(--logo-url);
}

/* Light mode */
:root {
  --logo-url: url('/logo-light.svg');
}

/* Dark mode */
[data-theme="dark"] {
  --logo-url: url('/logo-dark.svg');
}
```

### Query Loop Block

```tsx
/**
 * Query Loop Component
 * 
 * WordPress block: wp:query
 */

import { blogPosts } from '@/app/data/blog-posts';
import '@/styles/blocks/theme/query-loop.css';

export interface QueryLoopProps {
  /** Number of posts to display */
  postsPerPage?: number;
  /** Post template component */
  template: (post: any) => React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const QueryLoop = ({ 
  postsPerPage = 10,
  template,
  className = ''
}: QueryLoopProps) => {
  const posts = blogPosts.slice(0, postsPerPage);
  
  return (
    <div className={`wp-block-query ${className}`}>
      <div className="wp-block-post-template">
        {posts.map((post) => (
          <article key={post.id} className="wp-block-post">
            {template(post)}
          </article>
        ))}
      </div>
    </div>
  );
};
```

## 📦 Common Props Interface

### Site Identity Blocks

```tsx
interface SiteIdentityProps {
  /** Additional CSS classes */
  className?: string;
  /** Custom logo URL (optional) */
  logoUrl?: string;
  /** Logo width */
  width?: number;
}
```

### Post Meta Blocks

```tsx
interface PostMetaProps {
  /** Post data */
  post: {
    id: number;
    title: string;
    date: string;
    author: string;
    categories: string[];
    tags: string[];
  };
  /** Additional CSS classes */
  className?: string;
}
```

### Query Blocks

```tsx
interface QueryBlockProps {
  /** Number of items to display */
  perPage?: number;
  /** Categories to filter by */
  categories?: string[];
  /** Order by */
  orderBy?: 'date' | 'title' | 'modified';
  /** Order direction */
  order?: 'asc' | 'desc';
  /** Additional CSS classes */
  className?: string;
}
```

## ✅ Theme Block Checklist

### Component Structure

- [ ] Created in `/src/app/components/blocks/theme/`
- [ ] Has dedicated CSS file in `/src/styles/blocks/theme/`
- [ ] Uses WordPress block class naming (`.wp-block-{name}`)
- [ ] Uses data from `/src/app/data/`
- [ ] Exports from index.ts

### Design System Compliance

- [ ] Uses CSS variables for ALL styling
- [ ] Uses design system typography
- [ ] Uses design system colors
- [ ] Uses design system spacing
- [ ] NO hardcoded values
- [ ] NO Tailwind classes

### Dynamic Content

- [ ] Fetches data from centralized data files
- [ ] Handles empty states
- [ ] Supports filtering/sorting
- [ ] Displays post meta correctly
- [ ] Shows proper dates/times

### Accessibility

- [ ] Semantic HTML elements
- [ ] Proper landmark roles
- [ ] ARIA labels where needed
- [ ] Keyboard navigation
- [ ] Focus states visible
- [ ] Screen reader friendly

### WordPress Mapping

- [ ] Maps to WordPress theme block
- [ ] Uses WordPress block class names
- [ ] Supports block attributes
- [ ] Compatible with FSE

## 🚀 Post Title Example

### Component

```tsx
/**
 * Post Title Block
 * 
 * WordPress block: wp:post-title
 */

import { Heading } from '@/app/components/blocks/text/Heading';
import '@/styles/blocks/theme/title.css';

export interface PostTitleProps {
  /** Post data */
  post: {
    id: number;
    title: string;
    slug: string;
  };
  /** Heading level */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Link to post */
  isLink?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const PostTitle = ({ 
  post,
  level = 2,
  isLink = true,
  className = ''
}: PostTitleProps) => {
  const content = isLink ? (
    <a href={`/blog/${post.slug}`} className="wp-block-post-title__link">
      {post.title}
    </a>
  ) : (
    post.title
  );
  
  return (
    <Heading 
      level={level}
      className={`wp-block-post-title ${className}`}
    >
      {content}
    </Heading>
  );
};
```

### CSS

```css
/**
 * Post Title Block Styles
 */

.wp-block-post-title {
  margin-bottom: var(--spacing-4);
}

.wp-block-post-title__link {
  color: var(--foreground);
  text-decoration: none;
  transition: color 0.2s ease;
}

.wp-block-post-title__link:hover {
  color: var(--primary);
}

.wp-block-post-title__link:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

## 🚀 Site Logo Example (Complete)

### Component

```tsx
/**
 * Site Logo Block
 * 
 * Site logo with automatic theme switching (light/dark mode)
 * 
 * WordPress block: wp:site-logo
 * 
 * @see /guidelines/blocks/theme/site-logo.md
 */

import '@/styles/blocks/theme/site-logo.css';

export interface SiteLogoProps {
  /** Logo width in pixels */
  width?: number;
  /** Additional CSS classes */
  className?: string;
}

export const SiteLogo = ({ 
  width = 220,
  className = ''
}: SiteLogoProps) => {
  return (
    <div className={`wp-block-site-logo ${className}`}>
      <a href="/" aria-label="Home">
        <img 
          src="/logo-light.svg"
          alt="LSX Design"
          width={width}
          height="auto"
          className="wp-block-site-logo__image"
        />
      </a>
    </div>
  );
};
```

### CSS (with automatic theme switching)

```css
/**
 * Site Logo Block Styles
 * 
 * Automatic theme switching via CSS variables
 */

.wp-block-site-logo {
  display: block;
}

.wp-block-site-logo a {
  display: inline-block;
  text-decoration: none;
}

.wp-block-site-logo__image {
  width: auto;
  height: auto;
  max-width: 100%;
  display: block;
}

/* Automatic theme switching */
/* Light mode: show light logo */
:root .wp-block-site-logo__image {
  content: url('/logo-light.svg');
}

/* Dark mode: show dark logo */
[data-theme="dark"] .wp-block-site-logo__image {
  content: url('/logo-dark.svg');
}

/* Focus state */
.wp-block-site-logo a:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 4px;
  border-radius: var(--radius);
}
```

## 📚 Related Documentation

- **[Navigation Block](./navigation.md)** ✅ - Site navigation
- **[Site Logo Block](./site-logo.md)** ✅ - Logo with theme switching
- **[Site Title Block](./site-title.md)** ✅ - Site title
- **[Search Block](./search.md)** ✅ - Search form
- **[Template Part Block](./template-part.md)** ✅ - Reusable parts
- **[Data System](../../data/README.md)** - Centralized data
- **[Main Guidelines](../../Guidelines.md)** - System principles

---

**Last Updated:** January 22, 2025  
**Category:** Theme Blocks  
**WordPress Compatibility:** FSE (Full Site Editing)
