import { motion } from 'framer-motion';
import { FaDownload, FaTrophy, FaCode, FaStar } from 'react-icons/fa';
import profileImage from '../assets/Prashant_portfolio.jpeg';

const About = () => {
  const stats = [
    { icon: <FaTrophy />, value: '8.46/10', label: 'CGPA' },
    { icon: <FaCode />, value: '1609', label: 'CF Rating' },
    { icon: <FaCode />, value: '1789', label: 'CC Rating' },
    { icon: <FaTrophy />, value: 'Top 0.01%', label: 'JEE Rank' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary animate-pulse-glow">
                  <img
                    src={profileImage}
                    alt="Prashant Raj"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Prashant Raj</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                B.Tech Computer Science Engineering student at{' '}
                <span className="text-primary">NIT Warangal</span> (2022–2026) with a CGPA of 8.46/10.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Proud recipient of the <span className="text-secondary">Reliance Foundation Undergraduate Scholarship</span>,
                awarded to the top 2000 students nationally. Ranked Top 15 out of 150 on the NIT Warangal Merit List.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Achieved <span className="text-primary">AIR 3291 in JEE Advanced</span> and{' '}
                <span className="text-primary">AIR 2075 in JEE Main</span>, placing in the top 0.01% of over a million aspirants.
              </p>

              <button 
                onClick={() => window.open('https://drive.google.com/file/d/1I3JDOeiQNbg8Je25olShKoAlvZREOm8_/view?usp=sharing', '_blank')}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-dark-bg font-semibold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 cursor-pointer"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-dark-lighter p-6 rounded-lg text-center hover:bg-dark-bg transition-colors border border-primary/20"
              >
                <div className="text-3xl text-primary mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
