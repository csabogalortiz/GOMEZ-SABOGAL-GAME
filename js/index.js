window.onload = () => {

  document.getElementById('#highScore')

  app.savedHighScore()

  document.getElementById('start-button').onclick = () => {

    document.getElementById("instructions-img").style.display = "none"

    document.getElementById("myCanvas").style.display = "block"
    startGame();

  };

  function startGame() { app.init() }
};

