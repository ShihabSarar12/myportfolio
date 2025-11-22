import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  ExternalLink,
  Github,
  Users,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";
import { research } from "../data/portfolio";

export function ResearchDetailed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
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
              Research Contributions
            </motion.span>

            <h2 className="mb-4 text-3xl font-medium text-white">
              Published Research
            </h2>

            <p className="text-white max-w-2xl mx-auto">
              Advancing the field through cutting-edge research and innovation
            </p>
          </div>

          <div className="space-y-8">
            {research.map((paper, index) => (
              <ResearchPaper
                key={paper.id}
                paper={paper}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ResearchPaper({
  paper,
  index,
  isInView,
}: {
  paper: any;
  index: number;
  isInView: boolean;
}) {
  const sectionRef = useRef(null);

  const formatAuthors = (authors: string, yourName: string) =>
    authors.split(",").map((author, i) => {
      const trimmed = author.trim();
      const bold = trimmed === yourName;
      return (
        <span key={i}>
          {i > 0 && ", "}
          {bold ? <strong className="text-white">{trimmed}</strong> : trimmed}
        </span>
      );
    });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <motion.div
        whileHover={{
          backdropFilter: "blur(16px)",
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        className="p-8 rounded-2xl border border-white/0 backdrop-blur-0 shadow-lg text-white transition-all cursor-pointer"
      >
        {/* TOP SECTION */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`shrink-0 p-3 rounded-lg bg-linear-to-br ${paper.color} shadow-md`}
          >
            <FileText className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                  {paper.type}
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-yellow-500/20 text-white">
                  <Award className="w-3 h-3" />
                  <span>Rank: {paper.rank}</span>
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-green-500/20 text-white">
                  <Star className="w-3 h-3" />
                  <span>IF: {paper.impactFactor}</span>
                </span>
              </div>

              <span className="text-white/70">{paper.date}</span>
            </div>

            <h3 className="mb-2 text-white font-semibold">{paper.title}</h3>

            <div className="flex items-start gap-2 mb-2 text-white/70">
              <Users className="w-4 h-4 shrink-0 mt-1" />
              <p>{formatAuthors(paper.authors, paper.yourName)}</p>
            </div>

            <p className="italic text-white/70 mb-2">{paper.venue}</p>
          </div>
        </div>

        <p className="text-white/70 mb-4">{paper.description}</p>

        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-white/80">{paper.impact}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {paper.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/0 border border-white/0 text-white/70 hover:bg-white/10 hover:backdrop-blur-sm transition-all"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4 mb-6">
          <SectionTitle title="The Story Behind It" />
          <SectionTitle title="Problem Statement" />
          <SectionTitle title="Methodology" />
          <SectionTitle title="Results & Impact" />
        </div>

        <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
          <a
            href={`/research/${paper.id}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 transition-colors text-white backdrop-blur-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Read Paper</span>
          </a>

          {paper.links.code && (
            <a
              href={paper.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-4 text-white font-medium">
      {title}
    </div>
  );
}
