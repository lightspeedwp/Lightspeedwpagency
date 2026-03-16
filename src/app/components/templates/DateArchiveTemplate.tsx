/**
 * Date Archive Template
 *
 * WordPress Template: date.html
 * Displays posts from a specific month/year with timeline visualization.
 *
 * Features:
 * - useScrollReveal animations (no motion/react)
 * - Declarative <Link> navigation
 * - 100% CSS variables, zero hardcoded values
 *
 * Pattern order: Breadcrumbs -> Archive Header -> Date Navigation -> Post Grid -> Pagination -> Newsletter -> SocialProof -> CTA
 *
 * @see {@link /guidelines/templates/date-archive.md}
 */

/* archive.css — globally imported via index.css */
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { CardGrid } from '../patterns/CardGrid';
import { PaginationNav } from '../patterns/PaginationNav';
import { NewsletterSignup } from '../patterns/NewsletterSignup';
import { SocialProof } from '../patterns/SocialProof';
import { FunkyCTA } from '../patterns/FunkyCTA';
import { EmptyState } from '../patterns/EmptyState';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Link } from 'react-router';
import { blogPosts } from '../../data/blog-posts';
import { clientLogos } from '../../data/logos';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Calendar, CaretLeft as ChevronLeft, CaretRight as ChevronRight } from '@phosphor-icons/react';

interface DateArchiveTemplateProps {
  year: number;
  month?: number;
  currentPage?: number;
}

export function DateArchiveTemplate({
  year,
  month,
  currentPage = 1,
}: DateArchiveTemplateProps) {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const navRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  const datePosts = blogPosts.filter((post) => {
    const postDate = new Date(post.date);
    const postYear = postDate.getFullYear();
    const postMonth = postDate.getMonth() + 1;

    if (month) return postYear === year && postMonth === month;
    return postYear === year;
  });

  const sortedPosts = [...datePosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const postsPerPage = 12;
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

  const { prevPeriod, nextPeriod } = getAdjacentPeriods(year, month);

  const monthName = month ? getMonthName(month) : '';
  const title = month ? `${monthName} ${year}` : `${year}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Insights', href: '/insights' },
    { label: 'Archives', href: '/insights/date' },
    ...(month
      ? [
          { label: year.toString(), href: `/insights/date/${year}` },
          { label: monthName },
        ]
      : [{ label: year.toString() }]),
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <BreadcrumbPart items={breadcrumbs} />

      <Section background="default" spacing="lg" className="archive-header">
        <Container>
          <div ref={headerRef}>
            <ArchiveHeader
              title={title}
              description={`Browse articles published in ${title}`}
              stats={`${sortedPosts.length} ${sortedPosts.length === 1 ? 'post' : 'posts'}`}
              icon="Calendar"
            />
          </div>

          {/* Period Navigation */}
          <div ref={navRef} className="date-navigation">
            {prevPeriod && (
              <Link to={prevPeriod.url} className="date-navigation__link">
                <ChevronLeft size={16} />
                <span>{prevPeriod.label}</span>
              </Link>
            )}

            <div className="date-navigation__current">
              <Calendar size={16} className="date-navigation__icon" />
              <span>{title}</span>
            </div>

            {nextPeriod && (
              <Link to={nextPeriod.url} className="date-navigation__link">
                <span>{nextPeriod.label}</span>
                <ChevronRight size={16} />
              </Link>
            )}
          </div>

          {/* Month Grid (for yearly archives) */}
          {!month && <MonthGrid year={year} />}
        </Container>
      </Section>

      {/* Posts Grid */}
      <Section background="default" spacing="md">
        <Container>
          {currentPosts.length > 0 ? (
            <div ref={gridRef}>
              <CardGrid
                items={currentPosts.map((post) => ({
                  id: post.id,
                  slug: post.slug,
                  title: post.title,
                  excerpt: post.excerpt,
                  image: post.featuredImage,
                  date: post.date,
                  author: post.author,
                  category: post.categories[0] || 'Uncategorized',
                  readingTime: post.readingTime,
                }))}
                layout="grid"
                columns={3}
              />
            </div>
          ) : (
            <EmptyState
              title="No posts found"
              description={`No posts were published in ${title}.`}
              action={{
                label: 'View All Archives',
                href: '/insights/date',
              }}
            />
          )}
        </Container>
      </Section>

      {/* Pagination */}
      {totalPages > 1 && (
        <Section background="default" spacing="md">
          <Container>
            <PaginationNav
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl={month ? `/insights/date/${year}/${month}` : `/insights/date/${year}`}
            />
          </Container>
        </Section>
      )}

      {/* Newsletter */}
      <NewsletterSignup
        title="Never miss an update"
        description="Get the latest WordPress development tips and tutorials delivered to your inbox."
        variant="default"
      />

      {/* Social Proof */}
      <SocialProof
        logos={clientLogos}
        title="Trusted by Leading Brands"
        description="Join thousands of developers who trust our expertise."
        variant="default"
      />

      {/* CTA */}
      <FunkyCTA
        title="Ready to Start Your Project?"
        description="Let's build something amazing together with WordPress."
        buttonText="Subscribe Now"
        buttonPage="newsletter-service"
        benefits={[
          'Weekly WordPress insights',
          'Development best practices',
          'Industry news & trends',
          'Exclusive tutorials',
          'Community updates'
        ]}
      />
    </>
  );
}

/**
 * Month Grid Component
 * Shows all months in a year with post counts
 */
function MonthGrid({ year }: { year: number }) {
  const monthGridRef = useScrollReveal<HTMLDivElement>();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const monthCounts = months.map((_, index) => {
    const monthNum = index + 1;
    const count = blogPosts.filter((post) => {
      const postDate = new Date(post.date);
      return postDate.getFullYear() === year && postDate.getMonth() + 1 === monthNum;
    }).length;
    return { month: monthNum, name: months[index], count };
  });

  return (
    <div ref={monthGridRef} className="month-grid wp-mt-8">
      {monthCounts.map((item) => (
        <Link
          key={item.month}
          to={`/insights/date/${year}/${item.month}`}
          className={`month-card ${item.count === 0 ? 'month-card--empty' : ''}`}
        >
          <Heading level={4} className="month-card__name">
            {item.name}
          </Heading>
          <Paragraph size="small" className="month-card__count">
            {item.count} {item.count === 1 ? 'post' : 'posts'}
          </Paragraph>
        </Link>
      ))}
    </div>
  );
}

function getAdjacentPeriods(year: number, month?: number) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  if (month) {
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;

    const isFuture =
      nextYear > currentYear || (nextYear === currentYear && nextMonth > currentMonth);

    return {
      prevPeriod: {
        label: `${getMonthName(prevMonth)} ${prevYear}`,
        url: `/insights/date/${prevYear}/${prevMonth}`,
      },
      nextPeriod: !isFuture
        ? {
            label: `${getMonthName(nextMonth)} ${nextYear}`,
            url: `/insights/date/${nextYear}/${nextMonth}`,
          }
        : null,
    };
  } else {
    const isFuture = year + 1 > currentYear;

    return {
      prevPeriod: {
        label: (year - 1).toString(),
        url: `/insights/date/${year - 1}`,
      },
      nextPeriod: !isFuture
        ? {
            label: (year + 1).toString(),
            url: `/insights/date/${year + 1}`,
          }
        : null,
    };
  }
}

function getMonthName(month: number): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return months[month - 1] || '';
}