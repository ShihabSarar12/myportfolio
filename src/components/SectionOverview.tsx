import {
    User,
    Briefcase,
    GraduationCap,
    FileText,
    Trophy,
    Code,
    ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

const sections = [
    {
        id: 'about',
        icon: User,
        title: 'About Me',
        description:
            'Passionate about technology, innovation, and building impactful solutions',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        id: 'experience',
        icon: Briefcase,
        title: 'Experience',
        description:
            '2+ years building scalable systems across various industries',
        color: 'from-purple-500 to-pink-500',
    },
    {
        id: 'education',
        icon: GraduationCap,
        title: 'Education',
        description:
            'Bsc in Computer Science and Engineering with focus on AI and Machine Learning',
        color: 'from-green-500 to-emerald-500',
    },
    {
        id: 'research',
        icon: FileText,
        title: 'Research',
        description: '2+ published papers in top-tier conferences and journals',
        color: 'from-orange-500 to-red-500',
    },
    {
        id: 'projects',
        icon: Code,
        title: 'Projects',
        description:
            'Successfully Delivered Projects for International Clients, Including Canada and Australia',
        color: 'from-yellow-500 to-orange-500',
    },
    {
        id: 'achievements',
        icon: Trophy,
        title: 'Achievements',
        description: 'Awards, recognitions, and contributions to the community',
        color: 'from-indigo-500 to-purple-500',
    },
];

const SectionOverview = () => {
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
    }, []);

    return (
        <section className='relative py-20 lg:py-32'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div>
                    <div className='text-center mb-16'>
                        <h2 className='mb-4 text-4xl text-white font-bold'>
                            Explore My Journey
                        </h2>
                        <p className='text-white max-w-2xl mx-auto'>
                            Navigate through different aspects of my
                            professional career and achievements
                        </p>
                    </div>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {sections.map((section, index) => {
                            const IconComponent = section.icon;
                            return (
                                <motion.button
                                    key={index}
                                    onClick={() => scrollToSection(section.id)}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -3,
                                        transition: {
                                            duration: 0.25,
                                            ease: 'easeOut',
                                        },
                                    }}
                                    className='group relative p-6 rounded-2xl border border-white/10 bg-transparent hover:backdrop-blur-md hover:border-white/20 transition-all duration-300 shadow-lg text-left cursor-pointer'
                                >
                                    <div
                                        className={`inline-flex p-4 rounded-xl bg-linear-to-br ${section.color} mb-4 transform transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <IconComponent className='w-6 h-6 text-white' />
                                    </div>

                                    <h3 className='mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-white'>
                                        {section.title}
                                    </h3>

                                    <p className='text-white/70 mb-4 transition-colors duration-300'>
                                        {section.description}
                                    </p>

                                    <div className='flex items-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300'>
                                        <span>Explore</span>
                                        <ArrowRight className='w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1' />
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { SectionOverview };
