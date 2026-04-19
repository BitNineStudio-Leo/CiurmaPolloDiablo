'use strict';

// ══════════════════════════════════════════════════
// BUNDLED DATA — aggiornato con CA formula, TS completi, Gatto titanico
// ══════════════════════════════════════════════════
const BUNDLED_NPCS = [
  {
    "id": "vieni_qua",
    "name": "Vieniqua",
    "star": false,
    "classe": "Lv 13 · Orco · Guerriero",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/vieniqua.jpg",
    "ca": 26,
    "pf_max": 3,
    "ts_forte": [
      "Tempra",
      "Volontà"
    ],
    "ts_debole": [
      "Riflessi"
    ],
    "combat": "S",
    "magia": "D",
    "nav": "B",
    "tech": "D",
    "cura": "D",
    "furtivita": "D"
  },
  {
    "id": "saltarello",
    "name": "Saltarello",
    "star": false,
    "classe": "Lv 12 · Thri-Kreen · Mente Guerriera",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/saltarello.jpg",
    "ca": 23,
    "pf_max": 3,
    "ts_forte": [
      "Tempra",
      "Volontà"
    ],
    "ts_debole": [
      "Riflessi"
    ],
    "combat": "A",
    "magia": "A",
    "nav": "B",
    "tech": "D",
    "cura": "D",
    "furtivita": "D"
  },
  {
    "id": "wedge",
    "name": "Wedge",
    "star": false,
    "classe": "Lv 13 · Umano · Esperto (marinaio)",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/wedge.jpg",
    "ca": 20,
    "pf_max": 3,
    "ts_forte": [
      "Tempra"
    ],
    "ts_debole": [
      "Riflessi",
      "Volontà"
    ],
    "combat": "C",
    "magia": "D",
    "nav": "S",
    "tech": "A",
    "cura": "C",
    "furtivita": "B"
  },
  {
    "id": "bigs",
    "name": "Biggs",
    "star": false,
    "classe": "Lv 13 · Umano · Esperto (marinaio)",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/biggs.jpg",
    "ca": 20,
    "pf_max": 3,
    "ts_forte": [
      "Tempra"
    ],
    "ts_debole": [
      "Riflessi",
      "Volontà"
    ],
    "combat": "C",
    "magia": "D",
    "nav": "S",
    "tech": "C",
    "cura": "A",
    "furtivita": "B"
  },
  {
    "id": "son_goku",
    "name": "Son Goku",
    "star": true,
    "classe": "Lv 18 · Umano · Monaco",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/viejo.jpg",
    "ca": 27,
    "pf_max": 4,
    "ts_forte": [
      "Tempra",
      "Volontà"
    ],
    "ts_debole": [
      "Riflessi"
    ],
    "combat": "SS",
    "magia": "D",
    "nav": "A",
    "tech": "D",
    "cura": "B",
    "furtivita": "D"
  },
  {
    "id": "lady",
    "name": "Lady",
    "star": true,
    "classe": "Lv 18 · Umana · ???",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/lady.jpg",
    "ca": 26,
    "pf_max": 4,
    "ts_forte": [
      "Volontà"
    ],
    "ts_debole": [
      "Tempra",
      "Riflessi"
    ],
    "combat": "D",
    "magia": "S",
    "nav": "C",
    "tech": "C",
    "cura": "A",
    "furtivita": "A"
  },
  {
    "id": "quarantena",
    "name": "Quarantena",
    "star": true,
    "classe": "Lv 16 · Mezzelfa · Shadow Man",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/quarantena.jpg",
    "ca": 27,
    "pf_max": 4,
    "ts_forte": [
      "Riflessi",
      "Volontà"
    ],
    "ts_debole": [
      "Tempra"
    ],
    "combat": "D",
    "magia": "SS",
    "nav": "A",
    "tech": "D",
    "cura": "C",
    "furtivita": "A"
  },
  {
    "id": "stella",
    "name": "Stella",
    "star": false,
    "classe": "Lv 13 · Elfa Occhirosi · Crusader",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/stella.jpg",
    "ca": 27,
    "pf_max": 3,
    "ts_forte": [
      "Tempra",
      "Volontà"
    ],
    "ts_debole": [
      "Riflessi"
    ],
    "combat": "A",
    "magia": "S",
    "nav": "D",
    "tech": "D",
    "cura": "A",
    "furtivita": "D"
  },
  {
    "id": "gurgo",
    "name": "Gurgo (Scorpion)",
    "star": false,
    "classe": "Lv 4 · Gnefro · Ladro",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/gurgo.jpg",
    "ca": 13,
    "pf_max": 1,
    "ts_forte": [
      "Riflessi"
    ],
    "ts_debole": [
      "Tempra",
      "Volontà"
    ],
    "combat": "C",
    "magia": "D",
    "nav": "B",
    "tech": "B",
    "cura": "D",
    "furtivita": "B"
  },
  {
    "id": "gatto",
    "name": "Gatto",
    "star": true,
    "classe": "Titano della Creatività · Gatto Supremo",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/gatto.jpg",
    "ca": 30,
    "pf_max": 5,
    "ts_forte": [
      "Tempra",
      "Riflessi"
    ],
    "ts_debole": [
      "Volontà"
    ],
    "combat": "B",
    "magia": "D",
    "nav": "D",
    "tech": "SS",
    "cura": "SS",
    "furtivita": "B"
  },
  {
    "id": "dorag",
    "name": "Dorag",
    "star": false,
    "classe": "Drago di ottone adulto",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/dorag.jpg",
    "ca": 26,
    "pf_max": 3,
    "ts_forte": [
      "Tempra",
      "Riflessi"
    ],
    "ts_debole": [
      "Volontà"
    ],
    "combat": "A",
    "magia": "B",
    "nav": "D",
    "tech": "D",
    "cura": "C",
    "furtivita": "C"
  },
  {
    "id": "murray",
    "name": "Murray",
    "star": false,
    "classe": "Lv 5 · Teschio rianimato · Stregone",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/murray.jpg",
    "ca": 12,
    "pf_max": 2,
    "ts_forte": [
      "Volontà"
    ],
    "ts_debole": [
      "Tempra",
      "Riflessi"
    ],
    "combat": "D",
    "magia": "C",
    "nav": "D",
    "tech": "D",
    "cura": "D",
    "furtivita": "D"
  },
  {
    "id": "ombre",
    "name": "Ombre del crocicchio",
    "star": false,
    "classe": "Evocazione · Quarantena",
    "image_url": "https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2026/04/ombre.jpg",
    "ca": 26,
    "pf_max": 4,
    "ts_forte": [
      "Riflessi",
      "Volontà"
    ],
    "ts_debole": [
      "Tempra"
    ],
    "combat": "A",
    "magia": "A",
    "nav": "B",
    "tech": "D",
    "cura": "D",
    "furtivita": "B",
    "summoned": true
  },
  {
    "id": "chuck",
    "name": "Chuckonius",
    "star": true,
    "classe": "Lv 18, Lich, Geomante",
    "image_url": "",
    "ca": 28,
    "pf_max": 4,
    "ts_forte": [
      "Tempra",
      "Volontà"
    ],
    "ts_debole": [
      "Riflessi"
    ],
    "combat": "B",
    "magia": "SS",
    "nav": "B",
    "tech": "A",
    "cura": "C",
    "furtivita": "D"
  },
  {
    "id": "simon",
    "name": "Simon Sgabelloviz",
    "star": false,
    "classe": "Lv 15, Sgabello/Umano, Chierico della Fortuna",
    "image_url": "",
    "ca": 25,
    "pf_max": 3,
    "ts_forte": [
      "Tempra"
    ],
    "ts_debole": [
      "Riflessi",
      "Volontà"
    ],
    "combat": "C",
    "magia": "A",
    "nav": "B",
    "tech": "D",
    "cura": "A",
    "furtivita": "A"
  },
  {
    "id": "billy",
    "name": "Billy",
    "star": false,
    "classe": "Mobile Animato · Simon",
    "image_url": "",
    "ca": 20,
    "pf_max": 2,
    "ts_forte": [
      "Tempra"
    ],
    "ts_debole": [
      "Riflessi",
      "Volontà"
    ],
    "combat": "A",
    "magia": "D",
    "nav": "D",
    "tech": "D",
    "cura": "D",
    "furtivita": "D",
    "summoned": true
  }
];

