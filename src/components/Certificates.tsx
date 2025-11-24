import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { SiPython, SiAngular, SiTensorflow, SiJavascript } from "react-icons/si";

const certificates = [
  {
    id: 1,
    title: "AI/ML Engineer - Stage 1",
    issuer: "Sliit University",
    date: "Issued Aug 2025",
    credentialId: "7l0kcwdptc",
    credentialUrl: "https://drive.google.com/file/d/1lpH7R27PcE-n8lBAftP9iyEw7yJwanyf/view?usp=sharing",
    skills: ["Artificial Intelligence Fundamentals", "Machine Learning Basics", "Python for AI/ML", "Data Preprocessing", "TensorFlow & PyTorch Basics","Neural Network Fundamentals"],
    description: "I successfully completed the AI/ML Engineer Stage 1 course offered by SLIIT, gaining a strong foundation in Artificial Intelligence and Machine Learning. The program introduced essential AI/ML concepts, hands-on practical tools, and real-world applications, helping me develop both theoretical understanding and technical skills. This certification reflects my ability to work with modern AI frameworks and understand core machine learning principles."
  },
  {
    id: 2,
    title: "Front-End Web Development & Angular Framework",
    issuer: "University of Moratuwa - Open learning Platform",
    date: "Issued Nov 2025",
    credentialId: "Y4omY93hV9",
    credentialUrl: "https://drive.google.com/file/d/1Vb3cSTlTkmeZbSWFHfRiivMU1Wmsv0sA/view?usp=sharing",
    skills: ["Front-End Web Development Basics", "jQuery & DOM Manipulation","AJAX & API Communication", "Single Page Applications (SPA)", "Angular Framework Fundamentals", "Hands-On Coding & Problem Solving"],
    description: "I successfully completed a front-end development certification focused on the fundamentals of modern web development and the Angular framework. The course covered essential front-end concepts including jQuery, AJAX, and Single Page Applications (SPA). It also included hands-on Angular development, interactive coding playgrounds, quizzes, and structured learning modules. This certification strengthened my foundation in web technologies and equipped me with practical skills needed to build responsive and dynamic web applications."
  },
  {
    id: 3,
    title: "Python for Beginners",
    issuer: "University of Moratuwa - Open learning Platform",
    date: "Issued Nov 2025",
    credentialId: "IGG2fnFzIb",
    credentialUrl: "https://drive.google.com/file/d/186g3zP0frAtgnL-kLsESNLkGkN5FHlHz/view?usp=sharing",
    skills: ["Python Programming Fundamentals", "Control Flow & Logic Building", "Functions & Modular Programming", "Data Structures","Problem Solving & Debugging","Hands-On Coding & Projects"],
    description: "I completed a beginner-friendly Python programming course designed to introduce the fundamentals of software development. The program condensed essential concepts into an engaging 20-hour curriculum with lecture videos, notes, slides, quizzes, and hands-on coding exercises. It provided a strong foundation in Python syntax, logic building, and real-world problem solving, helping me understand how software applications are created and maintained."
  },
  
  {
    id: 5,
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa - Open learning Platform",
    date: "Issued September 2023",
    credentialId: "LWVl55TCYK",
    credentialUrl: "https://drive.google.com/file/d/1O6er0FwMHvdBDQE04-rM3dgKZsZ13CWn/view?usp=sharing",
    skills: ["HTML Foundations", "CSS Styling & Layouts", "JavaScript Basics", "Responsive Design", " Understanding WWW & Internet Basics", "UI/UX Awareness"],
    description: "I completed a self-paced online course that covers the fundamental concepts of modern web design. The course introduced the core building blocks of the web, including HTML, CSS, and JavaScript, while also covering responsive design techniques and the structure of the Internet and the World Wide Web. Through practical lessons and hands-on exercises, I learned how to design user-friendly, interactive, and mobile-responsive websites. This course strengthened my foundational web design skills and prepared me for more advanced front-end development."
  },
  {
    id: 6,
    title: "Multicloud Network Associate",
    issuer: "Aviatrix",
    date: "Issued Oct 2025",
    credentialId: "2025-28874",
    credentialUrl: "https://drive.google.com/file/d/1asz68CmV9NyBKbGnTv3TLmMgUx-I5a_R/view?usp=sharing",
    skills: ["Cloud Networking Fundamentals", "Multi-Cloud Architecture & Design", "Cloud Network Security & Visibility", "Cost Optimization & Troubleshooting", "Cloud Native Security Fabric (CNSF) Implementation","Secure Connectivity Across Multi-Cloud Environments"],
    description: "I’m excited to share that I’ve earned the Aviatrix Multicloud Network Associate certification!This certification enhanced my understanding of how AWS, Azure, GCP, and OCI operate together in modern multi-cloud environments. I gained practical, hands-on knowledge in designing, securing, and optimizing cloud networks using Aviatrix’s advanced platform.I’m grateful for the opportunity to build deeper expertise in cloud infrastructure and learn how Aviatrix helps simplify networking and security across multiple cloud platforms."
  },
  {
    id: 7,
    title: "The Complete Guide to UI/UX Wireframing",
    issuer: "Alison",
    date: "Issued 5th July 2025",
    credentialUrl: "https://drive.google.com/file/d/1T2BRZqG3JoxZXnNME9Ad_HzZV4svLM9U/view?usp=sharing",
    skills: ["Wireframing Fundamentals", "Information Architecture & Layout Planning", "Paper Wireframing Techniques", "Digital Wireframing Tools (Wireframe.cc, XD, Photoshop)", "UI/UX Design Principles", "Creating High-Clarity Low-Fidelity Wireframes"],
    description: "I successfully completed a comprehensive course on Wireframing for UI/UX Design, gaining hands-on experience in planning and structuring screen layouts for websites and mobile applications. This course strengthened my understanding of information hierarchy, layout flow, and creating both paper and digital wireframes using industry-standard tools. I also gained practical skills in tools like Wireframe.cc, Adobe Photoshop, and Adobe XD to design clear, structured, and user-focused wireframes"
  },
];

// Certificate icon mapping
const getCertificateIcon = (title: string) => {
  if (title.toLowerCase().includes('python')) return <SiPython className="text-3xl text-blue-400" />;
  if (title.toLowerCase().includes('angular')) return <SiAngular className="text-3xl text-red-500" />;
  if (title.toLowerCase().includes('tensorflow') || title.toLowerCase().includes('pytorch')) 
    return <SiTensorflow className="text-3xl text-orange-500" />;
  if (title.toLowerCase().includes('javascript')) return <SiJavascript className="text-3xl text-yellow-400" />;
  return <FaAward className="text-2xl text-purple-400" />;
};

export default function Certificates() {

  return (
    <section id="certificates" className="relative py-24 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-blue-300 mb-4 tracking-wider">VALIDATION OF EXPERTISE</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Professional certifications and credentials that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Animated Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition duration-300"></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-blue-500 to-purple-500`}>
                      {getCertificateIcon(cert.title)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                            <span className="text-blue-300 font-medium">{cert.issuer}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{cert.date}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400 text-xs">ID: {cert.credentialId}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 transition-colors group/button"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>View Credential</span>
                            <FaExternalLinkAlt className="text-xs group-hover/button:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            Skills Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * i }}
                                className="inline-block px-3 py-1.5 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated Border Bottom */}
                <div className="h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <p className="text-gray-400 mb-6">Interested in verifying my credentials or learning more?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <span>Request Transcripts</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href="https://www.linkedin.com/in/kavindi-pankaji03/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              <span>View on LinkedIn</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}