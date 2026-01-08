import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Performance Engineer',
            company: 'Cognizant',
            location: 'Chennai, India',
            period: 'Feb 2025 - Present',
            description: [
                'Upcoming role focused on optimizing application performance and scalability.',
                'Will be working with cross-functional teams to identify and resolve performance bottlenecks with clients like Macy\'s.',
            ],
            active: true,
        },
        // Dummy past experience
        {
            id: 2,
            role: 'Web Developer Intern',
            company: 'DevCrew.',
            location: 'Coimbatore, India',
            period: 'May 2023 - Jul 2023',
            description: [
                'Assisted in UI/UX design processes, contributing to wireframing and prototyping.',
                'Implemented front-end features using React.js, focusing on component reusability and state management.',
            ],
            active: false,
        },
    ];

    return (
        <section id="experience" className="py-20 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0 mb-12 last:mb-0"
                        >
                            {/* Timeline Line */}
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 md:bg-gray-700 md:-translate-x-1/2" />

                            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Empty space for timeline alignment */}
                                <div className="hidden md:block w-5/12" />

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900 -translate-x-[7px] md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

                                {/* Content Card */}
                                <TiltCard className="ml-6 md:ml-0 md:w-5/12">
                                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg group h-full">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            {exp.active && (
                                                <span className="px-2 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full animate-pulse">
                                                    Present
                                                </span>
                                            )}
                                        </div>
                                        <h4 className="text-lg text-gray-300 mb-4 flex items-center gap-2">
                                            <Briefcase size={16} className="text-purple-400" />
                                            {exp.company}
                                        </h4>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </div>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </TiltCard>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
