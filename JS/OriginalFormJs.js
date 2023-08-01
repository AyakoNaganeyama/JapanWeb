function validateFname(){

    var Fname=document.getElementById("Fname").value;
    
    if(Fname.length>=2){
        document.getElementById("FnameError").style.color="green";
        document.getElementById("FnameError").style.fontSize="20px";
    
        document.getElementById("FnameError").innerHTML="valid";
        return true;
       
    }
    else{
        document.getElementById("FnameError").style.color="red";
        document.getElementById("FnameError").style.fontSize="20px";
        document.getElementById("FnameError").innerHTML="Please enter more than one charactor";
        return false;
    
    }
    
    
    
    
    }


function validateLname(){

    var Lname=document.getElementById("Lname").value;
    
    if(Lname.length>=2){
        document.getElementById("LnameError").style.color="green";
        document.getElementById("LnameError").style.fontSize="20px";
    
        document.getElementById("LnameError").innerHTML="valid";
        return true;
       
    }
    else{
        document.getElementById("LnameError").style.color="red";
        document.getElementById("LnameError").style.fontSize="20px";
        document.getElementById("LnameError").innerHTML="Please enter more than one charactor";
        return false;
    
    }





}
    

function validatePhone(){

    var phone=document.getElementById("phone").value;
    if("-"==phone[3] && "-"==phone[7]&&phone.length==13){
        document.getElementById("phoneError").style.color="green";
        document.getElementById("phoneError").style.fontSize="20px";
    
        document.getElementById("phoneError").innerHTML="valid";
        return true;
    }

    else{
        document.getElementById("phoneError").style.color="red";
        document.getElementById("phoneError").style.fontSize="20px";
        document.getElementById("phoneError").innerHTML="Please enter the form with 123-456-78910";
        return false;


    }




}
    

function validateEmail(){

    var email = document.getElementById("email").value;

    if(email.indexOf("@")==-1){

        document.getElementById("emailError").style.color="red";
        document.getElementById("emailError").style.fontSize="20px";
        document.getElementById("emailError").innerHTML="Email needs to include @";
        return false;



    }

    else{


       if(email.indexOf("@")!=email.length-1){

        document.getElementById("emailError").style.color="green";
        document.getElementById("emailError").style.fontSize="20px";
    
        document.getElementById("emailError").innerHTML="valid";
        return true;}

        else{

            document.getElementById("emailError").style.color="red";
            document.getElementById("emailError").style.fontSize="20px";
            document.getElementById("emailError").innerHTML="Please enter text after @ ";
            return false;


        }


    }
}



function validateComment(){

    var feed = document.getElementById("feed").value;
    if(feed.length>30){
        document.getElementById("commentError").style.color="green";
        document.getElementById("commentError").style.fontSize="20px";
    
        document.getElementById("commentError").innerHTML="valid";
        return true;
    }

    else{

        document.getElementById("commentError").style.color="red";
        document.getElementById("commentError").style.fontSize="20px";
        document.getElementById("commentError").innerHTML="Please enter at least 30 words";
        return false;

        
    }

    



}


function validateDdate(){

    var today = new Date();
   

    var date = document.getElementById("Ddate").value;
    var test = new Date(date);
    //alert(today);
    if(test.getTime()<=today.getTime()){
        //alert(today);

      


        document.getElementById("DdateError").style.color="red";
        document.getElementById("DdateError").style.fontSize="20px";
        document.getElementById("DdateError").innerHTML="Please enter the date after today";
        return false;


    }
    else{
        document.getElementById("DdateError").style.color="green";
        document.getElementById("DdateError").style.fontSize="20px";
        document.getElementById("DdateError").innerHTML="Valid";
       // return test;
       window.value=test;//grobal value
       return true;

    }
}


function validateAdate(){

    
    var date = document.getElementById("Adate").value;
    var test2 = new Date(date);
    if(window.value.getTime()>=test2.getTime()){
        
        document.getElementById("AdateError").style.color="red";
        document.getElementById("AdateError").style.fontSize="20px";
        document.getElementById("AdateError").innerHTML="Please enter the date after the departure date";
        return false;



    }

    else{

        document.getElementById("AdateError").style.color="green";
        document.getElementById("AdateError").style.fontSize="20px";
        document.getElementById("AdateError").innerHTML="Valid";
        return true;



    }







}


    
    
    function validate(){
    
    if(validateFname()==true && validateLname()==true &&validatePhone()==true && validateEmail()==true && validateComment()==true && validateDdate()==true && validateAdate()==true ){
        //alert("success");

        var rate=document.form.rate.value;
        if(rate==5){
            alert("Thank you so much for giving us 5 star ratings!")
        }
        return true;
    }
    else{
        return false;
    }}
    
    