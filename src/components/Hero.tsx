import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { FaGithub, FaLinkedin, FaFileDownload, FaChevronDown, FaCode, FaPalette, FaMobile, FaServer, FaBrain } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPython, SiCplusplus, 
  SiPhp, SiRuby, SiSwift, SiKotlin, SiDart, SiGo, SiRust, 
  SiDocker, SiKubernetes, SiGooglecloud, SiFigma, SiAdobexd, 
  SiTailwindcss, SiRedux, SiGraphql, SiFirebase, SiAwsamplify } from "react-icons/si";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { DiReact, DiNodejs, DiMongodb, DiSass } from "react-icons/di";
import { loadSlim } from "@tsparticles/slim";
import { Particles } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
// @ts-ignore - Types are used in the component
import avatar from "../assets/pankaji.jpg";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  // Removed unused state
  
  const roles = [
    { icon: <FaPalette className="mr-2" />, text: 'UI/UX Designer' },
    { icon: <FaServer className="mr-2" />, text: 'Frontend Developer' },
    { icon: <FaCode className="mr-2" />, text: 'Web Developer' },
    { icon: <FaMobile className="mr-2" />, text: 'Mobile Developer' },
    { icon: <FaServer className="mr-2" />, text: 'Backend Developer' },
    { icon: <FaCode className="mr-2" />, text: 'Full Stack Developer' },
    { icon: <FaBrain className="mr-2" />, text: 'Problem Solver' },
  ];

  const techIcons = [
    <SiTypescript key="ts" className="text-blue-500 text-2xl md:text-3xl" />,
    <SiJavascript key="js" className="text-yellow-400 text-2xl md:text-3xl" />,
    <DiReact key="react" className="text-cyan-400 text-2xl md:text-3xl" />,
    <TbBrandNextjs key="next" className="text-white text-2xl md:text-3xl" />,
    <TbBrandThreejs key="three" className="text-white text-2xl md:text-3xl" />,
    <DiNodejs key="node" className="text-green-500 text-2xl md:text-3xl" />,
    <SiPython key="python" className="text-blue-400 text-2xl md:text-3xl" />,
    <SiCplusplus key="cpp" className="text-blue-600 text-2xl md:text-3xl" />,
    <SiPhp key="php" className="text-indigo-400 text-2xl md:text-3xl" />,
    <SiRuby key="ruby" className="text-red-500 text-2xl md:text-3xl" />,
    <SiSwift key="swift" className="text-orange-500 text-2xl md:text-3xl" />,
    <SiKotlin key="kotlin" className="text-purple-400 text-2xl md:text-3xl" />,
    <SiDart key="dart" className="text-blue-400 text-2xl md:text-3xl" />,
    <SiGo key="go" className="text-cyan-500 text-2xl md:text-3xl" />,
    <SiRust key="rust" className="text-orange-600 text-2xl md:text-3xl" />,
    <DiMongodb key="mongo" className="text-green-500 text-2xl md:text-3xl" />,
    <SiGraphql key="graphql" className="text-pink-500 text-2xl md:text-3xl" />,
    <SiRedux key="redux" className="text-purple-500 text-2xl md:text-3xl" />,
    <SiTailwindcss key="tailwind" className="text-cyan-400 text-2xl md:text-3xl" />,
    <SiFigma key="figma" className="text-purple-400 text-2xl md:text-3xl" />,
    <SiAdobexd key="xd" className="text-pink-500 text-2xl md:text-3xl" />,
    <SiFirebase key="firebase" className="text-yellow-500 text-2xl md:text-3xl" />,
    <SiAwsamplify key="amplify" className="text-orange-500 text-2xl md:text-3xl" />,
    <DiSass key="sass" className="text-pink-400 text-2xl md:text-3xl" />,
    <SiDocker key="docker" className="text-blue-400 text-2xl md:text-3xl" />,
    <SiKubernetes key="k8s" className="text-blue-500 text-2xl md:text-3xl" />,
    <SiGooglecloud key="gcp" className="text-red-500 text-2xl md:text-3xl" />
  ];

  const particlesInit = useCallback((engine: any) => {
    return loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container: Container | undefined) => {
    console.log(container);
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
          delay: 0
        },
      },
    },
    particles: {
      color: { value: "#a78bfa" },
      links: {
        color: "#a78bfa",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        value: 60,
        density: {
          enable: true,
        },
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        <Particles
          id="tsparticles"
          options={options}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          // @ts-ignore - The type definitions might be outdated
          init={particlesInit}
          loaded={particlesLoaded}
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl text-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 0,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 30,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          >
            {techIcons[Math.floor(Math.random() * techIcons.length)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-sm font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">Kavindi Pankaji</span>
            </h1>
            
            <div className="h-16 md:h-20 mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2 
                  key={currentRole}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 flex items-center justify-center lg:justify-start"
                >
                  {roles[currentRole].icon}
                  {roles[currentRole].text}
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              Crafting immersive digital experiences with cutting-edge technologies and 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-medium"> pixel-perfect designs</span> that 
              captivate and engage users.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">👋</span> Let's Talk
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              
              <a
                href="/src/assets/KAVINDI_PANKAJI.pdf"
                download
                className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-medium overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/5 flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center">
                  <FaFileDownload className="mr-2" /> Download CV
                </span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex space-x-6">
                <a
                  href="https://github.com/kavindi03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs font-medium text-white bg-gray-900 px-2 py-1 rounded whitespace-nowrap transition-all duration-300">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kavindi-pankaji03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs font-medium text-white bg-gray-900 px-2 py-1 rounded whitespace-nowrap transition-all duration-300">
                    LinkedIn
                  </span>
                </a>
              </div>
              
              <div className="hidden md:flex items-center text-sm text-gray-400">
                <span className="w-8 h-px bg-gray-600"></span>
                <span className="mx-4">Explore my work</span>
                <span className="w-8 h-px bg-gray-600"></span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Scroll down</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaChevronDown className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-70 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-500">
                <img
                  src={avatar}
                  alt="Kavindi Pankaji"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ 
                    objectPosition: 'center 20%',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>
                
                {/* Animated border rings */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping-slow"></div>
                <div className="absolute inset-0 rounded-full border-2 border-pink-400/30 animate-ping-slow" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Tech stack floating around */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white/5 backdrop-blur-sm rounded-full p-2 shadow-lg"
                    style={{
                      top: '50%',
                      left: '50%',
                      x: -24,
                      y: -24,
                    }}
                    animate={{
                      x: [0, 60 * Math.cos((i * Math.PI) / 3), 0],
                      y: [0, 60 * Math.sin((i * Math.PI) / 3), 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 15 + i * 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {techIcons[i % techIcons.length]}
                  </motion.div>
                ))}
              </div>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <span className="mb-2">Scroll to explore</span>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Tech stack carousel */}
      <div className="absolute bottom-0 left-0 w-full py-6 overflow-hidden bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm">
        <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
          {[...techIcons, ...techIcons].map((icon, i) => (
            <div key={i} className="inline-flex items-center justify-center">
              {icon}
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 0.8; }
            75%, 100% { transform: scale(1.5); opacity: 0; }
          }
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `
      }} />
    </section>
  );
}