import { useEffect } from "react";
import { useNavigate } from "react-router";
import { UAParser } from "ua-parser-js";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Initialize the parser
    const parser = new UAParser();
    const os = parser.getOS().name;
    console.log("Detected OS:", os);

    // 2. Routing Logic
    switch (os) {
      case "Mac OS":
        navigate("/mac");
        break;
      case "iOS":
        navigate("/ios");
        break;
      case "Android":
        navigate("/android");
        break;
      case "Chromium OS":
        navigate("/chromebook");
        break;
      case "Windows":
        navigate("/pc");
        break;
      default:
        // Fallback for Linux or unidentified systems
        navigate("/pc"); 
    }
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <div className="text-center">
        <h1 className="text-xl font-semibold animate-pulse">Detecting System Configuration...</h1>
        <p className="text-slate-500">Preparing your custom experience</p>
      </div>
    </div>
  );
}

function detectPlatform() {
  const ua = navigator.userAgent || '';
  const platform = (navigator.platform || '').toLowerCase();

  // Prefer User-Agent Client Hints when available
  // @ts-ignore
  const hinted = (navigator.userAgentData && navigator.userAgentData.platform) || '';
  if (hinted) return hinted.toLowerCase();

  // iPadOS reports "MacIntel" on recent iPadOS — differentiate by touch capability
  if (platform.includes('mac') && navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {
    return 'ios';
  }

  if (/mac|macintosh|mac os x/.test(platform) || /mac os x/.test(ua)) return 'mac';
  if (/iphone|ipad|ipod/.test(ua)) return 'ios';
  if (/android/.test(ua)) return 'android';
  if (/cros/.test(ua) || /chrome os/.test(ua)) return 'chromebook';
  return 'pc';
}

const platform = detectPlatform(); // 'mac'|'ios'|'android'|'chromebook'|'pc'
navigate(`/${platform}`); // or map to your route names