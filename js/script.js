$(document).ready(function() {
$(".link_block1").mouseout(function(){
$(this).text("Мышка УШЛА :( ").css("display", "none")
});
$(".link_block1").mouseover(function(){
$(this).text("Мышка ПРИШЛА!!! :)").css("display", "block")
});
                              });