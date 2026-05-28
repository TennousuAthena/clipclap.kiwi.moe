import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MessageSquare, ExternalLink } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const channels = [
  {
    name: "QQ 群",
    icon: <MessageSquare size={22} />,
    color: "from-blue-500 to-cyan-500",
    description: "加入 ClipClap 官方 QQ 群，与其他用户交流使用心得、反馈问题、获取最新动态。",
    linkLabel: "QQ 群链接",
    linkPlaceholder: "https://qm.qq.com/q/A4Eao5cDjq",
    qrLabel: "QQ 群二维码",
    qrNote: "扫码加入 QQ 群",
    tips: [
      "群内可直接 @ 开发者反馈 Bug",
      "第一时间获取版本更新通知",
      "与鸿蒙 PC 用户交流效率技巧",
    ],
  },
  // {
  //   name: "飞书群",
  //   icon: <Users size={22} />,
  //   color: "from-purple-500 to-violet-600",
  //   description: "加入 ClipClap 飞书用户群，适合企业用户和开发者，支持结构化讨论与文档协作。",
  //   linkLabel: "飞书群链接",
  //   linkPlaceholder: "https://applink.feishu.cn/xxxxxxxx",
  //   qrLabel: "飞书群二维码",
  //   qrNote: "扫码加入飞书群",
  //   tips: [
  //     "适合企业用户和开发者",
  //     "支持话题讨论和文档分享",
  //     "功能需求和路线图讨论",
  //   ],
  // },
];

function QRCodeDisplay({ url, label, note }: { url: string; label: string; note: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-32 h-32 rounded-xl bg-white p-2.5 flex items-center justify-center">
        <QRCodeSVG
          value={url}
          size={108}
          bgColor="#ffffff"
          fgColor="#000000"
          level="M"
          includeMargin={false}
        />
      </div>
      <p className="text-xs" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>{note}</p>
    </div>
  );
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <main className="pt-20 pb-10 px-4 sm:px-6">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-medium mb-3"
              style={{ borderColor: "var(--border-color)", color: "var(--accent-light)", backgroundColor: "color-mix(in srgb, var(--accent-main) 12%, transparent)" }}
            >
              <Users size={13} />
              用户社区
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              加入用户交流群
            </h1>
            <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              与其他 ClipClap 用户一起交流，反馈问题，共同打造更好的剪贴板体验
            </p>
          </div>

          {/* Channel cards */}
          <div className="flex flex-col gap-5 mb-8">
            {channels.map((channel, i) => (
              <div key={i} className="p-5 rounded-xl glass-card">
                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${channel.color} text-white`}>
                    {channel.icon}
                  </div>
                  <div>
                    <h2 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>{channel.name}</h2>
                    <span
                      className="inline-block px-2 py-0.5 rounded-full border text-xs font-medium mt-0.5"
                      style={{ borderColor: "var(--border-color)", color: "var(--accent-light)", backgroundColor: "color-mix(in srgb, var(--accent-main) 10%, transparent)" }}
                    >
                      官方群组
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  {channel.description}
                </p>

                {/* QR Code + Link */}
                <div
                  className="flex flex-col items-center gap-4 p-4 rounded-xl mb-5"
                  style={{ border: `1px solid var(--border-color)`, backgroundColor: "color-mix(in srgb, var(--bg-secondary) 60%, transparent)" }}
                >
                  <QRCodeDisplay url={channel.linkPlaceholder} label={channel.qrLabel} note={channel.qrNote} />

                  {/* Link */}
                  <div className="w-full">
                    <p className="text-xs mb-1.5" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>{channel.linkLabel}</p>
                    <a
                      href={channel.linkPlaceholder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-lg border transition-colors"
                      style={{ borderColor: "var(--border-color)", backgroundColor: "color-mix(in srgb, var(--bg-secondary) 40%, transparent)" }}
                    >
                      <code className="text-xs flex-1 truncate" style={{ color: "var(--text-secondary)", opacity: 0.5 }}>
                        {channel.linkPlaceholder}
                      </code>
                      <ExternalLink size={13} className="shrink-0" style={{ color: "var(--text-secondary)", opacity: 0.4 }} />
                    </a>
                  </div>
                </div>

                {/* Tips */}
                <div className="flex flex-col gap-1.5">
                  {channel.tips.map((tip, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "var(--accent-light)", opacity: 0.6 }} />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="p-4 rounded-xl glass-card text-center">
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              遇到问题？欢迎在群内反馈，或通过{" "}
              <a
                href="https://github.com/TennousuAthena/ClipClap/issues"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-light)" }}
              >
                GitHub Issues
              </a>
              {" "}提交 Bug 报告。我们会尽快响应并在后续版本中修复。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}