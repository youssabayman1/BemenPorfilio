import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Globe } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education & Credentials
      </motion.h2>

      <div className="grid grid-cols-3">
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)' }}>
              <GraduationCap size={24} color="var(--accent-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
                Bachelor of Computer Science
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>Canadian International College</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(14, 165, 233, 0.1)' }}>
              <Award size={24} color="var(--accent-secondary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
                Flutter Development Certification
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>Era Soft</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', paddingLeft: '4.5rem' }}>
            Covered topics: UI design, advanced state management, API integration, and mobile performance optimization.
          </p>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)' }}>
              <Users size={24} color="var(--accent-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
                Organisations
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>Enactus CIC</p>
            </div>
          </div>
          
          <h4 style={{ fontSize: '1rem', color: 'var(--accent-primary)', marginBottom: '0.75rem', fontWeight: 600 }}>
            IT Department Team Leader
          </h4>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent-secondary)', marginTop: '0.2rem' }}>•</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Recruited, trained, and mentored new members of the IT department.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent-secondary)', marginTop: '0.2rem' }}>•</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Led technical projects, ensuring teams met deadlines and quality standards.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent-secondary)', marginTop: '0.2rem' }}>•</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Prepared comprehensive project plans and technical roadmaps for the season.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)' }}>
              <Globe size={24} color="var(--accent-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
                Languages
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>Communication</p>
            </div>
          </div>
          
          <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <span style={{ color: 'white', fontWeight: 600 }}>Arabic</span>
              <span style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Native</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <span style={{ color: 'white', fontWeight: 600 }}>English</span>
              <span style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>Fluent</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
