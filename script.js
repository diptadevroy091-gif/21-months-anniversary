javascript;
/* =========================
   PASSWORD
========================= */

function unlockSurprise() {
  // নিজের password এখানে বসাবে
  const password = "dipta&moni457100";

  const input = document.getElementById("passwordInput").value.trim();

  const error = document.getElementById("errorMessage");

  const passwordScreen = document.getElementById("passwordScreen");

  const surpriseContent = document.getElementById("surpriseContent");

  if (input === password) {
    passwordScreen.style.display = "none";

    surpriseContent.classList.remove("hidden");

    document.body.style.overflow = "auto";

    error.textContent = "";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    error.textContent = "Wrong password ❤️ Try again.";

    document.getElementById("passwordInput").focus();
  }
}

/* =========================
   ENTER KEY PASSWORD
========================= */

document
  .getElementById("passwordInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      unlockSurprise();
    }
  });

/* =========================
   SHOW / HIDE PASSWORD
========================= */

function togglePassword() {
  const passwordInput = document.getElementById("passwordInput");

  const eyeButton = document.getElementById("eyeButton");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    eyeButton.textContent = "🙈";
  } else {
    passwordInput.type = "password";

    eyeButton.textContent = "👁️";
  }
}

/* =========================
   MEMORY IMAGE POPUP
========================= */

const images = document.querySelectorAll(".image-wrapper img");

const modal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

images.forEach(function (image) {
  image.addEventListener("click", function () {
    modal.style.display = "flex";

    modalImage.src = image.src;
  });
});

/* =========================
   CLOSE IMAGE MODAL
========================= */

function closeModal() {
  modal.style.display = "none";

  modalImage.src = "";
}

/* =========================
   CLOSE MODAL OUTSIDE IMAGE
========================= */

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

/* =========================
   LOVE LETTER POPUP
========================= */

function specialLove() {
  const letterModal = document.getElementById("loveLetterModal");

  letterModal.style.display = "flex";

  document.body.style.overflow = "hidden";
}

/* =========================
   CLOSE LOVE LETTER
========================= */

function closeLoveLetter() {
  const letterModal = document.getElementById("loveLetterModal");

  letterModal.style.display = "none";

  document.body.style.overflow = "auto";
}

/* =========================
   CLOSE LETTER OUTSIDE
========================= */

document
  .getElementById("loveLetterModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeLoveLetter();
    }
  });
