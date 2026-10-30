USE mindspark;
SET NAMES utf8mb4;

TRUNCATE TABLE questions;
-- ===== SET 2 =====
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
-- History of Sri Lanka (10)
(1, NULL, 'ගම්මාන සීමා නිර්ණය කර, අනුරාධපුරය සැලසුම්ගත අගනුවරක් ලෙස ගොඩනැගූ රජු ලෙස සැලකෙන්නේ කවුද?<br>Which king is credited with demarcating village boundaries and developing Anuradhapura into a planned capital?', '["විජය<br>Vijaya","මුටසීව<br>Mutasiva","පණ්ඩුකාභය<br>Pandukabhaya","දේවානම්පියතිස්ස<br>Devanampiyatissa"]', 2),
(1, NULL, 'දුටුගැමුණු රජු ආරම්භ කර, ඔහුගේ මරණයෙන් පසු සහෝදරයා වූ සද්ධාතිස්ස රජු විසින් නිමවන ලද බව සැලකෙන ස්තූපය කුමක්ද?<br>Which stupa, begun by King Dutugemunu, is traditionally said to have been completed by his brother Saddhatissa after his death?', '["රුවන්වැලි සෑය<br>Ruwanwelisaya","ජේතවනාරාමය<br>Jetavanaramaya","අභයගිරි දාගැබ<br>Abhayagiri Dagaba","තූපාරාමය<br>Thuparamaya"]', 0),
(1, NULL, 'ශ්‍රී ලංකා ඉතිහාසය විස්තර කරන පාලි වංශකථාව වන මහාවංශයේ මුල් කොටස රචනා කළ හිමියන් කවුද?<br>Which monk is credited with composing the original portion of the Mahavamsa, the Pali chronicle of Sri Lankan history?', '["බුද්ධඝෝෂ හිමි<br>Buddhaghosa","උපතිස්ස හිමි<br>Upatissa","ධම්මකිත්ති හිමි<br>Dhammakitti","මහානාම හිමි<br>Mahanama"]', 3),
(1, NULL, 'වැසි ජලය නිකරුණේ මුහුදට ගලා නොයා මිනිසාට ප්‍රයෝජනවත් විය යුතුය යන අදහසින්, පොළොන්නරුවේ සාගරයක් මෙන් විශාල පරාක්‍ර සමුද්‍රය ඉදිකළ රජු කවුද?<br>Which king, believing that rainwater should not flow uselessly into the sea, built the vast Parakrama Samudra at Polonnaruwa?', '["පළමුවන විජයබාහු<br>Vijayabahu I","පළමුවන පරාක්‍රමබාහු<br>Parakramabahu I","නිශ්ශංකමල්ල<br>Nissanka Malla","පළමුවන ගජබාහු<br>Gajabahu I"]', 1),
(1, NULL, '15 වන සියවසේ කෝට්ටේ සිට සමස්ත ලංකාව එක් පාලනයක් යටතට ගෙන ආ රජු කවුද?<br>Which king ruled from Kotte in the 15th century and brought the whole island under a single administration?', '["හතරවන භුවනෙකබාහු<br>Bhuvanekabahu IV","සත්වන භුවනෙකබාහු<br>Bhuvanekabahu VII","හයවන පරාක්‍රමබාහු<br>Parakramabahu VI","අලගක්කෝනාර<br>Alakeshvara"]', 2),
(1, NULL, '1602 දී මඩකලපුවට ගොඩ බැස උඩරට රජු වූ පළමුවන විමලධර්මසූරිය හමුවූ ලන්දේසි නාවික අණදෙන නිලධාරියා කවුද?<br>Which Dutch naval commander landed at Batticaloa in 1602 and met Vimaladharmasuriya I of Kandy?', '["ජෝරිස් ෆෑන් ස්පිල්බර්ගන්<br>Joris van Spilbergen","කොර්නෙලිස් ද හුට්මන්<br>Cornelis de Houtman","ජෑන් ෆෑන් රීබෙක්<br>Jan van Riebeeck","අබෙල් ටස්මන්<br>Abel Tasman"]', 0),
(1, NULL, '1802 දී ශ්‍රී ලංකාවේ මුහුදුබඩ ප්‍රදේශ නිල වශයෙන් බ්‍රිතාන්‍ය ඔටුන්න හිමි යටත් විජිතයක් බවට පත් කිරීමට පාදක වූ ගිවිසුම කුමක්ද?<br>Which treaty of 1802 formalised British control of Sri Lanka''s coastal regions as a Crown colony?', '["පැරිස් ගිවිසුම<br>Treaty of Paris","අමියන්ස් ගිවිසුම<br>Treaty of Amiens","වියානා ගිවිසුම<br>Treaty of Vienna","වෙස්ට්ෆේලියා ගිවිසුම<br>Treaty of Westphalia"]', 1),
(1, NULL, '1867 දී කඳුකරයේ ලූල්කඳුර වතුයායේ ශ්‍රී ලංකාවේ වාණිජමය තේ වගාවට මුල පිරූ ස්කොට්ලන්ත ජාතික වැවිලිකරු කවුද?<br>Which Scottish planter started commercial tea cultivation in Ceylon at the Loolecondera estate in 1867?', '["සර් සැමුවෙල් බේකර්<br>Sir Samuel Baker","තෝමස් ලිප්ටන්<br>Thomas Lipton","ජෝර්ජ් ටර්නර්<br>George Turnour","ජේම්ස් ටේලර්<br>James Taylor"]', 3),
(1, NULL, 'ශ්‍රී ලංකාවේ විධායක ජනාධිපති ක්‍රමය හඳුන්වා දුන් ව්‍යවස්ථාව කුමක්ද?<br>Which constitution introduced the executive presidential system in Sri Lanka?', '["පළමු ජනරජ ව්‍යවස්ථාව (1972)<br>First Republican Constitution (1972)","දෙවන ජනරජ ව්‍යවස්ථාව (1978)<br>Second Republican Constitution (1978)","සෝල්බරි ව්‍යවස්ථාව (1947)<br>Soulbury Constitution (1947)","ඩොනමෝර් ව්‍යවස්ථාව (1931)<br>Donoughmore Constitution (1931)"]', 1),
(1, NULL, '1987 ජූලි මාසයේ අත්සන් කරන ලද, පළාත් සභා ක්‍රමයට මග පෑදූ ඉන්දු-ලංකා ගිවිසුමට අත්සන් තැබූ නායකයන් දෙදෙනා කවුද?<br>Which two leaders signed the Indo-Lanka Accord of July 1987, which paved the way for the provincial council system?', '["ආර්. ප්‍රේමදාස සහ පී. වී. නරසිංහ රාවු<br>R. Premadasa and P. V. Narasimha Rao","එස්. ඩබ්ලිව්. ආර්. ඩී. බණ්ඩාරනායක සහ ජවහර්ලාල් නේරු<br>S. W. R. D. Bandaranaike and Jawaharlal Nehru","ජේ. ආර්. ජයවර්ධන සහ රාජීව් ගාන්ධි<br>J. R. Jayewardene and Rajiv Gandhi","ඩී. එස්. සේනානායක සහ ලාල් බහදූර් ශාස්ත්‍රී<br>D. S. Senanayake and Lal Bahadur Shastri"]', 2),
-- Recent events (10)
(1, NULL, '2026 මිලාන්-කෝර්ටිනා ශීත ඔලිම්පික් උළෙලේ අවසන් උළෙල පැවැත්වුණේ කුමන ස්ථානයේද?<br>Where was the closing ceremony of the 2026 Milano Cortina Winter Olympics held?', '["මිලාන් සැන් සිරෝ ක්‍රීඩාංගණය<br>San Siro Stadium, Milan","වෙරෝනා ඇරිනාව<br>Verona Arena","කෝර්ටිනා ඩි ඇම්පෙසෝ<br>Cortina d''Ampezzo","රෝමයේ කොලොසියම<br>Colosseum, Rome"]', 1),
(1, NULL, '2026 ශීත ඔලිම්පික් පිරිමි අයිස් හොකී රන් පදක්කම් තරගයේදී කැනඩාව අතිරේක කාලයේදී 2-1 ලකුණෙන් පරාජය කළේ කුමන රටද?<br>Which country beat Canada 2-1 in overtime in the men''s ice hockey gold medal game at the 2026 Winter Olympics?', '["එක්සත් ජනපදය<br>United States","ස්වීඩනය<br>Sweden","ෆින්ලන්තය<br>Finland","චෙක් ජනරජය<br>Czech Republic"]', 0),
(1, NULL, 'Artemis II ගවේෂණය වසර 50කට වැඩි කාලයකට පසු මිනිසුන් චන්ද්‍රයා වෙත රැගෙන ගිය ගවේෂණයයි. මීට පෙර අවසන් වරට මිනිසුන් චන්ද්‍රයා වෙත ගියේ කුමන ගවේෂණයෙන්ද?<br>Artemis II carried humans toward the Moon for the first time in over 50 years. Which earlier mission was the last to take humans to the Moon?', '["Apollo 11","Apollo 13","Apollo 17","Apollo 8"]', 2),
(1, NULL, 'ඉතිහාසයේ පළමු වරට කණ්ඩායම් 48ක් සහභාගී වූ 2026 FIFA ලෝක කුසලානයේ මුළු තරග ගණන කීයද?<br>In the first-ever 48-team FIFA World Cup in 2026, how many matches were played in total?', '["64","80","96","104"]', 3),
(1, NULL, '2026 FIFA ලෝක කුසලානයේ තරුණ ක්‍රීඩක සම්මානය දිනූ, ස්පාඤ්ඤයේ ආරක්ෂක පෙළේ තරුණ ක්‍රීඩකයා කවුද?<br>Which young Spanish defender won the Young Player Award at the 2026 FIFA World Cup?', '["පෝ කුබර්සි<br>Pau Cubarsí","ලමීන් යමාල්<br>Lamine Yamal","පෙඩ්‍රි<br>Pedri","ගාවි<br>Gavi"]', 0),
(1, NULL, '2026 T20 ලෝක කුසලානයේ මුම්බායි හි පැවති අර්ධ අවසන් තරගයේදී එංගලන්තයට එරෙහිව පන්දු 42කින් ලකුණු 89ක් ලබා ඉන්දියාවේ ජයග්‍රහණයට පදනම දැමූ ක්‍රීඩකයා කවුද?<br>Which Indian batter scored 89 off 42 balls to set up India''s win over England in the 2026 T20 World Cup semi-final in Mumbai?', '["සූර්යකුමාර් යාදව්<br>Suryakumar Yadav","සංජු සැම්සන්<br>Sanju Samson","අභිෂේක් ෂර්මා<br>Abhishek Sharma","ඊෂාන් කිෂාන්<br>Ishan Kishan"]', 1),
(1, NULL, 'ලෝක බැංකු තක්සේරුවට අනුව ඩිට්වා චක්‍රවාතය නිසා ශ්‍රී ලංකාවට සිදු වූ සෘජු හානිය ආසන්න වශයෙන් ඇමරිකානු ඩොලර් බිලියන කීයද?<br>According to a World Bank assessment, roughly how much direct damage (in US$ billions) did Cyclone Ditwah cause in Sri Lanka?', '["0.4","1.3","4.1","9.8"]', 2),
(1, NULL, '2026 වසරේ නොබෙල් ත්‍යාගයක් සඳහා පිරිනැමෙන මුදල ස්වීඩන් ක්‍රෝනා මිලියන කීයක් දක්වා (පසුගිය වසරේ මිලියන 11 සිට) ඉහළ නංවා ඇත්ද?<br>To how many million Swedish kronor was the value of each full Nobel Prize raised in 2026 (up from 11 million the previous year)?', '["8","10","11","12"]', 3),
(1, NULL, '2026 රසායන විද්‍යා නොබෙල් ත්‍යාගලාභීන් වූ හෙන්රි කගාන් සහ කෙන්සෝ සොයි පිළිවෙලින් කුමන රටවල ජාතිකයන්ද?<br>Henri Kagan and Kenso Soai, the 2026 Nobel laureates in Chemistry, are nationals of which two countries respectively?', '["ප්‍රංශය සහ ජපානය<br>France and Japan","ජර්මනිය සහ එක්සත් ජනපදය<br>Germany and the United States","එක්සත් රාජධානිය සහ ජපානය<br>United Kingdom and Japan","ස්වීඩනය සහ ඩෙන්මාර්කය<br>Sweden and Denmark"]', 0),
(1, NULL, '2026 T20 ලෝක කුසලානයේදී පන්දු 33කින් නොදැවී ලකුණු 100ක් ලබා වාර්තා පොත් නැවත ලියූ නවසීලන්ත ක්‍රීඩකයා කවුද?<br>Which New Zealand batter rewrote the record books at the 2026 T20 World Cup with an unbeaten 100 off 33 balls?', '["ඩෙවන් කොන්වේ<br>Devon Conway","ග්ලෙන් පිලිප්ස්<br>Glenn Phillips","ෆින් ඇලන්<br>Finn Allen","රචින් රවීන්ද්‍ර<br>Rachin Ravindra"]', 2);-- Round 1

-- INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
-- -- 1. Sri Lankan history, culture, literature
-- (1, NULL, 'ශ්‍රී ලංකාවේ වයස අවුරුදු 21 ඉක්මවූ සියලු පුරවැසියන්ට සර්වජන ඡන්ද බලය ලබා දුන් ව්‍යවස්ථාව කුමක්ද?<br>Which constitution granted universal suffrage to all citizens of Sri Lanka over the age of 21?', '["ඩොනමෝර් ව්‍යවස්ථාව<br>Donoughmore Constitution","කෝල්බෲක්-කැමරන් ව්‍යවස්ථාව<br>Colebrooke–Cameron Constitution","මැනිං ව්‍යවස්ථාව<br>Manning Constitution","සෝල්බරි ව්‍යවස්ථාව<br>Soulbury Constitution"]', 0),
-- (1, NULL, 'ශ්‍රී ලංකා මහ බැංකුව (එවකට ලංකා මහ බැංකුව) ක්‍රියාත්මක වීමට පටන් ගත් වර්ෂය කුමක්ද?<br>In which year did the Central Bank of Sri Lanka (then the Central Bank of Ceylon) begin to operate?', '["1948","1950","1953","1956"]', 1),
-- (1, NULL, 'ශ්‍රී ලංකාව එක්සත් ජාතීන්ගේ සංවිධානයේ සාමාජිකත්වය ලබා ගත් වර්ෂය කුමක්ද?<br>In which year did Sri Lanka gain membership of the United Nations?', '["1948","1952","1955","1960"]', 2),
-- (1, NULL, 'අභයගිරි විහාරය ඉදි කරවන ලද්දේ කවර රජෙකු විසින්ද?<br>By which king was the Abhayagiri Vihara built?', '["දුටුගැමුණු රජු<br>King Dutugemunu","දේවානම්පියතිස්ස රජු<br>King Devanampiyatissa","ධාතුසේන රජු<br>King Dhatusena","වළගම්බා (වට්ටගාමිණී අභය) රජු<br>King Valagamba (Vattagamani Abhaya)"]', 3),
-- (1, NULL, '1963 දී තිරගත වූ “ගම්පෙරළිය” චිත්‍රපටය අධ්‍යක්ෂණය කළේ කවුද?<br>Who directed the film “Gamperaliya”, released in 1963?', '["ලෙස්ටර් ජේම්ස් පීරිස්<br>Lester James Peries","ටයිටස් ද සිල්වා<br>Titus de Silva","ධර්මසේන පතිරාජ<br>Dharmasena Pathiraja","සුගතපාල සෙනරත් යාපා<br>Sugathapala Senerath Yapa"]', 0),
-- -- 2. Sri Lankan geography and sport
-- (1, NULL, '2010 වර්ෂයේදී යුනෙස්කෝව විසින් ලෝක උරුමයක් ලෙස නම් කරන ලද ශ්‍රී ලංකාවේ ස්ථානය කුමක්ද?<br>Which place in Sri Lanka was designated a World Heritage Site by UNESCO in 2010?', '["ගාලු කොටුව<br>Galle Fort","දඹුල්ල ගුහා විහාරය<br>Dambulla Cave Temple","ශ්‍රී ලංකාවේ මධ්‍යම කඳුකරය<br>Central Highlands of Sri Lanka","සිංහරාජ වනාන්තරය<br>Sinharaja Forest"]', 2),
-- (1, NULL, 'ශ්‍රී ලංකාවේ උසම කඳු මුදුන කුමක්ද?<br>What is the highest mountain peak in Sri Lanka?', '["කිරිගල්පොත්ත<br>Kirigalpotta","තොටපොළකන්ද<br>Thotapolakanda","පිදුරුතලාගල<br>Pidurutalagala","ශ්‍රී පාද (සමනළ) කන්ද<br>Sri Pada (Samanala) Mountain"]', 2),
-- (1, NULL, 'ශ්‍රී ලංකාවේ උසම දිය ඇල්ල කුමක්ද?<br>What is the tallest waterfall in Sri Lanka?', '["දියලුම ඇල්ල<br>Diyaluma Falls","බඹරකන්ද ඇල්ල<br>Bambarakanda Falls","රාවණා ඇල්ල<br>Ravana Falls","බොපත් ඇල්ල<br>Bopath Falls"]', 1),
-- (1, NULL, 'ශ්‍රී ලංකාව (එවකට ලංකාව) ඔලිම්පික් ක්‍රීඩා උළෙලකින් පළමු පදක්කම දිනාගත් වර්ෂය කුමක්ද?<br>In which year did Sri Lanka (then Ceylon) win its first medal at an Olympic Games?', '["1952","1956","2000","1948"]', 3),
-- -- 3. Recent events (2025-2026)
-- (1, NULL, '2025 රසායන විද්‍යා නොබෙල් ත්‍යාගය පිරිනමනු ලැබුවේ කුමක් සඳහාද?<br>For what was the 2025 Nobel Prize in Chemistry awarded?', '["කෘත්‍රිම බුද්ධිය මගින් ප්‍රෝටීන ව්‍යුහ පුරෝකථනය<br>Predicting protein structures using artificial intelligence","CRISPR ජාන සංස්කරණ ක්‍රමය<br>The CRISPR gene-editing method","ලිතියම්-අයන බැටරි සංවර්ධනය<br>The development of lithium-ion batteries","ලෝහ-කාබනික රාමු සංවර්ධනය<br>The development of metal–organic frameworks"]', 3),
-- (1, NULL, '2025 නොබෙල් සාම ත්‍යාගය ලැබුවේ කවුද?<br>Who received the 2025 Nobel Peace Prize?', '["මරියා කොරිනා මචාඩෝ<br>María Corina Machado","ග්‍රේටා තන්බර්ග්<br>Greta Thunberg","මලාලා යූසෆ්සායි<br>Malala Yousafzai","ආබී අහමඩ්<br>Abiy Ahmed"]', 0),
-- (1, NULL, '2026 ICC පිරිමි T20 ලෝක කුසලානය ශ්‍රී ලංකාව සමඟ ඉන්දියාව සම-සංවිධානය කළේය. එහි අවසන් තරගයේදී ඉන්දියාවෙන් පරාජය වූයේ කුමන කණ්ඩායමද?<br>The 2026 ICC Men''s T20 World Cup was co-hosted by India together with Sri Lanka. Which team was defeated by India in its final?', '["නවසීලන්තය<br>New Zealand","ඒංගලන්තය<br>England","දකුණු අප්‍රිකාව<br>South Africa","පාකිස්ථානය<br>Pakistan"]', 0),
-- -- 4. A/L-level science
-- (1, NULL, 'ප්‍රභාසංස්ලේෂණයේ ආලෝක ප්‍රතික්‍රියා සිදු වන්නේ ක්ලෝරොප්ලාස්ට් (හරිත ප්ලාස්ටිඩ) තුළ කුමන කොටසේද?<br>In photosynthesis, in which part of the chloroplast (green plastid) do the light reactions take place?', '["ස්ට්‍රෝමාව<br>Stroma","බාහිර පටලය<br>Outer membrane","අන්තර් පටල අවකාශය<br>Intermembrane space","තයිලකොයිඩ පටල<br>Thylakoid membranes"]', 3),
-- (1, NULL, 'මිනිස් හදවතේ ස්වාභාවික ස්පන්දන සාධකය (pacemaker) ලෙස ක්‍රියා කරන්නේ කුමක්ද?<br>What acts as the natural pacemaker of the human heart?', '["SA node","AV node","පර්කින්ජ් තන්තු<br>Purkinje fibres","හිස් කලාපය<br>Bundle of His"]', 0),
-- (1, NULL, 'සෞඛ්‍ය සම්පන්න වැඩිහිටියෙකුගේ රුධිරයේ pH අගය ආසන්න වශයෙන් කොපමණද?<br>What is the approximate pH of the blood of a healthy adult?', '["6.4","7.4","7.0","8.4"]', 1),
-- (1, NULL, 'ආවර්තිතා වගුවේ ඇති සියලු මූලද්‍රව්‍ය අතරින් විද්‍යුත් ඍණතාව (electronegativity) වැඩිම මූලද්‍රව්‍යය කුමක්ද?<br>Of all the elements in the periodic table, which has the highest electronegativity?', '["ෆ්ලුවොරීන්<br>Fluorine","ඔක්සිජන්<br>Oxygen","ක්ලෝරීන්<br>Chlorine","නයිට්‍රජන්<br>Nitrogen"]', 0),
-- (1, NULL, 'ටෙස්ලා (T) ඒකකයෙන් මනිනු ලබන්නේ කුමක්ද?<br>What is measured in the unit tesla (T)?', '["විද්‍යුත් ක්ෂේත්‍ර ප්‍රබලතාව<br>Electric field strength","ප්‍රේරකතාව<br>Inductance","චුම්බක ස්‍රාව ඝනත්වය<br>Magnetic flux density","ධාරිතාව<br>Capacitance"]', 2),
-- -- 6. World arts and literature
-- (1, NULL, '“කරමසොව් සහෝදරයෝ” (The Brothers Karamazov) නවකතාවේ කතුවරයා කවුද?<br>Who is the author of the novel “The Brothers Karamazov”?', '["ලියෝ ටෝල්ස්ටෝයි<br>Leo Tolstoy","ෆියෝඩර් දොස්තයෙව්ස්කි<br>Fyodor Dostoevsky","ඇන්ටන් චෙකොව්<br>Anton Chekhov","ඇලෙක්සැන්ඩර් පුෂ්කින්<br>Alexander Pushkin"]', 1),
-- -- 7. ICT
-- (1, NULL, 'IPv4 ලිපිනයක් සමන්විත වන්නේ බිටු (bits) කීයකින්ද?<br>How many bits does an IPv4 address consist of?', '["16","64","32","128"]', 2),
-- -- 8. Geography and environment
-- (1, NULL, 'සමුද්‍රයකට ප්‍රවේශයක් නොමැති (ගොඩබිම වටවූ) රටවලින් පමණක් වට වී ඇති “ද්විත්ව ගොඩබිම වටවූ” රටක් වන්නේ පහත සඳහන් කුමන රටද?<br>Which of the following countries is a “doubly landlocked” country, surrounded only by landlocked countries (countries with no access to a sea)?', '["බොලීවියාව<br>Bolivia","මොන්ගෝලියාව<br>Mongolia","ස්විට්සර්ලන්තය<br>Switzerland","උස්බෙකිස්තානය<br>Uzbekistan"]', 3);-- Ensure subjects exist in the lookup table to prevent NULL subject_id
-- INSERT IGNORE INTO subjects (name) VALUES 
-- ('Biology'), ('Physics'), ('ICT'), ('Business Studies'), ('Media Studies'), ('Geography');

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
(2, @s, 'ලෝහ තහඩුවක් නිශ්චිත සංඛ්‍යාතයකින් යුත් ආලෝකයකින් ආලෝකමත් කරනු ලැබේ. තහඩුවෙන් ඉලෙක්ට්‍රෝන විමෝචනය වේද නොවේද යන්න තීරණය කරන්නේ පහත සඳහන් කුමක් මගින්ද?<br>A metal plate is illuminated with light of a certain frequency. Which of the following determines whether electrons are emitted or not from the plate?', '["ආලෝකයේ තීව්‍රතාවය<br>The intensity of the light","තහඩුව ආලෝකයට නිරාවරණය වන කාලය<br>Time of exposure of the plate to the light","තහඩුව සාදා ඇති ද්‍රව්‍යයේ තාප සන්නායකතාව<br>The thermal conductivity of the material of the plate","තහඩුවේ වර්ගඵලය<br>The area of the plate","තහඩුව සාදා ඇති ද්‍රව්‍යය<br>The material of which the plate is made"]', 4),
(2, @s, 'නිශ්චිත ප්‍රකාශ කැතෝඩයක් මත පතිත වන නිල් සහ රතු ආලෝකය ප්‍රකාශ ඉලෙක්ට්‍රෝන ජනනය කරයි. පහත සඳහන් ප්‍රකාශ අතුරින් සත්‍ය වන්නේ කුමක්ද?<br>Blue and red light falling on a certain photocathode produce photoelectrons. Which of the following statements is true?', '["විමෝචනය වන ප්‍රකාශ ඉලෙක්ට්‍රෝනවල උපරිම චාලක ශක්තිය නිල් ආලෝකය සඳහා වැඩිය.<br>Maximum kinetic energy of the emitted photoelectrons is higher for blue light.","නැවතුම් විභවය රතු ආලෝකය සඳහා වැඩිය.<br>Stopping potential is higher for red light.","ප්‍රකාශ කැතෝඩයේ ද්‍රව්‍යයේ කාර්ය ශ්‍රිතය නිල් ආලෝකය සඳහා වැඩිය.<br>Work function of the material of the photocathode is higher for blue light.","විමෝචනය වන ප්‍රකාශ ඉලෙක්ට්‍රෝන ගණන සැමවිටම නිල් ආලෝකය සඳහා වැඩිය.<br>Number of emitting photoelectrons is always higher for blue light.","නැවතුම් විභවය වර්ණ දෙකටම සමාන වේ.<br>Stopping potential is same for both colours."]', 0),
(2, @s, 'ඒකාකාර චුම්බක ක්ෂේත්‍රයක ගමන් කරන කම්බියක දිග දිගේ වි.ගා.බ. ප්‍රේරණය වේ. මෙම වි.ගා.බ. පහත සඳහන් කුමක් මත රඳා නොපවතීද?<br>An e.m.f. is induced across the length of a wire when it is moving in a uniform magnetic field. This e.m.f. does not depend on', '["කම්බියේ ප්‍රවේගය<br>Velocity of the wire","කම්බියේ අරය<br>Radius of the wire","කම්බියේ දිග<br>Length of the wire","චුම්බක ක්ෂේත්‍රයේ ස්‍රාව ඝනත්වය<br>Flux density of the magnetic field","කම්බිය චුම්බක ක්ෂේත්‍රය සමඟ සාදන කෝණය<br>The angle that the wire makes with the magnetic field"]', 1),
(2, @s, 'සරල අනුවර්තී චලිතයක යෙදී සිටින වස්තුවක් සඳහා<br>For an object undergoing simple harmonic motion', '["විස්ථාපනය උපරිම වන විට ත්වරණයේ විශාලත්වය උපරිම වේ.<br>The magnitude of the acceleration is maximum when the displacement is maximum.","වේගය උපරිම වන විට විස්ථාපනය උපරිම වේ.<br>The displacement is maximum when the speed is maximum.","වේගය උපරිම වන විට ත්වරණයේ විශාලත්වය උපරිම වේ.<br>The magnitude of the acceleration is maximum when the speed is maximum.","උපරිම විභව ශක්තිය උපරිම චාලක ශක්තියට වඩා වැඩිය.<br>The maximum potential energy is greater than the maximum kinetic energy.","ත්වරණය සැමවිටම නියත වේ.<br>The acceleration is always constant."]', 0);
-- ICT

