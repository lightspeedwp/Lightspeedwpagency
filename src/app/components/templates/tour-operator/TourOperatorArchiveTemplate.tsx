/**
 * Tour Operator Archive Template
 * 
 * Displays listings for Tours, Accommodations, and Destinations.
 * Uses LSX Tour Operator data structure.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { allTourContent } from '@/app/data/tour-operator';
import { MapPin, Calendar, Star, Check } from 'lucide-react';
import { useNavigation } from '@/app/contexts/NavigationContext';

export function TourOperatorArchiveTemplate() {
  const { navigateTo } = useNavigation();
  const tours = allTourContent.filter(item => item.type === 'tour');
  const accommodations = allTourContent.filter(item => item.type === 'accommodation');

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-[var(--primary)] text-white py-20">
          <Container>
            <h1 className="text-4xl font-bold mb-4">Discover Your Next Adventure</h1>
            <p className="text-xl opacity-90">Explore our curated selection of tours and luxury accommodations.</p>
          </Container>
        </section>

        <Section spacing="lg">
          <Container>
            <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)]">Featured Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {tours.map(tour => (
                <article key={tour.id} className="bg-[var(--card)] rounded-xl overflow-hidden shadow-lg border border-[var(--border-soft)] group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={tour.featured_image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--foreground)] flex items-center gap-1">
                      <Calendar size={14} /> {tour.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-2">
                      <MapPin size={16} />
                      {tour.location.address}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{tour.title}</h3>
                    <div className="text-sm text-[var(--muted-foreground)] line-clamp-2 mb-4" dangerouslySetInnerHTML={{ __html: tour.description }} />
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border-soft)]">
                      <span className="font-bold text-lg text-[var(--primary)]">{tour.price_from}</span>
                      <button className="text-sm font-semibold hover:underline">View Itinerary</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)]">Luxury Accommodations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accommodations.map(acc => (
                <article key={acc.id} className="flex flex-col md:flex-row bg-[var(--card)] rounded-xl overflow-hidden shadow-lg border border-[var(--border-soft)] group cursor-pointer">
                  <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                    <img 
                      src={acc.featured_image} 
                      alt={acc.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-center">
                    <div className="flex items-center gap-1 text-[var(--warning)] mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{acc.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)] mb-4">{acc.short_description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {acc.amenities.map(am => (
                        <div key={am} className="flex items-center gap-2 text-xs text-[var(--foreground)]">
                          <Check size={12} className="text-[var(--primary)]" /> {am}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-bold text-lg">{acc.price_from}</span>
                      <button className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-medium hover:bg-[var(--primary-dark)] transition-colors">Book Now</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
