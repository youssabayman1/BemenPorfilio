import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Restoka (Startup)",
    role: "Flutter Developer",
    location: "Sheikh Zayed, Giza",
    achievements: [
      "Developed a cutting-edge, AI-powered Flutter application designed to help restaurants forecast inventory and efficiently manage stock levels.",
      "Integrated smart features that auto-detect required ingredients directly from restaurant menus.",
      "Built a seamless B2B in-app purchasing flow, enabling users to effortlessly order and restock low-inventory items.",
      "Managed complex data models for dynamic inventory and menu items using dart_mappable.",
      "Utilized modern state management and routing solutions to maintain a smooth, responsive UI with real-time data."
    ]
  },
  {
    company: "Codeption Software House",
    role: "Flutter Developer",
    location: "Sheikh Zayed, Giza",
    achievements: [
      "Architected robust state management solutions utilizing Riverpod, Riverpod Generator, and BLoC for optimal app reactivity.",
      "Streamlined application navigation and deep-linking by implementing Go Router and Go Router Generator.",
      "Optimized data serialization and asset handling by integrating dart_mappable and Flutter Assets Gen.",
      "Implemented Localization to support multiple languages and broaden user accessibility.",
      "Integrated RESTful APIs, managed complex JSON data structures, and optimized overall app performance."
    ]
  },
  {
    company: "Tech Yard Hub Software House",
    role: "Flutter Developer",
    location: "Maadi, Cairo",
    achievements: [
      "Built responsive and highly performant mobile applications from the ground up using Flutter.",
      "Collaborated directly with backend teams to seamlessly integrate APIs and ensure secure, efficient data flow.",
      "Integrated Firebase services for secure user authentication and real-time database management.",
      "Conducted rigorous debugging, troubleshooting, and performance testing to maintain high quality.",
      "Participated actively in Agile development workflows, contributing to sprint planning."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>

      <div className="grid grid-cols-1" style={{ gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  {exp.role}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', justifyContent: 'flex-end', marginBottom: '0.25rem' }}>
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {exp.achievements.map((achievement, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-secondary)', marginTop: '0.25rem' }}>•</span>
                  <span style={{ color: 'var(--text-muted)' }}>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
