function main() {
    let buttonColors = ["red", "blue", "green", "yellow"];
    let gamePattern = [];

    let randomNumber = nextSequence();
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor)

    $(`#${randomChosenColor}`).css('filter', 'brightness(1.8)');
    setTimeout(function() {
        $(`#${randomChosenColor}`).css('filter', 'brightness(1)');
    }, 500);
}




function nextSequence() {
    return Math.floor(Math.random() * 4);
}


main();