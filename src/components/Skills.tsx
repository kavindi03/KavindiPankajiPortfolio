import { useState, useRef, useEffect } from 'react';
import type { JSX } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { 
  FaCode, FaServer, FaPalette, FaLaptopCode, FaMobile
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, 
  SiRedux, SiExpress, SiMongodb, SiFirebase, SiFigma, 
  SiReact, SiNextdotjs, SiNodedotjs, SiGraphql, SiDocker, SiKubernetes 
} from "react-icons/si";

const getSkillIcon = (skill: string) => {
  const icons: { [key: string]: JSX.Element } = {
    'React': <SiReact className="text-blue-400" />,
    'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
    'TypeScript': <SiTypescript className="text-blue-600" />,
    'JavaScript': <SiJavascript className="text-yellow-400" />,
    'HTML5': <SiHtml5 className="text-orange-500" />,
    'CSS3': <SiCss3 className="text-blue-500" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'Node.js': <SiNodedotjs className="text-green-500" />,
    'Express': <SiExpress className="text-gray-400" />,
    'MongoDB': <SiMongodb className="text-green-600" />,
    'Firebase': <SiFirebase className="text-yellow-500" />,
    'Figma': <SiFigma className="text-purple-400" />,
  };
  return icons[skill] || <FaCode className="text-gray-400" />;
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    {
      category: "frontend",
      title: "Frontend Development",
      icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
      description: "Crafting beautiful and responsive user interfaces with modern web technologies",
      items: ["React", "Next.js", "TypeScript","Angular","Ajax","jQuery" ,"JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "backend",
      title: "Backend Development",
      icon: <FaServer className="text-green-500 text-3xl" />,
      description: "Building robust and scalable server-side applications and APIs",
      items: ["Node.js", "Express", "MongoDB","Php","Java"]
    },
    {
      category: "mobile",
      title: "Mobile Development",
      icon: <FaMobile className="text-purple-400 text-3xl" />,
      description: "Creating cross-platform mobile applications with native performance",
      items: ["React Native", "Kotlin & Android Development", "Mobile UI/UX"]
    },
    {
      category: "design",
      title: "UI/UX Design",
      icon: <FaPalette className="text-pink-400 text-3xl" />,
      description: "Designing intuitive and engaging user experiences",
      items: ["Figma", "User Research", "Wireframing", "Prototyping", "Responsive Design"]
    }
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const SkillItem = ({ skill }: { skill: string }) => (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
      <span className="text-gray-300">{getSkillIcon(skill)}</span>
      <span className="text-sm font-medium text-gray-200">{skill}</span>
    </div>
  );

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-blue-300 mb-4 tracking-wider">EXPERTISE</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-6">
            Technical Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to turn ideas into reality
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {["all", "frontend", "backend", "mobile", "design"].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50"
              }`}
            >
              {category === "all" 
                ? "All Skills" 
                : category === "mobile" 
                  ? "Mobile" 
                  : category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredSkills.map((skill, _index) => (
            <motion.div
              key={skill.category}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-70 blur-md transition duration-300 group-hover:duration-200"></div>
              
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-start gap-5 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{skill.title}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {skill.items.map((item) => (
                    <SkillItem key={item} skill={item} />
                  ))}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}