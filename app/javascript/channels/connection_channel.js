import consumer from "./consumer"

consumer.subscriptions.create("ConnectionChannel", {
  connected() {
    document.getElementById('status').innerText = 'connected';
    const Http = new XMLHttpRequest();
    let p1positionx = 150;
    let p1positiony = 100;
    let p2positionx = 100;
    let p2positiony = 100;
    document.getElementById('p1position').innerText = p1positionx + " " + p1positiony;
    document.getElementById('p2position').innerText = p2positionx + " " + p2positiony;
    let data = `p1positionx=${p1positionx}&p1positiony=${p1positiony}&p2positionx=${p2positionx}&p2positiony=${p2positiony}`;
    let url=`http://89.176.60.157/homes?${data}`;
    Http.open("POST", url);
    Http.send();
  },

  disconnected() {
    document.getElementById('status').innerText = 'disconnected';
  },

  received(response) {
    console.log(response.data);
    if (response.data.p1connected) { 
      document.getElementById('player1').innerText = 'connected';
      document.getElementById('p1connecteddiv').style.display = 'none';
    }
    if (response.data.p2connected) { 
      document.getElementById('player2').innerText = 'connected';
      document.getElementById('p2connecteddiv').style.display = 'none';
    }
    if (response.data.p1positionx) {
      document.getElementById('p1position').innerText = response.data.p1positionx + " " + response.data.p1positiony;
    }
    if (response.data.p2positionx) {
      document.getElementById('p2position').innerText = response.data.p2positionx + " " + response.data.p2positiony;
    }
    const Http = new XMLHttpRequest();
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let winner
    let p1 = true;
    let p2 = true;
    let player1size = 7;
    let player2size = 5;
    let oldp1positionx = document.getElementById('p1position').innerText.split(" ")[0];
    let oldp1positiony = document.getElementById('p1position').innerText.split(" ")[1];
    let oldp2positionx = document.getElementById('p2position').innerText.split(" ")[0];
    let oldp2positiony = document.getElementById('p2position').innerText.split(" ")[1];
    let p1position  
    let p2position  
    if (response.data.p1positionx) {
      p1position = { x: parseInt(response.data.p1positionx), y: parseInt(response.data.p1positiony) };
      p2position = { x: parseInt(oldp2positionx), y: parseInt(oldp2positiony) };
    } else {
      p1position = { x: parseInt(oldp1positionx), y: parseInt(oldp1positiony) };
      p2position = { x: parseInt(response.data.p2positionx), y: parseInt(response.data.p2positiony) };
    }
    function collision() {
      if (p2position.x == p1position.x && p2position.y == p1position.y) {
        return true;
      }
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(p1position.x, p1position.y, player1size, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
    function drawBall2() {
      ctx.beginPath();
      ctx.arc(p2position.x, p2position.y, player2size, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
    }
    function eat() {
      if (collision()) {
        p2 = false;
        winner = document.getElementById('winner').innerText = 'Player 1 win!';
        console.log(winner.length);
      }
    }

    if (document.getElementById('winner').innerHTML.length == 13) {
      p2 = false;
    }
    eat()
    if (p1) {
      drawBall();
    }
    if (p2) {
      console.log(p2);
      drawBall2();
    }
  }
});
