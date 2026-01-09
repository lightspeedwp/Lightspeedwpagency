/**
 * Author Archive Template
 * 
 * WordPress template: templates/archive-author.html
 * 
 * Pattern order: Header → Breadcrumbs → Author Header → Post Grid → Pagination → NewsletterSignup → SocialProof → Footer
 * 
 * **Conversion Strategy:**
 * - NewsletterSignup: Capture readers who enjoy this author's content
 * - SocialProof: Build credibility with client logos
 * 
 * **Accessibility:**
 * - Keyboard navigation for all elements
 * - Screen reader friendly author info
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/author-archive.md}
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { PaginationNav } from '../patterns/PaginationNav';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { SocialProof } from '../patterns/SocialProof';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { Calendar, User, Clock, ChevronRight, Home, MapPin, Link as LinkIcon, Twitter, Linkedin, Globe } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { clientLogos } from '../../data/logos';

// Author configurations
const authorData: Record<string, {
  name: string;
  slug: string;
  bio: string;
  avatar: string;
  location: string;
  website: string;
  twitter: string;
  linkedin: string;
  postCount: number;
  joinDate: string;
}> = {
  'sarah-mitchell': {
    name: 'Sarah Mitchell',
    slug: 'sarah-mitchell',
    bio: 'Travel writer and photographer with 10+ years of experience exploring hidden gems around the world. Passionate about sustainable travel and cultural immersion.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    location: 'Portland, OR',
    website: 'https://sarahmitchell.com',
    twitter: '@sarahtravels',
    linkedin: 'sarahmitchell',
    postCount: 24,
    joinDate: 'Jan 2023',
  },
  'editor': {
    name: 'Alex Chen',
    slug: 'editor',
    bio: 'Chief Editor with a passion for storytelling and adventure. Leading the editorial team to bring you inspiring travel content from around the globe.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    location: 'San Francisco, CA',
    website: 'https://alexchen.com',
    twitter: '@alexchen',
    linkedin: 'alexchen',
    postCount: 38,
    joinDate: 'Mar 2022',
  },
  'contributor': {
    name: 'Emma Rodriguez',
    slug: 'contributor',
    bio: 'Freelance travel contributor specializing in adventure travel and outdoor experiences. Always seeking the next thrilling destination.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    location: 'Austin, TX',
    website: 'https://emmarodriguez.com',
    twitter: '@emmawanders',
    linkedin: 'emmarodriguez',
    postCount: 16,
    joinDate: 'Jul 2023',
  },
};

// Mock author posts
const authorPosts = [
  {
    id: '1',
    slug: 'safari-guide',
    title: 'The Ultimate Guide to Planning Your First Safari',
    excerpt: 'Discover everything you need to know about planning an unforgettable safari adventure, from choosing the right season to packing essentials.',
    category: 'Travel Tips',
    featuredImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    href: '#post-1',
    date: 'Dec 15, 2024',
    readTime: '8 min read'
  },
  {
    id: '2',
    slug: 'budget-travel',
    title: 'Budget Travel: See the World Without Breaking the Bank',
    excerpt: 'Proven strategies for traveling on a budget, from finding cheap flights to affordable accommodation.',
    category: 'Travel Tips',
    featuredImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    href: '#post-2',
    date: 'Dec 5, 2024',
    readTime: '9 min read'
  },
  {
    id: '3',
    slug: 'jet-lag-recovery',
    title: 'Jet Lag Recovery: Science-Backed Tips',
    excerpt: 'Beat jet lag with these proven strategies backed by sleep science and frequent traveler experience.',
    category: 'Travel Tips',
    featuredImage: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800',
    href: '#post-3',
    date: 'Nov 12, 2024',
    readTime: '5 min read'
  },
  {
    id: '4',
    slug: 'solo-female-travel-safety',
    title: 'Solo Female Travel: Safety Tips and Destinations',
    excerpt: 'A comprehensive guide to solo female travel, including the safest destinations and essential safety tips.',
    category: 'Safety',
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    href: '#post-4',
    date: 'Nov 2, 2024',
    readTime: '10 min read'
  },
  {
    id: '5',
    slug: 'minimalist-packing',
    title: 'Minimalist Packing: Travel Light, Travel Right',
    excerpt: 'How to pack everything you need in a carry-on for a two-week trip. Minimalist packing tips from a full-time traveler.',
    category: 'Travel Tips',
    featuredImage: 'https://images.unsplash.com/photo-1544413660-299165566b1d?w=800',
    href: '#post-5',
    date: 'Oct 28, 2024',
    readTime: '7 min read'
  },
  {
    id: '6',
    slug: 'digital-nomad-guide',
    title: 'Digital Nomad Guide: Working While Traveling',
    excerpt: 'Everything you need to know about becoming a digital nomad, from finding remote work to managing time zones.',
    category: 'Remote Work',
    featuredImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    href: '#post-6',
    date: 'Oct 15, 2024',
    readTime: '12 min read'
  },
];

interface AuthorArchiveTemplateProps {
  author?: string;
}

export function AuthorArchiveTemplate({ author: authorSlug = 'sarah-mitchell' }: AuthorArchiveTemplateProps) {
  const { navigateTo } = useNavigation();
  
  const author = authorData[authorSlug] || authorData['sarah-mitchell'];

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content" role="main">
        {/* Breadcrumbs */}
        <section 
          className="py-4"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <Container>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Authors', href: '#authors' },
                { label: author.name }
              ]}
            />
          </Container>
        </section>

        {/* Author Header */}
        <section 
          className="py-16"
          style={{
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid var(--border-soft)',
          }}
        >
          <Container>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Author Avatar */}
              <div
                className="w-32 h-32 rounded-full bg-cover bg-center flex-shrink-0"
                style={{
                  backgroundImage: `url(${author.avatar})`,
                  border: '4px solid var(--border-soft)',
                }}
              />

              {/* Author Info */}
              <div className="flex-1">
                <span 
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'var(--text-small)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--muted-foreground)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Author
                </span>
                <Heading level={1} style={{ marginTop: '8px', marginBottom: '16px' }}>
                  {author.name}
                </Heading>
                <p 
                  className="mb-6"
                  style={{
                    fontFamily: 'Lexend, sans-serif',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--foreground)',
                    lineHeight: '1.6',
                    margin: 0,
                    marginBottom: '24px',
                  }}
                >
                  {author.bio}
                </p>

                {/* Author Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} style={{ color: 'var(--muted-foreground)' }} />
                    <span 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--foreground)',
                      }}
                    >
                      {author.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={18} style={{ color: 'var(--muted-foreground)' }} />
                    <span 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--foreground)',
                      }}
                    >
                      {author.postCount} posts
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} style={{ color: 'var(--muted-foreground)' }} />
                    <span 
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--foreground)',
                      }}
                    >
                      Member since {author.joinDate}
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a 
                    href={author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--secondary)',
                      color: 'var(--secondary-foreground)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label="Visit website"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--secondary)';
                      e.currentTarget.style.color = 'var(--secondary-foreground)';
                    }}
                  >
                    <Globe size={20} />
                  </a>
                  <a 
                    href={`https://twitter.com/${author.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--secondary)',
                      color: 'var(--secondary-foreground)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label="Follow on Twitter"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--secondary)';
                      e.currentTarget.style.color = 'var(--secondary-foreground)';
                    }}
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href={`https://linkedin.com/in/${author.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--secondary)',
                      color: 'var(--secondary-foreground)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    aria-label="Connect on LinkedIn"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--secondary)';
                      e.currentTarget.style.color = 'var(--secondary-foreground)';
                    }}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Author Posts */}
        <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
          <Container>
            <Heading level={2} style={{ marginBottom: '32px' }}>
              Latest by {author.name}
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorPosts.map((post) => (
                <article 
                  key={post.id}
                  className="flex flex-col rounded-[var(--radius-lg)]"
                  style={{
                    border: '1px solid var(--border-soft)',
                    backgroundColor: 'var(--card)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Post Image */}
                  <a 
                    href={`#post-${post.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(`post-${post.slug}`);
                    }}
                    style={{ 
                      textDecoration: 'none',
                      display: 'block',
                      cursor: 'pointer',
                      flexShrink: 0,
                      width: '200px',
                    }}
                    aria-label={`Read ${post.title}`}
                  >
                    <div 
                      className="aspect-square bg-cover bg-center rounded-[var(--radius-lg)]"
                      style={{
                        backgroundImage: `url(${post.featuredImage})`,
                      }}
                    />
                  </a>

                  {/* Post Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category Badge */}
                    <button 
                      onClick={() => {
                        const categorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
                        navigateTo(`category-${categorySlug}`);
                      }}
                      className="inline-flex items-center px-3 py-1 rounded-full mb-3"
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-medium)',
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--secondary-foreground)',
                        textDecoration: 'none',
                        alignSelf: 'flex-start',
                        transition: 'opacity 0.2s ease',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                    >
                      {post.category}
                    </button>

                    {/* Title */}
                    <h3 className="mb-2">
                      <a 
                        href={`#post-${post.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(`post-${post.slug}`);
                        }}
                        style={{
                          fontFamily: 'Lexend, sans-serif',
                          fontSize: 'var(--text-h3)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--foreground)',
                          textDecoration: 'none',
                          lineHeight: '1.3',
                          display: 'block',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--foreground)';
                        }}
                        aria-label={`Read ${post.title}`}
                      >
                        {post.title}
                      </a>
                    </h3>

                    {/* Excerpt */}
                    <p 
                      className="mb-4"
                      style={{
                        fontFamily: 'Lexend, sans-serif',
                        fontSize: 'var(--text-base)',
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6',
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Post Meta */}
                    <div className="flex flex-wrap items-center gap-4 pt-4" style={{ borderTop: '1px solid var(--border-extra-soft)' }}>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} style={{ color: 'var(--muted-foreground)' }} />
                        <span 
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)',
                          }}
                        >
                          {post.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} style={{ color: 'var(--muted-foreground)' }} />
                        <span 
                          style={{
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 'var(--text-small)',
                            color: 'var(--muted-foreground)',
                          }}
                        >
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12">
              <PaginationNav 
                currentPage={1}
                totalPages={4}
                baseUrl={`#author-${author.slug}`}
              />
            </div>
          </Container>
        </section>

        {/* NewsletterSignup */}
        <NewsletterSignup
          title={`Get ${author.name}'s Latest Articles`}
          description={`Join our mailing list to receive the latest articles from ${author.name} and other travel experts.`}
          variant="default"
        />

        {/* SocialProof */}
        <SocialProof
          logos={clientLogos}
          title="Featured In"
          description={`${author.name}'s work has been featured by leading publications.`}
          variant="default"
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}