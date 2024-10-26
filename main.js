function captchaGenerator(){
    let characters= "ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxyz1234567890";
    let captcha="";
    for (let i=1; i<=6; i++){
        captcha+=characters.charAt(Math.random()*characters.length);
    }
    let user= document.getElementById("captcha_shown");
    user.innerHTML=captcha;
}
captchaGenerator();

function validateCaptcha(){
    let getCaptcha=document.getElementById("enter").value;
    let checkCaptcha=document.getElementById("captcha_shown").innerHTML;
    if( getCaptcha === checkCaptcha){
        document.getElementById("result").innerHTML="Yeah, Correct captcha";
        document.getElementById("result").style.color="green";
    }
    else{
        document.getElementById("result").innerHTML="Thappu da Tharkuri mundam";
        document.getElementById("result").style.color="red";
    }

}
