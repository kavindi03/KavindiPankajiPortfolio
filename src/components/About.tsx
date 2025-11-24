import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobile, FaPalette } from "react-icons/fa";

export default function About() {
  const skills = [
    {
      icon: <FaCode className="text-3xl text-purple-400 mb-4" />,
      title: "Frontend Development",
      description: "Crafting beautiful, responsive interfaces with React, Next.js,Html,Angular,javascript and modern CSS frameworks. Focused on performance and accessibility.",
      color: "from-purple-500 to-indigo-500",
      delay: 0.2
    },
    {
      icon: <FaServer className="text-3xl text-blue-400 mb-4" />,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js, Express, and various databases. Ensuring scalability and security.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.3
    },
    {
      icon: <FaMobile className="text-3xl text-pink-400 mb-4" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with Kotlin,React Native. Delivering native-like performance with a single codebase.",
      color: "from-pink-500 to-rose-500",
      delay: 0.4
    },
    {
      icon: <FaPalette className="text-3xl text-yellow-400 mb-4" />,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with a focus on usability and aesthetics. Using Figma and Adobe XD for prototyping.",
      color: "from-yellow-500 to-amber-500",
      delay: 0.5
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-purple-300 mb-4 tracking-wider">GET TO KNOW ME</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-6">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
                Kavindi Pankaji
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I'm a passionate Information Technology student at SLIIT University with a strong interest in Full Stack Development and UI/UX Design. I'm currently seeking internship opportunities to apply my technical knowledge and grow my skills in a professional environment.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                With a keen eye for design and a love for clean code, I'm dedicated to learning and applying modern technologies to create elegant, user-friendly solutions. My academic projects have given me hands-on experience in developing responsive web and mobile applications.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20">React.js</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium border border-blue-500/20">Node.js</span>
                <span className="px-4 py-2 bg-pink-500/10 text-pink-300 rounded-full text-sm font-medium border border-pink-500/20">UI/UX</span>
                <span className="px-4 py-2 bg-yellow-500/10 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/20">Mobile</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNjAiIGhZ0aD0iNjAiIGZpbGw9IiMxZjFmMjYiLz4KICA8cGF0aCBkPSJNMzAgMTVIMzVWMjVIMzBWMzVIMjBWMjVIMTVWMTVIMjBWNUgzMFYxNVoiIGZpbGw9IiM4YjVkZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10"></div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: skill.delay }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
                    >
                      <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{skill.title}</h4>
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What I'm Learning</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Web Development", icon: "🌐" },
              { name: "Mobile Apps", icon: "📱" },
              { name: "UI/UX Design", icon: "🎨" },
              { name: "Cloud Computing", icon: "☁️" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all group text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-gray-300 font-medium">{item.name}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
