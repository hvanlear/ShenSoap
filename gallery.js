const current = document.querySelector("#imagepreview");
const imgs = document.querySelectorAll(".imgs img");

imgs.forEach((img) =>
  img.addEventListener("click", (e) => {
    e.preventDefault();

    current.src = e.target.src;
  })
);
