import { mainSummary } from '../data/skills';

const About = () => {
    const info = [
        { label: 'Name', value: 'Sandeep A M' },
        { label: 'Location', value: 'Thrissur, Kerala' },
        { label: 'Email', value: 'sandeepmohan99@gmail.com' },
        { label: 'Phone', value: '+91 9567525733' }
    ];

    return (
        <section id="about" className="py-20 px-4 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                            <h3 className="text-2xl font-bold mb-4 text-gradient">Full Stack Developer</h3>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {mainSummary}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                                <div className="text-slate-400 text-sm">Years Experience</div>
                            </div>
                            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 text-center">
                                <div className="text-3xl font-bold text-secondary mb-2">4+</div>
                                <div className="text-slate-400 text-sm">Projects Completed</div>
                            </div>
                            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 text-center">
                                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                                <div className="text-slate-400 text-sm">Technologies</div>
                            </div>
                            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                                <div className="text-slate-400 text-sm">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-primary transition-all">
                        <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
                        <div className="space-y-4">
                            {info.map((item) => (
                                <div key={item.label} className="flex justify-between items-center py-3 border-b border-slate-700">
                                    <span className="text-slate-400 font-medium">{item.label}</span>
                                    <span className="text-white font-semibold">{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-700">
                            <a
                                href="/resume.pdf"
                                download
                                className="w-full block text-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
