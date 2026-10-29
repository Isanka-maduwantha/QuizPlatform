USE mindspark;
SET NAMES utf8mb4;

TRUNCATE TABLE questions;

-- Round 1
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(1, NULL, '2010 වර්ෂයේදී යුනෙස්කෝව විසින් ලෝක උරුමයක් ලෙස නම් කරන ලද ශ්‍රී ලංකාවේ ස්ථානය කුමක්ද?<br>Which place in Sri Lanka was designated a World Heritage Site by UNESCO in 2010?', '["ගාලු කොටුව<br>Galle Fort","දඹුල්ල ගුහා විහාරය<br>Dambulla Cave Temple","ශ්‍රී ලංකාවේ මධ්‍යම කඳුකරය<br>Central Highlands of Sri Lanka","සිංහරාජ වනාන්තරය<br>Sinharaja Forest"]', 2),
(1, NULL, 'ශ්‍රී ලංකාවේ වයස අවුරුදු 21 ඉක්මවූ සියලු පුරවැසියන්ට සර්වජන ඡන්ද බලය ලබා දුන් ව්‍යවස්ථාව කුමක්ද?<br>Which constitution granted universal suffrage to all citizens of Sri Lanka over the age of 21?', '["ඩොනමෝර් ව්‍යවස්ථාව<br>Donoughmore Constitution","කෝල්බෲක්-කැමරන් ව්‍යවස්ථාව<br>Colebrooke–Cameron Constitution","මැනිං ව්‍යවස්ථාව<br>Manning Constitution","සෝල්බරි ව්‍යවස්ථාව<br>Soulbury Constitution"]', 0),
(1, NULL, 'අභයගිරි විහාරය ඉදි කරවන ලද්දේ කවර රජෙකු විසින්ද?<br>By which king was the Abhayagiri Vihara built?', '["දුටුගැමුණු රජු<br>King Dutugemunu","දේවානම්පියතිස්ස රජු<br>King Devanampiyatissa","ධාතුසේන රජු<br>King Dhatusena","වළගම්බා (වට්ටගාමිණී අභය) රජු<br>King Valagamba (Vattagamani Abhaya)"]', 3),
(1, NULL, 'ශ්‍රී ලංකා මහ බැංකුව (එවකට ලංකා මහ බැංකුව) ක්‍රියාත්මක වීමට පටන් ගත් වර්ෂය කුමක්ද?<br>In which year did the Central Bank of Sri Lanka (then the Central Bank of Ceylon) begin to operate?', '["1948","1950","1953","1956"]', 1),
(1, NULL, 'ශ්‍රී ලංකාවේ උසම දිය ඇල්ල කුමක්ද?<br>What is the tallest waterfall in Sri Lanka?', '["දියලුම ඇල්ල<br>Diyaluma Falls","බඹරකන්ද ඇල්ල<br>Bambarakanda Falls","රාවණා ඇල්ල<br>Ravana Falls","බොපත් ඇල්ල<br>Bopath Falls"]', 1),
(1, NULL, 'ශ්‍රී ලංකාව (එවකට ලංකාව) ඔලිම්පික් ක්‍රීඩා උළෙලකින් පළමු පදක්කම දිනාගත් වර්ෂය කුමක්ද?<br>In which year did Sri Lanka (then Ceylon) win its first medal at an Olympic Games?', '["1952","1956","2000","1948"]', 3),
(1, NULL, '1963 දී තිරගත වූ “ගම්පෙරළිය” චිත්‍රපටය අධ්‍යක්ෂණය කළේ කවුද?<br>Who directed the film “Gamperaliya”, released in 1963?', '["ලෙස්ටර් ජේම්ස් පීරිස්<br>Lester James Peries","ටයිටස් ද සිල්වා<br>Titus de Silva","ධර්මසේන පතිරාජ<br>Dharmasena Pathiraja","සුගතපාල සෙනරත් යාපා<br>Sugathapala Senerath Yapa"]', 0),
(1, NULL, 'ශ්‍රී ලංකාව එක්සත් ජාතීන්ගේ සංවිධානයේ සාමාජිකත්වය ලබා ගත් වර්ෂය කුමක්ද?<br>In which year did Sri Lanka gain membership of the United Nations?', '["1948","1952","1955","1960"]', 2),
(1, NULL, 'සමුද්‍රයකට ප්‍රවේශයක් නොමැති (ගොඩබිම වටවූ) රටවලින් පමණක් වට වී ඇති “ද්විත්ව ගොඩබිම වටවූ” රටක් වන්නේ පහත සඳහන් කුමන රටද?<br>Which of the following countries is a “doubly landlocked” country, surrounded only by landlocked countries (countries with no access to a sea)?', '["බොලීවියාව<br>Bolivia","මොන්ගෝලියාව<br>Mongolia","ස්විට්සර්ලන්තය<br>Switzerland","උස්බෙකිස්තානය<br>Uzbekistan"]', 3),
(1, NULL, '“කරමසොව් සහෝදරයෝ” (The Brothers Karamazov) නවකතාවේ කතුවරයා කවුද?<br>Who is the author of the novel “The Brothers Karamazov”?', '["ලියෝ ටෝල්ස්ටෝයි<br>Leo Tolstoy","ෆියෝඩර් දොස්තයෙව්ස්කි<br>Fyodor Dostoevsky","ඇන්ටන් චෙකොව්<br>Anton Chekhov","ඇලෙක්සැන්ඩර් පුෂ්කින්<br>Alexander Pushkin"]', 1),
(1, NULL, 'ටෙස්ලා (T) ඒකකයෙන් මනිනු ලබන්නේ කුමක්ද?<br>What is measured in the unit tesla (T)?', '["විද්‍යුත් ක්ෂේත්‍ර ප්‍රබලතාව<br>Electric field strength","ප්‍රේරකතාව<br>Inductance","චුම්බක ස්‍රාව ඝනත්වය<br>Magnetic flux density","ධාරිතාව<br>Capacitance"]', 2),
(1, NULL, 'ආවර්තිතා වගුවේ ඇති සියලු මූලද්‍රව්‍ය අතරින් විද්‍යුත් ඍණතාව (electronegativity) වැඩිම මූලද්‍රව්‍යය කුමක්ද?<br>Of all the elements in the periodic table, which has the highest electronegativity?', '["ෆ්ලුවොරීන්<br>Fluorine","ඔක්සිජන්<br>Oxygen","ක්ලෝරීන්<br>Chlorine","නයිට්‍රජන්<br>Nitrogen"]', 0),
(1, NULL, 'මිනිස් හදවතේ ස්වාභාවික ස්පන්දන සාධකය (pacemaker) ලෙස ක්‍රියා කරන්නේ කුමක්ද?<br>What acts as the natural pacemaker of the human heart?', '["SA node","AV node","පර්කින්ජ් තන්තු<br>Purkinje fibres","හිස් කලාපය<br>Bundle of His"]', 0),
(1, NULL, 'IPv4 ලිපිනයක් සමන්විත වන්නේ බිටු (bits) කීයකින්ද?<br>How many bits does an IPv4 address consist of?', '["16","64","32","128"]', 2),
(1, NULL, 'සෞඛ්‍ය සම්පන්න වැඩිහිටියෙකුගේ රුධිරයේ pH අගය ආසන්න වශයෙන් කොපමණද?<br>What is the approximate pH of the blood of a healthy adult?', '["6.4","7.4","7.0","8.4"]', 1),
(1, NULL, 'ප්‍රභාසංස්ලේෂණයේ ආලෝක ප්‍රතික්‍රියා සිදු වන්නේ ක්ලෝරොප්ලාස්ට් (හරිත ප්ලාස්ටිඩ) තුළ කුමන කොටසේද?<br>In photosynthesis, in which part of the chloroplast (green plastid) do the light reactions take place?', '["ස්ට්‍රෝමාව<br>Stroma","බාහිර පටලය<br>Outer membrane","අන්තර් පටල අවකාශය<br>Intermembrane space","තයිලකොයිඩ පටල<br>Thylakoid membranes"]', 3),
(1, NULL, '2025 නොබෙල් සාම ත්‍යාගය ලැබුවේ කවුද?<br>Who received the 2025 Nobel Peace Prize?', '["මරියා කොරිනා මචාඩෝ<br>María Corina Machado","ග්‍රේටා තන්බර්ග්<br>Greta Thunberg","මලාලා යූසෆ්සායි<br>Malala Yousafzai","ආබී අහමඩ්<br>Abiy Ahmed"]', 0),
(1, NULL, '2025 රසායන විද්‍යා නොබෙල් ත්‍යාගය පිරිනමනු ලැබුවේ කුමක් සඳහාද?<br>For what was the 2025 Nobel Prize in Chemistry awarded?', '["කෘත්‍රිම බුද්ධිය මගින් ප්‍රෝටීන ව්‍යුහ පුරෝකථනය<br>Predicting protein structures using artificial intelligence","CRISPR ජාන සංස්කරණ ක්‍රමය<br>The CRISPR gene-editing method","ලිතියම්-අයන බැටරි සංවර්ධනය<br>The development of lithium-ion batteries","ලෝහ-කාබනික රාමු සංවර්ධනය<br>The development of metal–organic frameworks"]', 3),
(1, NULL, '2026 ICC පිරිමි T20 ලෝක කුසලානය ශ්‍රී ලංකාව සමඟ ඉන්දියාව සම-සංවිධානය කළේය. එහි අවසන් තරගයේදී ඉන්දියාවෙන් පරාජය වූයේ කුමන කණ්ඩායමද?<br>The 2026 ICC Men''s T20 World Cup was co-hosted by India together with Sri Lanka. Which team was defeated by India in its final?', '["නවසීලන්තය<br>New Zealand","ඒංගලන්තය<br>England","දකුණු අප්‍රිකාව<br>South Africa","පාකිස්ථානය<br>Pakistan"]', 0),
(1, NULL, 'ශ්‍රී ලංකාවේ උසම කඳු මුදුන කුමක්ද?<br>What is the highest mountain peak in Sri Lanka?', '["කිරිගල්පොත්ත<br>Kirigalpotta","තොටපොළකන්ද<br>Thotapolakanda","පිදුරුතලාගල<br>Pidurutalagala","ශ්‍රී පාද (සමනළ) කන්ද<br>Sri Pada (Samanala) Mountain"]', 2);
-- Ensure subjects exist in the lookup table to prevent NULL subject_id
INSERT IGNORE INTO subjects (name) VALUES 
('Biology'), ('Physics'), ('ICT'), ('Business Studies'), ('Media Studies'), ('Geography');

