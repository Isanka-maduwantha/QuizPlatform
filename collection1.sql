USE mindspark;
SET NAMES utf8mb4;

TRUNCATE TABLE questions;

INSERT IGNORE INTO subjects (name) VALUES
('Biology'), ('Physics'), ('ICT'), ('Commerce Stream'), ('Media Studies'), ('Geography');

-- --------------------------------------------------------
-- Round 1
-- --------------------------------------------------------
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(1, NULL, 'සංඝමිත්තා තෙරණිය ශ්‍රී මහා බෝධියේ දක්ෂිණ ශාඛාව ලංකාවට වැඩම කරවන විට අනුරාධපුරයේ රජකම් කළේ කවුද?<br>Who was ruling Anuradhapura when Theri Sanghamitta brought the southern branch of the Sri Maha Bodhi tree to Sri Lanka?', '["දුටුගැමුණු<br>Dutugemunu","දේවානම්පියතිස්ස<br>Devanampiyatissa","පණ්ඩුකාභය<br>Pandukabhaya","වළගම්බා<br>Valagamba"]', 1),
(1, NULL, 'ක්‍රි.පූ. පළමු සියවසේදී මාතලේ අළුවිහාරයේ දී ත්‍රිපිටකය පළමු වරට ලිඛිතව සටහන් කිරීමට අනුග්‍රහය දැක්වූ රජු කවුද?<br>Which king sponsored the first written recording of the Tripitaka at Aluvihara, Matale, in the 1st century BC?', '["දුටුගැමුණු<br>Dutugemunu","සද්ධාතිස්ස<br>Saddhatissa","වළගම්බා<br>Valagamba","මහාසේන<br>Mahasena"]', 2),
(1, NULL, 'දන්ත කුමරු සහ හේමමාලා කුමරිය කලිංගයෙන් ශ්‍රී දළදා වහන්සේ ලංකාවට රැගෙන ආ කාලයේ රජකම් කළේ කවුද?<br>Prince Danta and Princess Hemamala brought the Sacred Tooth Relic from Kalinga to Sri Lanka during the reign of which king?', '["මහාසේන<br>Mahasena","ධාතුසේන<br>Dhatusena","පළමුවන උපතිස්ස<br>Upatissa I","කීර්ති ශ්‍රී මේඝවර්ණ<br>Kirti Sri Meghavanna"]', 3),
(1, NULL, 'කලා වැව ඉදිකළ අතර, තම පුත් කාශ්‍යපගේ කුමන්ත්‍රණයෙන් මරණයට පත් වූ රජු කවුද?<br>Which king built the Kala Wewa reservoir and was killed as a result of a plot by his son Kashyapa?', '["ධාතුසේන<br>Dhatusena","වසභ<br>Vasabha","මහානාම<br>Mahanama","මහාසේන<br>Mahasena"]', 0),
(1, NULL, '11 වන සියවසේදී දශක ගණනාවක චෝල පාලනය අවසන් කර පොළොන්නරුව අගනුවර කරගත් රජු කවුද?<br>Which king ended decades of Chola rule in the 11th century and made Polonnaruwa his capital?', '["පළමුවන පරාක්‍රමබාහු<br>Parakramabahu I","නිශ්ශංකමල්ල<br>Nissanka Malla","පළමුවන විජයබාහු<br>Vijayabahu I","ගජබාහු<br>Gajabahu"]', 2),
(1, NULL, '1580 දී තම රාජධානිය පෘතුගීසීන්ට පරිත්‍යාග කරන බව ලියා දුන්, ක්‍රිස්තියානි ආගම වැළඳගත් කෝට්ටේ රජු කවුද?<br>Which Christian-convert king of Kotte formally bequeathed his kingdom to the Portuguese in 1580?', '["මායාදුන්නේ<br>Mayadunne","ධර්මපාල<br>Dharmapala","පළමුවන රාජසිංහ<br>Rajasinghe I","විදිය බණ්ඩාර<br>Vidiye Bandara"]', 1),
(1, NULL, '1630 රන්දෙණිවෙල සටනේදී පෘතුගීසි සෙනෙවි කොන්ස්ටන්ටිනෝ ද සා පරාජය කර ඝාතනය කළ උඩරට හමුදාවට නායකත්වය දුන් රජු කවුද?<br>Which king led the Kandyan forces that defeated and killed the Portuguese general Constantino de Sá at the Battle of Randeniwela in 1630?', '["දෙවන රාජසිංහ<br>Rajasinghe II","පළමුවන විමලධර්මසූරිය<br>Vimaladharmasuriya I","සේනරත්<br>Senarath","පළමුවන රාජසිංහ<br>Rajasinghe I"]', 0),
(1, NULL, '1891 දී බුද්ධගයාව බෞද්ධයන් වෙත ලබා ගැනීමේ අරමුණින් මහා බෝධි සමිතිය ආරම්භ කළේ කවුද?<br>Who founded the Maha Bodhi Society in 1891 with the aim of restoring Bodh Gaya to Buddhist hands?', '["හෙන්රි ස්ටීල් ඕල්කොට්<br>Henry Steel Olcott","අනගාරික ධර්මපාල<br>Anagarika Dharmapala","වලිසිංහ හරිශ්චන්ද්‍ර<br>Walisinghe Harischandra","ආනන්ද කුමාරස්වාමි<br>Ananda Coomaraswamy"]', 1),
(1, NULL, '1972 දී ශ්‍රී ලංකාව ජනරජයක් බවට පත් වූ විට, එහි පළමු ජනාධිපතිවරයා ලෙස පත් වූයේ කවුද?<br>Who became the first President when Sri Lanka became a republic in 1972?', '["ඩී. එස්. සේනානායක<br>D. S. Senanayake","ජේ. ආර්. ජයවර්ධන<br>J. R. Jayewardene","ඔලිවර් ගුණතිලක<br>Oliver Goonetilleke","විලියම් ගොපල්ලව<br>William Gopallawa"]', 3),
(1, NULL, '1960 ජූලි මාසයේදී ලොව ප්‍රථම කාන්තා අගමැතිනිය බවට පත් වූයේ කවුද?<br>Who became the world''s first woman prime minister in July 1960?', '["ඉන්දිරා ගාන්ධි<br>Indira Gandhi","සිරිමාවෝ බණ්ඩාරනායක<br>Sirimavo Bandaranaike","ගෝල්ඩා මෙයර්<br>Golda Meir","මාග්‍රට් තැචර්<br>Margaret Thatcher"]', 1),
(1, NULL, '2026 FIFA ලෝක කුසලාන අවසන් මහා තරගයේ අතිරේක කාලයේදී ස්පාඤ්ඤයට ආර්ජෙන්ටිනාව පරදවා ගත හැකි වන පරිදි එකම ගෝලය ලබා දුන්නේ කවුද?<br>Who scored the only goal in extra time to give Spain victory over Argentina in the 2026 FIFA World Cup final?', '["ෆෙරාන් ටෝරෙස්<br>Ferran Torres","මිකෙල් මෙරිනෝ<br>Mikel Merino","ලමීන් යමාල්<br>Lamine Yamal","මිකෙල් ඔයර්සබල්<br>Mikel Oyarzabal"]', 0),
(1, NULL, '2026 FIFA ලෝක කුසලානයේ හොඳම ක්‍රීඩකයාට හිමි ස්වර්ණ බෝලය (Golden Ball) දිනාගත්තේ කවුද?<br>Who won the Golden Ball as the best player of the 2026 FIFA World Cup?', '["ලියනල් මෙසී<br>Lionel Messi","කිලියන් එම්බාපේ<br>Kylian Mbappé","ලමීන් යමාල්<br>Lamine Yamal","රොඩ්‍රි<br>Rodri"]', 3),
(1, NULL, '2026 මිලාන්-කෝර්ටිනා ශීත ඔලිම්පික්හිදී රන් පදක්කම් හයක් දිනා, ශීත ඔලිම්පික් ඉතිහාසයේ වැඩිම රන් පදක්කම් (11ක්) දිනූ ක්‍රීඩකයා බවට පත් වූ නෝර්වීජියානු හරස් රට ස්කී ක්‍රීඩකයා කවුද?<br>Which Norwegian cross-country skier won six golds at the 2026 Milano Cortina Winter Olympics, bringing his career total to a record 11 Winter Olympic golds?', '["ජොහැනස් හොස්ෆ්ලොට් ක්ලේබෝ<br>Johannes Høsflot Klæbo","මාර්ටන් ෆූර්කේඩ්<br>Martin Fourcade","ඊලීන් ගූ<br>Eileen Gu","ෂෝන් වයිට්<br>Shaun White"]', 0),
(1, NULL, '“Autobiography of Red” නම් පද්‍ය නවකතාව රචනා කළ, 2026 නොබෙල් සාහිත්‍ය ත්‍යාගය දිනූ කැනේඩියානු ලේඛිකාව කවුද?<br>Which Canadian author of the verse novel “Autobiography of Red” won the 2026 Nobel Prize in Literature?', '["මාග්‍රට් ඇට්වුඩ්<br>Margaret Atwood","මයිකල් ඔන්ඩාච්ජි<br>Michael Ondaatje","රූපි කෝර්<br>Rupi Kaur","ඇන් කාර්සන්<br>Anne Carson"]', 3),
(1, NULL, '1996 ක්‍රිකට් ලෝක කුසලානයේ අවසන් මහා තරගයේදී ලාහෝර් හිදී ශ්‍රී ලංකාව පරාජය කළේ කුමන කණ්ඩායමද?<br>Which team did Sri Lanka beat in the 1996 Cricket World Cup final in Lahore?', '["ඕස්ට්‍රේලියාව<br>Australia","එංගලන්තය<br>England","ඉන්දියාව<br>India","පකිස්තානය<br>Pakistan"]', 0),
(1, NULL, 'ශ්‍රී ලංකාව සමඟ සම-සත්කාරකත්වය දැරූ 2026 ICC පිරිමි T20 ලෝක කුසලානයේ අවසන් මහා තරගයේදී, අහමදාබාද් හිදී ඉන්දියාව ලකුණු 96කින් පරාජය කළේ කුමන කණ්ඩායමද?<br>In the final of the 2026 ICC Men''s T20 World Cup, which Sri Lanka co-hosted, which team did India beat by 96 runs in Ahmedabad?', '["දකුණු අප්‍රිකාව<br>South Africa","එංගලන්තය<br>England","නවසීලන්තය<br>New Zealand","ඕස්ට්‍රේලියාව<br>Australia"]', 2),
(1, NULL, '2026 අප්‍රේල් මාසයේ චන්ද්‍රයා වටා ගමන් කර ආපසු පැමිණි Artemis II ගවේෂණයේ ගගනගාමී ජෙරමි හැන්සන් නියෝජනය කළේ කුමන ආයතනයද?<br>Which space agency does Jeremy Hansen, a crew member of the Artemis II mission that flew around the Moon in April 2026, represent?', '["යුරෝපීය අභ්‍යවකාශ ඒජන්සිය (ESA)<br>European Space Agency (ESA)","කැනේඩියානු අභ්‍යවකාශ ඒජන්සිය (CSA)<br>Canadian Space Agency (CSA)","ජපාන ඒරෝස්පේස් ගවේෂණ ඒජන්සිය (JAXA)<br>Japan Aerospace Exploration Agency (JAXA)","ඉන්දීය අභ්‍යවකාශ පර්යේෂණ සංවිධානය (ISRO)<br>Indian Space Research Organisation (ISRO)"]', 1),
(1, NULL, '2026 රසායන විද්‍යා නොබෙල් ත්‍යාගය හෙන්රි කගාන් සහ කෙන්සෝ සොයි වෙත හිමි වූයේ කුමන අංශයේ සොයා ගැනීම් සඳහාද?<br>Henri Kagan and Kenso Soai received the 2026 Nobel Prize in Chemistry for discoveries in which area?', '["ක්ලික් රසායනය<br>Click chemistry","අසමමිතික සංස්ලේෂණය (අණුවක කැඩපත් ප්‍රතිබිම්බ ස්වරූපයක් තෝරා නිපදවීම)<br>Asymmetric synthesis (selectively making one mirror-image form of a molecule)","ක්වොන්ටම් ලකුණු සොයා ගැනීම<br>The discovery of quantum dots","ලිතියම්-අයන බැටරි සංවර්ධනය<br>The development of lithium-ion batteries"]', 1),
(1, NULL, '2026 නොබෙල් සාම ත්‍යාගය දිනූ නවනීතම් (නවි) පිල්ලේ මීට පෙර දැරූ තනතුරක් වන්නේ කුමක්ද?<br>Which of the following positions was previously held by Navanethem (Navi) Pillay, winner of the 2026 Nobel Peace Prize?', '["එක්සත් ජාතීන්ගේ සරණාගත මහ කොමසාරිස්<br>UN High Commissioner for Refugees","ජාත්‍යන්තර අධිකරණයේ සභාපති<br>President of the International Court of Justice","එක්සත් ජාතීන්ගේ මානව හිමිකම් පිළිබඳ මහ කොමසාරිස්<br>UN High Commissioner for Human Rights","එක්සත් ජාතීන්ගේ මහ ලේකම්<br>UN Secretary-General"]', 2),
(1, NULL, '2026 භෞතික විද්‍යා නොබෙල් ත්‍යාගය දිනූ ෆ්‍රැන්සිස් හැල්සන් වඩාත් ප්‍රසිද්ධ වන්නේ කුමන නිරීක්ෂණාගාරයේ ප්‍රධාන විද්‍යාඥයා ලෙසද?<br>Francis Halzen, winner of the 2026 Nobel Prize in Physics, is best known as the lead scientist of which observatory?', '["LIGO ගුරුත්වාකර්ෂණ තරංග නිරීක්ෂණාගාරය<br>LIGO gravitational-wave observatory","සුපර්-කමියෝකන්ඩේ<br>Super-Kamiokande","අයිස්කියුබ් නියුට්‍රිනෝ නිරීක්ෂණාගාරය<br>IceCube Neutrino Observatory","මහා හැඩ්‍රෝන ගැටුම් යන්ත්‍රය<br>Large Hadron Collider"]', 2),
(1, NULL, '2021 දෙසැම්බරයේ දියත් කරන ලද, අධෝරක්ත කිරණ මගින් විශ්වය නිරීක්ෂණය කරන අභ්‍යවකාශ දුරේක්ෂය කුමක්ද?<br>Which space telescope, launched in December 2021, observes the universe in infrared light?', '["හබල් අභ්‍යවකාශ දුරේක්ෂය<br>Hubble Space Telescope","ජේම්ස් වෙබ් අභ්‍යවකාශ දුරේක්ෂය<br>James Webb Space Telescope","කෙප්ලර් අභ්‍යවකාශ දුරේක්ෂය<br>Kepler Space Telescope","චන්ද්‍ර X-කිරණ නිරීක්ෂණාගාරය<br>Chandra X-ray Observatory"]', 1),
(1, NULL, '1944 දී ප්‍රකාශයට පත් වූ “ගම්පෙරළිය” නවකතාව රචනා කළේ කවුද?<br>Who wrote the novel “Gamperaliya”, published in 1944?', '["ඩබ්ලිව්. ඒ. සිල්වා<br>W. A. Silva","පියදාස සිරිසේන<br>Piyadasa Sirisena","මාර්ටින් වික්‍රමසිංහ<br>Martin Wickramasinghe","ආචාර්ය එදිරිවීර සරච්චන්ද්‍ර<br>Ediriweera Sarachchandra"]', 2);
-- --------------------------------------------------------
-- Round 2: Subject Specific Questions (rnd = 2)
-- --------------------------------------------------------

