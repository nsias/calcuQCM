var state = {
  _actualPoints : 0,
  _question : 0,
  _actualJustification : "",
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
const nbrDemo = 10; //To modify when it's finish to encode demo

function launchDemo(){
  state.question = 0;
  state.actualPoints = 0;
  launchQuizz();
}

function launchQuizz(){
  state.question += 1;
  if (state.question > nbrDemo) {
    displayResult()
  }else{
    let question = getDemo();
    state.actualJustification = question['justification'];
    renderAssertion(question);
  }
}

function getDemo(){
  return theorems[0];// a modifier
}

function renderAssertion({name,filename}){
  $("#block-1").attr("class", "container-fluid bg-2 text-center");
  $("#block-1").html(name);
  $("#block-2").html("");
  $("#block-2").html('<a href="#" onclick="renderAnswer()" class="btn btn-default btn-lg">Correction</a>');
  $("#block-2").append('<a href="#" onclick="showScore()" class="btn btn-default btn-lg">Mon score</a>');

}

function renderAnswer({name,filename}){
  $("#popup").attr("class", "modal-content bg-3");
  $("#popup-title").html("La réponse !");
  $("#popup-body").append('<img src="img/'+filename+'.png" class="img-responsive margin" style="display:inline" alt="Theorem Rice">');
  $("#popup-footer").html('<a href="#" onclick="interpretResponse(1)" class="btn btn-default btn-lg bg-1" data-dismiss="modal">Ok c\'est bon</a>');
  $("#popup-footer").append('<a href="#" onclick="interpretResponse(0)" class="btn btn-default btn-lg bg-0" data-dismiss="modal">Non c\'est mauvais</a>');
  $("#myModal").modal("show");
}

function interpretResponse(answer, response) {

  if (answer == 1) {
    state.actualPoints +=1;
  }
  launchQuizz();
}

function showScore(){
  $("#popup-score").attr("class", "modal-content bg-3");
  $("#popup-title-score").html("Ton score actuel est :");
  $("#popup-body-score").html(state.actualPoints+" sur "+(state.question-1));

  $("#myModal-score").modal("show");
}

function displayResult() {
  $("#block-1").attr("class", "container-fluid bg-1 text-center");
  $("#block-1").html("Vous avez réussi "+ state.actualPoints +" questions sur "+ state.maxPoints);
  $("#block-2").attr("class", "container-fluid bg-1 text-center");
  $("#block-2").html("");
  $("#block-2").append('<a href="#" onclick="launchSimulation()" class="btn btn-default btn-lg">Recommencez</a>');
}