const BUNDLED_CARDS = [
  {
    "npc_id": "vieni_qua",
    "title": "Ascia-mano",
    "cost": 1,
    "stat": "combat",
    "grade": "S",
    "desc": "Attacca con la protesi ascia. Infligge 30 danni. Se il bersaglio è taglia Media o inferiore, è anche Abbattuto per 1 round.",
    "rule": "Nessun tiro per colpire. Portata mischia.",
    "flavor": "Dopo il tradimento di x si fece impiantare un'ascia in un braccio. Bal gli ha insegnato come usarla.",
    "minion": ""
  },
  {
    "npc_id": "vieni_qua",
    "title": "Scudo vivente",
    "cost": 1,
    "stat": "combat",
    "grade": "S",
    "desc": "Si interpone tra un alleato adiacente e un attacco in arrivo, divenendone il bersaglio.",
    "rule": "Vieni Qua riporta la ferita al posto dell'alleato protetto.",
    "flavor": "La prima lezione che vieni qua abbia mai imparato: - mettere corpo davanti.",
    "minion": ""
  },
  {
    "npc_id": "vieni_qua",
    "title": "Ambizione dell'armatura",
    "cost": 2,
    "stat": "combat",
    "grade": "S",
    "desc": "Per 3 round: gli attacchi ignorano resistenze e riduzioni al danno, durante questi round ignora il primo danno subito.",
    "rule": "Usabile 1 volta per sessione. Non è magia — è spirito puro.",
    "flavor": "- Come fai a reggere tutto questo?  -Non sapere. Maestro Bal chiamare questo \"ambizione\".",
    "minion": ""
  },
  {
    "npc_id": "saltarello",
    "title": "Raffica di artigli",
    "cost": 1,
    "stat": "combat",
    "grade": "A",
    "desc": "Attacca due bersagli diversi nello stesso round infliggendo 25 danni a ciascuno.",
    "rule": "I due bersagli devono essere entro 3m tra loro.",
    "flavor": "Fra i Thri Kreen è quello che si definisce un “sangue scuro”, le sue braccia sono segno di un progenitore Formian.",
    "minion": ""
  },
  {
    "npc_id": "saltarello",
    "title": "Balzo psionico",
    "cost": 1,
    "stat": "magia",
    "grade": "A",
    "desc": "Salta fino a 18m in qualsiasi direzione. Può atterrare su un nemico: 30 danni e Abbattuto per 1 round.",
    "rule": "Non provoca attacchi di opportunità iniziando il salto.",
    "flavor": "La ciurma ha smesso di chiedersi come riesca ad arrivare tanto in alto.",
    "minion": ""
  },
  {
    "npc_id": "saltarello",
    "title": "Messaggio telepatico",
    "cost": 2,
    "stat": "magia",
    "grade": "A",
    "desc": "Invia un messaggio telepatico ad un qualsiasi membro della ciurma, ovunque si trovi. il contattato può rispondere.",
    "rule": "Funziona solo se il bersaglio si trova sullo stesso piano, limite di 30 parole.",
    "flavor": "Saltarello fu soldato presso un alveare che era in affari con il corsaro le Blanc. Scelse una nuova famiglia.",
    "minion": ""
  },
  {
    "npc_id": "wedge",
    "title": "Manovra esperta",
    "cost": 1,
    "stat": "nav",
    "grade": "S",
    "desc": "Una prova di navigazione o manovra della nave riesce automaticamente.",
    "rule": "Dichiarare prima del tiro.",
    "flavor": "Testa cucita con una corda, timone in mano e vento in poppa. Una splendida giornata.",
    "minion": ""
  },
  {
    "npc_id": "wedge",
    "title": "Riparazione rapida",
    "cost": 1,
    "stat": "tech",
    "grade": "A",
    "desc": "Ripara 30 PF strutturali della nave in 10 minuti.",
    "rule": "Non usabile in combattimento navale attivo.",
    "flavor": "- Come lavori con la testa così? - Facendo attenzione a non girarmi di scatto.",
    "minion": ""
  },
  {
    "npc_id": "wedge",
    "title": "Tecnica rematoria",
    "cost": 2,
    "stat": "nav",
    "grade": "S",
    "desc": "La nave si muove al doppio della velocità per 1 ora. ",
    "rule": "Se anche Bigs usa la stessa carta nella stessa ora, la velocità è triplicata.",
    "flavor": "La marina li cerca per tre dei sei mari. Non li ha mai raggiunti.",
    "minion": ""
  },
  {
    "npc_id": "bigs",
    "title": "Manovra esperta",
    "cost": 1,
    "stat": "nav",
    "grade": "S",
    "desc": "Una prova di navigazione o manovra della nave riesce automaticamente.",
    "rule": "Dichiarare prima del tiro.",
    "flavor": "Biggs e Wedge non parlano molto. Non ne hanno bisogno per capirsi.",
    "minion": ""
  },
  {
    "npc_id": "bigs",
    "title": "Spuntino Rinvigorente",
    "cost": 1,
    "stat": "cura",
    "grade": "A",
    "desc": "Stabilizza un personaggio a 0 PF e lo riporta a 20 PF, oppure cura una ferita ad un qualsiasi membro della ciurma e finisce fuori combattimento.",
    "rule": "Se Biggs cura un altro minion finisce fuori combattimento senza subire ferite.",
    "flavor": "- Hai un buco nello stomaco. - Lo so, ho sempre fame.",
    "minion": "",
    "disable_if": {
      "target": "self",
      "condition": "ask",
      "prompt": "Stai curando un minion?"
    }
  },
  {
    "npc_id": "bigs",
    "title": "Tecnica rematoria",
    "cost": 2,
    "stat": "nav",
    "grade": "S",
    "desc": "La nave si muove al doppio della velocità per 1 ora.",
    "rule": "Se anche Wedge usa la stessa carta nella stessa ora: velocità triplicata.",
    "flavor": "Insieme, i due ex Marine, valgono più di qualsiasi vento.",
    "minion": ""
  },
  {
    "npc_id": "son_goku",
    "title": "Pugno del monaco",
    "cost": 1,
    "stat": "combat",
    "grade": "SS",
    "desc": "Infligge 50 danni a un bersaglio senza tiro per colpire. Bersagli con meno di 12 DV: Abbattuto per 1 round.",
    "rule": "Portata 3m",
    "flavor": "L'ex-ammiraglio che fondò una città, l'ex-prigioniero che si consegnò per difenderla. Una volontà che non smise mai di lottare.",
    "minion": "★ In forma Re Kong non può ricevere ferite da attacchi normali."
  },
  {
    "npc_id": "son_goku",
    "title": "Ambizione del re conquistatore",
    "cost": 2,
    "stat": "combat",
    "grade": "SS",
    "desc": "Tutti i nemici con meno di 12 DV entro 18m cadono infermi per 1d4 round. Tutti gli altri sono comunque scossi per la stessa durata",
    "rule": "nessun tiro salvezza.",
    "flavor": "- Sai chi sono?  - Sì. - Allora sai già come finirà.",
    "minion": "★ In forma Re Kong non può ricevere ferite da attacchi normali."
  },
  {
    "npc_id": "son_goku",
    "title": "Re Kong",
    "cost": 2,
    "stat": "combat",
    "grade": "SS",
    "desc": "Trasformazione in gorilla gigante per 3 round: immune alle ferite normali, ogni round può infliggere un attacco da 40 danni, i nemici con meno di 12 DV sono spaventati.",
    "rule": "Portata 6 m, taglia mastodontica, utilizzabile 1 volta per sessione.",
    "flavor": "Mouga pensava di averlo spezzato. Aveva torto.",
    "minion": "★ In forma Re Kong non può ricevere ferite da attacchi normali."
  },
  {
    "npc_id": "son_goku",
    "title": "Re Kong scatenato",
    "cost": 3,
    "stat": "combat",
    "grade": "SS",
    "desc": "Come Re Kong ma dura 5 round. Ogni attacco colpisce tutti i nemici entro 6m per 40 danni ciascuno.",
    "rule": "Usabile solo se Re Kong è già attivo. taglia colossale, 1 volta per sessione.",
    "flavor": "Re Kong non si inchina a nessuno. Nemmeno ai leviatani.",
    "minion": "★ In forma Re Kong non può ricevere ferite da attacchi normali."
  },
  {
    "npc_id": "lady",
    "title": "Lettura del destino",
    "cost": 1,
    "stat": "magia",
    "grade": "S",
    "desc": "Domanda sì/no su un pericolo imminente. Il DM risponde onestamente. Non fallisce mai.",
    "rule": "Max 1 per sessione per giocatore.",
    "flavor": "Non predice il futuro, lo vede già successo.",
    "minion": ""
  },
  {
    "npc_id": "lady",
    "title": "Tisana della guaritrice",
    "cost": 1,
    "stat": "cura",
    "grade": "A",
    "desc": "Cura 28 PF e rimuove maledizioni.",
    "rule": "Solo fuori combattimento, 30 minuti di preparazione.",
    "flavor": "Sa di erbe, di rum e di qualcosa che non ha nome. Funziona sempre.",
    "minion": ""
  },
  {
    "npc_id": "lady",
    "title": "Maledizione voodoo",
    "cost": 2,
    "stat": "magia",
    "grade": "S",
    "desc": "Un nemico scelto subisce svantaggio ai prossimi 4 tiri. Nessun tiro salvezza.",
    "rule": "Si può cumulare la durata con usi successivi.",
    "flavor": "Lady non odia nessuno. Ma ricorda tutto.",
    "minion": ""
  },
  {
    "npc_id": "lady",
    "title": "Oracolo del crocicchio",
    "cost": 3,
    "stat": "magia",
    "grade": "S",
    "desc": "Consulta gli spiriti. Il DM fornisce un indizio concreto su un mistero attivo: un nome, un luogo o una connessione nascosta, dopodiché Lady è fuori combattimento.",
    "rule": "Max 1 per sessione.",
    "flavor": "Al crocicchio si incontrano tutti i cammini. Anche quelli dei morti.",
    "minion": ""
  },
  {
    "npc_id": "quarantena",
    "title": "Lama del Dolore e della paura",
    "cost": 1,
    "stat": "magia",
    "grade": "SS",
    "desc": "A scelta: Infligge 32 danni da energia negativa - oppure infligge un livello negativo - oppure prende il controllo di un non morto entro 14 DV per 1 round.",
    "rule": "Un solo effetto per attivazione.",
    "flavor": "- E' forte come incantesimo? - mah, è medio. ",
    "minion": ""
  },
  {
    "npc_id": "quarantena",
    "title": "Frutto Feel-Feel: Indifferenza",
    "cost": 2,
    "stat": "magia",
    "grade": "SS",
    "desc": "Un alleato a scelta guadagna +5 a CA e a tutti i tiri salvezza per 1 round ed è immune a qualsiasi danno ed effetto per lo stesso round. Al termine del round, Quarantena viene rimossa dal combattimento anche se non ha subito ferite.",
    "rule": "Entrambi gli effetti sono simultanei e inscindibili. Quarantena esce dal combattimento a fine round indipendentemente dall'esito.",
    "flavor": "Si siede in mezzo al combattimento e apre la Smemo. Non le interessa.",
    "minion": "",
    "disable_if": {
      "target": "self",
      "condition": "always"
    }
  },
  {
    "npc_id": "quarantena",
    "title": "Frutto Feel-Feel: Musica Deprimente",
    "cost": 1,
    "stat": "magia",
    "grade": "A",
    "desc": "Se è attiva musica bardica nelle vicinanze, tutti i neutrali che la sentono beneficiano di Ispirare Grandezza. Qualsiasi incantatore che tenti di lanciare un incantesimo con descrittore Bene o Male deve superare Concentrazione CD 35 o l'incantesimo fallisce.",
    "rule": "Entrambi gli effetti si attivano insieme finché dura la musica. Non funziona in assenza di una fonte musicale attiva.",
    "flavor": "Quarantena trova la musica di Rock accettabile. Abbastanza da fargli da manager.",
    "minion": ""
  },
  {
    "npc_id": "quarantena",
    "title": "Shadow Man",
    "cost": 2,
    "stat": "magia",
    "grade": "SS",
    "desc": "Evoca 4 Ombre obbedienti per 10 ore.",
    "rule": "Ogni Ombra conta come minion separato con proprie regole e ferite.",
    "flavor": "- Quanti ne puoi evocare? - Quanti ne vuoi?",
    "minion": "Ogni Ombra è un minion indipendente",
    "summon": {
      "npc_id": "ombre",
      "pool": 4,
      "pool_name": "PS"
    }
  },
  {
    "npc_id": "stella",
    "title": "Arti marziali Occhirossi",
    "cost": 1,
    "stat": "combat",
    "grade": "A",
    "desc": "Attacca infliggendo 30 danni sacri. Contro non-morti o aberrazioni: 45 danni. Contro gli scorpioni 100.",
    "rule": "Nessun tiro per colpire.",
    "flavor": "L'astrosauro le ha parlato in sogno. Stella sa di essere la sua prescelta.",
    "minion": "★ In forma astrosauro non può ricevere ferite da attacchi magici."
  },
  {
    "npc_id": "stella",
    "title": "Tocco delle stelle",
    "cost": 2,
    "stat": "cura",
    "grade": "A",
    "desc": "Cura 32 PF a un alleato. Può salvare un alleato che dovrebbe morire in questo round, riportandolo a 16 PF automaticamente.",
    "rule": "Contatto fisico richiesto. Può salvare anche un minion dalla morte prevenendo il danno che lo ucciderebbe.",
    "flavor": "I tessuti guariscono con la stessa forza vitale di un sole che brucia.",
    "minion": "★ In forma astrosauro non può ricevere ferite da attacchi magici."
  },
  {
    "npc_id": "stella",
    "title": "Passo delle stelle",
    "cost": 2,
    "stat": "magia",
    "grade": "S",
    "desc": "Stance che genera aura divina per 2 round. Tutti gli alleati in 9m: +3 attacchi, +3 danni, riduzione danno 5/-.",
    "rule": "Bonus di morale.",
    "flavor": "- Da dove viene questa luce? - Dal cosmo che brucia dentro di me!",
    "minion": "★ In forma astrosauro non può ricevere ferite da attacchi magici."
  },
  {
    "npc_id": "stella",
    "title": "Astrosauro",
    "cost": 2,
    "stat": "magia",
    "grade": "S",
    "desc": "linea di laser da 12 metri e 38 danni da fuoco, la velocità aumenta a 15m, può spostarsi senza causare attacchi d'opportunità. Dura 3 round.",
    "rule": "Utilizzabile 1 volta per sessione.",
    "flavor": "Il grande Astrosauro non cammina su questa terra. Tranne quando decide di farlo.",
    "minion": "★ In forma astrosauro non può ricevere ferite da attacchi magici."
  },
  {
    "npc_id": "gurgo",
    "title": "Borseggio / scassinare",
    "cost": 1,
    "stat": "furtivita",
    "grade": "B",
    "desc": "Ruba un oggetto specifico da un PNG o apre una serratura. CD Furtività 14. Se il bersaglio non è allertato: riuscita automatica.",
    "rule": "Anche in combattimento.",
    "flavor": "Lo chiamavano \"Schifo\" perché erano crudeli, ora si chiama Scorpion e gliela farà vedere!",
    "minion": ""
  },
  {
    "npc_id": "gurgo",
    "title": "Patetico",
    "cost": 1,
    "stat": "furtivita",
    "grade": "B",
    "desc": "Gurgo fa una scena tanto pietosa che un nemico perde la sua azione nel round successivo.",
    "rule": "Non funziona su non-morti, costrutti o creature con Int < 6.",
    "flavor": "Non è una tecnica, ma una vita intera di umiliazioni trasformata in arma.",
    "minion": ""
  },
  {
    "npc_id": "gurgo",
    "title": "Sabotaggio gremlin",
    "cost": 2,
    "stat": "tech",
    "grade": "B",
    "desc": "Sabota un meccanismo nemico: cannone, trappola, serratura magica, gabbia. Effetto immediato e irreversibile senza riparazioni.",
    "rule": "Deve essere adiacente al meccanismo.",
    "flavor": "Si chiama anche \"Gurgo\" per non farsi trovare da Stella. Ma questo è un altro discorso.",
    "minion": ""
  },
  {
    "npc_id": "gatto",
    "title": "Riparazione prodigiosa",
    "cost": 1,
    "stat": "tech",
    "grade": "SS",
    "desc": "Ripara istantaneamente qualsiasi oggetto meccanico o magico danneggiato. Nave: recupera 40 PF strutturali.",
    "rule": "Il DM tira 1d6 in segreto. Con 1-2: Gatto ripara qualcosa che nessuno aveva chiesto, o migliora l'oggetto in modo inaspettato con conseguenze narrative imprevedibili. Non usabile in combattimento navale attivo.",
    "flavor": "L'ordine in cui le cose si trovano è spesso sterile. Per questo le spingo giù dal tavolo.",
    "minion": ""
  },
  {
    "npc_id": "gatto",
    "title": "Cucina suprema",
    "cost": 1,
    "stat": "cura",
    "grade": "SS",
    "desc": "Fuori dal combattimento. Tutti i commensali recuperano 40 PF e beneficiano dell'effetto di ristorare minore.",
    "rule": "Il DM tira 1d6 in segreto. Con 1-2: il piatto ha un effetto aggiuntivo non richiesto - un commensale casuale acquisisce una capacità bizzarra o tutti subiscono un effetto narrativo imprevedibile per 1 ora.",
    "flavor": "Ha buttato nella pentola tre chiodi arrugginiti, una vecchia pantofola e una crosta di pane. Ne ha tirato fuori un banchetto per 12 persone.",
    "minion": ""
  },
  {
    "npc_id": "gatto",
    "title": "Costruzione titanica",
    "cost": 2,
    "stat": "tech",
    "grade": "SS",
    "desc": "Il giocatore descrive un problema. Gatto costruisce in pochi minuti qualcosa che lo risolve. La forma della soluzione è a discrezione del DM, e si rompe comunque in breve tempo.",
    "rule": "Il DM tira 1d6 in segreto. Con 1-2: la costruzione risolve il problema ma ne crea uno nuovo di proporzioni simili altrove. Il giocatore descrive il problema - non la soluzione.",
    "flavor": "Quello che voglio fare è qualcosa che quel rottame non sa ancora di poter essere.",
    "minion": ""
  },
  {
    "npc_id": "gatto",
    "title": "Balzo della nave",
    "cost": 3,
    "stat": "tech",
    "grade": "SS",
    "desc": "La nave compie un balzo prodigioso fino a 1km, superando qualsiasi ostacolo fisico o navale.",
    "rule": "Il DM tira 1d6 in segreto. Con 1-2: la nave atterra sulla terra ferma. Richiede almeno un giorno di riparazioni e un modo per rimetterla in mare prima di poter ripartire. Gatto deve essere sveglio e a bordo. 1 volta per sessione.",
    "flavor": "Nessuno sa cosa ci sia dentro quei pedali. Nessuno ha il coraggio di cercare di scoprirlo.",
    "minion": ""
  },
  {
    "npc_id": "dorag",
    "title": "Soffio del drago",
    "cost": 1,
    "stat": "combat",
    "grade": "A",
    "desc": "A scelta: soffio di fuoco (36 danni, cono 9m, CD Riflessi 25 dimezza) oppure soffio soporifero (1 bersaglio dorme 10 min, Tempra 25 nega).",
    "rule": "Una sola forma per attivazione.",
    "flavor": "È educato. È cordiale. Brucia le cose solo quando necessario.",
    "minion": ""
  },
  {
    "npc_id": "dorag",
    "title": "Contatto dell'Airone",
    "cost": 2,
    "stat": "magia",
    "grade": "B",
    "desc": "Chiama un contatto nella rete dell'Airone. Ottieni almeno 3 informazioni riservate e concrete su una fazione, PNG o luogo.",
    "rule": "Max 1 per sessione. Informazioni a discrezione del DM.",
    "flavor": "I draghi di ottone collezionano storie. Dorag ne conosce abbastanza da riempire una biblioteca.",
    "minion": ""
  },
  {
    "npc_id": "dorag",
    "title": "Maestà del drago",
    "cost": 2,
    "stat": "combat",
    "grade": "A",
    "desc": "Tutti i nemici entro 12m con meno di 10 DV sono spaventati per 2 round. Tutti gli altri sono comunque scossi.",
    "rule": "si può cumulare con più attivazioni",
    "flavor": "La sua stazza può diventare presto molto minacciosa.",
    "minion": ""
  },
  {
    "npc_id": "murray",
    "title": "Maledizione dello stregone",
    "cost": 1,
    "stat": "magia",
    "grade": "C",
    "desc": "Un nemico subisce -2 a tutti i tiri salvezza per 1 ora. Murray scaglia la maledizione nel modo più teatralmente minaccioso possibile.",
    "rule": "Non si cumula con Maledizione Voodoo di Lady.",
    "flavor": "Sono il più terrificante non-morto dell'area delle tre isole! ok, il più terrificante PEZZO di non morto.",
    "minion": ""
  },
  {
    "npc_id": "murray",
    "title": "Dardo incantato veramente spaventoso",
    "cost": 1,
    "stat": "magia",
    "grade": "C",
    "desc": "3 dardi magici automatici da 8 danni l'uno. Distribuibili su bersagli diversi.",
    "rule": "Non richiede tiro per colpire.",
    "flavor": "- Come fai a lanciare incantesimi senza mani? - Silenzio! Non distrarre la malignità con le tue stupide domande!",
    "minion": ""
  },
  {
    "npc_id": "murray",
    "title": "Trattativa con i morti",
    "cost": 2,
    "stat": "magia",
    "grade": "C",
    "desc": "Murray convince un non-morto non intelligente a ignorare la ciurma per 10 minuti grazie alla sua parlantina.",
    "rule": "Non funziona su non-morti intelligenti.",
    "flavor": "Varcheremo le porte dell'inferno reggendo le loro teste su una picca! beh ok tu varcherai e io rotolerò.",
    "minion": ""
  },
  {
    "npc_id": "ombre",
    "title": "Armata delle tenebre",
    "cost": 1,
    "summon_cost": true,
    "stat": "combat",
    "grade": "A",
    "desc": "Le Ombre attaccano tutti i nemici entro 1,5m da loro. 1ps: 15 danni. 2ps: 30 danni. 3ps: 45 danni. 4ps: 60 danni.",
    "rule": "Spendi 1-4 PS. I danni scalano con i punti spesi. Le Ombre devono essere entro 1,5m dai bersagli.",
    "flavor": "Era poco più che un'ombra poco fa, ma ora sono corpi fatti di ossa spezzate, carne rinsecchita e fauci affamate.",
    "minion": ""
  },
  {
    "npc_id": "ombre",
    "title": "Servitori non morti",
    "cost": 1,
    "summon_cost": true,
    "stat": "combat",
    "grade": "A",
    "desc": "1ps: fiancheggia un nemico — vantaggio al primo attacco verso quel nemico. 2ps: due Ombre si sacrificano, assorbono la prossima ferita di un minion. 3ps: esplorano una zona, il DM fornisce un'informazione tattica. 4ps: bloccano un nemico per 1 round, non può agire.",
    "rule": "Spendi 1-4 PS. L'effetto corrisponde ai punti spesi. Le Ombre devono essere entro 1,5m dal bersaglio.",
    "flavor": "Lo ombre emergono dal crocicchio al richiamo dello shadow man.",
    "minion": ""
  },
  {
    "npc_id": "chuck",
    "title": "Gamba di Legno",
    "cost": 1,
    "stat": "magia",
    "grade": "SS",
    "desc": "Chuck sfrutta il potere del suo filatterio. Per questo round è immune ai danni.",
    "rule": "Usabile 1 volta per combattimento.",
    "flavor": "Non è una gamba. Non è mai stata solo una gamba.",
    "minion": ""
  },
  {
    "npc_id": "chuck",
    "title": "Maledizione Voodoo",
    "cost": 2,
    "stat": "magia",
    "grade": "SS",
    "desc": "Chuck lancia una maledizione su un nemico. Il bersaglio subisce svantaggio a tutti i tiri per 1 round e non può beneficiare di cure durante questo periodo.",
    "rule": "Bersaglio singolo. Gli effetti durano fino all'inizio del prossimo turno di Chuck.",
    "flavor": "— Cosa hai fatto? — Niente di permanente. Probabilmente.",
    "minion": ""
  },
  {
    "npc_id": "chuck",
    "title": "Palla di Fuoco",
    "cost": 1,
    "stat": "magia",
    "grade": "SS",
    "desc": "Chuck lancia una classica palla di fuoco. Tutti i nemici entro 6m dal punto di impatto subiscono 35 danni da fuoco. CD Riflessi 22 dimezza.",
    "rule": "Raggio 6m dal punto di impatto. Colpisce tutti i nemici nell'area indiscriminatamente.",
    "flavor": "Dopo trent'anni, è ancora il suo incantesimo preferito.",
    "minion": ""
  },
  {
    "npc_id": "simon",
    "title": "LYCKA",
    "cost": 1,
    "stat": "magia",
    "grade": "A",
    "desc": "La fortuna sfacciata di Simon sorride a un alleato. Un alleato a scelta può ritirare immediatamente un dado appena tirati e tenere il risultato migliore.",
    "rule": "Va dichiarato subito dopo il tiro originale, prima che il DM descriva l'esito.",
    "flavor": "— Come fai a essere sempre così fortunato? — Sono uno sgabello. Gli sgabelli non credono nella sfortuna.",
    "minion": ""
  },
  {
    "npc_id": "simon",
    "title": "BRETTERBANK",
    "cost": 3,
    "stat": "combat",
    "grade": "B",
    "desc": "Simon spronta quattro gambe di legno aggiuntive e diventa una cavalcatura. Per 3 round il passeggero ottiene +4 CA. Il passeggero può interrompere il bonus in qualsiasi momento per proiettarsi dallo sgabello, ottenendo vantaggio al primo attacco di quel round.",
    "rule": "Un solo passeggero. La proiezione termina l'effetto di BRETTERBANK. Simon non può usare altre carte mentre funge da cavalcatura.",
    "flavor": "Simon non ha mai capito perché i suoi compagni trovino strano cavalcare uno sgabello.",
    "minion": ""
  },
  {
    "npc_id": "simon",
    "title": "Infiltrazione",
    "cost": 1,
    "stat": "furtivita",
    "grade": "SS",
    "desc": "Simon si trasforma in un innocuo sgabello e si infiltra in una zona sorvegliata o in una stanza nemica. Raccoglie informazioni: il DM rivela un segreto tattico, una posizione, o un piano nemico.",
    "rule": "Fuori combattimento. Simon deve poter raggiungere la zona bersaglio. La durata è a discrezione del DM in base alla situazione.",
    "flavor": "Nessuno sospetta dello sgabello. Lo sgabello sente tutto.",
    "minion": ""
  },
  {
    "npc_id": "simon",
    "title": "WANDSCHRANK",
    "cost": 2,
    "stat": "magia",
    "grade": "B",
    "desc": "Simon anima un oggetto di legno nelle vicinanze evocando Billy, un mobile animato obbediente.",
    "rule": "Richiede un oggetto di legno sufficientemente grande nelle vicinanze (porta, cassa, armadio, remo). Se non ve ne sono, la carta non può essere usata.",
    "flavor": "— Da dove viene quell'armadio? — È sempre stato lì. — Siamo su una nave. — Appunto.",
    "minion": "",
    "summon": {
      "npc_id": "billy",
      "pool": 2,
      "pool_name": "PS"
    }
  },
  {
    "npc_id": "billy",
    "title": "KNUFF",
    "cost": 1,
    "summon_cost": true,
    "stat": "combat",
    "grade": "A",
    "desc": "1ps: Billy si scaglia su un nemico con uno schianto possente — 20 danni e il bersaglio viene abbattuto. 2ps: stesso effetto ma colpisce tutti i nemici in un quadrato di 3m.",
    "rule": "Billy deve essere entro 3m dal bersaglio. L'abbattimento dura 1 round.",
    "flavor": "Non è un mobile aggressivo. È solo molto, molto convinto.",
    "minion": ""
  },
  {
    "npc_id": "billy",
    "title": "STÄNGA",
    "cost": 1,
    "summon_cost": true,
    "stat": "combat",
    "grade": "A",
    "desc": "1ps: Billy blocca un nemico di taglia media o inferiore per 1 round. 2ps: stesso effetto ma il blocco dura 2 round.",
    "rule": "Billy deve essere adiacente al bersaglio. Il nemico non può muoversi ma può ancora attaccare.",
    "flavor": "L'armadio lo fissa. L'armadio non si muove. L'armadio ha tutto il tempo del mondo.",
    "minion": ""
  }
];

