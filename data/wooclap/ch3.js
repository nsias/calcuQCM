var woopclapCh3 = [
  {
    "assertion": "Tout langage est récursif. Avec comme langage est un ensemble de strings, string fini sur un alphabet fini mais l’ensemble peut être infini. Avec comme alphabet : caractère O-9, string fini un entier Tout sous-ensemble de N est récursif ?",
    "response": 0,
    "justification": "Pas assez de programme pour décider tout les langages, nombre de sous-ensemble de N non dénombrable."
  },
  {
    "assertion": "Un ensemble énumérable est récursif",
    "response": 0,
    "justification": "Autant d’ensembles énumérables que de réels, pas assez de programmes"
  },
  {
    "assertion": "Un sous-ensemble infini d’un ensemble récursif est récursif",
    "response": 0,
    "justification": "On prend N, l’ensemble de tout les entiers, qui est récursif. Si la propriété était vraie, tout les sous-ensembles de N seraient aussi récursifs mais il y en a trop."
  },
  {
    "assertion": "Un ensemble fini A est récursif",
    "response": 1,
    "justification": "On peut écrire le programme qui énumère toutes les valeurs de A et les compare avec f(x)."
  },
  {
    "assertion": "Le complément d’un ensemble récursif est récursif",
    "response": 1,
    "justification": "Algorithme \"inversé\""
  },
  {
    "assertion": "L’ensemble des rationnels est récursivement énumérable",
    "response": 1,
    "justification": "Enumerable, mais récursivement énumérable? On peut écrire un algorithme qui les liste tous (diagonale)"
  },
  {
    "assertion": "Un sous-ensemble infini d’un ensemble récursivement énumérable est récursivement énumérable",
    "response": 0,
    "justification": "N est récursivement énumérables, à l’intérieur il y a des éléments pas récursivement énumérables"
  },
  {
    "assertion": "Un sous-ensemble fini d’un ensemble énumérable est récursivement énumérable",
    "response": 1,
    "justification": "Fonctionne toujours quand c’est infini"
  },
  {
    "assertion": "L’union d’une infinité énumérable d’ensembles récursivement énumérable est récursivement énumérable",
    "response": 0,
    "justification": "La diagonale ne fonctionne pas, la séquence d’ensemble est énumérable mais est-elle récursivement [Commentaire : je pense que c’est vrai : si on a une infinité énumérable d’ensembles, on peut faire un programme qui lance dans un thread différent le programme qui énumère chaque ensemble]"
  },
  {
    "assertion": "Le complément d’un ensemble récursivement énumérable est récursivement énumérable",
    "response": 0,
    "justification": "Si un ensemble et son complément sont récursivement énumérable, cet ensemble est récursif en alternant l’exécution du programme qui énumère l’ensemble et celle du programme qui énumère le complémentaire. Au bout d’un moment, l’un des deux doit bien s’arrêter."
  },
  {
    "assertion": "Une fonction dont la table est infinie est non calculable",
    "response": 0,
    "justification": "La fonction +1, la table est infinie mais est calculable"
  },
  {
    "assertion": "Un algorithme donné ne calcule qu’une et une seule fonction",
    "response": 1,
    "justification": "Programme Java calcule une seule fonction"
  },
  {
    "assertion": "Il existe des ensembles non récursivement énumérables ",
    "response": 1,
    "justification": "K ̄ est seulement co-récursivement énumérable."
  },
  {
    "assertion": "Une fonction calculable peut être calculée par une infinité de programmes",
    "response": 1,
    "justification": "On peut modifier le programme avec une bête affectation, dès que c’est calculable c’est calculable par une infinité de programmes"
  },
  {
    "assertion": "L’ensemble HALT est récursivement énumérable",
    "response": 1,
    "justification": "Si on exécute le programme et qu’on print 1 s’il se termine, on a un algorithme qui fait exactement ce qu’il faut pour être récursivement énumérable"
  },
  {
    "assertion": "Il existe des ensembles récursifs qui ne sont pas récursivement énumérables",
    "response": 0,
    "justification": "Récursif est plus fort que récursivement énumérable"
  },
  {
    "assertion": "Tout ensemble de paires d’entiers est récursif",
    "response": 0,
    "justification": "Halt est l’ensemble de paire d’entier, HALT n’est pas récursif"
  },
  {
    "assertion": "L’ensemble des sous-ensembles récursivement énumérables de N est énumérable",
    "response": 1,
    "justification": "Un ensemble récursivement énumérable est un ensemble qui peut être calculé par un programme, autant d’ensemble énumérables qu’il y a de programmes. Les sous-ensembles de N qui peuvent être reconnus par un programme sont énumérables"
  },
  {
    "assertion": "Un sous-ensemble d’un ensemble récursivement énumérable est récursivement énumérable",
    "response": 0,
    "justification": "N est récursivement énumérable. Si c’était le cas, il n’y aurait pas d’ensemble (sous-ensemble de N qui n’est pas récursivement énumérable.Commentaire Je pense pas que c’est si trivial que ça, ça voudrait dire qu’il existe un algo qui semi-décide si un ensemble est récursivement énumérable ou pas et donc il existe aussi un algo qui décide si un ensemble est récursif. Ca sort un peu du formalisme du cours qui se concentre sur N, voir Nn."
  },
  {
    "assertion": "Il existe des ensembles récursifs qui ne sont pas énumérables",
    "response": 0,
    "justification":"Récursif → récursivement énumrable → il existe une fonction d’énumération"
  },
  {
    "assertion": "Si le domaine d’une fonction est fini, alors cette fonction est calculable ",
    "response": 1,
    "justification": ""
  },
  {
    "assertion": "Si le domaine d’une fonction est infini, alors cette fonction est non calculable ",
    "response": 0,
    "justification": ""
  },
  {
    "assertion": "Une fonction constante est toujours calculable",
    "response": 1,
    "justification": "Le programe qui la décide est trivial"
  },
  {
    "assertion": "Un programme Java calcule une infinité de fonctions ",
    "response": 0,
    "justification": "Une seule fonction"
  },
  {
    "assertion": "L’ensemble HALT est récursivement énumérable ",
    "response": 1,
    "justification": ""
  },
  {
    "assertion": "Une fonction calculable peut être calculée par une infinité de programmes",
    "response": 1,
    "justification": "On peut modifier le programme avec une bête affectation, dès que c’est calculable c’est calculable par une infinité de programmes"
  },
  {
    "assertion": "Le complément de l’ensemble K est récursivement énumérable",
    "response": 0,
    "justification": "sachant que K comme Halt est récursivement énumérable, son complément le serait, et donc K serait récursif"
  },
  {
    "assertion": "Il existe des ensembles non récursivement énumérables",
    "response": 1,
    "justification": "Le complément de K n’est pas récursivement énumérable"
  },
  {
    "assertion": "Tout ensemble est récursivement énumérable ou co-récursivement énumérable ",
    "response": 0,
    "justification": "Ex : {n|φn est totale }"
  },
  {
    "assertion": "Soit la fonction f (i) = 1 si φi(i) ̸=⊥, f (i) = 0 sinon. La fonction f est calculable ?",
    "response": 0,
    "justification": "Fonction diag, forcément pas calculable [Commentaire : pour cette question et la suivante, c’est pas très clair vu que le domaine de définition de f n’est pas défini ...]"
  },
  {
    "assertion": "Soit la fonction f (i) = 1 si φi(i) ̸=⊥, f (i) = 0 sinon. Le domaine de f est récursif ? ",
    "response": 1,
    "justification": ""
  },
  {
    "assertion": "Domaine n, tout les entiers, forcément récursif.Soit la fonction f (i) = 1 si φi(i) ̸=⊥ p, f (i) = 0 sinon. L’image de f est un ensemble récursif ? ",
    "response": 1,
    "justification": "Valeurs possibles 1 et 0, ensemble {0, 1} récursif"
  },
  {
    "assertion": "φ(i) dénote la fonction numéro i (selon l’énumération choisie pour les fonctions)",
    "response": 0,
    "justification": "φ(i) est la fonction CALCULEE par le programme i. On numérote les programmes, pas les fonctions"
  },
  {
    "assertion": "Il existe un langage de prog (non trivial) dans lequel la fonction halt est calculable",
    "response": 1,
    "justification": "MiniJava, tout le temps oui puisque ça s’arrête toujours."
  },
  {
    "assertion": "Il existe un langage de programmation (non trivial) dans lequel on peut programmer le fonction halt ainsi que l’interpréteur de ce langage",
    "response": 0,
    "justification": ""
  },
  {
    "assertion": "Si un langage de programmation (non trivial) permet de programmer son interpréteur, alors la fonction halt est calculable dans ce langage",
    "response": 0,
    "justification": "alors la fonction Halt est non calculable"
  },
  {
    "assertion": "Il n’existe pas de langage de programmation (non trivial) dans lequel toutes les fonctions calcu- lées sont totales",
    "response": 0,
    "justification": ""
  },
  {
    "assertion": "Il n’existe pas de langage de programmation ne permettant de calculer que toutes les fonctions totales calculables",
    "response": 1,
    "justification": "il n’existe pas. On doit accepter que ça boucle pour obtenir toutes les fonctipns totales calculables. Si on se limite aux fonctions totales, l’interpréteur est une fonction totale qui n’est pas calculable dans ce langage."
  },
  {
    "assertion": "Il existe une fonction totale calculable qui n’est l’extension d’aucune fonction partielle calculable",
    "response": 0,
    "justification": "Si on a une totale calculable, il y a un programme, le programme s’arrête. Le programme qui boucle toujours, fonction partielle vide est calculable. Toutes les fonctipns totales calculables sont extension de cette fonction partielle vide."
  },
  {
    "assertion": "Il existe une fonction partielle calculable telle qu’aucune fonction totale calculable n’est une ex- tension de cette fonction partielle",
    "response": 1,
    "justification": "Par diagonalisation"
  }
]
