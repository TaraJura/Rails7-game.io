import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="player2"
export default class extends Controller {
  start() {
    console.log("player2 Connected");
    const Http = new XMLHttpRequest();
    let p2positionx = 100;
    let p2positiony = 100;
    let p2connected = true;
    let data = "";
    let url = "";
    data = `p2positionx=${p2positionx}&p2positiony=${p2positiony}&p2connected=${p2connected}`;
    url=`http://89.176.60.157/homes?${data}`;
    Http.open("POST", url);
    Http.send();
    window.addEventListener("keydown", function (event) {
      let speed = 5;
      data = `p2positionx=${p2positionx}&p2positiony=${p2positiony}`;
      url=`http://89.176.60.157/homes?${data}`;
      if (event.defaultPrevented) {
        return;
      }
      switch (event.key) {
        case "w":
          console.log("w");
          let w = speed;
          p2positionx += 0
          p2positiony -= speed ;
          data = `p2positionx=${p2positionx}&p2positiony=${p2positiony}`;
          url=`http://89.176.60.157/homes?${data}`;
          Http.open("POST", url);
          Http.send();
          break;
        case "s":
          console.log("s");
          let s = speed;
          p2positionx += 0;
          p2positiony += speed;
          data = `p2positionx=${p2positionx}&p2positiony=${p2positiony}`;
          url=`http://89.176.60.157/homes?${data}`;
          Http.open("POST", url);
          Http.send();
          break;
        case "a":
          console.log("a");
          let a = speed;
          p2positionx -= speed;
          p2positiony += 0;
          data = `p2positionx=${p2positionx}&p2positiony=${p2positiony}`;
          url=`http://89.176.60.157/homes?${data}`;
          Http.open("POST", url);
          Http.send();
          break;
        case "d":
          console.log("d");
          let d = speed;
          p2positionx += speed;
          p2positiony += 0;
          data = `p2positionx=${p2positionx}&p2positiony=${p2positiony}`;
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