-- Biology
SET @s = (SELECT id FROM subjects WHERE name = 'Biology' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'ප්‍රභා සංශ්ලේෂණයේදී ආලෝක ප්‍රතික්‍රියාව සිදුවන්නේ සෛලයේ කුමන ස්ථානයේද?', '["ස්ට්‍රෝමාව", "තයිලකොයිඩ පටලය", "මයිටොකොන්ඩ්‍රියා පූරකය", "රයිබොසෝම"]', 1),
(2, @s, 'මිනිසාගේ රුධිරයේ ඇති ප්‍රධානම ශ්වසන වර්ණකය කුමක්ද?', '["හීමොග්ලොබින්", "මයොග්ලොබින්", "හෙමොසයනින්", "ඇල්බියුමින්"]', 0),
(2, @s, 'ශාක සෛල බිත්තියේ ප්‍රධාන ව්‍යුහාත්මක සංරචකය කුමක්ද?', '["පෙක්ටින්", "ග්ලයිකොජන්", "සෙලියුලෝස්", "කයිටින්"]', 2),
(2, @s, 'පහත සඳහන් දේවලින් ප්‍රෝටීන් සංශ්ලේෂණයට දායක වන සෛලාංගය කුමක්ද?', '["ගොල්ගි සංකීර්ණය", "රයිබොසෝමය", "ලයිසොසෝමය", "පෙරොක්සිසෝමය"]', 1);

