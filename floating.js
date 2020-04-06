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
    document.getElement("body").style.backgroundImage = url(
      "atomic-bomb-beach-black-and-white-73909.jpg"
    );
  } else {
    change.innerHTML = "FLOAT";
    modeFloating = true;
    document.getElement("body").style.backgroundImage = url(
      "abstract-art-artistic-1020315.jpg"
    );
  }
};

function moveItem(a) {
  let letter = document.getElementById(`${a.keyCode}`);
  if (a.key === " ") {
    modeChange();
  } else if (a.key === "backspace") {
    document.getElementByClass("key").reset();
  } else {
    if (modeFloating) {
      floating(letter);
    } else {
      explode(letter);
    }
  }
}

window.addEventListener("keydown", moveItem);
