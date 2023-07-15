const entry = document.querySelector(".dataEntry") as HTMLInputElement;
const colorSelect = document.querySelector(".colorSelect") as HTMLInputElement;
const ASegment = document.querySelector(".A") as HTMLDivElement;
const BSegment = document.querySelector(".B") as HTMLDivElement;
const CSegment = document.querySelector(".C") as HTMLDivElement;
const DSegment = document.querySelector(".D") as HTMLDivElement;
const ESegment = document.querySelector(".E") as HTMLDivElement;
const FSegment = document.querySelector(".F") as HTMLDivElement;
const GSegment = document.querySelector(".G") as HTMLDivElement;
const root = document.querySelector(":root") as HTMLElement;
const buttonStartAnimation = document.querySelector(
  ".animate"
) as HTMLButtonElement;
const buttonCountDown = document.querySelector(
  ".countDown"
) as HTMLButtonElement;
const displayColor = document.querySelector(".display") as HTMLDivElement;
const colorButtons = document.querySelector(".color") as HTMLButtonElement;
let actualColor: string = "Ambar";

const arrSeg = [
  ASegment,
  BSegment,
  CSegment,
  DSegment,
  ESegment,
  FSegment,
  GSegment,
];

const colorTriangles = [
  "--colorA",
  "--colorB",
  "--colorC",
  "--colorD",
  "--colorE",
  "--colorF",
  "--colorG",
];

const arrNum0 = [0, 1, 2, 3, 4, 5];
const arrNum1 = [1, 2];
const arrNum2 = [0, 1, 6, 3, 4];
const arrNum3 = [0, 1, 2, 3, 6];
const arrNum4 = [1, 2, 5, 6];
const arrNum5 = [0, 2, 3, 5, 6];
const arrNum6 = [0, 2, 3, 4, 5, 6];
const arrNum7 = [0, 1, 2];
const arrNum8 = [0, 1, 2, 3, 4, 5, 6];
const arrNum9 = [0, 1, 2, 5, 6];

const arrays = [
  arrNum0,
  arrNum1,
  arrNum2,
  arrNum3,
  arrNum4,
  arrNum5,
  arrNum6,
  arrNum7,
  arrNum8,
  arrNum9,
];

entry.addEventListener("change", handleEvent);

colorSelect.addEventListener("change", () => {
  if (colorSelect.value == "Ambar") {
    entry.value = "-";
    clearDisplay();
    actualColor = "Ambar";
    displayColor.style.backgroundColor = "rgba(68, 35, 15, 0.322)";
    colorButtons.style.color = "goldenrod";
  } else if (colorSelect.value == "Green") {
    entry.value = "-";
    clearDisplay();
    actualColor = "Green";
    displayColor.style.backgroundColor = "#002000";
    colorButtons.style.color = "rgb(81, 188, 5)";
  } else if (colorSelect.value == "Blue") {
    entry.value = "-";
    clearDisplay();
    actualColor = "Blue";
    displayColor.style.backgroundColor = "#00FFFF";
    colorButtons.style.color = "#00FFFF";
  } else {
    entry.value = "-";
    clearDisplay();
    actualColor = "Red";
    displayColor.style.backgroundColor = "#200000";
    colorButtons.style.color = "red";
  }
});
document.addEventListener("keydown", handleEvent);
buttonStartAnimation.addEventListener("click", animate);
buttonCountDown.addEventListener("click", countDown);

function handleEvent() {
  clearDisplay();
  setDisplay();
}

function clearDisplay() {
  for (let i = 0; i < colorTriangles.length; i++) {
    root.style.setProperty(`${colorTriangles[i]}`, "rgba(218, 165, 32, 0.13)");
  }
  for (let j = 0; j < arrSeg.length; j++) {
    arrSeg[j].style.backgroundColor = "initial";
    arrSeg[j].style.boxShadow = "initial";
  }
}

