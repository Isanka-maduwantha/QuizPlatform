USE mindspark;
SET NAMES utf8mb4;

TRUNCATE TABLE questions;
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
-- History of Sri Lanka (10)
(1, NULL, 'ක්‍රි.ව. 5 වන සියවසේදී අනුරාධපුරයෙන් අගනුවර සීගිරියට ගෙන ගිය රජු කවුද?<br>Which king moved the capital from Anuradhapura to Sigiriya in the 5th century AD?', '["ධාතුසේන<br>Dhatusena","පළමුවන කාශ්‍යප<br>Kashyapa I","පළමුවන මොග්ගල්ලාන<br>Moggallana I","මහාසේන<br>Mahasena"]', 1),
(1, NULL, 'ක්‍රි.ව. 5 වන සියවසේ මුල් භාගයේදී ලංකාවට පැමිණ අභයගිරි විහාරයේ රැඳී සිට බෞද්ධ ග්‍රන්ථ රැගෙන ගිය චීන භික්ෂුව කවුද?<br>Which Chinese Buddhist monk visited Sri Lanka in the early 5th century, stayed at the Abhayagiri monastery and collected Buddhist texts?', '["ෆා හියන්<br>Faxian","ශුවාන්සාං<br>Xuanzang","ඊජිං<br>Yijing","බොධිධර්ම<br>Bodhidharma"]', 0),
(1, NULL, '1505 දී ලංකාවට පැමිණි පළමු පෘතුගීසි නාවිකයා ලෙස සැලකෙන්නේ කවුද?<br>Who is regarded as the first Portuguese navigator to reach Sri Lanka, in 1505?', '["වස්කෝ ද ගාමා<br>Vasco da Gama","අෆොන්සෝ ඩි අල්බකර්ක්<br>Afonso de Albuquerque","පේඩ්‍රෝ අල්වාරෙස් කබ්‍රාල්<br>Pedro Álvares Cabral","ලොරෙන්සෝ ද අල්මේදා<br>Lourenço de Almeida"]', 3),
(1, NULL, '1638 ගන්නෝරුව සටනේදී දෙවන රාජසිංහ රජුගේ හමුදාවෙන් පරාජයට පත් වූ පෘතුගීසි සෙනෙවියා කවුද?<br>Which Portuguese commander was defeated by the forces of Rajasinghe II at the Battle of Gannoruwa in 1638?', '["කොන්ස්ටන්ටිනෝ ද සා<br>Constantino de Sá","පේඩ්‍රෝ ලෝපෙස් ද සූසා<br>Pedro Lopes de Sousa","ඩියෝගෝ ද මෙලෝ ද කැස්ට්‍රෝ<br>Diogo de Melo de Castro","ජෙරෝනිමෝ ද අසවේඩෝ<br>Jerónimo de Azevedo"]', 2),
(1, NULL, 'දිගු වැටලීමකින් පසු ලන්දේසීන් කොළඹ බලකොටුව අල්ලා ගත් වර්ෂය කුමක්ද?<br>In which year did the Dutch capture the Colombo fort from the Portuguese after a long siege?', '["1638","1656","1658","1796"]', 1),
(1, NULL, '1815 උඩරට ගිවිසුමට අත්සන් කරන විට ලංකාවේ බ්‍රිතාන්‍ය ආණ්ඩුකාරවරයා කවුද?<br>Who was the British Governor of Ceylon at the time of the signing of the Kandyan Convention in 1815?', '["ෆ්‍රෙඩ්රික් නෝර්ත්<br>Frederick North","තෝමස් මේටලන්ඩ්<br>Thomas Maitland","රොබර්ට් බ්‍රවුන්රිග්<br>Robert Brownrigg","එඩ්වර්ඩ් බාන්ස්<br>Edward Barnes"]', 2),
(1, NULL, '1833 දී ලංකාවේ පරිපාලනය එක්සත් කර, ව්‍යවස්ථාදායක සභාවක් ඇති කිරීමට හේතු වූ ප්‍රතිසංස්කරණ කුමක්ද?<br>Which reforms of 1833 unified the administration of Ceylon and created a Legislative Council?', '["කෝල්බෲක්–කැමරන් ප්‍රතිසංස්කරණ<br>Colebrooke–Cameron reforms","ඩොනමෝර් ප්‍රතිසංස්කරණ<br>Donoughmore reforms","මැනිං ප්‍රතිසංස්කරණ<br>Manning reforms","ක්‍රෙව්–මැක්කැලම් ප්‍රතිසංස්කරණ<br>Crewe–McCallum reforms"]', 0),
(1, NULL, 'ශ්‍රී ලංකාවට එක්සත් ජාතීන්ගේ සංවිධානයේ සාමාජිකත්වය ලැබුණේ කුමන වර්ෂයේද?<br>In which year did Sri Lanka become a member of the United Nations?', '["1948","1952","1955","1960"]', 2),
(1, NULL, '1945 දී නොමිලේ අධ්‍යාපනය හඳුන්වා දීමට නායකත්වය දුන් ''නොමිලේ අධ්‍යාපනයේ පියා'' ලෙස හැඳින්වෙන්නේ කවුද?<br>Who is known as the ''Father of Free Education'' for leading the introduction of free education in 1945?', '["ඩී. බී. ජයතිලක<br>D. B. Jayatilaka","ඒ. ඊ. ගුණසිංහ<br>A. E. Goonesinha","ඩී. එස්. සේනානායක<br>D. S. Senanayake","සී. ඩබ්ලිව්. ඩබ්ලිව්. කන්නන්ගර<br>C. W. W. Kannangara"]', 3),
(1, NULL, '1017 දී පස්වන මහින්ද රජු අල්ලා ගෙන ඉන්දියාවට රැගෙන ගිය චෝල රජු කවුද?<br>Which Chola king captured King Mahinda V in 1017 and took him to India?', '["පළමුවන රාජරාජ<br>Rajaraja I","පළමුවන රාජේන්ද්‍ර<br>Rajendra I","පළමුවන පරාන්තක<br>Parantaka I","පළමුවන කුලෝත්තුංග<br>Kulottunga I"]', 1),
-- Recent events (10)
(1, NULL, '2025 මැයි මාසයේ පාප් වහන්සේ ලෙස තේරී පත් වූ රොබට් ප්‍රිවෝස්ට් කාදිනල්තුමා තෝරාගත් නාමය කුමක්ද?<br>What papal name did Cardinal Robert Prevost, elected pope in May 2025, choose?', '["XIII පියස්<br>Pius XIII","XIV ලියෝ<br>Leo XIV","III ජෝන් පෝල්<br>John Paul III","II ෆ්‍රාන්සිස්<br>Francis II"]', 1),
(1, NULL, '2025 නොබෙල් සාම ත්‍යාගය දිනූ මරියා කොරීනා මචාඩෝ කුමන රටේ විපක්ෂ නායිකාවද?<br>Maria Corina Machado, winner of the 2025 Nobel Peace Prize, is an opposition leader in which country?', '["කොලොම්බියාව<br>Colombia","වෙනිසියුලාව<br>Venezuela","නිකරගුවාව<br>Nicaragua","කියුබාව<br>Cuba"]', 1),
(1, NULL, '2025 නොබෙල් සාහිත්‍ය ත්‍යාගය දිනූ ලාස්ලෝ ක්‍රස්නහෝර්කායි කුමන රටේ ලේඛකයෙක්ද?<br>Laszlo Krasznahorkai, winner of the 2025 Nobel Prize in Literature, is a writer from which country?', '["පෝලන්තය<br>Poland","චෙක් ජනරජය<br>Czech Republic","හංගේරියාව<br>Hungary","රුමේනියාව<br>Romania"]', 2),
(1, NULL, '2025 භෞතික විද්‍යා නොබෙල් ත්‍යාගය ක්ලාක්, ඩෙවෝරෙට් සහ මාටිනිස් වෙත හිමි වූයේ කුමන සොයා ගැනීම සඳහාද?<br>The 2025 Nobel Prize in Physics, awarded to Clarke, Devoret and Martinis, was for the discovery of what?', '["විද්‍යුත් පරිපථයක සාර්ව ක්වොන්ටම් ටනලීකරණය<br>Macroscopic quantum tunnelling in an electric circuit","ගුරුත්වාකර්ෂණ තරංග<br>Gravitational waves","හිග්ස් බෝසෝනය<br>The Higgs boson","ග්‍රැෆීන්<br>Graphene"]', 0),
(1, NULL, '2025 ඔක්තෝබර් මාසයේ ජපානයේ පළමු කාන්තා අගමැතිනිය බවට පත් වූයේ කවුද?<br>Who became Japan''s first woman prime minister in October 2025?', '["යුරිකෝ කොයිකේ<br>Yuriko Koike","සනාඑ ටකායිචි<br>Sanae Takaichi","සෙයිකෝ හෂිමෝටෝ<br>Seiko Hashimoto","යෝකෝ කමිකවා<br>Yoko Kamikawa"]', 1),
(1, NULL, '2025 මාර්තු මාසයේ දුබායි හිදී පැවති ICC චැම්පියන්ස් ට්‍රොෆි අවසන් මහා තරගයේදී ඉන්දියාව පරාජය කළේ කුමන කණ්ඩායමද?<br>Which team did India beat in the ICC Champions Trophy final in Dubai in March 2025?', '["ඕස්ට්‍රේලියාව<br>Australia","දකුණු අප්‍රිකාව<br>South Africa","නවසීලන්තය<br>New Zealand","පාකිස්ථානය<br>Pakistan"]', 2),
(1, NULL, '2025 මියුනිච් හිදී පැවති UEFA චැම්පියන්ස් ලීග් අවසන් මහා තරගයේදී පැරිස් සෙන්ට් ජර්මේන් (PSG) කණ්ඩායම ඉන්ටර් මිලාන් පරදවා පළමු වරට කුසලානය දිනූ ලකුණු පරතරය කුමක්ද?<br>In the 2025 UEFA Champions League final in Munich, PSG won their first title by what scoreline against Inter Milan?', '["5-0","3-0","4-1","3-1"]', 0),
(1, NULL, '2025 ජූනි මාසයේ Axiom-4 ගවේෂණය හරහා ජාත්‍යන්තර අභ්‍යවකාශ ස්ථානයට (ISS) ගිය පළමු ඉන්දියානුවා කවුද?<br>Who became the first Indian to reach the International Space Station (ISS), via the Axiom-4 mission in June 2025?', '["රාකේෂ් ශර්මා<br>Rakesh Sharma","සුනීතා විලියම්ස්<br>Sunita Williams","ශුභාංශු ශුක්ලා<br>Shubhanshu Shukla","ගගන් නාරංග්<br>Gagan Narang"]', 2),
(1, NULL, '2025 බැලන් ඩ''ඕර් (Ballon d''Or) සම්මානය දිනාගත්තේ කවුද?<br>Who won the 2025 Ballon d''Or?', '["ලමීන් යමාල්<br>Lamine Yamal","ඔස්මාන් ඩෙම්බෙලේ<br>Ousmane Dembélé","විටින්හා<br>Vitinha","මොහොමඩ් සලාහ්<br>Mohamed Salah"]', 1),
(1, NULL, '2025 වසරේ විම්බල්ඩන් පිරිමි තනි තරගාවලිය දිනා, එය දිනූ පළමු ඉතාලි ජාතිකයා බවට පත් වූයේ කවුද?<br>Who became the first Italian man to win the Wimbledon singles title, in 2025?', '["මැටියෝ බෙරෙටිනි<br>Matteo Berrettini","ජැනික් සිනර්<br>Jannik Sinner","ලොරෙන්සෝ මුසෙටි<br>Lorenzo Musetti","ෆ්ලාවියෝ කොබෝලි<br>Flavio Cobolli"]', 1);


