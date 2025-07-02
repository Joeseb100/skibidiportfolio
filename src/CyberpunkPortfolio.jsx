import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CyberpunkPortfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [terminalVisible, setTerminalVisible] = useState(false);

  // Retro color scheme
  const colors = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-500',
    background: 'bg-black',
    terminal: 'bg-gray-900'
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Neurasync",
      description: "AI-powered stress analysis platform with HR dashboard",
      tech: ["Python", "OpenCV", "TensorFlow"],
      icon: "🧠"
    },
    {
      id: 2,
      title: "ResQNet",
      description: "GPS-free rescue network using LoRa mesh",
      tech: ["C++", "ESP32", "Kalman Filters"],
      icon: "📡"
    },
    {
      id: 3,
      title: "Mistral Chatbot",
      description: "Fine-tuned LLM for contextual therapy sessions",
      tech: ["PyTorch", "HuggingFace"],
      icon: "🤖"
    }
  ];

  return (
    <div className={`min-h-screen ${colors.background} text-green-400 font-mono p-4 overflow-hidden`}>
      {/* CRT Screen Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-30"></div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-5xl mx-auto border-2 border-cyan-400 p-6 shadow-lg shadow-cyan-400/20">
        {/* Header */}
        <header className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-6xl font-bold mb-2 ${colors.primary} glitch`}
            data-text="JOPHIT_SEBASTIAN"
          >
<<<<<<< HEAD
            JOPHIT_SEBASTIAN
          </motion.h1>
          <p className={`text-lg ${colors.secondary} mb-4`}>
            <span className="blink">_</span> Engineering the Unseen
          </p>
          <div className="flex gap-4 text-sm">
            <span>💾 Digital Architect</span>
            <span>🧠 AI Explorer</span>
            <span>🎙️ Storyteller</span>
=======
            JOPHIT SEBASTIAN
          </motion.h1>
          <p className={`text-lg ${colors.secondary} mb-4`}>
            <span className="blink">_</span> ECE Undergrad | AI/ML, Content, and Tech Storyteller
          </p>
          <div className="flex gap-4 text-sm">
            <span>📧 jophits@gmail.com</span>
            <span>LinkedIn: <a href="https://www.linkedin.com/in/jophitsebastian/" target="_blank" rel="noopener noreferrer" className="underline">/in/jophitsebastian</a></span>
>>>>>>> master
          </div>
        </header>

        {/* Navigation */}
        <nav className="flex border-b border-cyan-400 mb-8">
          {['about', 'projects', 'skills', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 ${activeTab === tab ? `${colors.accent} border-b-2 border-pink-500` : colors.primary}`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
          <button 
            onClick={() => setTerminalVisible(!terminalVisible)}
            className={`ml-auto px-4 py-2 ${colors.secondary} hover:${colors.accent}`}
          >
            {terminalVisible ? 'CLOSE_TERMINAL' : 'OPEN_TERMINAL'}
          </button>
        </nav>

        {/* Main Content */}
        <main>
          {activeTab === 'about' && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-2xl ${colors.primary} mb-4`}>// ABOUT_ME</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4 leading-relaxed">
<<<<<<< HEAD
                    A researcher at heart. A storyteller by craft. An engineer in progress.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    I chase the 'why' behind the 'how'. 
                    Whether decoding AI patterns or geopolitics, my mind thrives where logic meets legacy.
                  </p>
                  <p className={`${colors.accent} italic`}>
                    Fun fact: I once skipped my midterms to attend a quiz competition—and won state-level silver. 🛵💥
                  </p>
                </div>
                <div className={`border-2 border-cyan-400 p-4 ${colors.terminal}`}>
                  <h3 className={`text-xl ${colors.secondary} mb-2`}>CURRENT_OBSESSIONS</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mistral-tuned therapy bots</li>
                    <li>Human-AI symbiosis</li>
                    <li>Geopolitics of technology</li>
=======
                    An ECE undergrad with a storyteller's mind and a deep curiosity for AI/ML, content, and tech. Former state-level quizzer with a strong grasp of general knowledge, geopolitics, and history. I thrive at the intersection of innovation and human experience—where engineering meets empathy. Currently seeking an AI/ML internship to explore real-world applications that fuse technical insights with human-centric design.
                  </p>
                  <div className="mb-4">
                    <h3 className={`text-xl ${colors.secondary}`}>EDUCATION</h3>
                    <ul className="list-disc pl-5">
                      <li><b>B.Tech</b> in Electronics & Communication Engineering (Honours & Minor in ML), Amal Jyothi College of Engineering, Kerala (2023–Present), CGPA: 9.02</li>
                      <li><b>KG – Class 12</b>, St. Antony's Public School, Anakkal (2023)</li>
                    </ul>
                  </div>
                </div>
                <div className={`border-2 border-cyan-400 p-4 ${colors.terminal}`}>
                  <h3 className={`text-xl ${colors.secondary} mb-2`}>TECHNICAL SKILLS</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hardware & Embedded Systems: Arduino, ESP32</li>
                    <li>Programming: Python, C, Embedded C</li>
                    <li>AI & ML: Deep Learning, NLP, Computer Vision, Neural Networks</li>
                    <li>Writing & Communication: Technical Writing, Content Creation, Public Speaking</li>
                    <li>Tools & Platforms: VSCode, Jupyter, Git, Google Colab, Obsidian, Canva</li>
                    <li>Soft Skills: Leadership, Event Management, Team Collaboration, Research & Analysis</li>
>>>>>>> master
                  </ul>
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === 'projects' && (
            <section>
              <h2 className={`text-2xl ${colors.primary} mb-6`}>// PROJECT_ARCHIVE</h2>
              <div className="grid md:grid-cols-2 gap-6">
<<<<<<< HEAD
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -5 }}
                    className={`border-2 border-purple-400 p-4 hover:shadow-lg hover:shadow-purple-400/20 transition-all ${colors.terminal}`}
                  >
                    <div className="flex items-start mb-2">
                      <span className="text-2xl mr-3">{project.icon}</span>
                      <h3 className={`text-xl ${colors.accent}`}>{project.title}</h3>
                    </div>
                    <p className="mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
=======
                <div className={`border-2 border-purple-400 p-4 ${colors.terminal} mb-4`}>
                  <h3 className={`text-xl ${colors.accent}`}>AlgaeNet</h3>
                  <p>Developed a CNN model from scratch to detect algae presence in aquaculture ponds, aiding real-time monitoring for fish cultivators. (Advanced Labs Pvt Ltd, Intern)</p>
                </div>
                <div className={`border-2 border-purple-400 p-4 ${colors.terminal} mb-4`}>
                  <h3 className={`text-xl ${colors.accent}`}>AquaPulse</h3>
                  <p>IoT-based Fish Pond Biomodal Condition Management (AIC PEACE). Built hardware and AI for real-time monitoring and logging of pond data. Designed efficient dashboards, integrated Firebase for real-time results handling, and WhatsApp-based notifications.</p>
                </div>
                <div className={`border-2 border-purple-400 p-4 ${colors.terminal} mb-4`}>
                  <h3 className={`text-xl ${colors.accent}`}>Neurasync</h3>
                  <p>AI-driven platform for stress insights. Designed dashboards and biological data models (heart rate, SpO2, blood oxygen, HRV). Developed a modular real-time wearable HR dashboard. (DeepSpaceAI 4.0)</p>
                </div>
                <div className={`border-2 border-purple-400 p-4 ${colors.terminal} mb-4`}>
                  <h3 className={`text-xl ${colors.accent}`}>ResQNet</h3>
                  <p>GPS-free mesh rescue network for real-time tracking in GPS-denied environments (mines, caves, disaster zones). Integrated LoRa mesh with prediction models (Kalman Filtering) to enhance accuracy and reliability.</p>
                </div>
>>>>>>> master
              </div>
            </section>
          )}

          {activeTab === 'skills' && (
            <section>
              <h2 className={`text-2xl ${colors.primary} mb-6`}>// SKILL_MATRIX</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className={`border-2 border-green-400 p-4 ${colors.terminal}`}>
<<<<<<< HEAD
                  <h3 className={`text-xl ${colors.secondary} mb-3`}>HARDWARE</h3>
                  <ul className="space-y-2">
                    <li>Arduino</li>
                    <li>ESP32</li>
                    <li>Embedded Systems</li>
                  </ul>
                </div>
                <div className={`border-2 border-pink-500 p-4 ${colors.terminal}`}>
                  <h3 className={`text-xl ${colors.secondary} mb-3`}>AI/ML(Understanding):</h3>
                  <ul className="space-y-2">
                    <li>Deep Learning</li>
                    <li>NLP</li>
                    <li>Computer Vision</li>
                    <li>Neural Networks</li>
                  </ul>
                </div>
                <div className={`border-2 border-cyan-400 p-4 ${colors.terminal}`}>
                  <h3 className={`text-xl ${colors.secondary} mb-3`}>SOFT_SKILLS</h3>
                  <ul className="space-y-2">
                    <li>Technical Writing</li>
                    <li>Public Speaking</li>
                    <li>Research Analysis</li>
                    <li>Leadership</li>
                  </ul>
                </div>
              </div>
=======
                  <h3 className={`text-xl ${colors.secondary} mb-3`}>TECHNICAL</h3>
                  <ul className="space-y-2">
                    <li>Arduino, ESP32, Embedded Systems</li>
                    <li>Python, C, Embedded C</li>
                    <li>Deep Learning, NLP, Computer Vision, Neural Networks</li>
                  </ul>
                </div>
                <div className={`border-2 border-pink-500 p-4 ${colors.terminal}`}>
                  <h3 className={`text-xl ${colors.secondary} mb-3`}>TOOLS & PLATFORMS</h3>
                  <ul className="space-y-2">
                    <li>VSCode, Jupyter, Git, Google Colab, Obsidian, Canva</li>
                  </ul>
                </div>
                <div className={`border-2 border-cyan-400 p-4 ${colors.terminal}`}>
                  <h3 className={`text-xl ${colors.secondary} mb-3`}>SOFT SKILLS</h3>
                  <ul className="space-y-2">
                    <li>Technical Writing, Content Creation, Public Speaking</li>
                    <li>Leadership, Event Management, Team Collaboration, Research & Analysis</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <h3 className={`text-xl ${colors.secondary} mb-3`}>LEADERSHIP EXPERIENCE</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><b>Advanced Labs Pvt Ltd, Intern:</b> Built CNN model for algae detection in aquaculture ponds.</li>
                  <li><b>Second Prize (2024, National Analytical Trophy):</b> State-level runner-up, national-level innovation challenge.</li>
                  <li><b>Usage of Kerala children author outreach programs:</b> Promoted STEM, mentored teams, and led workshops.</li>
                  <li><b>Indian Space Research Org. (ISRO):</b> Invited as media story developer for events.</li>
                  <li><b>Inauguration Presenter (2024):</b> Presented and coordinated at T4U innovation program at AICPE.</li>
                  <li><b>State & National Quiz Competitor:</b> Won various state-level quiz competitions.</li>
                </ul>
              </div>
>>>>>>> master
            </section>
          )}


        </main>

        {/* Terminal Window */}
        {terminalVisible && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-8 border-2 border-green-400 p-4 ${colors.terminal} overflow-auto max-h-64`}
          >
            <div className="mb-2">
              <span className={`${colors.primary}`}>user@jophit-dev:~$</span> cat about.txt
            </div>
            <div className="mb-4">
              <p>Multidisciplinary engineer exploring the intersection of AI, hardware, and human psychology.</p>
              <p>Specialties: Converting complex systems into intuitive experiences.</p>
            </div>
            <div className="mb-2">
              <span className={`${colors.primary}`}>user@jophit-dev:~$</span> ./projects --list
            </div>
            <ul className="list-disc pl-5 mb-4">
              <li>Neurasync - AI stress analysis platform</li>
              <li>ResQNet - Emergency mesh network</li>
              <li>Mistral Chatbot - Contextual AI assistant</li>
            </ul>
            <div>
              <span className={`${colors.primary}`}>user@jophit-dev:~$</span> <span className="blink">_</span>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-4 border-t border-cyan-400 text-sm">
          <div className="flex flex-wrap justify-between">
            <div>
              <p>📍 Kerala, India</p>
              <p>📧 jophits@gmail.com</p>
            </div>
            <div className="text-right">
<<<<<<< HEAD
              <p>LinkedIn: /in/jophitsebastian</p>
              <p>GitHub: @joeseb100</p>
=======
              <p>LinkedIn: <a href="https://www.linkedin.com/in/jophitsebastian/" target="_blank" rel="noopener noreferrer" className="underline">/in/jophitsebastian</a></p>
>>>>>>> master
            </div>
          </div>
          <div className="mt-4 text-center text-xs">
            <p className={`${colors.secondary}`}>SYSTEM STATUS: ONLINE</p>
<<<<<<< HEAD
            <p>© 2050 JOPHIT SEBASTIAN | ALL SYSTEMS NOMINAL</p>
=======
            <p>© 2024 JOPHIT SEBASTIAN | ALL SYSTEMS NOMINAL</p>
>>>>>>> master
          </div>
        </footer>
      </div>

      {/* Glitch effect styles */}
      <style jsx>{`
        .glitch {
          position: relative;
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${colors.background};
        }
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 magenta;
          animation: glitch-effect 3s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 cyan;
          animation: glitch-effect 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-effect {
          0% { clip: rect(24px, 9999px, 65px, 0) }
          25% { clip: rect(15px, 9999px, 30px, 0) }
          50% { clip: rect(47px, 9999px, 82px, 0) }
          75% { clip: rect(2px, 9999px, 59px, 0) }
          100% { clip: rect(76px, 9999px, 99px, 0) }
        }
        .blink {
          animation: blink-effect 1s step-end infinite;
        }
        @keyframes blink-effect {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </div>
  );
};

export default CyberpunkPortfolio;