-- Round 2

-- Biology
SET @s = (SELECT id FROM subjects WHERE name = 'Biology' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'ප්‍රකාශ සංශ්ලේෂණයේදී ආලෝක ප්‍රතික්‍රියාව සිදුවන්නේ සෛලයේ කුමන ස්ථානයේද?<br>Where in the cell does the light reaction of photosynthesis take place?', '["ස්ට්‍රෝමාව<br>Stroma","තයිලකොයිඩ පටලය<br>Thylakoid membrane","මයිටොකොන්ඩ්‍රියා පූරකය<br>Mitochondrial matrix","රයිබොසෝම<br>Ribosomes"]', 1),
(2, @s, 'මිනිසාගේ රුධිරයේ ඇති ප්‍රධානම ශ්වසන වර්ණකය කුමක්ද?<br>What is the main respiratory pigment in human blood?', '["හීමොග්ලොබින්<br>Haemoglobin","මයොග්ලොබින්<br>Myoglobin","හෙමොසයනින්<br>Haemocyanin","ඇල්බියුමින්<br>Albumin"]', 0),
(2, @s, 'ශාක සෛල බිත්තියේ ප්‍රධාන ව්‍යුහාත්මක සංරචකය කුමක්ද?<br>What is the main structural component of the plant cell wall?', '["පෙක්ටින්<br>Pectin","ග්ලයිකොජන්<br>Glycogen","සෙලියුලෝස්<br>Cellulose","කයිටින්<br>Chitin"]', 2),
(2, @s, 'පහත සඳහන් දේවලින් ප්‍රෝටීන් සංශ්ලේෂණයට දායක වන සෛලාංගය කුමක්ද?<br>Which of the following organelles contributes to protein synthesis?', '["ගොල්ගි සංකීර්ණය<br>Golgi complex","රයිබොසෝමය<br>Ribosome","ලයිසොසෝමය<br>Lysosome","පෙරොක්සිසෝමය<br>Peroxisome"]', 1);

