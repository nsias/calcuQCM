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
function launchDemo(index) {
  $("#myModal").modal("hide");
  $("#block-2").attr("class", "container-fluid bg-2 text-center");
  state.question = 0;
  state.actualPoints = 0;
  selectedChap(index);
  launchQuizz();
}

function launchQuizz() {
  if (state.chapter != null) {
    if (state.question >= state.chapter.length) {
      displayResult()
    } else {
      let question = getDemo();
      state.actualJustification = question['solution'];
      renderAssertion(question);
    }
  }
}
function selectedChap(index){
  switch (index) {
  case 1:
    state.chapter = theoremCh1;
    return;
  case 2:
    state.chapter = theoremCh2;
    return;
  case 3:
    state.chapter = theoremCh3;
    return;
  case 4:
    state.chapter = theoremCh4;
    return;
  case 5:
    state.chapter = theoremCh5;
    return;
  case 7:
    state.chapter = theoremCh7;
    return;
  default:
    state.chapter = all();
    return;

  }
}
function all(){
  var res = theoremCh1.concat(theoremCh2,theoremCh3,theoremCh4,theoremCh5,theoremCh6,theoremCh7);
  return res;
}
function getChap(){
  state.chapter="";
  $("#popup").attr("class", "modal-content bg-3");
  $("#popup-title").html("Choisis le chapitre");
  var html = '<button type="submit" name="button" onclick="launchDemo(1)">Chapitre 1</button></br><button type="submit" name="button" onclick="launchDemo(2)">Chapitre 2</button></br><button type="submit" name="button" onclick="launchDemo(3)">Chapitre 3</button></br> <button type="submit" name="button" onclick="launchDemo(4)">Chapitre 4</button></br> <button type="submit" name="button" onclick="launchDemo(5)">Chapitre 5</button></br>  <button type="submit" name="button" onclick="launchDemo(7)">Chapitre 7</button></br> <button type="submit" name="button" onclick="launchDemo(0)">Tout</button>';
  $("#popup-body").html(html);
  $("#popup-footer").html("");
  $("#myModal").modal("show");
}
function getDemo() {
  return state.chapter[state.question];
}

function renderAssertion({
  name,
  enonce,
  solution
}) {
  $("#block-1").attr("class", "container-fluid bg-2 text-center");
  var html1 = '<div class="row">';
  html1 += '<h4> ' + name + ' </h4>';
  html1 += '</div>';
  html1 += '<div class="row">';
  html1 += '<div class="col s6" style="margin:10%;">'
  html1 += '<img src="./img/demo/' + enonce + '.png" class="img-responsive margin" style="display:inline" alt="Theorem Rice">'; //TODO modify for the selection
  html1 += '</div>';
  html1 += '</div>';
  $("#block-1").html(html1);
  $("#block-2").html("");
  var html = '<h4> Démontre sur une feuille à l\'énoncé </h4>';
  html += '<div class="row">';
  html += '<div class="col s3">';
  html += '<a href="#" onclick="renderAnswer(\'' + solution + '\')" class="btn btn-default ">Correction</a>';
  html += '</div>';
  html += '<div class="col s3">';
  html += '<a href="#" onclick="showScore()" class="btn btn-default">Mon score</a>';
  html += '</div>';
  html += '</div>';
  $("#block-2").html(html);
  $("#block-2").append();

}

function renderAnswer(filename) {
  $("#popup").attr("class", "modal-content bg-3");
  $("#popup-title").html("La réponse !");
  $("#popup-body").html('<img src="./img/demo/' + filename + '.png" class="img-responsive margin" style="display:inline">');//TODO modify for the selection
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
  $("#block-2").append('<a href="#" onclick="getChap()" class="btn btn-default btn-lg">Recommencez</a>');
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}
