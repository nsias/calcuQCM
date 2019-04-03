var state = {
  _actualPoints: 0,
  _question: 0,
  _actualQuestion: null,
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
  get actualQuestion(){
    return this._actualQuestion;
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
  },
  set actualQuestion(val){
    this._actualQuestion = val
  }
};

const tableOfChapter = new Map();
var feedBackStack;
const askedQuestions =  new Map();

function getChap(){
  state.chapter=[];
  tableOfChapter.clear();
  feedBackStack = [];
  askedQuestions.clear();
  $("#popup").attr("class", "modal-content bg-3");
  $("#popup-title").html("Choisis le chapitre");
  $("#popup-body").load("./html/button_choice_chap.html");
  $("#popup-footer").html('<a href="#" onclick="launch()" class="btn btn-default">C\'est parti !</a>');
  $("#myModal").modal("show");
}
function add(str) {
  if (!tableOfChapter.has(str)) {
    console.log("add "+str);
    tableOfChapter.set(str, str);
  }
}

function remove(str) {
  if (tableOfChapter.has(str)) {
    console.log("remove "+str);
    tableOfChapter.delete(str);
  }
}

function launch() {
  $("#myModal").modal("hide");
  $("#block-progressbar").load("./html/progressbar.html");
  $("#block-2").attr("class", "container-fluid bg-2 text-center");
  state.question = 0;
  state.actualPoints = 0;
  state.actualQuestion=null;
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
      let question = getRandQuestion();
      state.actualQuestion = question;
      state.actualJustification = question['solution'];
      renderAssertion(question);
    }
  }
}
function getDemo() {
  return state.chapter[state.question];
}
function getRandQuestion(){
  var rand = randomInteger(0,state.chapter.length);
  console.log(rand);
  let question = state.chapter[rand];
  if(!askedQuestions.has(question['name'])){
    console.log("add np asked question")
    askedQuestions.set(question['name'],question);
    return question;
  }
  if(state.question >= state.chapter.length){
    console.log("Trop loin");
  }
  return getRandQuestion();
}
function selectedChap(index){
  console.log("in selection with "+index);
  switch (index) {
  case "Chapitre 1":
    state.chapter = state.chapter.concat(theoremCh1);
    return;
  case "Chapitre 2":
    state.chapter = state.chapter.concat(theoremCh2);
    return;
  case "Chapitre 3":
    state.chapter = state.chapter.concat(theoremCh3);
    return;
  case "Chapitre 4":
    state.chapter = state.chapter.concat(theoremCh4);
    return;
  case "Chapitre 5":
    state.chapter = state.chapter.concat(theoremCh5);
    return;
  case "Chapitre 6":
    $("#popup").attr("class", "modal-content bg-3");
    $("#popup-title").html("Information");
    $("#popup-body").html("Auncune démonstration pour ce chapitre !");
    return;
  case "Chapitre 7":
    state.chapter = state.chapter.concat(theoremCh7);
    return;
  default:
    console.log("all");
    state.chapter = all();
    return;

  }
}
function all(){
  var res = theoremCh1.concat(theoremCh2,theoremCh3,theoremCh4,theoremCh5,theoremCh7);
  return res;
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
  html1 += '<div class="row" style="magrin-top:1%;margin-bottom:1%;">';
  html1 += '<div class="col s6" >'
  html1 += '<img src="./img/demo/' + enonce + '.png" class="img-responsive" style="display:inline" alt="Theorem Rice">'; //TODO modify for the selection
  html1 += '</div>';
  html1 += '</div>';
  $("#block-1").html(html1);
  $("#block-2").html("");
  var html = '<h4> Démontre sur une feuille à l\'énoncé </h4>';
  html += '<a href="#" onclick="renderAnswer(\'' + solution + '\')" class="btn btn-default "style="margin-right:1%;">Correction</a>';
  html += '<a href="#" onclick="showScore()" class="btn btn-default">Mon score</a>';

  $("#block-2").html(html);
  $("#block-2").append();

}

function renderAnswer(filename) {
  $("#popup").attr("class", "modal-content bg-3");
  $("#popup-title").html("La réponse !");
  $("#popup-body").html('<img src="./img/demo/' + filename + '.png" class="img-responsive margin" style="display:inline">');
  $("#popup-footer").html('<a href="#" onclick="interpretResponse(1)" class="btn btn-default btn-lg bg-1" data-dismiss="modal">Ok c\'est bon</a>');
  $("#popup-footer").append('<a href="#" onclick="interpretResponse(0)" class="btn btn-default btn-lg bg-0" data-dismiss="modal">Non c\'est mauvais</a>');
  $("#myModal").modal("show");
}

function interpretResponse(answer) {

  if (answer == 1) {
    state.actualPoints += 1;
  }else{
    feedBackStack = feedBackStack.concat(getDemo()['name']);
  }
  state.question += 1;
  updateProgressBar();
  launchQuizz();
}

function showScore() {
  $("#popup-score").attr("class", "modal-content bg-3");
  $("#popup-title-score").html("Ton score actuel est :");
  $("#popup-body-score").html(state.actualPoints + " sur " + (state.question));

  $("#myModal-score").modal("show");
}

function displayResult() {
  if (((state.actualPoints/state.chapter.length)*100)<70) {
    $("#block-1").attr("class", "container-fluid bg-0 text-center");
    $("#block-2").attr("class", "container-fluid bg-0 text-center");
  } else {
    $("#block-1").attr("class", "container-fluid bg-1 text-center");
    $("#block-2").attr("class", "container-fluid bg-1 text-center");
  }
  var q;
  if (state.actualPoints <2) {
    q= " question";
  } else {
    q= " questions"
  }
  $("#block-1").html("Vous avez réussi " + state.actualPoints + q+" sur " + state.question);
  $("#block-2").html("");
  $("#block-2").html('<a href="#" onclick="launch()" class="btn btn-default btn-lg" style="margin-right:1%;">Recommencez</a>');
  $("#block-2").append('<a href="#" onclick="getChap()" class="btn btn-default btn-lg style="margin-right:1%;">Autres chapitres</a>');
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
function updateProgressBar(){
  var val = Math.floor(getPercent());
  $("#myProgressBar").css('width',val+"%").attr('aria-valuenow',val);
  $("#myProgressBar").html(val+"%");
}

function getPercent(){
  return (state.question/state.chapter.length)*100;
}
