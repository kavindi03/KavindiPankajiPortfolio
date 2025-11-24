import { motion } from "framer-motion";
import { FaTrophy, FaMedal } from 'react-icons/fa';

export default function Awards() {
  const awards = [
    {
      id: 1,
      title: "400m x4 Relay – Curtin University Inter-University Meet",
      issuer: "SLIIT University",
      date: "Sep 2025",
      description: "Represented SLIIT University in the 400m x4 relay at the Curtin University Inter-University Meet. Demonstrated teamwork, endurance, and sportsmanship throughout the competition.",
      icon: <FaTrophy className="text-yellow-400 text-2xl" />,
      category: "Sports Achievement"
    },
    {
      id: 2,
      title: "High Jump – SLIIT MOMENTUM'25",
      issuer: "SLIIT University",
      date: "Sep 2025",
      description: "Achieved recognition for performance in the High Jump event at SLIIT Momentum'25 organized by the Sliit Athletic Team. Proudly represented SLIIT Athletics.",
      icon: <FaMedal className="text-blue-400 text-2xl" />,
      category: "Sports Achievement"
    },
  
  ];

  return (
    <section id="awards" className="relative py-24 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-purple-300 mb-4 tracking-wider">ACHIEVEMENTS</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-6">
            Honors & Awards
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Recognition and achievements that highlight my dedication and excellence in both academics and athletics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Animated Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition duration-300"></div>
              
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                      {award.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-black text-white">{award.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                        <span className="text-sm text-blue-300 font-semibold">{award.issuer}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm text-gray-300">{award.date}</span>
                      </div>
                      
                      <div className="pt-4 pb-2 text-white text-sm">
                        <p className="mb-2">{award.description}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                          {award.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated Border Bottom */}
                <div className="h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Interested in seeing more of my achievements?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
