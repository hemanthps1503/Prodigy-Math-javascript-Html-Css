var playing=false;
var score;
var action;
var timere;
var correctanswer;


// If we click start/reset
document.getElementById("resetbutton").onclick=
function(){
//if we are playing
    if(playing==true){
        location.reload(); //reload page

    }else{ //if we r not plaiying //change mode to playing
        playing=true;
        score=0;
        //initiate score to 0
document.getElementById("scorevalue").innerHTML=score;//settng zero to id
document.getElementById("timerem").style.display="block";
timere=60;
document.getElementById("timerems").innerHTML=timere;
document.getElementById("gameover").style.display="none"
//showing rem time when we click start button
document.getElementById("resetbutton").innerHTML="Reset Game";//whenever playing true modify reset to start by loading
    //start countdown
    startcountdown();
    generateqa();


}
}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        if (playing==true){
            if (this.innerHTML==correctanswer){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                document.getElementById("wrong").style.display="none";
                document.getElementById("correct").style.display="block";
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000);
                generateqa();
            }else{
                document.getElementById("wrong").style.display="block";
                document.getElementById("correct").style.display="none";
                setTimeout(function(){
                    
                    document.getElementById("wrong").style.display="block";
                },1000)
    
            }
        }
    }
}


        //reload page
    //if we r not playing
        //set score=0
        //show countdown
        //reduce time by 1 sec in loops
            //timeleft?
             //yes -- continue
             //no-- gameover
        //change button to reset
        //create new question
//if we click on answer box
    //if we r playing
        //correct?
            // yes
                //increase score
                //show correct box
                //generate new question
                //show try again box sec
function startcountdown(){
    action=setInterval(function(){
        timere-=1
        document.getElementById("timerems").innerHTML=timere;
        if(timere==0){
            stopcountdown();
            document.getElementById("gameover").style.display="block";
            document.getElementById("gameover").innerHTML="<p> game over!</p><p>Your score is "+score+".</p>";
            document.getElementById("timerem").style.display="none";
            playing=false;
            document.getElementById("resetbutton").innerHTML="Start Game";
            
        }

    },1000)

}
function stopcountdown(){
    clearInterval(action)
}
function generateqa(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML= x +"x" +y
    var corrpos=1+Math.round(3*Math.random());
    document.getElementById("box"+corrpos).innerHTML=correctanswer;
    var answers=[correctanswer]

    for (i=1; 1<5; i++){

        if(i!=corrpos){
            var wrongans;
            do{wrongans=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()))}while (answers.indexOf(wrongans)>-1)
            document.getElementById("box"+ i).innerHTML=wrongans;
            answers.push(wrongans)
        }
    }
}
