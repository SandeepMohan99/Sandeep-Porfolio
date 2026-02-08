import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'experience', 'skills', 'projects', 'pet-projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#pet-projects', label: 'Pet Projects' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`${scrolled ? 'glass-strong' : 'glass'} rounded-2xl px-6 py-4 transition-all duration-300`}>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-2xl font-bold font-heading"
                        >
                            <span className="text-gradient">Portfolio</span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex space-x-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveSection(link.href.slice(1))}
                                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${activeSection === link.href.slice(1)
                                                ? 'bg-white/15 text-white'
                                                : 'text-slate-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {link.label}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg glass hover:bg-white/15 transition-all"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden overflow-hidden"
                            >
                                <ul className="flex flex-col space-y-2 pt-4 mt-4 border-t border-white/10">
                                    {navLinks.map((link, index) => (
                                        <motion.li
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                        >
                                            <a
                                                href={link.href}
                                                onClick={() => {
                                                    setMobileMenuOpen(false);
                                                    setActiveSection(link.href.slice(1));
                                                }}
                                                className={`block py-3 px-4 rounded-lg font-medium transition-all ${activeSection === link.href.slice(1)
                                                        ? 'bg-white/15 text-white'
                                                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                                                    }`}
                                            >
                                                {link.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
