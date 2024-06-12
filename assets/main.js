const elId = "wedding-countdown";
if (document.getElementById(elId)) {
  countdown(elId);
}

function countdown(elementId) {
  const weddingDate = new Date(
    document.getElementById(elementId).dataset["date"],
  );

  const diffDate = weddingDate - new Date();

  // Countdown done
  if (diffDate < 0) {
    const counterObj = document.getElementById(elementId);
    if (counterObj.classList.contains('countdown-index')){
      counterObj.classList.add('d-none')
      runConfetti();
      document.getElementById('photos-qr-container').classList.remove('d-none');
      document.getElementById('photos-qr-container').classList.add('d-flex');
    }
    else {
      counterObj.innerHTML = "❤️ ";
    }

    return
  }

  // Countdown continues
  const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

  document.getElementsByClassName("countdown-item days")[0].textContent =
    String(days).padStart(3, "0");
  document.getElementsByClassName("countdown-item hours")[0].textContent =
    String(hours).padStart(2, "0");
  document.getElementsByClassName("countdown-item minutes")[0].textContent =
    String(minutes).padStart(2, "0");
  document.getElementsByClassName("countdown-item seconds")[0].textContent =
    String(seconds).padStart(2, "0");

  setTimeout(countdown, 1000, elementId);
}

function runConfetti() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 25,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
}
