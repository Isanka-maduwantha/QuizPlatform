# MindSpark Quiz (Next.js + MySQL)
1. mysql -u root -p < schema.sql
2. cp .env.example .env.local   (set DB_* and ADMIN_PASSWORD)
3. npm install && npm run dev
Display (projector): /display    Admin (teacher): /admin


  ### ✨ MindSpark Quiz Platform — UI/UX & Kahoot Theme Overhaul                                                              
                                                                                                                              
  The entire platform has been redesigned to deliver a Kahoot-style, high-energy live game show experience while providing a  
  professional broadcast control studio and deep theme customization.                                                         
  ──────                                                                                                                      
  ### 🎮 1. Kahoot-Inspired Projector Display (page.jsx)                                                                      
                                                                                                                              
  • Iconic 4-Color Option Grid:                                                                                               
      • Option A: Crimson Red with Triangle ▲                                                                                 
      • Option B: Sky Blue with Diamond ◆                                                                                     
      • Option C: Golden Yellow with Circle ●                                                                                 
      • Option D: Forest Green with Square ■                                                                                  
      • Responsive 3D bottom bevels and typography supporting both Sinhala (Unicode) and English.                             
  • Dynamic Circular SVG Countdown Timer:                                                                                     
      • Real-time circumference progress animation.                                                                           
      • Automatic urgency transitions: Normal Accent → Warning Amber (< 10s) → Pulsing Crimson Red (< 5s).                    
      • Synchronized countdown tick sound effect that accelerates as time runs out.                                           
  • Suspenseful Answer Reveal:                                                                                                
      • Correct card lights up with an emerald glow, pulses, and displays a ✓ CORRECT badge.                                  
      • Incorrect cards fade to 25% opacity.                                                                                  
      • Automatic celebration chime and particle confetti burst.                                                              
  • Winner Podium & Celebration:                                                                                              
      • 1st & 2nd place pedestals with golden trophy 🏆 and silver medal 🥈.                                                  
      • 60 FPS lightweight canvas confetti rain and victory fanfare.                                                          
  • Cinematic Stages:                                                                                                         
      • Lobby / Intermission: Team VS Team face-off banner with current standings and pulsing arena logo.                     
      • Subject Challenge: Cinematic round announcement card.                                                                 
      • Rapid Fire Blitz: High-intensity big digital timer with live buzzer counters.                                         
  • Web Audio SFX Engine:                                                                                                     
      • Zero-dependency synthesized audio: Fanfare intro, countdown ticks, chime chords, wrong buzzer, ding, and victory      
      melody.                                                                                                                 
      • Fullscreen toggle (⛶) and mute/unmute buttons.                                                                        
                                                                                                                              
  ──────                                                                                                                      
  ### 🎨 2. Theme Customizer Studio (page.jsx)                                                                                
                                                                                                                              
  Located directly in the "Theme Studio & Sound" panel in the Admin Console:                                                  
                                                                                                                              
  1. 7 One-Click Professional Presets:                                                                                        
      • 🟣 MindSpark Violet: Deep violet background with electric cyan, pink, and yellow.                                     
      • 🎮 Kahoot Classic: High-energy purple arena with iconic Kahoot hues.                                                  
      • 🌌 Midnight Cyber: Sleek OLED dark mode with neon cyan and magenta.                                                   
      • 🏛️ Royal Navy & Gold: Academic collegiate blue with metallic gold accents.                                            
      • 🌿 Emerald Academy: Botanical campus forest green with amber highlights.                                              
      • 🔥 Crimson Energy: Velvet ruby and sunrise coral.                                                                     
      • ☀️ Studio Clean Light: Modern executive minimalist light theme.                                                       
  2. Custom Brand Color Picker:                                                                                               
      • Visual color pickers + direct hex code inputs for:                                                                    
          • Team A Color                                                                                                      
          • Team B Color                                                                                                      
          • Accent / Glow Color                                                                                               
          • Background Color                                                                                                  
          • Text (Ink) Color                                                                                                  
          • Card Surface Color                                                                                                
                                                                                                                              
  3. Live Theme Preview:                                                                                                      
      • View exactly how the display screen and team badges will look inside the Admin deck before or while applying.         
  4. Sound Effects Deck:                                                                                                      
      • Background music toggle with volume slider.                                                                           
      • Sound effects toggle and instant audio testing buttons (Test Chime, Test Buzzer).                                     
                                                                                                                              
  ──────                                                                                                                      
  ### 🎛️ 3. Broadcast Host Console (page.jsx)                                                                                 
                                                                                                                              
  • "ON AIR" Status Pill: Real-time indicator showing whether a question, timer, or lobby is active on the big screen.        
  • Instant Keyboard Shortcuts:                                                                                               
      • Space: Reveal correct answer                                                                                          
      • T: Start 30s timer                                                                                                    
      • 1: Award points to Team A (+10)                                                                                       
      • 2: Award points to Team B (+10)                                                                                       
      • 0: No points / Pass question                                                                                          
      • Esc: Return to lobby screen                                                                                           
  • Modular Question Launcher:                                                                                                
      • Filter questions by round, subject, or search keywords.                                                               
      • "Already Asked" indicators with one-click "Show on Screen".                                                           
      • Question bank creator with live option preview and subject manager.                                                   
                                                                                                                              
  ──────                                                                                                                      
  ### 🚀 4. Welcome Launch Portal (page.jsx)                                                                                  
                                                                                                                              
  • Modern landing hub with direct launch cards for both the Projector Display Screen and Host Control Studio.                
  ──────                                                                                                                      
  ### 🔗 Quick Links to Test                                                                                                  
                                                                                                                              
  • Home Portal: http://localhost:3000/                                                                                       
  • Projector Display Screen: http://localhost:3000/display                                                                   
  • Host Control Studio: http://localhost:3000/admin (Password: admin)                                                        

