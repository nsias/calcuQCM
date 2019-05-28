var woopclapCh7 = [
  {"assertion":"Un ensemble est a-réductible (algorithmiquement réductible) à son complément. ",
  "response":1,
  "justification":"Si le complément de A est récursif, il est facile de savoir si un élément appartient à A"
  },

  {"assertion":"Tout ensemble récursivement énumérable est a-réductible à HALT. ",
  "response":1,
  "justification":"HALT est re-complet par rapport à la relation ≤a"
  },

  {"assertion":"Un ensemble est f-réductible (fonctionnellement réductible) à son complément.",
  "response":0,
  "justification":"On sait que si un ensemble A est f-reductibe à B et que B est récursivement énumérable, alors A est aussi rec. Enum. Si cette affirmation était vraie, alors K serait récursif."
  },

  {"assertion":"Si A peut être décidé par un algorithme polynomial et si B est f-réductible à A, alors B peut être décidé par un algorithme polynomial.",
  "response":0,
  "justification":"Rien ne nous garantit que le f qui réduit B à A est polynomial."
  },

  {"assertion":"Si A ≤p B,alors A ≤a B ",
  "response":1,
  "justification":"A≤p B⇒A≤f B⇒A≤a B"
  },

  {"assertion":"Si A est dans DTIME(n^2), alors A est dans DSPACE(n^2).",
  "response":1,
  "justification":""
  },

  {"assertion":"Si A est dans NTIME(n^2), alors A est dans DTIME(n^2).",
  "response":0,
  "justification":"A serait dans DTIME(c^(n^2) )"
  },

  {"assertion":"Le choix d’un modèle de calculabilité n’influence pas la classe DTIME(n^2). ",
  "response":0,
  "justification":"La classe peut être modifiée à un facteur polynomial près."
  },

  {"assertion":"Si A est dans DTIME(n^2), alors A est dans DSPACE(n^2). ",
  "response":1,
  "justification":"DTime est toujours une borne supérieur de DSpace"
  },

  {"assertion":"Si A est dans NTIME(n^2), alors A est dans DTIME(n^2). ",
  "response":0,
  "justification":"si A est dans NTIME(n^2) alors A est dans DTIME(c^(n^2) )"
  },

  {"assertion":"Si A ∈ NDTIME(f) alors A ∈ DTIME(f) ",
  "response":0,
  "justification":"A est dans DTIME(c^f)"
  },

  {"assertion":"Si A ∈ NDTIME(n^3) alors A ∈ NP",
  "response":1 ,
  "justification":"car A a possède bien un algorithme non déterministe de complexité polynomiale"
  },

  {"assertion":"S’il existe un algorithme Java de complexité temporelle O(n^3) décidant l’ensemble A, alors il existe une machine de Turing de complexité temporelle O(n3) décidant l’ensemble A",
  "response":0,
  "justification":"La classe de complexité peut être modifiée à un facteur polynomial près."
  },

  {"assertion":"Le choix d’un modèle de calculabilité n’influence pas la classe DTIME(n2). ",
  "response":0 ,
  "justification":"La classe de complexité peut être modifiée à un facteur polynomial près."
  },

  {"assertion":"Si A ≤p B, alors A ≤a B",
  "response":1 ,
  "justification":"car si A ≤p B alors il existe une fonction calculable de complexité temporelle polynomiale tel que :a ∈ A ↔ f(a) ∈ B. On voit donc que si A est récursif alors B l’est aussi."
  },

  {"assertion":"La classe P est strictement incluse dans la classe EXPTIME ",
  "response":1,
  "justification":""
  },
  {"assertion":"Tout problème calculable est au moins dans EXPTIME.",
  "response":0,
  "justification":"il existe des problèmes calculables de complexité plus élevée qu’exponentielle (ex : factorielle)"
  },

  {"assertion":"Un problème NP-complet peut toujours être décidé par un programme non déterministe de complexité polynomiale",
  "response":1 ,
  "justification":"car les problèmes NP-complet sont dans NP"
  },

  {"assertion":"Pour déterminer si un problème A est NP-complet, il suffit de déterminer que A est polynomialement réductible un problème NP-complet connu (e.g. SAT).",
  "response":0,
  "justification":"Si on veut montrer que A est NP complet, il faut tout d’abord que A ∈ NP, et ensuite déterminer qu’un problème NP-complet connu peut être réduit polynomialement à A.(voir p7.22 - Slide 152/166)"
  },

  {"assertion":"Le problème du voyageur de commerce est NP-complet.",
  "response":1,
  "justification":""
  },

  {"assertion":"Un problème NP-complet est intrinsèquement complexe. ",
  "response":1,
  "justification":"VRAI si P =/= NP. FAUX si P=NP"
  },

  {"assertion":"Le choix d’un modèle de calculabilité n’influence pas les classes P et NP. ",
  "response":1,
  "justification":""
  },

  {"assertion":"Le problème de la programmation linéaire est NP-complet.",
  "response":0,
  "justification":"Il existe un algorithme polynomial pour la programmation linéaire. Mais certains algorithmes de complexité exponentielle (dans le pire des cas) ont une complexité polynomiale sur beaucoup d’instances."
  },

  {"assertion":"Si un problème de décision dans P , alors le problème consistant à calculer une solution est également dans P",
  "response":1,
  "justification":""
  },

  {"assertion":"Un problème intrinsèquement complexe est dans EXPTIME",
  "response":0 ,
  "justification":"il pourrait être dans une complexité plus élevée que EXPTIME"
  },

  {"assertion":"NP ⊆ EXPTIME",
  "response":1,
  "justification":"NP est dans EXPTIME"
  },

  {"assertion":"Un problème NP-complet peut être résolu par un algorithme non déterministe de complexité temporelle polynomiale",
  "response":1 ,
  "justification":"car il est dans NP"
  },

  {"assertion":"Un problème NP-complet peut être résolu par un algorithme non déterministe de complexité spaciale polynomiale",
  "response":1 ,
  "justification":"car la complexité spatiale est bornée par la complexité temporelle. Etant donné qu’un problème NP-complet peut être résolu par un algorithme non déterministe en complexité (tem- porelle) polynomiale, alors il l’est par un algorithme non déterministe en complexité spatiale polynomiale."
  },

  {"assertion":"Si SAT ∈ P,alors P ⊆ NP",
  "response":1  ,
  "justification":"SAT est NP-complet donc si SAT est dans P, alors P=NP"
  },

  {"assertion":"Si SAT ∈ P,alors P = NP ",
  "response":1 ,
  "justification":"car SAT est NP-complet"
  },

  {"assertion":"Si SAT ≤a A et A ∈ P, alors SAT ∈ P",
  "response":0 ,
  "justification":"Cette affirmation est vraie pour la réduction polynomiale, pas pour la réduction algorithmique."
  }
]