SET @s = (SELECT id FROM subjects WHERE name = 'Biology' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'Chondrichthyes ගැණයට අයත් මත්ස්‍යයන්ගේ අභ්‍යන්තර කංකාලයේ විශේෂිත ලක්ෂණය කුමක්ද?<br>What is the defining feature of the endoskeleton of class Chondrichthyes?', '["සම්පූර්ණයෙන්ම ඇට වලින් සෑදී තිබීම<br>Made entirely of bone","කයිටින් වලින් සෑදී තිබීම<br>Made of chitin","සම්පූර්ණයෙන්ම තරුණාස්ථි වලින් සෑදී තිබීම<br>Made entirely of cartilage","කෙරටින් වලින් සෑදී තිබීම<br>Made of keratin"]', 2),
(2, @s, 'ආහාර සාම්පලයකට අයඩින් ද්‍රාවණය එකතු කළ විට නිල්-කළු පැහැයක් ඇති වේ. මෙයින් හඳුනාගන්නේ කුමක්ද?<br>A food sample turns blue-black on adding iodine solution. What does this indicate?', '["ලිපිඩ<br>Lipids","ප්‍රෝටීන්<br>Proteins","ස්ටාර්ච්<br>Starch","ඔක්සිහරණ සීනි<br>Reducing sugars"]', 2),
(2, @s, 'ක්‍රෙබ්ස් චක්‍රය සිදුවන්නේ මයිටොකොන්ඩ්‍රියාවේ කුමන ස්ථානයේද?<br>Where in the mitochondrion does the Krebs cycle take place?', '["අභ්‍යන්තර පටලයේ ක්‍රිස්ටේ<br>Cristae of the inner membrane","න්‍යාසය<br>Matrix","අන්තර් පටල අවකාශය<br>Intermembrane space","සයිටොසෝලය<br>Cytosol"]', 1),
(2, @s, 'තරඟකාරී නිෂේධකයක් එන්සයිම ප්‍රතික්‍රියාවකට එකතු කළ විට සිදුවන්නේ කුමක්ද?<br>What happens when a competitive inhibitor is added to an enzyme reaction?', '["Vmax අඩු වේ, Km වෙනස් නොවේ<br>Vmax decreases, Km unchanged","Vmax වෙනස් නොවේ, Km වැඩි වේ<br>Vmax unchanged, Km increases","Vmax සහ Km දෙකම අඩු වේ<br>Both Vmax and Km decrease","Vmax වැඩි වේ, Km අඩු වේ<br>Vmax increases, Km decreases"]', 1),