-- Physics
SET @s = (SELECT id FROM subjects WHERE name = 'Physics' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'SI ඒකක පද්ධතියේ බලයේ ඒකකය කුමක්ද?<br>What is the SI unit of force?', '["ජූල් (J)<br>Joule (J)","වොට් (W)<br>Watt (W)","නියුටන් (N)<br>Newton (N)","පැස්කල් (Pa)<br>Pascal (Pa)"]', 2),
(2, @s, 'ශූන්‍යාකාශයේ ආලෝකයේ වේගය ආසන්න වශයෙන් කොපමණද?<br>What is the approximate speed of light in a vacuum?', '["3 × 10⁸ m/s","3 × 10⁶ m/s","9.8 m/s²","1.5 × 10¹¹ m/s"]', 0),
(2, @s, 'ඕම්ගේ නියමයට (V = IR) අනුව විභව වෙනස (V) සහ ධාරාව (I) අතර සම්බන්ධතාවය කුමක්ද?<br>According to Ohm''s law (V = IR), what is the relationship between potential difference (V) and current (I)?', '["ප්‍රතිලෝමව සමානුපාතික වේ<br>Inversely proportional","සරලව සමානුපාතික වේ<br>Directly proportional","වර්ගයට සමානුපාතික වේ<br>Proportional to the square","සම්බන්ධතාවයක් නැත<br>No relationship"]', 1),
(2, @s, 'පහත සඳහන් දෙයින් අදිශ රාශියක් වන්නේ කුමක්ද?<br>Which of the following is a scalar quantity?', '["ප්‍රවේගය<br>Velocity","බලය<br>Force","ත්වරණය<br>Acceleration","ශක්තිය<br>Energy"]', 3);