-- Biology
SET @s = (SELECT id FROM subjects WHERE name = 'Biology' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'සුක්‍රෝස් වැනි ඔක්සිහරණය නොවන සීනි ආරම්භයේදී බෙනඩික්ට් පරීක්ෂාවට ධනාත්මක ප්‍රතිචාරයක් නොදක්වන්නේ ඇයි?<br>Why do non-reducing sugars like sucrose fail to give a positive Benedict''s test initially?', '["සුක්‍රෝස් ජලයේ දිය නොවන නිසා<br>Sucrose is insoluble in water","සුක්‍රෝස් ආම්ලික මාධ්‍යයක පවතින නිසා<br>Sucrose exists in an acidic medium","Cu²⁺ අයන ඔක්සිහරණය කිරීමට නිදහස් ඇල්ඩිහයිඩ් හෝ කීටෝන කාණ්ඩයක් නොමැති නිසා<br>It has no free aldehyde or ketone group to reduce Cu²⁺ ions","සුක්‍රෝස්වල කාබන් පරමාණු අඩු නිසා<br>Sucrose has too few carbon atoms"]', 2),
(2, @s, 'ඔක්සිහරණය නොවන සීනි බෙනඩික්ට් පරීක්ෂාවේදී හඳුනා ගැනීමට ඒවා ජලවිච්ඡේදනය කරන්නේ කෙසේද?<br>How are non-reducing sugars hydrolysed before testing with Benedict''s reagent?', '["තනුක HCl සමඟ රත් කර NaHCO₃ මඟින් උදාසීන කිරීමෙන්<br>Boil with dilute HCl, then neutralise with NaHCO₃","සාන්ද්‍ර H₂SO₄ එකතු කර සිසිල් කිරීමෙන්<br>Add concentrated H₂SO₄ and cool","ජලයෙන් තනුක කර ශීතකරණයේ තැබීමෙන්<br>Dilute with water and refrigerate","අයඩින් ද්‍රාවණය එකතු කිරීමෙන්<br>Add iodine solution"]', 0),
(2, @s, 'බියුරෙට් පරීක්ෂාවේ ධනාත්මක දම් පැහැය ඇති වන්නේ කුමක් නිසාද?<br>What causes the violet colour in a positive Biuret test?', '["Cu²⁺ අයන ග්ලූකෝස් සමඟ ප්‍රතික්‍රියා කිරීම<br>Cu²⁺ ions reacting with glucose","භාෂ්මික මාධ්‍යයේදී Cu²⁺ අයන පෙප්ටයිඩ බන්ධනවල නයිට්‍රජන් සමඟ උපසංවිධාන සංකීර්ණයක් සෑදීම<br>Cu²⁺ ions forming a coordination complex with nitrogen of peptide bonds in alkaline medium","ස්ටාර්ච් සමඟ අයඩින් ප්‍රතික්‍රියා කිරීම<br>Iodine reacting with starch","මේද අම්ල ඇල්කොහොල්වල දිය වීම<br>Fatty acids dissolving in alcohol"]', 1),
(2, @s, 'පරපෝෂී බීජාණුශාකය සහිත ප්‍රමුඛ ජනකශාක පරම්පරාවක් පෙන්වන ශාක වංශය කුමක්ද?<br>Which plant group shows a dominant gametophyte generation with a dependent sporophyte?', '["Pteridophyta (පටක්ෂ ශාක)","Gymnosperms (විවෘත බීජ ශාක)","Angiosperms (සංවෘත බීජ ශාක)","Bryophyta (බ්‍රයෝෆයිටා)"]', 3);