// ══════════════════════════════════════════════════
// CONFIG
// ══════════════════════════════════════════════════
const SI = {combat:'⚔️',magia:'✡️',nav:'⚓',tech:'🔧',cura:'🍗',furtivita:'🎭'};
const SK  = ['combat','magia','nav','tech','cura','furtivita'];
const SN  = {combat:'Combattimento',magia:'Magia',nav:'Navigazione',tech:'Tecnica',cura:'Cura',furtivita:'Furtività'};

// ══════════════════════════════════════════════════
// STORE
// ══════════════════════════════════════════════════
const LS = {
  g:(k,d)=>{try{const v=localStorage.getItem(k);return v!=null?JSON.parse(v):d}catch{return d}},
  s:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}}
};

// ══════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════
let S = {
  view:    'home',
  rawUrl:  LS.g('rawUrl',''),
  npcs:    LS.g('npcs', BUNDLED_NPCS),
  cards:   LS.g('cards', BUNDLED_CARDS),
  deck:    LS.g('deck', []),
  session: LS.g('session', null),
  maxPool: LS.g('maxPool', 6),
  wounds:  LS.g('wounds', {}),
  loading:false, error:null, toast:null, dialog:null,
  expanded:{}, consultaExp:{}, consultaTab:'ciurma', openCard:null, openInfo:null,
  menuOpen:false, minionOpen:false, builderDeck:null,
  syncTime: LS.g('syncTime', null),
};