-- ICT
SET @s = (SELECT id FROM subjects WHERE name = 'ICT' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'පහත දැක්වෙන ද්විම්‍ය (Binary) අංක 1010₂ හි දශම (Decimal) අගය කීයද?<br>What is the decimal value of the binary number 1010₂?', '["8","10","12","16"]', 1),
(2, @s, 'පරිගණකයක ප්‍රධාන මතකය (Primary Memory) ලෙස හැඳින්වෙන්නේ කුමක්ද?<br>Which is known as the primary memory of a computer?', '["Hard Disk","RAM","CD-ROM","Flash Drive"]', 1),
(2, @s, 'OSI ආදර්ශකයේ (OSI Model) ස්තර (Layers) කීයක් තිබේද?<br>How many layers are there in the OSI Model?', '["5","6","7","8"]', 2),
(2, @s, 'HTML හි ලේඛනයක ප්‍රධාන මාතෘකාවක් යෙදීමට භාවිතා කරන Tag එක කුමක්ද?<br>Which tag is used to add a main heading to an HTML document?', '["&lt;p&gt;","&lt;h1&gt;","&lt;a&gt;","&lt;div&gt;"]', 1);

-- Business Studies
SET @s = (SELECT id FROM subjects WHERE name = 'Business Studies' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'ව්‍යාපාරයක මූලික අරමුණ වන්නේ කුමක්ද?<br>What is the basic objective of a business?', '["පිරිවැය වැඩි කිරීම<br>Increasing costs","ලාභ උපරිම කිරීම<br>Maximizing profit","සේවකයන් සංඛ්‍යාව වැඩි කිරීම<br>Increasing the number of employees","ණය ලබා ගැනීම<br>Obtaining loans"]', 1),
(2, @s, 'ලංකාවේ මූල්‍ය පද්ධතිය පාලනය කරන ප්‍රධාන ආයතනය කුමක්ද?<br>What is the main institution that regulates the financial system of Sri Lanka?', '["ලංකා බැංකුව<br>Bank of Ceylon","ශ්‍රී ලංකා මහ බැංකුව<br>Central Bank of Sri Lanka","කොළඹ වටිනාකම් පත්‍ර වෙළඳපොළ<br>Colombo Stock Exchange","කම්කරු දෙපාර්තමේන්තුව<br>Department of Labour"]', 1),
(2, @s, 'වෙළඳපොළ මිශ්‍රයේ (Marketing Mix) අඩංගු 4Ps වලට අයත් නො වන්නේ කුමක්ද?<br>Which of the following does not belong to the 4Ps of the Marketing Mix?', '["Product","Price","Place","Profit"]', 3),
(2, @s, 'එක් පුද්ගලයෙකු පමණක් අයිතිය දරන සහ පාලනය කරන ව්‍යාපාර සංවිධාන ක්‍රමය කුමක්ද?<br>Which form of business organization is owned and controlled by only one person?', '["හවුල් ව්‍යාපාර<br>Partnership","තනි හිමිකාර ව්‍යාපාර<br>Sole proprietorship","සමවාය සමිති<br>Cooperative societies","පොදු සමාගම්<br>Public companies"]', 1);

