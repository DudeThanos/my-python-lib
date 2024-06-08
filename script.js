document.addEventListener("DOMContentLoaded", () => {
  const rollDiceButton = document.getElementById("rollDiceButton");
  const diceValueElement = document.getElementById("diceValue");
  const turnInfoElement = document.getElementById("turnInfo");
  const player1PositionElement = document.getElementById("player1Position");
  const player2PositionElement = document.getElementById("player2Position");

  async function rollDice() {
    const response = await fetch("http://127.0.0.1:5000/roll_dice", {
      method: "POST",
    });
    const data = await response.json();

    diceValueElement.textContent = `Dice Value: ${data.dice_value}`;
    player1PositionElement.textContent = data.player_positions[0];
    player2PositionElement.textContent = data.player_positions[1];
    turnInfoElement.textContent = `Player ${data.current_turn + 1}'s turn`;
  }

  rollDiceButton.addEventListener("click", rollDice);

  async function fetchGameState() {
    const response = await fetch("http://127.0.0.1:5000/game_state");
    const data = await response.json();

    player1PositionElement.textContent = data.player_positions[0];
    player2PositionElement.textContent = data.player_positions[1];
    turnInfoElement.textContent = `Player ${data.current_turn + 1}'s turn`;
  }

  fetchGameState();
});
