import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="player1"
export default class extends Controller {
  start() {
    console.log("player1 Connected");
    const Http = new XMLHttpRequest();
    let p1positionx = 150;
    let p1positiony = 100;
    let p1connected = true;
    let data = "";
    let url = "";
    data = `p1positionx=${p1positionx}&p1positiony=${p1positiony}&p1connected=${p1connected}`;
    url=`http://89.176.60.157/homes?${data}`;
    Http.open("POST", url);
    Http.send();
    window.addEventListener("keydown", function (event) {
      let speed = 5;
      data = `p1positionx=${p1positionx}&p1positiony=${p1positiony}`;
      url=`http://89.176.60.157/homes?${data}`;
      if (event.defaultPrevented) {
        return;
      }
      switch (event.key) {
        case "w":
          console.log("w");
          let w = speed;
          p1positionx += 0
          p1positiony -= speed ;
          data = `p1positionx=${p1positionx}&p1positiony=${p1positiony}`;
          url=`http://89.176.60.157/homes?${data}`;
          Http.open("POST", url);
          Http.send();
          break;
        case "s":
          console.log("s");
          let s = speed;
          p1positionx += 0;
          p1positiony += speed;
          data = `p1positionx=${p1positionx}&p1positiony=${p1positiony}`;
          url=`http://89.176.60.157/homes?${data}`;
          Http.open("POST", url);
          Http.send();
          break;
        case "a":
          console.log("a");
          let a = speed;
          p1positionx -= speed;
          p1positiony += 0;
          data = `p1positionx=${p1positionx}&p1positiony=${p1positiony}`;
          url=`http://89.176.60.157/homes?${data}`;
          Http.open("POST", url);
          Http.send();
          break;
        case "d":
          console.log("d");
          let d = speed;
          p1positionx += speed;
          p1positiony += 0;
          data = `p1positionx=${p1positionx}&p1positiony=${p1positiony}`;
          url=`http://89.176.60.157/homes?${data}`;
          Http.open("POST", url);
          Http.send();
          break;
        default:
          return;
      }
      event.preventDefault();
    }, true);
  }
}
