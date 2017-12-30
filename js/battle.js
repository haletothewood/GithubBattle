(function (exports) {
  exports.Battle = function () {

    function fight (player1, player2) {
      if (score(player1) > score(player2)) {
        return "<h2>"+player1.name+" won!</h2>"
      } else {
        return "<h2>"+player2.name+" won!</h2>"
      }
    }

    function score (player) {
      let total = 0
      total += (player.followers * 4)
      total += (player.public_repos * 2)
      total += (player.public_gists * 2)
      total -= (player.following * 2)
      return total/10
    }

    return {
      fight: fight
    }
  }
})(this);