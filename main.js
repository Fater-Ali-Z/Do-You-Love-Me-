let no = document.querySelector(".no");
let yes = document.querySelector(".yes");
let h3 = document.querySelector("h3");
let h = document.querySelector(".fa-heart");
let arr = [50, 25, 75, 100, -50, -100, -75, -25];
let x = 0;
let y = 0;
no.onclick = function () {
  x = arr[Math.floor(Math.random() * 10)];
  y = arr[Math.floor(Math.random() * 10)];
  if (x === undefined) {
    x = arr[3];
  }
  if (y === undefined) {
    y = arr[3];
  }
  no.style.transform = `translate(${x}px, ${y}px)`;
  no.style.transition = "0.5s";
};
yes.onclick = function () {
  h3.innerHTML = "I Love You Too ";
  h3.style = `color : rgb(255, 40, 40);
              background-color: rgba(255, 0, 0, 0.129);
              padding: 10px 20px;
              border-radius:10px;
              transition:1s ;
              `;
  h.style.zIndex = "5";
  no.style.display = "none";
  yes.style.display = "none";
};
