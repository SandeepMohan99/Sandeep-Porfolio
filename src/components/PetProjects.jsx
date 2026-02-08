import { motion } from 'framer-motion';
import { petProjects, petProjectsDescription } from '../data/petProjects';

const PetProjects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="pet-projects" className="section-padding bg-dark-800/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-success/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold font-heading mb-4">
                        Pet <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        {petProjectsDescription}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {petProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="card-modern group"
                        >
                            {/* Project Icon/Image */}
                            <div className="relative h-40 bg-gradient-to-br from-accent/20 to-success/20 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                                <div className="text-5xl opacity-60">
                                    {index === 0 ? '🛒' : index === 1 ? '🎬' : index === 2 ? '🎥' : index === 3 ? '🌤️' : '✈️'}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gradient-primary mb-2 group-hover:scale-105 transition-transform origin-left">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gradient-secondary mb-3">{project.subtitle}</p>

                            {/* Description */}
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 glass rounded-lg text-xs font-medium text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 3 && (
                                    <span className="px-2 py-1 glass rounded-lg text-xs font-medium text-slate-400">
                                        +{project.tech.length - 3}
                                    </span>
                                )}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 pt-4 border-t border-white/10">
                                {project.liveUrl && (
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 px-3 py-2 bg-gradient-accent text-white rounded-lg text-xs font-semibold text-center transition-all"
                                    >
                                        Live Demo
                                    </motion.a>
                                )}
                                {project.githubUrl && (
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 px-3 py-2 glass text-white rounded-lg text-xs font-semibold text-center hover:bg-white/15 transition-all"
                                    >
                                        GitHub
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PetProjects;