-- Physics
SET @s = (SELECT id FROM subjects WHERE name = 'Physics' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'වස්තුවක් විකිරණ ශක්තිය විමෝචනය කරන සීඝ්‍රතාව සම්බන්ධයෙන් පහත සඳහන් ප්‍රකාශ අතුරින් සත්‍ය නොවන්නේ කුමක්ද?<br>Which of the following is not true regarding the rate at which a body emits radiant energy?', '["එය වස්තුවේ පෘෂ්ඨ වර්ගඵලයට සමානුපාතික වේ.<br>It is proportional to the surface area of the body.","එය වස්තුවේ නිරපේක්ෂ උෂ්ණත්වයේ සිව්වන බලයට සමානුපාතික වේ.<br>It is proportional to the 4th power of the absolute temperature of the body.","එය වස්තුවේ පෘෂ්ඨයේ විමෝචකතාවට සමානුපාතික වේ.<br>It is proportional to the emissivity of the surface of the body.","එය අවට පරිසරයේ උෂ්ණත්වය මත රඳා පවතී.<br>It depends on the temperature of the surrounding.","එය වස්තුවේ තාප ධාරිතාව මත රඳා නොපවතී.<br>It does not depend on the thermal capacity of the body."]', 3),
(2, @s, 'පහත සඳහන් තරංග අතුරින් ගමන් කිරීමට භෞතික මාධ්‍යයක් අවශ්‍ය වන්නේ කුමක් සඳහාද?<br>Which of the following waves requires a physical medium for travelling?', '["ආලෝක තරංග<br>Light waves","ගුවන් විදුලි තරංග<br>Radio waves","ධ්වනි තරංග<br>Sound waves","X-කිරණ<br>X-rays","ගැමා කිරණ<br>Gamma rays"]', 2),
(2, @s, 'විද්‍යුත් චුම්බක තරංග සම්බන්ධයෙන් පහත සඳහන් ප්‍රකාශ අතුරින් සත්‍ය නොවන්නේ කුමක්ද?<br>Which of the following is not true regarding electromagnetic waves?', '["විද්‍යුත් හා චුම්බක ක්ෂේත්‍රවල දිශා එකිනෙකට ලම්බක වේ.<br>Directions of electric and magnetic fields are perpendicular to each other.","වේගය ව්‍යාප්ති මාධ්‍යය මත රඳා නොපවතී.<br>Speed does not depend on the medium of propagation.","ව්‍යාප්ත වීමට භෞතික මාධ්‍යයක් අනිවාර්යයෙන්ම අවශ්‍ය නොවේ.<br>Do not necessarily require a material medium for propagation.","තරංගයේ ව්‍යාප්ති දිශාව විද්‍යුත් හා චුම්බක ක්ෂේත්‍රවල දිශාවලට ලම්බක වේ.<br>Direction of propagation of the wave is perpendicular to the directions of electric and magnetic fields.","මාධ්‍ය දෙකක් අතර මායිමේදී පරාවර්තනය විය හැක.<br>Can be reflected at the boundary between two media."]', 1),
(2, @s, 'භූකම්පන තරංග සම්බන්ධයෙන් කර ඇති පහත සඳහන් ප්‍රකාශ අතුරින් වැරදි වන්නේ කුමක්ද?<br>Which of the following statements made regarding seismic waves is incorrect?', '["සියලුම භූකම්පන තරංග යාන්ත්‍රික තරංග වන අතර ව්‍යාප්ත වීමට මාධ්‍යයක් අවශ්‍ය වේ.<br>All seismic waves are mechanical waves and require a medium to propagate.","ප්‍රාථමික (P) තරංග අන්වායාම වන අතර ද්වීතීයික (S) තරංග තීර්යක් වේ.<br>Primary (P) waves are longitudinal and secondary (S) waves are transverse.","S තරංගවල වේගය P තරංගවල වේගයට වඩා අඩුය.<br>Speed of S-waves is less than that of P-waves.","S තරංගවලට ද්‍රව හා ඝන යන මාධ්‍ය දෙකෙහිම ගමන් කළ හැක.<br>S-waves can travel through both liquid and solid media.","P තරංගවලට ද්‍රව හා ඝන යන මාධ්‍ය දෙකෙහිම ගමන් කළ හැක.<br>P-waves can travel through both liquid and solid media."]', 3);