-- Physics
SET @s = (SELECT id FROM subjects WHERE name = 'Physics' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'වස්තුවක නිරපේක්ෂ උෂ්ණත්වය දෙගුණ කළහොත්, එය ශක්තිය විකිරණය කරන සීඝ්‍රතාව<br>If the absolute temperature of a body is doubled, the rate at which the energy is radiated will', '["නොවෙනස්ව පවතී.<br>remain the same.","දෙගුණයකින් වැඩි වේ.<br>increase two times.","සිව් ගුණයකින් වැඩි වේ.<br>increase four times.","අට ගුණයකින් වැඩි වේ.<br>increase eight times.","දහසය ගුණයකින් වැඩි වේ.<br>increase sixteen times."]', 4),
(2, @s, 'පෘෂ්ඨ ආතතියේ SI ඒකකය වන්නේ<br>SI unit of surface tension is', '["N","N m⁻¹","N m","N m⁻²","N m²"]', 1),
(2, @s, 'දී ඇති සමාන්තර තහඩු ධාරිත්‍රකයක් බැටරියකට සම්බන්ධ කර ඇත. බැටරියේ වි.ගා.බ. දෙගුණ කළ විට තහඩු අතර විද්‍යුත් ක්ෂේත්‍රය<br>A given parallel plate capacitor is connected to a battery. When the e.m.f. of the battery is doubled, the electric field between the plates', '["නොවෙනස්ව පවතී.<br>remains unchanged.","අඩකට අඩු වේ.<br>is halved.","දෙගුණ වේ.<br>is doubled.","සිව් ගුණ වේ.<br>is quadrupled.","තෙගුණ වේ.<br>is trebled."]', 2),
(2, @s, 'අවස්ථිති ඝූර්ණයේ (moment of inertia) මාන වන්නේ<br>The dimensions of moment of inertia is', '["ML²","ML","M","L","MLT⁻¹"]', 0);


