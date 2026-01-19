const ProjectCard = ({ project }) => {
    return (
        <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-primary transition-all group">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-all"></div>
                <div className="relative z-10 text-6xl font-bold text-primary/50">
                    {project.title.charAt(0)}
                </div>
            </div>

            <div className="p-6 space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-primary font-semibold">{project.subtitle}</p>
                </div>

                <p className="text-slate-300 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-sm font-medium border border-slate-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="space-y-2">
                    <p className="text-slate-400 font-semibold">Key Features:</p>
                    <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                                <span className="text-primary mt-1">▹</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold text-center transition-all hover:scale-105"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.githubFrontend && (
                        <a
                            href={project.githubFrontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 border-2 border-slate-700 hover:border-primary text-white rounded-lg font-semibold text-center transition-all hover:scale-105"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
