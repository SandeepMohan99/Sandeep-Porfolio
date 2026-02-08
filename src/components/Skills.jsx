import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
    const categories = [
        { name: 'Frontend', skills: skills.frontend, gradient: 'from-primary to-primary-light', icon: '⚛️' },
        { name: 'Backend', skills: skills.backend, gradient: 'from-secondary to-secondary-light', icon: '⚙️' },
        { name: 'Tools & Others', skills: skills.tools, gradient: 'from-accent to-accent-light', icon: '🛠️' }
    ];

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
        <section id="skills" className="section-padding bg-dark-800/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

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
                        Skills & <span className="text-gradient">Technologies</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="card-modern group"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                                    {category.icon}
                                </div>
                                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                    {category.name}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-5">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-200 font-medium">{skill.name}</span>
                                            <span className={`text-sm font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                                                className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-400 text-lg">
                        Constantly learning and adapting to new technologies to deliver cutting-edge solutions
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