-- ICT
SET @s = (SELECT id FROM subjects WHERE name = 'ICT' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'AND ද්වාරයේ ප්‍රතිදානය 1 වන්නේ කවදාද?<br>When is the output of an AND gate equal to 1?', '["When any one input is 1 (ඕනෑම ආදානයක් 1 වූ විට)","When all inputs are 1 (සියලු ආදාන 1 වූ විට)","When all inputs are 0 (සියලු ආදාන 0 වූ විට)","When the inputs are different (ආදාන වෙනස් වූ විට)"]', 1),
(2, @s, 'මෙහෙයුම් පද්ධතියක ප්‍රධාන කාර්යයක් නොවන්නේ කුමක්ද?<br>Which is NOT a main function of an operating system?', '["Process management (ක්‍රියාවලි කළමනාකරණය)","Resource management (සම්පත් කළමනාකරණය)","Security and protection (ආරක්ෂාව)","Designing logic circuits (තාර්කික පරිපථ සැලසුම් කිරීම)"]', 3),
(2, @s, 'විසිරුණු කොටස් දර්ශක මගින් සම්බන්ධ කරන ගොනු වෙන්කිරීමේ ක්‍රමය කුමක්ද?<br>Which file allocation method stores a file in scattered blocks connected by pointers?', '["Contiguous allocation (අඛණ්ඩ)","Linked allocation (සම්බන්ධිත)","Defragmentation (ඛණ්ඩ ඒකාබද්ධ කිරීම)","Formatting (ෆෝමැට් කිරීම)"]', 1),
(2, @s, 'ක්‍රියාවලියක තොරතුරු ගබඩා කිරීමට OS භාවිතා කරන්නේ කුමක්ද?<br>What does the OS use to store information about a process?', '["Process Control Block (ක්‍රියාවලි පාලන කොටස)","Device driver (උපාංග ධාවකය)","Subnet mask (උපජාල මාස්කය)","Boot sector (බූට් සෙක්ටරය)"]', 0);

