window.onload = () => {

  document.getElementById('#highScore')

  app.savedHighScore()

  document.getElementById('start-button').onclick = () => {

    startGame();

  };

  function startGame() { app.init() }
};

