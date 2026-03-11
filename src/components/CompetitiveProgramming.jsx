import { motion } from 'framer-motion';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { SiCodeforces, SiCodechef } from 'react-icons/si';

const CompetitiveProgramming = () => {
  const platforms = [
    {
      name: 'Codeforces',
      username: 'smarty_03',
      rating: 1609,
      rank: 'Expert',
      color: '#00d4ff',
      icon: <SiCodeforces />,
      link: 'https://codeforces.com/profile/smarty_03'
    },
    {
      name: 'CodeChef',
      username: 'prashantraj72',
      rating: 1789,
      rank: '3 Star',
      color: '#6c63ff',
      icon: <SiCodechef />,
      link: 'https://www.codechef.com/users/prashantraj72'
    }
  ];

  const achievements = [
    { platform: 'Codeforces', rank: 586, contest: 'Codeforces Round 998' },
    { platform: 'Codeforces', rank: 680, contest: 'Codeforces Round 1020' },
    { platform: 'CodeChef', rank: 128, contest: 'Codechef Starters 131' },
    { platform: 'CodeChef', rank: 301, contest: 'Codechef Starters 143' },
  ];

  return (
    <section id="competitive-programming" className="py-20 bg-dark-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            Competitive <span className="text-primary">Programming</span>
          </h2>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {platforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-dark-lighter p-8 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl" style={{ color: platform.color }}>
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{platform.name}</h3>
                      <p className="text-gray-400">@{platform.username}</p>
                    </div>
                  </div>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-1" style={{ color: platform.color }}>
                      {platform.rating}
                    </div>
                    <div className="text-gray-400">Max Rating</div>
                  </div>
                  <div className="px-4 py-2 rounded-lg" style={{ backgroundColor: `${platform.color}20`, color: platform.color }}>
                    <div className="font-bold">{platform.rank}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <FaTrophy className="text-primary" />
              Notable Contest Ranks
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-dark-card p-4 rounded-lg border border-primary/20 text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">#{achievement.rank}</div>
                  <div className="text-gray-400 text-sm mb-2">{achievement.platform}</div>
                  <div className="text-xs text-gray-500">{achievement.contest}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