-- Commerce Stream
SET @s = (SELECT id FROM subjects WHERE name = 'Commerce Stream' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'ව්‍යාපාර ක්‍රියාවලිය දැක්වෙන යෙදවුම් - නිමැවුම් සටහනට අනුව ''නිමැවුම්'' ලෙස සැලකිය හැක්කේ කුමක්ද?<br>According to the Input-Process-Output diagram of a business process, what can be considered as ''Outputs''?', '["භූමිය, ශ්‍රමය සහ ප්‍රාග්ධනය<br>Land, labor, and capital","පරිපාලනය, මූල්‍ය හා අලෙවිකරණ කාර්යයන්<br>Administration, finance, and marketing functions","නිෂ්පාදනය කරන ලද භාණ්ඩ හෝ සේවා<br>Produced goods or services","අමුද්‍රව්‍ය සහ යන්ත්‍රෝපකරණ<br>Raw materials and machinery"]', 2),
(2, @s, 'ව්‍යාපාර ක්‍රියාවලියේදී යෙදවුම් මඟින් නිමැවුම් බිහි කිරීමේදී මැද සිදුවන ''ක්‍රියාවලිය'' තුළ ප්‍රධාන වශයෙන් සිදු වන්නේ කුමක්ද?<br>What mainly happens during the ''Process'' stage that converts input into outputs in the business process?', '["සම්පත්වල ස්වරූපය වෙනස් කර අගය එකතු කිරීම<br>Changing the form of resources and adding value","භාණ්ඩ පාරිභෝගිකයා වෙත සම්පූර්ණයෙන්ම නොමිලේ බෙදා හැරීම<br>Distributing goods completely free of charge to the consumer","ව්‍යාපාරයේ අවදානම සහ වගකීම සම්පූර්ණයෙන්ම ඉවත් කිරීම<br>Completely eliminating business risk and liability","අමුද්‍රව්‍ය කිසිදු පරිවර්තනයකට ලක් නොකොට ගබඩා කිරීම<br>Storing raw materials without any transformation"]', 0),
(2, @s, 'වුවමනා (Wants) සම්බන්ධයෙන් වැරදි ප්‍රකාශය කුමක්ද?<br>Which statement regarding wants is INCORRECT?', '["වුවමනා අසීමිත වේ<br>Wants are unlimited","වුවමනා සෑම පුද්ගලයාටම එක හා සමාන (පොදු) වේ<br>Wants are identical (common) to every person","වුවමනා පුද්ගලයාගෙන් පුද්ගලයාට විවිධ වේ<br>Wants vary from person to person","ව්‍යාපාරිකයින්ට නව වුවමනා නිර්මාණය කළ හැකිය<br>Businessmen can create wants"]', 1),
(2, @s, 'වර්තමාන තොරතුරු යුගයේ (විද්‍යුත් වාණිජ්‍ය යුගයේ) ව්‍යාපාර ක්ෂේත්‍රයේ ප්‍රචලිත වීමට බලපෑ හේතුවක් නොවන්නේ කුමක්ද?<br>Which of the following is NOT a reason for the popularity of e-commerce in the current information era?', '["ගෝලීය වූ වෙළෙඳපොළ අවකාශයක් බිහි වීම<br>Emergence of a global market space","ලියකියවිලි වලින් තොරව ව්‍යාපාර තොරතුරු හුවමාරු කර ගැනීමට හැකි වීම<br>Ability to exchange business information without paperwork","භාණ්ඩ හා සේවා මිල අනිවාර්යයෙන්ම ශුන්‍ය මට්ටමකට පත්වීම<br>Prices of goods and services inevitably dropping to zero","ගනුදෙනුකරුවන්ගේ කාලය හා ශ්‍රමය ඉතුරු වීම<br>Saving of customers time and effort"]', 2);

