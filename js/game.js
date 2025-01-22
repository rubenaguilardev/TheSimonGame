function main() {

    let buttonColors = ["red", "blue", "green", "yellow"];
    let gamePattern = [];
    let userClickedPattern = [];

    let randomNumber = nextSequence();
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);


    $(`#${randomChosenColor}`).css('filter', 'brightness(2.5)');
    setTimeout(function() {
        $(`#${randomChosenColor}`).css('filter', 'brightness(1)');
    }, 500);

    $('img').click(function() {
        let userChosenColor = this.id;
        console.log(userChosenColor)
        playSound(userChosenColor);
        userClickedPattern.push(userChosenColor);
       
    })
}





function nextSequence() {
    return Math.floor(Math.random() * 4);
}


function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    console.log(audio)
    audio.play();
}


main();