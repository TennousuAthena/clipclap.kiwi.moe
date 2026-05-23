import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "一、概述",
    content: `ClipClap（Bundle：moe.kiwi.clipclap，以下简称"本应用"）高度重视用户隐私。本隐私政策旨在向您说明本应用如何处理与您相关的数据。

核心承诺：本应用不收集、不上传、不共享任何用户数据。所有剪贴板内容均仅在您的本地设备上处理和存储。`,
    highlight: true,
  },
  {
    title: "二、数据收集与存储",
    content: `2.1 剪贴板历史记录
本应用通过系统 READ_PASTEBOARD 权限读取您的剪贴板内容，并将历史记录保存在应用的本地沙箱存储中（使用 HarmonyOS preferences 及应用沙箱目录）。这些数据：
• 仅存储在您的设备本地
• 不会上传至任何服务器或云端
• 不会与任何第三方共享
• 仅供您在应用内查看和使用

2.2 应用设置
您的个性化设置（快捷键配置、历史容量、语言偏好等）同样仅保存在本地设备，不会离开您的设备。

2.3 图片内容
复制的图片内容会以 PNG 格式保存在应用沙箱内，用于历史记录预览和恢复。这些文件仅存储在本地，不会上传。`,
  },
  {
    title: "三、权限说明",
    content: `本应用申请以下系统权限，以下是每项权限的具体用途：`,
    permissions: [
      {
        name: "READ_PASTEBOARD",
        desc: "读取系统剪贴板内容，这是本应用核心功能所必需的权限。本应用仅在您主动触发（快捷键唤起或手动刷新）时读取剪贴板，并在后台监听剪贴板变化以记录历史。",
      },
      {
        name: "SYSTEM_FLOAT_WINDOW",
        desc: "创建全局悬浮弹窗，使本应用能够在任意界面通过快捷键唤起剪贴板历史弹窗。此权限为受限权限，仅用于创建弹窗 UI，不用于访问其他应用的数据。",
      },
      {
        name: "INTERNET",
        desc: '仅在您主动开启"远程图片预览"设置时使用，用于加载剪贴板 HTML 内容中包含的网络图片。默认关闭，您可随时在设置中禁用。',
      },
    ],
  },
  {
    title: "四、数据安全",
    content: `4.1 本应用的所有数据均存储在 HarmonyOS 应用沙箱内，受系统级访问控制保护，其他应用无法访问。

4.2 本应用不使用任何第三方 SDK、广告 SDK 或数据分析 SDK，不存在第三方数据收集风险。

4.3 卸载本应用后，所有本地存储的历史记录和设置数据将随应用数据一并清除。`,
  },
  {
    title: "五、数据控制权",
    content: `您对本应用存储的所有数据拥有完全控制权：

• 您可以随时在应用内删除单条历史记录
• 您可以一键清理所有未固定的历史记录
• 您可以通过系统设置清除应用全部数据
• 您可以关闭剪贴板监听开关，停止新内容的记录

本应用不存在"账号"或"云同步"机制，因此无需提供数据导出或账号注销功能。`,
  },
  {
    title: "六、儿童隐私",
    content: `本应用为通用生产力工具，不专门面向 14 周岁以下未成年人。本应用不主动收集任何用户个人信息，因此不存在针对未成年人的特殊数据处理。`,
  },
  {
    title: "七、隐私政策变更",
    content: `如本隐私政策发生重大变更，我们将通过应用内通知或官方网站公告的方式提前告知您。变更后继续使用本应用，即视为您接受更新后的隐私政策。`,
  },
  {
    title: "八、联系我们",
    content: `如您对本隐私政策有任何疑问，欢迎通过以下方式联系我们：
• 官方 QQ 群（详见"用户交流"页面）
• 官方飞书群（详见"用户交流"页面）

本隐私政策最后更新日期：2026 年 5 月 23 日`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 text-sm font-medium mb-5">
              <ShieldCheck size={14} />
              隐私保护
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              隐私政策
            </h1>
            <p className="text-[#8b9cc8] text-base">
              ClipClap 隐私政策 · 最后更新：2026 年 5 月 23 日
            </p>
          </div>

          {/* Core promise banner */}
          <div className="p-6 rounded-2xl border border-green-500/25 bg-green-500/8 mb-10 flex items-start gap-4">
            <ShieldCheck size={24} className="text-green-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-green-300 font-semibold text-base mb-1">隐私核心承诺</p>
              <p className="text-[#8b9cc8] text-sm leading-relaxed">
                ClipClap 不收集、不上传、不共享任何用户数据。所有剪贴板历史记录仅存储在您的本地设备，永远不会离开您的设备。
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-6">
            {sections.map((section, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl glass-card border border-white/5 hover:border-white/8 transition-colors"
              >
                <h2 className="text-white font-bold text-lg mb-4 gradient-text">{section.title}</h2>
                {section.content && (
                  <p className="text-[#8b9cc8] text-sm leading-7 whitespace-pre-line">{section.content}</p>
                )}
                {section.permissions && (
                  <div className="flex flex-col gap-4 mt-2">
                    {section.permissions.map((perm, j) => (
                      <div key={j} className="p-4 rounded-xl bg-white/3 border border-white/5">
                        <code className="text-blue-300 text-xs font-mono font-semibold block mb-2">
                          {perm.name}
                        </code>
                        <p className="text-[#8b9cc8] text-sm leading-relaxed">{perm.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}