// ══════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════
const npcCards = id => S.cards.filter(c=>c.npc_id===id);
const npcById  = id => S.npcs.find(n=>n.id===id);
const cKey     = (n,t) => `${n}::${t}`;
const enc      = s => encodeURIComponent(s||'');
const dec      = s => {try{return decodeURIComponent(s||'')}catch{return s||''}};
const gc       = g  => `g-${(g||'d').toLowerCase()}`;
const initials = n  => (n||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();

function wounds(id){ return S.wounds[id]||0; }

// Ferite subite durante la sessione corrente (0 se nessuna sessione attiva)
function sessionWounds(id){
  if(!S.session) return wounds(id);
  const atStart = S.session.woundsAtStart?.[id] || 0;
  return Math.max(0, wounds(id) - atStart);
}

function status(npc){
  const w = wounds(npc.id), pf = npc.pf_max||1;
  if(w >= pf) return 'morto';
  // Fuori per carta (disable_if)
  if(S.session?.disabledBy?.[npc.id]) return 'fuori';
  // In sessione: stato basato sulle ferite subite durante la sessione
  const sw = S.session ? sessionWounds(npc.id) : w;
  if(npc.star){ if(sw >= 2) return 'fuori'; if(sw === 1) return 'indebolito'; }
  else         { if(sw >= 1) return 'fuori'; }
  return 'sano';
}
const blocked  = npc => {
  if(npc.summoned){
    const summon=S.session?.summons?.[npc.id];
    return !summon || summon.pool<=0;
  }
  const s=status(npc); return s==='fuori'||s==='morto';
};
const isFree   = (npc,card) => npc?.star && parseInt(card.cost)===1 && timesUsed(npc.id,card.title)===0;
const effCost  = (npc,card) => isFree(npc,card)?0:parseInt(card.cost)||1;
const timesUsed= (nId,t) => (S.session?.used||{})[cKey(nId,t)]||0;

// Render TS sempre in ordine fisso Tempra → Riflessi → Volontà
const TS_ABBR = {'Tempra':'Tmp','Riflessi':'Rif','Volontà':'Vol'};
function rTS(npc, large=false) {
  const ORDER = ['Tempra','Riflessi','Volontà'];
  const forte  = new Set(npc.ts_forte||[]);
  const debole = new Set(npc.ts_debole||[]);
  const sz = large ? 'font-size:12px;padding:3px 10px' : '';
  const lbl = large ? t => t : t => TS_ABBR[t]||t;
  return ORDER.map(t => {
    if (forte.has(t))  return `<span class="ts-pill ts-forte"  style="${sz}">${lbl(t)}✓</span>`;
    if (debole.has(t)) return `<span class="ts-pill ts-debole" style="${sz}">${lbl(t)}✕</span>`;
    return '';
  }).join('');
}

// ══════════════════════════════════════════════════
// SYNC
// ══════════════════════════════════════════════════
async function syncGithub(){
  if(!S.rawUrl){toast('URL GitHub non configurato',true);return;}
  S.loading=true; S.error=null; render();
  try{
    const r=await fetch(S.rawUrl+'?t='+Date.now());
    if(!r.ok) throw new Error('HTTP '+r.status);
    const data=await r.json();
    if(!data.npcs?.length) throw new Error('"npcs" mancante o vuoto');
    if(!data.cards?.length) throw new Error('"cards" mancante o vuoto');
    S.npcs  = data.npcs.map(n=>({...n, star:['true','TRUE','1',true].includes(n.star), pf_max:parseInt(n.pf_max)||1}));
    S.cards = data.cards.map(c=>({...c, cost:parseInt(c.cost)||1}));
    S.syncTime = new Date().toISOString();
    LS.s('npcs',S.npcs); LS.s('cards',S.cards); LS.s('syncTime',S.syncTime);
    toast(`✓ ${S.npcs.length} PNG · ${S.cards.length} carte`);
  }catch(e){
    S.error=e.message; toast('Errore: '+e.message,true);
  }finally{
    S.loading=false; render();
  }
}

// ══════════════════════════════════════════════════
// ACTIONS
// ══════════════════════════════════════════════════
function startSession(){
  // Rimuovi dal mazzo PNG che non esistono più nel JSON
  S.deck = S.deck.filter(id => npcById(id));
  if(S.deck.length === 0){ toast('Nessun PNG valido nel mazzo!', true); return; }
  LS.s('deck', S.deck);
  // Snapshot ferite iniziali di ogni PNG nel mazzo
  const woundsAtStart = {};
  S.deck.forEach(id => { woundsAtStart[id] = wounds(id); });
  S.session={pool:S.maxPool, maxPool:S.maxPool, used:{}, woundsAtStart,
    disabledBy:{},
    summons:{},
    summonDeck:[]
  };
  LS.s('session',S.session);
  S.view='session'; S.expanded={}; render();
}
function endSession(){
  S.menuOpen=false;
  S.dialog={title:'Termina sessione',msg:'Le carte usate verranno azzerate. Le ferite persistono tra le sessioni.',confirmLabel:'Termina',danger:true,confirmAction:'do-end'};
  render();
}
function resetSession(){
  S.menuOpen=false;
  S.dialog={title:'Azzera sessione',msg:'Carte usate e pool verranno ripristinati. Le ferite persistono.',confirmLabel:'Azzera',danger:false,confirmAction:'do-reset'};
  render();
}
function adjPool(d){
  if(!S.session) return;
  S.session.pool=Math.max(0,Math.min(S.session.maxPool*2,S.session.pool+d));
  LS.s('session',S.session); render();
}
function adjMax(d){
  S.maxPool=Math.max(1,Math.min(20,S.maxPool+d));
  LS.s('maxPool',S.maxPool); render();
}
function playCard(npcId,cardTitle){
  if(!S.session) return;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return;
  if(blocked(npc)){toast('PNG fuori combattimento!',true);return;}

  // Carte ombre — usano summon pool invece del pool globale
  const isSummonCard = card.summon_cost;
  if(isSummonCard){
    const summon = S.session.summons?.[npcId];
    if(!summon||summon.pool<=0){toast('Punti evocazione esauriti!',true);return;}
    // Mostra selettore punti — gestito da dialog dedicato
    S.dialog={
      title: card.title,
      msg: `Quanti ${summon.pool_name||'PS'} vuoi spendere? (1-${summon.pool})`,
      confirmLabel: null,
      isSummonCost: true,
      summonNpcId: npcId,
      summonCardTitle: cardTitle,
      summonMax: summon.pool
    };
    render(); return;
  }

  const cost=effCost(npc,card);

  // disable_if: always — fuori combattimento immediato
  if(card.disable_if?.condition==='always'){
    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}
    S.session.pool-=cost;
    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;
    S.session.disabledBy[npcId]=true;
    LS.s('session',S.session); S.openCard=null;
    toast(`${npc.name} esce dal combattimento`); render(); return;
  }

  // disable_if: ask — chiede conferma prima
  if(card.disable_if?.condition==='ask'){
    S.dialog={
      title: card.title,
      msg: card.disable_if.prompt||'Confermi effetto speciale?',
      confirmLabel: 'Sì — applica',
      cancelLabel: 'No — effetto normale',
      confirmAction: 'play-card-disable',
      cancelAction: 'play-card-normal',
      pendingNpc: npcId,
      pendingCard: cardTitle
    };
    render(); return;
  }

  // summon: aggiunge PNG evocato al mazzo sessione
  if(card.summon){
    const sId = card.summon.npc_id;
    if(S.session.summonDeck?.includes(sId)){
      toast('Evocazione già attiva!',true); return;
    }
    if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}
    S.session.pool-=cost;
    S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;
    if(!S.session.summons) S.session.summons={};
    if(!S.session.summonDeck) S.session.summonDeck=[];
    S.session.summons[sId]={
      pool: card.summon.pool,
      maxPool: card.summon.pool,
      pool_name: card.summon.pool_name||'PS'
    };
    S.session.summonDeck.push(sId);
    LS.s('session',S.session); S.openCard=null;
    const sNpc=npcById(sId);
    toast(`✦ ${sNpc?.name||sId} evocate!`); render(); return;
  }

  // Carta normale
  if(cost>S.session.pool){toast('Punti insufficienti!',true);return;}
  S.session.pool-=cost;
  S.session.used[cKey(npcId,cardTitle)]=(S.session.used[cKey(npcId,cardTitle)]||0)+1;
  LS.s('session',S.session); S.openCard=null;
  toast(cost===0?`★ ${cardTitle} — gratuita!`:`${cardTitle} — ${cost}pt`);
  render();
}
function undoCard(npcId,cardTitle){
  if(!S.session) return;
  const key=cKey(npcId,cardTitle), was=S.session.used[key]||0;
  if(!was) return;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return;
  const wasFree=npc.star&&parseInt(card.cost)===1&&was===1;
  S.session.pool=Math.min(S.session.maxPool,S.session.pool+(wasFree?0:parseInt(card.cost)||1));
  if(was===1) delete S.session.used[key]; else S.session.used[key]=was-1;
  LS.s('session',S.session); S.openCard=null; render();
}
function addWound(npcId){
  const npc=npcById(npcId); if(!npc) return;
  if(npc.summoned && S.session?.summons?.[npcId]){
    const summon=S.session.summons[npcId];
    summon.pool=Math.max(0,summon.pool-1);
    if(summon.pool<=0){
      S.session.summonDeck=(S.session.summonDeck||[]).filter(id=>id!==npcId);
      toast(`✦ ${npc.name} si dissolve`,true);
    } else {
      toast(`✦ ${npc.name} — ${summon.pool}/${summon.maxPool} ${summon.pool_name||'PS'}`);
    }
    flashWound();
    LS.s('session',S.session); render(); return;
  }
  const cur=wounds(npcId);
  if(cur>=npc.pf_max){toast('PNG già al massimo delle ferite!',true);return;}
  S.wounds[npcId]=cur+1; LS.s('wounds',S.wounds);
  flashWound();
  const st=status(npc);
  if(st==='morto')           toast(`☠ ${npc.name} è morto!`,true);
  else if(st==='fuori')      { toast(`✕ ${npc.name} è fuori combattimento`); shakeNpc(npcId); }
  else if(st==='indebolito') toast(`⚠ ${npc.name} è indebolito — al prossimo colpo fuori`);
  render();
}
function flashWound(){
  const el=document.createElement('div');
  el.style.cssText='position:fixed;inset:0;z-index:9999;pointer-events:none;animation:wound-flash .5s ease forwards';
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),520);
}
function shakeNpc(npcId){
  setTimeout(()=>{
    const row=document.querySelector(`[data-npc="${npcId}"]`)?.closest('.npc-row');
    if(row){row.style.animation='shake .4s ease';setTimeout(()=>row.style.animation='',420);}
  },50);
}
function removeWound(npcId){
  const cur=wounds(npcId); if(cur<=0) return;
  S.wounds[npcId]=cur-1; LS.s('wounds',S.wounds);
  toast(`❤ ${npcById(npcId)?.name} guarisce una ferita`); render();
}
function toast(msg,err=false){
  S.toast={msg,err}; render();
  setTimeout(()=>{S.toast=null;render();},2800);
}

