/**
 * Style Guide Template
 * 
 * WordPress concept: page-style-guide.html (custom template)
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../common/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { Button } from '../blocks/design/Buttons';

export function StyleGuideTemplate() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <Heading level={1} className="wp-mb-8">Style Guide</Heading>
          
          <Section spacing="md">
            <Heading level={2} className="wp-mb-6">Typography</Heading>
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
            <Paragraph className="wp-mt-4">
              This is a standard paragraph. The quick brown fox jumps over the lazy dog.
            </Paragraph>
            <Paragraph size="lead" className="wp-mt-4">
              This is a lead paragraph text.
            </Paragraph>
          </Section>

          <Section spacing="md">
            <Heading level={2} className="wp-mb-6">Buttons</Heading>
            <div className="wp-flex wp-gap-4 wp-flex-wrap">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </Section>
          
          <Section spacing="md">
            <Heading level={2} className="wp-mb-6">Colors</Heading>
            <div className="wp-grid-4-cols">
              <div className="wp-p-4 wp-bg-primary wp-text-primary-foreground wp-rounded">Primary</div>
              <div className="wp-p-4 wp-bg-secondary wp-text-secondary-foreground wp-rounded">Secondary</div>
              <div className="wp-p-4 wp-bg-accent wp-text-accent-foreground wp-rounded">Accent</div>
              <div className="wp-p-4 wp-bg-muted wp-text-muted-foreground wp-rounded">Muted</div>
              <div className="wp-p-4 wp-bg-card wp-text-card-foreground wp-rounded wp-border">Card</div>
              <div className="wp-p-4 wp-bg-destructive wp-text-destructive-foreground wp-rounded">Destructive</div>
            </div>
          </Section>
        </Container>
      </Section>
    </>
  );
}