SET @s = (SELECT id FROM subjects WHERE name = 'ICT' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'ප්‍රමාණය අනුව වඩාත්ම ප්‍රබල පරිගණකය කුමක්ද?<br>By size, which is the most powerful type of computer?', '["Micro computer (ක්ෂුද්‍ර)","Mini computer (මිනි)","Mainframe (මේන්ෆ්‍රේම්)","Super computer (සුපිරි)"]', 3),
(2, @s, 'සෘජු ආදාන උපාංගයක් කුමක්ද?<br>Which of these is a direct entry input device?', '["Keyboard (යතුරු පුවරුව)","Barcode reader (බාර්කෝඩ් කියවනය)","Plotter (ප්ලොටරය)","Speaker (ස්පීකරය)"]', 1),
(2, @s, 'ගබඩා කළ වැඩසටහන් සංකල්පය යනු කුමක්ද?<br>What does the stored program concept mean?', '["Programs are stored only on the hard disk (දෘඪ තැටියේ පමණි)","Instructions and data are stored together in memory (උපදෙස් සහ දත්ත මතකයේ එකට ගබඩා වේ)","Programs are stored in the ALU (ALU එකේ)","Programs are stored in the monitor (මොනිටරයේ)"]', 1),
(2, @s, 'වාෂ්පශීලී (volatile) මතකය කුමක්ද?<br>Which of these is volatile memory?', '["ROM","EEPROM","RAM","Flash memory (ෆ්ලෑෂ් මතකය)"]', 2);


