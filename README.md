# MindSpark Quiz (Next.js + MySQL)

## 🚀 Quick Start
1. `mysql -u root -p < schema.sql`
2. `cp .env.example .env.local` *(set DB_* and ADMIN_PASSWORD)*
3. `npm install && npm run dev`

* **Display (Projector):** `/display`
* **Admin (Teacher):** `/admin`

---

## 🧮 1. Host Scoring Rules

The Live Host Deck includes a visual **Scoring rules** editor. Hosts can set points for correct and rapid-fire answers, configure an optional penalty, choose what happens after a wrong answer, and set the bonus for a correct answer after the turn passes to the opponent. Select **Save rules** to apply the settings. Point values are whole numbers from 0 to 10,000.

---

## 🎮 2. Kahoot-Inspired Projector Display (`page.jsx`)

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

## 🎨 3. Theme Customizer Studio (`page.jsx`)

Located directly in the **"Theme Studio & Sound"** panel in the Admin Console:

### 1. 21 One-Click Professional Presets:
* **MindSpark Studio**, **Kahoot Classic**, **Midnight Cyberpunk**, **Sunset Horizon**, **Tokyo Sakura**, **Matrix Terminal**, **Royal Navy & Gold**
* **Crimson Inferno**, **Arctic Glacier**, **Obsidian Onyx**, **Clean Studio Light**, **Nordic Aurora**, **Lavender Haze**, **Electric Blue**
* **Rose Quartz**, **Citrus Pop**, **Ocean Depth**, **Ember Glow**, **Mint Condition**, **Monochrome**
* **Navy, Crimson & Gold:** Premium light palette with navy actions, crimson highlights, metallic amber, warm cream, and soft slate borders.

### 2. Custom Brand Color Picker:
Visual color pickers + direct hex code inputs for:
* Team A and Team B colors
* Accent, primary action, and alert colors
* Background and card surface colors
* Primary and muted text colors
* Border color

### 3. Live Theme Preview:
* View exactly how the display screen and team badges will look inside the Admin deck before or while applying.

### 4. Sound Effects Deck:
* Background music toggle with volume slider.
* Sound effects toggle and instant audio testing buttons (Test Chime, Test Buzzer).
