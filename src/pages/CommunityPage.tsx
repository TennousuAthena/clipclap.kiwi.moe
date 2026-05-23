import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MessageSquare, ExternalLink, QrCode } from "lucide-react";

const channels = [
  {
    name: "QQ 群",
    icon: <MessageSquare size={28} />,
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(79, 142, 247, 0.15)",
    border: "border-blue-500/20",
    badgeBg: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    description: "加入 ClipClap 官方 QQ 群，与其他用户交流使用心得、反馈问题、获取最新动态。",
    linkLabel: "QQ 群链接",
    linkPlaceholder: "https://qm.qq.com/xxxxxxxx",
    qrLabel: "QQ 群二维码",
    qrNote: "扫码加入 QQ 群",
    tips: [
      "群内可直接 @ 开发者反馈 Bug",
      "第一时间获取版本更新通知",
      "与鸿蒙 PC 用户交流效率技巧",
    ],
  },
  {
    name: "飞书群",
    icon: <Users size={28} />,
    color: "from-purple-500 to-violet-600",
    glow: "rgba(139, 92, 246, 0.15)",
    border: "border-purple-500/20",
    badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-300",
    description: "加入 ClipClap 飞书用户群，适合企业用户和开发者，支持结构化讨论与文档协作。",
    linkLabel: "飞书群链接",
    linkPlaceholder: "https://applink.feishu.cn/xxxxxxxx",
    qrLabel: "飞书群二维码",
    qrNote: "扫码加入飞书群",
    tips: [
      "适合企业用户和开发者",
      "支持话题讨论和文档分享",
      "功能需求和路线图讨论",
    ],
  },
];

function QRCodePlaceholder({ label, note }: { label: string; note: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-36 h-36 rounded-2xl border-2 border-dashed border-white/15 bg-white/3 flex flex-col items-center justify-center gap-2 hover:border-white/25 transition-colors">
        <QrCode size={36} className="text-white/20" />
        <span className="text-white/25 text-xs text-center px-2">{label}</span>
      </div>
      <p className="text-[#8b9cc8]/60 text-xs">{note}</p>
    </div>
  );
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-5">
              <Users size={14} />
              用户社区
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              加入用户交流群
            </h1>
            <p className="text-[#8b9cc8] text-lg max-w-2xl mx-auto">
              与其他 ClipClap 用户一起交流，反馈问题，共同打造更好的剪贴板体验
            </p>
          </div>

          {/* Channel cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {channels.map((channel, i) => (
              <div
                key={i}
                className={`group p-8 rounded-3xl glass-card border ${channel.border} hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1`}
                style={{ boxShadow: `0 0 40px ${channel.glow}` }}
              >
                {/* Icon + name */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${channel.color} text-white shadow-lg`}>
                    {channel.icon}
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl">{channel.name}</h2>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full border text-xs font-medium mt-1 ${channel.badgeBg}`}>
                      官方群组
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#8b9cc8] text-sm leading-relaxed mb-6">
                  {channel.description}
                </p>

                {/* QR Code + Link */}
                <div className="flex flex-col items-center gap-5 p-5 rounded-2xl bg-white/3 border border-white/5 mb-6">
                  <QRCodePlaceholder label={channel.qrLabel} note={channel.qrNote} />

                  {/* Link placeholder */}
                  <div className="w-full">
                    <p className="text-[#8b9cc8]/60 text-xs mb-2">{channel.linkLabel}</p>
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/8">
                      <code className="text-[#8b9cc8]/50 text-xs flex-1 truncate">
                        {channel.linkPlaceholder}
                      </code>
                      <ExternalLink size={14} className="text-white/20 shrink-0" />
                    </div>
                    <p className="text-white/20 text-xs mt-1.5 text-center">链接占位符，待填写</p>
                  </div>
                </div>

                {/* Tips */}
                <div className="flex flex-col gap-2">
                  {channel.tips.map((tip, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-sm text-[#8b9cc8]">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 mt-1.5 shrink-0" />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="p-6 rounded-2xl glass-card border border-white/5 text-center">
            <p className="text-[#8b9cc8] text-sm leading-relaxed">
              遇到问题？欢迎在群内反馈，或通过
              <span className="text-blue-300 mx-1">GitHub Issues</span>
              提交 Bug 报告。我们会尽快响应并在后续版本中修复。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}