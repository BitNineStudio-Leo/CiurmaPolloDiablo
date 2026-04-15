'use strict';

// ══════════════════════════════════════════════════
// BUNDLED DATA — aggiornato con CA formula, TS completi, Gatto titanico
// ══════════════════════════════════════════════════
const BUNDLED_NPCS = [
  // CA = Base + floor(lv/2) + bonus combat/furt/magia
  // Vieni Qua lv13: base16(arm.pesante) +6 +4(S) +0 +0 = 26 | F: Tempra,Volontà D: Riflessi
  {id:'vieni_qua', name:'Vieni Qua',  star:false, classe:'Lv 13 · Orco · Guerriero',            image_url:'', ca:26, pf_max:3, ts_forte:['Tempra','Volontà'],    ts_debole:['Riflessi'],        combat:'S', magia:'D', nav:'B', tech:'D', cura:'D', furtivita:'D'},
  // Saltarello lv12: base13(arm.media) +6 +2(A) +0 +2(A) = 23 | F: Tempra,Volontà D: Riflessi
  {id:'saltarello',name:'Saltarello', star:false, classe:'Lv 12 · Thri-Kreen · Mente Guerriera', image_url:'', ca:23, pf_max:3, ts_forte:['Tempra','Volontà'],    ts_debole:['Riflessi'],        combat:'A', magia:'A', nav:'B', tech:'D', cura:'D', furtivita:'D'},
  // Wedge lv13: base13 +6 +0 +1(B) +0 = 20 | F: Tempra D: Riflessi,Volontà
  {id:'wedge',     name:'Wedge',      star:false, classe:'Lv 13 · Umano · Esperto (marinaio)',   image_url:'', ca:20, pf_max:3, ts_forte:['Tempra'],              ts_debole:['Riflessi','Volontà'], combat:'C', magia:'D', nav:'S', tech:'A', cura:'C', furtivita:'B'},
  // Bigs lv13: base13 +6 +0 +1(B) +0 = 20 | F: Tempra D: Riflessi,Volontà
  {id:'bigs',      name:'Bigs',       star:false, classe:'Lv 13 · Umano · Esperto (marinaio)',   image_url:'', ca:20, pf_max:3, ts_forte:['Tempra'],              ts_debole:['Riflessi','Volontà'], combat:'C', magia:'D', nav:'S', tech:'C', cura:'A', furtivita:'B'},
  // Son Goku lv18: base12(monaco) +9 +6(SS) +0 +0 = 27 | F: Tempra,Volontà D: Riflessi
  {id:'son_goku',  name:'Son Goku',   star:true,  classe:'Lv 18 · Umano · Monaco',               image_url:'', ca:27, pf_max:4, ts_forte:['Tempra','Volontà'],    ts_debole:['Riflessi'],        combat:'SS',magia:'D', nav:'A', tech:'D', cura:'B', furtivita:'D'},
  // Lady lv18: base12 +9 +0 +2(A) +3(S) = 26 | F: Volontà D: Tempra,Riflessi
  {id:'lady',      name:'Lady',       star:true,  classe:'Lv 18 · Umana · ???',                  image_url:'', ca:26, pf_max:4, ts_forte:['Volontà'],             ts_debole:['Tempra','Riflessi'], combat:'D', magia:'S', nav:'C', tech:'C', cura:'A', furtivita:'A'},
  // Quarantena lv16: base13 +8 +0 +2(A) +4(SS) = 27 | F: Volontà,Riflessi D: Tempra
  {id:'quarantena',name:'Quarantena', star:true,  classe:'Lv 16 · Mezzelfa · Vera Negromante',   image_url:'', ca:27, pf_max:4, ts_forte:['Volontà','Riflessi'],   ts_debole:['Tempra'],          combat:'D', magia:'SS',nav:'A', tech:'D', cura:'C', furtivita:'A'},
  // Ducapollo lv15: base13 +7 +0 +3(S) +3(S) = 26 | F: Volontà,Riflessi D: Tempra
  {id:'ducapollo', name:'Ducapollo',  star:false, classe:'Lv 15 · Gallinellan · Innato',         image_url:'', ca:26, pf_max:4, ts_forte:['Volontà','Riflessi'],   ts_debole:['Tempra'],          combat:'D', magia:'S', nav:'D', tech:'D', cura:'D', furtivita:'S'},
  // Blood Mask lv9: base12 +4 +0 +2(A) +1(B) = 19 | F: Riflessi,Volontà D: Tempra
  {id:'blood_mask',name:'Blood Mask', star:true,  classe:'Lv 9 · Umano (Yuan-ti) · Fantasma',    image_url:'', ca:19, pf_max:2, ts_forte:['Riflessi','Volontà'],   ts_debole:['Tempra'],          combat:'C', magia:'B', nav:'S', tech:'D', cura:'D', furtivita:'A'},
  // Stella lv13: base16 +6 +2(A) +0 +3(S) = 27 | F: Tempra,Volontà D: Riflessi
  {id:'stella',    name:'Stella',     star:false, classe:'Lv 13 · Elfa Occhirosi · Crusader',    image_url:'', ca:27, pf_max:3, ts_forte:['Tempra','Volontà'],    ts_debole:['Riflessi'],        combat:'A', magia:'S', nav:'D', tech:'D', cura:'A', furtivita:'D'},
  // Gurgo lv4: base10 +2 +0 +1(B) +0 = 13 | F: Riflessi D: Tempra,Volontà
  {id:'gurgo',     name:'Gurgo (Scorpion)', star:false, classe:'Lv 4 · Gremlin · Ladro',         image_url:'', ca:13, pf_max:1, ts_forte:['Riflessi'],             ts_debole:['Tempra','Volontà'], combat:'C', magia:'D', nav:'B', tech:'B', cura:'D', furtivita:'B'},
  // Gatto TITANO: natura titanica = 30 fisso | F: Riflessi,Tempra D: Volontà (si inceppa nelle contraddizioni)
  {id:'gatto',     name:'Gatto',      star:true,  classe:'Titano della Creatività · Gatto Supremo', image_url:'', ca:30, pf_max:1, ts_forte:['Riflessi','Tempra'], ts_debole:['Volontà'],         combat:'B', magia:'D', nav:'D', tech:'SS',cura:'SS',furtivita:'B'},
  // Dorag ~lv18: base14(drago) +9 +2(A) +0 +1(B) = 26 | F: Tempra,Riflessi D: Volontà
  {id:'dorag',     name:'Dorag',      star:false, classe:'Drago di ottone adulto',                image_url:'', ca:26, pf_max:4, ts_forte:['Tempra','Riflessi'],   ts_debole:['Volontà'],         combat:'A', magia:'B', nav:'D', tech:'D', cura:'C', furtivita:'C'},
  // Murray lv5: base10 +2 +0 +0 +0 = 12 | F: Volontà D: Riflessi,Tempra
  {id:'murray',    name:'Murray',     star:false, classe:'Lv 5 · Teschio rianimato · Stregone',   image_url:'', ca:12, pf_max:2, ts_forte:['Volontà'],             ts_debole:['Riflessi','Tempra'], combat:'D', magia:'C', nav:'D', tech:'D', cura:'D', furtivita:'D'},
];

