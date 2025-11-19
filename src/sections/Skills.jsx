import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Redux'],
            color: 'border-cyan-500/50 text-cyan-400',
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
            color: 'border-purple-500/50 text-purple-400',
        },
        {
            title: 'DevOps & Tools',
            skills: ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD', 'Jest'],
            color: 'border-blue-500/50 text-blue-400',
        },
        {
            title: 'Performance',
            skills: ['Lighthouse', 'Web Vitals', 'Load Testing', 'Profiling', 'Optimization'],
            color: 'border-green-500/50 text-green-400',
        },
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-colors duration-300"
                        >
                            <h3 className={`text-xl font-bold mb-6 pb-2 border-b ${category.color.split(' ')[0]}`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 py-1 text-sm rounded-full bg-gray-900/50 border border-gray-700 ${category.color.split(' ')[1]}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
