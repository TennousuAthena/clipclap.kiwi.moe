import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollText } from "lucide-react";

const sections = [
  {
    title: "一、服务说明",
    content: `ClipClap（以下简称"本应用"）是由 moe.kiwi 开发的面向 HarmonyOS 6.0 PC / 2in1 平台的剪贴板历史管理工具。本应用提供剪贴板历史记录、快捷键唤起、内容搜索与复制等功能，旨在提升用户在鸿蒙 PC 设备上的工作效率。

使用本应用即表示您已阅读、理解并同意本协议的全部条款。如您不同意本协议，请立即停止使用本应用。`,
  },
  {
    title: "二、用户责任",
    content: `2.1 您应确保以合法、合规的方式使用本应用，不得利用本应用从事任何违反中华人民共和国法律法规的活动。

2.2 本应用读取的剪贴板内容来源于您在设备上的主动复制操作。您应对自己复制、存储和传播的内容负责，不得通过本应用处理涉及国家秘密、他人隐私或侵犯第三方知识产权的内容。

2.3 您不得对本应用进行反编译、逆向工程、破解或以任何方式试图获取本应用的源代码。

2.4 您不得利用本应用的任何功能干扰、破坏或未经授权访问其他系统或服务。`,
  },
  {
    title: "三、隐私与数据",
    content: `3.1 本应用所有剪贴板历史记录均仅保存在您的本地设备上，不会上传至任何服务器或第三方平台。

3.2 本应用不收集、不存储、不传输任何可识别您个人身份的信息。

3.3 具体的数据处理方式请参阅《隐私政策》。`,
  },
  {
    title: "四、免责声明",
    content: `4.1 本应用按"现状"提供，开发者不对本应用的可用性、准确性、完整性或适用于特定目的作出任何明示或暗示的保证。

4.2 因您使用本应用导致的任何直接或间接损失（包括但不限于数据丢失、设备损坏、业务中断），开发者不承担任何责任。

4.3 本应用依赖 HarmonyOS 系统权限（如 READ_PASTEBOARD、SYSTEM_FLOAT_WINDOW 等），若因系统版本升级、权限策略变更导致部分功能不可用，开发者不承担相应责任，但会尽力提供兼容更新。

4.4 本应用不对因不可抗力（包括但不限于自然灾害、政府行为、网络故障）导致的服务中断或数据丢失承担责任。`,
  },
  {
    title: "五、知识产权",
    content: `5.1 本应用的所有权利（包括但不限于软件著作权、商标权、专利权）均归开发者所有。

5.2 未经开发者书面授权，您不得复制、修改、分发、销售或以其他方式使用本应用的任何部分。

5.3 本应用名称"ClipClap"及相关标识为开发者的商标，未经授权不得使用。`,
  },
  {
    title: "六、协议变更",
    content: `6.1 开发者保留随时修改本协议的权利。协议变更后，将通过应用内通知或官方网站公告的方式告知用户。

6.2 您在协议变更后继续使用本应用，即视为您接受变更后的协议。

6.3 如您不同意变更后的协议，应立即停止使用本应用并卸载。`,
  },
  {
    title: "七、适用法律与争议解决",
    content: `7.1 本协议的订立、执行和解释均适用中华人民共和国法律。

7.2 因本协议或本应用使用产生的任何争议，双方应首先友好协商解决；协商不成的，任何一方均可向开发者所在地有管辖权的人民法院提起诉讼。`,
  },
  {
    title: "八、联系方式",
    content: `如您对本协议有任何疑问或建议，欢迎通过官方社区渠道（QQ 群、飞书群）与我们联系，或访问官方网站获取最新联系方式。

本协议最后更新日期：2026 年 5 月 23 日`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      <main className="pt-20 pb-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-medium mb-3"
              style={{ borderColor: "var(--border-color)", color: "var(--accent-light)", backgroundColor: "color-mix(in srgb, var(--accent-main) 12%, transparent)" }}
            >
              <ScrollText size={13} />
              法律文件
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              使用协议
            </h1>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              ClipClap 用户服务协议 · 最后更新：2026 年 5 月 23 日
            </p>
          </div>

          {/* Notice box */}
          <div
            className="p-4 rounded-xl border mb-6"
            style={{ borderColor: "color-mix(in srgb, var(--accent-light) 30%, transparent)", backgroundColor: "color-mix(in srgb, var(--accent-main) 8%, transparent)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <span className="font-semibold" style={{ color: "var(--accent-light)" }}>请在使用前仔细阅读：</span>
              本协议是您与 ClipClap 开发者之间关于使用本应用的法律协议。使用本应用即表示您同意本协议的全部条款。
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-4">
            {sections.map((section, i) => (
              <div key={i} className="p-5 rounded-xl glass-card">
                <h2 className="font-bold text-base mb-3 gradient-text">{section.title}</h2>
                <p className="text-sm leading-6 whitespace-pre-line" style={{ color: "var(--text-secondary)" }}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}