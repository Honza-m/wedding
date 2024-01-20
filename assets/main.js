const elId = "wedding-countdown";
if (document.getElementById(elId)) {
  countdown(elId);
}

function countdown(elementId) {
  const weddingDate = new Date(
    document.getElementById(elementId).dataset["date"],
  );

  var x = setInterval(function () {
    const diffDate = weddingDate - new Date();

    // Countdown done
    if (diffDate < 0) {
      clearInterval(x);
      document.getElementById(elementId).innerHTML = "It's here!";
    }

    // Countdown continues
    const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

    document.getElementsByClassName("countdown-item days")[0].textContent =
      days;
    document.getElementsByClassName("countdown-item hours")[0].textContent =
      String(hours).padStart(2, "0");
    document.getElementsByClassName("countdown-item minutes")[0].textContent =
      String(minutes).padStart(2, "0");

    document.getElementsByClassName("countdown-item seconds")[0].textContent =
      String(seconds).padStart(2, "0");
  }, 1000);
}