const BUNDLED_CARDS = [
  // ── Vieni Qua ──
  {npc_id:'vieni_qua', title:'Ascia-mano', cost:1, stat:'combat', grade:'S',
   desc:'Attacca con il moncone-ascia. Infligge 36 danni. Se il bersaglio è taglia Media o inferiore, è anche Abbattuto per 1 round.',
   rule:'Nessun tiro per colpire. Portata mischia.',
   flavor:'Il vecchio capitano gliela fece costruire da un fabbro. Bal gli ha insegnato come usarla.', minion:''},
  {npc_id:'vieni_qua', title:'Scudo vivente', cost:1, stat:'combat', grade:'S',
   desc:'Si interpone tra un alleato adiacente e una ferita in arrivo, assorbendo il danno al suo posto.',
   rule:'Sostituisce la regola "Proteggi il minion": non costa il punto carta aggiuntivo.',
   flavor:'La prima lezione era sempre la stessa: metti il corpo davanti.',
   minion:'Vieni Qua riporta la ferita al posto dell\'alleato protetto.'},
  {npc_id:'vieni_qua', title:'Ambizione dell\'armatura', cost:2, stat:'combat', grade:'S',
   desc:'Per 3 round: gli attacchi ignorano resistenze e riduzioni al danno; ogni danno subito viene dimezzato prima di qualsiasi riduzione.',
   rule:'Usabile 1 volta per sessione. Non è magia — è spirito puro.',
   flavor:'— Come fai a reggere tutto questo? — Non lo so. Il maestro Bal lo chiama "ambizione".', minion:''},

  // ── Saltarello ──
  {npc_id:'saltarello', title:'Raffica di arti', cost:1, stat:'combat', grade:'A',
   desc:'Attacca due bersagli diversi nello stesso round infliggendo 24 danni a ciascuno.',
   rule:'I due bersagli devono essere entro 3m tra loro.',
   flavor:'Quattro braccia. Non gli è mai stato insegnato a esitare.', minion:''},
  {npc_id:'saltarello', title:'Balzo psionico', cost:1, stat:'magia', grade:'A',
   desc:'Salta fino a 18m in qualsiasi direzione. Può atterrare su un nemico: 20 danni e Abbattuto per 1 round.',
   rule:'Non provoca attacchi di opportunità in uscita.',
   flavor:'La ciurma ha smesso di chiedersi come ci arrivi lassù.', minion:''},
  {npc_id:'saltarello', title:'Interrogatorio psichico', cost:2, stat:'magia', grade:'A',
   desc:'Legge i pensieri superficiali di un PNG. Rivela: se mente, la preoccupazione principale, le intenzioni ostili.',
   rule:'Il PNG non se ne accorge. Max 1 per scena.',
   flavor:'Saltarello non si unì a LeBlanc per scelta. Ma scelse ogni giorno dopo.', minion:''},

  // ── Wedge ──
  {npc_id:'wedge', title:'Manovra esperta', cost:1, stat:'nav', grade:'S',
   desc:'Una prova di navigazione o manovra della nave riesce automaticamente.',
   rule:'Dichiarare prima del tiro.',
   flavor:'Testa cucita con una corda. Timone in mano. Vento in poppa. Una buona giornata.', minion:''},
  {npc_id:'wedge', title:'Riparazione rapida', cost:1, stat:'tech', grade:'A',
   desc:'Ripara 30 PF strutturali della nave in 10 minuti.',
   rule:'Non usabile in combattimento navale attivo.',
   flavor:'— Come lavori con la testa così? — Con molta attenzione a non girarmi troppo veloce.', minion:''},
  {npc_id:'wedge', title:'Tecnica rematoria', cost:2, stat:'nav', grade:'S',
   desc:'La nave si muove al doppio della velocità per 1 ora. Se anche Bigs usa la stessa carta nella stessa ora: velocità triplicata.',
   rule:'Inseguimento/fuga: la distanza varia di 6 miglia per ora.',
   flavor:'La marina li cercava da tre mari. Non li trovò mai.', minion:''},

  // ── Bigs ──
  {npc_id:'bigs', title:'Manovra esperta', cost:1, stat:'nav', grade:'S',
   desc:'Una prova di navigazione o manovra della nave riesce automaticamente.',
   rule:'Dichiarare prima del tiro.',
   flavor:'Bigs e Wedge non parlano molto. Non ne hanno bisogno.', minion:''},
  {npc_id:'bigs', title:'Pronto soccorso', cost:1, stat:'cura', grade:'A',
   desc:'Stabilizza un personaggio a 0 PF e lo riporta a 16 PF. Fuori combattimento: cura 28 PF a qualsiasi membro della ciurma.',
   rule:'1 round di azione.',
   flavor:'— Hai un buco nel petto. — Lo so. Fa un po\' freddo.', minion:''},
  {npc_id:'bigs', title:'Tecnica rematoria', cost:2, stat:'nav', grade:'S',
   desc:'La nave si muove al doppio della velocità per 1 ora. Se anche Wedge usa la stessa carta nella stessa ora: velocità triplicata.',
   rule:'Inseguimento/fuga: la distanza varia di 6 miglia per ora.',
   flavor:'Insieme valgono più di qualsiasi vento.', minion:''},

  // ── Son Goku ──
  {npc_id:'son_goku', title:'Pugno del monaco', cost:1, stat:'combat', grade:'SS',
   desc:'Infligge 44 danni a un bersaglio senza tiro per colpire. Bersagli con meno di 10 DV: Abbattuto per 1 round.',
   rule:'Portata mischia.',
   flavor:'L\'ammiraglio che fondò una città. Il prigioniero che la abbandonò. Il monaco che non smise mai di allenarsi.',
   minion:'★ In forma Re Kong non può ricevere ferite da attacchi normali.'},
  {npc_id:'son_goku', title:'Ambizione del re conquistatore', cost:1, stat:'combat', grade:'SS',
   desc:'Tutti i nemici con meno di 8 DV entro 18m cadono incoscienti per 1 round. I più forti subiscono Paura.',
   rule:'CD Volontà 22 per nemici con 8+ DV. Non è magia.',
   flavor:'— Sa chi sono? — Sì. — E allora sa già come finisce.', minion:''},
  {npc_id:'son_goku', title:'Re Kong', cost:2, stat:'combat', grade:'SS',
   desc:'Trasformazione in gorilla gigante per 3 round: immune alle ferite normali, ogni attacco infligge 60 danni, nemici con meno di 10 DV fuggono automaticamente.',
   rule:'Usabile 1 volta per sessione.',
   flavor:'Mouga pensava di averlo domato. Aveva torto.',
   minion:'★ In forma Re Kong non può ricevere ferite da attacchi normali.'},
  {npc_id:'son_goku', title:'Re Kong scatenato', cost:3, stat:'combat', grade:'SS',
   desc:'Come Re Kong ma dura 5 round. Ogni attacco colpisce tutti i nemici entro 3m per 50 danni ciascuno.',
   rule:'Usabile solo se Re Kong è già attivo. 1 volta per sessione.',
   flavor:'Quando il Re Kong ruggisce, anche i leviatani nuotano dall\'altra parte.', minion:''},

  // ── Lady ──
  {npc_id:'lady', title:'Lettura del destino', cost:1, stat:'magia', grade:'S',
   desc:'Domanda sì/no su un pericolo imminente. Il DM risponde onestamente. Non fallisce mai.',
   rule:'Max 1 per sessione per giocatore.',
   flavor:'Non predice il futuro. Lo vede già successo.', minion:''},
  {npc_id:'lady', title:'Tisana della guaritrice', cost:1, stat:'cura', grade:'A',
   desc:'Cura 28 PF e rimuove una condizione minore. Fuori combattimento.',
   rule:'30 minuti di preparazione.',
   flavor:'Sa di erbe e di rum e di qualcosa che non ha nome. Funziona sempre.', minion:''},
  {npc_id:'lady', title:'Maledizione voodoo', cost:2, stat:'magia', grade:'S',
   desc:'Un nemico scelto subisce -4 a tutti i tiri per 24 ore. Nessun tiro salvezza.',
   rule:'Non si cumula con altre maledizioni.',
   flavor:'Lady non odia nessuno. Ma ricorda tutto.', minion:''},
  {npc_id:'lady', title:'Oracolo del crocicchio', cost:2, stat:'magia', grade:'S',
   desc:'Consulta gli spiriti. Il DM fornisce un indizio concreto su un mistero attivo: un nome, un luogo o una connessione nascosta.',
   rule:'Max 1 per sessione.',
   flavor:'Al crocicchio si incontrano tutti i cammini. Anche quelli dei morti.', minion:''},

  // ── Quarantena ──
  {npc_id:'quarantena', title:'Tocco necromantico', cost:1, stat:'magia', grade:'SS',
   desc:'A scelta: crea 4 scheletri obbedienti per 1 ora — oppure infligge 32 danni freddo — oppure drena 24 PF da un bersaglio recuperandoli.',
   rule:'Un solo effetto per attivazione.',
   flavor:'— Quanti ne puoi evocare? — Quanti ne vuoi?', minion:''},
  {npc_id:'quarantena', title:'Frutto Feel-Feel', cost:1, stat:'furtivita', grade:'A',
   desc:'Legge le emozioni di un PNG vicino. Rivela tre parole chiave: stato emotivo attuale, intenzione immediata, paura più profonda.',
   rule:'Il PNG non se ne accorge. Nessun tiro.',
   flavor:'— Come stai? — [Paura. Orgoglio. Speranza di essere abbracciata.] — Bene, grazie.', minion:''},
  {npc_id:'quarantena', title:'Evoca le ombre', cost:2, stat:'magia', grade:'SS',
   desc:'Evoca 4 Ombre obbedienti per 10 ore. Automaticamente riuscito.',
   rule:'Ogni Ombra conta come minion separato con proprie regole ferite.',
   flavor:'Quattordici anni a comandare la Maradà da sola. Non era mai sola.',
   minion:'Ogni Ombra è un minion indipendente con pf_max 1.'},
  {npc_id:'quarantena', title:'Dono del Shadow Man', cost:3, stat:'magia', grade:'SS',
   desc:'Interroga lo spirito di un personaggio morto. Fino a 3 domande. Il defunto risponde veritieramente.',
   rule:'Il corpo deve essere presente o il luogo di morte noto. 1 volta per sessione.',
   flavor:'I morti hanno pochi segreti per chi li sa ascoltare.', minion:''},

  // ── Ducapollo ──
  {npc_id:'ducapollo', title:'Lancio innato', cost:1, stat:'magia', grade:'S',
   desc:'A scelta: Sonno (3 creature addormentate 1 ora), Fascino Persone (1 PNG affascinato 4 ore), Nebbia Fitta (zona 12m, 10 min).',
   rule:'CD 17 per Sonno e Fascino. Nessun componente.',
   flavor:'— Cosa ha fatto esattamente? — Un piccolo incantesimo. Non si preoccupi.', minion:''},
  {npc_id:'ducapollo', title:'Sparizione', cost:1, stat:'furtivita', grade:'S',
   desc:'Diventa invisibile e inodore per 1 ora. Non lascia tracce. Automaticamente riuscito.',
   rule:'Cessa se attacca o lancia incantesimi.',
   flavor:'Un gentiluomo sa sempre quando non è il momento di farsi vedere.', minion:''},
  {npc_id:'ducapollo', title:'Mascheramento innato', cost:2, stat:'furtivita', grade:'S',
   desc:'Assume l\'aspetto fisico di un PNG noto per 4 ore. Supera automaticamente la prima prova di travestimento della scena.',
   rule:'Deve aver osservato il bersaglio per almeno 1 minuto.',
   flavor:'Geiz lo donò a Royna come guida, senza spiegazioni. Ducapollo conosce il motivo. Non lo dice.', minion:''},

  // ── Blood Mask ──
  {npc_id:'blood_mask', title:'Sorveglianza spettrale', cost:1, stat:'nav', grade:'S',
   desc:'Attraversa una struttura e spia una stanza per 10 minuti. Riferisce tutto ciò che vede e sente con precisione assoluta.',
   rule:'Non può essere rilevato. Nessun tiro.',
   flavor:'Da morto vede più cose di quanto avesse mai visto da vivo.', minion:''},
  {npc_id:'blood_mask', title:'Lamento del fantasma', cost:1, stat:'magia', grade:'B',
   desc:'24 danni da forza a tutti i nemici entro 6m. Nemici con meno di 5 DV fuggono per 1 round.',
   rule:'CD Tempra 14 per dimezzare i danni.',
   flavor:'René Rottingam promise a se stesso che non avrebbe mai più gridato di dolore. Mantiene la promessa.', minion:''},
  {npc_id:'blood_mask', title:'Dono della moda', cost:2, stat:'furtivita', grade:'A',
   desc:'Crea un travestimento magicamente perfetto per un membro della ciurma. La prima prova di Travestimento della sessione riesce automaticamente.',
   rule:'Il travestimento magico dura 8 ore.',
   flavor:'Aveva promesso a una prigioniera un vestito di seta divina. Non smette di cucire.', minion:''},
  {npc_id:'blood_mask', title:'Infestazione', cost:2, stat:'magia', grade:'B',
   desc:'Possiede un oggetto o luogo per 10 minuti. A scelta: risponde come il precedente proprietario (RP) oppure lo rende fisicamente ostile ai nemici (combat).',
   rule:'Forma e comportamento a discrezione del DM.',
   flavor:'Uno specchio che ha visto troppe cose non dimentica facilmente.', minion:''},

  // ── Stella ──
  {npc_id:'stella', title:'Manovra del Crusader', cost:1, stat:'combat', grade:'A',
   desc:'Attacca infliggendo 36 danni sacri. Contro non-morti o aberrazioni: 56 danni e Spaventato per 1 round.',
   rule:'Nessun tiro per colpire.',
   flavor:'L\'astrosauro le ha detto che è la prescelta. Stella non ha ragioni per dubitarne.', minion:''},
  {npc_id:'stella', title:'Tocco della prescelta', cost:1, stat:'cura', grade:'A',
   desc:'Cura 32 PF a un alleato. Se è a 0 PF, lo riporta a 16 PF automaticamente e rimuove una condizione.',
   rule:'Contatto fisico richiesto.',
   flavor:'Guarisce con la stessa intensità con cui combatte. Che è molta.', minion:''},
  {npc_id:'stella', title:'Fervore degli astri', cost:2, stat:'magia', grade:'S',
   desc:'Aura divina per 2 round. Tutti gli alleati in 9m: +3 attacchi, +3 danni, resistenza fisica 5.',
   rule:'Non si cumula con altri bonus di aura.',
   flavor:'— Da dove viene quella luce? — Da lei. È sempre stata lì.', minion:''},
  {npc_id:'stella', title:'Astrosauro', cost:2, stat:'magia', grade:'S',
   desc:'+30 PF temporanei, morso da 48 danni, immune a incantesimi di lv 1-3. Dura 3 round.',
   rule:'Usabile 1 volta per sessione.',
   flavor:'Il grande astrosauro non cammina su questa terra. Tranne quando lo fa.',
   minion:'★ In forma astrosauro non può ricevere ferite da attacchi non magici.'},

  // ── Gurgo ──
  {npc_id:'gurgo', title:'Borseggio / scassinare', cost:1, stat:'furtivita', grade:'B',
   desc:'Ruba un oggetto specifico da un PNG o apre una serratura. CD Furtività 14. Se il bersaglio non è allertato: riuscita automatica.',
   rule:'Tentabile anche in combattimento (azione standard).',
   flavor:'Lo chiamavano "Schifo" perché erano crudeli. Si chiama Scorpion perché lo ha scelto lui.', minion:''},
  {npc_id:'gurgo', title:'Patetico', cost:1, stat:'furtivita', grade:'B',
   desc:'Gurgo fa una scena tanto pietosa che un nemico perde la sua azione nel round successivo.',
   rule:'CD Volontà 10. Non funziona su non-morti, costrutti o creature con Int < 3.',
   flavor:'Non è una tecnica. È una vita intera di umiliazioni trasformata in arma.', minion:''},
  {npc_id:'gurgo', title:'Sabotaggio gremlin', cost:2, stat:'tech', grade:'B',
   desc:'Sabota un meccanismo nemico: cannone, trappola, serratura magica, gabbia. Effetto immediato e irreversibile senza riparazioni.',
   rule:'Deve essere adiacente al meccanismo. 1 round di azione.',
   flavor:'Si chiama anche "Gurgo" per non farsi trovare da Stella. Ma questo è un altro discorso.', minion:''},

  // ── Gatto — carte titaniche con meccanica caos ──
  {npc_id:'gatto', title:'Riparazione prodigiosa', cost:1, stat:'tech', grade:'SS',
   desc:'Ripara istantaneamente qualsiasi oggetto meccanico o magico danneggiato. Nave: recupera 50 PF strutturali.',
   rule:'Il DM tira 1d6 in segreto. Con 1-2: Gatto ripara qualcosa che nessuno aveva chiesto, o migliora l\'oggetto in modo inaspettato con conseguenze narrative imprevedibili. Non usabile in combattimento navale attivo.',
   flavor:'— Come hai fatto? — Non ricordo. Ma funziona.', minion:''},
  {npc_id:'gatto', title:'Cucina suprema', cost:1, stat:'cura', grade:'SS',
   desc:'Tutti i commensali recuperano 40 PF e rimuovono una condizione a scelta.',
   rule:'Il DM tira 1d6 in segreto. Con 1-2: il piatto ha un effetto aggiuntivo non richiesto — un commensale casuale acquisisce una capacità bizzarra o tutti subiscono un effetto narrativo imprevedibile per 1 ora.',
   flavor:'Cucinò qualcosa di straordinario con tre chiodi arrugginiti e un pesce volante. Non rivela la ricetta.', minion:''},
  {npc_id:'gatto', title:'Costruzione titanica', cost:2, stat:'tech', grade:'SS',
   desc:'Il giocatore descrive un problema. Gatto costruisce in pochi minuti qualcosa che lo risolve. La forma della soluzione è a discrezione del DM.',
   rule:'Il DM tira 1d6 in segreto. Con 1-2: la costruzione risolve il problema ma ne crea uno nuovo di proporzioni simili altrove. Il giocatore descrive il problema — non la soluzione.',
   flavor:'Il giocatore spiega il problema. Gatto si addormenta. Si sveglia con la soluzione già costruita.', minion:''},
  {npc_id:'gatto', title:'Balzo della nave', cost:3, stat:'tech', grade:'SS',
   desc:'La nave compie un balzo prodigioso fino a 1km, superando qualsiasi ostacolo fisico o navale.',
   rule:'Il DM tira 1d6 in segreto. Con 1-2: la nave atterra sulla terra ferma. Richiede almeno un giorno di riparazioni e un modo per rimetterla in mare prima di poter ripartire. Gatto deve essere sveglio e a bordo. 1 volta per sessione.',
   flavor:'Nessuno sa cosa ci sia dentro quei pedali. Nessuno ha il coraggio di smontarli.', minion:''},

  // ── Dorag ──
  {npc_id:'dorag', title:'Soffio del drago', cost:1, stat:'combat', grade:'A',
   desc:'A scelta: soffio di fuoco (36 danni, cono 9m, CD Riflessi 18 dimezza) oppure soffio soporifero (1 bersaglio dorme 10 min, CD For 16 annulla).',
   rule:'Una sola forma per attivazione.',
   flavor:'È educato. È cordiale. Brucia le cose solo quando necessario.', minion:''},
  {npc_id:'dorag', title:'Contatto dell\'Airone', cost:2, stat:'magia', grade:'B',
   desc:'Chiama un contatto nella rete dell\'Airone. Ottieni almeno 3 informazioni riservate e concrete su una fazione, PNG o luogo.',
   rule:'Max 1 per sessione. Informazioni a discrezione del DM.',
   flavor:'I draghi di ottone collezionano storie. Dorag ne conosce abbastanza da riempire tre biblioteche.', minion:''},
  {npc_id:'dorag', title:'Maestà del drago', cost:2, stat:'combat', grade:'A',
   desc:'Tutti i nemici entro 12m con meno di 10 DV fuggono per 2 round. I nemici più forti subiscono -2 agli attacchi per lo stesso periodo.',
   rule:'CD Volontà 18 per nemici con 10+ DV.',
   flavor:'Non urla. Non minaccia. Apre le ali e basta.', minion:''},

  // ── Murray ──
  {npc_id:'murray', title:'Maledizione dello stregone', cost:1, stat:'magia', grade:'C',
   desc:'Un nemico subisce -2 a tutti i tiri salvezza per 1 ora. Murray lo fa nel modo più teatralmente minaccioso possibile.',
   rule:'CD Volontà 14 annulla. Non si cumula con Maledizione Voodoo di Lady.',
   flavor:'— Smettila con quelle maledizioni. — MAI. Sono il più terrificante teschio non-morto dei Mari del Sud.', minion:''},
  {npc_id:'murray', title:'Proiettile magico', cost:1, stat:'magia', grade:'C',
   desc:'3 dardi magici automatici da 8 danni l\'uno. Distribuibili su bersagli diversi.',
   rule:'Non richiede tiro per colpire.',
   flavor:'— Come fai a lanciare incantesimi senza mani? — Silenzio! Non distrarre il male con domande stupide.', minion:''},
  {npc_id:'murray', title:'Trattativa con i morti', cost:2, stat:'magia', grade:'C',
   desc:'Murray convince un non-morto non intelligente a ignorare la ciurma per 10 minuti, rotolandogli incontro.',
   rule:'CD Carisma 14 del giocatore. Non funziona su non-morti intelligenti.',
   flavor:'— Come ci parli? — Capiscono il dialetto. E rispettano l\'anzianità.', minion:''},
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
  expanded:{}, openCard:null, openInfo:null,
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

function status(npc){
  const w=wounds(npc.id), pf=npc.pf_max||1;
  if(w>=pf) return 'morto';
  if(npc.star){ if(w>=2) return 'fuori'; if(w===1) return 'indebolito'; }
  else { if(w>=1) return 'fuori'; }
  return 'sano';
}
const blocked  = npc => { const s=status(npc); return s==='fuori'||s==='morto'; };
const isFree   = (npc,card) => npc?.star && parseInt(card.cost)===1 && timesUsed(npc.id,card.title)===0;
const effCost  = (npc,card) => isFree(npc,card)?0:parseInt(card.cost)||1;
const timesUsed= (nId,t) => (S.session?.used||{})[cKey(nId,t)]||0;

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
  S.session={pool:S.maxPool, maxPool:S.maxPool, used:{}};
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
  const cost=effCost(npc,card);
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
  const cur=wounds(npcId);
  if(cur>=npc.pf_max){toast('PNG già al massimo delle ferite!',true);return;}
  S.wounds[npcId]=cur+1; LS.s('wounds',S.wounds);
  const st=status(npc);
  if(st==='morto')           toast(`☠ ${npc.name} è morto!`,true);
  else if(st==='fuori')      toast(`✕ ${npc.name} è fuori combattimento`);
  else if(st==='indebolito') toast(`⚠ ${npc.name} è indebolito — al prossimo colpo fuori`);
  render();
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
function render(){
  const views={home:rHome,builder:rBuilder,session:rSession,settings:rSettings};
  document.getElementById('app').innerHTML=
    (views[S.view]||rHome)()+
    (S.dialog     ? rDialog()    :'')+
    (S.openCard   ? rCardModal() :'')+
    (S.openInfo   ? rInfoModal() :'')+
    (S.minionOpen ? rMinion()    :'')+
    (S.menuOpen   ? rMenu()      :'')+
    (S.toast?`<div class="toast${S.toast.err?' toast-err':''}">${S.toast.msg}</div>`:'');
}

// ── Home ────────────────────────────────────────
function rHome(){
  const deckTxt=S.deck.length?S.deck.map(id=>npcById(id)?.name||id).join(', '):'Nessun PNG selezionato';
  const syncTxt=S.syncTime?new Date(S.syncTime).toLocaleString('it-IT',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}):'Mai (dati integrati)';
  return `<div class="view">
  <div class="hdr"><span class="logo">⚓ Ciurma</span>
    <button class="ico-btn" data-action="goto" data-view="settings">⚙️</button></div>
  <div class="scroll-body">
    ${S.loading?'<div class="loading">Sincronizzazione...</div>':''}
    ${S.error?`<div class="err-banner">⚠ ${S.error}</div>`:''}
    <div class="home-card">
      <div class="hc-lbl">Dati</div>
      <div class="hc-val">${S.npcs.length} PNG · ${S.cards.length} carte</div>
      <div class="hc-sub">Sync: ${syncTxt}</div>
      ${S.rawUrl
        ?`<button class="sm-btn" data-action="sync">🔄 Sincronizza GitHub</button>`
        :`<button class="sm-btn" data-action="goto" data-view="settings">⚙ Collega GitHub JSON</button>`}
    </div>
    <div class="home-card">
      <div class="hc-lbl">Mazzo</div>
      <div class="hc-val">${S.deck.length?S.deck.length+' PNG':'—'}</div>
      <div class="hc-sub" title="${deckTxt}">${deckTxt}</div>
      <button class="sm-btn" data-action="open-builder">✏ Modifica mazzo</button>
    </div>
    ${S.deck.length?`
    <div class="pool-cfg">
      <label>Pool punti per sessione</label>
      <div class="stepper-row">
        <button class="step-btn" data-action="adj-max" data-d="-1">−</button>
        <span class="stepper-val">${S.maxPool}</span>
        <button class="step-btn" data-action="adj-max" data-d="1">+</button>
      </div>
    </div>
    <button class="btn btn-g btn-lg" data-action="start-session">⚔ Inizia sessione</button>`
    :`<p class="hint-txt">Costruisci un mazzo per iniziare una sessione.</p>`}
  </div></div>`;
}

