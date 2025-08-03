'use client';

import { motion } from 'framer-motion';

interface TechSkill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

const techSkills: TechSkill[] = [
  // Frontend
  { name: 'React', icon: '⚛️', level: 5, category: 'frontend' },
  { name: 'Next.js', icon: '▲', level: 5, category: 'frontend' },
  { name: 'TypeScript', icon: '📘', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🎨', level: 5, category: 'frontend' },
  { name: 'JavaScript', icon: '📜', level: 5, category: 'frontend' },
  { name: 'HTML/CSS', icon: '🌐', level: 5, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: '🟢', level: 4, category: 'backend' },
  { name: 'Express', icon: '🚂', level: 4, category: 'backend' },
  { name: 'Python', icon: '🐍', level: 3, category: 'backend' },
  { name: 'Java', icon: '☕', level: 3, category: 'backend' },
  
  // Database
  { name: 'MongoDB', icon: '🍃', level: 4, category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', level: 3, category: 'database' },
  { name: 'Firebase', icon: '🔥', level: 4, category: 'database' },
  
  // DevOps
  { name: 'Git', icon: '📊', level: 4, category: 'devops' },
  { name: 'Docker', icon: '🐳', level: 3, category: 'devops' },
  { name: 'AWS', icon: '☁️', level: 3, category: 'devops' },
  
  // Other
  { name: 'GraphQL', icon: '⚡', level: 3, category: 'other' },
  { name: 'Redux', icon: '🔄', level: 4, category: 'other' },
  { name: 'Jest', icon: '🃏', level: 3, category: 'other' },
];

const Technology = () => {
  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'other', name: 'Other' },
  ];

  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Technologies
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform -translate-y-1"></span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I specialize in and use regularly in my projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{category.name}</h3>
              <div className="space-y-6">
                {techSkills
                  .filter(skill => skill.category === category.id)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center bg-indigo-900/30 rounded-lg mr-3 group-hover:bg-indigo-800/50 transition-colors duration-300 text-2xl">
                            {skill.icon}
                          </div>
                          <span className="font-medium group-hover:text-indigo-300 transition-colors duration-300">{skill.name}</span>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${i < skill.level ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gray-700'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;