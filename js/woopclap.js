var state = {
  _actualPoints: 0,
  _question: 0,
  _actualJustification: "",
  _chapter: null,
  // Getters
  get actualPoints() {
    return this._actualPoints;
  },
  get question() {
    return this._question;
  },
  get justification() {
    return this._actualJustification;
  },
  get chapter() {
    return this._chapter;
  },
  //Setter
  set actualPoints(val) {
    this._actualPoints = val;
  },
  set question(val) {
    this._question = val;
  },
  set justification(val) {
    this._actualJustification = val;
  },
  set chapter(val) {
    this._chapter = val;
  }
};
const tableOfChapter = new Map();
var feedBackStack;

function getChap() {
  state.chapter = [];
  tableOfChapter.clear();
  feedBackStack = [];
  $("#popup").attr("class", "modal-content bg-3");
  $("#popup-title").html("Choisis le chapitre");
  $("#popup-body").load('./html/button_choice_chap.html');
  $("#popup-footer").html('<a href="#" onclick="launch()" class="btn btn-default">C\'est parti !</a>');
  $("#myModal").modal("show");
}
function add(str) {
  if (!tableOfChapter.has(str)) {
    tableOfChapter.set(str, str);
  }
}

function remove(str) {
  if (tableOfChapter.has(str)) {
    tableOfChapter.delete(str);
  }
}
function launch() {
  $("#myModal").modal("hide");
  $("#block-progressbar").load("./html/progressbar.html");
  $("#block-2").attr("class", "container-fluid bg-2 text-center");
  state.question = 0;
  state.actualPoints = 0;
  if (tableOfChapter.has('Tout')) {
    selectedChap('Tout');
  } else {
    for (const chap of tableOfChapter.values()) {
      console.log(chap);
      selectedChap(chap);
    }
  }
  if (state.chapter != null) {
    launchQuizz();
  }
}

function launchQuizz() {
  if (state.chapter != null) {
    if (state.question >= state.chapter.length) {
      displayResult()
    } else {
      let question = getWoopclap();
      state.actualJustification = question['justification'];
      renderQuestion(question);
    }
  }
}

function getWoopclap() {
  return state.chapter[state.question];
}

function selectedChap(index) {
  switch (index) {
    case "Chapitre 1":
      state.chapter = state.chapter.concat(woopclapCh1);
      return;
    case "Chapitre 2":
      state.chapter = state.chapter.concat(woopclapCh2);
      return;
    case "Chapitre 3":
      state.chapter = state.chapter.concat(woopclapCh3);
      return;
    case "Chapitre 4":
      state.chapter = state.chapter.concat(woopclapCh4);
      return;
    case "Chapitre 5":
      state.chapter = state.chapter.concat(woopclapCh5);
      return;
    case "Chapitre 6":
      state.chapter = state.chapter.concat(woopclapCh6);
    case "Chapitre 7":
      state.chapter = state.chapter.concat(woopclapCh7);
      return;
    default:
      state.chapter = all();
      return;
  }
}

function all() {
  var res = woopclapCh1.concat(woopclapCh2, woopclapCh3,woopclapCh4,woopclapCh5,woopclapCh6,woopclapCh7);
  return res;
}

function renderQuestion({
  assertion,
  response,
  justification
}) {
  $("#block-1").attr("class", "container-fluid bg-2 text-center");
  $("#block-1").html(assertion);
  $("#block-2").html("");
  $("#block-2").append('<a href="#" onclick="interpretResponse(1, ' + response + ')" class="btn btn-default btn-lg">Vrai</a> OU ');
  $("#block-2").append('<a href="#" onclick="interpretResponse(0,' + response + ')" class="btn btn-default btn-lg">Faux</a>');
}

function renderGoodAnswer() {
  $("#myModal").modal("hide");
  $("#popup").attr("class", "modal-content bg-1");
  $("#popup-title").html("Bonne réponse !");
  $("#popup-footer").html("<a>Prochaine question</a>");
  $("#popup-footer").attr('class', "btn btn-default btn-lg");
  $("#popup-footer").attr('data-dismiss', 'modal');
  $("#popup-footer").attr('onclick', 'updateProgressBar();launchQuizz();');
  $("#popup-body").html(state.actualJustification);
  $("#myModal").modal("show");
}

function renderBadAnswer() {
  $("#myModal").modal("hide");
  $("#popup").attr("class", "modal-content bg-0");
  $("#popup-title").html("Mauvaise réponse !");
  $("#popup-body").html(state.actualJustification);
  $("#popup-footer").html("<a>Prochaine question</a>");
  $("#popup-footer").attr('class', "btn btn-default btn-lg");
  $("#popup-footer").attr('data-dismiss', 'modal');
  $("#popup-footer").attr('onclick', 'updateProgressBar();launchQuizz();');
  $("#myModal").modal("show");
}


function interpretResponse(answer, response) {
  if (answer == response) {
    state.actualPoints += 1;
    renderGoodAnswer();
  } else {
    feedBackStack = feedBackStack.concat(getWoopclap()['assertion']);
    renderBadAnswer();
  }
  state.question += 1;
}


function showScore() {
  $("#popup-score").attr("class", "modal-content bg-3");
  $("#popup-title-score").html("Ton score actuel est :");
  $("#popup-body-score").html(state.actualPoints + " sur " + (state.question));

  $("#myModal-score").modal("show");
}

function displayResult() {
  if (((state.actualPoints/state.chapter.length)*100) < 70) {
    $("#block-1").attr("class", "container-fluid bg-0 text-center");
    $("#block-2").attr("class", "container-fluid bg-0 text-center");
  } else {
    $("#block-1").attr("class", "container-fluid bg-1 text-center");
    $("#block-2").attr("class", "container-fluid bg-1 text-center");
  }
  var q;
  if (state.actualPoints < 2) {
    q = " question";
  } else {
    q = " questions"
  }
  $("#block-1").html("Vous avez réussi " + state.actualPoints + q + " sur " + state.question);
  $("#block-2").html('<a href="#" onclick="launch()" class="btn btn-default btn-lg" style="margin-right:1%;">Recommencez</a>');
  $("#block-2").append('<a href="#" onclick="getChap()" class="btn btn-default btn-lg" style="margin-right:1%;">Autres chapitres</a>');
  $("#block-2").append('<a href="#" onclick="displayFeedback()" class="btn btn-default btn-lg">feedback</a>');
}
function displayFeedback(){
  $("#popup-score").attr("class", "modal-content bg-0");
  $("#popup-title-score").html("FEEDBACK");
  $("#popup-body-score").attr("class","bg-3 text-left")
  $("#popup-body-score").html("");
  feedBackStack.forEach(function(current,idx){
  $("#popup-body-score").append("question:"+current+"</br>");
  });

  $("#myModal-score").modal("show");
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

function inBuilding() {
  console.log("in the function");
  $("#block-1").attr("class", "container-fluid bg-1 text-center");
  $("#block-1").html("Désolé, en cours de développement... <br/><p><i class='fas fa-cog home fa-spin'></i></p>");
  $("#block-2").html('<a href="#" onclick="getChap()" class="btn btn-default btn-lg"> Un autres chapitres ?</a>');
}

function updateProgressBar() {
  var val = Math.floor(getPercent());
  console.log(val);
  $("#myProgressBar").css('width', val + "%").attr('aria-valuenow', val);
  $("#myProgressBar").html(val + "%");
}

function getPercent() {
  return (state.question / state.chapter.length) * 100;
}