// ══════════════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════════════
let _prevOpenCard = null;
let _prevExpanded = {};
let _prevSummonDeck = [];

function render(){
  const scrollEl = document.querySelector('.almanac, .npc-list, .scroll-body, .settings-body');
  const scrollTop = scrollEl ? scrollEl.scrollTop : 0;
  const scrollId  = scrollEl ? (scrollEl.className.split(' ')[0]) : null;

  // Traccia cosa era aperto prima del render
  const wasCardNew   = S.openCard && S.openCard !== _prevOpenCard;
  const prevExpanded = {..._prevExpanded};
  const prevSummons  = [..._prevSummonDeck];

  const views={home:rHome,builder:rBuilder,session:rSession,settings:rSettings,consulta:rConsulta};
  document.getElementById('app').innerHTML=
    (views[S.view]||rHome)()+
    (S.dialog     ? rDialog()    :'')+
    (S.openCard   ? rCardModal() :'')+
    (S.openInfo   ? rInfoModal() :'')+
    (S.minionOpen ? rMinion()    :'')+
    (S.menuOpen   ? rMenu()      :'')+
    (S.toast?`<div class="toast${S.toast.err?' toast-err':''}">${S.toast.msg}</div>`:'');

  // Anima card modal solo se appena aperto
  if(wasCardNew){
    document.querySelector('.mod-sheet:not(.mod-sheet-bottom)')?.classList.add('anim-card-flip');
  }
  // Anima info/minion modal solo se appena aperto
  if(S.openInfo && !_prevOpenCard){
    document.querySelector('.mod-sheet-bottom')?.classList.add('anim-slide-up');
  }
  // Anima drawer solo se appena espanso (non su ogni re-render)
  Object.keys(S.expanded).forEach(id=>{
    if(S.expanded[id] && !prevExpanded[id]){
      const panel=document.querySelector(`.npc-row [data-npc="${id}"] ~ * .cards-panel, .cards-panel`);
      // Trova il cards-panel del PNG appena espanso
      const row=document.querySelector(`[data-npc="${id}"]`)?.closest('.npc-row, .summon-row');
      row?.querySelector('.cards-panel')?.classList.add('anim-open');
    }
  });
  // Anima summon row solo se appena aggiunto
  (S.session?.summonDeck||[]).forEach(id=>{
    if(!prevSummons.includes(id)){
      document.querySelector(`.summon-row [data-npc="${id}"]`)?.closest('.summon-row')
        ?.classList.add('anim-summon');
    }
  });

  // Aggiorna tracking
  _prevOpenCard = S.openCard;
  _prevExpanded = {...S.expanded};
  _prevSummonDeck = [...(S.session?.summonDeck||[])];

  if(scrollId && !S.openCard && !S.openInfo && !S.dialog && !S.menuOpen && !S.minionOpen){
    const el = document.querySelector('.'+scrollId);
    if(el) el.scrollTop = scrollTop;
  }
}

// ── Summon card effect label ──────────────────────
function getSummonEffect(card, n){
  // Cerca la riga corrispondente a npo nella desc
  const lines = (card.desc||'').split(/[.—]/).map(s=>s.trim()).filter(Boolean);
  const match = lines.find(l=>l.startsWith(`${n}ps`)||l.startsWith(`${n} ps`));
  if(match) return match.replace(/^\d+\s*ps:?\s*/i,'');
  // Fallback: danni per Assalto
  if(card.title.includes('Assalto')) return `${n*15} danni`;
  return `Effetto ${n}`;
}

// ── Bottom nav ───────────────────────────────────
function rBotNav(active){
  const sess = S.session;
  return `<nav class="bot-nav">
    <button class="bot-btn${active==='home'?' active':''}" data-action="goto" data-view="home">
      <span class="bot-btn-icon">🏠</span>Home
    </button>
    <button class="bot-btn${active==='consulta'?' active':''}" data-action="goto" data-view="consulta">
      <span class="bot-btn-icon">👥</span>Ciurma
    </button>
    ${sess
      ?`<button class="bot-btn bot-btn-sess${active==='session'?' active':''}" data-action="goto" data-view="session">
          <span class="bot-btn-icon">⚔️</span>Sessione
        </button>`
      :''}
    <button class="bot-btn${active==='minion'?' active':''}" data-action="open-minion-nav">
      <span class="bot-btn-icon">📖</span>Regole
    </button>
    <button class="bot-btn${active==='settings'?' active':''}" data-action="goto" data-view="settings">
      <span class="bot-btn-icon">⚙️</span>Opzioni
    </button>
  </nav>`;
}

// ── Home ────────────────────────────────────────
function rHome(){
  const deckTxt = S.deck.length
    ? S.deck.map(id=>npcById(id)?.name||id).join(', ')
    : null;
  const syncTxt = S.syncTime
    ? new Date(S.syncTime).toLocaleString('it-IT',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})
    : 'Mai';
  const activeCount = S.deck.filter(id=>{ const n=npcById(id); return n&&status(n)==='sano'; }).length;

  return `<div class="view home-view">
  ${S.loading?'<div class="loading" style="position:absolute;top:0;left:0;right:0;z-index:10">Sincronizzazione...</div>':''}
  ${S.error?`<div class="err-banner" style="position:absolute;top:0;left:0;right:0;z-index:10">⚠ ${S.error}</div>`:''}

  <!-- Hero — metà superiore -->
  <div class="home-hero-img">
    <img src="https://iltesorodelcuorenero.wordpress.com/wp-content/uploads/2017/05/pirate-ship-wallpapers-1080p.jpg"
      alt="Pollo Diablo" onerror="this.parentElement.classList.add('hero-fallback')">
    <div class="home-hero-overlay">
      <div class="home-hero-title">⚓ Ciurma del<br>Pollo Diablo</div>
    </div>
  </div>

  <!-- Azioni — metà inferiore -->
  <div class="home-actions-panel">
    <!-- Mazzo -->
    <div class="home-deck-row">
      <div class="home-deck-info">
        <span class="home-deck-label">Mazzo</span>
        <span class="home-deck-val">${S.deck.length ? S.deck.length+' PNG' : '—'}</span>
        ${deckTxt?`<span class="home-deck-sub">${deckTxt}</span>`:''}
      </div>
      <button class="sm-btn" data-action="open-builder">✏️ Modifica</button>
    </div>

    ${S.deck.length ? `
    <!-- Pool -->
    <div class="home-pool-row">
      <span class="home-deck-label">Pool punti</span>
      <div class="stepper-row" style="margin:0">
        <button class="step-btn" data-action="adj-max" data-d="-1">−</button>
        <span class="stepper-val">${S.maxPool}</span>
        <button class="step-btn" data-action="adj-max" data-d="1">+</button>
      </div>
    </div>
    <!-- CTA sessione -->
    <button class="btn btn-g btn-lg home-sess-btn" data-action="start-session">⚔ Inizia sessione</button>
    ` : `<p class="hint-txt" style="margin:12px 0">Aggiungi PNG al mazzo per iniziare.</p>`}

    <!-- Sync strip -->
    <div class="sync-strip">
      <span>Sync: ${syncTxt} · ${S.npcs.filter(n=>!n.summoned).length} PNG · ${S.cards.length} carte</span>
      ${S.rawUrl
        ?`<button class="sm-btn" style="margin:0;padding:5px 10px" data-action="sync">🔄</button>`
        :`<button class="sm-btn" style="margin:0;padding:5px 10px" data-action="goto" data-view="settings">Configura</button>`}
    </div>
  </div>

  ${rBotNav('home')}</div>`;
}

// ── Builder ─────────────────────────────────────
function rBuilder(){
  const bd=S.builderDeck||[];
  return `<div class="view">
  <div class="hdr">
    <button class="ico-btn" data-action="cancel-builder">←</button>
    <span class="hdr-title">Modifica mazzo</span>
    <button class="confirm-btn" data-action="confirm-builder">✓ Salva (${bd.length})</button>
  </div>
  <div class="bldr-sub">Tocca un PNG per aggiungerlo o rimuoverlo</div>
  <div class="npc-grid">
    ${S.npcs.filter(npc=>!npc.summoned).map(npc=>{
      const sel=bd.includes(npc.id), w=wounds(npc.id), pf=npc.pf_max||1;
      const st=status(npc);
      return `<div class="npc-tile${sel?' sel':''}" data-action="toggle-npc" data-npc="${npc.id}">
        <div class="tile-img-wrap">
          <div class="tile-name-ov">${npc.star?'★ ':''}${npc.name}</div>
          ${npc.image_url?`<img src="${npc.image_url}" alt="${npc.name}" onerror="this.style.display='none'">`:''}
          ${!npc.image_url?`<div class="tile-img-ph">${initials(npc.name)}</div>`:''}
          ${sel?'<span class="tile-chk-ov">✓</span>':''}
        </div>
      </div>`;
    }).join('')}
  </div></div>`;
}

