# Mock Data System - Complete Documentation

**Version:** 2.0  
**Last Updated:** December 25, 2024  
**Status:** ✅ **PRODUCTION READY**

---

## 📋 **TABLE OF CONTENTS**

1. [Overview](#overview)
2. [Data Structure](#data-structure)
3. [File Organization](#file-organization)
4. [WordPress Mapping](#wordpress-mapping)
5. [Usage Examples](#usage-examples)
6. [Migration Guide](#migration-guide)
7. [Best Practices](#best-practices)

---

## 🎯 **OVERVIEW**

### **Purpose**

The LSX Design mock data system provides realistic, comprehensive data for:
- **Site Pages** - Complete page hierarchy and navigation
- **Portfolio Projects** - Real WordPress/WooCommerce case studies
- **Blog Posts** - 2025 blog content with authors and tags
- **FAQs** - Question collections for all templates

### **Data Scale**

| Content Type | Count | Details |
|--------------|-------|---------|
| **Site Pages** | 45+ pages | Complete site structure |
| **Portfolio Projects** | 12 projects | With full case studies |
| **Blog Posts** | 20 posts | All from 2025 |
| **Blog Authors** | 6 authors | With bios and social links |
| **Project Groups** | 8 industries | Custom taxonomy |
| **Project Tags** | 15 technologies | Custom taxonomy |
| **Project Types** | 6 types | Custom taxonomy |
| **Blog Categories** | 9 categories | Default taxonomy |
| **Post Tags** | 17 tags | Default taxonomy |
| **FAQ Collections** | 13 collections | Various contexts |

---

## 🗂️ **DATA STRUCTURE**

### **File Organization**

```txt
/src/app/data/
├── index.ts                    # Central export hub (NEW)
├── site-pages.ts              # All site pages + navigation (NEW)
├── portfolio-projects.ts      # Portfolio with taxonomies (NEW)
├── blog-posts.ts              # Blog posts, authors, tags (NEW)
├── faqs.ts                    # FAQ collections (existing)
│
├── pages.ts                   # Legacy wrapper (backward compat)
├── portfolio.ts               # Legacy wrapper (backward compat)
└── posts.ts                   # Legacy wrapper (backward compat)
```

---

## 📄 **SITE PAGES** (`site-pages.ts`)

### **Data Structure**

```typescript
interface SitePage {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  template?: string;
  parent?: string;      // Parent page slug
  showInNav?: boolean;  // Show in main navigation
  order?: number;       // Navigation order
}
```

### **Key Features**

- ✅ **45+ pages** covering complete site structure
- ✅ **Hierarchical** - Parent/child relationships
- ✅ **Navigation menus** - Main header + footer
- ✅ **Breadcrumbs** - Automatic trail generation
- ✅ **URL generation** - Consistent URL patterns

### **Page Categories**

| Category | Count | Examples |
|----------|-------|----------|
| **Services** | 8 pages | WordPress Dev, WooCommerce, Block Themes |
| **Solutions** | 4 pages | WordPress, WooCommerce, Multisite, Headless |
| **About** | 5 pages | About, Team, Process, Culture, History |
| **Hosting** | 3 pages | Plans, Features, Support |
| **Resources** | 4 pages | Docs, FAQs, Case Studies, Whitepapers |
| **Legal** | 3 pages | Privacy, Terms, Cookies |

### **Example Usage**

```typescript
import { sitePages, mainNavigation, getPageBySlug } from '../data/site-pages';

// Get page data
const aboutPage = getPageBySlug('about');
console.log(aboutPage.title); // "About"

// Render navigation
mainNavigation.map(item => (
  <Link to={item.page}>{item.label}</Link>
));

// Get breadcrumbs
const trail = getBreadcrumbs('team');
// [{ label: 'Home', url: '/' }, { label: 'About', url: '/about' }, { label: 'Our Team', url: '/team' }]
```

---

## 💼 **PORTFOLIO PROJECTS** (`portfolio-projects.ts`)

### **Data Structure**

```typescript
interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  client: string;
  
  // Custom Taxonomies (WordPress)
  projectGroups: string[];     // project_group taxonomy (industries)
  projectTags: string[];        // project_tag taxonomy (technologies)
  projectTypes: string[];       // project_type taxonomy (project types)
  
  // Case Study Data
  caseStudy: {
    challenge: string;
    solution: string;
    results: Array<{
      metric: string;
      value: string;
      description: string;
    }>;
    technologies: string[];
    timeline: string;
    budget: string;
    url?: string;
  };
  
  // Testimonial
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar?: string;
  };
  
  // Meta
  date: string;
  featured: boolean;
}
```

### **Key Features**

- ✅ **12 real-world projects** - Complete case studies
- ✅ **3 custom taxonomies** - Groups, tags, types
- ✅ **Detailed results** - Metrics with values
- ✅ **Client testimonials** - For each project
- ✅ **Technology stacks** - Real tools used

### **Custom Taxonomies**

**Project Groups (Industries):**
- E-commerce (12 projects)
- Healthcare & Medical (8)
- Travel & Tourism (6)
- Technology & SaaS (10)
- Non-Profit & Education (5)
- Professional Services (7)
- Retail & Consumer Goods (6)
- Real Estate (4)

**Project Tags (Technologies):**
- WordPress (42), WooCommerce (28), Block Theme (35)
- FSE (30), Gutenberg (38), ACF (25)
- Accessibility (40), Performance (35), SEO (32)
- And 6 more...

**Project Types:**
- New Website Build (25)
- Website Redesign (18)
- Platform Migration (10)
- Performance Optimization (12)
- Ongoing Maintenance (30)
- Consulting & Strategy (8)

### **Example Usage**

```typescript
import { 
  portfolioProjects, 
  getProjectsByGroup,
  getProjectsByTag 
} from '../data/portfolio-projects';

// Get all projects
console.log(portfolioProjects.length); // 12

// Filter by industry
const ecomProjects = getProjectsByGroup('ecommerce');

// Filter by technology
const wooProjects = getProjectsByTag('woocommerce');

// Get featured
const featured = portfolioProjects.filter(p => p.featured);
console.log(featured.length); // 4
```

---

## 📝 **BLOG POSTS** (`blog-posts.ts`)

### **Data Structure**

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  featuredImage: string;
  author: string;         // Author slug
  categories: string[];   // category taxonomy
  tags: string[];         // post_tag taxonomy
  date: string;
  readingTime: string;
  featured: boolean;
}

interface BlogAuthor {
  id: string;
  slug: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  postCount: number;
}
```

### **Key Features**

- ✅ **20 blog posts** - All from 2025
- ✅ **6 authors** - WordPress/WooCommerce experts
- ✅ **9 categories** - Development, WooCommerce, FSE, etc.
- ✅ **17 tags** - Gutenberg, WCAG, Core Web Vitals, etc.
- ✅ **Reading times** - Estimated reading duration
- ✅ **Featured posts** - Homepage highlights

### **Authors**

| Author | Role | Posts | Specialization |
|--------|------|-------|----------------|
| **Sarah Mitchell** | Lead WordPress Dev | 24 | FSE & Block Themes |
| **Marcus Johnson** | WooCommerce Dev | 18 | E-commerce & Performance |
| **Emma Rodriguez** | UX Designer | 16 | Accessibility (WCAG) |
| **James Parker** | Performance Engineer | 14 | Core Web Vitals |
| **Lisa Chen** | Security Specialist | 12 | WordPress Security |
| **David Kim** | Full-Stack Dev | 10 | Headless WordPress |

### **Example Usage**

```typescript
import { 
  blogPosts, 
  blogAuthors,
  getPostsByAuthor,
  getPostsByCategory 
} from '../data/blog-posts';

// Get all posts
console.log(blogPosts.length); // 20

// Get author's posts
const sarahPosts = getPostsByAuthor('sarah-mitchell');

// Filter by category
const tutorials = getPostsByCategory('tutorials');

// Get recent
const recent = getRecentPosts(5);
```

---

## 🗺️ **WORDPRESS MAPPING**

### **How Mock Data Maps to WordPress**

| Mock Data | WordPress Equivalent |
|-----------|---------------------|
| `site-pages.ts` | **Pages** (post_type: 'page') |
| `portfolio-projects.ts` | **Custom Post Type: 'portfolio'** or 'project' |
| `blog-posts.ts` | **Posts** (post_type: 'post') |
| `faqs.ts` | **Custom Post Type: 'faq'** |
| `projectGroups` | **Custom Taxonomy: 'project_group'** |
| `projectTags` | **Custom Taxonomy: 'project_tag'** |
| `projectTypes` | **Custom Taxonomy: 'project_type'** |
| `blogCategories` | **Taxonomy: 'category'** (default) |
| `postTags` | **Taxonomy: 'post_tag'** (default) |
| `blogAuthors` | **Users** with 'author' role |

### **Custom Taxonomy Registration** (WordPress)

```php
// project_group taxonomy
register_taxonomy('project_group', 'project', [
  'hierarchical' => true,
  'label' => 'Project Groups',
  'rewrite' => ['slug' => 'project-group']
]);

// project_tag taxonomy
register_taxonomy('project_tag', 'project', [
  'hierarchical' => false,
  'label' => 'Project Tags',
  'rewrite' => ['slug' => 'project-tag']
]);

// project_type taxonomy
register_taxonomy('project_type', 'project', [
  'hierarchical' => true,
  'label' => 'Project Types',
  'rewrite' => ['slug' => 'project-type']
]);
```

---

## 💡 **USAGE EXAMPLES**

### **Example 1: Import All Data**

```typescript
import { 
  portfolioProjects, 
  blogPosts, 
  sitePages,
  mainNavigation 
} from '../data';

// Use directly
console.log(portfolioProjects.length); // 12
console.log(blogPosts.length);         // 20
console.log(sitePages.length);         // 45+
```

### **Example 2: Portfolio Archive Page**

```typescript
import { 
  portfolioProjects, 
  projectGroups,
  getProjectsByGroup 
} from '../data';

function PortfolioArchive() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? portfolioProjects 
    : getProjectsByGroup(filter);
  
  return (
    <div>
      {/* Filter buttons */}
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        {projectGroups.map(group => (
          <button 
            key={group.slug}
            onClick={() => setFilter(group.slug)}
          >
            {group.name} ({group.count})
          </button>
        ))}
      </div>
      
      {/* Project grid */}
      <div className="grid grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
```

### **Example 3: Blog Index with Author Filter**

```typescript
import { 
  blogPosts, 
  blogAuthors,
  getPostsByAuthor 
} from '../data';

function BlogIndex() {
  const [authorFilter, setAuthorFilter] = useState<string | null>(null);
  
  const posts = authorFilter 
    ? getPostsByAuthor(authorFilter) 
    : blogPosts;
  
  return (
    <div>
      {/* Author filter */}
      <select onChange={(e) => setAuthorFilter(e.target.value || null)}>
        <option value="">All Authors</option>
        {blogAuthors.map(author => (
          <option key={author.slug} value={author.slug}>
            {author.name} ({author.postCount} posts)
          </option>
        ))}
      </select>
      
      {/* Post list */}
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

### **Example 4: Navigation Menu**

```typescript
import { mainNavigation } from '../data';
import { useNavigation } from '../contexts/NavigationContext';

function SiteNav() {
  const { navigateTo, currentPage } = useNavigation();
  
  return (
    <nav>
      {mainNavigation.map(item => (
        <div key={item.page}>
          <button 
            onClick={() => navigateTo(item.page)}
            className={currentPage === item.page ? 'active' : ''}
          >
            {item.label}
          </button>
          
          {/* Submenu */}
          {item.children && (
            <div>
              {item.children.map(child => (
                <button 
                  key={child.page}
                  onClick={() => navigateTo(child.page)}
                >
                  {child.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
```

---

## 🔄 **MIGRATION GUIDE**

### **From Old Structure to New**

**Before (old imports):**
```typescript
import { portfolioProjects } from '../data/portfolio';
import { blogPosts } from '../data/posts';
import { mainNavigation } from '../data/pages';
```

**After (new imports):**
```typescript
// Option 1: Import from index (recommended)
import { portfolioProjects, blogPosts, mainNavigation } from '../data';

// Option 2: Import from specific files
import { portfolioProjects } from '../data/portfolio-projects';
import { blogPosts } from '../data/blog-posts';
import { mainNavigation } from '../data/site-pages';
```

### **Backward Compatibility**

✅ **Old imports still work!** Legacy files (`pages.ts`, `portfolio.ts`, `posts.ts`) are maintained as wrappers.

**No immediate changes required**, but new code should use:
- `site-pages.ts` instead of `pages.ts`
- `portfolio-projects.ts` instead of `portfolio.ts`
- `blog-posts.ts` instead of `posts.ts`

---

## ✅ **BEST PRACTICES**

### **DO:**

✅ Import from `/data` index for convenience  
✅ Use helper functions (`getProjectBySlug`, `getPostsByCategory`, etc.)  
✅ Filter using taxonomy helper functions  
✅ Use TypeScript interfaces for type safety  
✅ Access custom taxonomies (projectGroups, projectTags, projectTypes)

### **DON'T:**

❌ Modify data files directly in components  
❌ Hardcode taxonomy values (use exported constants)  
❌ Mix legacy and new imports in same file  
❌ Create duplicate helper functions  
❌ Bypass centralized data exports

### **Performance Tips**

- Use `getRecentPosts()` with limit to reduce data transfer
- Filter on server/build time when possible
- Cache filtered results for repeated queries
- Use memo for expensive computations

---

## 📊 **DATA STATISTICS**

```typescript
import { getDataStats } from '../data';

const stats = getDataStats();
console.log(stats);

// Output:
{
  pages: { total: 45, published: 7, parents: 38, children: 7 },
  portfolio: { total: 12, featured: 4, groups: 8, tags: 15 },
  blog: { total: 20, featured: 4, authors: 6, categories: 9, tags: 17 }
}
```

---

## 🔍 **SEARCH ALL CONTENT**

```typescript
import { searchAllContent } from '../data';

const results = searchAllContent('wordpress');

console.log(results);
// {
//   projects: [...],  // Portfolio projects matching "wordpress"
//   posts: [...],     // Blog posts matching "wordpress"
//   pages: [...]      // Site pages matching "wordpress"
// }
```

---

## 📝 **SUMMARY**

**New Data Files:**
- ✅ `site-pages.ts` - 45+ pages with navigation
- ✅ `portfolio-projects.ts` - 12 projects with 3 taxonomies
- ✅ `blog-posts.ts` - 20 posts with 6 authors
- ✅ `index.ts` - Central export hub

**Features:**
- ✅ **Real-world data** - Realistic WordPress/WooCommerce projects
- ✅ **Custom taxonomies** - 3 for portfolio, 2 for blog
- ✅ **Complete metadata** - Case studies, testimonials, results
- ✅ **Helper functions** - Easy filtering and searching
- ✅ **Type safety** - Full TypeScript interfaces
- ✅ **Backward compatible** - Legacy imports still work

**Total Content:**
- **45+ pages**
- **12 portfolio projects**
- **20 blog posts**
- **6 authors**
- **13 FAQ collections**
- **50+ taxonomy terms**

---

**Last Updated:** December 25, 2024  
**Version:** 2.0  
**Status:** ✅ **PRODUCTION READY**
