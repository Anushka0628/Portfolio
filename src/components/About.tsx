'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2 inline-block relative">
            About Me
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform -translate-y-1"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-center">
            Passionate about creating beautiful, functional, and user-centered digital experiences
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full aspect-square max-w-md mx-auto md:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl transform rotate-3 opacity-70 shadow-xl"></div>
            <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
              <Image 
                src="/images/profile.jpg" 
                alt="Anushka Patil" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600/20 rounded-full backdrop-blur-md border border-indigo-500/30 z-10"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-600/20 rounded-full backdrop-blur-md border border-purple-500/30 z-10"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Who am I?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building responsive and performant web applications. With a strong foundation in both front-end and back-end technologies, I enjoy creating seamless user experiences and solving complex problems.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My journey in web development started 5 years ago, and since then, I've worked on various projects ranging from e-commerce platforms to content management systems. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white/5 p-4 rounded-xl border border-white/10"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4 className="text-lg font-medium mb-2 text-indigo-300">Location</h4>
                <p className="text-gray-400 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Mumbai, India
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 p-4 rounded-xl border border-white/10"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4 className="text-lg font-medium mb-2 text-indigo-300">Email</h4>
                <p className="text-gray-400 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  anushka@example.com
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 p-4 rounded-xl border border-white/10"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4 className="text-lg font-medium mb-2 text-indigo-300">Education</h4>
                <p className="text-gray-400 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  B.Tech in Computer Science
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 p-4 rounded-xl border border-white/10"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4 className="text-lg font-medium mb-2 text-indigo-300">Experience</h4>
                <p className="text-gray-400 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  5+ Years
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;