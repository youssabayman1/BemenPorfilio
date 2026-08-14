import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "State Management",
    skills: ["Riverpod", "Riverpod Gen", "BLoC", "Provider"]
  },
  {
    title: "Languages & Core",
    skills: ["Dart", "Flutter", "OOP", "Async/Await", "Streams"]
  },
  {
    title: "Routing & Navigation",
    skills: ["Go Router", "Go Router Gen"]
  },
  {
    title: "UI/UX & Design",
    skills: ["Material Design", "Custom Widgets", "Responsive UI", "Localization"]
  },
  {
    title: "Data & Assets",
    skills: ["dart_mappable", "Flutter Assets Gen"]
  },
  {
    title: "Local Storage",
    skills: ["Shared Preferences", "Hive", "SQLite", "Secure Storage"]
  },
  {
    title: "Networking",
    skills: ["RESTful APIs", "JSON Parsing", "HTTP", "Dio"]
  },
  {
    title: "Testing & Perf",
    skills: ["Unit Testing", "Widget Testing", "Integration Testing", "Lazy Loading"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Firebase"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.25rem' }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  style={{ 
                    padding: '0.35rem 0.75rem', 
                    borderRadius: '50px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid var(--border-color)',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
