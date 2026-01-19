const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-slate-400">
                            © {new Date().getFullYear()} <span className="text-white font-semibold">Sandeep A M</span>. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/SandeepMohan99"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/sandeep-a-m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:sandeepmohan99@gmail.com"
                            className="text-slate-400 hover:text-primary transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-slate-500 text-sm">
                        Built with React + Vite & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
