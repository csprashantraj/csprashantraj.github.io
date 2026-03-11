import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { teamMembers, services } from '../data/teamMembers';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBrain, FaServer, FaPalette, FaDatabase, FaCloud, FaUsers, FaTasks, FaUserTie } from 'react-icons/fa';

const iconMap = {
  FaCode: FaCode,
  FaBrain: FaBrain,
  FaServer: FaServer,
  FaPalette: FaPalette,
  FaDatabase: FaDatabase,
  FaCloud: FaCloud,
  FaUsers: FaUsers,
  FaTasks: FaTasks,
  FaUserTie: FaUserTie,
};

const FreelancingTeam = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-primary">Freelancing Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering end-to-end tech solutions — from idea to deployment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold text-center mb-12">
              Meet Our <span className="text-primary">Team</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-dark-lighter p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  {/* Member Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-400 text-sm">{member.bio}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Career Path */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Career Path</h4>
                    <div className="space-y-2">
                      {member.careerPath.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-grow">
                            <span className="text-primary text-sm font-semibold">{step.year}</span>
                            <span className="text-gray-300 text-sm ml-2">{step.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-primary/20">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-dark-bg rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all border border-primary/20"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-dark-bg rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all border border-primary/20"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-dark-bg rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all border border-primary/20"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold text-center mb-12">
              Our <span className="text-primary">Services</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-dark-card p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="text-4xl text-primary mb-4">
                      {IconComponent && <IconComponent />}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Want to work with us?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always excited to collaborate on innovative projects. Let's discuss how we can help bring your ideas to life.
            </p>
            <Link
              to="/#contact"
              onClick={() => {
                setTimeout(() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="inline-block px-8 py-3 bg-primary text-dark-bg font-semibold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FreelancingTeam;
