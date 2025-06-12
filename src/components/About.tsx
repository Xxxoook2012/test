import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">علاء الحراق</h3>
                  <p className="text-gray-600">Full-Stack Developer</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-blue-600" />
                  <span className="text-gray-700">5+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that bridge the gap between design and functionality. 
                My journey started with a curiosity about how websites work, and it has evolved 
                into a career dedicated to crafting exceptional user experiences.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                I specialize in modern web technologies including React, Node.js, and cloud 
                platforms. I believe in writing clean, maintainable code and staying up-to-date 
                with the latest industry trends and best practices.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frontend Development</h4>
                    <p className="text-gray-600 text-sm">Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Backend Development</h4>
                    <p className="text-gray-600 text-sm">Building scalable APIs and server-side applications with Node.js, Express, and databases.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">UI/UX Design</h4>
                    <p className="text-gray-600 text-sm">Designing intuitive interfaces that prioritize user experience and accessibility.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;