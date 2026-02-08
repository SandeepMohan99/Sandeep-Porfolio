import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="card-modern group overflow-hidden"
        >
            {/* Project Image */}
            <div className="relative h-56 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                        {project.category === 'fullstack' ? '🚀' : '💻'}
                    </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Category Badge */}
            <div className="mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-full text-xs font-semibold text-accent-light uppercase tracking-wide">
                    {project.category}
                </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gradient-primary mb-2 group-hover:scale-105 transition-transform origin-left">
                {project.title}
            </h3>
            <p className="text-sm text-gradient-secondary mb-4">{project.subtitle}</p>

            {/* Description */}
            <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                    <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 glass rounded-lg text-xs font-medium text-white"
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>

            {/* Features */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                            <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                {project.liveUrl && (
                    <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 bg-gradient-primary text-white rounded-lg text-sm font-semibold text-center hover-glow-primary transition-all"
                    >
                        Live Demo
                    </motion.a>
                )}
                {project.githubFrontend && (
                    <motion.a
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 glass text-white rounded-lg text-sm font-semibold text-center hover:bg-white/15 transition-all"
                    >
                        GitHub
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
