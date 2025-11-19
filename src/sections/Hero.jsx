import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Gradient Blobs */}
            {/* Background Gradient Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[120px] animate-pulse delay-1000" />
            <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] animate-bounce duration-[10000ms]" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white/10 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                        style={{
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px',
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-cyan-400 font-medium tracking-widest mb-4 text-sm md:text-lg uppercase">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Sriram M
                    </h1>
                    <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 md:mb-8 rounded-full" />
                    <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                        <span className="text-white font-semibold">Performance Engineer</span> at Cognizant.
                        <br className="hidden md:block" />
                        Optimizing digital experiences starting Feb 2025.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12"
                >
                    <a
                        href="#about"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                    >
                        Explore My Work
                        <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
