/* =========================
   GET ELEMENTS SAFELY
========================= */

const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");
const passwordScreen = document.getElementById("passwordScreen");
const surpriseContent = document.getElementById("surpriseContent");

const eyeButton = document.getElementById("eyeButton");

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

const loveLetterModal = document.getElementById("loveLetterModal");

const loveSong = document.getElementById("loveSong");
const musicButton = document.getElementById("musicButton");
const musicPlayer = document.getElementById("musicPlayer");

/* =========================
   PASSWORD
========================= */

function unlockSurprise() {
  const password = "dipta&moni457100143";

  if (!passwordInput) {
    return;
  }

  const input = passwordInput.value.trim();

  if (input === password) {
    if (passwordScreen) {
      passwordScreen.style.display = "none";
    }

    if (surpriseContent) {
      surpriseContent.classList.remove("hidden");
    }

    // Password correct হলে গান automatically চালু হবে
    playLoveSong();

    document.body.style.overflow = "auto";

    if (errorMessage) {
      errorMessage.textContent = "";
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    if (errorMessage) {
      errorMessage.textContent = "Wrong password ❤️ Try again.";
    }

    passwordInput.focus();
  }
}

/* =========================
   ENTER KEY PASSWORD
========================= */

if (passwordInput) {
  passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      unlockSurprise();
    }
  });
}

/* =========================
   SHOW / HIDE PASSWORD
========================= */

function togglePassword() {
  if (!passwordInput || !eyeButton) {
    return;
  }

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

if (images.length > 0) {
  images.forEach(function (image) {
    image.addEventListener("click", function () {
      if (!modal || !modalImage) {
        return;
      }

      modal.style.display = "flex";
      modalImage.src = image.src;
    });
  });
}

/* =========================
   CLOSE IMAGE MODAL
========================= */

function closeModal() {
  if (!modal) {
    return;
  }

  modal.style.display = "none";

  if (modalImage) {
    modalImage.src = "";
  }
}

/* =========================
   CLOSE MODAL OUTSIDE IMAGE
========================= */

if (modal) {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

/* =========================
   LOVE LETTER POPUP
========================= */

function specialLove() {
  if (!loveLetterModal) {
    return;
  }

  loveLetterModal.style.display = "flex";

  document.body.style.overflow = "hidden";
}

/* =========================
   CLOSE LOVE LETTER
========================= */

function closeLoveLetter() {
  if (!loveLetterModal) {
    return;
  }

  loveLetterModal.style.display = "none";

  document.body.style.overflow = "auto";
}

/* =========================
   CLOSE LETTER OUTSIDE
========================= */

if (loveLetterModal) {
  loveLetterModal.addEventListener("click", function (event) {
    if (event.target === loveLetterModal) {
      closeLoveLetter();
    }
  });
}

/* =========================
   LOVE SONG
========================= */

function playLoveSong() {
  if (!loveSong) {
    return;
  }

  loveSong
    .play()
    .then(function () {
      // গান ON হলে 🔊 দেখাবে
      if (musicButton) {
        musicButton.textContent = "🔊";
      }

      // Music button animation চালু
      if (musicPlayer) {
        musicPlayer.classList.add("playing");
      }
    })
    .catch(function () {
      // Browser autoplay block করলে 🎵 থাকবে
      if (musicButton) {
        musicButton.textContent = "🎵";
      }

      if (musicPlayer) {
        musicPlayer.classList.remove("playing");
      }
    });
}

/* =========================
   MUSIC ON / OFF
========================= */

function toggleMusic() {
  if (!loveSong) {
    return;
  }

  /* =========================
     MUSIC OFF → ON
  ========================= */

  if (loveSong.paused) {
    loveSong
      .play()
      .then(function () {
        // গান চালু হলে 🔊
        if (musicButton) {
          musicButton.textContent = "🔊";
        }

        // Animation চালু
        if (musicPlayer) {
          musicPlayer.classList.add("playing");
        }
      })
      .catch(function () {
        // গান চালু না হলে 🎵
        if (musicButton) {
          musicButton.textContent = "🎵";
        }

        if (musicPlayer) {
          musicPlayer.classList.remove("playing");
        }
      });
  } else {
    /* =========================
       MUSIC ON → OFF
    ========================= */

    loveSong.pause();

    // Button icon পরিবর্তন
    if (musicButton) {
      musicButton.textContent = "🎵";
    }

    // Animation বন্ধ
    if (musicPlayer) {
      musicPlayer.classList.remove("playing");
    }
  }
}

/* =========================
   AUDIO STATE SYNC
========================= */

if (loveSong) {
  loveSong.addEventListener("pause", function () {
    if (musicButton) {
      musicButton.textContent = "🎵";
    }

    if (musicPlayer) {
      musicPlayer.classList.remove("playing");
    }
  });

  loveSong.addEventListener("play", function () {
    if (musicButton) {
      musicButton.textContent = "🔊";
    }

    if (musicPlayer) {
      musicPlayer.classList.add("playing");
    }
  });
}
