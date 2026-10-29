/* IngrediLens restaurant allergy card. Runs entirely in the browser: no network calls,
 * no tracking, no external libraries. Built by ingredilens/Tools/build_tools.py, which
 * replaces the DATA placeholder with the app's phrasebook
 * (IngrediLens/Seyahat/AllergyCardPhrases.json). */
(function () {
  'use strict';
  var BOOK = {"allergenOrder":["gluten","milk","lactose","egg","peanuts","tree_nuts","soy","sesame","fish","crustaceans","molluscs","mustard","celery","lupin","sulfites","carmine"],"languages":[{"code":"en","name":"English","rtl":false,"review":false,"title":"Food allergy card","intro":"I have a serious allergy to the following:","request":"Please make sure my food does not contain any of these, including traces, and is not prepared with shared oil or utensils.","thanks":"Thank you.","allergens":{"gluten":"Gluten (wheat, barley, rye)","milk":"Milk and dairy products","lactose":"Lactose (milk sugar)","egg":"Egg","peanuts":"Peanuts","tree_nuts":"Tree nuts (almond, hazelnut, walnut, cashew, pistachio, etc.)","soy":"Soy","sesame":"Sesame","fish":"Fish","crustaceans":"Crustaceans (shrimp, prawn, crab, lobster)","molluscs":"Molluscs (mussels, oysters, squid, octopus, clams)","mustard":"Mustard","celery":"Celery","lupin":"Lupin","sulfites":"Sulphites (sulphur dioxide)","carmine":"Carmine / cochineal (E120)"}},{"code":"es","name":"Español","rtl":false,"review":false,"title":"Tarjeta de alergias alimentarias","intro":"Tengo una alergia grave a los siguientes alimentos:","request":"Por favor, asegúrese de que mi comida no contenga ninguno de ellos, ni siquiera trazas, y de que no se prepare con aceite ni utensilios compartidos.","thanks":"Muchas gracias.","allergens":{"gluten":"Gluten (trigo, cebada, centeno)","milk":"Leche y productos lácteos","lactose":"Lactosa (azúcar de la leche)","egg":"Huevo","peanuts":"Cacahuete (maní)","tree_nuts":"Frutos secos de cáscara (almendra, avellana, nuez, anacardo, pistacho…)","soy":"Soja","sesame":"Sésamo","fish":"Pescado","crustaceans":"Crustáceos (gambas, langostinos, cangrejo, langosta)","molluscs":"Moluscos (mejillones, ostras, calamar, pulpo, almejas)","mustard":"Mostaza","celery":"Apio","lupin":"Altramuz","sulfites":"Sulfitos (dióxido de azufre)","carmine":"Carmín / cochinilla (E120)"}},{"code":"pt","name":"Português","rtl":false,"review":false,"title":"Cartão de alergia alimentar","intro":"Tenho uma alergia grave aos seguintes alimentos:","request":"Por favor, verifique se a minha comida não contém nenhum deles, nem mesmo vestígios, e se não é preparada com óleo ou utensílios usados para outros pratos.","thanks":"Muito obrigado(a).","allergens":{"gluten":"Glúten (trigo, cevada, centeio)","milk":"Leite e derivados","lactose":"Lactose (açúcar do leite)","egg":"Ovo","peanuts":"Amendoim","tree_nuts":"Frutos de casca rija / castanhas (amêndoa, avelã, noz, caju, pistácio…)","soy":"Soja","sesame":"Sésamo / gergelim","fish":"Peixe","crustaceans":"Crustáceos (camarão, caranguejo, lagosta)","molluscs":"Moluscos (mexilhão, ostra, lula, polvo)","mustard":"Mostarda","celery":"Aipo (salsão)","lupin":"Tremoço","sulfites":"Sulfitos (dióxido de enxofre)","carmine":"Carmim / cochonilha (E120)"}},{"code":"fr","name":"Français","rtl":false,"review":false,"title":"Carte d’allergie alimentaire","intro":"Je suis gravement allergique aux aliments suivants :","request":"Merci de vous assurer que mon plat n’en contient aucun, même à l’état de traces, et qu’il n’est pas préparé avec une huile ou des ustensiles partagés.","thanks":"Merci beaucoup.","allergens":{"gluten":"Gluten (blé, orge, seigle)","milk":"Lait et produits laitiers","lactose":"Lactose (sucre du lait)","egg":"Œufs","peanuts":"Arachides (cacahuètes)","tree_nuts":"Fruits à coque (amandes, noisettes, noix, noix de cajou, pistaches…)","soy":"Soja","sesame":"Sésame","fish":"Poisson","crustaceans":"Crustacés (crevettes, crabe, homard)","molluscs":"Mollusques (moules, huîtres, calamars, poulpe, palourdes)","mustard":"Moutarde","celery":"Céleri","lupin":"Lupin","sulfites":"Sulfites (anhydride sulfureux)","carmine":"Carmin / cochenille (E120)"}},{"code":"de","name":"Deutsch","rtl":false,"review":false,"title":"Allergiekarte","intro":"Ich habe eine schwere Allergie gegen folgende Lebensmittel:","request":"Bitte stellen Sie sicher, dass mein Essen nichts davon enthält, auch keine Spuren, und nicht mit gemeinsam genutztem Öl oder Küchengeräten zubereitet wird.","thanks":"Vielen Dank.","allergens":{"gluten":"Gluten (Weizen, Gerste, Roggen)","milk":"Milch und Milchprodukte","lactose":"Laktose (Milchzucker)","egg":"Ei","peanuts":"Erdnüsse","tree_nuts":"Schalenfrüchte / Nüsse (Mandeln, Haselnüsse, Walnüsse, Cashewkerne, Pistazien …)","soy":"Soja","sesame":"Sesam","fish":"Fisch","crustaceans":"Krebstiere (Garnelen, Krabben, Hummer)","molluscs":"Weichtiere (Muscheln, Austern, Tintenfisch, Oktopus)","mustard":"Senf","celery":"Sellerie","lupin":"Lupinen","sulfites":"Sulfite (Schwefeldioxid)","carmine":"Karmin / Cochenille (E120)"}},{"code":"it","name":"Italiano","rtl":false,"review":false,"title":"Scheda allergie alimentari","intro":"Ho una grave allergia ai seguenti alimenti:","request":"Per favore, assicuratevi che il mio piatto non ne contenga nessuno, nemmeno in tracce, e che non venga preparato con olio o utensili usati per altri piatti.","thanks":"Grazie mille.","allergens":{"gluten":"Glutine (frumento, orzo, segale)","milk":"Latte e latticini","lactose":"Lattosio (zucchero del latte)","egg":"Uova","peanuts":"Arachidi","tree_nuts":"Frutta a guscio (mandorle, nocciole, noci, anacardi, pistacchi…)","soy":"Soia","sesame":"Sesamo","fish":"Pesce","crustaceans":"Crostacei (gamberi, granchi, aragosta)","molluscs":"Molluschi (cozze, ostriche, calamari, polpo, vongole)","mustard":"Senape","celery":"Sedano","lupin":"Lupini","sulfites":"Solfiti (anidride solforosa)","carmine":"Carminio / cocciniglia (E120)"}},{"code":"nl","name":"Nederlands","rtl":false,"review":true,"title":"Voedselallergiekaart","intro":"Ik ben ernstig allergisch voor het volgende:","request":"Zorg er alstublieft voor dat mijn eten hier niets van bevat, ook geen sporen, en dat het niet wordt bereid met olie of keukengerei dat ook voor andere gerechten wordt gebruikt.","thanks":"Hartelijk dank.","allergens":{"gluten":"Gluten (tarwe, gerst, rogge)","milk":"Melk en zuivelproducten","lactose":"Lactose (melksuiker)","egg":"Ei","peanuts":"Pinda’s","tree_nuts":"Noten (amandel, hazelnoot, walnoot, cashewnoot, pistache …)","soy":"Soja","sesame":"Sesam","fish":"Vis","crustaceans":"Schaaldieren (garnalen, krab, kreeft)","molluscs":"Weekdieren (mosselen, oesters, inktvis, octopus)","mustard":"Mosterd","celery":"Selderij","lupin":"Lupine","sulfites":"Sulfiet (zwaveldioxide)","carmine":"Karmijn / cochenille (E120)"}},{"code":"el","name":"Ελληνικά","rtl":false,"review":true,"title":"Κάρτα τροφικής αλλεργίας","intro":"Έχω σοβαρή αλλεργία στα παρακάτω:","request":"Παρακαλώ βεβαιωθείτε ότι το φαγητό μου δεν περιέχει τίποτα από αυτά, ούτε ίχνη, και ότι δεν μαγειρεύεται με λάδι ή σκεύη που χρησιμοποιούνται και για άλλα φαγητά.","thanks":"Ευχαριστώ πολύ.","allergens":{"gluten":"Γλουτένη (σιτάρι, κριθάρι, σίκαλη)","milk":"Γάλα και γαλακτοκομικά προϊόντα","lactose":"Λακτόζη (σάκχαρο του γάλακτος)","egg":"Αυγό","peanuts":"Αράπικα φιστίκια","tree_nuts":"Ξηροί καρποί (αμύγδαλα, φουντούκια, καρύδια, κάσιους, φιστίκια Αιγίνης κ.λπ.)","soy":"Σόγια","sesame":"Σουσάμι","fish":"Ψάρι","crustaceans":"Οστρακοειδή (γαρίδες, καβούρια, αστακός)","molluscs":"Μαλάκια (μύδια, στρείδια, καλαμάρι, χταπόδι)","mustard":"Μουστάρδα","celery":"Σέλινο","lupin":"Λούπινο","sulfites":"Θειώδη (διοξείδιο του θείου)","carmine":"Καρμίνιο / κοχενίλη (E120)"}},{"code":"tr","name":"Türkçe","rtl":false,"review":false,"title":"Gıda alerjisi kartı","intro":"Aşağıdakilere karşı ciddi alerjim var:","request":"Lütfen yemeğimde bunların hiçbirinin, eser miktarda bile olsa, bulunmadığından ve ortak kullanılan yağ ya da mutfak gereçleriyle hazırlanmadığından emin olun.","thanks":"Teşekkür ederim.","allergens":{"gluten":"Gluten (buğday, arpa, çavdar)","milk":"Süt ve süt ürünleri","lactose":"Laktoz (süt şekeri)","egg":"Yumurta","peanuts":"Yer fıstığı","tree_nuts":"Sert kabuklu yemişler (badem, fındık, ceviz, kaju, Antep fıstığı vb.)","soy":"Soya","sesame":"Susam","fish":"Balık","crustaceans":"Kabuklular (karides, yengeç, ıstakoz)","molluscs":"Yumuşakçalar (midye, istiridye, kalamar, ahtapot)","mustard":"Hardal","celery":"Kereviz","lupin":"Lupin (acı bakla)","sulfites":"Sülfitler (kükürt dioksit)","carmine":"Karmin / koşnil (E120)"}},{"code":"ar","name":"العربية","rtl":true,"review":true,"title":"بطاقة حساسية الطعام","intro":"أعاني من حساسية شديدة تجاه ما يلي:","request":"يُرجى التأكد من أن طعامي لا يحتوي على أيٍّ منها، ولا حتى على آثار منها، وأنه لا يُحضَّر بزيت أو أدوات مشتركة مع أطباق أخرى.","thanks":"شكرًا جزيلًا.","allergens":{"gluten":"الغلوتين (القمح، الشعير، الجاودار)","milk":"الحليب ومشتقاته","lactose":"اللاكتوز (سكر الحليب)","egg":"البيض","peanuts":"الفول السوداني","tree_nuts":"المكسرات (اللوز، البندق، الجوز، الكاجو، الفستق الحلبي…)","soy":"الصويا","sesame":"السمسم","fish":"السمك","crustaceans":"القشريات (الروبيان، السلطعون، الكركند)","molluscs":"الرخويات (بلح البحر، المحار، الحبار، الأخطبوط)","mustard":"الخردل","celery":"الكرفس","lupin":"الترمس","sulfites":"الكبريتيت (ثاني أكسيد الكبريت)","carmine":"الكارمين / القرمز (E120)"}},{"code":"ru","name":"Русский","rtl":false,"review":true,"title":"Карточка пищевой аллергии","intro":"У меня сильная аллергия на следующие продукты:","request":"Пожалуйста, убедитесь, что в моём блюде нет ничего из этого, даже в следовых количествах, и что его не готовят на том же масле и той же посудой, что и другие блюда.","thanks":"Спасибо!","allergens":{"gluten":"Глютен (пшеница, ячмень, рожь)","milk":"Молоко и молочные продукты","lactose":"Лактоза (молочный сахар)","egg":"Яйца","peanuts":"Арахис","tree_nuts":"Орехи (миндаль, фундук, грецкий орех, кешью, фисташки и др.)","soy":"Соя","sesame":"Кунжут","fish":"Рыба","crustaceans":"Ракообразные (креветки, крабы, омары)","molluscs":"Моллюски (мидии, устрицы, кальмары, осьминоги)","mustard":"Горчица","celery":"Сельдерей","lupin":"Люпин","sulfites":"Сульфиты (диоксид серы)","carmine":"Кармин / кошениль (E120)"}},{"code":"ja","name":"日本語","rtl":false,"review":true,"title":"食物アレルギーカード","intro":"私は次の食品に重いアレルギーがあります：","request":"料理にこれらが入っていないか、ご確認をお願いします。微量の混入や、共用の油・調理器具の使用も避けてください。","thanks":"よろしくお願いいたします。","allergens":{"gluten":"グルテン（小麦・大麦・ライ麦）","milk":"乳・乳製品","lactose":"乳糖","egg":"卵","peanuts":"落花生（ピーナッツ）","tree_nuts":"木の実類（アーモンド、ヘーゼルナッツ、くるみ、カシューナッツ、ピスタチオなど）","soy":"大豆","sesame":"ごま","fish":"魚（だし・魚醤を含む）","crustaceans":"甲殻類（えび・かに・ロブスター）","molluscs":"貝類・いか・たこ（ムール貝、牡蠣、オイスターソースを含む）","mustard":"マスタード（からし）","celery":"セロリ","lupin":"ルピナス","sulfites":"亜硫酸塩（二酸化硫黄）","carmine":"コチニール色素（カルミン、E120）"}},{"code":"zh-Hans","name":"简体中文","rtl":false,"review":true,"title":"食物过敏卡","intro":"我对以下食物严重过敏：","request":"请确保我的食物中不含以上任何成分，包括微量残留，也不要使用与其他菜品共用的油或厨具。","thanks":"谢谢！","allergens":{"gluten":"麸质（小麦、大麦、黑麦）","milk":"牛奶及奶制品","lactose":"乳糖","egg":"鸡蛋","peanuts":"花生","tree_nuts":"坚果（杏仁、榛子、核桃、腰果、开心果等）","soy":"大豆（包括酱油）","sesame":"芝麻（包括芝麻油）","fish":"鱼（包括鱼露）","crustaceans":"甲壳类（虾、蟹、龙虾，包括虾酱）","molluscs":"软体动物（贻贝、牡蛎、鱿鱼、章鱼，包括蚝油）","mustard":"黄芥末（芥菜籽）","celery":"芹菜","lupin":"羽扇豆","sulfites":"亚硫酸盐（二氧化硫）","carmine":"胭脂虫红（E120）"}},{"code":"ko","name":"한국어","rtl":false,"review":true,"title":"식품 알레르기 카드","intro":"저는 다음 식품에 심한 알레르기가 있습니다:","request":"제 음식에 이 재료들이 들어가지 않도록 확인해 주세요. 아주 적은 양도 안 되며, 다른 음식과 같이 쓰는 기름이나 조리 도구도 사용하지 말아 주세요.","thanks":"감사합니다.","allergens":{"gluten":"글루텐(밀, 보리, 호밀)","milk":"우유 및 유제품","lactose":"유당(락토스)","egg":"달걀","peanuts":"땅콩","tree_nuts":"견과류(아몬드, 헤이즐넛, 호두, 캐슈너트, 피스타치오 등)","soy":"대두(콩, 간장·된장 포함)","sesame":"참깨(참기름 포함)","fish":"생선(멸치 육수, 액젓 포함)","crustaceans":"갑각류(새우, 게, 바닷가재, 새우젓 포함)","molluscs":"연체동물·조개류(홍합, 굴, 오징어, 문어, 굴소스 포함)","mustard":"겨자(머스터드)","celery":"셀러리","lupin":"루핀","sulfites":"아황산염(이산화황)","carmine":"코치닐 색소(카민, E120)"}},{"code":"th","name":"ไทย","rtl":false,"review":true,"title":"บัตรแจ้งอาการแพ้อาหาร","intro":"ฉันแพ้อาหารต่อไปนี้อย่างรุนแรง:","request":"กรุณาตรวจสอบให้แน่ใจว่าอาหารของฉันไม่มีส่วนผสมเหล่านี้เลย แม้แต่ปริมาณเล็กน้อย และไม่ใช้น้ำมันหรืออุปกรณ์ทำอาหารร่วมกับเมนูอื่น","thanks":"ขอบคุณมาก","allergens":{"gluten":"กลูเตน (ข้าวสาลี ข้าวบาร์เลย์ ข้าวไรย์)","milk":"นมและผลิตภัณฑ์จากนม","lactose":"แล็กโทส (น้ำตาลในนม)","egg":"ไข่","peanuts":"ถั่วลิสง","tree_nuts":"ถั่วเปลือกแข็ง (อัลมอนด์ เฮเซลนัท วอลนัท เม็ดมะม่วงหิมพานต์ พิสตาชิโอ ฯลฯ)","soy":"ถั่วเหลือง (รวมถึงซีอิ๊ว)","sesame":"งา (รวมถึงน้ำมันงา)","fish":"ปลา (รวมถึงน้ำปลา)","crustaceans":"กุ้ง ปู และสัตว์มีเปลือกอื่นๆ (รวมถึงกะปิ)","molluscs":"หอยและปลาหมึก (หอยแมลงภู่ หอยนางรม รวมถึงน้ำมันหอย)","mustard":"มัสตาร์ด","celery":"ขึ้นฉ่าย (เซเลอรี)","lupin":"ถั่วลูพิน","sulfites":"ซัลไฟต์ (ซัลเฟอร์ไดออกไซด์)","carmine":"สีคาร์มีน / โคชินีล (E120)"}}]};
  var KEY_A = 'ingredilens.web.allergens.v1', KEY_L = 'ingredilens.web.cardLanguage.v1';

  function load(key) { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (e) { return null; } }
  function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'text') e.textContent = attrs[k]; else if (k === 'class') e.className = attrs[k]; else e.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (k) { if (k) e.appendChild(typeof k === 'string' ? document.createTextNode(k) : k); });
    return e;
  }
  function short(name) { return name.replace(/\s*[(（].*$/, ''); }
  function lang(code) { for (var i = 0; i < BOOK.languages.length; i++) if (BOOK.languages[i].code === code) return BOOK.languages[i]; return null; }

  function init() {
    var uiNode = document.getElementById('il-ui');
    if (!uiNode) return;
    var UI = JSON.parse(uiNode.textContent);
    var own = lang(UI.lang) || lang('en');
    var box = document.getElementById('il-allergens'), select = document.getElementById('il-lang');
    var card = document.getElementById('il-card'), meaning = document.getElementById('il-meaning');
    var note = document.getElementById('il-review'), status = document.getElementById('il-status');
    var buttons = ['il-print', 'il-image', 'il-copy', 'il-share'].map(function (id) { return document.getElementById(id); });

    var chosen = (load(KEY_A) || []).filter(function (a) { return BOOK.allergenOrder.indexOf(a) !== -1; });
    var target = load(KEY_L);
    if (!lang(target)) target = UI.defaultTarget;

    BOOK.allergenOrder.forEach(function (a) {
      var cb = el('input', { type: 'checkbox', value: a });
      cb.checked = chosen.indexOf(a) !== -1;
      cb.addEventListener('change', function () {
        chosen = BOOK.allergenOrder.filter(function (x) { return box.querySelector('input[value="' + x + '"]').checked; });
        save(KEY_A, chosen); render();
      });
      box.appendChild(el('label', { class: 'chip' }, [cb, ' ' + short(own.allergens[a])]));
    });

    var names = null;
    try { names = new Intl.DisplayNames([UI.lang], { type: 'language' }); } catch (e) { names = null; }
    BOOK.languages.forEach(function (l) {
      var local = names ? names.of(l.code) : '';
      var label = l.name + (local && local.toLowerCase() !== l.name.toLowerCase() ? ' · ' + local : '') + (l.review ? ' (' + UI.reviewTag + ')' : '');
      var opt = el('option', { value: l.code, text: label });
      if (l.code === target) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener('change', function () { target = select.value; save(KEY_L, target); render(); });

    function face(l, into, small) {
      into.innerHTML = '';
      into.setAttribute('lang', l.code);
      into.setAttribute('dir', l.rtl ? 'rtl' : 'ltr');
      into.appendChild(el(small ? 'strong' : 'div', { class: small ? '' : 'card-title', text: l.title }));
      into.appendChild(el('p', { class: 'card-intro', text: l.intro }));
      into.appendChild(el('ul', { class: 'card-list' }, chosen.map(function (a) { return el('li', { text: l.allergens[a] }); })));
      into.appendChild(el('p', { class: 'card-request', text: l.request }));
      into.appendChild(el('p', { class: 'card-thanks', text: l.thanks }));
    }

    function render() {
      var l = lang(target);
      buttons.forEach(function (b) { if (b) b.disabled = !chosen.length; });
      status.textContent = '';
      if (!chosen.length) {
        card.innerHTML = ''; card.removeAttribute('lang'); card.setAttribute('dir', 'ltr');
        card.appendChild(el('p', { class: 'card-empty', text: UI.none }));
        meaning.hidden = true; note.hidden = true;
        return;
      }
      face(l, card, false);
      note.hidden = !l.review;
      if (l.code !== own.code) {
        meaning.hidden = false;
        var body = document.getElementById('il-meaning-body');
        face(own, body, true);
      } else {
        meaning.hidden = true;
      }
    }

    function plain(l) {
      return [l.title, '', l.intro].concat(chosen.map(function (a) { return '• ' + l.allergens[a]; })).concat(['', l.request, l.thanks]).join('\n');
    }

    // ---------------------------------------------------------------- image
    var FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans", "Noto Sans Arabic", "Noto Sans JP", "Noto Sans Thai", sans-serif';
    function pieces(text, code) {
      if (typeof Intl !== 'undefined' && Intl.Segmenter) {
        try { return Array.from(new Intl.Segmenter(code, { granularity: 'word' }).segment(text), function (s) { return s.segment; }); } catch (e) { /* fall through */ }
      }
      return /\s/.test(text) ? text.split(/(\s+)/) : Array.from(text);
    }
    function wrap(ctx, text, max, code) {
      var lines = [], line = '';
      pieces(text, code).forEach(function (p) {
        var next = line + p;
        if (ctx.measureText(next).width <= max || !line.trim()) {
          if (ctx.measureText(next).width > max) {       // a single piece wider than the line
            Array.from(p).forEach(function (ch) {
              if (ctx.measureText(line + ch).width > max && line) { lines.push(line); line = ''; }
              line += ch;
            });
          } else line = next;
        } else { lines.push(line.replace(/\s+$/, '')); line = p.replace(/^\s+/, ''); }
      });
      if (line.trim()) lines.push(line.replace(/\s+$/, ''));
      return lines;
    }
    function drawCard(l) {
      var W = 1080, PAD = 72, INNER = W - PAD * 2, canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
      var blocks = [];   // {font, color, lines, gap, indent, bullet}
      function block(text, size, weight, gap, color, bullet) {
        ctx.font = weight + ' ' + size + 'px ' + FONT;
        var indent = bullet ? 44 : 0;
        blocks.push({ font: ctx.font, size: size, lines: wrap(ctx, text, INNER - indent, l.code), gap: gap, color: color || '#111', indent: indent, bullet: bullet });
      }
      block(l.intro, 42, '600', 36);
      chosen.forEach(function (a) { block(l.allergens[a], 50, '700', 18, '#111', true); });
      block(l.request, 38, '400', 40);
      block(l.thanks, 38, '600', 28);
      var HEADER = 150, h = HEADER + 56;
      blocks.forEach(function (b) { h += b.gap + b.lines.length * Math.round(b.size * 1.3); });
      h += 90;
      canvas.width = W; canvas.height = h;
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, W, h);
      ctx.fillStyle = '#b91c1c'; ctx.fillRect(0, 0, W, HEADER);
      ctx.direction = l.rtl ? 'rtl' : 'ltr';
      ctx.textAlign = l.rtl ? 'right' : 'left';
      ctx.textBaseline = 'alphabetic';
      var x0 = l.rtl ? W - PAD : PAD, dir = l.rtl ? -1 : 1;
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 60px ' + FONT;
      ctx.fillText(wrap(ctx, l.title, INNER, l.code)[0], x0, 98);
      var y = HEADER + 56;
      blocks.forEach(function (b) {
        y += b.gap;
        ctx.font = b.font; ctx.fillStyle = b.color;
        b.lines.forEach(function (line, i) {
          y += Math.round(b.size * 1.3);
          if (b.bullet && i === 0) { ctx.fillStyle = '#b91c1c'; ctx.fillText('●', x0, y - 4); ctx.fillStyle = b.color; }
          ctx.fillText(line, x0 + dir * b.indent, y - Math.round(b.size * 0.25));
        });
      });
      ctx.fillStyle = '#d4d4d8'; ctx.fillRect(PAD, h - 70, INNER, 2);
      ctx.fillStyle = '#71717a'; ctx.font = '400 26px ' + FONT; ctx.direction = 'ltr'; ctx.textAlign = 'right';
      ctx.fillText('IngrediLens', W - PAD, h - 30);
      return canvas;
    }
    function pngBlob(cb) {
      var canvas = drawCard(lang(target));
      if (canvas.toBlob) canvas.toBlob(cb, 'image/png');
      else cb(null);
    }

    // ---------------------------------------------------------------- buttons
    document.getElementById('il-print').addEventListener('click', function () { window.print(); });
    document.getElementById('il-image').addEventListener('click', function () {
      pngBlob(function (blob) {
        if (!blob) { status.textContent = UI.failed; return; }
        var a = el('a', { href: URL.createObjectURL(blob), download: 'allergy-card-' + target + '.png' });
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      });
    });
    document.getElementById('il-copy').addEventListener('click', function () {
      var text = plain(lang(target));
      function done() { status.textContent = UI.copied; }
      function fallback() {
        var ta = el('textarea', { readonly: '' }); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { status.textContent = UI.failed; }
        ta.remove();
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
    });
    var share = document.getElementById('il-share');
    if (!navigator.share) share.hidden = true;
    share.addEventListener('click', function () {
      var l = lang(target), text = plain(l);
      pngBlob(function (blob) {
        var data = { title: l.title, text: text };
        try {
          var file = blob && typeof File !== 'undefined' ? new File([blob], 'allergy-card-' + target + '.png', { type: 'image/png' }) : null;
          if (file && navigator.canShare && navigator.canShare({ files: [file] })) data = { title: l.title, text: text, files: [file] };
        } catch (e) { /* share text only */ }
        navigator.share(data).catch(function () { /* cancelled */ });
      });
    });
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
