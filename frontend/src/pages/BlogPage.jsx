import React from 'react';
import { BookOpen, Calendar, ArrowRight, User } from 'lucide-react';

export function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Label-Free Kinetics: How Optical Ring Resonators Measure Biomolecular Affinity in Real Time',
      date: 'August 24, 2026',
      author: 'Dr. Marcus Vance',
      readTime: '6 min read',
      excerpt: 'Discover the semiconductor photonics physics that allow SiPhBioLabChip to track binding rates without fluorescent dye interference.'
    },
    {
      id: 2,
      title: 'Replacing IFA with 24-Analyte Autoimmune Biochips in Clinical Reference Labs',
      date: 'August 18, 2026',
      author: 'Elena Rostova, M.D.',
      readTime: '8 min read',
      excerpt: 'Comparative study demonstrating 99.8% concordance between SiPhBioLabChip ANA biochips and traditional indirect immunofluorescence.'
    },
    {
      id: 3,
      title: 'Decentralized Clinical Trials: Bringing 15-Minute Biomarker Turnaround to Mobile Nursing',
      date: 'August 10, 2026',
      author: 'Sarah Lin, Ph.D.',
      readTime: '5 min read',
      excerpt: 'How portable bio-analyzers enable instant fingerstick blood paneling for remote patient cohorts.'
    }
  ];

  return (
    <div style={{ color: '#1a1a2e', paddingTop: '3rem', paddingBottom: '6rem', fontFamily: "'Fira Code', monospace" }}>
      <section style={{ padding: '4rem 0 2rem 0', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#3661D6',
            marginBottom: '1rem',
            background: 'rgba(54, 97, 214, 0.1)',
            padding: '0.4rem 1rem',
            borderRadius: '100px'
          }}>
            <BookOpen size={14} />
            <span>Bio-Optical Research Insights</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 400 }}>
            Bio-Optical Kinetic Blog
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
            Articles, whitepapers, and scientific commentary from SiPhBioLabChip photonics engineers and biopharma specialists.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ padding: '0 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {posts.map((post) => (
              <div key={post.id} style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3661D6';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: '#64748b', marginBottom: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} />{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#1a1a2e', marginBottom: '0.75rem', lineHeight: 1.4, fontWeight: 600 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {post.excerpt}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: '#3661D6', fontWeight: 600 }}>By {post.author}</span>
                  <span style={{ color: '#1a1a2e', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>Read Article <ArrowRight size={14} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
