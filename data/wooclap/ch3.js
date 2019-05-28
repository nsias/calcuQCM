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
    "justification": "Il suffit d’écrire un programme (fini) qui compare l’input aux différents éléments de A et répond OUI si c’est un de ces éléments, et NON sinon."
  },
  {
    "assertion": "Le complément d’un ensemble récursif est récursif",
    "response": 1,
    "justification": "Algorithme \"inversé\""
  },
  {
    "assertion": "L’ensemble des rationnels est récursivement énumérable",
    "response": 1,
    "justification": "Un rationnel est une paire d’entier. L’ensemble des rationnels est récursif ; le programme recevant une paire d ;’entier dit toujours OUI."
  },
  {
    "assertion": "Un sous-ensemble infini d’un ensemble récursivement énumérable est récursivement énumérable",
    "response": 0,
    "justification": "On sait que N est récursivement énumérable et que le complément de K n’est pas récursivement énumérable. Or le complément de K est un sous-ensemble de N"
  },
  {
    "assertion": "Un sous-ensemble fini d’un ensemble énumérable est récursivement énumérable",
    "response": 1,
    "justification": "Un sous-ensemble fini est toujours récursif, donc récursivement énumérable."
  },
  {
    "assertion": "L’union d’une infinité énumérable d’ensembles récursivement énumérable est récursivement énumérable",
    "response": 0,
    "justification": "La diagonalisation ne fonctionne pas. Mais ce qui est vrai, c’est que l’union d’une infinité énumérable d’ensembles énumérables est énumérable."
  },
  {
    "assertion": "Le complément d’un ensemble récursivement énumérable est récursivement énumérable",
    "response": 0,
    "justification": "Si un ensemble et son complément sont récursivement énumérables, cet ensemble est alors récursif en alternant l’exécution du programme qui énumère l’ensemble et celle du programme qui énumère le complémentaire. Au bout d’un moment, l’un des deux doit bien s’arrêter. Etant donné que HALT est récursivement énumérable mais non récursif, cette affirmation ne peut être vraie."
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
    "justification": "On sait que N est récursivement énumérable et que le complément de K n’est pas récursivement énumérable. Or le complément de K est un sous-ensemble de N."
  },
  {
    "assertion": "Il existe des ensembles récursifs qui ne sont pas énumérables",
    "response": 0,
    "justification":"Récursif → récursivement énumrable → il existe une fonction d’énumération"
  },
  {
    "assertion": "Si le domaine d’une fonction est fini, alors cette fonction est calculable ",
    "response": 1,
    "justification": "Il suffit d’écrire un programme (fini) qui compare l’input a aux différents éléments du domaine et donne la valeur de f(a) lorsque a est dans le domaine. Sinon, l’algorithme retourne bottom."
  },
  {
    "assertion": "Si le domaine d’une fonction est infini, alors cette fonction est non calculable ",
    "response": 0,
    "justification": "La fonction f(n)=n+1 a un domaine infini et est calculable."
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
    "assertion": "Une fonction calculable peut être calculée par une infinité de programmes",
    "response": 1,
    "justification": "On peut modifier le programme avec une bête affectation, dès que c’est calculable c’est calculable par une infinité de programmes"
  },
  {
    "assertion": "Le complément de l’ensemble K est récursivement énumérable",
    "response": 0,
    "justification": "On sait que si un ensemble, ainsi que son complément sont tout deux récursivement énumérables, alors cet ensemble est récursif. On sait aussi que K est récursivement énumérable. Comme K n’est pas récursif, cette affirmation estr fausse."
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
    "justification": "Le domaine de cette fonction est N qui est récursif."
  },
  {
    "assertion": "Domaine n, tout les entiers, forcément récursif.Soit la fonction f (i) = 1 si φi(i) ̸=⊥ p, f (i) = 0 sinon. L’image de f est un ensemble récursif ? ",
    "response": 1,
    "justification": "Valeurs possibles 1 et 0, ensemble {0, 1} récursif"
  },
  {
    "assertion": "φ(i) dénote la fonction numéro i (selon l’énumération choisie pour les fonctions)",
    "response": 0,
    "justification": "φ_n désigne la fonction calculée par le programme numéro n. φ_n(i) désigne la valeur de cette fonction pour la donnée i."
  },
  {
    "assertion": "Il existe un langage de prog (non trivial) dans lequel la fonction halt est calculable",
    "response": 1,
    "justification": "MiniJava, tout le temps oui puisque ça s’arrête toujours."
  },
  {
    "assertion": "Il existe un langage de programmation (non trivial) dans lequel on peut programmer le fonction halt ainsi que l’interpréteur de ce langage",
    "response": 0,
    "justification": "Théorème de Hoare-Allison"
  },
  {
    "assertion": "Si un langage de programmation (non trivial) permet de programmer son interpréteur, alors la fonction halt est calculable dans ce langage",
    "response": 0,
    "justification": "Théorème de Hoare-Allison"
  },
  {
    "assertion": "Il n’existe pas de langage de programmation (non trivial) dans lequel toutes les fonctions calcu- lées sont totales",
    "response": 0,
    "justification": "MiniJava ou BLOOP"
  },
  {
    "assertion": "Il n’existe pas de langage de programmation ne permettant de calculer que toutes les fonctions totales calculables",
    "response": 1,
    "justification": "il n’existe pas. On doit accepter que ça boucle pour obtenir toutes les fonctipns totales calculables. Si on se limite aux fonctions totales, l’interpréteur est une fonction totale qui n’est pas calculable dans ce langage. Ajouter que ceci est une conséquence de Hoare-Allison"
  },
  {
    "assertion": "Il existe une fonction totale calculable qui n’est l’extension d’aucune fonction partielle calculable",
    "response": 0,
    "justification": "Si on a une totale calculable, il y a un programme, le programme s’arrête. Le programme qui boucle toujours, fonction partielle vide est calculable. Toutes les fonctipns totales calculables sont extension de cette fonction partielle vide."
  },
  {
    "assertion": "Il existe une fonction partielle calculable telle qu’aucune fonction totale calculable n’est une extension de cette fonction partielle",
    "response": 1,
    "justification": "Par diagonalisation"
  },
  {
  "assertion": "L’ensemble des programmes Java calculant une fonction f telle que f(10)=10 est un ensemble récursif",
  "response":0,
  "justification":"théorème de Rice, classer les programmes qui calculent 10 à partir de 10"
  },
  {
  "assertion": "L’ensemble des programmes Java calculant une fonction f telle que f(10)=10 est un ensemble récursivement énumérable.",
  "response":1,
  "justification":"mais pas un théorème, Rice parle uniquement de la non récursivité.Récursivement énumérable, on exécute le programme pour la donnée 10 et on voit si il donne la réponse"
  },
  {
  "assertion": "Toute propriété relative aux programmes est non calculable",
  "response":0,
  "justification":"On peut décider des propriétés syntaxiques du programme tel que contient-il une variable de nom cpteur. La théorème de Rice dit que les propriétés relatives à la fonction calculée par le programme (ce qu’il faut) sont non calculables."
  },
  {
  "assertion": "Si A est un sous-ensemble (strict et non vide) récursif de programmes Java, alors toute fonction calculée par un programme de A est aussi calculée par un programme du complément de A",
  "response":0,
  "justification":"Il existe, pas pour tout !"
  },
  {
  "assertion":"La propriété S-m-n affirme que tout numéro de programme calculable peut être transformé en un numéro équivalent, mais avec moins de paramètres",
  "response":0,
  "justification":"ne veut rien dire"
  },
  {
  "assertion": "Les propriétés S-m-n et S sont équivalentes ",
  "response":0,
  "justification":"Propriété S = propriété S-m-n affaiblie"
  },
  {
  "assertion": "Tous les langages de programmation satisfont la propriété S-m-n ",
  "response":1,
  "justification":""
  },
  {
  "assertion":"Le théorème du point fixe est une conséquence du théorème de Rice",
  "response":0,
  "justification":"C'est l'inverse, on peut démontrer rice avec le point fixe"
  },
  {
  "assertion":"Si deux programmes P1 et P2 calculent la même fonction, alors il existe un transformateur f de programmes (f fonction totale calculable) , tel que f(P1)=P2",
  "response":1,
  "justification":"La fonction constante qui renvoie P2 est un tel transformateur. Mais ce résultat n’a rien à voir avec le point fixe."
  },
  {
  "assertion":"Si f est un transformateur de programmes (f fonction totale calculable), alors il existe deux programmes P1 et P2 tels que f(P1)=P2 ainsi que P1 et P2 calculent la même fonction",
  "response":1,
  "justification":"Théorème du point fixe !"
  },
  {
  "assertion":"Si f est un transformateur de programmes (f fonction totale calculable), alors il existe deux programmes P1 et P2 tels que f(P1)=P2 ainsi que P1 et P2 calculent la même fonction totale ",
  "response":0,
  "justification":"Pas totale pas forcément des fonctions qui se terminent toujours (faire boucler)"
  },
  {
  "assertion":"Le théorème du point fixe permet de démontrer que la fonction halt est non calculable ",
  "response":1,
  "justification":"Théorème du PF est la base"
  },
  {
  "assertion":"L’ensemble des nombres réels calculables est énumérable ",
  "response":1,
  "justification":"Un nombre réel calculable est un nombre réel pouvant être approximé par un programme. Comme l’ensemble des programmes est énumérable, l’ensemble des nombres réels calculables est aussi énumérable."
  }
]
