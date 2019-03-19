var state = {
  _actualPoints: 0,
  _question: 0,
  _actualJustification: "",
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
  //Setter
  set actualPoints(val) {
    this._actualPoints = val;
  },
  set question(val) {
    this._question = val;
  },
  set justification(val) {
    this._actualJustification = val;
  }
};

function launchTheorie() {
  $("#block-2").attr("class", "container-fluid bg-2 text-center");
  state.question = 0;
  state.actualPoints = 0;
  launchQuizz();
}

function launchQuizz() {

  if (state.question >= magistralCh3.length) {
    displayResult()
  } else {
    let question = getDemo();
    state.actualJustification = question['justification'];
    var flag;
    console.log("justification: "+state.actualJustification);
    if (state.actualJustification == "") {
      state.actualJustification = question['solution'];
      console.log("justification: "+state.actualJustification);
      flag = true;
    } else {
      flag = false;
    }
    renderAssertion(question, flag);
  }
}

function getDemo() {
  return magistralCh3[state.question]; // a modifier
}

function renderAssertion({
  question,
  justification,
  solution
}, flag) {
  $("#block-1").attr("class", "container-fluid bg-2 text-center");
  var html1 = '<div class="row">';
  html1 += '<h4> ' + question + ' </h4>';
  html1 += '</div>';
  $("#block-1").html(html1);
  $("#block-2").html("");
  var html = '<h4> Réponds sur une feuille à la question</h4>';
  html += '<div class="row">';
  html += '<div class="col s3">';
  html += '<a href="#" onclick="renderAnswer(\'' + solution + '\',' + flag + ')" class="btn btn-default ">Vérifie</a>';
  html += '</div>';
  html += '<div class="col s3">';
  html += '<a href="#" onclick="showScore()" class="btn btn-default">Mon score</a>';
  html += '</div>';
  html += '</div>';
  $("#block-2").html(html);
  $("#block-2").append();

}

function renderAnswer(filename, flag) {
  $("#popup").attr("class", "modal-content bg-3");
  $("#popup-title").html("La réponse !");
  console.log("justification: "+state.actualJustification+" flag:"+flag);
  if (flag) {
    console.log("in flag");
    $("#popup-body").html('<img src="./img/theorie/' + filename + '.png" class="img-responsive margin" style="display:inline">');
  } else {
    console.log("out flag");
    $("#popup-body").html('<p>'+state.actualJustification+'</p>');
  }
  $("#popup-footer").html('<a href="#" onclick="interpretResponse(1)" class="btn btn-default btn-lg bg-1" data-dismiss="modal">Ok c\'est bon</a>');
  $("#popup-footer").append('<a href="#" onclick="interpretResponse(0)" class="btn btn-default btn-lg bg-0" data-dismiss="modal">Non c\'est mauvais</a>');
  $("#myModal").modal("show");
}

function interpretResponse(answer, response) {

  if (answer == 1) {
    state.actualPoints += 1;
  }
  state.question += 1;
  launchQuizz();
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
  $("#block-2").append('<a href="#" onclick="launchTheorie()" class="btn btn-default btn-lg">Recommencez</a>');
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}
