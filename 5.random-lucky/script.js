function generateFortune() {
  const fortunes = [
    "Ще имаш успешен ден!",
    "Очаква те приятно изненадане!",
    "Бъди усмихнат, това е твоя ден!",
    // Добави още късметчета...
  ];

  const fortuneText = document.getElementById("fortune-text");
  const timerText = document.getElementById("timer-text");
  const lastVisitTime = localStorage.getItem("lastVisitTime");

  if (!lastVisitTime || hasOneHourPassed(lastVisitTime)) {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    fortuneText.textContent = randomFortune;

    localStorage.setItem("lastVisitTime", new Date().getTime().toString());

    // Показваме текста в червен цвят
    fortuneText.style.color = "red";

    // Стартиране на таймер за следващото късметче
    startTimer();
  } else {
    fortuneText.textContent = "Изчакай още време преди да изтеглиш ново късметче.";
    timerText.textContent = "";
    // Нулираме цвета, ако не е ново късметче
    fortuneText.style.color = "";
  }
}

function hasOneHourPassed(lastVisitTime) {
  const oneHourInMillis = 60 * 60 * 1000;
  const currentTime = new Date().getTime();
  return currentTime - parseInt(lastVisitTime) > oneHourInMillis;
}

function startTimer() {
  const timerText = document.getElementById("timer-text");
  let timeLeft = 3600; // време в секунди (1 час)

  const timerInterval = setInterval(function () {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerText.textContent = `Следващото късметче след: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerText.textContent = "";
    } else {
      timeLeft--;
    }
  }, 1000);
}

// Първоначално генерираме късметче при зареждане на страницата
generateFortune();