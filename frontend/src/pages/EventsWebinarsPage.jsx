import React from 'react';
import { Calendar, Video, MapPin, ArrowRight } from 'lucide-react';

export function EventsWebinarsPage() {
  const events = [
    {
      title: 'Global Silicon Photonics Diagnostics Symposium 2026',
      date: 'September 18, 2026',
      type: 'Keynote & Virtual Stream',
      location: 'San Diego Convention Center & Online',
      desc: 'Join industry pioneers exploring microfluidic biochip integration in oncology & autoimmune reference testing.'
    },
    {
      title: 'Live Workshop: Real-Time Kinetic Rate Constant Analysis',
      date: 'October 05, 2026',
      type: 'Virtual Hands-On Webinar',
      location: 'Zoom Bio-Optical Academy',
      desc: 'Interactive tutorial demonstrating how to analyze K_on / K_off resonance shift curves on the SiPhBio Lab analyzer.'
    }
  ];

  return (
    <div style={{ color: '#F8FAFC', paddingTop: '3rem', paddingBottom: '6rem' }}>
      <section style={{ padding: '4rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <Calendar size={14} />
            <span>Conferences & Webinars</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Events & <span className="gradient-text">Webinars</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>
            Connect with SiPhBioLabChip clinical specialists at upcoming global biopharma symposia and live online workshops.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {events.map((evt, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.82rem', color: '#06B6D4', fontWeight: 600, marginBottom: '0.75rem' }}>
                  <span>{evt.type}</span>
                  <span>•</span>
                  <span>{evt.date}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>{evt.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '1.25rem' }}>{evt.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <span style={{ color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} />{evt.location}</span>
                  <button onClick={() => alert(`Registration opened for ${evt.title}`)} className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                    Register Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