// ── Builder ─────────────────────────────────────
function rBuilder(){
  const bd=S.builderDeck||[];
  return `<div class="view">
  <div class="hdr">
    <button class="ico-btn" data-action="cancel-builder">←</button>
    <span class="hdr-title">Mazzo</span>
    <button class="confirm-btn" data-action="confirm-builder">✓ Salva</button>
  </div>
  <div class="bldr-sub">${bd.length} PNG selezionati</div>
  <div class="npc-grid">
    ${S.npcs.map(npc=>{
      const sel=bd.includes(npc.id), w=wounds(npc.id), pf=npc.pf_max||1;
      return `<div class="npc-tile${sel?' sel':''}" data-action="toggle-npc" data-npc="${npc.id}">
        <div class="tile-img-wrap">
          ${npc.image_url?`<img src="${npc.image_url}" alt="${npc.name}" onerror="this.style.display='none'">`:''}
          ${!npc.image_url?`<div class="tile-img-ph">${initials(npc.name)}</div>`:''}
          ${npc.star?'<span class="tile-star-ov">★</span>':''}
          ${sel?'<span class="tile-chk-ov">✓</span>':''}
        </div>
        <div class="tile-body">
          <div class="tile-name">${npc.name}</div>
          <div class="tile-cls">${npc.classe||''}</div>
          <div class="tile-stats">${SK.map(k=>`<span class="sp ${gc(npc[k])}">${SI[k]}${npc[k]||'D'}</span>`).join('')}</div>
          <div class="tile-cnt">CA ${npc.ca||'?'} · ${npcCards(npc.id).length} carte · ❤ ${w}/${pf}</div>
        </div>
      </div>`;
    }).join('')}
  </div></div>`;
}