-- Business Studies
SET @s = (SELECT id FROM subjects WHERE name = 'Business Studies' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'රොක්ස් ව්‍යාපාරයේ මුදල් පොතේ (Cash Book) බැංකු තීරුවේ ශේෂයට වඩා බැංකු ප්‍රකාශනයේ (Bank Statement) ශේෂය වෙනස් වීමට පහත සඳහන් කාරණා අතරින් බලපාන්නේ කුමක්ද?<br>Which of the following factors causes a difference between the bank column balance in the Cash Book and the balance in the Bank Statement of Rox Business?', '["නිකුත් කළ නමුත් බැංකුවට ඉදිරිපත් නොකළ චෙක්පත්<br>Cheques issued but not presented to the bank","තැන්පත් කළ නමුත් බැංකුව විසින් තවම එකතු කර නොමැති චෙක්පත්<br>Cheques deposited but not yet realized by the bank","බැංකුව විසින් අය කරන ලද ගාස්තු<br>Bank charges","ඉහත සියල්ලම<br>All of the above"]', 3),
(2, @s, '"ව්‍යාපාරයක ආදායම් උපයා ගැනීමට වැය වූ වියදම්, එම ආදායම හඳුනාගන්නා කාලච්ඡේදයේදීම හඳුනාගත යුතුය" යන්නෙන් අදහස් වන ගිණුම්කරණ සංකල්පය කුමක්ද?<br>"Expenses incurred in earning the revenue of a business must be recognized in the same period in which the revenue is recognized." Which accounting concept refers to this?', '["අඛණ්ඩ පැවැත්මේ සංකල්පය<br>Going Concern Concept","ගැලපුම් සංකල්පය<br>Matching Concept","ආරක්ෂන සංකල්පය<br>Prudence Concept","ඓතිහාසික පිරිවැය සංකල්පය<br>Historical Cost Concept"]', 1),
(2, @s, 'ව්‍යාපාර විකාශනයේ පළමු අදියර ලෙස සැලකෙන්නේ කුමක්ද?<br>Which of the following is considered the first stage in the evolution of business?', '["මුදල් භාවිතය<br>Use of money","භාණ්ඩ හුවමාරු ක්‍රමය<br>Barter system","කාර්මික විප්ලවය<br>Industrial revolution","තොරතුරු ආර්ථිකය<br>Information economy"]', 1),
(2, @s, 'ව්‍යාපාරයක අත්‍යවශ්‍ය ගති ලක්ෂණයක් නොවන්නේ කුමක්ද?<br>Which of the following is NOT an essential characteristic of a business?', '["විකුණුම් හෝ හුවමාරු වීම් සිදු වීම<br>Occurrence of sales or exchanges","ගනුදෙනු එක් වරක් පමණක් සිදු වීම<br>Transactions taking place only once","ලාභයෙන් හෝ ප්‍රතිලාභයෙන් අභිප්‍රේරණය වීම<br>Motivation by profit or benefits","අවදානමක් තිබීම<br>Presence of risk"]', 1);

