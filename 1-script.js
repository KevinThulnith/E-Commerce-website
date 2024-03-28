let btt = document.getElementById("bar");
let cls = document.getElementById("close");
let nvbr = document.getElementById("navbar");

if (btt) {
  btt.addEventListener("click", () => {
    nvbr.classList.add("active");
  });
}

if (cls) {
  cls.addEventListener("click", () => {
    nvbr.classList.remove("active");
  });
}
