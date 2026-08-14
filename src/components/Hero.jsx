import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Smartphone, Code, Zap, Layers } from 'lucide-react';

const MobileAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ y: isHovered ? 0 : [0, -15, 0] }}
      whileHover={{ scale: 1.05, boxShadow: '0 30px 60px -12px rgba(16, 185, 129, 0.3), 0 0 0 2px rgba(16, 185, 129, 0.4)' }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 300, damping: 20 }
      }}
      style={{
        width: '280px',
        height: '560px',
        border: '12px solid #18181b',
        borderRadius: '40px',
        background: 'var(--bg-color)',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        margin: '0 auto',
        cursor: 'pointer'
      }}
    >
      {/* Notch */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120px',
        height: '28px',
        backgroundColor: '#18181b',
        borderBottomLeftRadius: '18px',
        borderBottomRightRadius: '18px',
        zIndex: 10
      }} />

      {/* App Content */}
      <div style={{ padding: '3.5rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', position: 'relative' }}>
        
        {/* Flutter App Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ height: '24px', borderRadius: '6px', background: 'var(--accent-primary)', opacity: 0.9 }} 
          />
          <Smartphone size={20} color="var(--accent-secondary)" />
        </div>
        
        {/* Dynamic Content Container */}
        <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div 
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                {/* Animated App List Items */}
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + (i * 0.15) }}
                    style={{
                      height: '68px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 1rem',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-secondary)', opacity: 0.6 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                      <div style={{ width: '80%', height: '10px', borderRadius: '4px', background: 'rgba(255,255,255,0.2)' }} />
                      <div style={{ width: '50%', height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}
              >
                <div style={{ textAlign: 'center', padding: '0.5rem 0 1rem', color: 'var(--text-main)', fontWeight: 600, fontSize: '1.1rem' }}>
                  Core Expertise
                </div>
                
                {[
                  { icon: <Code size={20} />, title: 'Dart & Flutter', desc: 'Cross-platform native apps' },
                  { icon: <Zap size={20} />, title: 'Riverpod & BLoC', desc: 'Reactive state management' },
                  { icon: <Layers size={20} />, title: 'Clean Architecture', desc: 'Scalable project structure' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, type: 'spring' }}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ color: 'var(--accent-secondary)' }}>{item.icon}</div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'white' }}>{item.title}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Action Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 90 : 0 }}
          transition={{ type: 'spring', bounce: 0.5, delay: isHovered ? 0 : 1.8 }}
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20
          }}
        >
          <div style={{ width: '20px', height: '4px', background: 'white', borderRadius: '2px', position: 'absolute' }} />
          <div style={{ width: '4px', height: '20px', background: 'white', borderRadius: '2px', position: 'absolute' }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="grid grid-cols-2" style={{ alignItems: 'center', width: '100%', gap: '4rem' }}>
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <motion.h1 
            className="gradient-text"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.2 }}
          >
            Bemen Bassem Edwar
          </motion.h1>
          
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--text-main)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            Flutter Developer
            <Smartphone color="var(--accent-primary)" size={28} />
          </h2>
          
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Dedicated and detail-oriented Flutter Developer with a strong foundation in Computer Science and hands-on experience building scalable, responsive mobile applications. Adept at leveraging modern state management architectures (Riverpod, BLoC) and advanced routing techniques (Go Router). Passionate about writing clean, maintainable code using code-generation tools to optimize performance and deliver seamless user experiences.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <div className="glass-card" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '50px' }}>
              <Mail size={16} color="var(--accent-primary)" />
              <span style={{ fontSize: '0.9rem' }}>bemenbassem4@gmail.com</span>
            </div>
            <div className="glass-card" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '50px' }}>
              <Phone size={16} color="var(--accent-primary)" />
              <span style={{ fontSize: '0.9rem' }}>01279080625</span>
            </div>
            <div className="glass-card" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '50px' }}>
              <MapPin size={16} color="var(--accent-primary)" />
              <span style={{ fontSize: '0.9rem' }}>Giza, Egypt</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="mailto:bemenbassem4@gmail.com" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#experience" className="btn btn-outline">
              View Work
            </a>
          </div>
        </motion.div>

        {/* Right Column: Mobile Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Subtle background glow behind the phone */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 60%)',
            opacity: 0.15,
            filter: 'blur(40px)',
            zIndex: 0
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <MobileAnimation />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