────────────────────────────────────────────────────────────
> ok this is good now i want in Live host desk i want to select round type and school who oartcipate it and a way to select
  andwer by touch or keyboard a,b,c,c and if answer is wringt marks will be automatically going to the team and loads the next
  question

▸ Thought for 24s, 2.4k tokens
  Incorrect answers necessitate a flexible scoring mechanism; the system must support several configurations: points assignme...

● Read(~/Documents/Node/mindspark/app/api/state/route.js) (ctrl+o to expand)

▸ Thought for 14s, 1.2k tokens
  An answering policy setting for the live host desk is proposed, offering three wrong-answer modes: opponent bonus, no point...

● Bash(node -e ')
● Bash(node -e ') (ctrl+o to expand)

▸ Thought for 24s, 2.4k tokens
  Examining the database query for the next question, the system retrieves question IDs, filtering out used IDs and optionall...

● Bash(node -e ')
● Bash(node -e ') (ctrl+o to expand)

▸ Thought for 38s, 3.2k tokens
  Analyzing the 'answer' action, the UI directly reflects correct answers with a green highlight, celebratory sound, and a sc...

● Read(~/Documents/Node/mindspark/app/api/state/route.js) (ctrl+o to expand)

▸ Thought for 26s, 1.6k tokens
  The 'loadQuestion' case simply sets the question ID and resets the reveal state, implying an immediate display of a specifi...

● Edit(~/Documents/Node/mindspark/app/api/state/route.js) (ctrl+o to expand)

▸ Thought for 10s, 394 tokens
  Investigating the display logic, specifically the page component and its associated stylesheet. The primary focus is render...

● Read(~/Documents/Node/mindspark/app/display/display.css)
● Read(~/Documents/Node/mindspark/app/display/display.css) (ctrl+o to expand)

▸ Thought for 9s, 641 tokens
  The goal is to visually highlight the active turn. Implementing a CSS class that targets the active turn element is the fir...

● Read(~/Documents/Node/mindspark/app/display/page.jsx) (ctrl+o to expand)

▸ Thought for 1m 0s, 2.0k tokens
  Next, considering the new components' CSS (round selection, school selection, answer pad), ensuring correct visual represen...

● Edit(~/Documents/Node/mindspark/app/display/display.css) (ctrl+o to expand)

▸ Thought for 40s, 223 tokens
  Inspecting the designated lines of the display page to incorporate the active school indicator with dynamic styling within...

● Edit(~/Documents/Node/mindspark/app/display/page.jsx) (ctrl+o to expand)

▸ Thought for 8s, 471 tokens
  Investigating the styling requirements for the Live Host Desk interface within the admin panel. Identified three key stylin...

● Read(~/Documents/Node/mindspark/app/admin/admin.css)
● Read(~/Documents/Node/mindspark/app/admin/admin.css) (ctrl+o to expand)

▸ Thought for 21s, 200 tokens
  The Live Host Desk requires specific CSS classes within `app/admin/admin.css` to enable the desired UI elements. These clas...

● Edit(~/Documents/Node/mindspark/app/admin/admin.css) (ctrl+o to expand)

▸ Thought for 11s, 885 tokens
  The application's state management appears to trigger specific actions. Observed actions include setting the round, active...

● Read(~/Documents/Node/mindspark/app/admin/page.jsx) (ctrl+o to expand)

▸ Thought for 1m 11s, 342 tokens
  Initial focus is on constructing the UI component for the admin page, specifically the round and school selectors. This ent...

● Edit(~/Documents/Node/mindspark/app/admin/page.jsx)
● Bash(curl -s -I http://localhost:3000/admin)
● Bash(curl -s -I http://localhost:3000/display)
● Bash(curl -s -i -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d '{"password":"admin"}' -c
/tmp...)
● Bash(curl -s -X POST http://localhost:3000/api/state -b /tmp/adm_cookies.txt -H "Content-Type: application/json" -d
'{"action...)
● Bash(curl -s -X POST http://localhost:3000/api/state -b /tmp/adm_cookies.txt -H "Content-Type: application/json" -d
'{"action...)
● Bash(curl -s -X POST http://localhost:3000/api/state -b /tmp/adm_cookies.txt -H "Content-Type: application/json" -d
'{"action...)
● Bash(curl -s -X POST http://localhost:3000/api/state -b /tmp/adm_cookies.txt -H "Content-Type: application...) (ctrl+o to
expand)

▸ Thought for 8s, 204 tokens
  The previous answer was incorrect; the displayed feedback confirms this. Team 0's selection was marked as wrong, and Team 1...

● Bash(curl -s -X POST http://localhost:3000/api/state -b /tmp/adm_cookies.txt -H "Content-Type: application...) (ctrl+o to
expand)

  ### ⚡ Live Host Desk Upgrade: Round Selection, School Turn, Touch/Keyboard Answer Pad & Automatic Marks                    
                                                                                                                              
  The Live Host Desk has been upgraded with all requested live game show mechanics:                                           
  ──────                                                                                                                      
  ### 🕹️ What’s New in the Live Host Desk (page.jsx)                                                                          
                                                                                                                              
  #### 1. 🎯 Round Type & Subject Selection                                                                                   
                                                                                                                              
  • Switch between rounds with a single tap in the Live Deck:                                                                 
      • 🌍 Round 1: General Knowledge                                                                                         
      • 🎯 Round 2: Subject Challenge (with interactive subject chips: Physics, Chemistry, Biology, Combined Maths, ICT)      
      • ⚡ Round 3: Rapid Fire Blitz                                                                                          
  • Shows live unasked question count and a one-click "Next Question ⏩" button.                                              
  ──────                                                                                                                      
  #### 2. 🏫 Participating School / Answering Turn Selector                                                                   
                                                                                                                              
  • Two Interactive School Cards in the Live Deck:                                                                            
      • Team A (e.g. Vishvodya Collage) vs Team B (e.g. Maliyadewa Boys).                                                     
      • Shows current score, team badge, and glowing 🎯 Active Turn (Answering) tag.                                          
      • Tap either school card or press Tab to change who is answering.                                                       
  • On the Projector Display Screen (page.jsx):                                                                               
      • Displays: 🎯 Direct Question for: [School Name].                                                                      
      • The active answering team's scorecard pulses with an energetic glow.                                                  
                                                                                                                              
  ──────                                                                                                                      
  #### 3. 👆 Touch & Keyboard Answer Selection (A, B, C, D)                                                                   
                                                                                                                              
  • 4 Large Touch Answer Buttons in the Host Deck:                                                                            
      • [▲ A] Red Button                                                                                                      
      • [◆ B] Blue Button                                                                                                     
      • [● C] Yellow Button                                                                                                   
      • [■ D] Green Button                                                                                                    
  • Keyboard Hotkeys:                                                                                                         
      • Press A, B, C, or D (or 1, 2, 3, 4) on your keyboard to instantly submit the contestant's answer.                     
  • The correct answer is always highlighted with a subtle ✓ CORRECT badge for the host's reference.                          
  ──────                                                                                                                      
  #### 4. ⚖️ Automatic Marks Allocation                                                                                       
                                                                                                                              
  When an answer is selected (by touch or keyboard):                                                                          
                                                                                                                              
  • If Correct:                                                                                                               
      • Automatically awards +10 marks to the active participating school.                                                    
      • Display Screen reveals the green checkmark, plays a chime sound, and showers confetti.                                
      • Shows banner: 🎉 Correct! +10 pts to [School Name].                                                                   
  • If Wrong:                                                                                                                 
      • Automatically applies the configured tournament rule:                                                                 
          • Pass to Opponent (+5 pts bonus) (Default tournament rule)                                                         
          • Full marks to Opponent (+10 pts)                                                                                  
          • 0 points (No marks awarded)                                                                                       
          • Penalty (-5 pts to answering team)                                                                                
      • Display Screen highlights the chosen option in red CHOSEN ✗, reveals the correct answer in green, plays a wrong buzzer,
      and awards the bonus marks automatically.                                                                               
                                                                                                                              
  ──────                                                                                                                      
  #### 5. ⏩ Automatic Next Question Loading & Turn Alternation                                                               
                                                                                                                              
  • As soon as an answer is evaluated, a 3-second countdown begins on the host screen:
  │ "⏱️ Answer evaluated! Loading next question for [Other School] in 3s... [Skip Countdown ⏭️]"
  
  • When the 3 seconds elapse (or if you click "Skip Countdown ⏭️" or press Space):
      1. The next unasked question for that round is pulled from the database.
      2. The active turn automatically alternates to the other school (School A → School B → School A).
      3. The question appears live on the projector screen.
  • You can also disable or enable Auto-Advance anytime with the toggle in the Host Policy bar.
  ──────
  ### ⌨️ Host Keyboard Shortcut Cheatsheet
  
   Key                                                         │ Action
  ─────────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────
   A / B / C / D                                               │ Select and submit contestant answer
   Tab                                                         │ Toggle active participating school (School A ↔ School B)
   T                                                           │ Start 30-second question timer
   Space                                                       │ Reveal answer immediately or skip countdown to next question
   Esc                                                         │ Return to standby / scores lobby screen
