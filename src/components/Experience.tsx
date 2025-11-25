import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { useTilt } from '../hooks/useTilt';

const ExperienceCard = ({ exp }: { exp: any }) => {
    const cardRef = useTilt<HTMLDivElement>();

    return (
        <motion.div
            ref={cardRef}
            whileHover={{
                scale: 1.03,
                y: -6,
                backdropFilter: 'blur(16px)',
                transition: { duration: 0.25, ease: 'easeOut' },
            }}
            className='p-8 rounded-2xl bg-white/0 border hover:border-white/20 border-white/10 backdrop-blur-none shadow-lg text-white transition-all duration-200 cursor-pointer'
        >
            <div className='flex items-start gap-4 mb-4'>
                <div
                    className={`shrink-0 p-3 rounded-lg bg-linear-to-br ${exp.color} shadow-md`}
                >
                    <Briefcase className='w-6 h-6 text-white' />
                </div>
                <div className='flex-1 min-w-0 text-left'>
                    <h3 className='mb-1 font-semibold text-white text-left'>
                        {exp.position}
                    </h3>
                    <div className='flex flex-wrap items-center gap-3 mb-2 text-left'>
                        <span className='inline-block px-2 py-0.5 rounded bg-white/20 border border-white/20 font-medium text-white'>
                            {exp.type}
                        </span>
                        <span className='font-medium text-white'>
                            {exp.company}
                        </span>
                    </div>
                    <div className='flex flex-wrap gap-3 text-white/70 text-sm text-left'>
                        <div className='flex items-center gap-1'>
                            <MapPin className='w-4 h-4 text-blue-400' />
                            <span>{exp.location}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Calendar className='w-4 h-4 text-purple-400' />
                            <span>
                                {exp.startDate} - {exp.endDate}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-white/80 mb-4'>{exp.description}</p>

            <div className='space-y-2 mb-4'>
                {exp.achievements.map((achievement: string, idx: number) => (
                    <div
                        key={idx}
                        className='flex items-start gap-2 text-white/70'
                    >
                        <ChevronRight className='w-4 h-4 text-blue-500 mt-0.5 shrink-0' />
                        <span>{achievement}</span>
                    </div>
                ))}
            </div>

            <div className='flex flex-wrap gap-2'>
                {exp.technologies.map((tech: string) => (
                    <span
                        key={tech}
                        className='px-3 py-1 rounded-full bg-white/20 border border-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 hover:backdrop-blur-xl transition-all duration-200 cursor-default'
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='relative py-20 lg:py-32'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className='text-center mb-16'>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className='inline-block px-4 py-2 mb-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-bold text-white drop-shadow-md'
                        >
                            <span>Professional Journey</span>
                        </motion.span>
                        <h2 className='mb-4 text-3xl font-medium text-white'>
                            Work Experience
                        </h2>
                        <p className='text-white max-w-2xl mx-auto'>
                            Building impactful solutions across various
                            industries
                        </p>
                    </div>

                    <div className='relative'>
                        <div className='hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-500 to-purple-600 opacity-20' />

                        <div className='space-y-12'>
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={
                                        isInView ? { opacity: 1, y: 0 } : {}
                                    }
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.1 * index,
                                    }}
                                    className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                                        index % 2 === 0 ? 'lg:text-right' : ''
                                    }`}
                                >
                                    <div className='hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                        <div className='w-4 h-4 rounded-full bg-linear-to-br from-blue-500 to-cyan-600 ring-1 ring-background' />
                                    </div>

                                    <div
                                        className={
                                            index % 2 === 0
                                                ? 'lg:col-start-1'
                                                : 'lg:col-start-2'
                                        }
                                    >
                                        <ExperienceCard exp={exp} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export { Experience };
