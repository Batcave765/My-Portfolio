import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 py-20">
            {/* Background Gradient Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Column: Header & Contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                            Sriram M <span className="text-cyan-400">✨</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 flex items-center gap-3">
                            Performance Engineer <span className="text-2xl">👨‍💻</span>
                        </h2>

                        <div className="flex flex-col gap-4 text-gray-400 mb-8">
                            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <MapPin className="w-5 h-5 text-purple-500" />
                                <span>Coimbatore, India</span>
                            </div>
                            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <Mail className="w-5 h-5 text-gray-100" />
                                <a href="mailto:msriram765@gmail.com" className="hover:underline">msriram765@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <Github className="w-5 h-5 text-yellow-500" />
                                <a href="https://github.com/Batcave765" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                            </div>
                            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <Linkedin className="w-5 h-5 text-blue-500" />
                                <a href="https://www.linkedin.com/in/sriram-m765/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-2xl opacity-30 animate-pulse" />
                            <div className="relative w-full h-full rounded-full border-2 border-cyan-500/30 overflow-hidden bg-gray-800 flex items-center justify-center">
                                <img
                                    src="src\assets\Portrait1.jpg"
                                    alt="Sriram M Portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    id="about"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative"
                >
                    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border-l-4 border-cyan-500 shadow-lg">

                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-2xl">🚀</span> About Me
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Passionate about building <span className="text-cyan-400 font-semibold">high-performance</span> web applications.
                            I am a dedicated Software Engineer focused on optimizing digital experiences and ensuring system reliability at scale.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Currently working at <strong>Cognizant</strong> as a Performance Engineer (starting Feb 2025).
                            My holistic approach combines technical expertise with creative problem-solving to develop innovative and practical solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
