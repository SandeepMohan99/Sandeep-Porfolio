import { skills } from '../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Skills & <span className="text-gradient">Technologies</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-primary transition-all">
                        <h3 className="text-2xl font-bold mb-6 text-gradient">Frontend</h3>
                        <div className="space-y-4">
                            {skills.frontend.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-300 font-medium">{skill.name}</span>
                                        <span className="text-primary font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-secondary transition-all">
                        <h3 className="text-2xl font-bold mb-6 text-gradient">Backend</h3>
                        <div className="space-y-4">
                            {skills.backend.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-300 font-medium">{skill.name}</span>
                                        <span className="text-secondary font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-accent transition-all">
                        <h3 className="text-2xl font-bold mb-6 text-gradient">Tools & Others</h3>
                        <div className="space-y-4">
                            {skills.tools.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-300 font-medium">{skill.name}</span>
                                        <span className="text-accent font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-accent to-primary h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
