// @ts-nocheck
import React from 'react'; // Added React import
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiYoutube } from "react-icons/fi";
import { FaReact, FaNodeJs, FaJava, FaPhp, FaAndroid, FaFigma, FaServer, FaMobile } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiKotlin, SiMysql, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiVite } from "react-icons/si";

// Tech Icons Mapping - Used in the ProjectCard component
// @ts-ignore - JSX namespace is available in React 17+
const techIcons: { [key: string]: JSX.Element } = {
  'react': <FaReact className="text-cyan-400" />,
  'node': <FaNodeJs className="text-green-500" />,
  'java': <FaJava className="text-red-500" />,
  'php': <FaPhp className="text-purple-500" />,
  'android': <FaAndroid className="text-green-400" />,
  'figma': <FaFigma className="text-pink-500" />,
  'typescript': <SiTypescript className="text-blue-500" />,
  'mongodb': <SiMongodb className="text-green-600" />,
  'kotlin': <SiKotlin className="text-purple-400" />,
  'mysql': <SiMysql className="text-blue-600" />,
  'javascript': <SiJavascript className="text-yellow-400" />,
  'html': <SiHtml5 className="text-orange-500" />,
  'css': <SiCss3 className="text-blue-400" />,
  'tailwind': <SiTailwindcss className="text-cyan-400" />,
  'vite': <SiVite className="text-purple-400" />
};

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  type: "web" | "mobile" | "design" | "other";
  featured: boolean;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition duration-300"></div>

      <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub className="text-lg" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink className="text-lg" />
                </a>
              )}
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiYoutube className="text-lg" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            {project.type === 'web' && <FaServer className="text-blue-400" />}
            {project.type === 'mobile' && <FaMobile className="text-green-400" />}
            {project.type === 'design' && <FaFigma className="text-pink-400" />}
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>

          <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-700/50 text-xs font-medium rounded-full text-gray-300 border border-gray-600/50 hover:bg-purple-500/20 hover:border-purple-500/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            {project.type === 'web' ? (
              <FaServer className="text-lg" />
            ) : project.type === 'mobile' ? (
              <FaMobile className="text-lg" />
            ) : (
              <FaFigma className="text-lg" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "CaféPOS – Web-Based Café Billing & Inventory Management System",
      description: "A MERN-based POS and Inventory Management System for small cafés to manage billing, stock levels, suppliers, employees, and customers with real-time updates.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      image: "/src/assets/cafepos.jpg",
      videoUrl: "src/assets/pos_system.mp4",
      githubUrl: "https://github.com/Gayaltil954/pos-system",
      type: "web",
      featured: true
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "A modern and responsive personal portfolio website built using React, TypeScript, Tailwind CSS, and Vite. This portfolio showcases my skills in UI/UX design, frontend development, backend development, and full-stack development. It includes sections for my projects, education, skills, achievements, and contact details, with seamless integration of GitHub and LinkedIn profiles. The website is fast, mobile-friendly, and deployed using GitHub Pages.",
      tags: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "/src/assets/portfolio.png",
      githubUrl: "https://www.figma.com/design/bFBFNCy43xQJTzOzJVgtKg/E-Commerce-Mobile-App?node-id=0-1&t=BVgsvrDxdo6dPwPF-1",
      type: "web",
      featured: true
    },
    {
      id: 3,
      title: "Online Event Planning System",
      description: "A full CRUD event planning system for managing events, bookings, and schedules with user registration and management.",
      tags: ["Java", "HTML", "CSS", "JavaScript"],
      image: "/src/assets/project2.jpg",
      githubUrl: "https://github.com/kavindi03/OnlineEventManagementSystem",
      type: "web",
      featured: true
    },
    {
      id: 4,
      title: "Online Advertising Agency Platform",
      description: "An online advertising platform with user registration, profile management, order placement, and customer support modules.",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      image: "/src/assets/online.jpeg",
      githubUrl: "https://github.com/kavindi03/Online-Advertising-Agency-Platform",
      type: "web",
      featured: true
    },
    {
      id: 5,
      title: "Coffee Ordering App",
      description: "Android coffee shop app with splash, home, menu, and order screens with a clean and responsive UI.",
      tags: ["Kotlin", "Android"],
      image: "/src/assets/coffee.jpeg",
      githubUrl: "https://github.com/kavindi03/Coffee-App",
      type: "mobile",
      featured: true
    },
    {
      id: 6,
      title: "PetCareBuddy – Mobile App",
      description: "An Android app to help pet parents manage their pets' daily needs including health tracking, reminders, and vet appointments.",
      tags: ["Kotlin", "Android", "Material Design 3"],
      image: "/src/assets/Petapplication.png",
      githubUrl: "https://github.com/kavindi03/Pet-Care-Buddy-Android-App",
      type: "mobile",
      featured: true
    },
    {
      id: 7,
      title: "Personal Wellness Android App",
      description: "A wellness app with habit tracking, mood journaling, and hydration reminders for personal health management.",
      tags: ["Kotlin", "Android"],
      image: "/src/assets/wellness.png",
      githubUrl: "https://github.com/kavindi03/Wellness_App",
      type: "mobile",
      featured: true
    },
    {
      id: 8,
      title: "Coffee Ordering App UI/UX",
      description: "Figma design for a coffee ordering app with welcome screen, product listing, cart, and checkout flows.",
      tags: ["Figma", "UI/UX"],
      image: "/src/assets/CoffeeApp.png",
      githubUrl: "https://www.figma.com/design/sMVXeW8ln286cah2GcYKVs/Coffee-App?node-id=0-1&t=xYDNzJBr9Bjz0cEa-1",
      type: "design",
      featured: true
    },
    {
      id: 9,
      title: "SoulNest – Mental Wellness App UI/UX",
      description: "A mobile mental wellness app design with mood tracking, meditation, and stress-relief features.",
      tags: ["Figma", "UI/UX"],
      githubUrl: "https://www.figma.com/design/n97oGDXooxc8mgmBCTgrTy/SoulNest?node-id=175-2&t=z8iSjEbc8EU6TiMo-1",
      image: "/src/assets/soulnest.png",
      type: "design",
      featured: true
    },
    {
      id: 10,
      title: "PetCare App UI/UX",
      description: "Mobile app design for pet lovers to adopt and manage their pets' care with clean visual hierarchy.",
      tags: ["Figma", "UI/UX"],
      image: "/src/assets/Petapplication.png",
      githubUrl: "https://www.figma.com/design/xPnfvd5QDk16qTPYKCwjQa/PetApp?node-id=0-1&t=CG5wAB6PLeqoGZu7-1",
      type: "design",
      featured: true
    },
    {
      id: 11,
      title: "E-Commerce Mobile App UI/UX",
      description: "A mobile shopping app design with product browsing, cart, and checkout flows.",
      tags: ["Figma", "UI/UX"],
      image: "/src/assets/E-Commerce Mobile App.png",
      githubUrl: "https://www.figma.com/design/bFBFNCy43xQJTzOzJVgtKg/E-Commerce-Mobile-App?node-id=0-1&t=BVgsvrDxdo6dPwPF-1",
      type: "design",
      featured: true
    },

    {
      id: 12,
      title: "Food Delivery App UI/UX",
      description: "First UI/UX design project featuring welcome, signup, and home screens for a food delivery app.",
      tags: ["Figma", "UI/UX"],
      image: "/src/assets/Food Mobile App.png",
      githubUrl: "https://www.figma.com/design/DtYJn47EPODuf4gPEqgr39/Food-Mobile-App?node-id=0-1&t=q8zZbZwrJHxzNpAV-1",
      type: "design",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Elements */}
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
          <span className="inline-block text-sm font-medium text-purple-300 mb-4 tracking-wider">MY WORK</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index % 3} />
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            <FiGithub className="text-lg" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}