/**
 * Portfolio Tag Archive Template
 *
 * WordPress template: templates/taxonomy-project_tag.html
 * Taxonomy archive archetype filtering portfolio by tag.
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { FAQSection } from '../patterns/FAQSection';
import { CTASection } from '../patterns/CTASection';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { ArrowRight, Tag } from 'lucide-react';
import { portfolioProjects, projectTags } from '../../data/portfolio-projects';
import { portfolioFAQs } from '../../data/faqs';
import { useNavigation } from '../../contexts/NavigationContext';

interface Props { tag?: string; }

export function PortfolioTagArchiveTemplate({ tag }: Props) {
  const { navigateTo } = useNavigation();
  const tagInfo = projectTags.find(t => t.slug === tag) || projectTags[0];
  const filtered = tag
    ? portfolioProjects.filter(p => p.projectTags.includes(tag))
    : portfolioProjects;

  return (
    <>
      <section style={{ padding: 'var(--spacing-4) 0' }}>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', page: 'front-page' },
              { label: 'Portfolio', page: 'portfolio-archive' },
              { label: tagInfo.name }
            ]}
          />
        </Container>
      </section>

      <Section spacing="md">
        <Container>
          <div className="wp-max-w-4xl">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Tag size={24} style={{ color: 'var(--primary)' }} />
              <Heading level={1}>{tagInfo.name}</Heading>
            </div>
            <Paragraph>
              Projects featuring {tagInfo.name.toLowerCase()} technology and expertise.
            </Paragraph>
            <Paragraph style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-small)', fontFamily: 'var(--font-secondary)' }}>
              Number of results: <strong style={{ color: 'var(--foreground)' }}>{filtered.length}</strong>
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--spacing-6)' }}>
            {filtered.map(project => (
              <article
                key={project.id}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform var(--transition-base) var(--ease-in-out), box-shadow var(--transition-base) var(--ease-in-out)'
                }}
                onClick={() => navigateTo(`/portfolio/${project.slug}`)}
                tabIndex={0}
                role="link"
                onKeyDown={e => e.key === 'Enter' && navigateTo(`/portfolio/${project.slug}`)}
              >
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={project.featuredImage} alt={project.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                  <h2 style={{ fontSize: 'var(--text-lg)', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-weight-medium)', color: 'var(--foreground)' }}>
                    {project.title}
                  </h2>
                  <p style={{ fontSize: 'var(--text-small)', fontFamily: 'var(--font-secondary)', color: 'var(--muted-foreground)' }}>
                    {project.excerpt}
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-1)', fontSize: 'var(--text-small)', color: 'var(--primary)', fontFamily: 'var(--font-primary)', fontWeight: 'var(--font-weight-medium)' }}>
                    View Case Study <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-12) 0' }}>
              <Paragraph>No projects with this tag yet.</Paragraph>
            </div>
          )}
        </Container>
      </Section>

      <Section spacing="md" background="muted">
        <Container>
          <FAQSection title="Portfolio FAQ" faqs={portfolioFAQs.slice(0, 3)} />
        </Container>
      </Section>

      <CTASection
        title="Need Similar Technology?"
        description="We have deep expertise across all the technologies showcased in our portfolio. Let us help with yours."
        primaryButtonText="Contact Us"
        primaryButtonPage="contact"
      />
    </>
  );
}
