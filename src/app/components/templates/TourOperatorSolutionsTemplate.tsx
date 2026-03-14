import React from 'react';
import { Compass, Calendar, MapPin, CreditCard, Users, TrendUp as TrendingUp, Airplane as Plane, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { loadCSSBundle } from '../../utils/css-bundle-loader';
import { Link } from 'react-router';

// Load any necessary CSS bundle, though styling here is heavily CSS-variable driven
loadCSSBundle('solutions');

export function TourOperatorSolutionsTemplate() {
  return (
    <div 
      className="wp-block-group alignfull" 
      style={{ 
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'var(--font-primary)',
        minHeight: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* HERO SECTION */}
      <section 
        className="wp-block-group alignfull"
        style={{
          position: 'relative',
          paddingTop: 'var(--spacing-32)',
          paddingBottom: 'var(--spacing-24)',
          background: 'linear-gradient(135deg, color-mix(in srgb, var(--background) 20%, var(--black)), color-mix(in srgb, var(--primary) 15%, var(--black)))',
          borderBottom: '1px solid var(--border)',
          overflow: 'hidden'
        }}
      >
        {/* Neon Glow Effects */}
        <div 
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '40vw',
            height: '40vw',
            background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 20%, transparent) 0%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 0
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '50vw',
            height: '50vw',
            background: 'radial-gradient(circle, color-mix(in srgb, var(--neon-color, #7BE7FF) 15%, transparent) 0%, transparent 70%)',
            filter: 'blur(80px)',
            zIndex: 0
          }}
        />

        <div className="wp-block-group wp-max-w-6xl" style={{ margin: '0 auto', padding: '0 var(--spacing-6)', position: 'relative', zIndex: 10, textAlign: 'center' }}>
          
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-2)', 
              padding: 'var(--spacing-2) var(--spacing-4)',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--primary) 30%, transparent)',
              marginBottom: 'var(--spacing-8)'
            }}
          >
            <Compass size={18} style={{ color: 'var(--primary)' }} />
            <span style={{ 
              fontSize: 'var(--text-sm)', 
              fontWeight: 'var(--font-weight-bold)', 
              letterSpacing: 'var(--letter-spacing-wider)',
              color: 'var(--primary)',
              textTransform: 'uppercase'
            }}>Tour Operator Platform</span>
          </div>

          <h1 
            className="wp-block-heading"
            style={{ 
              fontSize: 'var(--text-6xl)', 
              fontWeight: 'var(--font-weight-black)', 
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-tighter)',
              marginBottom: 'var(--spacing-6)',
              color: 'var(--color-white)',
              textShadow: 'var(--shadow-neon)'
            }}
          >
            The Ultimate Digital Engine<br />
            <span style={{ color: 'var(--primary)' }}>for Travel Pioneers</span>
          </h1>

          <p 
            className="wp-block-paragraph"
            style={{ 
              fontSize: 'var(--text-xl)', 
              color: 'var(--muted-foreground)', 
              maxWidth: '800px', 
              margin: '0 auto var(--spacing-10)',
              lineHeight: 'var(--line-height-relaxed)',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            A high-performance, booking-ready WordPress solution tailored specifically for DMCs, safari operators, and adventure travel companies. Beautiful itineraries, seamless Wetu integration, and direct bookings built in.
          </p>

          <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                padding: 'var(--spacing-4) var(--spacing-8)',
                borderRadius: 'var(--radius-full)',
                fontWeight: 'var(--font-weight-bold)',
                fontSize: 'var(--text-base)',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-glow)',
                transition: 'all var(--transition-base)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-neon-intense)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              Start Your Journey <ArrowRight size={20} />
            </Link>
            
            <Link 
              to="/work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                backgroundColor: 'transparent',
                color: 'var(--foreground)',
                border: '2px solid var(--border)',
                padding: 'var(--spacing-4) var(--spacing-8)',
                borderRadius: 'var(--radius-full)',
                fontWeight: 'var(--font-weight-bold)',
                fontSize: 'var(--text-base)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--foreground)';
              }}
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section 
        className="wp-block-group alignfull"
        style={{
          paddingTop: 'var(--spacing-24)',
          paddingBottom: 'var(--spacing-24)',
          backgroundColor: 'var(--background)'
        }}
      >
        <div className="wp-block-group wp-max-w-6xl" style={{ margin: '0 auto', padding: '0 var(--spacing-6)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <h2 
              className="wp-block-heading"
              style={{ 
                fontSize: 'var(--text-4xl)', 
                fontWeight: 'var(--font-weight-bold)', 
                marginBottom: 'var(--spacing-4)' 
              }}
            >
              Engineered for Tourism Growth
            </h2>
            <p style={{ color: 'var(--muted-foreground)', fontSize: 'var(--text-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to showcase destinations, build stunning itineraries, and manage bookings securely.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-8)'
          }}>
            {[
              {
                icon: Calendar,
                title: 'Advanced Booking System',
                desc: 'Real-time availability calendars, dynamic seasonal pricing, and automated confirmations that turn browsers into booked guests.'
              },
              {
                icon: MapPin,
                title: 'Itinerary & Route Maps',
                desc: 'Interactive day-by-day itineraries with integrated Google Maps, high-resolution galleries, and downloadable PDF summaries.'
              },
              {
                icon: CreditCard,
                title: 'Multi-Currency Payments',
                desc: 'Secure checkout with support for multiple payment gateways, deposit handling, and automated instalment invoicing.'
              },
              {
                icon: Plane,
                title: 'Wetu Importer Integration',
                desc: 'Automatically sync your complex itineraries, accommodations, and destination data directly from Wetu into your website.'
              },
              {
                icon: Users,
                title: 'B2B Trade Portals',
                desc: 'Secure agent logins allowing your trade partners to access net rates, check live availability, and manage their clients.'
              },
              {
                icon: TrendingUp,
                title: 'Travel SEO Optimized',
                desc: 'Built with rich schema markup for Google Travel, ensuring your tours rank high for destination-specific searches.'
              }
            ].map((feature, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--card)',
                  padding: 'var(--spacing-8)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-soft)',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-neon)';
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--primary) 30%, transparent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                  e.currentTarget.style.borderColor = 'var(--border-soft)';
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  padding: 'var(--spacing-4)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)',
                  color: 'var(--primary)',
                  marginBottom: 'var(--spacing-6)'
                }}>
                  <feature.icon size={28} />
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-3)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: 'var(--line-height-relaxed)', fontFamily: 'var(--font-secondary)' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME / HIGHLIGHT SECTION */}
      <section 
        className="wp-block-group alignfull"
        style={{
          paddingTop: 'var(--spacing-24)',
          paddingBottom: 'var(--spacing-24)',
          backgroundColor: 'color-mix(in srgb, var(--primary) 5%, var(--background))',
          borderTop: '1px solid color-mix(in srgb, var(--primary) 20%, transparent)',
          borderBottom: '1px solid color-mix(in srgb, var(--primary) 20%, transparent)'
        }}
      >
        <div className="wp-block-group wp-max-w-6xl" style={{ margin: '0 auto', padding: '0 var(--spacing-6)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--spacing-16)',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-6)' }}>
                Stop wrestling with generic plugins. <br/>
                <span style={{ color: 'var(--primary)' }}>Start selling experiences.</span>
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-8)' }}>
                Our purpose-built Tour Operator framework connects the dots between inspiring destination content and a frictionless booking journey.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                {[
                  'Increase direct booking conversion rates',
                  'Dramatically reduce manual data entry',
                  'Present a premium, trustworthy brand image',
                  'Capture international markets with multi-language readiness'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-3)' }}>
                    <CheckCircle size={24} style={{ color: 'var(--success)', flexShrink: 0 }} />
                    <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 30%, transparent) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }} />
              <div style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid var(--border)',
                padding: 'var(--spacing-8)',
                position: 'relative',
                zIndex: 1,
                boxShadow: 'var(--shadow-2xl)'
              }}>
                {/* Mockup visual of an itinerary card */}
                <div style={{ width: '100%', height: '200px', backgroundColor: 'var(--muted)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--spacing-6)', backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <h4 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-2)' }}>7-Day Serengeti Migration Safari</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)', color: 'var(--muted-foreground)', fontSize: 'var(--text-sm)', fontFamily: 'var(--font-secondary)' }}>
                  <span>Tanzania • 6 Nights</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-lg)' }}>$3,450 <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-regular)', color: 'var(--muted-foreground)' }}>pps</span></span>
                </div>
                <div style={{ height: '4px', width: '100%', backgroundColor: 'var(--muted)', borderRadius: 'var(--radius-full)', marginBottom: 'var(--spacing-6)' }}>
                  <div style={{ height: '100%', width: '40%', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-full)' }} />
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
                  <div style={{ flex: 1, padding: 'var(--spacing-3)', textAlign: 'center', backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: 'var(--radius-md)', fontWeight: 'var(--font-weight-bold)' }}>Book Now</div>
                  <div style={{ flex: 1, padding: 'var(--spacing-3)', textAlign: 'center', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', fontWeight: 'var(--font-weight-medium)' }}>View Itinerary</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section 
        className="wp-block-group alignfull"
        style={{
          paddingTop: 'var(--spacing-32)',
          paddingBottom: 'var(--spacing-32)',
          backgroundColor: 'var(--background)',
          textAlign: 'center'
        }}
      >
        <div className="wp-block-group wp-max-w-4xl" style={{ margin: '0 auto', padding: '0 var(--spacing-6)' }}>
          <h2 style={{ fontSize: 'var(--text-5xl)', fontWeight: 'var(--font-weight-black)', marginBottom: 'var(--spacing-6)', letterSpacing: 'var(--letter-spacing-tight)' }}>
            Ready to upgrade your tourism business?
          </h2>
          <p style={{ fontSize: 'var(--text-xl)', color: 'var(--muted-foreground)', marginBottom: 'var(--spacing-10)', fontFamily: 'var(--font-secondary)' }}>
            Let's discuss how we can streamline your bookings, sync your itineraries, and build a digital platform that converts.
          </p>
          <Link 
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--spacing-3)',
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-black)',
              padding: 'var(--spacing-5) var(--spacing-10)',
              borderRadius: 'var(--radius-full)',
              fontWeight: 'var(--font-weight-black)',
              fontSize: 'var(--text-lg)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-neon)',
              transition: 'all var(--transition-base)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = 'var(--shadow-neon-intense)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'var(--shadow-neon)';
            }}
          >
            Schedule a Demo <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default TourOperatorSolutionsTemplate;