-- Media Studies
SET @s = (SELECT id FROM subjects WHERE name = 'Media Studies' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'සන්නිවේදන ක්‍රියාවලියක මූලික ආකෘතිය ඉදිරිපත් කළේ කවුරුන්ද?<br>Who presented the basic model of the communication process?', '["ඇරිස්ටෝටල්<br>Aristotle","විල්බර් ශ්‍රම්<br>Wilbur Schramm","හැරල්ඩ් ලැස්වෙල්<br>Harold Lasswell","ඩේවිඩ් බර්ලෝ<br>David Berlo"]', 0),
(2, @s, 'ප්‍රවෘත්ති වාර්තාකරණයේදී 5W + 1H සංකල්පයට අයත් නොවන ප්‍රශ්නය කුමක්ද?<br>Which question does not belong to the 5W + 1H concept in news reporting?', '["Who (කවුද)","What (කුමක්ද)","Which (කවරක්ද)","Why (ඇයි)"]', 2);

-- Geography
SET @s = (SELECT id FROM subjects WHERE name = 'Geography' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'ලොව උසම පර්වත සිඛරය වන එවරස්ට් කන්ද පිහිටා ඇත්තේ කුමන පර්වත පන්තියෙහිද?<br>Mount Everest, the highest peak in the world, is located in which mountain range?', '["ඇන්ඩීස්<br>Andes","හිමාල<br>Himalayas","ඇල්ප්ස්<br>Alps","රොකී<br>Rockies"]', 1),
(2, @s, 'ශ්‍රී ලංකාවේ දිගම ගංගාව වන මහවැලි ගඟ ආරම්භ වන්නේ කුමන ප්‍රදේශයෙන්ද?<br>From which area does the Mahaweli River, the longest river in Sri Lanka, originate?', '["ශ්‍රී පාද අඩවිය<br>Sri Pada region","හෝටන් තැන්න<br>Horton Plains","නුවරඑළිය<br>Nuwara Eliya","පිදුරුතලාගල<br>Pidurutalagala"]', 0);

