import { experiences } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative">
                            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-primary transition-all">
                                <div className="flex flex-wrap justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                        <p className="text-primary text-lg font-semibold">{exp.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-400 font-medium">{exp.period}</p>
                                        <p className="text-slate-500">{exp.location}</p>
                                    </div>
                                </div>

                                {exp.description && (
                                    <p className="text-slate-300 text-lg mb-6 pb-6 border-b border-slate-700">
                                        {exp.description}
                                    </p>
                                )}

                                <div className="space-y-8">
                                    {exp.projects.map((project, idx) => (
                                        <div key={idx} className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                                            <div className="mb-2">
                                                <h4 className="text-xl font-bold text-white">{project.name}</h4>
                                                {project.subtitle && (
                                                    <p className="text-primary font-semibold">{project.subtitle}</p>
                                                )}
                                            </div>
                                            <p className="text-slate-300 mb-4">{project.description}</p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="space-y-2">
                                                <p className="text-slate-400 font-semibold mb-2">Key Responsibilities:</p>
                                                <ul className="space-y-2">
                                                    {project.responsibilities.map((resp, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-slate-300">
                                                            <span className="text-primary mt-1">▹</span>
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
