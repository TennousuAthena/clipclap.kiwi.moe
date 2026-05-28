import { Cpu, Package, Tag, Layers, CheckCircle2 } from "lucide-react";
import useAppVersion from "@/hooks/useAppVersion";

export default function PlatformSection() {
  const version = useAppVersion();

  const specs = [
    { icon: <Cpu size={18} />, label: "平台", value: "HarmonyOS 6.0 PC / 2in1" },
    { icon: <Tag size={18} />, label: "版本", value: version },
    { icon: <Package size={18} />, label: "Bundle", value: "moe.kiwi.clipclap" },
    { icon: <Layers size={18} />, label: "开发语言", value: "ArkTS · Stage 模型" },
  ];

  const permissions = [
    { name: "READ_PASTEBOARD", desc: "读取系统剪贴板，生成本地历史记录" },
    { name: "SYSTEM_FLOAT_WINDOW", desc: "创建全局悬浮弹窗，快速访问历史" },
    { name: "INTERNET", desc: "加载 HTML 内容中的远程图片（可选）" },
  ];

  return (
    <section id="platform" className="section-padding px-6 relative">
      <div className="max-w-4xl mx-auto">
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
            平台信息
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            专为鸿蒙 PC 而生
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            深度适配 HarmonyOS 6.0，充分利用鸿蒙 PC 的系统能力
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Spec cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map((spec, i) => (
              <div key={i} className="p-5 rounded-2xl glass-card flex items-start gap-4">
                <div
                  className="p-2 rounded-xl shrink-0"
                  style={{ background: "rgba(13,122,107,0.12)", color: "var(--accent-light)" }}
                >
                  {spec.icon}
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "var(--text-secondary)" }}>{spec.label}</p>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{spec.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Permissions */}
          <div className="p-6 rounded-2xl glass-card">
            <h3
              className="font-semibold text-base mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <CheckCircle2 size={18} style={{ color: "var(--accent-light)" }} />
              所需权限
            </h3>
            <div className="flex flex-col gap-3">
              {permissions.map((perm, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "var(--accent-light)" }}
                  />
                  <div>
                    <code className="text-xs font-mono" style={{ color: "var(--accent-light)" }}>
                      {perm.name}
                    </code>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {perm.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy note */}
          <div
            className="p-5 rounded-2xl flex items-start gap-3"
            style={{
              border: "1px solid rgba(13,122,107,0.25)",
              background: "rgba(13,122,107,0.06)",
            }}
          >
            <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent-light)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <span className="font-medium" style={{ color: "var(--accent-light)" }}>隐私优先：</span>
              所有剪贴板数据仅保存在本地设备，不与任何服务器通信，完全保护你的隐私。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}