-- Media Studies
SET @s = (SELECT id FROM subjects WHERE name = 'Media Studies' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'මාධ්‍ය හරහා විදේශීය සංස්කෘතියක් පැමිණීමෙන් සමාජයක් අන්දමන්ද වීම හඳුන්වන්නේ කුමක්ද?<br>When a society is overwhelmed by the arrival of a foreign culture through media, this is called what?', '["සංස්කෘතික හුවමාරුව<br>Cultural exchange","සංස්කෘතික කම්පනය<br>Culture shock","ජන නැටුම<br>Folk dance","පුරවැසිභාවය<br>Citizenship"]', 1),
(2, @s, 'පුද්ගලයන් දෙදෙනෙකු අතර සිදුවන සන්නිවේදනය හඳුන්වන්නේ කුමක්ද?<br>Communication between two people is called what?', '["අන්තර් පුද්ගල තුළ සන්නිවේදනය<br>Intrapersonal communication","අන්තර් පුද්ගල සන්නිවේදනය<br>Interpersonal communication","කණ්ඩායම් සන්නිවේදනය<br>Group communication","ජන සන්නිවේදනය<br>Mass communication"]', 1);
-- Geography
SET @s = (SELECT id FROM subjects WHERE name = 'Geography' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'අවසාදිත ශිලා සෑදෙන්නේ කුමන ක්‍රියාවලියෙන්ද?<br>Which process forms sedimentary rocks?', '["ලාවා සිසිල් වීම<br>Cooling of lava","අවසාදිත තැන්පත් වී සම්පීඩනය වීම<br>Accumulation and compaction of sediments","තාපය සහ පීඩනය පමණක්<br>Heat and pressure only","ගිනි කඳු විස්ඵෝටනය<br>Volcanic eruption"]', 1),
(2, @s, 'ත්‍රිකුණාමල දිස්ත්‍රික්කයේ පුල්මෝට්ටේ කැණීම් කරන ඛනිජය කුමක්ද?<br>Which mineral is mined at Pulmoddai in Trincomalee district?', '["රන්<br>Gold","ඉල්මනයිට්<br>Ilmenite","ගල් අඟුරු<br>Coal","බොක්සයිට්<br>Bauxite"]', 1);

