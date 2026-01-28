/**
 * Single Tour Template
 * 
 * Displays a single tour or accommodation listing.
 */

import { SiteHeader } from '@/app/components/parts/SiteHeader';
import { SiteFooter } from '@/app/components/parts/SiteFooter';
import { Container } from '@/app/components/common/Container';
import { Section } from '@/app/components/common/Section';
import { Breadcrumbs } from '@/app/components/common/Breadcrumbs';
import { tours } from '@/app/data/tour-operator'; // Just import tours for now, logic could handle accommodations too
import { MapPin, Calendar, Check, Info, Star } from 'lucide-react';

export function SingleTourTemplate() {
  const tour = tours[0]; // Default to first tour for demo

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[400px]">
          <img 
            src={tour.featured_image} 
            alt={tour.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <Container className="relative h-full flex flex-col justify-end pb-12 text-white">
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Tours', href: '/tours' },
                { label: tour.title }
              ]}
              variant="dark"
            />
            <h1 className="text-5xl font-bold mb-4 mt-6">{tour.title}</h1>
            <div className="flex items-center gap-6 text-lg">
              <span className="flex items-center gap-2"><MapPin size={20} /> {tour.location.address}</span>
              <span className="flex items-center gap-2"><Calendar size={20} /> {tour.duration}</span>
            </div>
          </Container>
        </div>

        <Section spacing="lg">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: tour.description }} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                  <div className="space-y-6 border-l-2 border-[var(--border-soft)] pl-6 ml-3">
                    {tour.meta.find(m => m.key === 'itinerary')?.value.map((day: any) => (
                      <div key={day.day} className="relative">
                        <div className="absolute -left-[31px] top-0 w-4 h-4 bg-[var(--primary)] rounded-full" />
                        <h3 className="font-bold text-lg mb-2">Day {day.day}: {day.title}</h3>
                        <p className="text-[var(--muted-foreground)]">{day.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {tour.amenities.map(am => (
                      <div key={am} className="flex items-center gap-2">
                        <Check size={16} className="text-[var(--success)]" />
                        <span>{am}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border-soft)] shadow-sm sticky top-24">
                  <div className="text-3xl font-bold text-[var(--primary)] mb-2">{tour.price_from}</div>
                  <p className="text-sm text-[var(--muted-foreground)] mb-6">Per person sharing</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="p-3 bg-[var(--muted)] rounded-lg border border-[var(--border-soft)]">
                      <label className="block text-xs font-bold uppercase text-[var(--muted-foreground)] mb-1">Date</label>
                      <select className="w-full bg-transparent font-medium outline-none">
                        <option>Oct 15, 2023</option>
                        <option>Nov 12, 2023</option>
                      </select>
                    </div>
                    <div className="p-3 bg-[var(--muted)] rounded-lg border border-[var(--border-soft)]">
                      <label className="block text-xs font-bold uppercase text-[var(--muted-foreground)] mb-1">Guests</label>
                      <select className="w-full bg-transparent font-medium outline-none">
                        <option>2 Adults</option>
                        <option>1 Adult</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-[var(--primary)] text-white rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                    Book Now
                  </button>
                  <p className="text-xs text-center text-[var(--muted-foreground)] mt-4 flex items-center justify-center gap-1">
                    <Info size={12} /> No booking fees
                  </p>
                </div>
              </aside>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
