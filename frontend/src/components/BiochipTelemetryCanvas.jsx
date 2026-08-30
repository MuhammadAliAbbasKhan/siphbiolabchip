import React, { useEffect, useRef, useState } from 'react';
import { Activity, RefreshCw, Zap, Sliders, CheckCircle2 } from 'lucide-react';

export function BiochipTelemetryCanvas() {
  const canvasRef = useRef(null);
  const [analyte, setAnalyte] = useState('Autoimmune Panel (ANA / dsDNA)');
  const [shift, setShift] = useState(142.8);
  const [qFactor, setQFactor] = useState(125000);
  const [kd, setKd] = useState('2.4 × 10⁻¹¹ M');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const render = () => {
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Dark Photonic Chip Grid Backdrop
      ctx.fillStyle = '#0B132B';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid Lines
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 2. Draw Waveguide Photonic Track
      const trackY = canvas.height * 0.45;
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.6)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(30, trackY);
      ctx.lineTo(canvas.width - 30, trackY);
      ctx.stroke();

      // Laser Light Pulse Wave in Waveguide
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 30; x < canvas.width - 30; x += 5) {
        const y = trackY + Math.sin((x * 0.04) - (time * 2)) * 6;
        if (x === 30) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 3. Draw Silicon Ring Resonators (3 Optical Sensor Rings)
      const rings = [
        { x: canvas.width * 0.25, r: 28, label: 'Sensor Array #1 (ANA)' },
        { x: canvas.width * 0.50, r: 35, label: 'Resonator #2 (dsDNA)' },
        { x: canvas.width * 0.75, r: 28, label: 'Control Ring #3' }
      ];

      rings.forEach((ring, idx) => {
        const ringY = trackY - ring.r - 2;
        
        // Ring Outer Glow
        ctx.shadowColor = '#06B6D4';
        ctx.shadowBlur = 15;
        ctx.strokeStyle = idx === 1 ? '#06B6D4' : '#10B981';
        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.arc(ring.x, ringY, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0; // reset shadow

        // Light circulating inside ring
        const orbitAngle = time * (1.5 + idx * 0.3);
        const photonX = ring.x + Math.cos(orbitAngle) * ring.r;
        const photonY = ringY + Math.sin(orbitAngle) * ring.r;

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(photonX, photonY, 4, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = '#94A3B8';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(ring.label, ring.x, ringY - ring.r - 10);
      });

      // 4. Kinetic Wavelength Resonance Dip Curve at bottom
      const graphY = canvas.height * 0.85;
      ctx.strokeStyle = '#34D399';
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let gx = 40; gx < canvas.width - 40; gx += 4) {
        // Dip resonance peak
        const normalizedX = (gx - canvas.width * 0.5) / 40;
        const dip = Math.exp(-Math.pow(normalizedX, 2)) * 40;
        const gy = graphY - dip + Math.sin(time * 3 + gx * 0.05) * 1.5;
        
        if (gx === 40) ctx.moveTo(gx, gy);
        else ctx.lineTo(gx, gy);
      }
      ctx.stroke();

      // Resonance Peak Marker
      ctx.fillStyle = '#06B6D4';
      ctx.font = '12px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`Δλ Peak Shift: +${shift} pm (Binding Equilibrium)`, canvas.width * 0.5, graphY - 50);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [shift]);

  const handleSelectAnalyte = (name, newShift, newQ, newKd) => {
    setAnalyte(name);
    setShift(newShift);
    setQFactor(newQ);
    setKd(newKd);
  };

  return (
    <div className="glass-card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1.25rem'
      }}>
        <div>
          <div className="badge" style={{ marginBottom: '0.4rem' }}>
            <Activity size={13} />
            <span>Real-Time Silicon Photonics Telemetry</span>
          </div>
          <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF' }}>
            Biochip Optical Ring Resonator Telemetry
          </h3>
        </div>

        {/* Preset Selectors */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => handleSelectAnalyte('Autoimmune Panel (ANA / dsDNA)', 142.8, 125000, '2.4 × 10⁻¹¹ M')}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: analyte.includes('Autoimmune') ? '#06B6D4' : 'rgba(255,255,255,0.06)',
              color: '#FFFFFF'
            }}
          >
            Autoimmune ANA
          </button>
          <button
            onClick={() => handleSelectAnalyte('Rheumatoid Factor (RF / CCP)', 188.4, 140000, '1.1 × 10⁻¹² M')}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: analyte.includes('Rheumatoid') ? '#06B6D4' : 'rgba(255,255,255,0.06)',
              color: '#FFFFFF'
            }}
          >
            Rheumatoid RF
          </button>
          <button
            onClick={() => handleSelectAnalyte('Oncology Biomarker (HER2 / CEA)', 215.1, 160000, '8.6 × 10⁻¹³ M')}
            style={{
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: analyte.includes('Oncology') ? '#06B6D4' : 'rgba(255,255,255,0.06)',
              color: '#FFFFFF'
            }}
          >
            Oncology Biomarkers
          </button>
        </div>
      </div>

      {/* HTML5 Canvas */}
      <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
        <canvas
          ref={canvasRef}
          width={760}
          height={320}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Live Telemetry Gauges Footer */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '1rem',
        marginTop: '1.25rem'
      }}>
        <div style={{ background: 'rgba(7, 11, 20, 0.6)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Resonance Shift (Δλ)</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38BDF8' }}>+{shift} pm</div>
        </div>

        <div style={{ background: 'rgba(7, 11, 20, 0.6)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Optical Quality Factor (Q)</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10B981' }}>{qFactor.toLocaleString()}</div>
        </div>

        <div style={{ background: 'rgba(7, 11, 20, 0.6)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Binding Affinity (K_D)</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F59E0B' }}>{kd}</div>
        </div>

        <div style={{ background: 'rgba(7, 11, 20, 0.6)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Flow Rate & Temperature</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#EC4899' }}>15.2 µL/min | 25.0°C</div>
        </div>
      </div>
    </div>
  );
}