-- Round 3: Rapid Fire

INSERT INTO questions(rnd, subject_id, text, answer_text) VALUES
(3, NULL, 'ලෝකයේ දිගම ගඟ කුමක්ද?', 'නයිල් ගඟ'),
(3, NULL, 'කැනඩාවේ අගනුවර කුමක්ද?', 'ඔටාවා'),
(3, NULL, 'බ්‍රසීලයේ අගනුවර කුමක්ද?', 'බ්‍රසීලියා'),
(3, NULL, 'සෞරග්‍රහ මණ්ඩලයේ විශාලතම ග්‍රහයා කුමක්ද?', 'ගුරු'),
(3, NULL, 'සූර්යයා වටා ගමන් කරන ග්‍රහයන් කීයද?', '8'),
(3, NULL, 'ශ්වසනයේදී මිනිසා පිටකරන ප්‍රධාන වායුව කුමක්ද?', 'කාබන්ඩයොක්සයිඩ්'),
(3, NULL, 'විටමින් C ඌනතාවයෙන් ඇතිවන රෝගය කුමක්ද?', 'ස්කර්වි'),
(3, NULL, 'වැඩිහිටි මිනිස් සිරුරේ ඇටකටු කීයද?', '206'),
(3, NULL, 'ගොඩබිම වේගවත්ම සතා කවුද?', 'චීටා'),
(3, NULL, 'සෝඩියම්වල රසායනික සංකේතය කුමක්ද?', 'Na'),
(3, NULL, 'pH අගය 7 වන ද්‍රාවණයක ස්වභාවය කුමක්ද?', 'උදාසීන'),
(3, NULL, 'ශබ්ද තීව්‍රතාව මනින ඒකකය කුමක්ද?', 'ඩෙසිබල්'),
(3, NULL, '2 හි 10 වන බලය කීයද?', '1024'),
(3, NULL, 'වෘත්තයක විෂ්කම්භය අරය මෙන් කී ගුණයක්ද?', '2'),
(3, NULL, 'සෘජුකෝණාස්‍රයක ඇති සමමිතික අක්ෂ ගණන කීයද?', '2'),
(3, NULL, 'ශ්‍රී ලංකාවේ පළමු අගමැතිනිය කවුද?', 'සිරිමාවෝ බණ්ඩාරනායක'),
(3, NULL, 'ශ්‍රී ලංකාවේ පළමු රජු ලෙස සැලකෙන්නේ කවුද?', 'විජය'),
(3, NULL, 'රුවන්වැලි මහා සෑය ඇරඹූ රජතුමා කවුද?', 'දුටුගැමුණු'),
(3, NULL, 'ශ්‍රී පාදයේ අනෙක් නම කුමක්ද?', 'සමනළ කන්ද'),
(3, NULL, 'ශ්‍රී ලංකාවේ දිස්ත්‍රික්ක ගණන කීයද?', '25'),
(3, NULL, 'ශ්‍රී ලංකාවේ පළාත් ගණන කීයද?', '9'),
(3, NULL, 'ශ්‍රී ලංකාවේ ජාතික ගීතයේ පද රචකයා කවුද?', 'ආනන්ද සමරකෝන්'),
(3, NULL, 'ශ්‍රී ලංකාවේ ජාතික කුරුල්ලා කවුද?', 'වන කුකුළා'),
(3, NULL, 'HTML හි සම්පූර්ණ නම කුමක්ද?', 'Hyper Text Markup Language'),
(3, NULL, 'USB හි සම්පූර්ණ නම කුමක්ද?', 'Universal Serial Bus'),
(3, NULL, 'ඔලිම්පික් උත්සවය පැවැත්වෙන්නේ වසර කීයකට වරක්ද?', '4'),
(3, NULL, 'ක්‍රිකට් ඕවරයක පන්දු කීයද?', '6'),
(3, NULL, '2024 ඔලිම්පික් උත්සවය පැවති නගරය කුමක්ද?', 'පැරිස්'),
(3, NULL, 'ලෝකයේ විශාලතම මහාද්වීපය කුමක්ද?', 'ආසියාව'),
(3, NULL, 'ලෝකයේ උසම ජල ඇල්ල කුමක්ද?', 'ඒන්ජල් ඇල්ල');

