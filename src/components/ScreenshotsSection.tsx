import { useState } from "react";
import { X } from "lucide-react";

const screenshots = [
  {
    label: "历史记录",
    description: "历史记录列表，支持搜索、固定、删除",
    src: "/assets/screenshot-history.jpeg",
  },
  {
    label: "设置页面",
    description: "快捷键、容量、语言、主题等个性化配置",
    src: "/assets/screenshot-settings.jpeg",
  },
  {
    label: "快捷弹窗",
    description: "Ctrl+Shift+V 唤起，键盘导航，快速复制",
    src: "/assets/screenshot-popup.png",
  },
];

export default function ScreenshotsSection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="screenshots" className="section-padding px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              border: "1px solid rgba(13,122,107,0.35)",
              background: "rgba(13,122,107,0.1)",
              color: "var(--accent-light)",
            }}
          >
            应用截图
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            简洁优雅的界面
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            遵循 HarmonyOS 设计语言，深色主题，清晰直观
          </p>
        </div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((shot, i) => (
            <div key={i} className="group flex flex-col gap-4">
              {/* Screenshot image — clickable to enlarge */}
              <div
                className="relative rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: "0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(13,122,107,0.18)",
                }}
                onClick={() => setLightbox(shot.src)}
              >
                <img
                  src={shot.src}
                  alt={shot.label}
                  className="w-full object-cover block"
                />
              </div>

              {/* Caption */}
              <div className="px-1">
                <h3 className="font-semibold text-base mb-1" style={{ color: "var(--text-primary)" }}>
                  {shot.label}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {shot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="截图放大"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
