# MindSpark Quiz (Next.js + MySQL)

## 🚀 Quick Start
1. `mysql -u root -p < schema.sql`
2. `cp .env.example .env.local` *(set DB_* and ADMIN_PASSWORD)*
3. `npm install && npm run dev`

* **Display (Projector):** `/display`
* **Admin (Teacher):** `/admin`

---

## 🎮 1. Kahoot-Inspired Projector Display (`page.jsx`)

* **Iconic 4-Color Option Grid:**
  * **Option A:** Crimson Red with Triangle ▲
  * **Option B:** Sky Blue with Diamond ◆
  * **Option C:** Golden Yellow with Circle ●
  * **Option D:** Forest Green with Square ■
  * Responsive 3D bottom bevels and typography supporting both Sinhala (Unicode) and English.
* **Dynamic Circular SVG Countdown Timer:**
  * Real-time circumference progress animation.
  * Automatic urgency transitions: Normal Accent → Warning Amber (< 10s) → Pulsing Crimson Red (< 5s).
  * Synchronized countdown tick sound effect that accelerates as time runs out.
* **Suspenseful Answer Reveal:**
  * Correct card lights up with an emerald glow, pulses, and displays a `✓ CORRECT` badge.
  * Incorrect cards fade to 25% opacity.
  * Automatic celebration chime and particle confetti burst.
* **Winner Podium & Celebration:**
  * 1st & 2nd place pedestals with golden trophy 🏆 and silver medal 🥈.
  * 60 FPS lightweight canvas confetti rain and victory fanfare.
* **Cinematic Stages:**
  * **Lobby / Intermission:** Team VS Team face-off banner with current standings and pulsing arena logo.
  * **Subject Challenge:** Cinematic round announcement card.
  * **Rapid Fire Blitz:** High-intensity big digital timer with live buzzer counters.
* **Web Audio SFX Engine:**
  * Zero-dependency synthesized audio: Fanfare intro, countdown ticks, chime chords, wrong buzzer, ding, and victory melody.
  * Fullscreen toggle (⛶) and mute/unmute buttons.

---

## 🎨 2. Theme Customizer Studio (`page.jsx`)

Located directly in the **"Theme Studio & Sound"** panel in the Admin Console:

### 1. 7 One-Click Professional Presets:
* 🟣 **MindSpark Violet:** Deep violet background with electric cyan, pink, and yellow.
* 🎮 **Kahoot Classic:** High-energy purple arena with iconic Kahoot hues.
* 🌌 **Midnight Cyber:** Sleek OLED dark mode with neon cyan and magenta.
* 🏛️ **Royal Navy & Gold:** Academic collegiate blue with metallic gold accents.
* 🌿 **Emerald Academy:** Botanical campus forest green with amber highlights.
* 🔥 **Crimson Energy:** Velvet ruby and sunrise coral.
* ☀️ **Studio Clean Light:** Modern executive minimalist light theme.

### 2. Custom Brand Color Picker:
Visual color pickers + direct hex code inputs for:
* Team A Color
* Team B Color
* Accent / Glow Color
* Background Color
* Text (Ink) Color
* Card Surface Color

### 3. Live Theme Preview:
* View exactly how the display screen and team badges will look inside the Admin deck before or while applying.

### 4. Sound Effects Deck:
* Background music toggle with volume slider.
* Sound effects toggle and instant audio testing buttons (Test Chime, Test Buzzer).
