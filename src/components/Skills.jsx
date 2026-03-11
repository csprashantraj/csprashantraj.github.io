import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { FaCode, FaDatabase, FaTools, FaCog, FaUsers } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', data: skillsData.languages, icon: <FaCode /> },
    { title: 'Frameworks & Libraries', data: skillsData.frameworks, icon: <FaCog /> },
    { title: 'Databases', data: skillsData.databases, icon: <FaDatabase /> },
    { title: 'Tools & Platforms', data: skillsData.tools, icon: <FaTools /> },
    { title: 'Other Technologies', data: skillsData.other, icon: <FaCog /> },
    { title: 'Soft Skills', data: skillsData.soft, icon: <FaUsers /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            Skills & <span className="text-primary">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-dark-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl text-primary">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.data.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-2 bg-dark-lighter text-gray-300 text-sm rounded-lg border border-primary/10 hover:border-primary/30 hover:text-primary transition-all cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
