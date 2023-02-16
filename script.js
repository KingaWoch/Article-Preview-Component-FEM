const shareButton = document.querySelector(".share-button");
const shareContainer = document.querySelector(".share-container");
const closeButton = document.querySelector(".close-button");

shareButton.addEventListener("click", () => {
    shareContainer.classList.toggle("active");
})

closeButton.addEventListener("click", () => {
    shareContainer.classList.remove("active");
})