-- Commerce Stream
SET @s = (SELECT id FROM subjects WHERE name = 'Business Studies' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'ව්‍යාපාරයක මුදල් ප්‍රවාහයන් සහ ලාභදායිතාවය නිරීක්ෂණය කරමින්, ආයෝජනය තවදුරටත් පවත්වාගෙන යනවාද නැද්ද යන්න තීරණය කිරීමට ගිණුම්කරණ තොරතුරු ප්‍රධාන වශයෙන් භාවිතා කරන අභ්‍යන්තර පාර්ශවකරු වන්නේ කවුද?<br>Which of the following is an internal stakeholder who primarily uses accounting information to monitor cash flows and profitability of a business to decide whether to continue the investment or not?', '["ණයහිමියන්<br>Creditors","හිමිකරුවන් / ආයෝජකයින්<br>Owners / Investors","රජය සහ බදු බලධාරීන්<br>Tax Authorities","කළමනාකාරිත්වය<br>Management"]', 1),
(2, @s, 'ව්‍යාපාරයක් රු. 50,000 ක් වටිනා තොග ණයට මිලදී ගන්නා ලදී. මෙම ගනුදෙනුව නිසා ගිණුම්කරණ සමීකරණයට සිදුවන බලපෑම කුමක්ද?<br>A business purchased inventory worth Rs. 50,000 on credit. What is the impact of this transaction on the accounting equation?', '["වත්කම් වැඩිවේ, හිමිකම වැඩිවේ<br>Assets increase, Equity increases","වත්කම් වැඩිවේ, වගකීම් වැඩිවේ<br>Assets increase, Liabilities increase","වත්කම් අඩුවේ, වගකීම් අඩුවේ<br>Assets decrease, Liabilities decrease","වගකීම් වැඩිවේ, හිමිකම අඩුවේ<br>Liabilities increase, Equity decreases"]', 1),
(2, @s, 'ව්‍යාපාරයේ අයිතිකරු විසින් පුද්ගලික භාවිතය සඳහා ව්‍යාපාරික බැංකු ගිණුමෙන් රු. 15,000 ක් ලබා ගන්නා ලදී (ගැනිලි). මෙහි නිවැරදි ද්විත්ව සටහන කුමක්ද?<br>The owner of the business withdrew Rs. 15,000 from the business bank account for personal use (Drawings). What is the correct double-entry for this?', '["හර - ගැනිලි ගිණුම / බැර - බැංකු ගිණුම<br>Debit - Drawings Account / Credit - Bank Account","හර - ප්‍රාග්ධන ගිණුම / බැර - ගැනිලි ගිණුම<br>Debit - Capital Account / Credit - Drawings Account","හර - බැංකු ගිණුම / බැර - ගැනිලි ගිණුම<br>Debit - Bank Account / Credit - Drawings Account","හර - ගැනිලි ගිණුම / බැර - ප්‍රාග්ධන ගිණුම<br>Debit - Drawings Account / Credit - Capital Account"]', 0),
(2, @s, 'ව්‍යාපාරයක් විසින් ණයට විකුණන ලද භාණ්ඩ පාරිභෝගිකයෙකු විසින් ආපසු එවන විට (විකුණුම් ආපසු එවුම්), ඒ සඳහා නිකුත් කරන මුලාශ්‍ර ලේඛනය (Source Document) කුමක්ද?<br>When goods sold on credit are returned by a customer (Sales Returns), which source document is issued for it?', '["හර සටහන<br>Debit Note","බැර සටහන<br>Credit Note","විකුණුම් ඉන්වොයිසිය<br>Sales Invoice","වවුචරය<br>Voucher"]', 1);


