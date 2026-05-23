import { Clipboard, Search, Zap, Image, Code2, Link2, FileText, Layers } from "lucide-react";

const features = [
  {
    icon: <Clipboard size={28} />,
    title: "剪贴板历史管理",
    description: "自动捕获每一次复制操作，保存最多 300 条历史记录，默认 60 条，容量可在 10~300 条之间自由调整。",
    colorFrom: "#0D7A6B",
    colorTo: "#1aab97",
    glow: "rgba(13, 122, 107, 0.15)",
  },
  {
    icon: <Zap size={28} />,
    title: "快捷键一键唤起",
    description: "默认 Ctrl+Shift+V 全局热键，随时唤起剪贴板弹窗，支持自定义 Ctrl / Shift / Alt 组合键，高效融入你的工作流。",
    colorFrom: "#f59e0b",
    colorTo: "#f97316",
    glow: "rgba(245, 158, 11, 0.15)",
  },
  {
    icon: <Search size={28} />,
    title: "快速搜索与选择",
    description: "弹窗内实时搜索历史记录，支持键盘上下键导航、回车复制、Ctrl+1~9 快速选择，操作流畅高效。",
    colorFrom: "#10b981",
    colorTo: "#059669",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  {
    icon: <Layers size={28} />,
    title: "多类型内容支持",
    description: "完整支持文本、链接、代码片段、图片、HTML、URI、文件 URI 及自定义 MIME 内容，智能识别内容类型。",
    colorFrom: "#8b5cf6",
    colorTo: "#7c3aed",
    glow: "rgba(139, 92, 246, 0.15)",
  },
];

const contentTypes = [
  { icon: <FileText size={16} />, label: "纯文本" },
  { icon: <Link2 size={16} />, label: "链接" },
  { icon: <Code2 size={16} />, label: "代码片段" },
  { icon: <Image size={16} />, label: "图片" },
  { icon: <Layers size={16} />, label: "HTML" },
  { icon: <FileText size={16} />, label: "URI" },
  { icon: <FileText size={16} />, label: "文件 URI" },
  { icon: <Layers size={16} />, label: "自定义 MIME" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding px-6 relative">
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
            核心功能
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            为效率而生
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            ClipClap 将剪贴板管理提升到全新高度，让你的每一次复制都有价值
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl glass-card hover:-translate-y-1 transition-all duration-300"
              style={{
                boxShadow: `0 0 40px ${feature.glow}`,
                border: "1px solid var(--border-color)",
              }}
            >
              {/* Icon */}
              <div
                className="inline-flex p-3 rounded-2xl text-white mb-5 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${feature.colorFrom}, ${feature.colorTo})` }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                {feature.title}
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {feature.description}
              </p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${feature.glow}, transparent 70%)` }}
              />
            </div>
          ))}
        </div>

        {/* Content types */}
        <div className="p-8 rounded-3xl glass-card" style={{ border: "1px solid var(--border-color)" }}>
          <h3 className="text-center text-lg font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
            支持的内容类型
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {contentTypes.map((type, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-default"
                style={{
                  background: "rgba(13,122,107,0.07)",
                  border: "1px solid rgba(13,122,107,0.2)",
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "var(--accent-light)" }}>{type.icon}</span>
                {type.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}