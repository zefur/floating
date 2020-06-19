//let welcome = getElementById("welcome")
let change = document.getElementById("32");
let modeFloating = true;


const explode = letter => {
  let pos = 10;
  let c = setInterval(frame, 1);
  function frame() {
    pos++;
    if (pos == 300) {
      clearInterval(c);
    } else {
      let b = Math.floor(Math.random() * 8);
      switch (b) {
        case 0:
          letter.style.top = pos + "px";
          break;
        case 1:
          letter.style.left = pos + "px";
          break;
        case 2:
          letter.style.top = -pos + "px";
          break;
        case 3:
          letter.style.left = -pos + "px";
          break;
        case 4:
          letter.style.top = -pos + "px";
          letter.style.left = pos + "px";
          break;
        case 5:
          letter.style.top = pos + "px";
          letter.style.left = pos + "px";
          break;
        case 6:
          letter.style.top = -pos + "px";
          letter.style.left = -pos + "px";
          break;
        case 7:
          letter.style.top = pos + "px";
          letter.style.left = +pos + "px";
        default:
          letter.style.top = " ";
          letter.style.left = " ";
          break;
      }
    }
  }
};

const floating = letter => {
  let pos = 10;
  let b = Math.floor(Math.random() * 8);
  let c = setInterval(frame, 1);
  function frame() {
    pos++;
    if (pos == 300) {
      clearInterval(c);
    } else {
      switch (b) {
        case 0:
          letter.style.top = pos + "px";
          break;
        case 1:
          letter.style.left = pos + "px";
          break;
        case 2:
          letter.style.top = -pos + "px";
          break;
        case 3:
          letter.style.left = -pos + "px";
          break;
        case 4:
          letter.style.top = -pos + "px";
          letter.style.left = pos + "px";
          break;
        case 5:
          letter.style.top = pos + "px";
          letter.style.left = pos + "px";
          break;
        case 6:
          letter.style.top = -pos + "px";
          letter.style.left = -pos + "px";
          break;
        case 7:
          letter.style.top = pos + "px";
          letter.style.left = +pos + "px";
        default:
          letter.style.top = " ";
          letter.style.left = " ";
          break;
      }
    }
  }
};

const modeChange = () => {
  if (modeFloating === true) {
    change.innerHTML = "EXPLODE";
    modeFloating = false;
    console.log(change)
    console.log("triggered")
  } else {
    change.innerHTML = "FLOAT";
    modeFloating = true;
   
  }
};

function moveItem(a) {
  let letter = document.getElementById(`${a.keyCode}`);
  let all = document.getElementsByClassName("key")
  if (a.key === " ") {
    modeChange();
    
  } else if (a.key === "Backspace") {
    
    for (var i = 0, len = all.length; i < len; i++) {
      var element = all[i]
      element.style.top = ""
      element.style.bottom = ""
      element.style.left = ""
      element.style.right = ""
    }
    console.log(all)
  } else {
    if (modeFloating) {
      floating(letter);
      console.log(a)
    } else {
      explode(letter);
    }
  }
}

window.addEventListener("keydown", moveItem);
