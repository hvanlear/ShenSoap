const current = document.querySelector("#imagepreview");
const imgs = document.querySelectorAll(".imgs img");
const title = document.querySelectorAll("h5#exampleModalLabel.modal-title");

imgs.forEach((img) =>
  img.addEventListener("click", (e) => {
    console.log(e.target);
    let imgTitle = e.target.alt;
    e.preventDefault();

    title[0].innerHTML = `${imgTitle}`;
    current.src = e.target.src;
  })
);
