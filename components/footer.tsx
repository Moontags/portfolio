import React from "react";
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Teksti */}
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Kipinä. All Rights Reserved.</p>

        {/* Ikonit */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition duration-300 text-2xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition duration-300 text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
