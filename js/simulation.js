var state = {
  _actualPoints : 0,
  _maxPoints : 7,
  _question : 0,
  _actualJustification : "",
  // Getters
  get actualPoints() {
    return this._actualPoints;
  },
  get maxPoints() {
    return this._maxPoints;
  },
  get question() {
    return this._question;
  },
  get justification() {
    return this._actualJustification;
  },
  //Setter
  set actualPoints(val) {
    this._actualPoints = val;
  },
  set maxPoints(val) {
    this._maxPoints = val;
  },
  set question(val) {
    this._question = val;
  },
  set justification(val) {
    this._actualJustification = val;
  }
};

function launchSimulation() {
  // TODO fix more parameters
  $("#block-2").attr("class", "container-fluid bg-2 text-center");
  state.question = 0;
  state.actualPoints = 0;
  nextQuestion();
}

function nextQuestion() {
  state.question += 1;
  if (state.question > state.maxPoints) {
    displayResult();
  }
  else {
    let question = pickQuestion(); //TODO rename that, can be confused
    state.actualJustification = question['justification'];
    renderQuestion(question);
  }
}

function pickRandomChapter() {  //TODO add more chapter and pick random
  let index = randomInteger(1,2);
  switch(index) {
  case 1:
    console.log("Hé");
    return wooclapCh1;
    break;
  case 2:
  console.log("Ho");
    return wooclapCh2;
    break;
  default:
    return wooclapCh2;
}
}

function pickQuestion() {  // TODO read from json file + avoid pick same question
  return pickRandomChapter()[randomInteger(0, 7)];
}

function renderQuestion({assertion, response, justification}) {
  $("#block-1").attr("class", "container-fluid bg-2 text-center");
  $("#block-1").html(assertion);
  $("#block-2").html("");
  $("#block-2").append('<a href="#" onclick="interpretResponse(1, '+response+')" class="btn btn-default btn-lg">Vrai</a> OU ');
  $("#block-2").append('<a href="#" onclick="interpretResponse(0,'+response+')" class="btn btn-default btn-lg">Faux</a>');
}

function renderGoodAnswer(){
  $("#popup").attr("class", "modal-content bg-1");
  $("#popup-title").html("Bonne réponse !");
  $("#popup-body").html(state.actualJustification);
  $("#myModal").modal("show");
}

function renderBadAnswer(){
  $("#popup").attr("class", "modal-content bg-0");
  $("#popup-title").html("Mauvaise réponse !");
  $("#popup-body").html(state.actualJustification);
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
  nextQuestion();
}

function displayResult() {
  $("#block-1").attr("class", "container-fluid bg-1 text-center");
  $("#block-1").html("Vous avez réussi "+ state.actualPoints +" questions sur "+ state.maxPoints);
  $("#block-2").attr("class", "container-fluid bg-1 text-center");
  $("#block-2").html("");
  $("#block-2").append('<a href="#" onclick="launchSimulation()" class="btn btn-default btn-lg">Recommencez</a>');
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}
