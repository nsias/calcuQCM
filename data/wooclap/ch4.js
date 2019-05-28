var woopclapCh4 = [
  {
  "assertion":"Toutes les fonctions calculables par les programmes du langage BLOOP sont totales ",
  "response":1 ,
  "justification":"Tout les programmes se terminent toujours"
  },
  {
  "assertion":"Le langage BLOOP (Bounded Loop) ne permet de programmer que des fonctions totales. Il existe donc des fonctions totales calculables qui ne peuvent être programmées dans ce langage. ",
  "response":1 ,
  "justification":"Hoare Allison (Interpréteur ne peut pas être calculé)"
  },
  {
  "assertion":"Les langages 0 déterministes permettent d’écrire des algorithmes plus efficaces. ",
  "response":1,
  "justification":"En théorie oui mais pas d’ordinateur pratique pour le faire"
  },
  {
  "assertion":"Tout ensemble ND-récursivement énumérable est récursif ",
  "response":0,
  "justification":"récursivement énumérable n’implique pas récursif (HALT)"
  },
  {
  "assertion":"Il existe des ensembles récursifs ne pouvant être décidés par un automate fini",
  "response":1 ,
  "justification":"automate fini se termine toujours donc pas complet"
  },
  {
  "assertion":"Tout automate à pile peut être représenté par un automate fini. ",
  "response":0,
  "justification":"La pile est plus fort que l’automate fini"
  },
  {
  "assertion":"Les grammaires sensibles au contexte permettent de définir plus de langages que les grammaires hors-contextes.",
  "response":1,
  "justification":"cfr diagramme :Les grammaires hors-contexte ne permettent de définir que des langages récursifs. 1 : Même si c’est hors contexte, toujours fini, toujours !"
  },
  {
  "assertion":"Les grammaires sensibles au contexte ne permettent de définir que des langages récursifs. ",
  "response":1 ,
  "justification":"Que les grammaires les plus générales qui peuvent boucler"
  },
  {
  "assertion":"Tout langage reconnu par un automate fini peut être reconnu par un automate à pile ",
  "response":1,
  "justification":"Les automates à pile sont plus généraux que les automates finis"
  },
  {
  "assertion":"Tout langage récursif peut être décrit par une grammaire hors contexte ",
  "response":0,
  "justification":"Les grammaires hors-contextes s’arrêtent toujours. Par Hoare Allison, elles ne peuvent couvrir tous les langages récursifs."
  },
  {
  "assertion":"Tout automate fini 0 déterministe peut être transformé en un automate fini déterministe équivalent",
  "response":1 ,
  "justification":"(TP)"
  },
  {
  "assertion":"Un sous-ensemble d’un langage régulier est un langage régulier ",
  "response":0 ,
  "justification":"(TP)"
  },
  {
  "assertion":"Une Machine de Turing est un modèle abstrait ne pouvant pas être exécuté.",
  "response":0,
  "justification":"On peut tout à fait la simuler avec un programme Java ..."
  },
  {
  "assertion":"Une Machine de Turing dont le ruban serait fini à gauche ne serait pas un modèle complet de la calculabilité.",
  "response":0,
  "justification":"Cette variante peut être ramenée à une machine de Turing classique."
  },
  {
  "assertion":"Une Machine de Turing dont les seuls mouvements de la tête de lecture serait à droite ne serait pas un modèle complet de la calculabilité.",
  "response":1,
  "justification":"Ca peut pas être plus puissant qu’une machine a état fini vu que ça ne lit qu’une fois chaque input."
  },
  {
  "assertion":"Une Machine de Turing ne calcule que des fonctions totales.",
  "response":0,
  "justification":""
  },
  {
  "assertion":"Soit A un ensemble récursivement énumérable mais non récursif. Une Machine de Turing avec A comme oracle est plus puissante qu’une machine de Turing sans oracle.",
  "response":1,
  "justification":"Une telle machine peut décider K par exemple"
  },
  {
  "assertion":"Une machine de Turing universelle nécessite l’utilisation d’au moins trois rubans",
  "response":0,
  "justification":"Une possible implémentation utilise trois rubans"
  },
  {
  "assertion":"Toute fonction T-calculable est effectivement calculable",
  "response":1,
  "justification":"Théorème Church-Turing"
  },
  {
  "assertion":"Une machine de Turing non déterministe permet de calculer plus de fonctions",
  "response":0,
  "justification":"C’est aussi puissant"
  },
  {
  "assertion":"Soit une MT T qui reçoit en entrée une représentation d'une MT et qui fournit (toujours) comme résultat une représentation d'une MT. Il existe deux MT T1 et T2 tel que (1) l'exécution de T sur la représentation de T1 donne pour résultat T2, (2) T1 et T2 calculent la même fonction",
  "response":1,
  "justification":"J’imagine qu’il y a une faute dans l’énoncé et qu’en réalité, c’est : (1) ’exécution de T sur la représentation de T1 donne pour résultat T2. Dans ce cas, c’est 1 par le théorème du point fixe."
  },
  {
  "assertion":"Les fonctions primitives récursives sont toujours des fonctions totales.",
  "response":1,
  "justification":"Fonctions primitives récursives équivalentes à BLOOP."
  },
  {
  "assertion":"Il existe des fonctions totales calculables qui ne sont pas primitives récursives",
  "response":1 ,
  "justification":"Hoare-Allison"
  },
  {
  "assertion":"Toute fonction calculable peut être calculée par une fonction récursive",
  "response":1,
  "justification":"Modèle complet"
  },
  {
  "assertion":"Toute fonction calculable peut être calculée par une expression lambda",
  "response":1,
  "justification":"Modlèe complet"
  },
  {
  "assertion":"Toute expression lambda possède au moins une forme réduite",
  "response":0,
  "justification":"Sur certaines expressions lambda, une réduction peut être appliquée de manière infinie, indépendamment de la stratégie de réduction choisie."
  },
  {
  "assertion":"Le lambda calcul est un modèle complet de calculabilité ",
  "response":1,
  "justification":""
  },
  {
  "assertion":"Le lambda calcul est un modèle théorique sans utilité pratique",
  "response":0,
  "justification":"On peut prouver des théorèmes grâce au lambda calcul."
  }
]
