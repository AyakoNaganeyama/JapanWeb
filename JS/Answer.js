/* Function to compute the total score*/
function check(){
    var score = "";
    var Q1 = document.quiz.question1.value;
    var Q2 = document.quiz.question2.value;
    var Q3 = document.quiz.question3.value;
    var Q4 = document.quiz.question4.value;
    var Q5 = document.quiz.question5.value;
        
    if(Q1.toLowerCase() =="Henn na Hotel".toLowerCase()){
        score=score+"&#128150;";
        document.getElementById("EndCheckCorrect1").style.display="block";
        document.getElementById("EndCheckIncorrect1").style.display="none";        
    }
    else{
        document.getElementById("EndCheckIncorrect1").style.display="block";
        document.getElementById("EndCheckCorrect1").style.display="none";
    }
    if(Q2.toLowerCase() =="Tokyo".toLowerCase()){
        score=score+"&#128150;";
        document.getElementById("EndCheckCorrect2").style.display="block";
        document.getElementById("EndCheckIncorrect2").style.display="none";
    }
    else{
        document.getElementById("EndCheckIncorrect2").style.display="block";
        document.getElementById("EndCheckCorrect2").style.display="none";
    }
    if(Q3.toLowerCase() =="Phnom Penh".toLowerCase()){
        score=score+"&#128150;";
        document.getElementById("EndCheckCorrect3").style.display="block";
        document.getElementById("EndCheckIncorrect3").style.display="none";
    }
    else{
        document.getElementById("EndCheckIncorrect3").style.display="block";
        document.getElementById("EndCheckCorrect3").style.display="none";
    }
    if(Q4 =="Omelette"){
        score=score+"&#128150;";
        document.getElementById("EndCheckCorrect4").style.display="block";
        document.getElementById("EndCheckIncorrect4").style.display="none";
    }
    else{
        document.getElementById("EndCheckIncorrect4").style.display="block";
        document.getElementById("EndCheckCorrect4").style.display="none";
    }
    if(Q5 =="Siem Reap"){
        score=score+"&#128150;";
        document.getElementById("EndCheckCorrect5").style.display="block";
        document.getElementById("EndCheckIncorrect5").style.display="none";
    }
    else{
        document.getElementById("EndCheckIncorrect5").style.display="block";
        document.getElementById("EndCheckCorrect5").style.display="none";
    }
    
    document.getElementById("total").innerHTML= score;
    
}
/*Function check1, check2...are for individual check answer to show emoji for fun*/
function check1(){
    var score = "";   
    var Q1 = document.quiz.question1.value;
    var Q2 = document.quiz.question2.value;
    var Q3 = document.quiz.question3.value;
    var Q4 = document.quiz.question4.value;
    var Q5 = document.quiz.question5.value;
    if (Q1=="Henn na Hotel"){
        score=score+"&#128150;";
        document.getElementById("Correct1").style.display="block";
        document.getElementById("Incorrect1").style.display="none";
        
    }
    else{
        document.getElementById("Incorrect1").style.display="block";
        document.getElementById("Correct1").style.display="none";
    }
           
}

function check2(){
    var score = "";   
    var Q2 = document.quiz.question2.value;
    if(Q2.toLowerCase() =="Tokyo".toLowerCase()){
        score=score+"&#128150;";
        document.getElementById("Correct2").style.display="block";
        document.getElementById("Incorrect2").style.display="none";
        document.getElementById("total").innerHTML= score;
    }
    else{
        document.getElementById("Incorrect2").style.display="block";
        document.getElementById("Correct2").style.display="none";
    }
}
function check3(){
    var score = "";   
    var Q3 = document.quiz.question3.value;
    if(Q3.toLowerCase() =="Phnom Penh".toLowerCase()){
        score=score+"&#128150;";
        document.getElementById("Correct3").style.display="block";
        document.getElementById("Incorrect3").style.display="none";
        document.getElementById("total").innerHTML= score;
    }
    else{
        document.getElementById("Incorrect3").style.display="block";
        document.getElementById("Correct3").style.display="none";
    }
}
function check4(){
    var score = "";   
    var Q4 = document.quiz.question4.value;
    if(Q4 =="Omelette"){
        score=score+"&#128150;";
        document.getElementById("Correct4").style.display="block";
        document.getElementById("Incorrect4").style.display="none";
        document.getElementById("total").innerHTML= score;
    }
    else{
        document.getElementById("Incorrect4").style.display="block";
        document.getElementById("Correct4").style.display="none";
    }
}
function check5(){
    var score = "";   
    var Q5 = document.quiz.question5.value;
    if(Q5 =="Siem Reap"){
        score=score+"&#128150;";
        document.getElementById("Correct5").style.display="block";
        document.getElementById("Incorrect5").style.display="none";
        document.getElementById("total").innerHTML= score;
    }
    else{
        document.getElementById("Incorrect5").style.display="block";
        document.getElementById("Correct5").style.display="none";
    }
}