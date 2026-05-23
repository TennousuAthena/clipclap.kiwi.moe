import { Pin, Globe, Moon, Eye, Keyboard, SlidersHorizontal, RefreshCw, Shield } from "lucide-react";

const highlights = [
  {
    icon: <Pin size={22} />,
    title: "置顶固定",
    description: "重要内容一键置顶，始终保持在历史列表顶部，不会被新内容覆盖。",
    color: "#f59e0b",
    bgAlpha: "rgba(245,158,11,0.1)",
    borderAlpha: "rgba(245,158,11,0.2)",
  },
  {
    icon: <Globe size={22} />,
    title: "10 种语言",
    description: "支持简中、繁中（港/台）、英文（美/英）、日语、法语、德语、俄语、藏语，面向全球用户。",
    color: "#60a5fa",
    bgAlpha: "rgba(96,165,250,0.1)",
    borderAlpha: "rgba(96,165,250,0.2)",
  },
  {
    icon: <Moon size={22} />,
    title: "深色主题",
    description: "精心设计的深色配色方案，护眼舒适，完美融入 HarmonyOS 深色模式。",
    color: "#818cf8",
    bgAlpha: "rgba(129,140,248,0.1)",
    borderAlpha: "rgba(129,140,248,0.2)",
  },
  {
    icon: <Eye size={22} />,
    title: "图片预览",
    description: "复制图片后可在弹窗侧边实时预览，支持本地图片，远程图片预览可按需开启。",
    color: "var(--accent-light)",
    bgAlpha: "rgba(13,122,107,0.1)",
    borderAlpha: "rgba(13,122,107,0.25)",
  },
  {
    icon: <Keyboard size={22} />,
    title: "自定义快捷键",
    description: "自由配置 Ctrl / Shift / Alt 修饰键组合和触发按键，打造专属工作流快捷方式。",
    color: "#c084fc",
    bgAlpha: "rgba(192,132,252,0.1)",
    borderAlpha: "rgba(192,132,252,0.2)",
  },
  {
    icon: <SlidersHorizontal size={22} />,
    title: "容量可调",
    description: "历史记录容量可在 10 到 300 条之间灵活调整，默认 60 条，按需平衡存储与效率。",
    color: "#fb923c",
    bgAlpha: "rgba(251,146,60,0.1)",
    borderAlpha: "rgba(251,146,60,0.2)",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "智能去重",
    description: "自动识别重复内容，相同内容提升至顶部并累计复制次数，保持列表整洁。",
    color: "#22d3ee",
    bgAlpha: "rgba(34,211,238,0.1)",
    borderAlpha: "rgba(34,211,238,0.2)",
  },
  {
    icon: <Shield size={22} />,
    title: "本地隐私存储",
    description: "所有剪贴板历史仅保存在本地设备，不上传云端，完全保护你的隐私数据。",
    color: "#fb7185",
    bgAlpha: "rgba(251,113,133,0.1)",
    borderAlpha: "rgba(251,113,133,0.2)",
  },
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="section-padding px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2"
          style={{ background: "rgba(13,122,107,0.05)" }}
        />
        <div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2"
          style={{ background: "rgba(26,171,151,0.05)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
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
            功能特性
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            细节成就体验
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            每一个功能都经过精心打磨，让剪贴板管理变得更加得心应手
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl glass-card hover:-translate-y-1 transition-all duration-300"
              style={{ border: `1px solid ${item.borderAlpha}` }}
            >
              <div
                className="inline-flex p-2.5 rounded-xl mb-4"
                style={{ background: item.bgAlpha, color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}