-- Media Studies
SET @s = (SELECT id FROM subjects WHERE name = 'Media Studies' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'ගෝලීයකරණය සන්නිවේදනයේදී වඩාත්ම සෘජුව ඇති කරන්නේ කුමක්ද?<br>What does globalization most directly lead to in communication?', '["සමාජ හුදකලා වීම<br>Isolation of societies","දැනුම් සමාජය සහ පුරවැසි මාධ්‍ය වැනි නව ප්‍රවණතා<br>New trends such as the knowledge society and citizens’ media","සියලු මාධ්‍ය අවසන් වීම<br>End of all media","මුද්‍රිත මාධ්‍ය වර්ධනය පමණි<br>Only print media growth"]', 1),
(2, @s, 'මාධ්‍ය සාක්ෂරතාව යනු කුමක්ද?<br>What is media literacy?', '["පුවත්පත් කියවීමට ඉගෙනීම පමණි<br>Only learning to read newspapers","මාධ්‍ය පණිවිඩ විචාරශීලීව තේරුම් ගෙන විශ්ලේෂණය කිරීමේ හැකියාව<br>The ability to critically understand and analyse media messages","රූපවාහිනී නාලිකාවක් හිමිකර ගැනීම<br>Owning a TV channel","සියලු මාධ්‍ය මඟහැරීම<br>Avoiding all media"]', 1);

-- Geography
SET @s = (SELECT id FROM subjects WHERE name = 'Geography' LIMIT 1);
INSERT INTO questions(rnd, subject_id, text, options, correct) VALUES
(2, @s, 'භූගෝලීය ක්‍රමශිල්පවල GIS යන්නෙන් අදහස් වන්නේ කුමක්ද?<br>What does GIS stand for in geographical techniques?', '["සාමාන්‍ය කාර්මික පද්ධතිය<br>General Industrial System","භූගෝලීය තොරතුරු පද්ධතිය<br>Geographic Information System","ගෝලීය දිවයින් සමීක්ෂණය<br>Global Island Survey","භූවිද්‍යාත්මක ආදාන ප්‍රභවය<br>Geological Input Source"]', 1),
(2, @s, 'කාලගුණය සහ දේශගුණය අතර වෙනස කුමක්ද?<br>What is the difference between weather and climate?', '["කාලගුණය යනු වසර ගණනක සාමාන්‍යය, දේශගුණය යනු අද තත්ත්වයයි<br>Weather is the average over many years, climate is today’s conditions","දේශගුණය යනු දිගු කාලයක කාලගුණයේ සාමාන්‍යය, කාලගුණය යනු කෙටි කාලීන තත්ත්වයයි<br>Climate is the average weather over a long period, weather is the short-term condition","දෙකම එකම අරුත ඇත<br>They mean the same thing","දේශගුණය සාගරවලට පමණක් අදාළයි<br>Climate only applies to oceans"]', 1);

