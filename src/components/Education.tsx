import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { education } from '../data/portfolio';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const getGPAType = (gpaString: string): string => {
        const parts = gpaString.split('/');
        const numericPart = parseFloat(parts[1]);
        return numericPart === 4.0 ? 'CGPA' : 'GPA';
    };

    return (
        <div className='relative py-20 lg:py-32 underwater-content'>
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
                        >
                            <span className='inline-block px-4 py-2 mb-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-bold text-white drop-shadow-md'>
                                Academic Background
                            </span>
                        </motion.span>
                        <h2 className='mb-4 text-3xl font-medium text-white'>
                            Education
                        </h2>
                        <p className='text-white max-w-2xl mx-auto drop-shadow-md'>
                            Strong foundation in Computer Science & Engineering
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-8'>
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2 * index,
                                }}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.03,
                                        y: -6,
                                        backdropFilter: 'blur(16px)',
                                        transition: {
                                            duration: 0.25,
                                            ease: 'easeOut',
                                        },
                                    }}
                                    className='h-full p-8 rounded-2xl bg-white/0 border border-white/10 hover:border-white/20 backdrop-blur-none shadow-xl transition-all duration-200'
                                >
                                    <div className='flex items-start gap-4 mb-6'>
                                        <div
                                            className={`shrink-0 p-4 rounded-xl bg-linear-to-br ${edu.color} shadow-md`}
                                        >
                                            <GraduationCap className='w-8 h-8 text-white' />
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <h3 className='mb-2 text-lg font-semibold text-white drop-shadow-md'>
                                                {edu.degree}
                                            </h3>
                                            <div className='space-y-1 text-white/80'>
                                                <p>{edu.institution}</p>
                                                <p className='text-white/70'>
                                                    {edu.field}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-wrap gap-3 mb-4 text-white/70'>
                                        <div className='flex items-center gap-1'>
                                            <MapPin className='w-4 h-4 text-blue-400' />
                                            <span>{edu.location}</span>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <Calendar className='w-4 h-4 text-purple-400' />
                                            <span>
                                                {edu.startDate} - {edu.endDate}
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <Award className='w-4 h-4 text-yellow-400' />
                                            <span>
                                                {getGPAType(edu.gpa)}: {edu.gpa}
                                            </span>
                                        </div>
                                    </div>

                                    <p className='text-white/70 mb-4'>
                                        {edu.description}
                                    </p>

                                    <div className='mb-4'>
                                        <div className='flex items-center gap-2 mb-3'>
                                            <BookOpen className='w-4 h-4 text-blue-500' />
                                            <span className='text-white font-medium'>
                                                Key Coursework
                                            </span>
                                        </div>
                                        <div className='flex flex-wrap gap-2'>
                                            {edu.coursework.map((course) => (
                                                <span
                                                    key={course}
                                                    className='px-3 py-1 rounded-full bg-white/0 border border-white/10 backdrop-blur-none text-white/70 hover:bg-white/20 hover:backdrop-blur-xl hover:text-white transition-all duration-200 cursor-default'
                                                >
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className='flex items-center gap-2 mb-3'>
                                            <Award className='w-4 h-4 text-purple-500' />
                                            <span className='text-white font-medium'>
                                                Achievements
                                            </span>
                                        </div>
                                        <ul className='space-y-1'>
                                            {edu.achievements.map(
                                                (achievement, idx) => {
                                                    const [title, description] =
                                                        achievement.split(
                                                            ' - '
                                                        );
                                                    return (
                                                        <li
                                                            key={idx}
                                                            className='text-white/70 flex items-start gap-2'
                                                        >
                                                            <span className='text-blue-500 mt-1'>
                                                                •
                                                            </span>
                                                            <span>
                                                                <strong>
                                                                    {title}
                                                                </strong>{' '}
                                                                - {description}
                                                            </span>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export { Education };