-- Round 3: Rapid Fire
INSERT INTO questions(rnd, subject_id, text, answer_text) VALUES
(3, NULL, 'පරමාණුවක ස්කන්ධයෙන් වැඩිම ප්‍රතිශතයක් දරන්නේ න්‍යෂ්ටිය තුළ ඇති කුමන අංශු දෙකයිද?<br>Which two particles in the nucleus account for the largest percentage of an atom''s mass?', 'ප්‍රෝටෝන සහ නියුට්‍රෝන<br>Protons and neutrons'),
(3, NULL, 'පෘථිවි පෘෂ්ඨය මත වායුගෝලීය පීඩනය මැනීම සඳහා භාවිතා කරන සම්මත ඒකකය කුමක්ද?<br>What is the standard unit used to measure atmospheric pressure on the Earth''s surface?', 'පැස්කල් (Pa)<br>Pascal (Pa)'),
(3, NULL, 'ආලෝකයේ වර්ණාවලියේ වැඩිම තරංග ආයාමයක් ඇති වර්ණය කුමක්ද?<br>Which colour in the visible spectrum has the longest wavelength?', 'රතු<br>Red'),
(3, NULL, 'සෛලයක ශක්තිගාරය ලෙස හඳුන්වනු ලබන සෛලාංගය කුමක්ද?<br>Which organelle is known as the powerhouse of the cell?', 'මයිටොකොන්ඩ්‍රියාව<br>Mitochondrion'),
(3, NULL, 'මිනිස් රුධිර ප්ලාස්මාවේ වැඩිම ප්‍රතිශතයකින් අඩංගු වන සංරචකය කුමක්ද?<br>Which component makes up the largest percentage of human blood plasma?', 'ජලය<br>Water'),
(3, NULL, 'ප්‍රතික්‍රියාකාරකවල වේගය වැඩි කරන නමුත් ප්‍රතික්‍රියාවෙන් පරිවර්තනයට ලක් නොවී පවතින ද්‍රව්‍යය හැඳින්වෙන්නේ කුමක් ලෙසද?<br>What is a substance that increases the rate of a reaction but remains unchanged by it called?', 'උත්ප්‍රේරකයක්<br>A catalyst'),
(3, NULL, 'x² - 5x + 6 ප්‍රකාශයේ සාධක ලියන්න.<br>Write the factors of the expression x² - 5x + 6.', '(x-2)(x-3)'),
(3, NULL, 'සමචතුරස්‍රයක විකර්ණ එකිනෙක ඡේදනය වන්නේ කුමන කෝණයකින්ද?<br>At what angle do the diagonals of a square intersect each other?', '90° (ලම්බකව)<br>90° (perpendicular)'),
(3, NULL, 'වෘත්තයක පරිධිය මත පිහිටි ලක්ෂ්‍යයකට ඇඳිය හැකි ස්පර්ශක සංඛ්‍යාව කොපමණද?<br>How many tangents can be drawn to a point on the circumference of a circle?', 'එකකි<br>One'),
(3, NULL, 'ලඝුගණක (Logarithms) නිර්මාණය කරන ලද ප්‍රසිද්ධ ගණිතඥයා කවුරුන්ද?<br>Which famous mathematician invented logarithms?', 'ජෝන් නේපියර්<br>John Napier'),
(3, NULL, 'ත්‍රිකෝණයක පාදයක මධ්‍ය ලක්ෂ්‍යය සහ අනෙක් පාදයේ මධ්‍ය ලක්ෂ්‍යය යා කරන රේඛා ඛණ්ඩය තුන්වන පාදයට ඇති සම්බන්ධතාවය කුමක්ද?<br>What is the relationship to the third side of the line segment joining the midpoints of two sides of a triangle?', 'සමාන්තර සහ අඩකි<br>Parallel and half its length'),
(3, NULL, 'ශ්‍රී ලංකාවේ අනුරාධපුර යුගයේදී ඉදිකරන ලද විශාලතම වැව කුමක්ද?<br>What is the largest tank built during the Anuradhapura period in Sri Lanka?', 'කලා වැව<br>Kala Wewa'),
(3, NULL, '1815 මාර්තු 02 දින අත්සන් කරන ලද උඩරට ගිවිසුමෙන් බලයට පත් වූ බ්‍රිතාන්‍ය ආණ්ඩුකාරවරයා කවුරුන්ද?<br>Who was the British Governor in power when the Kandyan Convention was signed on 2 March 1815?', 'රොබට් බ්‍රවුන්රිග්<br>Robert Brownrigg'),
(3, NULL, 'ලක්බිම බුදුදහම පිහිටුවීමේ මූලිකත්වය ගත් මෞර්ය අධිරාජ්‍යයා කවුරුන්ද?<br>Which Mauryan emperor took the lead in establishing Buddhism in Sri Lanka?', 'අශෝක සම්රාට්<br>Emperor Ashoka'),
(3, NULL, 'පොළොන්නරු යුගයේ මහා පරාක්‍රමබාහු රජතුමා විසින් ඉදිකරන ලද ලොව ප්‍රසිද්ධ මහා වැව් සංකීර්ණය කුමක්ද?<br>What is the world-famous large tank complex built by King Maha Parakramabahu in the Polonnaruwa period?', 'පරාක්‍රම සමුද්‍රය<br>Parakrama Samudraya'),
(3, NULL, 'ශ්‍රී ලංකාවේ මුල්ම යුරෝපීය යටත්විජිත පාලකයන් වන්නේ කවුරුන්ද?<br>Who were the first European colonial rulers of Sri Lanka?', 'පෘතුගීසීන්<br>The Portuguese'),
(3, NULL, 'ද්විමය ක්‍රමයේ (Binary) අංක 11₂ හි දශම අගය කීයද?<br>What is the decimal value of the binary number 11₂?', '3'),
(3, NULL, 'පරිගණක ජාලයක දත්ත සම්ප්‍රේෂණය සඳහා භාවිතා කරන ප්‍රධාන ජාල ප්‍රොටෝකෝලය කුමක්ද?<br>What is the main network protocol used for data transmission in a computer network?', 'TCP/IP'),
(3, NULL, 'පරිගණකයක දත්ත ස්ථිරවම ගබඩා කර තබන ප්‍රධාන දෘඩාංග ඒකකය කුමක්ද?<br>What is the main hardware unit that stores data permanently in a computer?', 'Hard Disk Drive (HDD)'),
(3, NULL, 'HTML හි වගුවක් (Table) නිර්මාණය කිරීම සඳහා භාවිතා කරන මූලික ටැගය කුමක්ද?<br>What is the basic tag used to create a table in HTML?', '&lt;table&gt;'),
(3, NULL, 'පරිගණක පද්ධතියක මෙහෙයුම් පද්ධතියකට (Operating System) උදාහරණයක් දෙන්න.<br>Give an example of an operating system for a computer system.', 'Windows'),
(3, NULL, 'ව්‍යාපාරයක වත්කම් සහ හිමිකම් අතර වෙනස ලෙස හැඳින්වෙන්නේ කුමක්ද?<br>What is the difference between a business''s assets and equity called?', 'වගකීම් (Liabilities)<br>Liabilities'),
(3, NULL, 'ශ්‍රී ලංකාවේ මධ්‍යම බැංකුව පිහිටුවන ලද වසර කුමක්ද?<br>In which year was the Central Bank of Sri Lanka established?', '1950'),
(3, NULL, 'ව්‍යාපාර සංවිධාන වර්ග අතරින් අසීමිත වගකීමක් ඇති ප්‍රධාන ව්‍යාපාර ස්වරූපයක් කුමක්ද?<br>Which main form of business organization has unlimited liability?', 'තනි හිමිකාර ව්‍යාපාර<br>Sole proprietorship'),
(3, NULL, 'මානව දේහයේ ඇති දිගම අස්ථිය කුමක්ද?<br>What is the longest bone in the human body?', 'ෆීමර් (Femur)<br>Femur'),
(3, NULL, 'ප්‍රභාසංස්ලේෂණයේදී ශාක මඟින් මුදාහරිනු ලබන වායුව කුමක්ද?<br>Which gas is released by plants during photosynthesis?', 'ඔක්සිජන් (O₂)<br>Oxygen (O₂)'),
(3, NULL, 'රසායනික ප්‍රතික්‍රියාවකදී ඉලෙක්ට්‍රෝන ලබාගැනීමේ ක්‍රියාවලිය (අපහරණය) හැඳින්වෙන අනෙක් නම කුමක්ද?<br>What is the other name for the process of gaining electrons in a chemical reaction?', 'ක්ෂයවීම / ඔක්සිකරණ අංකය අඩුවීම<br>Reduction / decrease in oxidation number'),
(3, NULL, 'පෘථිවියේ පවතින ප්‍රධාන ස්ථර තුනෙන් ස්කන්ධයෙන් හා ඝනකමෙන් වැඩිම ස්තරය කුමක්ද?<br>Of the three main layers of the Earth, which layer has the greatest mass and thickness?', 'ප්‍රාවරය (Mantle)<br>Mantle'),
(3, NULL, 'ශ්‍රී ලංකාවේ වැඩිම වාර්ෂික වර්ෂාපතනයක් ලැබෙන ප්‍රදේශය අයත් වන්නේ කුමන කලාපයටද?<br>To which region does the area receiving the highest annual rainfall in Sri Lanka belong?', 'මධ්‍යම කඳුකරයේ බටහිර බෑවුම් ප්‍රදේශය<br>Western slopes of the central highlands'),
(3, NULL, 'සූර්යා වටා පෘථිවිය එක් වරක් සම්පූර්ණ පරිභ්‍රමණය වීමට ගතවන කාලය දින වලින් කොපමණද?<br>How many days does the Earth take to complete one revolution around the Sun?', 'දින 365¼<br>365¼ days');
