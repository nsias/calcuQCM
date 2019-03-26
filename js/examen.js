function inBuilding() {
  console.log("in the function");
  $("#block-1").attr("class", "container-fluid bg-1 text-center");
  $("#block-1").html("Désolé, en cours de développement... <br/><p><i class='fas fa-cog home fa-spin index-icon'></i></p>");
  $("#block-2").attr("class", "container-fluid bg-2 text-center");
  $("#block-2").html('<a href="index.html"  class="btn btn-default btn-lg"> Retour </a>');
}
