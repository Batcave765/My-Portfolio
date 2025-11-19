import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Zap } from 'lucide-react';
import StaggerText from '../components/StaggerText';

const About = () => {
    const stats = [
        { icon: <Code className="w-6 h-6 text-cyan-400" />, label: 'Clean Code', value: '100%' },
        { icon: <Cpu className="w-6 h-6 text-purple-400" />, label: 'Performance', value: 'Optimized' },
        { icon: <Globe className="w-6 h-6 text-blue-400" />, label: 'Scalability', value: 'High' },
        { icon: <Zap className="w-6 h-6 text-yellow-400" />, label: 'Fast Delivery', value: 'On Time' },
    ];

    return (
        <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-8" />

                    <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
                        <StaggerText
                            text="I am a passionate Performance Engineer and Full Stack Developer with a knack for building high-performance, scalable web applications. With a strong foundation in modern technologies and a detail-oriented approach, I strive to create seamless digital experiences that not only look good but perform exceptionally well."
                            className="justify-center mb-6"
                        />
                        <StaggerText
                            text="Currently working in  Cognizant as a Performance Engineer, I am excited to tackle complex challenges and contribute to impactful projects."
                            className="justify-center"
                        />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Passionate about building <span className="text-cyan-400">high-performance</span> web applications.
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I am a dedicated Software Engineer with a focus on performance engineering.
                            Currently working in <strong>Cognizant</strong> as a Performance Engineer,
                            where I aim to optimize digital experiences and ensure system reliability at scale.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            My journey involves deep diving into system architecture, identifying bottlenecks,
                            and crafting efficient solutions. I love turning complex problems into elegant,
                            fast, and user-friendly interfaces.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300"
                            >
                                <div className="mb-4">{stat.icon}</div>
                                <h4 className="text-xl font-bold text-white mb-1">{stat.value}</h4>
                                <p className="text-sm text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
