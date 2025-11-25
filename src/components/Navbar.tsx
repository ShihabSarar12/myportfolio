import { useCallback, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = useCallback((href: string) => {
        const id = href.startsWith('#') ? href.slice(1) : href;
        const el = document.getElementById(id);
        const scroll: any = (window as any).__scrollControls;
        const container = scroll?.el as HTMLDivElement | null;
        if (!el || !container) return;

        const containerRect = container.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const targetTop = elRect.top - containerRect.top + container.scrollTop;

        container.scrollTo({
            top: targetTop,
            behavior: 'smooth',
        });

        setIsMobileMenuOpen(false);
    }, []);

    return (
        <motion.nav className='fixed w-full z-50 text-white backdrop-blur-2xl'>
            <div className='max-w-7xl mx-auto px-6 lg:px-12'>
                <div className='flex justify-between items-center h-20 text-white'>
                    <motion.button
                        onClick={() => scrollToSection('#home')}
                        className='relative text-2xl font-bold transition-all group'
                    >
                        {personalInfo.name
                            .split(' ')
                            .map((word) => word[0])
                            .join('')}
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full' />
                    </motion.button>

                    <div className='hidden md:flex items-center space-x-8'>
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className='hover:cursor-pointer relative px-2 py-1 font-medium transition-all group'
                            >
                                {item.name}
                                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full' />
                            </motion.button>
                        ))}
                    </div>

                    <div className='text-white/50 hidden md:flex items-center space-x-4'>
                        <motion.a
                            href={personalInfo.links.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-white transition-colors'
                        >
                            <Github className='w-5 h-5' />
                        </motion.a>
                        <motion.a
                            href={personalInfo.links.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-white transition-colors'
                        >
                            <Linkedin className='w-5 h-5' />
                        </motion.a>
                        <motion.a
                            href={`mailto:${personalInfo.email}`}
                            className='hover:text-white transition-colors'
                        >
                            <Mail className='w-5 h-5' />
                        </motion.a>
                    </div>

                    <div className='md:hidden'>
                        <motion.button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className='text-white hover:text-white transition-colors'
                        >
                            {isMobileMenuOpen ? (
                                <X className='w-6 h-6' />
                            ) : (
                                <Menu className='w-6 h-6' />
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='md:hidden shadow-md'
                    >
                        <div className='px-4 py-4 flex flex-col space-y-3'>
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className='text-left px-3 py-2 font-medium hover:text-white/60 transition-all'
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export { Navbar };
