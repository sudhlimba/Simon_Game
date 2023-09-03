var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userSequence = [];

var level = 0;
var r = 0;

$("#start").click(function(){
    
    if(r===0){
        $("h1").html("LEVEL "+level);
        nextSequence();
        r++;
    }
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userSequence.push(userChosenColor);
    playsound(userChosenColor);
   animatePress(userChosenColor);
    checkAnswer((userSequence.length)-1);
});


function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userSequence[currentLevel]){
        if(gamePattern.length===userSequence.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else{
        playsound("wrong");
        $(document).addClass("game-over");
        $("h1").html("Game Over , Press Restart Button To Restart");
        $("#start").html("Restart")
        setTimeout(function(){
            $(document).removeClass("game-over");
        },1000);

        startOver();
    }
};



function nextSequence(){
    userSequence = [];
    $("h1").html("LEVEL "+ level);
    level++;
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColor = buttonColor[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomChosenColor);

    

    
};



function playsound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
};

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
};


function startOver(){
    level = 0;
    r = 0;
    gamePattern = [];
};
