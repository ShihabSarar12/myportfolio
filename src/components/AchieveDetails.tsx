import { useParams } from "react-router-dom";
import { achievements } from "../data/portfolio";
import { ContentRenderer } from "./ContentRenderer";

export default function AchievementDetails() {
  const { id } = useParams();
  const achievement = achievements.find((a) => a.id === Number(id));

  if (!achievement)
    return (
      <p className="text-white text-center py-20">Achievement not found</p>
    );

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-linear-to-r from-gray-900 to-black">
      <div className="max-w-3xl w-full p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-lg">
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
