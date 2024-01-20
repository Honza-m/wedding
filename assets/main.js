if (document.getElementsByClassName("countdown").length > 0) {
  countdown();
}

function countdown() {
  const weddingDate = new Date("2024-07-07T13:00:00+02:00");

  var x = setInterval(function () {
    const diffDate = weddingDate - new Date();
    const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

    document.getElementsByClassName("countdown-days")[0].textContent = days;
    document.getElementsByClassName("countdown-hours")[0].textContent = String(
      hours,
    ).padStart(2, "0");
    document.getElementsByClassName("countdown-minutes")[0].textContent =
      String(minutes).padStart(2, "0");

    document.getElementsByClassName("countdown-seconds")[0].textContent =
      String(seconds).padStart(2, "0");

    if (distance < 0) {
      clearInterval(x);
      document.getElementsByClassName("countdown-border").innerHTML =
        "It's here!";
    }
  }, 1000);
}
