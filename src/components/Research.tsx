import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { research } from "../data/portfolio";
import { ContentRenderer } from "../components/ContentRenderer";
import { motion, AnimatePresence } from "framer-motion";

export default function ResearchPaperPage() {
  const { id } = useParams();
  const paper = research.find((p) => p.id === Number(id));
  const [modalContent, setModalContent] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModalContent(null);
      }
    };
    if (modalContent)
      document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalContent]);

  if (!paper)
    return (
      <div className="text-white p-10 bg-linear-to-br from-blue-900 to-blue-700 min-h-screen">
        Paper not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 to-cyan-500 text-white py-16 px-6">
      <a
        href="/#research"
        className="text-blue-300 hover:text-blue-100 hover:underline mb-6 inline-block transition"
      >
        ← Back to Research
      </a>

      <h1 className="text-3xl font-bold mb-6">{paper.title}</h1>
      <p className="mb-10 text-white/90">{paper.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {[
          {
            title: "The Story Behind It",
            content: paper.storyBehindIt,
            image: paper.storyImage,
          },
          { title: "Problem Statement", content: paper.problemStatement },
          {
            title: "Methodology",
            content: paper.methodology,
            image: paper.methodologyImage,
          },
          {
            title: "Results & Impact",
            content: paper.result,
            image: paper.resultImage,
          },
        ].map((sec, i) => (
          <Section
            key={i}
            title={sec.title}
            content={sec.content}
            image={sec.image}
            onReadMore={() => setModalContent(sec.content)}
          />
        ))}
      </div>

      <AnimatePresence>
        {modalContent && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-2xl w-full relative overflow-auto max-h-[80vh]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                onClick={() => setModalContent(null)}
                className="absolute top-3 right-3 text-white hover:text-blue-300 transition text-lg"
              >
                ✕
              </button>
              <ContentRenderer content={modalContent} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({ title, content, image, onReadMore }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 transition hover:scale-[1.02]">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="line-clamp-3 mb-4 text-white/90">
        <ContentRenderer content={content} />
      </div>
      {image && <img src={image} alt={title} className="rounded-lg mb-4" />}
      <button
        onClick={onReadMore}
        className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
      >
        Read More
      </button>
    </div>
  );
}