SET @s = (SELECT id FROM subjects WHERE name = 'Geography' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'පෘථිවියේ අභ්‍යන්තරම ස්ථරය කුමක්ද?<br>Which is the innermost layer of the Earth?', '["කබොල<br>Crust","ප්‍රාවරය<br>Mantle","බාහිර හරය<br>Outer core","අභ්‍යන්තර හරය<br>Inner core"]', 3),
(2, @s, 'ග්‍රැනයිට් යනු කුමන වර්ගයේ ශිලාවක්ද?<br>Granite is which type of rock?', '["ආග්නේය<br>Igneous","අවසාදිත<br>Sedimentary","රූපාන්තරිත<br>Metamorphic","කාබනික<br>Organic"]', 0),
(
-- Arts Stream
SET @s = (SELECT id FROM subjects WHERE name = 'Media Studies' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'පහත සඳහන් දේවලින් අවාචික සන්නිවේදන ආකාරයක් කුමක්ද?<br>Which of these is a form of non-verbal communication?', '["කථනය<br>Speech","ලිපියක් ලිවීම<br>Writing a letter","මුහුණු ඉරියව් සහ අංගචලන<br>Facial expressions and gestures","පුවත්පතක් කියවීම<br>Reading a newspaper"]', 2),
(2, @s, 'තවත් පුද්ගලයෙකුගේ හැඟීම් තේරුම් ගැනීම යන්නෙන් අදහස් වන, අන්තර් පුද්ගල නිපුණතාවක් ලෙස දක්වා ඇති කුසලතාව කුමක්ද?<br>Which skill means understanding another person’s feelings, and is listed under interpersonal competencies?', '["සංවේදීතාව / පරානුභූතිය<br>Empathy","විනීතභාවය<br>Decorum","මතකය ආවර්ජනය<br>Memory recall","ඉදිරිපත් කිරීම<br>Presentation"]', 0);

-- ICT
SET @s = (SELECT id FROM subjects WHERE name = 'ICT' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'ප්‍රමාණය අනුව වඩාත්ම ප්‍රබල පරිගණකය කුමක්ද?<br>By size, which is the most powerful type of computer?', '["ක්ෂුද්‍ර පරිගණකය<br>Micro computer","මිනි පරිගණකය<br>Mini computer","මේන්ෆ්‍රේම්<br>Mainframe","සුපිරි පරිගණකය<br>Super computer"]', 3),
(2, @s, 'සෘජු ආදාන උපාංගයක් කුමක්ද?<br>Which of these is a direct entry input device?', '["යතුරු පුවරුව<br>Keyboard","බාර්කෝඩ් කියවනය<br>Barcode reader","ප්ලොටරය<br>Plotter","ස්පීකරය<br>Speaker"]', 1),
(2, @s, 'ගබඩා කළ වැඩසටහන් සංකල්පය යනු කුමක්ද?<br>What does the stored program concept mean?', '["දෘඪ තැටියේ පමණක් වැඩසටහන් ගබඩා වේ<br>Programs are stored only on the hard disk","උපදෙස් සහ දත්ත මතකයේ එකට ගබඩා වේ<br>Instructions and data are stored together in memory","ALU එකේ වැඩසටහන් ගබඩා වේ<br>Programs are stored in the ALU","මොනිටරයේ වැඩසටහන් ගබඩා වේ<br>Programs are stored in the monitor"]', 1),
(2, @s, 'වාෂ්පශීලී (volatile) මතකය කුමක්ද?<br>Which of these is volatile memory?', '["ROM","EEPROM","RAM","ෆ්ලෑෂ් මතකය<br>Flash memory"]', 2);

INSERT INTO questions(rnd, subject_id, text, answer_text) VALUES
(3, NULL, 'ඊජිප්තුවේ අගනුවර කුමක්ද?<br>What is the capital of Egypt?', 'කයිරෝ<br>Cairo'),
(3, NULL, 'ඉතාලියේ අගනුවර කුමක්ද?<br>What is the capital of Italy?', 'රෝමය<br>Rome'),
(3, NULL, 'රිදීවල රසායනික සංකේතය කුමක්ද?<br>What is the chemical symbol for silver?', 'Ag'),
(3, NULL, 'හිරු එළියෙන් සම මඟින් නිපදවන විටමින් වර්ගය කුමක්ද?<br>Which vitamin is produced by the skin from sunlight?', 'විටමින් D<br>Vitamin D'),
(3, NULL, 'ස්වාභාවික ද්‍රව්‍ය අතර වඩාත්ම දෘඩ ද්‍රව්‍යය කුමක්ද?<br>What is the hardest natural substance?', 'දියමන්ති<br>Diamond'),
(3, NULL, 'ෂඩස්‍රයක පාද කීයද?<br>How many sides does a hexagon have?', '6'),
(3, NULL, '144 හි වර්ගමූලය කීයද?<br>What is the square root of 144?', '12'),
(3, NULL, 'චතුරස්‍රයක (quadrilateral) අභ්‍යන්තර කෝණවල එකතුව කීයද?<br>What is the sum of the interior angles of a quadrilateral?', '360°'),
(3, NULL, 'ශ්‍රී ලංකාවේ ජාතික මල කුමක්ද?<br>What is the national flower of Sri Lanka?', 'නිල් මානෙල්<br>Blue Water Lily'),
(3, NULL, 'ශ්‍රී දළදා මාළිගාව පිහිටි නගරය කුමක්ද?<br>In which city is the Temple of the Tooth located?', 'මහනුවර<br>Kandy'),
(3, NULL, 'කුරුණෑගල අයත් වන පළාත කුමක්ද?<br>Kurunegala belongs to which province?', 'වයඹ පළාත<br>North Western Province'),
(3, NULL, 'සිංහල අලුත් අවුරුද්ද උදා වන මාසය කුමක්ද?<br>In which month does the Sinhala New Year fall?', 'අප්‍රේල්<br>April'),
(3, NULL, 'ශ්‍රී ලංකාව ක්‍රිකට් ලෝක කුසලානය දිනූ වර්ෂය කුමක්ද?<br>In which year did Sri Lanka win the Cricket World Cup?', '1996'),
(3, NULL, 'URL හි සම්පූර්ණ නම කුමක්ද?<br>What is the full form of URL?', 'Uniform Resource Locator'),
(3, NULL, 'පරිගණකයේ Copy කිරීමට භාවිතා කරන කෙටිමං යතුර කුමක්ද?<br>Which keyboard shortcut is used to copy?', 'Ctrl + C'),
(3, NULL, 'Microsoft සමාගමේ ආරම්භකයෙකු වන්නේ කවුද?<br>Who co-founded Microsoft?', 'බිල් ගේට්ස්<br>Bill Gates'),
(3, NULL, '2022 FIFA ලෝක කුසලානය දිනූ රට කුමක්ද?<br>Which country won the 2022 FIFA World Cup?', 'ආජන්ටිනාව<br>Argentina'),
(3, NULL, 'ලෝකයේ විශාලතම ක්ෂීරපායී සතා කවුද?<br>What is the largest mammal in the world?', 'නිල් තල්මසා<br>Blue whale'),
(3, NULL, 'ලෝකයේ මහාද්වීප කීයද?<br>How many continents are there in the world?', '7'),
(3, NULL, 'මොනාලිසා සිතුවම ඇන්දේ කවුද?<br>Who painted the Mona Lisa?', 'ලියනාඩෝ ද වින්චි<br>Leonardo da Vinci'),
(3, NULL, 'රෝමියෝ සහ ජුලියට් නාට්‍යය රචනා කළේ කවුද?<br>Who wrote Romeo and Juliet?', 'විලියම් ෂේක්ස්පියර්<br>William Shakespeare'),
(3, NULL, 'ආහාර ලුණුවල රසායනික සූත්‍රය කුමක්ද?<br>What is the chemical formula of table salt?', 'NaCl'),
(3, NULL, 'සාමාන්‍ය පීඩනයේදී ජලය තාපාංකයට පැමිණෙන උෂ්ණත්වය කීයද?<br>At what temperature (°C) does water boil at normal pressure?', '100°C'),
(3, NULL, 'වළලු වලින් වඩාත් ප්‍රසිද්ධ ග්‍රහයා කුමක්ද?<br>Which planet is best known for its rings?', 'සෙනසුරු<br>Saturn'),
(3, NULL, 'තාජ් මහල් පිහිටි නගරය කුමක්ද?<br>In which city is the Taj Mahal located?', 'ආග්‍රා<br>Agra'),
(3, NULL, 'ජපානයේ මුදල් ඒකකය කුමක්ද?<br>What is the currency of Japan?', 'යෙන්<br>Yen'),
(3, NULL, 'කුඩාම ප්‍රථමක සංඛ්‍යාව කීයද?<br>What is the smallest prime number?', '2'),
(3, NULL, 'රෝම ඉලක්කම් L හි අගය කීයද?<br>What is the value of the Roman numeral L?', '50'),
(3, NULL, 'පාදයක දිග 7 වන සමචතුරස්‍රයක වර්ගඵලය කීයද?<br>What is the area of a square with side length 7?', '49');