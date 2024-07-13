var modal = document.getElementById("thesis-modal");

const imgs = document.getElementsByClassName("modal-image");
const images = Array.from(imgs);

var modalImg = document.getElementById("modal-open-image");
var captionText = document.getElementById("caption");

images.forEach(function (image) {
    image.addEventListener("click", ()=> {
        modal.style.display = "block";
        modalImg.src = image.src;
        captionText.innerHTML = image.alt;
    })
});

var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
    modal.style.display = "none";
}