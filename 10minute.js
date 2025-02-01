var countDownTime = 10 * 60 * 1000;

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownTime;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        alert("Good job! So proud of you!");
    }

    countDownTime -= 1000;
}, 1000)

document.addEventListener("click", () => {
    const audio = document.getElementById("meditation-audio");
    audio.play();
});