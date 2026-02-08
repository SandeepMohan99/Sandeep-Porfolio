import { motion } from 'framer-motion';
import { mainSummary } from '../data/skills';

const About = () => {
    const info = [
        { label: 'Name', value: 'Sandeep A M' },
        { label: 'Location', value: 'Thrissur, Kerala' },
        { label: 'Email', value: 'sandeepmohan99@gmail.com' },
        { label: 'Phone', value: '+91 9567525733' }
    ];

    const stats = [
        { value: '2+', label: 'Years Experience', gradient: 'from-primary to-primary-light' },
        { value: '4+', label: 'Projects Completed', gradient: 'from-secondary to-secondary-light' },
        { value: '10+', label: 'Technologies', gradient: 'from-accent to-accent-light' },
        { value: '100%', label: 'Client Satisfaction', gradient: 'from-success to-success-light' }
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="section-padding bg-dark-800/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

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
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
                </motion.div>

                {/* Bento Grid Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* Main Summary - Large Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="lg:col-span-2 card-modern"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gradient-primary">Front End Developer</h3>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            {mainSummary}
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="card-modern text-center group"
                        >
                            <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                                {stat.value}
                            </div>
                            <div className="text-slate-400 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}

                    {/* Contact Info Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="lg:col-span-2 card-modern"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gradient-secondary">Contact Information</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {info.map((item) => (
                                <div key={item.label} className="flex flex-col">
                                    <span className="text-slate-500 text-sm font-medium mb-1">{item.label}</span>
                                    <span className="text-white font-semibold">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Resume Download Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="card-modern flex flex-col justify-center items-center text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-success rounded-2xl flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <motion.a
                            href="/resume.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary w-full"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
