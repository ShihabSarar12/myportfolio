import { useMemo } from 'react';
import { projects } from '../data/portfolio';
import { ContentRenderer } from './ContentRenderer';
import { Code, Star, Download, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetails = ({ id }: { id?: number }) => {
    const project = useMemo(
        () => projects.find((p) => p.id === Number(id)),
        [id]
    );

    if (!project) {
        return (
            <div className='text-white h-screen w-screen p-10 flex justify-center items-center'>
                <h1 className='font-bold'>Project not found.</h1>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-transparent text-white py-16 px-6'>
            <button
                onClick={() => {
                    window.history.back();
                }}
                className='px-4 py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition-colors text-white mb-4'
            >
                ← Back to Projects
            </button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className='p-8 rounded-2xl border border-white/10 shadow-lg text-white transition-all mb-8'
            >
                <div className='px-4'>
                    <div className='flex items-start gap-4 mb-6'>
                        <div
                            className={`p-3 rounded-lg bg-linear-to-r ${project.color}`}
                        >
                            <Code className='w-6 h-6 text-white' />
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-start justify-between flex-wrap gap-2'>
                                <h2 className='text-2xl font-semibold text-white'>
                                    {project.name}
                                </h2>
                                <div className='flex items-center gap-4 text-white/70'>
                                    <div className='flex items-center gap-1'>
                                        <Star className='w-5 h-5' />
                                        <span>{project.stats.stars}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <Download className='w-5 h-5' />
                                        <span>
                                            {project.stats.downloads ||
                                                project.stats.users}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white/70 mt-2'>
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-2 mb-6'>
                        {project.technologies.map((tech: string) => (
                            <span
                                key={tech}
                                className='px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 transition-all'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className='space-y-6'>
                        {project.storyBehindIt && (
                            <div className='space-y-2 text-white/70'>
                                <div className='rounded-lg w-full text-white bg-white/10 border border-white/20 p-3 inline-block font-medium'>
                                    The Story Behind It
                                </div>
                                <ContentRenderer
                                    content={project.storyBehindIt}
                                />
                            </div>
                        )}

                        {project.howIGotTheWork && (
                            <div className='space-y-2 text-white/70'>
                                <div className='rounded-lg w-full text-white bg-white/10 border border-white/20 p-3 inline-block font-medium'>
                                    How I Got The Work
                                </div>
                                <ContentRenderer
                                    content={project.howIGotTheWork}
                                />
                            </div>
                        )}

                        {project.whatItDoes && (
                            <div className='space-y-2 text-white/70'>
                                <div className='rounded-lg w-full text-white bg-white/10 border border-white/20 p-3 inline-block font-medium'>
                                    What It Does
                                </div>
                                <ContentRenderer content={project.whatItDoes} />
                            </div>
                        )}
                    </div>

                    <div className='flex flex-wrap gap-3 pt-6 border-t border-white/10'>
                        {project.github && (
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 transition-all'
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
                                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 transition-all'
                            >
                                <ExternalLink className='w-4 h-4' />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
