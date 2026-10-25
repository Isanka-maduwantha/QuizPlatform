// Theme Engine for MindSpark
// Provides complete custom CSS variable palettes for both Host Admin Studio and Projector Display

export const COLOR_FIELDS = [
  { key: "bg", label: "Page Background" },
  { key: "card", label: "Card & Panel Surface" },
  { key: "ink", label: "Text / Typography" },
  { key: "pop", label: "Accent / Glow Color" },
  { key: "a", label: "Team A Primary" },
  { key: "b", label: "Team B Primary" },
];

export const PRESETS = [
  {
    name: "MindSpark Violet",
    tag: "Cosmic Glow",
    theme: {
      a: "#0284C7",
      b: "#EC4899",
      pop: "#FACC15",
      bg: "#0D0A1A",
      ink: "#F5F3FF",
      card: "#181230",
    },
  },
  {
    name: "Kahoot Classic",
    tag: "Arena Purple",
    theme: {
      a: "#1368CE",
      b: "#E21B3C",
      pop: "#FFA602",
      bg: "#320E6D",
      ink: "#FFFFFF",
      card: "#200947",
    },
  },
  {
    name: "Midnight Cyberpunk",
    tag: "Neon Synth",
    theme: {
      a: "#00F0FF",
      b: "#FF007A",
      pop: "#FFE600",
      bg: "#06060E",
      ink: "#E0E7FF",
      card: "#120F24",
    },
  },
  {
    name: "Sunset Horizon",
    tag: "Warm Amber",
    theme: {
      a: "#F97316",
      b: "#A855F7",
      pop: "#FBBF24",
      bg: "#180C14",
      ink: "#FFF7ED",
      card: "#271221",
    },
  },
  {
    name: "Tokyo Sakura",
    tag: "Cherry Blossom",
    theme: {
      a: "#38BDF8",
      b: "#F472B6",
      pop: "#FDE047",
      bg: "#110D20",
      ink: "#FDF2F8",
      card: "#1E1636",
    },
  },
  {
    name: "Matrix Terminal",
    tag: "Cyber Emerald",
    theme: {
      a: "#10B981",
      b: "#06B6D4",
      pop: "#84CC16",
      bg: "#040D09",
      ink: "#ECFDF5",
      card: "#0A1F16",
    },
  },
  {
    name: "Royal Navy & Gold",
    tag: "Prestige Blue",
    theme: {
      a: "#2563EB",
      b: "#D97706",
      pop: "#FBBF24",
      bg: "#0B1120",
      ink: "#F8FAFC",
      card: "#162035",
    },
  },
  {
    name: "Crimson Inferno",
    tag: "Volcano Magma",
    theme: {
      a: "#EF4444",
      b: "#EA580C",
      pop: "#FACC15",
      bg: "#140609",
      ink: "#FFF1F2",
      card: "#260E14",
    },
  },
  {
    name: "Arctic Glacier",
    tag: "Ice Crystal",
    theme: {
      a: "#0284C7",
      b: "#0D9488",
      pop: "#38BDF8",
      bg: "#08131F",
      ink: "#F0F9FF",
      card: "#102338",
    },
  },
  {
    name: "Obsidian Onyx",
    tag: "Stealth Carbon",
    theme: {
      a: "#6366F1",
      b: "#EC4899",
      pop: "#10B981",
      bg: "#09090B",
      ink: "#FAFAFA",
      card: "#18181B",
    },
  },
  {
    name: "Clean Studio Light",
    tag: "Pristine Paper",
    theme: {
      a: "#2563EB",
      b: "#DB2777",
      pop: "#D97706",
      bg: "#F8FAFC",
      ink: "#0F172A",
      card: "#FFFFFF",
    },
  },
  {
    name: "Nordic Aurora",
    tag: "Borealis Sky",
    theme: {
      a: "#2DD4BF",
      b: "#818CF8",
      pop: "#A3E635",
      bg: "#07121E",
      ink: "#F0FDFA",
      card: "#0F2236",
    },
  },
];

export function hexToRgba(hex, alpha = 1) {
  if (!hex || typeof hex !== "string") return `rgba(250, 204, 21, ${alpha})`;
  let c = hex.replace("#", "").trim();
  if (c.length === 3) c = c.split("").map((x) => x + x).join("");
  const num = parseInt(c, 16);
  if (isNaN(num)) return `rgba(250, 204, 21, ${alpha})`;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function isColorLight(hex) {
  if (!hex || typeof hex !== "string") return false;
  let c = hex.replace("#", "").trim();
  if (c.length === 3) c = c.split("").map((x) => x + x).join("");
  const num = parseInt(c, 16);
  if (isNaN(num)) return false;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return lum > 0.55;
}

export function getThemeVars(th = {}) {
  const bg = th.bg || "#0D0A1A";
  const card = th.card || "#181230";
  const ink = th.ink || "#F5F3FF";
  const pop = th.pop || "#FACC15";
  const a = th.a || "#0284C7";
  const b = th.b || "#EC4899";
  const light = isColorLight(bg);

  const cardBorder = light ? "rgba(15, 23, 42, 0.12)" : "rgba(255, 255, 255, 0.12)";
  const cardBorderGlow = light ? "rgba(15, 23, 42, 0.22)" : hexToRgba(pop, 0.35);
  const cardHover = light ? "#F1F5F9" : "rgba(255, 255, 255, 0.06)";
  const line = light ? "rgba(15, 23, 42, 0.1)" : "rgba(255, 255, 255, 0.08)";
  const inkMuted = light ? "#64748B" : "#94A3B8";
  const inputBg = light ? "#FFFFFF" : "rgba(0, 0, 0, 0.35)";
  const headerBg = light ? "rgba(255, 255, 255, 0.88)" : "rgba(10, 8, 20, 0.55)";
  const bgGradient = light
    ? `radial-gradient(circle at 50% 0%, #FFFFFF 0%, ${bg} 100%)`
    : `radial-gradient(circle at 50% 0%, ${card} 0%, ${bg} 75%)`;

  return {
    "--bg": bg,
    "--bg-gradient": bgGradient,
    "--card": card,
    "--card-border": cardBorder,
    "--card-border-glow": cardBorderGlow,
    "--card-hover": cardHover,
    "--line": line,
    "--ink": ink,
    "--ink-muted": inkMuted,
    "--pop": pop,
    "--pop-glow": hexToRgba(pop, 0.35),
    "--a": a,
    "--a-glow": hexToRgba(a, 0.35),
    "--b": b,
    "--b-glow": hexToRgba(b, 0.35),
    "--ok": th.ok || "#10B981",
    "--ok-glow": "rgba(16, 185, 129, 0.45)",
    "--danger": th.danger || "#EF4444",
    "--danger-glow": "rgba(239, 68, 68, 0.45)",
    "--input-bg": inputBg,
    "--header-bg": headerBg,
    colorScheme: light ? "light" : "dark",
  };
}
