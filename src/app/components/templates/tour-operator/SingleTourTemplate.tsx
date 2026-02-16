/**
 * Single Tour Template
 * 
 * Displays a single tour or accommodation listing.
 * 100% CSS variables — no Tailwind.
 * BEM naming: .single-tour-*
 * 
 * @see /src/styles/templates/single-tour.css
 */

import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { tours } from '@/app/data/tour-operator';
import { MapPin, Calendar, Check, Info } from 'lucide-react';
import '@/styles/templates/single-tour.css';

export function SingleTourTemplate() {
  const tour = tours[0]; // Default to first tour for demo

  return (
    <>
      {/* Hero */}
      <div className="single-tour__hero">
        <img 
          src={tour.featured_image} 
          alt={tour.title} 
          className="single-tour__hero-image"
        />
        <div className="single-tour__hero-overlay" />
        <Container className="single-tour__hero-content">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Tours', href: '/tours' },
              { label: tour.title }
            ]}
            variant="dark"
          />
          <h1 className="single-tour__title">{tour.title}</h1>
          <div className="single-tour__meta-row">
            <span className="single-tour__meta-item">
              <MapPin size={20} /> {tour.location.address}
            </span>
            <span className="single-tour__meta-item">
              <Calendar size={20} /> {tour.duration}
            </span>
          </div>
        </Container>
      </div>

      <Section spacing="lg">
        <Container>
          <div className="single-tour__layout">
            <div className="single-tour__main">
              {/* Overview */}
              <div>
                <h2 className="single-tour__section-title">Overview</h2>
                <div
                  className="single-tour__prose"
                  dangerouslySetInnerHTML={{ __html: tour.description }}
                />
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="single-tour__section-title">Itinerary</h2>
                <div className="single-tour__itinerary">
                  {tour.meta.find(m => m.key === 'itinerary')?.value.map((day: any) => (
                    <div key={day.day} className="single-tour__itinerary-day">
                      <div className="single-tour__itinerary-dot" />
                      <h3 className="single-tour__itinerary-title">Day {day.day}: {day.title}</h3>
                      <p className="single-tour__itinerary-content">{day.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="single-tour__section-title">Amenities</h2>
                <div className="single-tour__amenities-grid">
                  {tour.amenities.map(am => (
                    <div key={am} className="single-tour__amenity">
                      <Check size={16} className="single-tour__amenity-icon" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="single-tour__sidebar">
              <div className="single-tour__booking-card">
                <div className="single-tour__price">{tour.price_from}</div>
                <p className="single-tour__price-note">Per person sharing</p>
                
                <div className="single-tour__form-fields">
                  <div className="single-tour__form-field">
                    <label className="single-tour__form-label">Date</label>
                    <select className="single-tour__form-select">
                      <option>Oct 15, 2023</option>
                      <option>Nov 12, 2023</option>
                    </select>
                  </div>
                  <div className="single-tour__form-field">
                    <label className="single-tour__form-label">Guests</label>
                    <select className="single-tour__form-select">
                      <option>2 Adults</option>
                      <option>1 Adult</option>
                    </select>
                  </div>
                </div>

                <button className="single-tour__book-btn">
                  Book Now
                </button>
                <p className="single-tour__booking-note">
                  <Info size={12} /> No booking fees
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
