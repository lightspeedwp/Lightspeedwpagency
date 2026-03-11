/**
 * Tour Operator Archive Template
 * 
 * Displays listings for Tours, Accommodations, and Destinations.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .tour-operator-archive__*
 * 
 * @see /src/styles/templates/tour-operator-archive-optimized.css
 */

import '../../../../styles/templates/tour-operator-archive-optimized.css';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { allTourContent } from '@/app/data/tour-operator';
import { MapPin, Calendar, Star, Check } from '@phosphor-icons/react';
import { Link } from 'react-router';

export function TourOperatorArchiveTemplate() {
  const tours = allTourContent.filter(item => item.type === 'tour');
  const accommodations = allTourContent.filter(item => item.type === 'accommodation');

  return (
    <>
      {/* Hero */}
      <section className="tour-operator-archive__hero">
        <Container>
          <h1 className="tour-operator-archive__hero-title">Discover Your Next Adventure</h1>
          <p className="tour-operator-archive__hero-desc">Explore our curated selection of tours and luxury accommodations.</p>
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          {/* Tours Section */}
          <h2 className="tour-operator-archive__section-title">Featured Tours</h2>
          <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)', marginBottom: 'var(--spacing-16)' }}>
            {tours.map(tour => (
              <article
                key={tour.id}
                className="tour-operator-archive__tour-card"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); } }}
              >
                <div className="tour-operator-archive__tour-image-wrapper">
                  <img 
                    src={tour.featured_image} 
                    alt={tour.title} 
                    className="tour-operator-archive__tour-image"
                  />
                  <div className="tour-operator-archive__tour-duration">
                    <Calendar size={14} /> {tour.duration}
                  </div>
                </div>
                <div className="tour-operator-archive__tour-body">
                  <div className="tour-operator-archive__tour-location">
                    <MapPin size={16} />
                    {tour.location.address}
                  </div>
                  <h3 className="tour-operator-archive__tour-title">{tour.title}</h3>
                  <div
                    className="tour-operator-archive__tour-excerpt"
                    dangerouslySetInnerHTML={{ __html: tour.description }}
                  />
                  <div className="tour-operator-archive__tour-footer">
                    <span className="tour-operator-archive__tour-price">{tour.price_from}</span>
                    <Link to={`/tours/${tour.id}`} className="tour-operator-archive__tour-link">View Itinerary</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Accommodations Section */}
          <h2 className="tour-operator-archive__section-title">Luxury Accommodations</h2>
          <div className="wp-grid-3-cols" style={{ gap: 'var(--spacing-8)' }}>
            {accommodations.map(acc => (
              <article
                key={acc.id}
                className="tour-operator-archive__acc-card"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); } }}
              >
                <div className="tour-operator-archive__acc-image-wrapper">
                  <img 
                    src={acc.featured_image} 
                    alt={acc.title} 
                    className="tour-operator-archive__acc-image"
                  />
                </div>
                <div className="tour-operator-archive__acc-body">
                  <div className="tour-operator-archive__acc-stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <h3 className="tour-operator-archive__acc-title">{acc.title}</h3>
                  <p className="tour-operator-archive__acc-desc">{acc.short_description}</p>
                  
                  <div className="tour-operator-archive__acc-amenities">
                    {acc.amenities.map(am => (
                      <div key={am} className="tour-operator-archive__acc-amenity">
                        <Check size={12} className="tour-operator-archive__acc-amenity-icon" /> {am}
                      </div>
                    ))}
                  </div>

                  <div className="tour-operator-archive__acc-footer">
                    <span className="tour-operator-archive__acc-price">{acc.price_from}</span>
                    <button className="tour-operator-archive__acc-book-btn">Book Now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}