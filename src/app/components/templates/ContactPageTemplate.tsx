/**
 * Contact Page Template
 * 
 * WordPress concept: page-contact.html
 */

import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Heading } from '../blocks/text/Heading';
import { Paragraph } from '../blocks/text/Paragraph';
import { ContactForm } from '../patterns/ContactForm';

export function ContactPageTemplate() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <Heading level={1} align="center" className="wp-mb-6">Contact Us</Heading>
          <Paragraph size="large" align="center" className="wp-mb-12 wp-max-w-3xl wp-mx-auto">
            We'd love to hear from you. Fill out the form below or reach out via email.
          </Paragraph>
          
          <div className="wp-max-w-4xl wp-mx-auto">
             <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