-- --------------------------------------------------------
-- Round 3: Rapid Fire Questions (subject_id = NULL, rnd = 3)
-- --------------------------------------------------------
INSERT INTO questions(rnd, subject_id, text, answer_text) VALUES
(3, NULL, 'ලෝකයේ කුඩාම රට කුමක්ද?', 'වතිකානුව'),
(3, NULL, 'ඕස්ට්‍රේලියාවේ අගනුවර කුමක්ද?', 'කැන්බරා'),
(3, NULL, 'යකඩවල රසායනික සංකේතය කුමක්ද?', 'Fe'),
(3, NULL, 'ආවර්තිතා වගුවේ පළමු මූලද්‍රව්‍යය කුමක්ද?', 'හයිඩ්‍රජන්'),
(3, NULL, 'රුධිරයේ ඔක්සිජන් ප්‍රවාහනය කරන වර්ණකය කුමක්ද?', 'හීමොග්ලොබින්'),
(3, NULL, 'විද්‍යුත් ධාරාව මනින ඒකකය කුමක්ද?', 'ඇම්පියර්'),
(3, NULL, 'වායුගෝලයේ වැඩිම ප්‍රතිශතයක් ඇති වායුව කුමක්ද?', 'නයිට්‍රජන්'),
(3, NULL, '200 හි 15% කීයද?', '30'),
(3, NULL, '20ට අඩු විශාලතම ප්‍රථමක සංඛ්‍යාව කීයද?', '19'),
(3, NULL, 'සමපාද ත්‍රිකෝණයක එක් කෝණයක අගය කීයද?', '60°'),
(3, NULL, 'ශ්‍රී ලංකාවේ පළමු විධායක ජනාධිපති කවුද?', 'ජේ. ආර්. ජයවර්ධන'),
(3, NULL, 'ශ්‍රී ලංකාවේ පරිපාලන අගනුවර කුමක්ද?', 'ශ්‍රී ජයවර්ධනපුර කෝට්ටේ'),
(3, NULL, 'සීගිරිය නිර්මාණය කළ රජතුමා කවුද?', 'කාශ්‍යප'),
(3, NULL, 'ලංකාවට බුදුදහම ගෙන ආ මහරහතන් වහන්සේ කවුද?', 'මිහිඳු හිමි'),
(3, NULL, 'ශ්‍රී ලංකාවේ උසම කඳු මුදුන කුමක්ද?', 'පිදුරුතලාගල'),
(3, NULL, 'ශ්‍රී ලංකාවේ විශාලතම ජාතික වනෝද්‍යානය කුමක්ද?', 'විල්පත්තුව'),
(3, NULL, 'ගුරුත්වාකර්ෂණ නියමය ඉදිරිපත් කළ විද්‍යාඥයා කවුද?', 'අයිසැක් නිව්ටන්'),
(3, NULL, 'සාපේක්ෂතාවාදය ඉදිරිපත් කළ විද්‍යාඥයා කවුද?', 'ඇල්බට් අයින්ස්ටයින්'),
(3, NULL, 'World Wide Web නිපදවූයේ කවුද?', 'ටිම් බර්නර්ස්-ලී'),
(3, NULL, 'HTTP හි සම්පූර්ණ නම කුමක්ද?', 'Hyper Text Transfer Protocol'),
(3, NULL, 'බයිට් එකක බිට් කීයද?', '8'),
(3, NULL, 'RAM හි සම්පූර්ණ නම කුමක්ද?', 'Random Access Memory'),
(3, NULL, 'බ්‍රසීලයේ රාජ්‍ය භාෂාව කුමක්ද?', 'පෘතුගීසි'),
(3, NULL, 'ප්‍රංශ විප්ලවය ඇරඹුණු වර්ෂය කුමක්ද?', '1789'),
(3, NULL, 'දෙවන ලෝක යුද්ධය අවසන් වූ වර්ෂය කුමක්ද?', '1945'),
(3, NULL, 'සාර්ක් (SAARC) හි මූලස්ථානය පිහිටා ඇති නගරය කුමක්ද?', 'කත්මන්ඩු'),
(3, NULL, 'එක්සත් ජාතීන්ගේ මූලස්ථානය පිහිටි නගරය කුමක්ද?', 'නිව් යෝක්'),
(3, NULL, 'ආලෝක වර්ෂය මනින්නේ කුමක්ද?', 'දුර'),
(3, NULL, 'ලෝකයේ විශාලතම උණුසුම් කාන්තාරය කුමක්ද?', 'සහරා');