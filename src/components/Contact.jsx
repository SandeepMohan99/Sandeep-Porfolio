import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            ),
            label: 'Email',
            value: 'sandeepmohan99@gmail.com',
            href: 'mailto:sandeepmohan99@gmail.com',
            gradient: 'from-primary to-primary-light'
        },
        {
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            ),
            label: 'Phone',
            value: '+91 9567525733',
            href: 'tel:+919567525733',
            gradient: 'from-secondary to-secondary-light'
        },
        {
            icon: (
                <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </>
            ),
            label: 'Location',
            value: 'Thrissur, Kerala',
            gradient: 'from-accent to-accent-light'
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/SandeepMohan99',
            icon: (
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/sandeep-a-m',
            icon: (
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            )
        }
    ];

    return (
        <section id="contact" className="section-padding bg-dark-800/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4"></div>
                    <p className="text-slate-400 text-sm md:text-base lg:text-lg">
                        Have a project in mind? Let's work together!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 md:space-y-8"
                    >
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ x: 5 }}
                                className="card-modern flex items-start gap-4"
                            >
                                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {info.icon}
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                                    {info.href ? (
                                        <a href={info.href} className="text-sm md:text-base text-white font-semibold hover:text-primary transition-colors break-all">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm md:text-base text-white font-semibold">{info.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Links */}
                        <div className="pt-6">
                            <h3 className="text-lg md:text-xl font-bold mb-4 text-gradient-primary">Connect With Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-14 h-14 glass rounded-xl flex items-center justify-center hover:bg-white/15 transition-all group"
                                    >
                                        <svg className="w-6 h-6 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            {social.icon}
                                        </svg>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="card-modern"
                    >
                        <div className="space-y-6">
                            {/* Name Field */}
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className={`absolute left-4 transition-all duration-200 ${focusedField === 'name' || formData.name
                                        ? '-top-2 text-xs bg-dark-900 px-2 text-primary'
                                        : 'top-4 text-slate-400'
                                        }`}
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField('')}
                                    required
                                    className="w-full px-3 py-3 md:px-4 md:py-4 bg-dark-700/50 border border-white/10 rounded-xl text-sm md:text-base text-white focus:outline-none focus:border-primary transition-all"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className={`absolute left-4 transition-all duration-200 ${focusedField === 'email' || formData.email
                                        ? '-top-2 text-xs bg-dark-900 px-2 text-primary'
                                        : 'top-4 text-slate-400'
                                        }`}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField('')}
                                    required
                                    className="w-full px-3 py-3 md:px-4 md:py-4 bg-dark-700/50 border border-white/10 rounded-xl text-sm md:text-base text-white focus:outline-none focus:border-primary transition-all"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className={`absolute left-4 transition-all duration-200 ${focusedField === 'message' || formData.message
                                        ? '-top-2 text-xs bg-dark-900 px-2 text-primary'
                                        : 'top-4 text-slate-400'
                                        }`}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField('')}
                                    required
                                    rows="5"
                                    className="w-full px-3 py-3 md:px-4 md:py-4 bg-dark-700/50 border border-white/10 rounded-xl text-sm md:text-base text-white focus:outline-none focus:border-primary transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full btn-primary"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
