$(document).ready(function(){
  let battle = new Battle()
  $('#findPlayers').on('click', function(e) {
    let player1Name = $('#player1').val();
    let player2Name = $('#player2').val();
    let gitHubAccess = {
      client_id: 'b0b8ceeddc474e0ca482',
      client_secret: 'd59d74728ee7d58f0fa6b1e8df1f574183ca7696'
    }
  
    $.ajax({
      url: 'https://api.github.com/users/'+player1Name,
      data: gitHubAccess
    }).done(function(player1){
      $.ajax({
        url: 'https://api.github.com/users/'+player2Name,
        data: gitHubAccess
      }).done(function(player2){
        $('#findPlayersForm').hide()
          $('#battle').html(`
          ${battle.fight(player1, player2)}
          <div class="row">
            <div class="col-md-5 card">
              <h2 class="card-header">
                ${player1.name}
              </h2>
              <div class="card-body">
                <img style="width:100%" src="${player1.avatar_url}">
              </div>
            </div>
            <div class="col-md-2">
              <h1>Versus</h1>
            </div>
            <div class="col-md-5 card">
              <h2 class="card-header">
                ${player2.name}
              </h2>
              <div class="card-body">
                <img style="width:100%" src="${player2.avatar_url}">
              </div>
            </div>
          </div>
          `)
      })
    });

    $('#player1').val('')
    $('#player2').val('')
    e.preventDefault();
  });
});