-- INSERT INTO questions(rnd, subject_id, text, answer_text) VALUES
-- (3, NULL, 'ලෝකයේ දිගම ගඟ කුමක්ද?<br>What is the longest river in the world?', 'නයිල් ගඟ<br>Nile'),
-- (3, NULL, 'කැනඩාවේ අගනුවර කුමක්ද?<br>What is the capital of Canada?', 'ඔටාවා<br>Ottawa'),
-- (3, NULL, 'බ්‍රසීලයේ අගනුවර කුමක්ද?<br>What is the capital of Brazil?', 'බ්‍රසීලියා<br>Brasília'),
-- (3, NULL, 'සෞරග්‍රහ මණ්ඩලයේ විශාලතම ග්‍රහයා කුමක්ද?<br>What is the largest planet in the solar system?', 'ගුරු<br>Jupiter'),
-- (3, NULL, 'සූර්යයා වටා ගමන් කරන ග්‍රහයන් කීයද?<br>How many planets orbit the Sun?', '8'),
-- (3, NULL, 'ශ්වසනයේදී මිනිසා පිටකරන ප්‍රධාන වායුව කුමක්ද?<br>Which main gas do humans exhale?', 'කාබන්ඩයොක්සයිඩ්<br>Carbon dioxide'),
-- (3, NULL, 'විටමින් C ඌනතාවයෙන් ඇතිවන රෝගය කුමක්ද?<br>Which disease is caused by vitamin C deficiency?', 'ස්කර්වි<br>Scurvy'),
-- (3, NULL, 'වැඩිහිටි මිනිස් සිරුරේ ඇටකටු කීයද?<br>How many bones are in an adult human body?', '206'),
-- (3, NULL, 'ගොඩබිම වේගවත්ම සතා කවුද?<br>What is the fastest land animal?', 'චීටා<br>Cheetah'),
-- (3, NULL, 'සෝඩියම්වල රසායනික සංකේතය කුමක්ද?<br>What is the chemical symbol for sodium?', 'Na'),
-- (3, NULL, 'pH අගය 7 වන ද්‍රාවණයක ස්වභාවය කුමක්ද?<br>What is the nature of a solution with pH 7?', 'උදාසීන<br>Neutral'),
-- (3, NULL, 'ශබ්ද තීව්‍රතාව මනින ඒකකය කුමක්ද?<br>What unit measures sound intensity?', 'ඩෙසිබල්<br>Decibel'),
-- (3, NULL, '2 හි 10 වන බලය කීයද?<br>What is 2 to the power of 10?', '1024'),
-- (3, NULL, 'වෘත්තයක විෂ්කම්භය අරය මෙන් කී ගුණයක්ද?<br>The diameter of a circle is how many times its radius?', '2'),
-- (3, NULL, 'සෘජුකෝණාස්‍රයක ඇති සමමිතික අක්ෂ ගණන කීයද?<br>How many lines of symmetry does a rectangle have?', '2'),
-- (3, NULL, 'ශ්‍රී ලංකාවේ පළමු අගමැතිනිය කවුද?<br>Who was Sri Lanka''s first female prime minister?', 'සිරිමාවෝ බණ්ඩාරනායක<br>Sirimavo Bandaranaike'),
-- (3, NULL, 'ශ්‍රී ලංකාවේ පළමු රජු ලෙස සැලකෙන්නේ කවුද?<br>Who is regarded as the first king of Sri Lanka?', 'විජය<br>Vijaya'),
-- (3, NULL, 'රුවන්වැලි මහා සෑය ඇරඹූ රජතුමා කවුද?<br>Which king began building the Ruwanwelisaya?', 'දුටුගැමුණු<br>Dutugemunu'),
-- (3, NULL, 'ශ්‍රී පාදයේ අනෙක් නම කුමක්ද?<br>What is another name for Sri Pada?', 'සමනළ කන්ද<br>Adam''s Peak'),
-- (3, NULL, 'ශ්‍රී ලංකාවේ දිස්ත්‍රික්ක ගණන කීයද?<br>How many districts are in Sri Lanka?', '25'),
-- (3, NULL, 'ශ්‍රී ලංකාවේ පළාත් ගණන කීයද?<br>How many provinces are in Sri Lanka?', '9'),
-- (3, NULL, 'ශ්‍රී ලංකාවේ ජාතික ගීතයේ පද රචකයා කවුද?<br>Who wrote the lyrics of the Sri Lankan national anthem?', 'ආනන්ද සමරකෝන්<br>Ananda Samarakoon'),
-- (3, NULL, 'ශ්‍රී ලංකාවේ ජාතික කුරුල්ලා කවුද?<br>What is Sri Lanka''s national bird?', 'වන කුකුළා<br>Sri Lanka Junglefowl'),
-- (3, NULL, 'HTML හි සම්පූර්ණ නම කුමක්ද?<br>What is the full form of HTML?', 'Hyper Text Markup Language'),
-- (3, NULL, 'USB හි සම්පූර්ණ නම කුමක්ද?<br>What is the full form of USB?', 'Universal Serial Bus'),
-- (3, NULL, 'ඔලිම්පික් උත්සවය පැවැත්වෙන්නේ වසර කීයකට වරක්ද?<br>How often are the Olympics held (in years)?', '4'),
-- (3, NULL, 'ක්‍රිකට් ඕවරයක පන්දු කීයද?<br>How many balls are in a cricket over?', '6'),
-- (3, NULL, '2024 ඔලිම්පික් උත්සවය පැවති නගරය කුමක්ද?<br>Which city hosted the 2024 Olympics?', 'පැරිස්<br>Paris'),
-- (3, NULL, 'ලෝකයේ විශාලතම මහාද්වීපය කුමක්ද?<br>What is the largest continent in the world?', 'ආසියාව<br>Asia'),
-- (3, NULL, 'ලෝකයේ උසම ජල ඇල්ල කුමක්ද?<br>What is the tallest waterfall in the world?', 'ඒන්ජල් ඇල්ල<br>Angel Falls');