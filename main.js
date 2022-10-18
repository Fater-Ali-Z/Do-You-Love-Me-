let no = document.querySelector(".no");
let yes = document.querySelector(".yes");
let inp = document.querySelector(".inp");
let yes2 = document.querySelector(".yes2");
let h3 = document.querySelector("h3");

let h = document.querySelector(".fa-heart");
let arr = [50, 25, 75, 100, -50, -100, -75, -25];
let x = 0;
let y = 0;
let i = 0;
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
  h3.innerHTML = `<i class="fa-regular fa-face-smile" style="font-size:30px;"></i> متأكد ؟؟`;
  h3.style = `color : rgb(255, 0, 0);
              background-color: rgba(255, 0, 0, 0.129);
              padding: 10px 20px;
              border-radius:10px;
              transition:1s;
              font-family: cairo;
              `;
  no.style = `transform:translate(-10px, 0);
              font-family: cairo;
              font-size:18px;
             `;
  no.value = "لا";
  yes2.value = "اي";
  yes2.style = `transform:translate(-40px, 0);
                font-family: cairo;
                font-family: 'Cairo', sans-serif;
             `;
  yes.style.display = "none";
};
yes2.onclick = function () {
  h3.innerHTML = `<i class="fa-regular fa-face-kiss" style="font-size:30px;"></i> والله حبيبي يا برِنس`;
  h3.style = `color : rgb(40, 255, 40);
              background-color: rgba(0, 255, 0, 0.129);
              padding: 10px 20px;
              border-radius:10px;
              transition:1s;
              font-family: 'Cairo', sans-serif;
              `;
  h.style.zIndex = "5";
  no.style.display = "none";
  yes2.style.display = "none";
};
