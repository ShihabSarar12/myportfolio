import { ContentRenderer } from './ContentRenderer';
import { Trophy, Award, Star, Users, BookOpen } from 'lucide-react';
import { useMemo } from 'react';
import { achievements } from '../data/portfolio';
import { motion } from 'framer-motion';

const categoryIcons: Record<string, typeof Trophy> = {
    Research: BookOpen,
    Professional: Award,
    Community: Users,
    Competition: Trophy,
    Academic: Star,
    default: Award,
};

const categoryColors: Record<string, string> = {
    Research: 'from-blue-500 to-cyan-500',
    Professional: 'from-purple-500 to-pink-500',
    Community: 'from-green-500 to-emerald-500',
    Competition: 'from-orange-500 to-red-500',
    Academic: 'from-yellow-500 to-orange-500',
    default: 'from-blue-500 to-purple-600',
};

const AchievementDetails = ({ id }: { id?: number }) => {
    const achievement = useMemo(
        () => achievements.find((p) => p.id === Number(id)),
        [id]
    );

    if (!achievement)
        return (
            <div className='text-white h-screen w-screen p-10 flex justify-center items-center'>
                <h1 className='font-bold'>Achievement not found.</h1>
            </div>
        );

    const Icon = categoryIcons[achievement.category] || categoryIcons.default;
    const colorGradient =
        categoryColors[achievement.category] || categoryColors.default;

    return (
        <div className='min-h-screen bg-transparent text-white py-16 px-6'>
            <button
                onClick={() => {
                    window.history.back();
                }}
                className='px-4 py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition-colors text-white backdrop-blur-md mb-4'
            >
                ← Back to Achievements
            </button>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className='p-8 rounded-2xl border border-white/10 shadow-lg text-white transition-all mb-8'
            >
                <div className='px-4'>
                    <div className='flex items-center justify-between mb-6'>
                        <div
                            className={`p-3 rounded-xl bg-linear-to-br ${colorGradient}`}
                        >
                            <Icon className='w-6 h-6 text-white' />
                        </div>
                        <span className='px-3 py-1 rounded-full bg-white/20 text-white font-medium'>
                            {achievement.category}
                        </span>
                    </div>

                    <h2 className='text-2xl font-semibold mb-2'>
                        {achievement.title}
                    </h2>
                    <p className='text-white/70 mb-4'>
                        {achievement.organization} | {achievement.date}
                    </p>
                    <p className='text-white/70 mb-6'>
                        {achievement.description}
                    </p>

                    {achievement.details && (
                        <div className='space-y-4 text-white/70'>
                            <ContentRenderer content={achievement.details} />
                            {achievement.image && (
                                <div className='rounded-lg w-full flex justify-center items-center overflow-hidden'>
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className='rounded-lg w-5/6 h-auto'
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default AchievementDetails;
