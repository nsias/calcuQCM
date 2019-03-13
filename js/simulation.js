var state = {
  _actualPoints : 0,
  _maxPoints : 7,
  _question : 0,
  _actualJustification : "",
  _questionsAsked : [],
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
  get questionsAsked() {
    return this._questionsAsked;
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
  },
  set questionsAsked(val) {
    this._questionsAsked = val;
  }
};

function launchSimulation() {
  // TODO fix more parameters
  $("#block-2").attr("class", "container-fluid bg-2 text-center");
  state.question = 0;
  state.actualPoints = 0;
  state.questionsAsked = [];
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
    return wooclapCh1;
    break;
  case 2:
    return wooclapCh2;
    break;
  default:
    return wooclapCh2;
  }
}

function getNbQuestionFromChapter(id) {
  switch(id) {
    case '1' : return  wooclapCh1.length;
    case '2' : return  wooclapCh2.length;
    case '3' : break;
    case 'all' : return (wooclapCh1.length + wooclapCh2.length);
    default : break;
  }
}

function addListenerOptions() {
  $("#checklist-options").on("change", function() {
    var length = 0;
    $.each($("input[name='checklist-options']:checked"), function(){
                  length += getNbQuestionFromChapter($(this).attr("id"));
    });
    var html = "";
    for (i = 1; i < length - 1; i ++) {
      html += '<option>'+i+'</option>';
    }
    $("#nbQuestionToAsk").html(html);
  });
}

function showPopupOptionsSimulation() {
  checklist = '<ul class="list-group" id="checklist-options" style="color:black;">';
  checklist += '<li class="list-group-item"><input type="checkbox" name="checklist-options" class="form-check-input" id="all" checked> <label class="form-check-label" for="exampleCheck1">Tout, comme à l\'examen !</label></li>';
  checklist += '<li class="list-group-item"><input type="checkbox" name="checklist-options" class="form-check-input" id="1"> <label class="form-check-label" for="exampleCheck1">Chapitre 1</label></li>';
  checklist += '<li class="list-group-item"><input type="checkbox" name="checklist-options" class="form-check-input" id="2"> <label class="form-check-label" for="exampleCheck1">Chapitre 2</label></li>';
  checklist += '<li class="list-group-item"><input type="checkbox" name="checklist-options" class="form-check-input" id="3" disabled> <label class="form-check-label" for="exampleCheck1">Chapitre 3</label></li>';
  checklist += '<li class="list-group-item"><input type="checkbox" name="checklist-options" class="form-check-input" id="4" disabled> <label class="form-check-label" for="exampleCheck1">Chapitre 4</label></li>';
  checklist += '<li class="list-group-item"><input type="checkbox" name="checklist-options" class="form-check-input" id="5" disabled> <label class="form-check-label" for="exampleCheck1">Chapitre 5</label></li>';
  checklist += '<li class="list-group-item"><input type="checkbox" name="checklist-options" class="form-check-input" id="6" disabled> <label class="form-check-label" for="exampleCheck1">Chapitre 6</label></li>';
  checklist += '<li class="list-group-item"><input type="checkbox" name="checklist-options" class="form-check-input" id="7" disabled> <label class="form-check-label" for="exampleCheck1">Chapitre 7</label></li>';
  checklist += '</ul>';
  checklist += 'Nombre de questions posées';
  checklist += '<select class="form-control" id="nbQuestionToAsk">';
  checklist += '<option>Comme à l\'examen ! </option>';
  checklist += '<option> 1 </option>';
  checklist += '</select>';
  $("#popup").attr("class", "modal-content bg-2");
  $("#popup-title").html("Ciblez les chapitres");
  $("#popup-body").html(checklist);
  $("#popup-button").html("C'est parti !");
  $("#myModal").modal("show");
  addListenerOptions();
}

function pickQuestion() {  //TODO avoid pick same question
  var questionPicked = pickRandomChapter()[randomInteger(0, pickRandomChapter().length)];
  if (state.questionsAsked.indexOf(questionPicked) != -1) {
    return pickQuestion();
  }
  else {
    state.questionsAsked.push(questionPicked);
    return questionPicked;
  }
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
