import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-800 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            Feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:sriram@example.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors">
                                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-medium">sriram@example.com</p>
                                </div>
                            </a>

                            <div className="flex gap-4 mt-8">
                                <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gray-900 p-8 rounded-2xl border border-gray-700"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
