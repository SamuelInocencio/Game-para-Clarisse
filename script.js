const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const messageToClarisse = document.querySelector(".clarisse");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    return choices[Math.floor(Math.random() * 3)]
}

const playTheGame = (human, machine) => {
    console.log(`Humano: ${human}; Máquina: ${machine}`)
    if (human === machine) {
        result.innerHTML = "Empatou!!!"
        messageToClarisse.innerHTML = ``
    } else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS || human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK || human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) {
        result.innerHTML = "Você Ganhou!!!"
        messageToClarisse.innerHTML = `<p>Parabéns Clarisse!!!</p>

            <p>Você Ganhou.</p>`
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
    } else {
        result.innerHTML = "Você Perdeu!!!"
        messageToClarisse.innerHTML = ``
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
    }
}

const reset = () => {
    messageToClarisse.innerHTML = ``
    humanScoreNumber = 0;
    machineScoreNumber = 0;
    result.innerHTML = "";
    humanScore.innerHTML = 0;
    machineScore.innerHTML = 0;
}