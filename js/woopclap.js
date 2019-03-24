var state = {
  _actualPoints: 0,
  _question: 0,
  _actualJustification: "",
  _chapter:null,
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
  get chapter(){
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
  set chapter(val){
    this._chapter=val;
  }
};

function getChap(){
  state.chapter="";
  $("#popup").attr("class", "modal-content bg-3");
  $("#popup-title").html("Choisis le chapitre");
  $("#popup-body").load('./html/button_choice_chap.html');
  $("#popup-footer").html("");
  $("#myModal").modal("show");
}

function launch(index) {
  $("#myModal").modal("hide");
  $("#block-2").attr("class", "container-fluid bg-2 text-center");
  state.question = 0;
  state.actualPoints = 0;
  selectedChap(index);
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
function selectedChap(index){
  switch (index) {
  case 1:
    // $.getScript("./data/ch1.js")
    // .done(function(script, textStatus) {
    //   console.log(textStatus);
     state.chapter = woopclapCh1;
    // })
    // .fail(function(jqxhr, settings, exception) {
    //   console.log("ERROR: loading ");
    // });
    return;
  case 2:
    state.chapter = woopclapCh2;
    return;
  case 3:
    state.chapter = woopclapCh3;
    return;
  case 4:
    inBuilding();
    state.chapter = null;//woopclapCh4;
    return;
  case 5:
    inBuilding();
    state.chapter = null;//woopclapCh5;
    return;
  case 6:
    inBuilding();
    state.chapter = null;//woopclapCh6;
  case 7:
    inBuilding();
    state.chapter = null;//woopclapCh7;
    return;
  default:
    state.chapter = all();
    return;
  }
}
function all(){
  var res = woopclapCh1.concat(woopclapCh2,woopclapCh3);//,woopclapCh4,woopclapCh5,woopclapCh6,woopclapCh7);
  return res;
}
function renderQuestion({assertion, response, justification}) {
  $("#block-1").attr("class", "container-fluid bg-2 text-center");
  $("#block-1").html(assertion);
  $("#block-2").html("");
  $("#block-2").append('<a href="#" onclick="interpretResponse(1, '+response+')" class="btn btn-default btn-lg">Vrai</a> OU ');
  $("#block-2").append('<a href="#" onclick="interpretResponse(0,'+response+')" class="btn btn-default btn-lg">Faux</a>');
}

function renderGoodAnswer(){
  $("#myModal").modal("hide");
  $("#popup").attr("class", "modal-content bg-1");
  $("#popup-title").html("Bonne réponse !");
  $("#popup-button").html("Prochaine question");
  $("#popup-button").attr('onclick', 'launchQuizz()');
  $("#popup-body").html(state.actualJustification);
  $("#myModal").modal("show");
}

function renderBadAnswer(){
  $("#myModal").modal("hide");
  $("#popup").attr("class", "modal-content bg-0");
  $("#popup-title").html("Mauvaise réponse !");
  $("#popup-body").html(state.actualJustification);
  $("#popup-button").html("Prochaine question");
  $("#popup-button").attr('onclick', 'launchQuizz()');
  $("#myModal").modal("show");
}


function interpretResponse(answer, response) {
  if (answer == response) {
    state.actualPoints += 1;
    renderGoodAnswer();
  }
  else {
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
  $("#block-1").attr("class", "container-fluid bg-1 text-center");
  $("#block-1").html("Vous avez réussi " + state.actualPoints + " questions sur " + state.question);
  $("#block-2").attr("class", "container-fluid bg-1 text-center");
  $("#block-2").html("");
  $("#block-2").append('<a href="#" onclick="getChap()" class="btn btn-default btn-lg">Recommencez</a>');
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
