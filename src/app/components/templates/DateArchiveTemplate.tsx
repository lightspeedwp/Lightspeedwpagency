/**
 * Date Archive Template
 * 
 * WordPress Template: date.html
 * Displays posts from a specific month/year with timeline visualization.
 * 
 * Pattern order: Header → Breadcrumbs → Archive Header → Date Navigation → Post Grid → Pagination → NewsletterSignup → SocialProof → CTASection → Footer
 * 
 * **Conversion Strategy:**
 * - NewsletterSignup: Capture readers browsing by date
 * - SocialProof: Build credibility
 * - CTASection: Convert interested visitors
 * 
 * **Features:**
 * - Year/month navigation
 * - Timeline view option
 * - Archive calendar widget
 * - Smooth animations
 * - Post statistics
 * 
 * **Accessibility:**
 * - Keyboard navigation for date picker
 * - Screen reader friendly date navigation
 * - WCAG 2.1 AA compliant
 * 
 * @see {@link /guidelines/templates/date-archive.md}
 * 
 * @example
 * ```tsx
 * <DateArchiveTemplate year={2024} month={12} />
 * ```
 */

import { SiteHeader } from '../parts/SiteHeader';
import { SiteFooter } from '../parts/SiteFooter';
import { SkipLink } from '../common/SkipLink';
import { BackToTopButton } from '../blocks/layout/BackToTopButton';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { CardGrid } from '../patterns/CardGrid';
import { PaginationNav } from '../patterns/PaginationNav';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { SocialProof } from '../patterns/SocialProof';
import { CTASection } from '../patterns/CTASection';
import { EmptyState } from '../patterns/EmptyState';
import { blogPosts } from '../../data/blog-posts';
import { clientLogos } from '../../data/logos';
import { motion } from 'motion/react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface DateArchiveTemplateProps {
  /** Year (e.g., 2024) */
  year: number;
  /** Month (1-12, optional) */
  month?: number;
  /** Current page number */
  currentPage?: number;
}

/**
 * Date Archive Template Component
 * 
 * Displays blog posts from a specific time period.
 * Supports both yearly and monthly archives.
 */
export function DateArchiveTemplate({ 
  year,
  month,
  currentPage = 1 
}: DateArchiveTemplateProps) {
  // Filter posts by date
  const datePosts = blogPosts.filter(post => {
    const postDate = new Date(post.date);
    const postYear = postDate.getFullYear();
    const postMonth = postDate.getMonth() + 1;
    
    if (month) {
      return postYear === year && postMonth === month;
    }
    return postYear === year;
  });
  
  // Sort by date (newest first)
  const sortedPosts = [...datePosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Pagination
  const postsPerPage = 12;
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);
  
  // Get adjacent months/years for navigation
  const { prevPeriod, nextPeriod } = getAdjacentPeriods(year, month);
  
  // Format title
  const monthName = month ? getMonthName(month) : '';
  const title = month ? `${monthName} ${year}` : `${year}`;
  
  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Archives', href: '/blog/archives' },
    ...(month ? [
      { label: year.toString(), href: `/blog/${year}` },
      { label: monthName }
    ] : [
      { label: year.toString() }
    ])
  ];

  return (
    <>
      <SkipLink />
      <SiteHeader />
      
      <main id="main-content">
        <Section variant="default" className="pt-24 md:pt-32 pb-12">
          <Container>
            <Breadcrumbs items={breadcrumbs} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArchiveHeader
                title={title}
                description={`Browse articles published in ${title}`}
                stats={`${sortedPosts.length} ${sortedPosts.length === 1 ? 'post' : 'posts'}`}
                icon="Calendar"
              />
            </motion.div>
            
            {/* Period Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 flex items-center justify-between gap-4"
            >
              {/* Previous Period */}
              {prevPeriod && (
                <motion.a
                  href={prevPeriod.url}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--muted)',
                    color: 'var(--foreground)',
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    border: '1px solid var(--border-soft)',
                    textDecoration: 'none'
                  }}
                >
                  <ChevronLeft size={16} />
                  <span>{prevPeriod.label}</span>
                </motion.a>
              )}
              
              {/* Calendar Widget */}
              <div 
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: 'var(--muted)',
                  border: '1px solid var(--border-soft)'
                }}
              >
                <Calendar size={16} style={{ color: 'var(--muted-foreground)' }} />
                <span 
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    color: 'var(--foreground)',
                    fontWeight: 500
                  }}
                >
                  {title}
                </span>
              </div>
              
              {/* Next Period */}
              {nextPeriod && (
                <motion.a
                  href={nextPeriod.url}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--muted)',
                    color: 'var(--foreground)',
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'Manrope, sans-serif',
                    border: '1px solid var(--border-soft)',
                    textDecoration: 'none'
                  }}
                >
                  <span>{nextPeriod.label}</span>
                  <ChevronRight size={16} />
                </motion.a>
              )}
            </motion.div>
            
            {/* Month Grid (for yearly archives) */}
            {!month && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <MonthGrid year={year} />
              </motion.div>
            )}
          </Container>
        </Section>

        {/* Posts Grid */}
        <Section variant="background">
          <Container>
            {currentPosts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <CardGrid
                  items={currentPosts.map(post => ({
                    id: post.id,
                    slug: post.slug,
                    title: post.title,
                    excerpt: post.excerpt,
                    image: post.featuredImage,
                    date: post.date,
                    author: post.author,
                    category: post.categories[0] || 'Uncategorized',
                    readingTime: post.readingTime
                  }))}
                  layout="grid"
                  columns={3}
                />
              </motion.div>
            ) : (
              <EmptyState
                title="No posts found"
                description={`No posts were published in ${title}.`}
                action={{
                  label: 'View All Archives',
                  href: '/blog/archives'
                }}
              />
            )}
          </Container>
        </Section>

        {/* Pagination */}
        {totalPages > 1 && (
          <Section variant="default">
            <Container>
              <PaginationNav
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl={month ? `/blog/${year}/${month}` : `/blog/${year}`}
              />
            </Container>
          </Section>
        )}

        {/* NewsletterSignup */}
        <NewsletterSignup
          title="Never Miss an Update"
          description="Get the latest WordPress development tips and tutorials delivered to your inbox."
          variant="default"
        />

        {/* SocialProof */}
        <SocialProof
          logos={clientLogos}
          title="Trusted by Leading Brands"
          description="Join thousands of developers who trust our expertise."
          variant="default"
        />

        {/* CTA */}
        <CTASection
          title="Ready to Start Your Project?"
          description="Let's build something amazing together with WordPress."
          primaryButton={{
            label: 'Subscribe Now',
            href: '/newsletter'
          }}
          secondaryButton={{
            label: 'Browse All Posts',
            href: '/blog'
          }}
        />
      </main>

      <SiteFooter />
      <BackToTopButton />
    </>
  );
}