// ── Session ─────────────────────────────────────
function rSession(){
  if(!S.session) return rHome();
  const {pool,maxPool}=S.session;
  return `<div class="view">
  <div class="hdr sess-hdr">
    <div class="pool-wrap">
      <div class="pool-dots">${rDots(pool,maxPool)}</div>
      <div class="pool-txt">${pool} / ${maxPool} pt</div>
    </div>
    <div class="pool-ctrl">
      <button class="step-btn" style="width:30px;height:30px;font-size:18px" data-action="adj-pool" data-d="-1">−</button>
      <button class="step-btn" style="width:30px;height:30px;font-size:18px" data-action="adj-pool" data-d="1">+</button>
      <button class="end-btn" data-action="end-session">Fine</button>
      <button class="ico-btn" data-action="open-menu">⋮</button>
    </div>
  </div>
  <div class="sess-list">
    ${S.deck.map(id=>{
      const npc=npcById(id); if(!npc) return '';
      const st=status(npc), exp=S.expanded[id];
      return `<div class="sess-npc ${st}">
        ${rNpcHdr(npc,st,exp)}
        ${exp?`<div class="sess-cards">${rNpcCards(npc)}</div>`:''}
      </div>`;
    }).join('')}
  </div></div>`;
}

function rDots(pool,max){
  if(max>12) return `<span class="pool-big">${pool}</span>`;
  return Array.from({length:max},(_,i)=>`<span class="pd ${i<pool?'pd-on':'pd-off'}"></span>`).join('');
}

