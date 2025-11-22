import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "../data/portfolio";
import { Trophy, Award, Star, Users, BookOpen } from "lucide-react";

const categoryIcons: Record<string, typeof Trophy> = {
  Research: BookOpen,
  Professional: Award,
  Community: Users,
  Competition: Trophy,
  Academic: Star,
  default: Award,
};

const categoryColors: Record<string, string> = {
  Research: "from-blue-500 to-cyan-500",
  Professional: "from-purple-500 to-pink-500",
  Community: "from-green-500 to-emerald-500",
  Competition: "from-orange-500 to-red-500",
  Academic: "from-yellow-500 to-orange-500",
  default: "from-blue-500 to-purple-600",
};

export function AchievementsDetailed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="achievements" className="relative py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-2 rounded-full bg-white/10 border border-white/20 font-bold text-white drop-shadow-md"
            >
              Recognition & Awards
            </motion.span>

            <h2 className="mb-4 text-2xl text-white font-medium">
              Achievements
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Honored to be recognized for contributions to technology and
              research
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AchievementCard({
  achievement,
  index,
}: {
  achievement: any;
  index: number;
}) {
  const Icon = categoryIcons[achievement.category] || categoryIcons.default;
  const colorGradient =
    categoryColors[achievement.category] || categoryColors.default;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          backdropFilter: "blur(16px)",
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        className="h-full p-6 rounded-2xl bg-white/0 border border-white/0 backdrop-blur-0 shadow-lg relative overflow-hidden group text-white"
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-linear-to-br ${colorGradient}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white font-medium">
                {achievement.category}
              </span>
            </div>
          </div>

          <h3 className="mb-2 text-white font-semibold">{achievement.title}</h3>

          <div className="mb-3 space-y-1">
            <p className="text-white/70">{achievement.organization}</p>
            <p className="text-white/80">{achievement.date}</p>
          </div>

          <p className="text-white/70 mb-4">{achievement.description}</p>

          {achievement.details && (
            <a
              href={`/achievement/${achievement.id}`}
              className="mt-auto inline-block w-full text-center py-3 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium transition-all duration-200"
            >
              View Details
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
