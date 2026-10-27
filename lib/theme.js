// Theme Engine for MindSpark
// Provides complete custom CSS variable palettes for both Host Admin Studio and Projector Display

export const COLOR_FIELDS = [
  { key: "bg", label: "Page Background" },
  { key: "card", label: "Card & Panel Surface" },
  { key: "ink", label: "Text / Typography" },
  { key: "inkMuted", label: "Muted Text" },
  { key: "border", label: "Borders" },
  { key: "pop", label: "Accent / Glow Color" },
  { key: "action", label: "Primary Action" },
  { key: "highlight", label: "Highlight / Alerts" },
  { key: "a", label: "Team A Primary" },
  { key: "b", label: "Team B Primary" },
];

export const DEFAULT_THEME = {
  a: "#4D9EEA",
  b: "#D96BB0",
  pop: "#9C86FF",
  bg: "#0C0B14",
  ink: "#F7F6FB",
  card: "#13121E",
};

export const PRESETS = [
  {
    name: "MindSpark Studio",
    tag: "Signature violet",
    theme: DEFAULT_THEME,
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
  {
    name: "Lavender Haze",
    tag: "Soft lilac",
    theme: {
      a: "#818CF8",
      b: "#E879B9",
      pop: "#C4B5FD",
      bg: "#15111F",
      ink: "#F7F2FF",
      card: "#211A30",
    },
  },
  {
    name: "Electric Blue",
    tag: "Neon current",
    theme: {
      a: "#38BDF8",
      b: "#A78BFA",
      pop: "#22D3EE",
      bg: "#07111C",
      ink: "#ECF8FF",
      card: "#102131",
    },
  },
  {
    name: "Rose Quartz",
    tag: "Warm blush",
    theme: {
      a: "#FB7185",
      b: "#C084FC",
      pop: "#FDA4AF",
      bg: "#1A1018",
      ink: "#FFF1F5",
      card: "#291923",
    },
  },
  {
    name: "Citrus Pop",
    tag: "Bright energy",
    theme: {
      a: "#84CC16",
      b: "#F97316",
      pop: "#FDE047",
      bg: "#151508",
      ink: "#FAFCE8",
      card: "#22220F",
    },
  },
  {
    name: "Ocean Depth",
    tag: "Deep blue",
    theme: {
      a: "#0EA5E9",
      b: "#14B8A6",
      pop: "#67E8F9",
      bg: "#07151B",
      ink: "#ECFEFF",
      card: "#0F242C",
    },
  },
  {
    name: "Ember Glow",
    tag: "Copper warmth",
    theme: {
      a: "#F97316",
      b: "#F43F5E",
      pop: "#FDBA74",
      bg: "#190D0A",
      ink: "#FFF7ED",
      card: "#2A1711",
    },
  },
  {
    name: "Mint Condition",
    tag: "Fresh green",
    theme: {
      a: "#34D399",
      b: "#60A5FA",
      pop: "#A7F3D0",
      bg: "#081610",
      ink: "#ECFDF5",
      card: "#10251B",
    },
  },
  {
    name: "Monochrome",
    tag: "Quiet contrast",
    theme: {
      a: "#64748B",
      b: "#A1A1AA",
      pop: "#E2E8F0",
      bg: "#101114",
      ink: "#F4F4F5",
      card: "#1B1C21",
    },
  },
  {
    name: "Navy, Crimson & Gold",
    tag: "Premium classic",
    theme: {
      a: "#0F2C59",
      b: "#B8001F",
      pop: "#C69214",
      action: "#0F2C59",
      bg: "#FAF8F5",
      card: "#FFFFFF",
      ink: "#2D3748",
      inkMuted: "#A0AEC0",
      border: "#A0AEC0",
      highlight: "#B8001F",
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

function needsDarkText(hex) {
  if (!hex || typeof hex !== "string") return false;
  let c = hex.replace("#", "").trim();
  if (c.length === 3) c = c.split("").map((x) => x + x).join("");
  if (!/^[\da-f]{6}$/i.test(c)) return false;
  const num = parseInt(c, 16);
  const channels = [(num >> 16) & 255, (num >> 8) & 255, num & 255].map((value) => {
    const channel = value / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  return luminance > 0.179;
}

export function getThemeVars(th = {}) {
  const bg = th.bg || DEFAULT_THEME.bg;
  const card = th.card || DEFAULT_THEME.card;
  const ink = th.ink || DEFAULT_THEME.ink;
  const pop = th.pop || DEFAULT_THEME.pop;
  const a = th.a || DEFAULT_THEME.a;
  const b = th.b || DEFAULT_THEME.b;
  const action = th.action || pop;
  const danger = th.highlight || th.danger || "#EF4444";
  const light = isColorLight(bg);

  const cardBorder = th.border
    ? hexToRgba(th.border, light ? 0.48 : 0.24)
    : light ? "rgba(15, 23, 42, 0.12)" : "rgba(255, 255, 255, 0.12)";
  const cardBorderGlow = th.border
    ? hexToRgba(th.border, light ? 0.3 : 0.35)
    : light ? "rgba(15, 23, 42, 0.22)" : hexToRgba(pop, 0.35);
  const cardHover = light ? "#F1F5F9" : "rgba(255, 255, 255, 0.06)";
  const line = th.border
    ? hexToRgba(th.border, light ? 0.36 : 0.2)
    : light ? "rgba(15, 23, 42, 0.1)" : "rgba(255, 255, 255, 0.08)";
  const inkMuted = th.inkMuted || (light ? "#64748B" : "#A7A5B4");
  const inputBg = light ? "#FFFFFF" : "rgba(0, 0, 0, 0.35)";
  const headerBg = light ? "rgba(255, 255, 255, 0.88)" : "rgba(10, 8, 20, 0.55)";
  const bgGradient = light
    ? `radial-gradient(circle at 50% 0%, ${card} 0%, ${bg} 100%)`
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
    "--heading": th.heading || (th.action ? action : ink),
    "--ink-muted": inkMuted,
    "--pop": pop,
    "--pop-glow": hexToRgba(pop, 0.35),
    "--a": a,
    "--a-glow": hexToRgba(a, 0.35),
    "--b": b,
    "--b-glow": hexToRgba(b, 0.35),
    "--action": action,
    "--action-glow": hexToRgba(action, 0.35),
    "--action-ink": needsDarkText(action) ? ink : "#FFFFFF",
    "--pop-ink": needsDarkText(pop) ? ink : "#FFFFFF",
    "--ok": th.ok || "#10B981",
    "--ok-glow": "rgba(16, 185, 129, 0.45)",
    "--danger": danger,
    "--danger-glow": hexToRgba(danger, 0.16),
    "--input-bg": inputBg,
    "--header-bg": headerBg,
    colorScheme: light ? "light" : "dark",
  };
}
