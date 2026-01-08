import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'NeerSuraksha',
            description: 'A crowd-sourced disaster management application. The platform collects data from social media sources, such as Twitter, and provides real-time reports for swift action.',
            tech: ['React', 'ExpressJS', 'NLP', 'MongoDB'],
            links: { github: 'https://github.com/Batcave765/SIH' },
            image: 'bg-gradient-to-br from-purple-600 to-blue-600', // Placeholder for image
        },
        {
            id: 2,
            title: 'Blockchain Disk Space Rental',
            description: 'A decentralized, smart contract–based platform that lets users rent out unused disk space and earn cryptocurrency, an alternative to traditional cloud solutions.',
            tech: ['React', 'SpringBoot', 'Hardhat', 'Node.js'],
            links: { github: 'https://github.com/Batcave765/DiskSpaceRentalWithBlockchain' },
            image: 'bg-gradient-to-br from-emerald-600 to-teal-600',
        },
        {
            id: 3,
            title: 'BPM Analyzer',
            description: 'A web tool that allows users to analyze songs and get statistics.',
            tech: ['React Native', 'Firebase', 'IoT', 'GraphQL'],
            links: { demo: '#', github: '#' },
            image: 'bg-gradient-to-br from-orange-600 to-red-600',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
                    {projects.map((project, index) => (
                        <TiltCard
                            key={project.id}
                            className="h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group h-full flex flex-col"
                            >
                                {/* Project Image Placeholder */}
                                <div className={`h-48 w-full ${project.image} relative overflow-hidden flex-shrink-0`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                    <Folder className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 w-16 h-16 group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-3">
                                            <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                            <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium bg-gray-800 text-cyan-300 rounded-full border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
