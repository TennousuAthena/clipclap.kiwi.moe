import { useState, useEffect } from "react";
import { Clipboard, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const APP_ICON = "/assets/app-icon.png";

const navLinks = [
  { label: "功能", href: "/#features" },
  { label: "截图", href: "/#screenshots" },
  { label: "特性", href: "/#highlights" },
  { label: "平台", href: "/#platform" },
  { label: "用户交流", to: "/community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? "glass-card py-3" : "bg-transparent py-5"
      }`}
      style={
        scrolled || !isHome
          ? { borderBottom: "1px solid var(--border-color)" }
          : undefined
      }
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg overflow-hidden transition-colors"
            style={{ border: "1px solid rgba(13,122,107,0.3)" }}
          >
            <img src={APP_ICON} alt="ClipClap" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-lg gradient-text">ClipClap</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link, i) =>
            link.to ? (
              <Link
                key={i}
                to={link.to}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={i}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://appgallery.huawei.com/app/detail?id=moe.kiwi.clipclap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl gradient-bg text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md"
          >
            <Clipboard size={14} />
            立即下载
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden glass-card px-6 py-4 flex flex-col gap-4"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          {navLinks.map((link, i) =>
            link.to ? (
              <Link
                key={i}
                to={link.to}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={i}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="https://appgallery.huawei.com/app/detail?id=moe.kiwi.clipclap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl gradient-bg text-white text-sm font-semibold"
          >
            <Clipboard size={14} />
            立即下载
          </a>
        </div>
      )}
    </nav>
  );
}