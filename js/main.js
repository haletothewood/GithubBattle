$(document).ready(function(){
  $('#findPlayers').on('click', function(e) {
    let player1 = $('#player1').val();
    let player2 = $('#player2').val();



    $('#player1').val('')
    $('#player2').val('')
    e.preventDefault();
  });
});