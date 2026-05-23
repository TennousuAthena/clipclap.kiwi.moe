import { Clipboard, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const APP_ICON = "/assets/app-icon.png";

const pageLinks = [
  { label: "功能特性", href: "/#features" },
  { label: "应用截图", href: "/#screenshots" },
  { label: "功能亮点", href: "/#highlights" },
  { label: "平台信息", href: "/#platform" },
];

const legalLinks = [
  { label: "使用协议", to: "/terms" },
  { label: "隐私政策", to: "/privacy" },
  { label: "用户交流", to: "/community" },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 px-6"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--divider)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(13,122,107,0.3)" }}
              >
                <img src={APP_ICON} alt="ClipClap" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold gradient-text">ClipClap</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              HarmonyOS 6.0 PC / 2in1 专属剪贴板历史管理工具，让每一次复制都有迹可循。
            </p>
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
              <Clipboard size={12} />
              <span>moe.kiwi.clipclap</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--text-primary)" }}>导航</h4>
            <ul className="flex flex-col gap-3">
              {pageLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Community */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--text-primary)" }}>法律与社区</h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform info */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: "var(--text-primary)" }}>平台</h4>
            <div className="flex flex-col gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-light)" }} />
                HarmonyOS 6.0 PC / 2in1
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                版本 1.0.0
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-main)" }} />
                ArkTS · Stage 模型
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                10 种语言支持
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: "var(--text-secondary)", opacity: 0.7 }}
        >
          <p>© 2026 ClipClap · moe.kiwi.clipclap · All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              to="/terms"
              className="transition-colors"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "")}
            >
              使用协议
            </Link>
            <span style={{ opacity: 0.3 }}>·</span>
            <Link
              to="/privacy"
              className="transition-colors"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "")}
            >
              隐私政策
            </Link>
            <span style={{ opacity: 0.3 }}>·</span>
            <Link
              to="/community"
              className="transition-colors"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "")}
            >
              用户交流
            </Link>
            <span style={{ opacity: 0.3 }}>·</span>
            <a
              href="mailto:clipclap@kiwi.moe"
              className="transition-colors"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "")}
            >
              clipclap@kiwi.moe
            </a>
            <span style={{ opacity: 0.3 }}>·</span>
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart size={12} className="text-rose-400 fill-rose-400" />
              <span>for HarmonyOS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}