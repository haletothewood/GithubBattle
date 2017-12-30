$(document).ready(function(){
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
          $('#battle').html(`
          <div class="row">
            <div class="col-xs-5 card">
              <h2 class="card-header">
                ${player1.name}
              </h2>
              <div class="card-body">
                <div class="col-s3">
                  <img style="width:100%" src="${player1.avatar_url}">
                </div>
              </div>
            </div>
            <div class="col-xs-2">
              <h1>Vs</h1>
            </div>
            <div class="col-xs-5 card">
              <h2 class="card-header">
                ${player2.name}
              </h2>
              <div class="card-body">
                <div class="col-s3">
                  <img style="width:100%" src="${player2.avatar_url}">
                </div>
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