function rNpcHdr(npc,st,exp){
  const w=wounds(npc.id), pf=npc.pf_max||1;
  const chip=st==='sano'?'':
    st==='indebolito'?`<span class="chip chip-indebolito">⚠ Indebolito</span>`:
    st==='fuori'?`<span class="chip chip-fuori">✕ Fuori</span>`:
    `<span class="chip chip-morto">☠ Morto</span>`;
  const tsF=(npc.ts_forte||[]).map(t=>`<span class="ts-pill ts-forte">${t}✓</span>`).join('');
  const tsD=(npc.ts_debole||[]).map(t=>`<span class="ts-pill ts-debole">${t}✕</span>`).join('');
  const wdots=Array.from({length:pf},(_,i)=>`<span class="wd ${i<w?'wd-on':'wd-off'}"></span>`).join('');
  const fb=initials(npc.name).replace(/'/g,"\\'");
  return `<div class="sn-hdr" data-action="toggle-npc" data-npc="${npc.id}">
    <div class="sn-avatar">
      ${npc.image_url
        ?`<img src="${npc.image_url}" alt="${npc.name}" onerror="this.parentElement.innerHTML='${fb}'">`
        :initials(npc.name)}
    </div>
    <div class="sn-info">
      <div class="sn-row1">
        ${npc.star?'<span class="sn-star">★</span>':''}
        <span class="sn-name">${npc.name}</span>
        ${chip}
      </div>
      <div class="sn-row2">
        <span class="ca-badge">CA ${npc.ca||'?'}</span>
        ${tsF}${tsD}
      </div>
    </div>
    <div class="sn-right">
      <div class="wounds-row">
        ${wdots}
        <button class="wd-btn" data-action="add-wound" data-npc="${npc.id}" data-stop>+❤</button>
      </div>
      <div class="sn-bottom">
        <button class="info-btn" data-action="open-info" data-npc="${npc.id}" data-stop>ℹ</button>
        <span class="sn-arr">${exp?'▲':'▼'}</span>
      </div>
    </div>
  </div>`;
}

function rNpcCards(npc){
  const cards=npcCards(npc.id), bl=blocked(npc);
  if(!cards.length) return '<div style="padding:8px;font-size:13px;color:var(--muted)">Nessuna carta</div>';
  return cards.map(card=>{
    const cost=parseInt(card.cost)||1, free=isFree(npc,card), used=timesUsed(npc.id,card.title);
    const canAfford=free||(S.session.pool>=cost);
    let badge,extra='';
    if(bl){badge=`<span class="badge b-c1">${cost}pt</span>`;extra='locked';}
    else if(free){badge=`<span class="badge b-free">★ gratis</span>`;extra='star-free';}
    else{badge=`<span class="badge b-c${Math.min(cost,3)}">${cost}pt</span>`;if(!canAfford)extra='no-pool';}
    const isUsed=used>0&&!(npc.star&&cost===1);
    return `<div class="sc${extra?' '+extra:''}${isUsed&&!bl?' used-card':''}"
      data-action="open-card" data-npc="${npc.id}" data-card="${enc(card.title)}">
      <div class="sc-row">
        <span class="sc-title">${card.title}</span>${badge}
      </div>
      <div class="sc-meta">
        <span class="sp ${gc(card.grade)}">${SI[card.stat]||''} ${card.grade||''}</span>
        ${used&&!bl?`<span class="use-cnt">${used}× usata</span>`:''}
      </div>
    </div>`;
  }).join('');
}

// ── Card Modal ──────────────────────────────────
function rCardModal(){
  const {npcId,cardTitle}=S.openCard;
  const npc=npcById(npcId), card=npcCards(npcId).find(c=>c.title===cardTitle);
  if(!npc||!card) return '';
  const cost=parseInt(card.cost)||1, free=isFree(npc,card), eff=effCost(npc,card);
  const canAfford=free||(S.session?.pool>=cost), used=timesUsed(npcId,cardTitle), bl=blocked(npc);
  return `<div class="mod-ov" data-action="close-modal">
  <div class="mod-card" data-stop>
    ${npc.image_url?`<img class="mod-img" src="${npc.image_url}" alt="${npc.name}">`:`<div class="mod-img-ph">${initials(npc.name)}</div>`}
    <div class="mod-body">
      <div class="mod-npc">${npc.name}${npc.star?' ★':''}</div>
      <div class="mod-title">${card.title}</div>
      <div class="mod-stat">
        <span class="sp ${gc(card.grade)}">${SI[card.stat]||''} ${card.grade||''}</span>
        ${bl?'<span style="font-size:12px;color:var(--red2)">PNG fuori combattimento</span>':
          free?'<span class="mod-free-lg">★ Prima attivazione gratuita</span>':
          `<span class="mod-cost">${eff}pt</span>`}
      </div>
      <div class="mod-desc">${card.desc||''}</div>
      ${card.rule?`<div class="mod-rule">${card.rule}</div>`:''}
      ${card.flavor?`<div class="mod-flavor">"${card.flavor}"</div>`:''}
      ${card.minion?`<div class="mod-minion">⚓ ${card.minion}</div>`:''}
      <div class="mod-actions">
        ${S.session&&!bl?`
          <button class="btn btn-g${canAfford?'':' btn-dis'}" data-action="play-card" data-npc="${npcId}" data-card="${enc(cardTitle)}">
            ${free?'★ Attiva gratis':`Gioca (${eff}pt)`}
          </button>
          ${used?`<button class="btn btn-s" data-action="undo-card" data-npc="${npcId}" data-card="${enc(cardTitle)}">↩ Annulla ultima</button>`:''}
        `:''}
        <button class="btn btn-gh" data-action="close-modal">Chiudi</button>
      </div>
    </div>
  </div></div>`;
}

// ── Info Modal ──────────────────────────────────
function rInfoModal(){
  const npc=npcById(S.openInfo); if(!npc) return '';
  const w=wounds(npc.id), pf=npc.pf_max||1, st=status(npc);
  const stLabel={sano:'🟢 Sano',indebolito:'🟡 Indebolito',fuori:'🔴 Fuori combattimento',morto:'☠️ Morto'}[st];
  return `<div class="mod-ov" data-action="close-info">
  <div class="mod-card" data-stop>
    ${npc.image_url?`<img class="info-img" src="${npc.image_url}" alt="${npc.name}">`:`<div class="info-img-ph">${initials(npc.name)}</div>`}
    <div class="info-body">
      <div class="info-name">${npc.star?'★ ':''}${npc.name}</div>
      <div class="info-cls">${npc.classe||''}</div>
      <div class="info-row">
        <span class="ca-badge" style="font-size:13px;padding:4px 10px">CA ${npc.ca||'?'}</span>
        <span style="font-size:13px;color:var(--muted)">${stLabel}</span>
      </div>
      <div class="info-section">
        <div class="info-lbl">Tiri Salvezza</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${(npc.ts_forte||[]).map(t=>`<span class="ts-pill ts-forte" style="font-size:12px;padding:3px 10px">${t} ✓ Forte</span>`).join('')}
          ${(npc.ts_debole||[]).map(t=>`<span class="ts-pill ts-debole" style="font-size:12px;padding:3px 10px">${t} ✕ Debole</span>`).join('')}
        </div>
      </div>
      <div class="info-section">
        <div class="info-lbl">Ferite — ${w}/${pf}</div>
        <div class="wounds-ctrl">
          <button class="step-btn" data-action="remove-wound-info" data-npc="${npc.id}">−</button>
          <div class="wounds-dots-lg">
            ${Array.from({length:pf},(_,i)=>`<span class="wd-lg ${i<w?'wd-lg-on':'wd-lg-off'}"></span>`).join('')}
          </div>
          <button class="step-btn" data-action="add-wound-info" data-npc="${npc.id}">+</button>
        </div>
      </div>
      <div class="info-stat-grid">
        ${SK.map(k=>`<div class="info-stat">
          <span class="info-stat-icon">${SI[k]}</span>
          <div class="info-stat-grade ${gc(npc[k])}">${npc[k]||'D'}</div>
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
    ['Colpire un minion','Un qualsiasi colpo elimina il minion dalla battaglia e gli infligge 1 ferita.'],
    ['Punti ferita','PF = 1 base + 1 ogni 5 livelli. Quando le ferite raggiungono il massimo, il minion muore permanentemente.'],
    ['PNG non stellati','1 ferita → fuori combattimento. Carte bloccate, scheda grigia.'],
    ['PNG stellati ★','1 ferita → Indebolito (avviso visivo, carte funzionano normalmente). 2 ferite → fuori combattimento.'],
    ['Morte permanente','ferite = pf_max → morte. Il PNG rimane visibile nel mazzo. Resuscitabile manualmente dal DM.'],
    ['Guarire una ferita','Richiede una piccola quest dedicata. Il DM rimuove la ferita manualmente tramite il pannello ℹ.'],
    ['Proteggere il minion','1 punto carta per assorbire una ferita al posto del minion. Vieni Qua lo fa gratis con Scudo Vivente.'],
    ['Tiri salvezza','Forte: superato automaticamente. Debole: fallito automaticamente. Non esistono altri TS per i minion.'],
    ['Gatto — meccanica caos','Il DM tira 1d6 in segreto prima di ogni carta di Gatto. Con 1-2 l\'effetto prende una piega imprevedibile descritta nella carta. Con 3-6 funziona normalmente.'],
  ];
  return `<div class="mod-ov" data-action="close-minion">
  <div class="mod-card" data-stop>
    <div class="minion-body">
      <div class="minion-title">⚓ Regole Minion</div>
      ${rules.map(([t,b])=>`<div class="mr"><div class="mr-t">${t}</div><div class="mr-b">${b}</div></div>`).join('')}
      <button class="btn btn-gh" style="margin-top:8px" data-action="close-minion">Chiudi</button>
    </div>
  </div></div>`;
}

