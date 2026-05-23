import { ArrowDown, Clipboard, Zap, Star } from "lucide-react";

const HERO_BG = "https://mgx-backend-cdn.metadl.com/generate/images/76657/2026-05-23/pczw6myaagta/hero-bg-clipclap.png";
const APP_ICON = "/assets/app-icon.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Overlay gradient — adapts to theme */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--bg-primary) 55%, transparent) 0%, color-mix(in srgb, var(--bg-primary) 35%, transparent) 50%, var(--bg-primary) 100%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
        style={{ background: "rgba(13,122,107,0.12)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
        style={{ background: "rgba(26,171,151,0.1)", animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
          style={{
            border: "1px solid rgba(13,122,107,0.4)",
            background: "rgba(13,122,107,0.12)",
            color: "var(--accent-light)",
          }}
        >
          <Star size={12} style={{ fill: "var(--accent-light)", color: "var(--accent-light)" }} />
          HarmonyOS 6.0 PC / 2in1 专属
          <Star size={12} style={{ fill: "var(--accent-light)", color: "var(--accent-light)" }} />
        </div>

        {/* App Icon */}
        <div className="relative mb-8 animate-float">
          <div
            className="w-28 h-28 rounded-3xl overflow-hidden glow-teal"
            style={{ border: "1px solid rgba(13,122,107,0.3)" }}
          >
            <img
              src={APP_ICON}
              alt="ClipClap App Icon"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Glow ring */}
          <div
            className="absolute -inset-2 rounded-3xl blur-lg -z-10"
            style={{ background: "linear-gradient(135deg, rgba(13,122,107,0.25), rgba(26,171,151,0.2))" }}
          />
        </div>

        {/* App name */}
        <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4">
          <span className="gradient-text">ClipClap</span>
        </h1>

        {/* Slogan */}
        <p className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
          让剪贴板，不再遗忘
        </p>
        <p className="text-lg max-w-2xl mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          专为 HarmonyOS 6.0 PC / 2in1 打造的剪贴板历史管理工具。
          一键唤起，快速搜索，让每一次复制都有迹可循。
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { icon: <Clipboard size={14} />, text: "60 条历史记录" },
            { icon: <Zap size={14} />, text: "Ctrl+Shift+V 快捷唤起" },
            { icon: <Star size={14} />, text: "10 种语言支持" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              <span style={{ color: "var(--accent-light)" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://appgallery.huawei.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl gradient-bg text-white font-semibold text-base shadow-lg hover:scale-105 transition-all duration-200"
            style={{ boxShadow: "0 4px 24px rgba(13,122,107,0.35)" }}
          >
            <Clipboard size={18} />
            前往 AppGallery 下载
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-base transition-all duration-200"
            style={{
              border: "1px solid rgba(13,122,107,0.4)",
              color: "var(--accent-light)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(13,122,107,0.1)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            了解更多
            <ArrowDown size={16} />
          </a>
        </div>

        {/* Version info */}
        <p className="mt-8 text-xs" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
          Version 1.0.0 · Bundle: moe.kiwi.clipclap
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "var(--text-secondary)", opacity: 0.5 }}
      >
        <ArrowDown size={20} />
      </div>
    </section>
  );
}