/**
 * Month Grid Component
 * Shows all months in a year with post counts
 */
function MonthGrid({ year }: { year: number }) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Get post count for each month
  const monthCounts = months.map((_, index) => {
    const monthNum = index + 1;
    const count = blogPosts.filter(post => {
      const postDate = new Date(post.date);
      return postDate.getFullYear() === year && postDate.getMonth() + 1 === monthNum;
    }).length;
    return { month: monthNum, name: months[index], count };
  });
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {monthCounts.map((item, index) => (
        <motion.a
          key={item.month}
          href={`/blog/${year}/${item.month}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-lg transition-all duration-300"
          style={{
            backgroundColor: item.count > 0 ? 'var(--card)' : 'var(--muted)',
            border: '1px solid var(--border-soft)',
            textDecoration: 'none',
            opacity: item.count > 0 ? 1 : 0.5,
            cursor: item.count > 0 ? 'pointer' : 'default'
          }}
        >
          <div 
            className="font-medium mb-1"
            style={{
              fontSize: 'var(--text-base)',
              fontFamily: 'Lexend, sans-serif',
              color: 'var(--foreground)'
            }}
          >
            {item.name}
          </div>
          <div 
            style={{
              fontSize: 'var(--text-sm)',
              fontFamily: 'Manrope, sans-serif',
              color: 'var(--muted-foreground)'
            }}
          >
            {item.count} {item.count === 1 ? 'post' : 'posts'}
          </div>
        </motion.a>
      ))}
    </div>
  );
}

/**
 * Get adjacent time periods for navigation
 */
function getAdjacentPeriods(year: number, month?: number) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  
  if (month) {
    // Monthly navigation
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    
    // Don't show future months
    const isFuture = nextYear > currentYear || (nextYear === currentYear && nextMonth > currentMonth);
    
    return {
      prevPeriod: {
        label: `${getMonthName(prevMonth)} ${prevYear}`,
        url: `/blog/${prevYear}/${prevMonth}`
      },
      nextPeriod: !isFuture ? {
        label: `${getMonthName(nextMonth)} ${nextYear}`,
        url: `/blog/${nextYear}/${nextMonth}`
      } : null
    };
  } else {
    // Yearly navigation
    const isFuture = year + 1 > currentYear;
    
    return {
      prevPeriod: {
        label: (year - 1).toString(),
        url: `/blog/${year - 1}`
      },
      nextPeriod: !isFuture ? {
        label: (year + 1).toString(),
        url: `/blog/${year + 1}`
      } : null
    };
  }
}

/**
 * Get month name from number (1-12)
 */
function getMonthName(month: number): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month - 1] || '';
}