// ── Session ─────────────────────────────────────
function rSession(){
  if(!S.session) return rHome();
  const {pool,maxPool}=S.session;
  const summonDeck = S.session.summonDeck||[];
  return `<div class="view sess-view textured">
  <div class="hdr sess-hdr">
    <div class="pool-wrap">
      <div class="pool-dots">${rDots(pool,maxPool)}</div>
      <div class="pool-txt">${pool} / ${maxPool} pt</div>
    </div>
    <div class="pool-ctrl">
      <button class="step-btn" style="width:32px;height:32px;font-size:18px" data-action="adj-pool" data-d="-1">−</button>
      <button class="step-btn" style="width:32px;height:32px;font-size:18px" data-action="adj-pool" data-d="1">+</button>
      <button class="end-btn" data-action="end-session">Fine</button>
      <button class="ico-btn" data-action="open-menu">⋮</button>
    </div>
  </div>
  <div class="npc-list">
    ${(()=>{
      const summonDeckSet = new Set(summonDeck);
      // Mappa: summoner_id → [summon_ids evocati da lui]
      const summonerOf = {};
      S.deck.forEach(id=>{
        const cards = npcCards(id);
        cards.forEach(c=>{
          if(c.summon && summonDeckSet.has(c.summon.npc_id)){
            if(!summonerOf[id]) summonerOf[id]=[];
            if(!summonerOf[id].includes(c.summon.npc_id))
              summonerOf[id].push(c.summon.npc_id);
          }
        });
      });

      const renderSummonRow = id => {
        const npc=npcById(id); if(!npc) return '';
        const summon=S.session.summons?.[id];
        const exp=S.expanded[id];
        const pool=summon?.pool||0, maxPool=summon?.maxPool||0;
        const isDead=pool<=0;
        return `<div class="npc-row summon-row${isDead?' fuori':''}">
          <div class="nr-hdr" data-action="toggle-npc" data-npc="${id}">
            <div class="nr-avatar" style="border:1px solid var(--teal)">
              ${npc.image_url
                ?`<img src="${npc.image_url}" alt="${npc.name}">`
                :`<span style="font-size:18px;color:var(--teal)">✦</span>`}
            </div>
            <div class="nr-info">
              <div class="nr-row1">
                <span class="nr-name" style="color:var(--teal)">${npc.name}</span>
              </div>
              <div class="nr-row2">
                <span class="ca-badge">CA ${npc.ca||'?'}</span>
                ${rTS(npc)}
              </div>
            </div>
            <button class="info-btn" data-action="open-info" data-npc="${id}" data-stop>ℹ</button>
          </div>
          <div class="nr-expand-btn" data-action="toggle-npc" data-npc="${id}">
            ${exp?'▲':'▼'}
          </div>
          ${exp&&!isDead ? `<div class="cards-panel">${rCardItems(npc, true)}</div>` : ''}
        </div>`;
      };

      // Summon non collegati a nessun PNG nel mazzo (orfani)
      const linkedSummons = new Set(Object.values(summonerOf).flat());

      return S.deck.map(id=>{
        const npc=npcById(id); if(!npc) return '';
        const st=status(npc), exp=S.expanded[id];
        const mySummons = (summonerOf[id]||[]).map(renderSummonRow).join('');
        return `<div class="npc-row ${st}">
          ${rNpcRow(npc, st, exp, 'session')}
          ${exp ? `<div class="cards-panel">${rCardItems(npc)}</div>` : ''}
        </div>${mySummons}`;
      }).join('')
      + summonDeck.filter(id=>!linkedSummons.has(id)).map(renderSummonRow).join('');
    })()}
  </div>
  ${rBotNav('session')}</div>`;
}

// ── Consulta — Almanacco ─────────────────────────
function rConsulta(){
  const showSummon = S.consultaTab === 'summon';
  const npcList = showSummon
    ? S.npcs.filter(npc=>npc.summoned)
    : S.npcs.filter(npc=>!npc.summoned);

  return `<div class="view textured">
  <div class="hdr"><span class="hdr-title">🪝 Pendagli da forca</span></div>
  <div class="consulta-tabs">
    <button class="ctab${!showSummon?' ctab-active':''}" data-action="consulta-tab" data-tab="ciurma">👥 Ciurma</button>
    <button class="ctab${showSummon?' ctab-active':''}" data-action="consulta-tab" data-tab="summon">✦ Evocazioni</button>
  </div>
  <div class="almanac">
    ${npcList.length === 0
      ? `<div style="padding:30px;text-align:center;color:var(--muted);font-size:14px">${showSummon?'Nessuna evocazione disponibile':'Nessun PNG'}</div>`
      : npcList.map(npc=>{
      const exp = S.consultaExp[npc.id];
      const cards = npcCards(npc.id);
      const w = wounds(npc.id), pf = npc.pf_max||1;
      const st = status(npc);
      const wdots = Array.from({length:pf},(_,i)=>
        `<span class="wd ${i<w?'wd-on':'wd-off'}"></span>`).join('');
      const statusChip = st==='sano' ? '' :
        st==='indebolito' ? `<span class="chip chip-indebolito">⚠ Indebolito</span>` :
        st==='fuori'      ? `<span class="chip chip-fuori">✕ Fuori</span>` :
                            `<span class="chip chip-morto">☠ Morto</span>`;

      return `<div class="alm-card${exp?' alm-open':''}">
        <div class="alm-top">
          <div class="alm-photo-wrap">
            ${npc.image_url
              ? `<img class="alm-photo" src="${npc.image_url}" alt="${npc.name}" onerror="this.style.display='none';this.parentElement.querySelector('.alm-photo-ph').style.display='flex'">`+
                `<div class="alm-photo-ph" style="display:none">${initials(npc.name)}</div>`
              : `<div class="alm-photo-ph">${initials(npc.name)}</div>`}
          </div>
          <div class="alm-info">
            <div class="alm-name-row">
              ${npc.star?'<span class="alm-star">★</span>':''}
              <span class="alm-name">${npc.name}</span>
              ${st==='morto'?`<span class="chip chip-morto">☠ Morto</span>`:''}
            </div>
            <div class="alm-classe">${npc.classe||''}</div>
            <div class="alm-stats">
              <span class="ca-badge">CA ${npc.ca||'?'}</span>
              ${rTS(npc)}
            </div>
            <div class="alm-wound-bar">
              ${npc.summoned
                ? Array.from({length:npc.pf_max||4},(_,i)=>`
                    <span class="alm-wd" style="background:var(--teal);cursor:default"></span>`).join('')
                : Array.from({length:pf},(_,i)=>`
                    <span class="alm-wd ${i<w?'alm-wd-on':'alm-wd-off'}"
                      data-action="${i<w?'remove-wound-info':'add-wound'}"
                      data-npc="${npc.id}"
                      data-stop></span>`).join('')}
            </div>
          </div>
        </div>
        <div class="alm-stat-row">
          ${SK.map(k=>`<div class="alm-stat-cell">
            <span class="alm-stat-icon">${SI[k]}</span>
            <span class="alm-stat-name">${SN[k]}</span>
            <span class="alm-stat-grade ${gc(npc[k])}">${npc[k]||'D'}</span>
          </div>`).join('')}
        </div>
        <button class="alm-cards-btn" data-action="toggle-consulta" data-npc="${npc.id}">
          ${exp ? '▲ Nascondi carte' : `▼ Carte (${cards.length})`}
        </button>
        ${exp ? `<div class="alm-cards-drawer">
          ${cards.map(card=>`
            <div class="alm-card-row" data-action="open-card-consulta" data-npc="${npc.id}" data-card="${enc(card.title)}">
              <span class="alm-card-title">${card.title}</span>
              <div class="alm-card-right">
                <span class="sp ${gc(card.grade)}">${SI[card.stat]||''} ${card.grade||''}</span>
                ${card.summon_cost
                  ? `<span class="badge" style="background:#0d1f3a;color:var(--teal);border:1px solid #2a5090">1–4 PS</span>`
                  : `<span class="badge b-c${Math.min(parseInt(card.cost)||1,3)}">${card.cost}pt</span>`}
              </div>
            </div>`).join('')}
        </div>` : ''}
      </div>`;
    }).join('')}
  </div>
  ${rBotNav('consulta')}</div>`;
}

// ── Shared NPC row (session + consulta) ──────────
function rNpcRow(npc, st, exp, ctx){
  const w=wounds(npc.id), pf=npc.pf_max||1;
  const chip = st==='sano'  ? '' :
    st==='indebolito' ? `<span class="chip chip-indebolito">⚠ Indebolito</span>` :
    st==='fuori'      ? `<span class="chip chip-fuori">✕ Fuori</span>` :
                        `<span class="chip chip-morto">☠ Morto</span>`;
  const fb = initials(npc.name).replace(/'/g,"\\'");
  const toggleAction = ctx==='consulta' ? 'toggle-consulta' : 'toggle-npc';

  return `
    <div class="nr-hdr" data-action="${toggleAction}" data-npc="${npc.id}">
      <div class="nr-avatar">
        ${npc.image_url
          ?`<img src="${npc.image_url}" alt="${npc.name}" onerror="this.parentElement.innerHTML='${fb}'">`
          :initials(npc.name)}
      </div>
      <div class="nr-info">
        <div class="nr-row1">
          ${npc.star?'<span class="nr-star">★</span>':''}
          <span class="nr-name">${npc.name}</span>
          ${chip}
        </div>
        <div class="nr-row2">
          <span class="ca-badge">CA ${npc.ca||'?'}</span>
          ${rTS(npc)}
        </div>
      </div>
      <button class="info-btn" data-action="open-info" data-npc="${npc.id}" data-stop>ℹ</button>
    </div>
    <div class="nr-expand-btn" data-action="${toggleAction}" data-npc="${npc.id}">
      ${exp?'▲':'▼'}
    </div>`;
}

// ── Card items grid (session + consulta) ─────────
function rCardItems(npc, readonly=false){
  const cards=npcCards(npc.id), bl=blocked(npc);
  const isSummon = npc.summoned;
  const summon = isSummon ? S.session?.summons?.[npc.id] : null;

  // Barra superiore: ferite per normali, pallini blu per summon
  let topBar = '';
  if(isSummon){
    const pool=summon?.pool ?? npc.pf_max ?? 4;
    const maxPool=summon?.maxPool ?? npc.pf_max ?? 4;
    const spDots=Array.from({length:maxPool},(_,i)=>
      `<span class="wd" style="background:${i<pool?'var(--teal)':'var(--surf3)'};border:${i<pool?'none':'1px solid var(--bord2)'}"></span>`).join('');
    const inSession=!!S.session?.summons?.[npc.id];
    topBar=`<div class="nr-wound-bar">
      <div class="wounds-row">${spDots}</div>
      ${inSession?`<button class="wd-btn" data-action="add-wound" data-npc="${npc.id}">+ Ferita</button>`:''}
    </div>`;
  } else {
    const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);
    const isDead = st==='morto';
    const wdots=Array.from({length:pf},(_,i)=>
      `<span class="wd ${i<w?'wd-on':'wd-off'}"></span>`).join('');
    topBar=`<div class="nr-wound-bar">
      <div class="wounds-row">${wdots}</div>
      ${!isDead
        ? `<button class="wd-btn" data-action="add-wound" data-npc="${npc.id}">+ Ferita</button>`
        : `<span style="font-size:12px;color:var(--muted);padding:0 8px">Morto</span>`}
    </div>`;
  }

  if(!cards.length) return topBar+'<div style="padding:10px;font-size:13px;color:var(--muted)">Nessuna carta</div>';
  const items = cards.map(card=>{
    const cost=parseInt(card.cost)||1;
    const free=!readonly && isFree(npc,card);
    const used=timesUsed(npc.id,card.title);
    const canAfford = card.summon_cost
      ? (summon?.pool||0)>0
      : free||(S.session?.pool>=cost);
    let costHtml, extra='';
    if(card.summon_cost){
      const maxPs = summon?.maxPool||4;
      const avail = summon?.pool||0;
      costHtml=`<span class="badge" style="background:#0d1f3a;color:var(--teal);border:1px solid #2a5090">1–${maxPs} PS</span>`;
      if(!canAfford) extra='no-pool';
    } else if(readonly){
      costHtml=`<span class="badge b-c${Math.min(cost,3)}">${cost}pt</span>`;
    } else if(bl){
      costHtml=`<span class="badge b-c1">${cost}pt</span>`; extra='locked';
    } else if(free){
      costHtml=`<span class="badge b-free">★</span>`; extra='star-free';
    } else {
      costHtml=`<span class="badge b-c${Math.min(cost,3)}">${cost}pt</span>`;
      if(!canAfford) extra='no-pool';
    }
    const isUsed = !readonly && used>0 && !(npc.star&&cost===1)
      && !(card.summon && !S.session?.summonDeck?.includes(card.summon.npc_id));
    const action = readonly ? 'open-card-consulta' : 'open-card';
    return `<div class="card-item${extra?' '+extra:''}${isUsed?' used':''}"
      data-action="${action}" data-npc="${npc.id}" data-card="${enc(card.title)}">
      <div class="ci-top">
        ${costHtml}
        ${isUsed?`<span class="use-cnt">${used}×</span>`:''}
      </div>
      <div class="ci-title">${card.title}</div>
      <div class="ci-grade"><span class="sp ${gc(card.grade)}">${SI[card.stat]||''} ${card.grade||''}</span></div>
    </div>`;
  }).join('');
  return topBar+`<div class="cards-grid">${items}</div>`;
}