// ── Menu ─────────────────────────────────────────
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
  const{title,msg,confirmLabel,danger,confirmAction}=S.dialog;
  return `<div class="dlg-ov">
  <div class="dlg-box" data-stop>
    <div class="dlg-title">${title}</div>
    <div class="dlg-msg">${msg}</div>
    <div class="dlg-btns">
      <button class="btn ${danger?'btn-d':'btn-g'}" data-action="${confirmAction}">${confirmLabel}</button>
      <button class="btn btn-gh" data-action="close-dialog">Annulla</button>
    </div>
  </div></div>`;
}

// ── Settings ──────────────────────────────────────
function rSettings(){
  const syncTxt=S.syncTime?new Date(S.syncTime).toLocaleString('it-IT'):'—';
  return `<div class="view">
  <div class="hdr">
    <button class="ico-btn" data-action="goto" data-view="home">←</button>
    <span class="hdr-title">Impostazioni</span>
  </div>
  <div class="settings-body">
    <div class="fld">
      <label>URL GitHub raw (data.json)</label>
      <input id="rawurl" type="url" value="${S.rawUrl}" placeholder="https://raw.githubusercontent.com/...">
    </div>
    <button class="btn btn-g" data-action="save-url">Salva e sincronizza</button>
    <div class="sync-info">Ultimo sync: ${syncTxt}</div>
    <hr class="divider">
    <button class="btn btn-s" data-action="sync">🔄 Risincronizza adesso</button>
    <button class="btn btn-d" data-action="clear-data">🗑 Ripristina dati integrati</button>
    <div class="hint-box">
      <strong>Come configurare il JSON su GitHub</strong>
      1. Crea un repo pubblico su GitHub<br>
      2. Carica un file <code>data.json</code><br>
      3. Apri il file → clicca "Raw" → copia l'URL<br>
      4. Incollalo sopra e salva<br>
      <strong>Struttura data.json</strong>
      <code>{ "npcs": [...], "cards": [...] }</code>
      <strong>Campi PNG</strong>
      <code>id · name · star · classe · image_url · ca · pf_max · ts_forte · ts_debole · combat · magia · nav · tech · cura · furtivita</code>
      <strong>Campi carta</strong>
      <code>npc_id · title · cost · stat · grade · desc · rule · flavor · minion</code>
      ts_forte / ts_debole sono array JSON: ["Tempra","Riflessi"]
    </div>
  </div></div>`;
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
    case 'adj-max':          adjMax(parseInt(d)); break;
    case 'start-session':    if(S.deck.length) startSession(); break;
    case 'adj-pool':         adjPool(parseInt(d)); break;
    case 'open-menu':        S.menuOpen=true; render(); break;
    case 'close-menu':       S.menuOpen=false; render(); break;
    case 'open-minion':      S.menuOpen=false; S.minionOpen=true; render(); break;
    case 'close-minion':     S.minionOpen=false; render(); break;
    case 'reset-session':    resetSession(); break;
    case 'end-session':      endSession(); break;
    case 'do-end':
      S.dialog=null; S.session=null; LS.s('session',null); S.view='home'; render(); break;
    case 'do-reset':
      S.dialog=null;
      if(S.session){S.session.used={}; S.session.pool=S.session.maxPool; LS.s('session',S.session);}
      render(); break;
    case 'close-dialog':     S.dialog=null; render(); break;
    case 'open-card':        S.openCard={npcId:npc,cardTitle:dec(card)}; render(); break;
    case 'close-modal':      S.openCard=null; render(); break;
    case 'play-card':        playCard(npc,dec(card)); break;
    case 'undo-card':        undoCard(npc,dec(card)); break;
    case 'add-wound':
    case 'add-wound-info':   addWound(npc); break;
    case 'remove-wound-info':removeWound(npc); break;
    case 'open-info':        S.openInfo=npc; render(); break;
    case 'close-info':       S.openInfo=null; render(); break;
    case 'save-url':         saveUrl(); break;
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
// INIT
// ══════════════════════════════════════════════════
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
render();
