import { useParams } from "react-router-dom";
import { achievements } from "../data/portfolio";
import { ContentRenderer } from "./ContentRenderer";
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

export default function AchievementDetails() {
  const { id } = useParams();
  const achievement = achievements.find((a) => a.id === Number(id));

  if (!achievement)
    return (
      <p className="text-white text-center py-20">Achievement not found</p>
    );

  const Icon = categoryIcons[achievement.category] || categoryIcons.default;
  const colorGradient =
    categoryColors[achievement.category] || categoryColors.default;

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-[#074387]">
      <div className="w-full max-w-7xl p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-lg">
        {/* TOP SECTION */}
        <div className="flex items-center justify-between mb-6">
          <div className={`p-3 rounded-xl bg-linear-to-br ${colorGradient}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="px-3 py-1 rounded-full bg-white/20 text-white font-medium">
            {achievement.category}
          </span>
        </div>

        <h2 className="text-2xl font-semibold mb-2">{achievement.title}</h2>
        <p className="text-white/70 mb-4">
          {achievement.organization} | {achievement.date}
        </p>
        <p className="text-white/70 mb-6">{achievement.description}</p>

        {achievement.details && (
          <div className="space-y-4">
            <ContentRenderer content={achievement.details} />
            {achievement.image && (
              <div className="rounded-lg overflow-hidden border border-white/20">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        )}

        <a
          href="/"
          className="mt-6 inline-block py-3 px-6 rounded-lg bg-white/20 hover:bg-white/30 text-white font-medium transition-all duration-200"
        >
          ← Back to Achievements
        </a>
      </div>
    </div>
  );
}
