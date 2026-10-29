/* IngrediLens ingredient list allergen checker. Runs entirely in the browser: no network
 * calls, no tracking. Built by ingredilens/Tools/build_tools.py, which replaces the
 * DATA placeholder with allergen names from the app's ingredient database and the
 * statement patterns from Sources/Services/TextProcessing.swift (AllergenStatements). */
(function (root) {
  'use strict';
  var D = {"v":1,"tags":["gluten","milk","lactose","egg","peanuts","tree_nuts","soy","sesame","fish","crustaceans","molluscs","mustard","celery","lupin","sulfites","carmine"],"entries":[{"n":{"en":"Wheat flour","es":"Harina de trigo","pt":"Farinha de trigo","de":"Weizenmehl","fr":"Farine de blé","it":"Farina di frumento"},"t":["gluten"]},{"n":{"en":"Barley malt extract","es":"Extracto de malta de cebada","pt":"Extrato de malte de cevada","de":"Gerstenmalzextrakt","fr":"Extrait de malt d'orge","it":"Estratto di malto d'orzo"},"t":["gluten"]},{"n":{"en":"Rye flour","es":"Harina de centeno","pt":"Farinha de centeio","de":"Roggenmehl","fr":"Farine de seigle","it":"Farina di segale"},"t":["gluten"]},{"n":{"en":"Oats","es":"Avena","pt":"Aveia","de":"Hafer","fr":"Avoine","it":"Avena"},"t":["gluten"]},{"n":{"en":"Milk powder","es":"Leche en polvo","pt":"Leite em pó","de":"Milchpulver","fr":"Lait en poudre","it":"Latte in polvere"},"t":["lactose","milk"]},{"n":{"en":"Whey protein","es":"Proteína de suero de leche","pt":"Proteína do soro de leite","de":"Molkenprotein","fr":"Protéines de lactosérum","it":"Proteine del siero di latte"},"t":["milk"]},{"n":{"en":"Casein","es":"Caseína","pt":"Caseína","de":"Kasein","fr":"Caséine","it":"Caseina"},"t":["milk"]},{"n":{"en":"Lactose","es":"Lactosa","pt":"Lactose","de":"Laktose","fr":"Lactose","it":"Lattosio"},"t":["lactose","milk"]},{"n":{"en":"Egg white powder","es":"Clara de huevo en polvo","pt":"Clara de ovo em pó","de":"Eiklarpulver","fr":"Blanc d'œuf en poudre","it":"Albume d'uovo in polvere"},"t":["egg"]},{"n":{"en":"Peanut","es":"Maní","pt":"Amendoim","de":"Erdnuss","fr":"Arachide","it":"Arachide"},"t":["peanuts"]},{"n":{"en":"Almond","es":"Almendra","pt":"Amêndoa","de":"Mandel","fr":"Amande","it":"Mandorla"},"t":["tree_nuts"]},{"n":{"en":"Hazelnut","es":"Avellana","pt":"Avelã","de":"Haselnuss","fr":"Noisette","it":"Nocciola"},"t":["tree_nuts"]},{"n":{"en":"Cashew","es":"Castaña de cajú","pt":"Castanha de caju","de":"Cashewkern","fr":"Noix de cajou","it":"Anacardo"},"t":["tree_nuts"]},{"n":{"en":"Walnut","es":"Nuez","pt":"Noz","de":"Walnuss","fr":"Noix","it":"Noce"},"t":["tree_nuts"]},{"n":{"en":"Pistachio","es":"Pistacho","pt":"Pistache","de":"Pistazie","fr":"Pistache","it":"Pistacchio"},"t":["tree_nuts"]},{"n":{"en":"Pecan","es":"Nuez pecán","pt":"Noz-pecã","de":"Pekannuss","fr":"Noix de pécan","it":"Noce pecan"},"t":["tree_nuts"]},{"n":{"en":"Soy lecithin","es":"Lecitina de soja","pt":"Lecitina de soja","de":"Sojalecithin","fr":"Lécithine de soja","it":"Lecitina di soia"},"t":["soy"]},{"n":{"en":"Sesame seed","es":"Semilla de sésamo","pt":"Semente de gergelim","de":"Sesamsaat","fr":"Graine de sésame","it":"Seme di sesamo"},"t":["sesame"]},{"n":{"en":"Anchovy","es":"Anchoa","pt":"Anchova","de":"Sardelle","fr":"Anchois","it":"Acciuga"},"t":["fish"]},{"n":{"en":"Shrimp","es":"Camarón","pt":"Camarão","de":"Garnele","fr":"Crevette","it":"Gambero"},"t":["crustaceans"]},{"n":{"en":"Mollusc","es":"Molusco","pt":"Molusco","de":"Weichtier","fr":"Mollusque","it":"Mollusco"},"t":["molluscs"]},{"n":{"en":"Mustard seed","es":"Semilla de mostaza","pt":"Semente de mostarda","de":"Senfsaat","fr":"Graine de moutarde","it":"Seme di senape"},"t":["mustard"]},{"n":{"en":"Celery","es":"Apio","pt":"Aipo","de":"Sellerie","fr":"Céleri","it":"Sedano"},"t":["celery"]},{"n":{"en":"Lupin flour","es":"Harina de altramuz","pt":"Farinha de tremoço","de":"Lupinenmehl","fr":"Farine de lupin","it":"Farina di lupini"},"t":["lupin"]},{"n":{"en":"Sulphur dioxide","es":"Dióxido de azufre","pt":"Dióxido de enxofre","de":"Schwefeldioxid","fr":"Dioxyde de soufre","it":"Anidride solforosa"},"t":["sulfites"]},{"n":{"en":"Cochineal","es":"Cochinilla","pt":"Cochonilha","de":"Karmin","fr":"Cochenille","it":"Cocciniglia"},"t":["carmine"]},{"n":{"en":"Hydrolyzed wheat protein","es":"Proteína de trigo hidrolizada","pt":"Proteína de trigo hidrolisada","de":"Hydrolysiertes weizenprotein","fr":"Protéine de blé hydrolysée","it":"Proteine idrolizzate del frumento"},"t":["gluten"]},{"n":{"en":"Maltodextrin","es":"Maltodextrina","pt":"Maltodextrina","de":"Maltodextrin","fr":"Maltodextrine","it":"Maltodestrina"},"t":["gluten"]},{"n":{"en":"Cheese","es":"Queso","pt":"Queijo","de":"Käse","fr":"Fromage","it":"Formaggio"},"t":["lactose","milk"]},{"n":{"en":"Milk fat","es":"Grasa láctea","pt":"Gordura láctea","de":"Milchfett","fr":"Matière grasse laitière","it":"Grasso del latte"},"t":["milk"]},{"n":{"en":"Skim milk powder","es":"Leche en polvo descremada","pt":"Leite em pó desnatado","de":"Magermilchpulver","fr":"Lait écrémé en poudre","it":"Latte scremato in polvere"},"t":["lactose","milk"]},{"n":{"en":"Whole egg powder","es":"Huevo entero en polvo","pt":"Ovo integral em pó","de":"Volleipulver","fr":"Œuf entier en poudre","it":"Uovo intero in polvere"},"t":["egg"]},{"n":{"en":"Gluten","es":"Gluten","pt":"Glúten","de":"Gluten","fr":"Gluten","it":"Glutine"},"t":["gluten"]},{"n":{"en":"Malt","es":"Malta","pt":"Malte","de":"Malz","fr":"Malt","it":"Malto"},"t":["gluten"]},{"n":{"en":"Soy protein","es":"Proteína de soja","pt":"Proteína de soja","de":"Sojaprotein","fr":"Protéine de soja","it":"Proteine di soia"},"t":["soy"]},{"n":{"en":"Soy sauce","es":"Salsa de soja","pt":"Molho de soja","de":"Sojasosse","fr":"Sauce soja","it":"Salsa di soia"},"t":["gluten","soy"]},{"n":{"en":"Sesame seeds","es":"Semillas de sésamo","pt":"Sementes de gergelim","de":"Sesam","fr":"Graines de sésame","it":"Semi di sesamo"},"t":["sesame"]},{"n":{"en":"Brazil nut","es":"Nuez de brasil","pt":"Castanha-do-pará","de":"Paranuss","fr":"Noix du brésil","it":"Noce del brasile"},"t":["tree_nuts"]},{"n":{"en":"Macadamia","es":"Macadamia","pt":"Macadâmia","de":"Macadamianuss","fr":"Noix de macadamia","it":"Noce di macadamia"},"t":["tree_nuts"]}],"terms":[["FARINHA DE TRIGO ENRIQUECIDA COM FERRO E ACIDO FOLICO","gluten",0,"",0],["PROTEINE IDROLIZZATE DEL FRUMENTO","gluten",26,"",0],["EMULSIFICANTE LECITINA DE SOJA","soy",16,"",0],["FARINA DI GRANO TENERO TIPO 00","gluten",0,"",0],["EMULSIFIANT LECITHINE DE SOJA","soy",16,"",0],["EMULSIONANTE LECITINA DE SOJA","soy",16,"",0],["EMULSIONANTE LECITINA DI SOIA","soy",16,"",0],["FARINA DI GRANO TENERO TIPO 0","gluten",0,"",0],["PROTEINA DE TRIGO HIDROLISADA","gluten",26,"",0],["PROTEINA DE TRIGO HIDROLIZADA","gluten",26,"",0],["TRITICUM VULGARE GERM EXTRACT","gluten",26,"",0],["FARINA INTEGRALE DI FRUMENTO","gluten",0,"",0],["FARINHA DE TRIGO ENRIQUECIDA","gluten",0,"",0],["HYDROLYSIERTES WEIZENPROTEIN","gluten",26,"",0],["PROTEINA TEXTURIZADA DE SOJA","soy",34,"",0],["EXTRACTO DE MALTA DE CEBADA","gluten",1,"",0],["HARINA DE TRIGO ENRIQUECIDA","gluten",0,"",0],["PROTEINE DEL SIERO DI LATTE","milk",5,"",0],["EXTRATO DE MALTE DE CEVADA","gluten",1,"",0],["PROTEINA DE SUERO DE LECHE","milk",5,"",0],["PROTEINE DE BLE HYDROLYSEE","gluten",26,"",0],["FARINHA DE CEVADA MALTADA","gluten",1,"",0],["FARINHA DE TRIGO INTEGRAL","gluten",0,"",0],["HARINA DE CEBADA MALTEADA","gluten",1,"",0],["LATTE SCREMATO IN POLVERE","lactose milk",30,"",0],["LECHE EN POLVO DESCREMADA","lactose milk",30,"",0],["PROTEINA DO SORO DE LEITE","milk",5,"",0],["ALBUME D UOVO IN POLVERE","egg",8,"",0],["ESTRATTO DI MALTO D ORZO","gluten",1,"",0],["HARINA DE TRIGO INTEGRAL","gluten",0,"",0],["HARINA INTEGRAL DE TRIGO","gluten",0,"",0],["HYDROLYSED WHEAT PROTEIN","gluten",26,"",0],["HYDROLYZED WHEAT PROTEIN","gluten",26,"",0],["LECHE DESNATADA EN POLVO","lactose milk",30,"",0],["POTASSIUM METABISULPHITE","sulfites",24,"",0],["WHEY PROTEIN CONCENTRATE","milk",5,"",0],["CLARA DE HUEVO EN POLVO","egg",8,"",0],["EMULGATOR SOJALECITHINE","soy",16,"",0],["GLUTENHALTIGEM GETREIDE","gluten",-1,"",0],["GLUTENHALTIGES GETREIDE","gluten",-1,"",0],["MATIERE GRASSE LAITIERE","milk",29,"",0],["PROTEINES DE LACTOSERUM","milk",5,"",0],["SUERO DE LECHE EN POLVO","milk",5,"",0],["ANACARDIUM OCCIDENTALE","tree_nuts",12,"",0],["BLANC D OEUF EN POUDRE","egg",8,"",0],["EMULGATOR SOJALECITHIN","soy",16,"",0],["EXTRAIT DE MALT D ORGE","gluten",1,"",0],["FARINA DI GRANO TENERO","gluten",0,"",0],["FARINA DI ORZO MALTATO","gluten",1,"",0],["FARINE DE BLE COMPLETE","gluten",0,"",0],["FRUTOS DE CASCARA DURA","tree_nuts",-1,"",0],["TRITICUM VULGARE FLOUR","gluten",0,"",0],["UOVO INTERO IN POLVERE","egg",31,"",0],["FARINE DE BLE COMPLET","gluten",0,"",0],["FRUTTA SECCA A GUSCIO","tree_nuts",-1,"",0],["GERMOGLIO DI FRUMENTO","gluten",-1,"",0],["HUEVO ENTERO EN POLVO","egg",31,"",0],["LAIT ECREME EN POUDRE","lactose milk",30,"",0],["LECHE EN POLVO ENTERA","lactose milk",4,"",0],["LEITE EM PO DESNATADO","lactose milk",30,"",0],["OEUF ENTIER EN POUDRE","egg",31,"",0],["SODIUM METABISULPHITE","sulfites",24,"",0],["WHOLEMEAL WHEAT FLOUR","gluten",0,"",0],["ENRICHED WHEAT FLOUR","gluten",0,"",0],["FARINE D ORGE MALTEE","gluten",1,"",0],["FORMAGGIO IN POLVERE","lactose milk",28,"",0],["HARINA DE TRIGO 0000","gluten",0,"",0],["MATERIA GRASA LACTEA","milk",29,"",0],["POTASSIUM BISULPHITE","sulfites",24,"",0],["SEMENTES DE GERGELIM","sesame",36,"",0],["SEMOLA DI GRANO DURO","gluten",0,"",0],["SODIUM METABISULFITE","sulfites",24,"",0],["TEXTURED SOY PROTEIN","soy",34,"",0],["VOLLKORNHAFERFLOCKEN","gluten",3,"",0],["WHEY PROTEIN ISOLATE","milk",5,"",0],["ANHIDRIDO SULFUROSO","sulfites",24,"",0],["ANHYDRIDE SULFUREUX","sulfites",-1,"",0],["BARLEY MALT EXTRACT","gluten",1,"",0],["CARYA ILLINOINENSIS","tree_nuts",15,"",0],["CEREALES CON GLUTEN","gluten",-1,"",0],["HARINA DE TRIGO 000","gluten",0,"",0],["MALTED BARLEY FLOUR","gluten",1,"",0],["SEMENTE DE GERGELIM","sesame",17,"",0],["SEMENTE DE MOSTARDA","mustard",21,"",0],["SKIMMED MILK POWDER","lactose milk",4,"",0],["SORO DE LEITE EM PO","milk",5,"",0],["SOY PROTEIN ISOLATE","soy",16,"",0],["WEIZENMEHL TYPE 405","gluten",0,"",0],["WEIZENMEHL TYPE 550","gluten",0,"",0],["ANHYDROUS MILK FAT","milk",29,"",0],["ANIDRIDE SOLFOROSA","sulfites",24,"",0],["CASEINATO DE SODIO","milk",6,"",0],["CASTANHA DO BRASIL","tree_nuts",37,"",0],["CLARA DE OVO EM PO","egg",8,"",0],["DERIVADOS DE LECHE","milk",-1,"",0],["DERIVADOS DO LEITE","milk",-1,"",0],["DERIVATI DEL LATTE","milk",-1,"",0],["DIOXIDO DE ENXOFRE","sulfites",24,"",0],["FARINA DI FRUMENTO","gluten",0,"",0],["FARINHA DE CENTEIO","gluten",2,"",0],["FARINHA DE TREMOCO","lupin",23,"",0],["GERSTENMALZEXTRAKT","gluten",1,"",0],["GRAINE DE MOUTARDE","mustard",21,"",0],["HARINA DE ALTRAMUZ","lupin",23,"",0],["LECITHINES DE SOJA","soy",16,"",0],["OVO INTEGRAL EM PO","egg",31,"",0],["SEMILLA DE MOSTAZA","mustard",21,"",0],["SEMILLAS DE SESAMO","sesame",36,"",0],["SEMOULE DE BLE DUR","gluten",0,"",0],["VITAL WHEAT GLUTEN","gluten",32,"",0],["WEIZENVOLLKORNMEHL","gluten",0,"",0],["AMIDO DI FRUMENTO","gluten",-1,"",0],["BARLEY MALT FLOUR","gluten",1,"",0],["BUTTERMILK POWDER","lactose milk",4,"",0],["CALCIUM CASEINATE","milk",6,"",0],["DERIVADOS LACTEOS","milk",-1,"",0],["DIOXIDO DE AZUFRE","sulfites",24,"",0],["DIOXYDE DE SOUFRE","sulfites",24,"",0],["EXTRACTO DE MALTA","gluten",1,"",0],["FARINE DE BLE T55","gluten",0,"",0],["FARINE DE BLE T65","gluten",0,"",0],["FROMAGE EN POUDRE","lactose milk",28,"",0],["FRUTOS DE CASCARA","tree_nuts",-1,"",0],["GRAINES DE SESAME","sesame",36,"",0],["HARINA DE CENTENO","gluten",2,"",0],["HOJUELAS DE AVENA","gluten",3,"oats",0],["LECITHINE DE SOJA","soy",16,"",0],["LYSOZYME CHLORIDE","egg",8,"",0],["MILCHERZEUGNISSEN","milk",-1,"",0],["NOCE DI MACADAMIA","tree_nuts",38,"",0],["NOIX DE MACADAMIA","tree_nuts",38,"",0],["NUEZ DE MACADAMIA","tree_nuts",38,"",0],["PRODUITS LAITIERS","milk",-1,"",0],["SEMI SKIMMED MILK","lactose milk",30,"",0],["SEMILLA DE SESAMO","sesame",17,"",0],["SODIUM BISULPHITE","sulfites",24,"",0],["WHEAT AMINO ACIDS","gluten",26,"",0],["WHOLE MILK POWDER","lactose milk",4,"",0],["WHOLE WHEAT FLOUR","gluten",0,"",0],["ALMIDON DE TRIGO","gluten",-1,"",0],["APIUM GRAVEOLENS","celery",22,"",0],["ARACHIS HYPOGAEA","peanuts",9,"",0],["CALCIUM SULPHITE","sulfites",24,"",0],["CASTANHA DE CAJU","tree_nuts",12,"",0],["CASTANHA DO PARA","tree_nuts",37,"",0],["CORYLUS AVELLANA","tree_nuts",11,"",0],["EGG WHITE POWDER","egg",8,"",0],["EXTRATO DE MALTE","gluten",1,"",0],["FARINA DI LUPINI","lupin",23,"",0],["FARINA DI SEGALE","gluten",2,"",0],["FARINE DE SEIGLE","gluten",2,"",0],["FARINHA DE AVEIA","gluten",3,"oats",0],["FARINHA DE TRIGO","gluten",0,"",0],["FARINHA INTEGRAL","gluten",0,"",0],["FLOCONS D AVOINE","gluten",3,"oats",0],["GRAINE DE SESAME","sesame",17,"",0],["GRASSO DEL LATTE","milk",29,"",0],["HARTWEIZENGRIESS","gluten",0,"",0],["LATTE IN POLVERE","lactose milk",4,"",0],["LECHE DESCREMADA","lactose milk",30,"",0],["LECITINA DE SOJA","soy",16,"",0],["LECITINA DI SOIA","soy",16,"",0],["LECITINE DI SOIA","soy",16,"",0],["MAGERMILCHPULVER","lactose milk",30,"",0],["MILCHERZEUGNISSE","milk",-1,"",0],["NOCE DEL BRASILE","tree_nuts",37,"",0],["PROTEINA DE SOJA","soy",34,"",0],["PROTEINE DE SOJA","soy",34,"",0],["PROTEINE DI SOIA","soy",34,"",0],["SALVADO DE AVENA","gluten",3,"oats",0],["SKIM MILK POWDER","lactose milk",30,"",0],["SODIUM CASEINATE","milk",6,"",0],["WHOLE EGG POWDER","egg",31,"",0],["WHOLE GRAIN OATS","gluten",3,"oats",0],["AVENA ARROLLADA","gluten",3,"oats",0],["BRASSICA JUNCEA","mustard",21,"",0],["CASTANA DE CAJU","tree_nuts",12,"",0],["FARELO DE AVEIA","gluten",3,"oats",0],["FARINE D AVOINE","gluten",3,"oats",0],["FARINE DE LUPIN","lupin",23,"",0],["FIOCCHI D AVENA","gluten",3,"oats",0],["FLOCOS DE AVEIA","gluten",3,"oats",0],["FRUTTA A GUSCIO","tree_nuts",-1,"",0],["GERSTENMALZMEHL","gluten",1,"",0],["GLUTEN DE TRIGO","gluten",32,"",0],["HARINA DE AVENA","gluten",3,"oats",0],["HARINA DE TRIGO","gluten",0,"",0],["HARINA INTEGRAL","gluten",0,"",0],["HORDEUM VULGARE","gluten",1,"",0],["KNOLLENSELLERIE","celery",-1,"",0],["LECHE DESNATADA","lactose milk",30,"",0],["LEITE DESNATADO","lactose milk",30,"",0],["MACADAMIANUSSEN","tree_nuts",-1,"",0],["NATRIUMDISULFIT","sulfites",-1,"",0],["NONFAT DRY MILK","lactose milk",30,"",0],["SCHALENFRUCHTEN","tree_nuts",-1,"",0],["SESAMUM INDICUM","sesame",17,"",0],["SODIUM SULPHITE","sulfites",24,"",0],["SULPHUR DIOXIDE","sulfites",24,"",0],["ACEITE DE SOJA","soy",16,"",0],["AMIDO DE TRIGO","gluten",-1,"",0],["AVEIA INTEGRAL","gluten",3,"oats",0],["AVENA INTEGRAL","gluten",3,"oats",0],["CELERY EXTRACT","celery",22,"",0],["CLARA DE HUEVO","egg",-1,"",0],["COPOS DE AVENA","gluten",3,"oats",0],["CREMA DE LECHE","lactose milk",-1,"",0],["CREME DE LEITE","lactose milk",-1,"",0],["DULCE DE LECHE","lactose milk",-1,"",0],["FARINA D AVENA","gluten",3,"oats",0],["FRIJOL DE SOJA","soy",16,"",0],["FRUITS A COQUE","tree_nuts",-1,"",0],["GORDURA LACTEA","milk",29,"",0],["HASELNUSSKERNE","tree_nuts",11,"",0],["HAZELNUT PASTE","tree_nuts",11,"",0],["HUEVO EN POLVO","egg",31,"",0],["JAUNES D OEUFS","egg",-1,"",0],["KALIUMDISULFIT","sulfites",-1,"",0],["LAIT EN POUDRE","lactose milk",4,"",0],["LATTE SCREMATO","lactose milk",30,"",0],["LECHE EN POLVO","lactose milk",4,"",0],["LEITE INTEGRAL","lactose milk",4,"",0],["MACADAMIA NUTS","tree_nuts",38,"",0],["MACADAMIANUSSE","tree_nuts",-1,"",0],["METABISSULFITO","sulfites",-1,"",0],["MILCHPRODUKTEN","milk",-1,"",0],["MUSTARD POWDER","mustard",21,"",0],["NOIX DU BRESIL","tree_nuts",37,"",0],["NUEZ DE BRASIL","tree_nuts",37,"",0],["POROTO DE SOJA","soy",16,"",0],["SCHALENFRUCHTE","tree_nuts",-1,"",0],["SCHWEFELDIOXID","sulfites",24,"",0],["SECALE CEREALE","gluten",2,"",0],["SEME DI SENAPE","mustard",21,"",0],["SEME DI SESAMO","sesame",17,"",0],["SEMI DI SESAMO","sesame",36,"",0],["SIERO DI LATTE","milk",-1,"",0],["SODIUM SULFITE","sulfites",24,"",0],["SUERO DE LECHE","milk",5,"",0],["SULFUR DIOXIDE","sulfites",24,"",0],["ALBUME D UOVO","egg",8,"",0],["AMIDON DE BLE","gluten",-1,"",0],["CARMINIC ACID","carmine",25,"",0],["CASHEW BUTTER","tree_nuts",12,"",0],["CREME FRAICHE","lactose milk",-1,"",0],["DIJON MUSTARD","mustard",21,"",0],["DOCE DE LEITE","lactose milk",-1,"",0],["FARINE DE BLE","gluten",0,"",0],["HUHNEREIWEISS","egg",8,"",0],["JUGLANS REGIA","tree_nuts",13,"",0],["LECHE DE VACA","lactose milk",4,"",0],["LUPIN PROTEIN","lupin",23,"",0],["MACADAMIANUSS","tree_nuts",38,"",0],["MALTED BARLEY","gluten",1,"",0],["MALTODESTRINA","gluten",27,"maltodextrin",1],["MALTODEXTRINA","gluten",27,"maltodextrin",1],["MALTODEXTRINE","gluten",27,"maltodextrin",1],["METABISOLFITO","sulfites",-1,"",0],["METABISULFITE","sulfites",-1,"",0],["METABISULFITO","sulfites",-1,"",0],["MILCHPRODUKTE","milk",-1,"",0],["MOLHO DE SOJA","gluten soy",35,"",0],["MOLKENPROTEIN","milk",5,"",0],["NATRII SULFIS","sulfites",24,"",0],["NATURAL RED 4","carmine",25,"",0],["NOIX DE CAJOU","tree_nuts",12,"",0],["NOIX DE PECAN","tree_nuts",15,"",0],["NOZ MACADAMIA","tree_nuts",38,"",0],["PEANUT BUTTER","peanuts",9,"",0],["PISTACIA VERA","tree_nuts",14,"",0],["PRUNUS DULCIS","tree_nuts",10,"",0],["QUEIJO RALADO","lactose milk",28,"",0],["QUESO RALLADO","lactose milk",28,"",0],["SALSA DE SOJA","gluten soy",35,"",0],["SALSA DI SOIA","gluten soy",35,"",0],["SORO DE LEITE","milk",5,"",0],["SOYA LECITHIN","soy",16,"",0],["TUORLO D UOVO","egg",-1,"",0],["WHEAT PROTEIN","gluten",26,"",0],["YEMA DE HUEVO","egg",8,"",0],["ALMOND FLOUR","tree_nuts",10,"",0],["ALMOND PASTE","tree_nuts",10,"",0],["AVENA SATIVA","gluten",3,"oats",0],["BLANC D OEUF","egg",8,"",0],["CASHEWKERNEN","tree_nuts",-1,"",0],["CASHEWNUSSEN","tree_nuts",-1,"",0],["CLARA DE OVO","egg",-1,"",0],["EIKLARPULVER","egg",8,"",0],["FISH GELATIN","fish",-1,"",0],["FRUTOS SECOS","tree_nuts",-1,"",0],["GERME DE BLE","gluten",-1,"",0],["GRAO DE SOJA","soy",16,"",0],["GRASA LACTEA","milk",29,"",0],["HAFERFLOCKEN","gluten",3,"oats",0],["JAUNE D OEUF","egg",-1,"",0],["LANGOUSTINES","crustaceans",-1,"",0],["LATTE INTERO","lactose milk",4,"",0],["LECHE ENTERA","lactose milk",4,"",0],["MALT EXTRACT","gluten",1,"",0],["MALT VINEGAR","gluten",1,"",0],["MALTODEXTRIN","gluten",27,"maltodextrin",1],["MILCHEIWEISS","milk",-1,"",0],["MILK PROTEIN","milk",6,"",0],["MUSTARD SEED","mustard",21,"",0],["OLEO DE SOJA","soy",16,"",0],["OYSTER SAUCE","molluscs",-1,"",0],["PEANUT FLOUR","peanuts",9,"",0],["SESAME PASTE","sesame",17,"",0],["SESAME SEEDS","sesame",36,"",0],["SINAPIS ALBA","mustard",21,"",0],["SKIMMED MILK","lactose milk",30,"",0],["SOJALECITHIN","soy",16,"",0],["SOY LECITHIN","soy",16,"",0],["SUERO LACTEO","milk",5,"",0],["VOLLEIPULVER","egg",31,"",0],["WHEAT GLUTEN","gluten",32,"",0],["WHEAT STARCH","gluten",-1,"",0],["WHEY PROTEIN","milk",5,"",0],["ARACHIS OIL","peanuts",9,"",0],["BARLEY MALT","gluten",33,"",0],["BRAZIL NUTS","tree_nuts",37,"",0],["BREADCRUMBS","gluten",-1,"",0],["CASHEWKERNE","tree_nuts",-1,"",0],["CASHEWNUSSE","tree_nuts",-1,"",0],["CELERI RAVE","celery",-1,"",0],["CELERY SALT","celery",22,"",0],["CELERY SEED","celery",22,"",0],["COCCINIGLIA","carmine",25,"",0],["CRUSTACEANS","crustaceans",-1,"",0],["DURUM WHEAT","gluten",0,"",0],["EGG ALBUMEN","egg",8,"",0],["GEMA DE OVO","egg",8,"",0],["GLYCINE MAX","soy",16,"",0],["HASELNUSSEN","tree_nuts",-1,"",0],["KREBSTIEREN","crustaceans",-1,"",0],["LAIT ECREME","lactose milk",30,"",0],["LAIT ENTIER","lactose milk",4,"",0],["LANGOUSTINE","crustaceans",-1,"",0],["LEITE EM PO","lactose milk",4,"",0],["LUPIN FLOUR","lupin",23,"",0],["LUPINENMEHL","lupin",23,"",0],["MANTEQUILLA","lactose milk",-1,"",0],["MILCHPULVER","lactose milk",4,"",0],["MILK POWDER","lactose milk",4,"",0],["MILK SOLIDS","lactose milk",4,"",0],["MOLHO SHOYU","gluten soy",35,"",0],["PAN RALLADO","gluten",-1,"",0],["PANGRATTATO","gluten",-1,"",0],["PEKANNUSSEN","tree_nuts",-1,"",0],["ROLLED OATS","gluten",3,"oats",0],["SEDANO RAPA","celery",-1,"",0],["SESAME SEED","sesame",17,"",0],["SOJAPROTEIN","soy",34,"",0],["SOY PROTEIN","soy",34,"",0],["SOYBEAN OIL","soy",16,"",0],["WEICHTIEREN","molluscs",-1,"",0],["WHEAT FLOUR","gluten",0,"",0],["WHEY POWDER","milk",5,"",0],["ALTRAMUCES","lupin",-1,"",0],["BRAZIL NUT","tree_nuts",37,"",0],["BUTTER OIL","milk",29,"",0],["BUTTERMILK","lactose milk",-1,"",0],["CACAHUETES","peanuts",9,"",0],["CARANGUEJO","crustaceans",19,"",0],["CASHEWKERN","tree_nuts",12,"",0],["COCHENILLE","carmine",25,"",0],["COCHINILLA","carmine",25,"",0],["COCHONILHA","carmine",25,"",0],["CRUSTACEAN","crustaceans",-1,"",0],["CRUSTACEOS","crustaceans",-1,"",0],["DINKELMEHL","gluten",0,"",0],["EGG POWDER","egg",31,"",0],["FISH SAUCE","fish",18,"",0],["GAMBERETTI","crustaceans",-1,"",0],["GROUNDNUTS","peanuts",9,"",0],["HASELNUSSE","tree_nuts",11,"",0],["KASEPULVER","lactose milk",28,"",0],["KREBSTIERE","crustaceans",-1,"",0],["LACTOSERUM","milk",-1,"",0],["LANGOSTINO","crustaceans",19,"",0],["LATTICELLO","lactose milk",-1,"",0],["LECITHINES","soy",-1,"lecithin",1],["MAGERMILCH","lactose milk",30,"",0],["MASCARPONE","lactose milk",-1,"",0],["MAYONNAISE","egg",-1,"",0],["MILK SUGAR","lactose milk",7,"",0],["MOLLUSQUES","molluscs",-1,"",0],["MOZZARELLA","lactose milk",28,"",0],["NOCCIOLATO","tree_nuts",-1,"",0],["NOCE PECAN","tree_nuts",15,"",0],["NUEZ PECAN","tree_nuts",15,"",0],["OAT FLAKES","gluten",3,"oats",0],["PARANUSSEN","tree_nuts",-1,"",0],["PECAN NUTS","tree_nuts",-1,"",0],["PEKANNUSSE","tree_nuts",-1,"",0],["PISTACCHIO","tree_nuts",14,"",0],["PISTACHIOS","tree_nuts",14,"",0],["ROGGENMEHL","gluten",2,"",0],["SAUCE SOJA","gluten soy",35,"",0],["SESAME OIL","sesame",17,"",0],["SESAMSAMEN","sesame",-1,"",0],["SOJABOHNEN","soy",-1,"",0],["SOUR CREAM","lactose milk",-1,"",0],["WEICHTIERE","molluscs",-1,"",0],["WEIZENMEHL","gluten",0,"",0],["WHEAT GERM","gluten",-1,"",0],["WHOLE MILK","lactose milk",4,"",0],["ALMENDRAS","tree_nuts",10,"",0],["AMENDOINS","peanuts",-1,"",0],["ANCHOVIES","fish",18,"",0],["APIO NABO","celery",-1,"",0],["ARACHIDES","peanuts",9,"",0],["AVELLANAS","tree_nuts",11,"",0],["BISULFITE","sulfites",-1,"",0],["CABILLAUD","fish",-1,"",0],["CACAHUATE","peanuts",9,"",0],["CACAHUETE","peanuts",9,"",0],["CALAMARES","molluscs",-1,"",0],["CAMARONES","crustaceans",-1,"",0],["CASEINATE","milk",6,"",0],["CASEINATO","milk",-1,"",0],["CHAPELURE","gluten",-1,"",0],["COCHINEAL","carmine",25,"",0],["CREVETTES","crustaceans",-1,"",0],["CROSTACEI","crustaceans",-1,"",0],["CRUSTACES","crustaceans",-1,"",0],["DISOLFITO","sulfites",-1,"",0],["DISULFITE","sulfites",-1,"",0],["DISULFITO","sulfites",-1,"",0],["DRIED EGG","egg",8,"",0],["ERDNUSSEN","peanuts",-1,"",0],["ESCARGOTS","molluscs",-1,"",0],["FORMAGGIO","lactose milk",28,"",0],["GROUNDNUT","peanuts",9,"",0],["HAFERMEHL","gluten",3,"oats",0],["HASELNUSS","tree_nuts",11,"",0],["HAZELNUTS","tree_nuts",11,"",0],["ICE CREAM","lactose milk",-1,"",0],["LACTOSERO","lactose milk",-1,"",0],["LATTICINI","milk",-1,"",0],["LECITHINE","soy",16,"lecithin",1],["LECITHINS","soy",-1,"lecithin",1],["MACADAMIA","tree_nuts",38,"",0],["MAQUEREAU","fish",-1,"",0],["MARZAPANE","tree_nuts",-1,"",0],["MILCHFETT","milk",29,"",0],["MOLLUSCHI","molluscs",-1,"",0],["MOLLUSQUE","molluscs",20,"",0],["NOISETTES","tree_nuts",11,"",0],["OAT FLOUR","gluten",3,"oats",0],["OVALBUMIN","egg",8,"",0],["OVO EM PO","egg",31,"",0],["PARANUSSE","tree_nuts",-1,"",0],["PEKANNUSS","tree_nuts",15,"",0],["PINE NUTS","tree_nuts",-1,"",0],["PISTACCHI","tree_nuts",-1,"",0],["PISTACHES","tree_nuts",-1,"",0],["PISTACHIO","tree_nuts",14,"",0],["PISTACHOS","tree_nuts",14,"",0],["PISTAZIEN","tree_nuts",-1,"",0],["REQUEIJAO","lactose milk",-1,"",0],["RYE FLOUR","gluten",2,"",0],["SESAMSAAT","sesame",17,"",0],["SHELLFISH","crustaceans",-1,"",0],["SKIM MILK","lactose milk",30,"",0],["SOJASOSSE","gluten soy",35,"",0],["SOY SAUCE","gluten soy",35,"",0],["SULPHITES","sulfites",24,"",0],["TREE NUTS","tree_nuts",-1,"",0],["TRITICALE","gluten",-1,"",0],["VOLLMILCH","lactose milk",4,"",0],["WALNUSSEN","tree_nuts",-1,"",0],["WEICHTIER","molluscs",20,"",0],["ACCIUGHE","fish",-1,"",0],["AJONJOLI","sesame",17,"",0],["ALMENDRA","tree_nuts",10,"",0],["ALTRAMUZ","lupin",23,"",0],["AMENDOAS","tree_nuts",10,"",0],["AMENDOIM","peanuts",9,"",0],["ANACARDI","tree_nuts",-1,"",0],["ANACARDO","tree_nuts",12,"",0],["ANCHOITA","fish",18,"",0],["ARACHIDE","peanuts",9,"",0],["ARACHIDI","peanuts",9,"",0],["ARAGOSTA","crustaceans",-1,"",0],["AVELLANA","tree_nuts",11,"",0],["BABEURRE","lactose milk",-1,"",0],["BACALHAU","fish",-1,"",0],["CALAMARI","molluscs",20,"",0],["CANGREJO","crustaceans",19,"",0],["CELERIAC","celery",22,"",0],["CI 75470","carmine",25,"",0],["COUSCOUS","gluten",-1,"",0],["CRAYFISH","crustaceans",19,"",0],["CREVETTE","crustaceans",19,"",0],["DISULFIT","sulfites",-1,"",0],["EGG YOLK","egg",8,"",0],["EPEAUTRE","gluten",0,"",0],["ERDNUSSE","peanuts",9,"",0],["ESCARGOT","molluscs",-1,"",0],["FISH OIL","fish",18,"",0],["FRUMENTO","gluten",-1,"",0],["GARNELEN","crustaceans",-1,"",0],["GERGELIM","sesame",17,"",0],["GIANDUJA","tree_nuts",-1,"",0],["GRANCHIO","crustaceans",-1,"",0],["HAZELNUT","tree_nuts",11,"",0],["KABELJAU","fish",-1,"",0],["LACTOSIO","lactose",-1,"",0],["LACTOSUM","lactose milk",7,"",0],["LAITIERS","milk",-1,"",0],["LANGOSTA","crustaceans",19,"",0],["LATTOSIO","lactose milk",7,"",0],["LECITHIN","soy",16,"lecithin",1],["LECITINA","soy",-1,"lecithin",1],["LECITINE","soy",-1,"lecithin",1],["LYSOZYME","egg",8,"",0],["MACKEREL","fish",-1,"",0],["MAIONESE","egg",-1,"",0],["MANDORLA","tree_nuts",10,"",0],["MANDORLE","tree_nuts",10,"",0],["MANTEIGA","lactose milk",-1,"",0],["MARISCOS","crustaceans",-1,"",0],["MARZIPAN","tree_nuts",10,"",0],["MAYONESA","egg",-1,"",0],["MEJILLON","molluscs",20,"",0],["MERENGUE","egg",-1,"",0],["MERINGUE","egg",-1,"",0],["MERLUZZO","fish",-1,"",0],["MEXILHAO","molluscs",20,"",0],["MILK FAT","milk",29,"",0],["MOLLUSCO","molluscs",20,"",0],["MOLLUSCS","molluscs",-1,"",0],["MOLLUSKS","molluscs",-1,"",0],["MOLUSCOS","molluscs",-1,"",0],["MOSTARDA","mustard",21,"",0],["MOUTARDE","mustard",-1,"",0],["MUSCHELN","molluscs",-1,"",0],["NOCCIOLA","tree_nuts",11,"",0],["NOCCIOLE","tree_nuts",11,"",0],["NOISETTE","tree_nuts",11,"",0],["NOZ PECA","tree_nuts",15,"",0],["PARANUSS","tree_nuts",37,"",0],["PARMESAN","lactose milk",28,"",0],["PESCADOS","fish",-1,"",0],["PISTACHE","tree_nuts",14,"",0],["PISTACHO","tree_nuts",14,"",0],["PISTAZIE","tree_nuts",14,"",0],["POISSONS","fish",-1,"",0],["SARDELLE","fish",18,"",0],["SARDINHA","fish",-1,"",0],["SCALLOPS","molluscs",-1,"",0],["SELLERIE","celery",22,"",0],["SEMOLINA","gluten",0,"",0],["SENFSAAT","mustard",21,"",0],["SOYBEANS","soy",-1,"",0],["SULFITES","sulfites",24,"",0],["SULFITOS","sulfites",24,"",0],["SULPHITE","sulfites",-1,"",0],["TREE NUT","tree_nuts",-1,"",0],["WALNUSSE","tree_nuts",-1,"",0],["ACCIUGA","fish",18,"",0],["ALBUMIN","egg",8,"",0],["ALMEJAS","molluscs",-1,"",0],["ALMONDS","tree_nuts",10,"",0],["AMANDES","tree_nuts",10,"",0],["AMENDOA","tree_nuts",10,"",0],["ANCHOIS","fish",18,"",0],["ANCHOVA","fish",18,"",0],["ANCHOVY","fish",18,"",0],["ARENQUE","fish",-1,"",0],["BACALAO","fish",-1,"",0],["CABALLA","fish",-1,"",0],["CALAMAR","molluscs",20,"",0],["CAMARAO","crustaceans",19,"",0],["CAMARON","crustaceans",19,"",0],["CARMINE","carmine",25,"",0],["CASEINA","milk",6,"",0],["CASEINE","milk",6,"",0],["CASHEWS","tree_nuts",12,"",0],["CENTEIO","gluten",2,"",0],["CENTENO","gluten",2,"",0],["CERVEJA","gluten",-1,"",0],["CERVEZA","gluten",-1,"",0],["CHEDDAR","lactose milk",28,"",0],["DEXTRIN","gluten",27,"maltodextrin",1],["EDAMAME","soy",-1,"",0],["EINKORN","gluten",-1,"",0],["EIWEISS","egg",8,"",0],["ERDNUSS","peanuts",9,"",0],["ESPELTA","gluten",0,"",0],["FILBERT","tree_nuts",11,"",0],["FISCHEN","fish",-1,"",0],["FROMAGE","lactose milk",28,"",0],["GAMBERI","crustaceans",-1,"",0],["GAMBERO","crustaceans",19,"",0],["GARNELE","crustaceans",19,"",0],["GLUTINE","gluten",32,"",0],["HERRING","fish",-1,"",0],["HUITRES","molluscs",-1,"",0],["IOGURTE","lactose milk",-1,"",0],["JOGHURT","lactose milk",-1,"",0],["LACTEOS","milk",-1,"",0],["LACTOSA","lactose milk",7,"",0],["LACTOSE","lactose milk",7,"",0],["LAGOSTA","crustaceans",19,"",0],["LAITIER","milk",-1,"",0],["LAKTOSE","lactose milk",7,"",0],["LOBSTER","crustaceans",19,"",0],["LUPINEN","lupin",-1,"",0],["LUPINUS","lupin",23,"",0],["MAKRELE","fish",-1,"",0],["MANDELN","tree_nuts",10,"",0],["MAZAPAN","tree_nuts",-1,"",0],["MERLUZA","fish",-1,"",0],["MOLLUSC","molluscs",20,"",0],["MOLLUSK","molluscs",-1,"",0],["MOLUSCO","molluscs",20,"",0],["MOSTAZA","mustard",21,"",0],["MUSTARD","mustard",21,"",0],["OCTOPUS","molluscs",20,"",0],["PEANUTS","peanuts",9,"",0],["PESCADO","fish",18,"",0],["POISSON","fish",-1,"",0],["PRALINE","tree_nuts",-1,"",0],["RICOTTA","lactose milk",-1,"",0],["SALMONE","fish",-1,"",0],["SARDINA","fish",-1,"",0],["SARDINE","fish",18,"",0],["SCALLOP","molluscs",20,"",0],["SESAMOL","sesame",-1,"",0],["SGOMBRO","fish",-1,"",0],["SHRIMPS","crustaceans",19,"",0],["SOLFITI","sulfites",-1,"",0],["SOLFITO","sulfites",-1,"",0],["SORVETE","lactose milk",-1,"",0],["SOYBEAN","soy",16,"",0],["SULFITE","sulfites",-1,"",0],["SULFITI","sulfites",-1,"",0],["SULFITO","sulfites",-1,"",0],["TREMOCO","lupin",23,"",0],["VIEIRAS","molluscs",-1,"",0],["VONGOLE","molluscs",-1,"",0],["WALNUSS","tree_nuts",13,"",0],["WALNUTS","tree_nuts",13,"",0],["YOGHURT","lactose milk",-1,"",0],["ALBUME","egg",-1,"",0],["ALMOND","tree_nuts",10,"",0],["AMANDE","tree_nuts",10,"",0],["ANCHOA","fish",18,"",0],["ARINGA","fish",-1,"",0],["AVELAS","tree_nuts",11,"",0],["AVOINE","gluten",3,"oats",0],["BARLEY","gluten",1,"",0],["BEURRE","lactose milk",-1,"",0],["BULGUR","gluten",-1,"",0],["BUTTER","lactose milk",-1,"",0],["CASEIN","milk",6,"",0],["CASHEW","tree_nuts",12,"",0],["CAVALA","fish",-1,"",0],["CEBADA","gluten",1,"",0],["CELERI","celery",22,"",0],["CELERY","celery",22,"",0],["CEVADA","gluten",1,"",0],["CHEESE","lactose milk",28,"",0],["CUSCUZ","gluten",-1,"",0],["DINKEL","gluten",0,"",0],["FISCHE","fish",-1,"",0],["GAMBAS","crustaceans",-1,"",0],["GELATO","lactose milk",-1,"",0],["GERSTE","gluten",-1,"",0],["GLUTEN","gluten",32,"",0],["HARENG","fish",-1,"",0],["HELADO","lactose milk",-1,"",0],["HERING","fish",-1,"",0],["HOMARD","crustaceans",-1,"",0],["HUEVOS","egg",8,"",0],["HUMMER","crustaceans",-1,"",0],["HUMMUS","sesame",-1,"",0],["KARMIN","carmine",25,"",0],["KASEIN","milk",6,"",0],["KRABBE","crustaceans",-1,"",0],["LACTEO","milk",-1,"",0],["LUPINE","lupin",23,"",0],["LUPINI","lupin",-1,"",0],["LUPINO","lupin",23,"",0],["MANDEL","tree_nuts",10,"",0],["MOULES","molluscs",-1,"",0],["MUSSEL","molluscs",20,"",0],["NUECES","tree_nuts",13,"",0],["NUSSEN","tree_nuts",-1,"",0],["OSTRAS","molluscs",-1,"",0],["OYSTER","molluscs",20,"",0],["PEANUT","peanuts",9,"",0],["PECANS","tree_nuts",15,"",0],["PEIXES","fish",-1,"",0],["POULPE","molluscs",-1,"",0],["PRAWNS","crustaceans",19,"",0],["QUEIJO","lactose milk",28,"",0],["ROGGEN","gluten",-1,"",0],["SALMAO","fish",18,"",0],["SALMON","fish",18,"",0],["SALSAO","celery",22,"",0],["SAUMON","fish",-1,"",0],["SCAMPI","crustaceans",-1,"",0],["SEDANO","celery",22,"",0],["SEGALE","gluten",-1,"",0],["SEIGLE","gluten",-1,"",0],["SEITAN","gluten",-1,"",0],["SEMOLA","gluten",0,"",0],["SENAPE","mustard",-1,"",0],["SEPPIA","molluscs",-1,"",0],["SESAME","sesame",17,"",0],["SESAMO","sesame",17,"",0],["SHRIMP","crustaceans",19,"",0],["SULFIT","sulfites",-1,"",0],["SURIMI","fish",-1,"",0],["TAHINE","sesame",-1,"",0],["TAHINI","sesame",17,"",0],["TAMARI","soy",-1,"",0],["TEMPEH","soy",-1,"",0],["TUORLO","egg",-1,"",0],["WALNUT","tree_nuts",13,"",0],["WEIZEN","gluten",-1,"",0],["YAOURT","lactose milk",-1,"",0],["YOGURT","lactose milk",-1,"",0],["ALICI","fish",-1,"",0],["AVEIA","gluten",3,"oats",0],["AVELA","tree_nuts",11,"",0],["AVENA","gluten",3,"oats",0],["BIERE","gluten",-1,"",0],["BIRRA","gluten",-1,"",0],["BURRO","lactose milk",-1,"",0],["COZZE","molluscs",-1,"",0],["CRABE","crustaceans",-1,"",0],["CREAM","lactose milk",-1,"",0],["DAIRY","milk",-1,"",0],["E 322","soy",-1,"lecithin",1],["EIERN","egg",-1,"",0],["EMMER","gluten",-1,"",0],["FARRO","gluten",0,"",0],["FISCH","fish",-1,"",0],["GAMBA","crustaceans",19,"",0],["HAFER","gluten",3,"oats",0],["HUEVO","egg",8,"",0],["KAMUT","gluten",-1,"",0],["KRILL","crustaceans",19,"",0],["LACHS","fish",-1,"",0],["LATTE","milk",-1,"",0],["LECHE","lactose milk",4,"",0],["LEITE","lactose milk",4,"",0],["LUPIN","lupin",23,"",0],["MALTA","gluten",33,"",0],["MALTE","gluten",33,"",0],["MALTO","gluten",33,"",0],["MILCH","milk",-1,"",0],["MOLKE","milk",-1,"",0],["NOZES","tree_nuts",13,"",0],["NUSSE","tree_nuts",-1,"",0],["OEUFS","egg",-1,"",0],["OSTRA","molluscs",20,"",0],["PANKO","gluten",-1,"",0],["PANNA","lactose milk",-1,"",0],["PECAN","tree_nuts",15,"",0],["PEIXE","fish",18,"",0],["PESCE","fish",-1,"",0],["PESCI","fish",-1,"",0],["PRAWN","crustaceans",19,"",0],["PULPO","molluscs",-1,"",0],["QUARK","lactose milk",-1,"",0],["QUESO","lactose milk",28,"",0],["SAHNE","lactose milk",-1,"",0],["SEPIA","molluscs",-1,"",0],["SESAM","sesame",36,"",0],["SHOYU","gluten soy",35,"",0],["SNAIL","molluscs",20,"",0],["SPELT","gluten",0,"",0],["SQUID","molluscs",20,"",0],["SUERO","milk",-1,"",0],["TAHIN","sesame",-1,"",0],["TONNO","fish",-1,"",0],["TRIGO","gluten",0,"",0],["WHEAT","gluten",0,"",0],["YOGUR","lactose milk",-1,"",0],["AIPO","celery",22,"",0],["APIO","celery",22,"",0],["ATUM","fish",18,"",0],["ATUN","fish",18,"",0],["BEER","gluten",-1,"",0],["BIER","gluten",-1,"",0],["CAJU","tree_nuts",-1,"",0],["CLAM","molluscs",20,"",0],["CRAB","crustaceans",19,"",0],["E120","carmine",25,"",0],["E220","sulfites",24,"",0],["E221","sulfites",24,"",0],["E222","sulfites",24,"",0],["E223","sulfites",24,"",0],["E224","sulfites",24,"",0],["E226","sulfites",24,"",0],["E228","sulfites",24,"",0],["E322","soy",16,"lecithin",1],["EGGS","egg",-1,"",0],["EIER","egg",-1,"",0],["FISH","fish",18,"",0],["GHEE","lactose milk",-1,"",0],["KASE","lactose milk",28,"",0],["LAIT","milk",-1,"",0],["LULA","molluscs",20,"",0],["MALT","gluten",33,"",0],["MALZ","gluten",33,"",0],["MANI","peanuts",9,"",0],["MILK","lactose milk",4,"",0],["MISO","soy",-1,"",0],["NATA","lactose milk",-1,"",0],["NOCE","tree_nuts",13,"",0],["NOCI","tree_nuts",-1,"",0],["NOIX","tree_nuts",13,"",0],["NUEZ","tree_nuts",13,"",0],["NUSS","tree_nuts",-1,"",0],["NUTS","tree_nuts",-1,"",0],["OATS","gluten",3,"oats",0],["OEUF","egg",-1,"",0],["ORGE","gluten",-1,"",0],["ORZO","gluten",-1,"",0],["OVOS","egg",8,"",0],["RAHM","lactose milk",-1,"",0],["SENF","mustard",-1,"",0],["SOIA","soy",-1,"",0],["SOJA","soy",16,"",0],["SOYA","soy",16,"",0],["TACC","gluten",-1,"",0],["THON","fish",-1,"",0],["TOFU","soy",-1,"",0],["TUNA","fish",18,"",0],["UOVA","egg",-1,"",0],["UOVO","egg",-1,"",0],["WHEY","milk",5,"",0],["YEMA","egg",-1,"",0],["BLE","gluten",-1,"",0],["COD","fish",18,"",0],["EGG","egg",8,"",0],["NOZ","tree_nuts",13,"",0],["OAT","gluten",-1,"oats",0],["OVO","egg",8,"",0],["RYE","gluten",2,"",0],["SOY","soy",16,"",0],["EI","egg",-1,"",0]],"excl":[["ALMOND BUTTER","milk lactose"],["ALMOND MILK","milk lactose"],["BEURRE DE CACAO","milk lactose"],["BLE NOIR","gluten"],["BURRO DI CACAO","milk lactose"],["BUTTERNUT","milk lactose"],["BUTTERNUT SQUASH","milk lactose"],["CACAO BUTTER","milk lactose"],["CASHEW BUTTER","milk lactose"],["COCOA BUTTER","milk lactose"],["COCONUT","tree_nuts"],["COCONUT CREAM","milk lactose"],["COCONUT MILK","milk lactose"],["CREAM OF TARTAR","milk lactose"],["CREMA DE COCO","milk lactose"],["CREME DE COCO","milk lactose"],["CREME DE TARTRE","milk lactose"],["CREMOR DE TARTARO","milk lactose"],["CREMOR TARTARO","milk lactose"],["FARINE DE BLE NOIR","gluten"],["GRANO SARACENO","gluten"],["LAIT D AMANDE","milk lactose"],["LAIT DE COCO","milk lactose"],["LAIT DE SOJA","milk lactose"],["LATTE DI COCCO","milk lactose"],["LATTE DI MANDORLA","milk lactose"],["LATTE DI SOIA","milk lactose"],["LECHE DE ALMENDRAS","milk lactose"],["LECHE DE AVENA","milk lactose"],["LECHE DE COCO","milk lactose"],["LECHE DE SOJA","milk lactose"],["LECITHINE DE COLZA","soy"],["LECITHINE DE TOURNESOL","soy"],["LECITINA DE CANOLA","soy"],["LECITINA DE COLZA","soy"],["LECITINA DE GIRASOL","soy"],["LECITINA DE GIRASSOL","soy"],["LECITINA DI COLZA","soy"],["LECITINA DI GIRASOLE","soy"],["LEITE DE AMENDOAS","milk lactose"],["LEITE DE AVEIA","milk lactose"],["LEITE DE COCO","milk lactose"],["LEITE DE SOJA","milk lactose"],["MANTECA DE CACAO","milk lactose"],["MANTEIGA DE CACAO","milk lactose"],["MANTEIGA DE CACAU","milk lactose"],["NOCE DI COCCO","tree_nuts"],["NOCE DI COLA","tree_nuts"],["NOCE MOSCATA","tree_nuts"],["NOIX DE COCO","tree_nuts"],["NOIX DE KOLA","tree_nuts"],["NOIX DE MUSCADE","tree_nuts"],["NOIX DE SAINT JACQUES","tree_nuts"],["NOZ DE COCO","tree_nuts"],["NOZ MOSCADA","tree_nuts"],["NUEZ DE COCO","tree_nuts"],["NUEZ DE KOLA","tree_nuts"],["NUEZ MOSCADA","tree_nuts"],["NUT BUTTER","milk lactose"],["OAT MILK","milk lactose"],["PEANUT BUTTER","milk lactose"],["RAPESEED LECITHIN","soy"],["RICE MILK","milk lactose"],["SHEA BUTTER","milk lactose"],["SOY MILK","milk lactose"],["SOYA MILK","milk lactose"],["SUNFLOWER LECITHIN","soy"],["TRIGO MOURISCO","gluten"],["TRIGO SARRACENO","gluten"]],"inword":[["WEIZEN","gluten",["BUCHWEIZEN"]],["ROGGEN","gluten",[]],["GERSTE","gluten",[]],["DINKEL","gluten",[]],["HAFER","gluten",[]],["MALZ","gluten",["SCHMALZ"]],["GLUTEN","gluten",["GLUTENFREI"]],["WHEAT","gluten",["BUCKWHEAT"]],["MILCH","milk lactose",["MILCHSAURE","KOKOSMILCH","MANDELMILCH","HAFERMILCH","SOJAMILCH","REISMILCH"]],["MOLKE","milk lactose",[]],["RAHM","milk lactose",[]],["SAHNE","milk lactose",[]],["BUTTER","milk lactose",["KAKAOBUTTER","SHEABUTTER","ERDNUSSBUTTER","NUSSBUTTER","MANDELBUTTER","BUTTERNUT","BUTTERNUSS"]],["KASE","milk lactose",[]],["MILK","milk lactose",["COCONUTMILK"]],["LAKTOSE","lactose",["LAKTOSEFREI"]],["VOLLEI","egg",[]],["EIGELB","egg",[]],["EIKLAR","egg",[]],["HUHNEREI","egg",[]],["EIPULVER","egg",[]],["TROCKENEI","egg",[]],["SOJA","soy",[]],["ERDNUSS","peanuts",[]],["PEANUT","peanuts",[]],["NUSS","tree_nuts",["ERDNUSS","MUSKATNUSS","KOKOSNUSS","BUTTERNUSS"]],["MANDEL","tree_nuts",[]],["PISTAZIE","tree_nuts",[]],["SESAM","sesame",[]],["SENF","mustard",[]],["SELLERIE","celery",[]],["LUPINE","lupin",[]],["FISCH","fish",[]],["GARNELE","crustaceans",[]],["KREBS","crustaceans",[]]],"re":{"free":[["SIN T ?A ?C ?C","gluten"],["SIN GLUTEN","gluten"],["LIBRE DE GLUTEN","gluten"],["GLUTEN FREE","gluten"],["NAO CONTEM GLUTEN","gluten"],["NO CONTIENE GLUTEN","gluten"],["SEM GLUTEN","gluten"],["ISENTO DE GLUTEN","gluten"],["SIN LACTOSA","lactose"],["LIBRE DE LACTOSA","lactose"],["LACTOSE FREE","lactose"],["SEM LACTOSE","lactose"],["ZERO LACTOSE","lactose"],["NAO CONTEM LACTOSE","lactose"],["NO CONTIENE LACTOSA","lactose"],["DAIRY FREE","milk"],["GLUTENFREI","gluten"],["OHNE GLUTEN","gluten"],["SANS GLUTEN","gluten"],["SENZA GLUTINE","gluten"],["LAKTOSEFREI","lactose"],["OHNE LAKTOSE","lactose"],["SANS LACTOSE","lactose"],["SENZA LATTOSIO","lactose"]],"may":"(MAY ALSO CONTAIN|MAY CONTAIN|PUEDE CONTENER|PODE CONTER|CONTIENE TRAZAS DE|TRAZAS DE|TRACES OF|TRACOS DE|ELABORADO EN (UNA )?(PLANTA|LINEA|EQUIPOS?|FABRICA) QUE (TAMBIEN )?(PROCESA|ELABORA|UTILIZA|MANIPULA)N?|(MANUFACTURED|MADE|PRODUCED|PROCESSED|PACKED) (IN|ON) (A )?(FACILITY|FACTORY|SHARED EQUIPMENT|EQUIPMENT|LINE) (THAT|WHICH)? ?(ALSO )?(PROCESSES|HANDLES|USES)|FABRICADO EM (UMA )?(FABRICA|LINHA|EQUIPAMENTOS?) QUE (TAMBEM )?(PROCESSAM?|MANIPULAM?)|KANN SPUREN VON|KANN SPUREN|SPUREN VON|KANN(?=[^.]* ENTHALTEN)|(HERGESTELLT|PRODUZIERT) IN EINEM BETRIEB DER AUCH|PEUT CONTENIR( DES)?( TRACES)?( DE| D)?|TRACES EVENTUELLES( DE| D)?|TRACES POSSIBLES( DE| D)?|TRACES DE|TRACES D|FABRIQUE DANS UN (ATELIER|SITE) QUI (UTILISE|MANIPULE|TRANSFORME)|PUO CONTENERE( TRACCE)?( DI)?|TRACCE DI|PRODOTTO IN UNO STABILIMENTO CHE (UTILIZZA|LAVORA|IMPIEGA)( ANCHE)?)","stop":"\\b(INFORMACION NUTRICIONAL|INFORMACAO NUTRICIONAL|NUTRITION|CONSERVAR|CONSUMIR|INGREDIENTES|INGREDIENTS|ELABORADO POR|FABRICADO POR|DISTRIBUTED|BEST BEFORE|NET WT|PESO NETO|PESO LIQUIDO|VALOR ENERGETICO|NAHRWERT[A-Z]*|MINDESTENS HALTBAR|ZUTATEN|VALEURS NUTRITIONNELLES|A CONSOMMER|INGREDIENTI|VALORI NUTRIZIONALI|DA CONSUMARSI)\\b","neg":"(NAO CONTEM|NO CONTIENE|DOES NOT CONTAIN|CONTAINS NO|FREE FROM|LIBRE DE|ISENTO DE|SIN|SEM|ENTHALT KEIN[A-Z]*|FREI VON|OHNE|NE CONTIENT PAS|SANS|NON CONTIENE|SENZA)"}};

  // ------------------------------------------------------------------ folding
  var SPECIAL = { 'œ': 'OE', 'Œ': 'OE', 'æ': 'AE', 'Æ': 'AE', 'ß': 'SS', 'ẞ': 'SS' };
  var SEP = /[,;()\[\]{}:\/\n\r•·|]/;
  var ALNUM = /[A-Z0-9]/;

  /* Upper case, no accents, every other character a space, except list separators
   * (commas, brackets, semicolons, colons, slashes, line breaks) which become "|" and
   * full stops which stay (statements end at the sentence). Runs of spaces collapse.
   * map[i] is the index in the original text of folded character i. */
  function fold(text) {
    var out = [' '], map = [-1], pending = null, pendingAt = 0;
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      var s = SPECIAL[ch] || ch.normalize('NFKD').replace(/[̀-ͯ]/g, '').toUpperCase();
      for (var k = 0; k < s.length; k++) {
        var c = s.charAt(k);
        if (ALNUM.test(c) || c === '.') {
          if (pending !== null) { out.push(pending); map.push(pendingAt); pending = null; }
          out.push(c); map.push(i);
        } else {
          var kind = SEP.test(c) ? '|' : ' ';
          if (pending === null) { pending = kind; pendingAt = i; } else if (kind === '|') pending = '|';
        }
      }
    }
    out.push(' '); map.push(text.length);
    var s2 = out.join('');
    // "SIN T.A.C.C." must survive the full-stop rule (as in the app).
    s2 = s2.replace(/T\.A\.C\.C\.?/g, function (m) { return 'TACC' + new Array(m.length - 3).join(' '); });
    return { s: s2, map: map };
  }

  function isWordChar(c) { return c !== undefined && ALNUM.test(c); }

  /* Whole-word occurrences of a folded phrase. Phrases contain only A-Z, 0-9 and single
   * spaces, so a match cannot cross a list separator or a full stop. */
  function findAll(s, phrase) {
    var res = [], from = 0, at;
    while ((at = s.indexOf(phrase, from)) !== -1) {
      if (!isWordChar(s.charAt(at - 1)) && !isWordChar(s.charAt(at + phrase.length))) res.push([at, at + phrase.length]);
      from = at + 1;
    }
    return res;
  }

  function inside(a, b, ranges) {
    for (var i = 0; i < ranges.length; i++) if (a >= ranges[i][0] && b <= ranges[i][1]) return ranges[i];
    return null;
  }

  var RX = null;
  function compile() {
    if (RX) return RX;
    RX = {
      free: D.re.free.map(function (p) { return { re: new RegExp('\\b' + p[0] + '\\b', 'g'), tag: p[1] }; }),
      may: new RegExp('\\b' + D.re.may, 'g'),
      stop: new RegExp(D.re.stop),
      // The app blanks negations to the end of the sentence before reading "Contains:".
      // Here a negation only covers its own list item, so "sin conservantes, leche" still finds milk.
      neg: new RegExp('\\b' + D.re.neg + '\\b[^.|]*', 'g')
    };
    return RX;
  }

  /* Returns every allergen mention in the text:
   *   hits: [{a, b, oa, ob, text, kind: 'contains'|'may'|'free', tags: {tag: note|''}, check: bool}]
   *   statements: [{oa, ob, kind: 'may'}]   the "may contain" sentences themselves
   *   free: [{tag, text}]                   free-from claims ("sin gluten") */
  function analyze(text) {
    var R = compile();
    var f = fold(text || ''), s = f.s, map = f.map;
    var sv = s.replace(/\|/g, ' ');           // statement view: same length, separators as spaces
    var freeRanges = [], free = [], mayRanges = [], statements = [], negRanges = [], m;

    function orig(a, b) { return [map[a] < 0 ? 0 : map[a], map[b - 1] + 1]; }
    function slice(a, b) { var o = orig(a, b); return text.slice(o[0], o[1]); }

    R.free.forEach(function (p) {
      p.re.lastIndex = 0;
      while ((m = p.re.exec(sv))) {
        freeRanges.push([m.index, m.index + m[0].length]);
        free.push({ tag: p.tag, text: slice(m.index, m.index + m[0].length).trim() });
        if (m[0].length === 0) p.re.lastIndex++;
      }
    });
    var blanked = sv.split('');
    freeRanges.forEach(function (r) { for (var i = r[0]; i < r[1]; i++) blanked[i] = ' '; });
    var sv2 = blanked.join('');

    R.may.lastIndex = 0;
    while ((m = R.may.exec(sv2))) {
      var start = m.index + m[0].length, end = start;
      while (end < sv2.length && end - start < 220 && sv2.charAt(end) !== '.') end++;
      var stop = R.stop.exec(sv2.slice(start, end));
      if (stop) end = start + stop.index;
      mayRanges.push([m.index, end]);
      var o = orig(m.index, Math.max(m.index + 1, m.index + m[0].length));
      statements.push({ oa: o[0], ob: o[1], kind: 'may' });
      if (m[0].length === 0) R.may.lastIndex++;
    }

    R.neg.lastIndex = 0;
    while ((m = R.neg.exec(s))) {
      if (m[0].length === 0) { R.neg.lastIndex++; continue; }
      negRanges.push([m.index, m.index + m[0].length]);
    }

    // Exclusions per tag: "cocoa butter" is not milk, "nuez moscada" is not a tree nut.
    var excl = [];
    D.excl.forEach(function (x) {
      findAll(s, x[0]).forEach(function (r) { excl.push({ a: r[0], b: r[1], tags: x[1].split(' ') }); });
    });

    var raw = [];
    function add(a, b, tags, note, check) {
      var t = {};
      tags.split(' ').forEach(function (tag) {
        for (var i = 0; i < excl.length; i++) {
          if (a >= excl[i].a && b <= excl[i].b && excl[i].tags.indexOf(tag) !== -1) return;
        }
        t[tag] = note || '';
      });
      if (Object.keys(t).length) raw.push({ a: a, b: b, tags: t, check: !!check });
    }
    D.terms.forEach(function (t) {
      findAll(s, t[0]).forEach(function (r) { add(r[0], r[1], t[1], t[3], t[4]); });
    });
    // German compounds: "Vollmilchpulver", "Weizenmehl", "Haselnusskerne".
    var wre = /[A-Z0-9]+/g;
    while ((m = wre.exec(s))) {
      var w = m[0];
      D.inword.forEach(function (rule) {
        if (w.indexOf(rule[0]) === -1) return;
        for (var j = 0; j < rule[2].length; j++) if (w.indexOf(rule[2][j]) !== -1) return;
        add(m.index, m.index + w.length, rule[1], '', false);
      });
    }

    // Keep the longest hit; a hit inside a longer one gives it its tags.
    raw.sort(function (x, y) { return x.a - y.a || (y.b - y.a) - (x.b - x.a); });
    var hits = [];
    raw.forEach(function (h) {
      for (var i = 0; i < hits.length; i++) {
        var k = hits[i];
        if (h.a >= k.a && h.b <= k.b) {
          Object.keys(h.tags).forEach(function (tag) {
            if (!(tag in k.tags)) k.tags[tag] = h.tags[tag];
            else if (k.tags[tag] && !h.tags[tag] && !h.check) k.tags[tag] = '';
          });
          if (!h.check) k.check = false;
          return;
        }
      }
      hits.push(h);
    });

    var lactoseFree = free.some(function (x) { return x.tag === 'lactose'; });
    hits.forEach(function (h) {
      h.kind = inside(h.a, h.b, freeRanges) || inside(h.a, h.b, negRanges) ? 'free'
        : inside(h.a, h.b, mayRanges) ? 'may' : 'contains';
      // Milk means lactose too, unless the pack says it is lactose-free (as in the app).
      if ('milk' in h.tags && !('lactose' in h.tags) && !lactoseFree) h.tags.lactose = 'lactoseFromMilk';
      var o = orig(h.a, h.b);
      h.oa = o[0]; h.ob = o[1];
      h.text = text.slice(o[0], o[1]);
    });
    hits.forEach(function (h) {
      if (h.kind === 'free') {
        Object.keys(h.tags).forEach(function (tag) {
          if (!free.some(function (x) { return x.tag === tag && x.text.toLowerCase().indexOf(h.text.toLowerCase()) !== -1; })) {
            var r = inside(h.a, h.b, negRanges) || inside(h.a, h.b, freeRanges);
            free.push({ tag: tag, text: slice(r[0], r[1]).trim() });
          }
        });
      }
    });
    return { hits: hits.filter(function (h) { return h.kind !== 'free'; }), statements: statements, free: free };
  }

  /* Groups hits for the chosen tags: {contains: {tag: [{text, note}]}, may: {...}, check: {...}, other: [tags]} */
  function summarize(result, chosen) {
    var out = { contains: {}, may: {}, check: {}, free: [], other: [] };
    function push(group, tag, text, note) {
      var list = group[tag] || (group[tag] = []);
      var key = text.toLowerCase().replace(/\s+/g, ' ').trim();
      for (var i = 0; i < list.length; i++) if (list[i].key === key) return;
      list.push({ text: text.replace(/\s+/g, ' ').trim(), note: note, key: key });
    }
    result.hits.forEach(function (h) {
      Object.keys(h.tags).forEach(function (tag) {
        if (chosen.indexOf(tag) === -1) { if (out.other.indexOf(tag) === -1) out.other.push(tag); return; }
        var note = h.tags[tag];
        var group = h.kind === 'may' ? out.may : (h.check ? out.check : out.contains);
        push(group, tag, h.text, note);
      });
    });
    // A definite match makes the "worth checking" entry for the same tag redundant.
    Object.keys(out.check).forEach(function (tag) { if (out.contains[tag]) delete out.check[tag]; });
    Object.keys(out.may).forEach(function (tag) { if (out.contains[tag]) delete out.may[tag]; });
    out.free = result.free.filter(function (x) { return chosen.indexOf(x.tag) !== -1; });
    out.any = Object.keys(out.contains).length + Object.keys(out.may).length + Object.keys(out.check).length > 0;
    return out;
  }

  root.ILChecker = { fold: fold, analyze: analyze, summarize: summarize, data: function () { return D; } };
  if (typeof document === 'undefined') return;

  // ------------------------------------------------------------------ page
  var KEY = 'ingredilens.web.allergens.v1';
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

  function init() {
    var uiNode = document.getElementById('il-ui');
    if (!uiNode) return;
    var UI = JSON.parse(uiNode.textContent);
    var box = document.getElementById('il-allergens'), input = document.getElementById('il-text');
    var out = document.getElementById('il-results'), marked = document.getElementById('il-marked');
    var chosen = load(KEY) || [];
    D.tags.forEach(function (tag) {
      var cb = el('input', { type: 'checkbox', value: tag });
      cb.checked = chosen.indexOf(tag) !== -1;
      cb.addEventListener('change', function () {
        chosen = D.tags.filter(function (t) { return box.querySelector('input[value="' + t + '"]').checked; });
        save(KEY, chosen); run();
      });
      box.appendChild(el('label', { class: 'chip' }, [cb, ' ' + UI.names[tag]]));
    });
    document.getElementById('il-check').addEventListener('click', run);
    document.getElementById('il-example').addEventListener('click', function () { input.value = UI.example; run(); });
    document.getElementById('il-clear').addEventListener('click', function () { input.value = ''; run(); input.focus(); });
    var timer;
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(run, 250); });

    function listGroup(title, cls, group) {
      var tags = D.tags.filter(function (t) { return group[t]; });
      if (!tags.length) return null;
      var ul = el('ul', { class: 'res' });
      tags.forEach(function (tag) {
        var items = group[tag].map(function (x) { return '“' + x.text + '”' + (x.note && UI.notes[x.note] ? ' (' + UI.notes[x.note] + ')' : ''); });
        ul.appendChild(el('li', null, [el('strong', { text: UI.names[tag] }), ': ' + items.join(', ')]));
      });
      return el('div', { class: 'group ' + cls }, [el('h3', { text: title }), ul]);
    }

    function run() {
      var text = input.value;
      out.innerHTML = ''; marked.innerHTML = ''; marked.hidden = true;
      if (!text.trim()) { out.appendChild(el('p', { class: 'muted', text: UI.empty })); return; }
      if (!chosen.length) { out.appendChild(el('p', { class: 'muted', text: UI.pick })); return; }
      var result = analyze(text), sum = summarize(result, chosen);
      if (sum.any) {
        [listGroup(UI.contains, 'g-contains', sum.contains), listGroup(UI.may, 'g-may', sum.may), listGroup(UI.check, 'g-check', sum.check)]
          .forEach(function (g) { if (g) out.appendChild(g); });
      } else {
        out.appendChild(el('div', { class: 'group g-none' }, [el('h3', { text: UI.none }), el('p', { text: UI.noneNote })]));
      }
      if (sum.free.length) {
        out.appendChild(el('p', { class: 'muted' }, [UI.free + ': ' + sum.free.map(function (x) { return '“' + x.text + '” (' + UI.names[x.tag] + ')'; }).join(', ') + '. ' + UI.freeNote]));
      }
      if (sum.other.length) {
        out.appendChild(el('p', { class: 'muted', text: UI.other + ': ' + sum.other.map(function (t) { return UI.names[t]; }).join(', ') + '.' }));
      }
      // Highlighted copy of the label.
      var marks = [];
      result.statements.forEach(function (st) { marks.push({ oa: st.oa, ob: st.ob, cls: 'm-stmt' }); });
      result.hits.forEach(function (h) {
        var mine = Object.keys(h.tags).some(function (t) { return chosen.indexOf(t) !== -1; });
        if (mine) marks.push({ oa: h.oa, ob: h.ob, cls: h.kind === 'may' ? 'm-may' : (h.check ? 'm-check' : 'm-contains') });
      });
      marks.sort(function (x, y) { return x.oa - y.oa || y.ob - x.ob; });
      var pos = 0;
      marks.forEach(function (mk) {
        if (mk.oa < pos) return;
        if (mk.oa > pos) marked.appendChild(document.createTextNode(text.slice(pos, mk.oa)));
        marked.appendChild(el('mark', { class: mk.cls, text: text.slice(mk.oa, mk.ob) }));
        pos = mk.ob;
      });
      if (pos < text.length) marked.appendChild(document.createTextNode(text.slice(pos)));
      marked.hidden = false;
    }
    if (input.value.trim()) run();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})(typeof window !== 'undefined' ? window : globalThis);
