import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const filters = [
        { value: 'all', label: 'All Projects', icon: '🎯' },
        { value: 'fullstack', label: 'Full Stack', icon: '🚀' },
        { value: 'frontend', label: 'Frontend', icon: '💻' }
    ];

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold font-heading mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-8"></div>

                    {/* Filter Buttons */}
                    <div className="flex justify-center gap-3 flex-wrap">
                        {filters.map((filterOption) => (
                            <motion.button
                                key={filterOption.value}
                                onClick={() => setFilter(filterOption.value)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${filter === filterOption.value
                                        ? 'bg-gradient-primary text-white glow-primary'
                                        : 'glass text-slate-300 hover:bg-white/15'
                                    }`}
                            >
                                <span className="mr-2">{filterOption.icon}</span>
                                {filterOption.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-slate-400 text-lg">No projects found in this category.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
