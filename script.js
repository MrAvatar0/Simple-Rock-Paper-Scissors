var cpuCount = 0;
playerCount = 0;
const playerHand = document.getElementById("playerHand");
const cpuHand = document.getElementById("cpuHand");
const moves = ["./img/rock.png", "./img/paper.png", "./img/scissors.png"];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  var rock = async function() {
  
      await shakeHands();
      const a = Math.floor(Math.random() * 3);
      switch (a) {
          case 1:
              cpuWin()
              break;
          case 2:
              playerWin()
              break;
      
          default:
              break;
      }
      cpuHand.src = moves[a]
  }

  var paper = async function() {
  
      await shakeHands();
      const a = Math.floor(Math.random() * 3);
      switch (a) {
          case 2:
              cpuWin()
              break;
          case 0:
              playerWin()
              break;
      
          default:
              break;
      }
      cpuHand.src = moves[a]
     playerHand.src = "./img/paper2.png"
  }

  var scissors = async function() {
  
      await shakeHands();
      const a = Math.floor(Math.random() * 3);
      switch (a) {
          case 0:
              cpuWin()
              break;
          case 1:
              playerWin()
              break;
      
          default:
              break;
      }
      cpuHand.src = moves[a]
     playerHand.src = "./img/scissors2.png"
  }

async function cpuWin () {
    cpuCount++;
    document.getElementById('cpuScore').innerHTML = cpuCount;
}
async function playerWin () {
    playerCount++;
    document.getElementById('playerScore').innerHTML = playerCount;
}
async function shakeHands() {
    cpuHand.src = moves[0]
    playerHand.src = "./img/rock2.png"
    for (let i = 0; i < 3; i++) {
      playerHand.style.transform = "rotate(25deg)";
      cpuHand.style.transform = "rotate(-25deg)";
      await sleep(150);
  
      playerHand.style.transform = "rotate(0deg)";
      cpuHand.style.transform = "rotate(0deg)";
      await sleep(150);
    }
  }
