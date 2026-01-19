import { petProjects, petProjectsDescription } from '../data/petProjects';

const PetProjects = () => {
    return (
        <section id="pet-projects" className="py-20 px-4 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Personal <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        {petProjectsDescription}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {petProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary transition-all group"
                        >
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-all"></div>
                                <div className="relative z-10 text-5xl font-bold text-primary/50">
                                    {project.title.charAt(0)}
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                    <p className="text-primary font-semibold text-sm">{project.subtitle}</p>
                                </div>

                                <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium border border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 pt-2">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-center text-sm transition-all hover:scale-105"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2 border-2 border-slate-700 hover:border-primary text-white rounded-lg font-semibold text-center text-sm transition-all hover:scale-105"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PetProjects;
