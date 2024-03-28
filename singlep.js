let mainimage = document.getElementById("main-img");
let smallimgs = document.querySelectorAll(".small-image");

for (const smallimg of smallimgs) {
  smallimg.addEventListener("click", () => {
    mainimage.src = smallimg.src;
  });
}
