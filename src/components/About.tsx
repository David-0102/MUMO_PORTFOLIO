import React from 'react';
import { Code2, Shield, Smartphone, Terminal } from 'lucide-react';

export function About() {
  const skills = [
    {
      category: 'Languages',
      items: [
        'Python',
        'JavaScript',
        'Dart',
        'C',
        'C++',
        'Java',
        'SQL',
        'HTML',
        'CSS',
        'Bash',
      ],
    },
    {
      category: 'Frontend',
      items: ['React', 'Flutter', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Django', 'Express.js'],
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Git', 'CI/CD Pipelines'],
    },
    {
      category: 'Security',
      items: ['Nmap', 'Metasploit', 'Wireshark', 'Burp Suite'],
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="mt-10">
          <p className="mt-4 text-lg text-gray-500 lg:mx-auto">
            Hi, I'm Mumo Ndunda, a dynamic and versatile Full Stack Developer,
            Cybersecurity Specialist, and Software Consultant with a passion for
            building innovative digital solutions. With a background in law and
            software engineering, I bring a unique perspective to technology,
            blending analytical thinking with cutting-edge technical expertise.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              I specialize in:
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Code2 className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">
                    Full Stack Development
                  </h4>
                  <p className="mt-2 text-gray-500">
                    Crafting scalable, user-centric web applications using
                    modern frameworks and technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">
                    Mobile App Development
                  </h4>
                  <p className="mt-2 text-gray-500">
                    Building intuitive and high-performance iOS and Android
                    applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">
                    Cybersecurity
                  </h4>
                  <p className="mt-2 text-gray-500">
                    Conducting comprehensive security assessments, penetration
                    testing, and vulnerability analysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Terminal className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">
                    Software Consultancy
                  </h4>
                  <p className="mt-2 text-gray-500">
                    Providing expert advice on software architecture, strategy,
                    and implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Tech Stack & Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h4 className="font-semibold text-indigo-600 mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="text-gray-500">📍 Location:</span>
                <span className="ml-2">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500">📧 Email:</span>
                <a
                  href="mailto:davidmumondunda@gmail.com"
                  className="ml-2 text-indigo-600 hover:text-indigo-800"
                >
                  david@mumondunda.software
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500">📞 Phone:</span>
                <a
                  href="tel:+254740250165"
                  className="ml-2 text-indigo-600 hover:text-indigo-800"
                >
                  +254 740 250 165
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
