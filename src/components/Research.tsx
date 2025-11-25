import { research } from '../data/portfolio';
import {
    FileText,
    Github,
    Users,
    TrendingUp,
    Award,
    Star,
    ExternalLink,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const ResearchPaperPage = ({ id }: { id?: number }) => {
    const paper = useMemo(
        () => research.find((p) => p.id === Number(id)),
        [id]
    );

    if (!paper) {
        return (
            <div className='text-white h-screen w-screen p-10 flex justify-center items-center'>
                <h1 className='font-bold'>Paper not found.</h1>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-transparent text-white py-16 px-6'>
            <div className='flex justify-center items-center flex-col'>
                <button
                    onClick={() => {
                        window.history.back();
                    }}
                    className='hover:cursor-pointer px-4 py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition-colors text-white mb-4'
                >
                    ← Back to Researches
                </button>

                <ResearchCard paper={paper} />
            </div>
        </div>
    );
};

const ResearchCard = ({ paper }: { paper: any }) => {
    const formatAuthors = (authors: string, yourName: string) =>
        authors.split(',').map((author, i) => {
            const trimmed = author.trim();
            const bold = trimmed === yourName;
            return (
                <span key={i}>
                    {i > 0 && ', '}
                    {bold ? (
                        <strong className='text-white'>{trimmed}</strong>
                    ) : (
                        trimmed
                    )}
                </span>
            );
        });

    const sections = [
        { title: 'The Story Behind It', content: paper.storyBehindIt },
        { title: 'Problem Statement', content: paper.problemStatement },
        { title: 'Methodology', content: paper.methodology },
        { title: 'Results & Impact', content: paper.result },
    ];

    const renderHTML = (text: string) => {
        if (!text) return { __html: '' };

        let html = text;

        html = html.replace(
            /\*\*(.*?)\*\*/g,
            '<strong class="font-bold">$1</strong>'
        );
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        html = html.replace(
            /!\[(.*?)\]\((.*?)\)/g,
            '<img src="$2" alt="$1" class="block rounded-lg my-4 lg:w-2/3 sm:w-full max-h-[50rem]" />'
        );
        html = html.replace(/\n/g, '<br />');

        return { __html: html };
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='p-8 lg:w-5/6 sm:w-full rounded-2xl border border-white/10 shadow-lg text-white transition-all mb-8'
        >
            <div className='flex items-start gap-4 mb-6'>
                <div
                    className={`shrink-0 p-3 rounded-lg bg-linear-to-br ${paper.color} shadow-md`}
                >
                    <FileText className='w-6 h-6 text-white' />
                </div>

                <div className='flex-1'>
                    <div className='flex items-start justify-between mb-2 flex-wrap gap-2'>
                        <div className='flex items-center gap-2 flex-wrap'>
                            <span className='px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white'>
                                {paper.type}
                            </span>
                            <span className='inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-yellow-500/20 text-white'>
                                <Award className='w-3 h-3' />
                                <span>Rank: {paper.rank}</span>
                            </span>
                            {paper.impactFactor && (
                                <span className='inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-green-500/20 text-white'>
                                    <Star className='w-3 h-3' />
                                    <span>IF: {paper.impactFactor}</span>
                                </span>
                            )}
                        </div>
                        <span className='text-white/70'>{paper.date}</span>
                    </div>

                    <h3 className='mb-2 text-white font-semibold text-3xl'>
                        {paper.title}
                    </h3>

                    <div className='flex items-start gap-2 mb-2 text-white/70'>
                        <Users className='w-4 h-4 shrink-0 mt-1' />
                        <p>{formatAuthors(paper.authors, paper.yourName)}</p>
                    </div>

                    <p className='italic text-white/70 mb-2'>{paper.venue}</p>
                </div>
            </div>
            <p className='text-white/70 mb-4'>{paper.description}</p>
            <div className='mb-6 p-4 rounded-lg bg-white/5 border border-white/10'>
                <div className='flex items-start gap-2'>
                    <TrendingUp className='w-5 h-5 text-blue-400 shrink-0 mt-0.5' />
                    <p className='text-white/80'>{paper.impact}</p>
                </div>
            </div>
            <div className='flex flex-wrap gap-2 mb-6'>
                {paper.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className='px-3 py-1 rounded-full bg-white/0 border border-white/0 text-white/70 hover:bg-white/10 hover:backdrop-blur-sm transition-all'
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className='space-y-6 mb-6'>
                {sections.map((sec, i) => (
                    <div key={i}>
                        <div className='p-4 rounded-lg bg-white/10 border border-white/20 text-white font-medium'>
                            {sec.title}
                        </div>
                        <div
                            className='mt-2 text-white/80 max-w-full wrap-break-word'
                            dangerouslySetInnerHTML={renderHTML(sec.content)}
                        />
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap gap-3 pt-6 border-t border-white/10'>
                {paper.links.paper && (
                    <a
                        href={paper.links.paper}
                        className='flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition-all text-white'
                    >
                        <ExternalLink className='w-4 h-4' />
                        <span>Read Paper</span>
                    </a>
                )}
                {paper.links?.code && (
                    <a
                        href={paper.links.code}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-white'
                    >
                        <Github className='w-4 h-4' />
                        <span>View Code</span>
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ResearchPaperPage;
