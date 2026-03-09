/**
 * Tour Operator Archive Template
 * 
 * Displays listings for Tours, Accommodations, and Destinations.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .to-archive-*
 * 
 * @see /src/styles/templates/tour-operator-archive.css
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
      <section className="to-archive__hero">
        <Container>
          <h1 className="to-archive__hero-title">Discover Your Next Adventure</h1>
          <p className="to-archive__hero-desc">Explore our curated selection of tours and luxury accommodations.</p>
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          {/* Tours Section */}
          <h2 className="to-archive__section-title">Featured Tours</h2>
          <div className="to-archive__tours-grid">
            {tours.map(tour => (
              <article
                key={tour.id}
                className="to-archive__tour-card"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); } }}
              >
                <div className="to-archive__tour-image-wrapper">
                  <img 
                    src={tour.featured_image} 
                    alt={tour.title} 
                    className="to-archive__tour-image"
                  />
                  <div className="to-archive__tour-duration">
                    <Calendar size={14} /> {tour.duration}
                  </div>
                </div>
                <div className="to-archive__tour-body">
                  <div className="to-archive__tour-location">
                    <MapPin size={16} />
                    {tour.location.address}
                  </div>
                  <h3 className="to-archive__tour-title">{tour.title}</h3>
                  <div
                    className="to-archive__tour-excerpt"
                    dangerouslySetInnerHTML={{ __html: tour.description }}
                  />
                  <div className="to-archive__tour-footer">
                    <span className="to-archive__tour-price">{tour.price_from}</span>
                    <Link to={`/tours/${tour.id}`} className="to-archive__tour-link">View Itinerary</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Accommodations Section */}
          <h2 className="to-archive__section-title">Luxury Accommodations</h2>
          <div className="to-archive__acc-grid">
            {accommodations.map(acc => (
              <article
                key={acc.id}
                className="to-archive__acc-card"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); } }}
              >
                <div className="to-archive__acc-image-wrapper">
                  <img 
                    src={acc.featured_image} 
                    alt={acc.title} 
                    className="to-archive__acc-image"
                  />
                </div>
                <div className="to-archive__acc-body">
                  <div className="to-archive__acc-stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <h3 className="to-archive__acc-title">{acc.title}</h3>
                  <p className="to-archive__acc-desc">{acc.short_description}</p>
                  
                  <div className="to-archive__acc-amenities">
                    {acc.amenities.map(am => (
                      <div key={am} className="to-archive__acc-amenity">
                        <Check size={12} className="to-archive__acc-amenity-icon" /> {am}
                      </div>
                    ))}
                  </div>

                  <div className="to-archive__acc-footer">
                    <span className="to-archive__acc-price">{acc.price_from}</span>
                    <button className="to-archive__acc-book-btn">Book Now</button>
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