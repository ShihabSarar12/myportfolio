import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star, Download, Code } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectsDetailed = () => {
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
                            Featured Work
                        </motion.span>
                        <h2 className='mb-4 text-3xl font-medium text-white'>
                            Projects & Open Source
                        </h2>
                        <p className='text-white max-w-2xl mx-auto'>
                            Building tools and libraries that developers love to
                            use
                        </p>
                    </div>

                    <div className='space-y-8'>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const ProjectCard = ({
    project,
    index,
    isInView,
}: {
    project: any;
    index: number;
    isInView: boolean;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            whileHover={{
                scale: 1.03,
                y: -3,
                transition: {
                    duration: 0.25,
                    ease: 'easeOut',
                },
            }}
        >
            <div className='relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group'>
                <div className='absolute inset-0 bg-white/0 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl' />

                <div className='relative z-10 p-8 space-y-6'>
                    <div className='flex items-start gap-4'>
                        <div
                            className={`shrink-0 p-3 rounded-lg bg-linear-to-r ${project.color}`}
                        >
                            <Code className='w-6 h-6 text-white' />
                        </div>
                        <div className='flex-1 space-y-2'>
                            <div className='flex items-start justify-between flex-wrap gap-2'>
                                <h3 className='text-white font-medium text-xl'>
                                    {project.name}
                                </h3>
                                <div className='flex items-center gap-3 text-white/70'>
                                    <div className='flex items-center gap-1'>
                                        <Star className='w-4 h-4' />
                                        <span>{project.stats.stars}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <Download className='w-4 h-4' />
                                        <span>
                                            {project.stats.downloads ||
                                                project.stats.users}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white/70'>
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech: string) => (
                            <span
                                key={tech}
                                className='px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 transition-all'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className='space-y-2'>
                        {project.storyBehindIt && (
                            <div className='p-4 rounded-lg bg-white/10 border border-white/20 text-white font-medium'>
                                The Story Behind It
                            </div>
                        )}
                        {project.howIGotTheWork && (
                            <div className='p-4 rounded-lg bg-white/10 border border-white/20 text-white font-medium'>
                                How I Got The Work
                            </div>
                        )}
                        {project.whatItDoes && (
                            <div className='p-4 rounded-lg bg-white/10 border border-white/20 text-white font-medium'>
                                What It Does
                            </div>
                        )}
                    </div>

                    <div className='flex flex-wrap gap-3 pt-6 border-t border-white/10'>
                        {project.github && (
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition-all text-white'
                            >
                                <Github className='w-4 h-4' />
                                <span>View Code</span>
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all text-white'
                            >
                                <ExternalLink className='w-4 h-4' />
                                <span>Live Demo</span>
                            </a>
                        )}

                        {(project.storyBehindIt ||
                            project.howIGotTheWork ||
                            project.whatItDoes) && (
                            <a
                                href={`/project/${project.id}`}
                                className='ml-auto flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition-all text-white'
                            >
                                View Details
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export { ProjectsDetailed };
