function main() {
    let buttonColors = ["red", "blue", "green", "yellow"];
    let gamePattern = [];

    let randomNumber = nextSequence();
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor)

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
}




function nextSequence() {
    return Math.floor(Math.random() * 4);
}


main();