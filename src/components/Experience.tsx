import { motion } from "framer-motion";

export default function Experience() {
  const responsibilities = [
    "Developed enterprise web applications using NestJS, TypeScript, and Microservices Architecture.",
    "Designed, developed, and maintained scalable RESTful APIs and backend services.",
    "Contributed to the development of 5+ real-world enterprise projects for government and educational sectors.",
    "Worked on a production-level School Management System, implementing backend services, authentication, business logic, and database integration.",
    "Developed and maintained government web applications using PHP, WordPress, JavaScript, HTML, CSS, and MySQL.",
    "Built and enhanced responsive web applications using React.js, Next.js, and modern frontend technologies.",
    "Collaborated with cross-functional teams in an Agile/Scrum development environment.",
    "Used Git and GitHub for version control, collaboration, and code reviews.",
    "Participated in testing, debugging, deployment, and application maintenance while following software engineering best practices.",
  ];

  const projects = [
    {
      title: "School Management System (Enterprise Application)",
      details: [
        "Developed backend modules using NestJS, TypeScript, and Microservices Architecture.",
        "Implemented REST APIs, authentication, database integration, and service-based architecture for a production-level school management system.",
      ]
    },
    {
      title: "Government Dengue Management Website",
      details: [
        "Contributed to the development and maintenance of a government web application for dengue awareness and management.",
        "Built using PHP, WordPress, JavaScript, HTML, CSS, and MySQL.",
      ]
    },
    {
      title: "Enterprise Web Applications (5+ Real-World Projects)",
      details: [
        "Contributed to the development, enhancement, and maintenance of multiple enterprise web applications for government and educational clients.",
        "Worked across frontend and backend technologies, including React.js, Next.js, NestJS, PHP, and WordPress, while delivering new features, fixing issues, and improving overall application performance.",
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 px-6 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(128,90,213,0.15),_transparent_35%)]"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.15),_transparent_35%)]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-purple-300 mb-4 tracking-wider">PROFESSIONAL EXPERIENCE</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-6">
            Intern Software Engineer | Full-Stack Developer
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            LankaCom (Pvt) Ltd · December 2025 – June 2026 (6 Months)
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/60 border border-gray-700 rounded-3xl p-8 shadow-2xl shadow-purple-500/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Responsibilities & Achievements</h3>
            <ul className="space-y-4 text-gray-300 list-disc list-inside">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-800/60 border border-gray-700 rounded-3xl p-8 shadow-2xl shadow-pink-500/10">
                <h4 className="text-xl font-bold text-white mb-4">{project.title}</h4>
                <ul className="space-y-3 text-gray-300 list-disc list-inside">
                  {project.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
