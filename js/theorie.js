var state = {
  _actualPoints: 0,
  _question: 0,
  _actualJustification: "",
  _chapter:null,
  _index:0,
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
  get index(){
    return this._index;
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
  },
  set index(val){
    this._index=val;
  }
};

function launch(index) {
  $("#myModal").modal("hide");
  $("#block-2").attr("class", "container-fluid bg-2 text-center");
  state.question = 0;
  state.actualPoints = 0;
  state.index=index
  selectedChap(state.index);
  launchQuizz();
}

function launchQuizz() {
  if (state.chapter != null) {
    if (state.question >= state.chapter.length) {
      displayResult()
    } else {
      let question = getDemo();
      state.actualJustification = question['justification'];
      var flag;
      if (state.actualJustification == "") {
        state.actualJustification = question['solution'];
        flag = true;
      } else {
        flag = false;
      }
      renderAssertion(question, flag);
    }
  }
}
function selectedChap(index) {
  switch (index) {
    case 1:
      state.chapter = magistralCh1;
      return;
    case 2:
      state.chapter = magistralCh2;
      return;
    case 3:
      state.chapter = magistralCh3;
      return;
    case 4:
      state.chapter = magistralCh4;
      console.log("not ready");
      //TODO
      // insert method to say it's in building and choose an athor chapter
      return;
    case 5:
      state.chapter = magistralCh5;
      return;
    case 6:
      state.chapter = magistralCh6;
      return;
    case 7:
      state.chapter = magistralCh7;
      return;
    default:
      state.chapter = all();
      return;
  }
}
function all(){
  var res = magistralCh1.concat(magistralCh2,magistralCh3,magistralCh4,magistralCh5,magistralCh6,magistralCh7);
  return res;
}
function getChap(){
  state.chapter="";
  state.index=0;
  $("#popup").attr("class", "modal-content bg-3");
  $("#popup-title").html("Choisis le chapitre");
  $("#popup-body").load("./html/button_choice_chap.html");
  $("#popup-footer").html("");
  $("#myModal").modal("show");
}
function getDemo() {
  return state.chapter[state.question]; // to modify with a pondaration
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
  if (flag) {
    $("#popup-body").html('<img src="./img/theorie/' + filename + '.png" class="img-responsive margin" style="display:inline">');
  } else {
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
  $("#block-2").html('<a href="#" onclick="launchTheorie('+state.index+')" class="btn btn-default btn-lg">Recommencez</a>');
  $("#block-2").append('<a href="#" onclick="getChap()" class="btn btn-default btn-lg">Autres chapitres</a>');
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}
