import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

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
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto">
                    {experiences.map((experience, expIndex) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: expIndex * 0.2 }}
                            className="relative"
                        >
                            {/* Timeline Line */}
                            {expIndex < experiences.length - 1 && (
                                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
                            )}

                            {/* Experience Card */}
                            <div className="flex gap-8 mb-12">
                                {/* Timeline Dot */}
                                <div className="relative flex-shrink-0">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center glow-primary"
                                    >
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="flex-1 card-modern"
                                >
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">
                                                {experience.role}
                                            </h3>
                                            <p className="text-xl text-white font-semibold">{experience.company}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="px-4 py-2 glass rounded-lg">
                                                <p className="text-sm text-slate-300">{experience.period}</p>
                                            </div>
                                            <p className="text-sm text-slate-400 mt-2">{experience.location}</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-300 mb-6 leading-relaxed">
                                        {experience.description}
                                    </p>

                                    {/* Projects */}
                                    <div className="space-y-6">
                                        {experience.projects.map((project, projIndex) => (
                                            <motion.div
                                                key={project.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: projIndex * 0.1 }}
                                                className="bg-dark-700/50 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-all"
                                            >
                                                <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
                                                <p className="text-sm text-gradient-secondary mb-3">{project.subtitle}</p>
                                                <p className="text-slate-400 mb-4">{project.description}</p>

                                                {/* Tech Stack */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.tech.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg text-xs font-medium text-white"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Responsibilities */}
                                                <ul className="space-y-2">
                                                    {project.responsibilities.map((resp, respIndex) => (
                                                        <li key={respIndex} className="flex items-start gap-2 text-sm text-slate-400">
                                                            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            {resp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
