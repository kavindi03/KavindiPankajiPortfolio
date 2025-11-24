import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiFacebook, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kavindi03',
      icon: <FiGithub size={20} />,
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kavindi-pankaji03/',
      icon: <FiLinkedin size={20} />,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kavindi_pankaji/',
      icon: <FiInstagram size={20} />,
      color: 'hover:text-pink-500',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/kavindi.pankaji',
      icon: <FiFacebook size={20} />,
      color: 'hover:text-blue-500',
    },
    {
      name: 'Email',
      url: 'kavindipankaji@gmail.com',
      icon: <FiMail size={20} />,
      color: 'hover:text-red-400',
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
              Kavindi Pankaji
            </h3>
            <p className="text-gray-400 mb-6">
              Full-Stack Developer & UI/UX Designer passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all duration-300`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#awards" className="hover:text-purple-400 transition-colors">Awards</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to my newsletter for updates and insights.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kavindi Pankaji. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <FiArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
