/* =========================
   PASSWORD
========================= */

// এখানে নিজের password বসাবে
const correctPassword = "21062024";

function unlockSurprise() {
  const passwordInput = document.getElementById("passwordInput");

  const password = passwordInput.value.trim();

  const passwordScreen = document.getElementById("passwordScreen");

  const surpriseContent = document.getElementById("surpriseContent");

  const errorMessage = document.getElementById("errorMessage");

  if (password === correctPassword) {
    passwordScreen.style.display = "none";

    surpriseContent.classList.remove("hidden");

    document.body.style.overflowY = "auto";

    createHeartExplosion();
  } else {
    errorMessage.textContent = "Wrong password, my love 💔 Try again.";

    passwordInput.value = "";

    passwordInput.focus();
  }
}

/* =========================
   ENTER KEY
========================= */

document
  .getElementById("passwordInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      unlockSurprise();
    }
  });

/* =========================
   IMAGE POPUP
========================= */

const memoryImages = document.querySelectorAll(".image-wrapper img");

const imageModal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

memoryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    modalImage.src = image.src;

    imageModal.classList.add("active");
  });
});

function closeImage() {
  imageModal.classList.remove("active");

  modalImage.src = "";
}

imageModal.addEventListener("click", function (event) {
  if (event.target === imageModal) {
    closeImage();
  }
});

/* =========================
   HEART EXPLOSION
========================= */

function createHeartExplosion() {
  const hearts = ["❤️", "💕", "💖", "💗", "💓", "💞"];

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");

    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.top = Math.random() * 100 + "%";

    heart.style.fontSize = Math.random() * 25 + 15 + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "10000";

    heart.style.transition = "all 2s ease";

    document.body.appendChild(heart);

    setTimeout(function () {
      heart.style.transform = `translate(
          ${(Math.random() - 0.5) * 300}px,
          ${(Math.random() - 0.5) * 300}px
        ) scale(0)`;

      heart.style.opacity = "0";
    }, 50);

    setTimeout(function () {
      heart.remove();
    }, 2200);
  }
}