function rDots(pool,max){
  if(max>12) return `<span class="pool-big">${pool}</span>`;
  return Array.from({length:max},(_,i)=>`<span class="pd ${i<pool?'pd-on':'pd-off'}"></span>`).join('');
}

// ── Card Modal ──────────────────────────────────
function rCardModal(){
  const {npcId,cardTitle}=S.openCard;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return '';
  const isSummonCard = card.summon_cost;
  const summon = isSummonCard ? S.session?.summons?.[npcId] : null;
  const summonPool = summon?.pool||0;
  const cost=parseInt(card.cost)||1, free=isFree(npc,card), eff=effCost(npc,card);
  const canAfford = isSummonCard
    ? summonPool>0
    : free||(S.session?.pool>=cost);
  const used=timesUsed(npcId,cardTitle), bl=blocked(npc);
  const inSession=!!S.session;
  return `<div class="mod-ov" data-action="close-modal">
  <div class="mod-sheet" data-stop>
    <div class="mod-img-wrap">
      ${npc.image_url
        ?`<img class="mod-img" src="${npc.image_url}" alt="${npc.name}">`
        :`<div class="mod-img-ph">${initials(npc.name)}</div>`}
    </div>
    <div class="mod-body">
      <div class="mod-npc">${npc.name}${npc.star?' ★':''}</div>
      <div class="mod-title">${card.title}</div>
      <div class="mod-meta">
        <span class="sp ${gc(card.grade)}">${SI[card.stat]||''} ${card.grade||''}</span>
        ${!inSession
          ? `<span class="mod-readonly">Sola lettura</span>`
          : bl
            ? `<span style="font-size:12px;color:var(--red2)">PNG fuori combattimento</span>`
            : isSummonCard
              ? `<span class="mod-cost" style="color:var(--teal)">${summonPool} ${summon?.pool_name||'PS'} disponibili</span>`
              : free
                ? `<span class="mod-free">★ Prima attivazione gratuita</span>`
                : `<span class="mod-cost">${eff}pt</span>`}
      </div>
      <div class="mod-desc">${card.desc||''}</div>
      ${card.rule?`<div class="mod-rule">${card.rule}</div>`:''}
      ${card.flavor?`<div class="mod-flavor">"${card.flavor}"</div>`:''}
      ${card.minion?`<div class="mod-minion">⚓ ${card.minion}</div>`:''}
      <div class="mod-actions">
        ${inSession&&!bl?`
          ${isSummonCard
            ? (summonPool>0 ? `
              <div class="summon-slider">
                <div class="summon-slider-ctrl">
                  <button class="step-btn" style="width:40px;height:40px;font-size:20px"
                    data-action="summon-slider-adj" data-npc="${npcId}" data-card="${enc(cardTitle)}" data-d="-1">−</button>
                  <span class="summon-slider-val" id="sslider-val">${S.openCard.sliderVal||1}</span>
                  <button class="step-btn" style="width:40px;height:40px;font-size:20px"
                    data-action="summon-slider-adj" data-npc="${npcId}" data-card="${enc(cardTitle)}" data-d="1">+</button>
                </div>
                <div class="summon-slider-effect">${getSummonEffect(card, S.openCard.sliderVal||1)}</div>
                <button class="btn btn-g" data-action="play-summon-card"
                  data-npc="${npcId}" data-card="${enc(cardTitle)}" data-cost="${S.openCard.sliderVal||1}">
                  Gioca — ${S.openCard.sliderVal||1} ${summon?.pool_name||'PS'}
                </button>
              </div>`
            : `<span style="font-size:13px;color:var(--muted)">Evocazione esaurita</span>`)
            : `<button class="btn btn-g${canAfford?'':' btn-dis'}" data-action="play-card" data-npc="${npcId}" data-card="${enc(cardTitle)}">
                ${free?'★ Attiva gratis':`Gioca (${eff}pt)`}
              </button>
              ${used?`<button class="btn btn-s" data-action="undo-card" data-npc="${npcId}" data-card="${enc(cardTitle)}">↩ Annulla ultima</button>`:''}`
          }
        `:''}
        <button class="btn btn-gh" data-action="close-modal">Chiudi</button>
      </div>
    </div>
  </div></div>`;
}

// ── Info Modal ──────────────────────────────────
function rInfoModal(){
  const npc=npcById(S.openInfo); if(!npc) return '';
  const isSummon = npc.summoned && S.session?.summons?.[npc.id];
  const summon = isSummon ? S.session.summons[npc.id] : null;
  const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);
  const stLabel={sano:'🟢 Sano',indebolito:'🟡 Indebolito',fuori:'🔴 Fuori combattimento',morto:'☠️ Morto'}[st];
  const pool=summon?.pool||0, maxPool=summon?.maxPool||0;
  const poolName=summon?.pool_name||'PS';
  return `<div class="mod-ov mod-bottom" data-action="close-info">
  <div class="mod-sheet mod-sheet-bottom" data-stop>
    <div class="info-img-wrap">
      ${npc.image_url
        ?`<img class="info-img" src="${npc.image_url}" alt="${npc.name}">`
        :`<div class="info-img-ph" style="${isSummon?'color:var(--teal)':''}">${isSummon?'✦':initials(npc.name)}</div>`}
    </div>
    <div class="info-body">
      <div class="info-name" style="${isSummon?'color:var(--teal)':''}">${npc.name}</div>
      <div class="info-cls">${npc.classe||''}</div>
      <div class="info-row">
        <span class="ca-badge" style="font-size:13px;padding:4px 10px">CA ${npc.ca||'?'}</span>
        ${isSummon
          ? `<span style="font-size:13px;color:var(--teal)">✦ Evocazione attiva</span>`
          : `<span style="font-size:13px;color:var(--muted)">${stLabel}</span>`}
      </div>
      <div class="info-section">
        <div class="info-lbl">Tiri Salvezza</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">${rTS(npc,true)}</div>
      </div>
      <div class="info-section">
        ${isSummon
          ? `<div class="info-lbl">${poolName} — ${pool}/${maxPool}</div>
             <div class="wounds-ctrl">
               <button class="step-btn" data-action="adj-summon-pool" data-npc="${npc.id}" data-d="-1">−</button>
               <div class="wounds-dots-lg">
                 ${Array.from({length:maxPool},(_,i)=>`<span class="wd-lg ${i<pool?'':'wd-lg-off'}" style="${i<pool?'background:var(--teal)':''}"></span>`).join('')}
               </div>
               <button class="step-btn" data-action="adj-summon-pool" data-npc="${npc.id}" data-d="1">+</button>
             </div>`
          : `<div class="info-lbl">Ferite — ${w}/${pf}</div>
             <div class="wounds-ctrl">
               <button class="step-btn" data-action="remove-wound-info" data-npc="${npc.id}">−</button>
               <div class="wounds-dots-lg">
                 ${Array.from({length:pf},(_,i)=>`<span class="wd-lg ${i<w?'wd-lg-on':'wd-lg-off'}"></span>`).join('')}
               </div>
               <button class="step-btn" data-action="add-wound-info" data-npc="${npc.id}">+</button>
             </div>`}
      </div>
      <div class="info-stat-grid">
        ${SK.map(k=>`<div class="info-stat">
          <span class="info-stat-icon">${SI[k]}</span>
          <span class="info-stat-grade ${gc(npc[k])}">${npc[k]||'D'}</span>
          <span class="info-stat-name">${SN[k]}</span>
        </div>`).join('')}
      </div>
      <button class="btn btn-gh" data-action="close-info">Chiudi</button>
    </div>
  </div></div>`;
}

// ── Minion Rules ─────────────────────────────────
function rMinion(){
  const rules=[
    ['Colpire un minion',
     'Qualsiasi colpo andato a segno elimina il minion dalla battaglia corrente e gli infligge 1 ferita. Non importa l\'entità del danno: anche un colpo minimo è sufficiente.'],
    ['Punti ferita (PF)',
     'Ogni minion ha un numero di PF pari a 1 base più 1 ogni 5 livelli. Quando le ferite accumulate raggiungono il massimo, il minion muore in modo permanente e non può essere resuscitato normalmente.'],
    ['Minion non stellati',
     'Ricevono 1 ferita → vengono messi fuori combattimento. Le loro carte diventano inaccessibili e la scheda appare in grigio.'],
    ['Minion stellati ★',
     'Ricevono 1 ferita → diventano Indeboliti. Le carte funzionano normalmente ma il prossimo colpo li metterà fuori combattimento. Con 2 ferite totali → fuori combattimento.'],
    ['Fuori combattimento',
     'Il personaggio non può usare carte né partecipare attivamente al combattimento. Rimane presente in gioco ma inattivo fino a guarigione.'],
    ['Morte permanente',
     'Quando le ferite raggiungono il massimo, il personaggio muore. Rimane visibile nel mazzo con lo stato "Morto" come promemoria. Una resurrezione straordinaria è tecnicamente possibile ma richiede circostanze narrative eccezionali.'],
    ['Guarire una ferita',
     'Ogni ferita richiede una piccola quest dedicata per essere rimossa. Il DM gestisce la guarigione fuori dall\'app e la registra manualmente nel pannello ℹ del personaggio.'],
    ['Proteggere un minion',
     'Un giocatore può dichiarare di interporsi tra un minion e un attacco in arrivo, prima che venga risolto. Il personaggio subisce l\'attacco al posto del minion: tutti i danni e gli effetti si applicano al personaggio che protegge, come se l\'attacco fosse stato diretto a lui. Costa 1 punto carta.'],
    ['Tiri salvezza',
     'I minion non tirano i dadi per i TS. Un TS classificato come Forte viene superato automaticamente. Un TS classificato come Debole viene fallito automaticamente. Non esistono altri TS intermedi per i minion.'],
  ];
  const summonRules=[
    ['Evocazioni',
     'Alcuni personaggi possono evocare PNG speciali durante il combattimento tramite carte apposite. Le evocazioni appaiono nel mazzo di sessione solo quando attivate.'],
    ['PS',
     'Le evocazioni non hanno ferite. Al posto delle ferite usano un pool di PS (Punti Summon) (blu). Ogni volta che vengono colpite perdono 1 PS.'],
    ['Esaurimento',
     'Quando i PS (Punti Summon) raggiungono 0, l\'evocazione sparisce dal mazzo e non può essere riattivata finché non si usa nuovamente la carta di evocazione (se le condizioni lo permettono).'],
    ['Carte delle Evocazioni',
     'Le carte di un\'evocazione scalano con i PS (Punti Summon) spesi: spendere più punti produce effetti più potenti. Il costo è scelto al momento dell\'attivazione con il selettore.'],
  ];
  return `<div class="mod-ov mod-bottom" data-action="close-minion">
  <div class="mod-sheet mod-sheet-bottom" data-stop>
    <div class="minion-body">
      <div class="minion-title">⚓ Regole Minion</div>
      ${rules.map(([t,b])=>`<div class="mr"><div class="mr-t">${t}</div><div class="mr-b">${b}</div></div>`).join('')}
      <div class="minion-title" style="margin-top:16px">✦ Evocazioni</div>
      ${summonRules.map(([t,b])=>`<div class="mr"><div class="mr-t">${t}</div><div class="mr-b">${b}</div></div>`).join('')}
      <button class="btn btn-gh" style="margin-top:8px" data-action="close-minion">Chiudi</button>
    </div>
  </div></div>`;
}

