import { useState, useEffect } from "react";

const FALLBACK_VERSION = "0.1.1";
const GITHUB_API_URL = "https://api.github.com/repos/TennousuAthena/ClipClap/releases/latest";
const CACHE_KEY = "clipclap-app-version";

interface GitHubRelease {
  tag_name: string;
}

function getCachedVersion(): string | null {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    return cached;
  } catch {
    return null;
  }
}

function setCachedVersion(version: string): void {
  try {
    sessionStorage.setItem(CACHE_KEY, version);
  } catch {
    // ignore
  }
}

export default function useAppVersion(): string {
  const [version, setVersion] = useState<string>(() => getCachedVersion() || FALLBACK_VERSION);

  useEffect(() => {
    // Skip fetch if we already have a cached non-fallback version
    if (getCachedVersion()) return;

    const controller = new AbortController();

    fetch(GITHUB_API_URL, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<GitHubRelease>;
      })
      .then((data) => {
        const tag = data.tag_name;
        if (tag) {
          setCachedVersion(tag);
          setVersion(tag);
        }
      })
      .catch(() => {
        // stay with fallback
      });

    return () => controller.abort();
  }, []);

  return version;
}
