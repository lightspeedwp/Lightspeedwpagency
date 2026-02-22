/**
 * Design Blocks Showcase
 * 
 * Comprehensive display of core design blocks:
 * - Cards, Accordions, Tabs
 * - Badges, Separators, Spacers
 * - Layout blocks (Group, Stack, Grid, Columns)
 * 
 * Demonstrates component composition and styling within the "Funky" system.
 * 
 * @see /src/styles/templates/design-blocks-showcase.css
 */

import { Container } from '../common/Container';
import { BreadcrumbPart } from '../parts/BreadcrumbPart';
import { ScrollReveal } from '../../hooks/useScrollReveal';
import { 
  Layers, 
  CreditCard, 
  ChevronDown, 
  Minus, 
  Layout,
  Grid as GridIcon,
  Columns as ColumnsIcon,
  Maximize
} from 'lucide-react';

// Block Imports
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '../blocks/design/Card';
import { Accordion, AccordionItem } from '../blocks/design/Accordion';
import { Badge } from '../blocks/design/Badge';
import { Separator } from '../blocks/design/Separator';
import { Spacer } from '../blocks/design/Spacer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../blocks/design/Tabs';
import { Button } from '../blocks/design/Buttons';
import { Group } from '../blocks/design/Group';
import { Stack } from '../blocks/design/Stack';
import { Grid } from '../blocks/design/Grid';
import { Columns, Column } from '../blocks/design/Columns';



export function DesignBlocksShowcase() {
  const breadcrumbs = [
    { label: 'Home', page: 'home' as const },
    { label: 'Developer Tools', page: 'dev-tools' as const },
    { label: 'Design Blocks' },
  ];

  return (
    <div className="design-showcase">
      <BreadcrumbPart items={breadcrumbs} />

      {/* Hero */}
      <section className="design-showcase__hero">
        <Container>
          <ScrollReveal animation="fade-up">
            <h1 className="design-showcase__hero-title">Design Blocks</h1>
            <p className="design-showcase__hero-desc">
              Core structural and container components for building complex layouts.
              Fully responsive and accessible.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <Container>
        {/* 1. Cards */}
        <ScrollReveal animation="fade-up" delay={100}>
          <section className="design-showcase__section">
            <div className="design-showcase__section-header">
              <CreditCard className="design-showcase__section-icon" size={20} />
              <h2 className="design-showcase__section-title">Cards</h2>
            </div>
            
            <div className="design-showcase__grid">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Card</CardTitle>
                  <CardDescription>Default container style</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Content goes here. Uses var(--card) background.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">Action</Button>
                </CardFooter>
              </Card>

              <Card className="wp-block-card--highlight">
                <CardHeader>
                  <CardTitle>Highlighted Card</CardTitle>
                  <CardDescription>With accent styling</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card could use a special variant class or neon effects.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="primary">Primary</Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* 2. Interactive (Accordion & Tabs) */}
        <ScrollReveal animation="fade-up" delay={200}>
          <section className="design-showcase__section">
            <div className="design-showcase__section-header">
              <ChevronDown className="design-showcase__section-icon" size={20} />
              <h2 className="design-showcase__section-title">Interactive</h2>
            </div>

            <div className="design-showcase__grid">
              <div className="design-showcase__demo">
                <span className="design-showcase__demo-title">Accordion</span>
                <Accordion defaultOpen="item-1">
                  <AccordionItem id="item-1" question="Is this accessible?" answer="Yes, it uses proper ARIA attributes." />
                  <AccordionItem id="item-2" question="Can I style it?" answer="Yes, via CSS variables." />
                  <AccordionItem id="item-3" question="Is it animated?" answer="Smooth height transitions included." />
                </Accordion>
              </div>

              <div className="design-showcase__demo">
                <span className="design-showcase__demo-title">Tabs</span>
                <Tabs defaultValue="account">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <div style={{ padding: 'var(--spacing-4)', background: 'var(--card)', borderRadius: 'var(--radius-md)', marginTop: 'var(--spacing-2)' }}>
                    <TabsContent value="account">Manage your account details here.</TabsContent>
                    <TabsContent value="password">Change your password securely.</TabsContent>
                    <TabsContent value="settings">Adjust your preferences.</TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 3. Utility (Badge, Separator, Spacer) */}
        <ScrollReveal animation="fade-up" delay={300}>
          <section className="design-showcase__section">
            <div className="design-showcase__section-header">
              <Minus className="design-showcase__section-icon" size={20} />
              <h2 className="design-showcase__section-title">Utilities</h2>
            </div>

            <div className="design-showcase__demo">
              <span className="design-showcase__demo-title">Badges</span>
              <Group gap="sm" wrap>
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
              </Group>

              <Spacer size="lg" />
              <Separator />
              <Spacer size="lg" />

              <span className="design-showcase__demo-title">Separators</span>
              <p>Above is a default horizontal separator.</p>
            </div>
          </section>
        </ScrollReveal>

        {/* 4. Layout (Grid, Columns, Stack) */}
        <ScrollReveal animation="fade-up" delay={400}>
          <section className="design-showcase__section">
            <div className="design-showcase__section-header">
              <Layout className="design-showcase__section-icon" size={20} />
              <h2 className="design-showcase__section-title">Layout Primitives</h2>
            </div>

            <div className="design-showcase__demo">
              <span className="design-showcase__demo-title">Columns (Responsive)</span>
              <Columns count={3} gap="md" className="wp-mb-8">
                <Column>Column 1</Column>
                <Column>Column 2</Column>
                <Column>Column 3</Column>
              </Columns>

              <span className="design-showcase__demo-title">Grid (Auto-fit)</span>
              <Grid minWidth="150px" gap="md" className="wp-mb-8">
                <div style={{ background: 'var(--card)', padding: '1rem', border: '1px solid var(--border-soft)' }}>Item 1</div>
                <div style={{ background: 'var(--card)', padding: '1rem', border: '1px solid var(--border-soft)' }}>Item 2</div>
                <div style={{ background: 'var(--card)', padding: '1rem', border: '1px solid var(--border-soft)' }}>Item 3</div>
                <div style={{ background: 'var(--card)', padding: '1rem', border: '1px solid var(--border-soft)' }}>Item 4</div>
              </Grid>

              <span className="design-showcase__demo-title">Stack (Vertical Flex)</span>
              <Stack gap="md">
                <div style={{ background: 'var(--muted)', padding: '0.5rem' }}>Stack Item 1</div>
                <div style={{ background: 'var(--muted)', padding: '0.5rem' }}>Stack Item 2</div>
                <div style={{ background: 'var(--muted)', padding: '0.5rem' }}>Stack Item 3</div>
              </Stack>
            </div>
          </section>
        </ScrollReveal>
      </Container>
    </div>
  );
}