// ── Session Menu ──────────────────────────────────
function rMenu(){
  return `<div class="overlay" data-action="close-menu">
  <div class="menu-sheet" data-stop>
    <button class="menu-item" data-action="open-minion">📖 Regole minion</button>
    <hr class="menu-sep">
    <button class="menu-item" data-action="reset-session">🔄 Azzera carte usate + pool</button>
    <button class="menu-item" data-action="end-session">✕ Termina sessione</button>
    <hr class="menu-sep">
    <button class="menu-item menu-cancel" data-action="close-menu">Annulla</button>
  </div></div>`;
}

// ── Dialog ────────────────────────────────────────
function rDialog(){
  const{title,msg,confirmLabel,danger,confirmAction,cancelLabel,cancelAction}=S.dialog;
  return `<div class="dlg-ov">
  <div class="dlg-box" data-stop>
    <div class="dlg-title">${title}</div>
    <div class="dlg-msg">${msg}</div>
    <div class="dlg-btns">
      ${confirmLabel?`<button class="btn ${danger?'btn-d':'btn-g'}" data-action="${confirmAction}">${confirmLabel}</button>`:''}
      ${cancelLabel?`<button class="btn btn-s" data-action="${cancelAction}">${cancelLabel}</button>`:''}
      <button class="btn btn-gh" data-action="close-dialog">Annulla</button>
    </div>
  </div></div>`;
}

// ── Settings ──────────────────────────────────────
function rSettings(){
  const syncTxt=S.syncTime?new Date(S.syncTime).toLocaleString('it-IT'):'—';
  return `<div class="view textured">
  <div class="hdr"><span class="hdr-title">⚙️ Impostazioni</span></div>
  <div class="settings-body">
    <div class="settings-section">
      <div class="settings-section-title">🔄 Sincronizzazione dati</div>
      <div class="fld">
        <label>URL GitHub raw (data.json)</label>
        <input id="rawurl" type="url" value="${S.rawUrl}"
          placeholder="https://raw.githubusercontent.com/BitNineStudio-Leo/CiurmaData/main/data.json">
      </div>
      <button class="btn btn-g" data-action="save-url">Salva e sincronizza</button>
      <div class="sync-info">Ultimo sync: ${syncTxt}</div>
      <button class="btn btn-s" data-action="sync">🔄 Risincronizza adesso</button>
    </div>
    <div class="settings-section">
      <div class="settings-section-title">⚠️ Dati</div>
      <button class="btn btn-d" data-action="clear-data">🗑 Ripristina dati integrati</button>
    </div>
  </div>
  ${rBotNav('settings')}</div>`;
}

// ══════════════════════════════════════════════════
// EVENTS
// ══════════════════════════════════════════════════
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-action]');
  if(!el) return;
  const{action,view,d,npc,card}=el.dataset;
  switch(action){
    case 'goto':             S.view=view; render(); break;
    case 'sync':             syncGithub(); break;
    case 'open-builder':     S.builderDeck=[...S.deck]; S.view='builder'; render(); break;
    case 'cancel-builder':   S.builderDeck=null; S.view='home'; render(); break;
    case 'confirm-builder':
      S.deck=[...(S.builderDeck||[])]; LS.s('deck',S.deck);
      S.builderDeck=null; S.view='home'; render(); break;
    case 'toggle-npc':
      if(S.view==='builder'){
        const bd=S.builderDeck||[], i=bd.indexOf(npc);
        i>=0?bd.splice(i,1):bd.push(npc); S.builderDeck=[...bd]; render();
      }else{ S.expanded[npc]=!S.expanded[npc]; render(); }
      break;
    case 'toggle-consulta':      S.consultaExp[npc]=!S.consultaExp[npc]; render(); break;
    case 'consulta-tab':         S.consultaTab=el.dataset.tab; render(); break;
    case 'open-card':
    case 'open-card-consulta':   S.openCard={npcId:npc,cardTitle:dec(card)}; render(); break;
    case 'adj-max':              adjMax(parseInt(d)); break;
    case 'start-session':        if(S.deck.length) startSession(); break;
    case 'adj-pool':             adjPool(parseInt(d)); break;
    case 'open-menu':            S.menuOpen=true; render(); break;
    case 'close-menu':           S.menuOpen=false; render(); break;
    case 'open-minion':          S.menuOpen=false; S.minionOpen=true; render(); break;
    case 'open-minion-nav':      S.minionOpen=true; render(); break;
    case 'close-minion':         S.minionOpen=false; render(); break;
    case 'reset-session':        resetSession(); break;
    case 'end-session':          endSession(); break;
    case 'do-end':
      S.dialog=null; S.session=null; LS.s('session',null); S.view='home'; render(); break;
    case 'do-reset':
      S.dialog=null;
      if(S.session){S.session.used={}; S.session.pool=S.session.maxPool; LS.s('session',S.session);}
      render(); break;
    case 'close-dialog':         S.dialog=null; render(); break;
    case 'close-modal':          S.openCard=null; render(); break;
    case 'play-card':            playCard(npc,dec(card)); break;
    case 'undo-card':            undoCard(npc,dec(card)); break;

    // Slider punti evocazione nel modal
    case 'summon-slider-adj': {
      if(!S.openCard) break;
      const summon=S.session?.summons?.[npc];
      const maxVal=summon?.pool||1;
      const cur=S.openCard.sliderVal||1;
      S.openCard.sliderVal=Math.max(1,Math.min(maxVal,cur+parseInt(el.dataset.d||0)));
      render(); break;
    }

    // Carta con costo evocazione variabile
    case 'play-summon-card': {
      const cost=parseInt(el.dataset.cost)||1;
      const c=npcCards(npc).find(x=>x.title===dec(card));
      const summon=S.session?.summons?.[npc];
      if(!summon||summon.pool<cost){toast('Punti evocazione insufficienti!',true);break;}
      summon.pool-=cost;
      S.session.used[cKey(npc,dec(card))]=(S.session.used[cKey(npc,dec(card))]||0)+1;
      // Se pool a 0, rimuovi dal summonDeck
      if(summon.pool<=0){
        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);
        toast(`✦ Le Ombre si dissolve`, true);
      } else {
        toast(`✦ ${dec(card)} — ${cost} ${summon.pool_name||'PS'} (rimasti: ${summon.pool})`);
      }
      LS.s('session',S.session); S.openCard=null; render(); break;
    }

    // disable_if ask — confermato: applica e disabilita il caster
    case 'play-card-disable': {
      const dlg=S.dialog; S.dialog=null;
      if(!dlg) break;
      const {pendingNpc,pendingCard}=dlg;
      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);
      if(!pnpc||!pcard) break;
      const cost=effCost(pnpc,pcard);
      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}
      S.session.pool-=cost;
      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;
      S.session.disabledBy[pendingNpc]=true;
      LS.s('session',S.session); S.openCard=null;
      toast(`${pnpc.name} esce dal combattimento`); render(); break;
    }

    // disable_if ask — annullato: carta normale senza effetto disable
    case 'play-card-normal': {
      const dlg=S.dialog; S.dialog=null;
      if(!dlg) break;
      const {pendingNpc,pendingCard}=dlg;
      const pnpc=npcById(pendingNpc), pcard=npcCards(pendingNpc).find(c=>c.title===pendingCard);
      if(!pnpc||!pcard) break;
      const cost=effCost(pnpc,pcard);
      if(cost>S.session.pool){toast('Punti insufficienti!',true);break;}
      S.session.pool-=cost;
      S.session.used[cKey(pendingNpc,pendingCard)]=(S.session.used[cKey(pendingNpc,pendingCard)]||0)+1;
      LS.s('session',S.session); S.openCard=null;
      toast(`${pendingCard} — ${cost}pt`); render(); break;
    }

    // Aggiusta pool evocazione manualmente
    case 'adj-summon-pool': {
      const delta=parseInt(el.dataset.d)||0;
      const summon=S.session?.summons?.[npc];
      if(!summon) break;
      summon.pool=Math.max(0,Math.min(summon.maxPool,summon.pool+delta));
      if(summon.pool<=0){
        S.session.summonDeck=S.session.summonDeck.filter(id=>id!==npc);
        toast('✦ Evocazione esaurita');
      }
      LS.s('session',S.session); render(); break;
    }

    case 'add-wound':
    case 'add-wound-info':       addWound(npc); break;
    case 'remove-wound-info':    removeWound(npc); break;
    case 'open-info':            S.openInfo=npc; render(); break;
    case 'close-info':           S.openInfo=null; render(); break;
    case 'save-url':             saveUrl(); break;
    case 'clear-data':
      S.dialog={title:'Ripristina dati',msg:'I dati GitHub verranno rimossi e si tornerà ai dati integrati.',confirmLabel:'Ripristina',danger:true,confirmAction:'do-clear'};
      render(); break;
    case 'do-clear':
      S.dialog=null;
      ['npcs','cards','rawUrl','syncTime'].forEach(k=>localStorage.removeItem(k));
      S.npcs=BUNDLED_NPCS; S.cards=BUNDLED_CARDS; S.rawUrl=''; S.syncTime=null; render(); break;
  }
});

document.addEventListener('click',e=>{
  if(e.target.classList.contains('mod-ov')){S.openCard=null;S.openInfo=null;S.minionOpen=false;render();}
  if(e.target.classList.contains('overlay')){S.menuOpen=false;render();}
});

function saveUrl(){
  const inp=document.getElementById('rawurl'); if(!inp) return;
  const url=inp.value.trim();
  if(!url.startsWith('http')){toast('URL non valido',true);return;}
  S.rawUrl=url; LS.s('rawUrl',url); syncGithub();
}

// ══════════════════════════════════════════════════
// SWIPE
// ══════════════════════════════════════════════════
(()=>{
  let tx=0, ty=0;

  document.addEventListener('touchstart',e=>{
    tx=e.touches[0].clientX;
    ty=e.touches[0].clientY;
  },{passive:true});

  document.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-tx;
    const dy=e.changedTouches[0].clientY-ty;
    if(Math.abs(dx)<40||Math.abs(dx)<Math.abs(dy)*1.5) return; // troppo corto o troppo verticale
    const dir=dx>0?-1:1; // swipe sx → avanti (+1), swipe dx → indietro (-1)

    // Swipe su card modal — naviga tra le carte del PNG
    if(S.openCard){
      const {npcId,cardTitle}=S.openCard;
      const cards=npcCards(npcId);
      const idx=cards.findIndex(c=>c.title===cardTitle);
      if(idx===-1) return;
      const next=cards[idx+dir];
      if(next){ S.openCard={npcId,cardTitle:next.title}; render(); }
      return;
    }

    // Swipe su tab Ciurma — cambia tab
    if(S.view==='consulta'){
      const tabs=['ciurma','summon'];
      const cur=tabs.indexOf(S.consultaTab||'ciurma');
      const next=tabs[cur+dir];
      if(next){ S.consultaTab=next; render(); }
    }
  },{passive:true});
})();
// ══════════════════════════════════════════════════
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
// Se c'è una sessione attiva al caricamento, va direttamente in sessione
if(S.session) S.view='session';
render();
