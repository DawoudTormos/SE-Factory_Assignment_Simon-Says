/* 
author : Dawoud Tormos
*/
//I supposed I should use jquery as u did include it 

const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []// no need for this
let started = false
let level = 1




// To Prevent unwanted clicks
let pressingAllowed = false;
let index = 0;




document.addEventListener('keypress', () => {

    if (!started) {
        started = true;


        nextSequence();
        
        


    }


})






let nextSequence = ()=>{

    console.log("in next sequence")


    document.querySelector("#level-title").textContent = `Game Over. Press to start again.`


    index=0;
    pressingAllowed = false;
    document.querySelector("#level-title").textContent = `Level ${level}`;

    let randomValue = Math.floor(Math.random() * 4);
    

    gamePattern.push(buttonColors[randomValue]);

    setTimeout(function() {


        playAudioFile(buttonColors[randomValue] + "Audio");
        animate(buttonColors[randomValue]);
    
    
    
        }, 900);  

    pressingAllowed = true;
    level++;
}








let playAudioFile = (audioDiv)=>{

    $("#" + audioDiv)[0].play();

}








let animate = (div)=>{


    $("#" + div).css({
        'backgroundColor': 'grey',
        'box-shadow': '0 0 50px grey'
    });

    setTimeout(function() {


    $("#" + div).css({    
        'backgroundColor': div,
        'box-shadow': 'none'
    });



    }, 200);    


}








let checkClick = (lastClick)=>{
    playAudioFile(lastClick + "Audio");
    animate(lastClick);
    /*console.log(lastClick)
    console.log(gamePattern[index])

    console.log(gamePattern)
    console.log(index)*/        //Debbugging

    if(lastClick != gamePattern[index]){
        //wrong You losed
        started = false;
        document.querySelector("#level-title").textContent = `Game Over. Press to start again.`
        gamePattern = [];
        index=0;
        level = 1;


    }else if(index   ==   gamePattern.length - 1){
        //correct input pattern by user
        //sleep(700);// let the first animation od clicking finish before the js animate
            nextSequence();

        
    }else{
            index++;

    }

}







$(document).ready(function() {


    $('#green').click(function() {
        if(pressingAllowed){
            
            checkClick("green");

        }
    });

    $('#red').click(function() {
        if(pressingAllowed){
            checkClick("red");

        }
    });

    $('#yellow').click(function() {
        if(pressingAllowed){
            checkClick("yellow");

        }
    });

    $('#blue').click(function() {
        if(pressingAllowed){
            checkClick("blue");

        }
    });



});




/*
document.getElementById('green').addEventListener('click', function() {
});


document.getElementById('red').addEventListener('click', function() {
});


document.getElementById('yellow').addEventListener('click', function() {
});


document.getElementById('blue').addEventListener('click', function() {
});*/

