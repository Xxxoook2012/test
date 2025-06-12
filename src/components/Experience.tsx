import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and AWS. Managed a team of 4 developers and improved application performance by 40%.',
      achievements: [
        'Architected and developed 3 major client-facing applications',
        'Reduced deployment time by 60% through CI/CD implementation',
        'Mentored junior developers and conducted code reviews'
      ],
      current: true
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with design teams to implement pixel-perfect user interfaces.',
      achievements: [
        'Built responsive web applications serving 100K+ users',
        'Integrated third-party APIs and payment processing systems',
        'Optimized database queries reducing load time by 35%'
      ],
      current: false
    },
    {
      title: 'Frontend Developer',
      company: 'StartupLab',
      location: 'Palo Alto, CA',
      period: '2019 - 2020',
      description: 'Focused on frontend development using React and Vue.js. Worked closely with UX designers to create intuitive user experiences for early-stage startups.',
      achievements: [
        'Developed reusable component libraries',
        'Implemented responsive design across multiple projects',
        'Contributed to open-source projects and community initiatives'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through various roles and companies, building expertise and delivering impactful solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-orange-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10">
                  {experience.current && (
                    <div className="absolute inset-1 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2 text-blue-600">
                          <Building size={16} />
                          <span className="font-semibold">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                          {experience.current && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{experience.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;