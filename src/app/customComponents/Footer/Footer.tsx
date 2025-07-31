import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base text-gray-400">
          &copy; {new Date().getFullYear()} Rahul Kumar Maurya. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/rahulmaurya2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-kumar-maurya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:rahulmaurya9927@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
