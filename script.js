const gameText = document.getElementById("game-text");
const choices = document.getElementById("choices");

let player = {
    name: "",
    city: "",
    position: "",
    age: 13,
    skill: 50,
    fame: 0,
    followers: 0,
};

function startGame() {
    gameText.innerText = "You're a 13-year-old boy from South Africa with a dream to become a football star.";
    choices.innerHTML = `
        <button onclick="chooseCity('Soweto')">Start in Soweto</button>
        <button onclick="chooseCity('Cape Town')">Start in Cape Town</button>
    `;
}

function chooseCity(city) {
    player.city = city;
    gameText.innerText = `You live in ${city}. Choose your name.`;
    choices.innerHTML = `
        <button onclick="chooseName('Thabo')">Thabo</button>
        <button onclick="chooseName('Lunga')">Lunga</button>
        <button onclick="chooseName('CreateName')">Create My Own Name</button>
    `;
}

function chooseName(name) {
    if (name === "CreateName") {
        player.name = prompt("Enter your name:");
    } else {
        player.name = name;
    }
    choosePosition();
}

function choosePosition() {
    gameText.innerText = `Great, ${player.name}! Now choose your position.`;
    choices.innerHTML = `
        <button onclick="setPosition('Forward')">Forward</button>
        <button onclick="setPosition('Midfielder')">Midfielder</button>
        <button onclick="setPosition('Defender')">Defender</button>
        <button onclick="setPosition('Goalkeeper')">Goalkeeper</button>
    `;
}

function setPosition(pos) {
    player.position = pos;
    switch (pos) {
        case "Forward": player.skill = 60; break;
        case "Midfielder": player.skill = 55; break;
        case "Defender": player.skill = 50; break;
        case "Goalkeeper": player.skill = 45; break;
    }
    playLocalTournament();
}

function playLocalTournament() {
    gameText.innerText = `You play in a local tournament in ${player.city} and win MVP!`;
    choices.innerHTML = `<button onclick="scouted()">Continue</button>`;
}

function scouted() {
    gameText.innerText = `You’re scouted by a local academy. The journey begins...`;
    choices.innerHTML = `<button onclick="startGame()">Play Again</button>`;
}

startGame();
