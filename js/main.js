let box1 = document.querySelector("#box-1");
let box2 = document.querySelector("#box-2");
let box3 = document.querySelector("#box-3");
let box4 = document.querySelector("#box-4");
let box5 = document.querySelector("#box-5");
let start = document.querySelector("#btn-start");
let stop = document.querySelector("#btn-stop");

// box1.style.marginTop = "10%";
let action = false;
const startRandom = () => {
  action = true;
  let r1, r2, r3, r4, r5;
  setInterval(() => {
    if (action) {
      r1 = Math.random() * 55;
      r2 = Math.random() * 50;
      r3 = Math.random() * 50;
      r4 = Math.random() * 50;
      r5 = Math.random() * 50;
      box1.style.marginTop = r1 + "%";
      box2.style.marginTop = r2 + "%";
      box3.style.marginTop = r3 + "%";
      box4.style.marginTop = r4 + "%";
      box5.style.marginTop = r5 + "%";
    }
  }, 700);
};
const stopRandom = () => {
  action = false;
};
start.addEventListener("click", startRandom);
stop.addEventListener("click", stopRandom);