function setDisplay() {
  for (let i = 0; i <= 9; i++) {
    if (entry.value == i.toString()) {
      setEntry(arrays[i]);
    }
  }
}

function setEntry(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (actualColor == "Ambar") {
      root?.style.setProperty(`${colorTriangles[arr[i]]}`, "goldenrod");
      arrSeg[arr[i]].style.backgroundColor = "goldenrod";
      arrSeg[arr[i]].style.boxShadow = "0px 0px 50px #ffe60085";
    } else if (actualColor == "Green") {
      root.style.setProperty(`${colorTriangles[arr[i]]}`, "#00FF00");
      arrSeg[arr[i]].style.backgroundColor = "#00FF00";
      arrSeg[arr[i]].style.boxShadow = "0px 0px 50px #73ff0085";
    } else if (actualColor == "Blue") {
      root.style.setProperty(`${colorTriangles[arr[i]]}`, "#0000FF");
      arrSeg[arr[i]].style.backgroundColor = "#0000FF";
      arrSeg[arr[i]].style.boxShadow = "0px 0px 50px #4c00ff85";
    } else {
      root.style.setProperty(`${colorTriangles[arr[i]]}`, "#FF0000");
      arrSeg[arr[i]].style.backgroundColor = "#FF0000";
      arrSeg[arr[i]].style.boxShadow = "0px 0px 50px #ff330085";
    }
  }
}

function getRandom(list: any) {
  return list[Math.floor(Math.random() * list.length)];
}

function animate() {
  clearDisplay();
  entry.value = "-";
  let interval = 400;
  let arrColors = ["green", "purple", "blue", "salmon", "pink", "red", "white"];
  let arrNumb: number[] = [0, 1, 2, 3, 4, 5, 6];

  setTimeout(() => {
    buttonStartAnimation.disabled = true;
    buttonCountDown.disabled = true;
    entry.disabled = true;
    colorSelect.disabled = true;
    buttonStartAnimation.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
    root.style.setProperty("--colorA", "green");
    ASegment.style.backgroundColor = "green";
  }, interval);

  for (let i = 1; i < 35; i++) {
    setTimeout(() => clearDisplay(), (interval += 100));
    let color = getRandom(arrColors);
    let x = getRandom(arrNumb);
    setTimeout(() => {
      root.style.setProperty(colorTriangles[x], color);
      arrSeg[x].style.backgroundColor = color;
    }, (interval += 5));
  }

  setTimeout(() => clearDisplay(), (interval += 100));

  setTimeout(() => {
    buttonStartAnimation.disabled = false;
    buttonCountDown.disabled = false;
    entry.disabled = false;
    colorSelect.disabled = false;
    buttonStartAnimation.style.backgroundColor = "initial";
    root.style.setProperty("--colorA", "green");
    ASegment.style.backgroundColor = "green";
  }, interval);

  setTimeout(() => clearDisplay(), (interval += 100));
}

function countDown() {
  clearDisplay();
  entry.value = "-";
  let interval = 1000;
  setTimeout(() => {
    buttonCountDown.disabled = true;
    buttonStartAnimation.disabled = true;
    entry.disabled = true;
    colorSelect.disabled = true;
    buttonCountDown.style.backgroundColor = "rgba(255, 0, 0, 0.555)";
    setEntry(arrNum9);
  }, (interval += 50));

  for (let i = 8; i > 0; i--) {
    setTimeout(() => clearDisplay(), (interval += 1000));

    setTimeout(() => {
      setEntry(arrays[i]);
    }, (interval += 50));
  }

  setTimeout(() => clearDisplay(), (interval += 1000));

  setTimeout(() => {
    buttonCountDown.disabled = false;
    buttonStartAnimation.disabled = false;
    entry.disabled = false;
    colorSelect.disabled = false;
    buttonCountDown.style.backgroundColor = "initial";
    setEntry(arrNum0);
  }, (interval += 50));

  setTimeout(() => clearDisplay(), (interval += 1000));
}
