let reset = document.getElementById('reset');
let nonsound = document.getElementById('no_sound');
let false_1 = document.getElementById('false_1');
let false_2 = document.getElementById('false_2');
let correct_3 = document.getElementById('true_3');
let false_4= document.getElementById('false_4');
//if (){
//oioioisound.pause(); true
//}
var oioioisound = new Audio("peep.mp3"); 

var soudn = {'false_BEEP1': oioioisound, 'false_BEEP2': oioioisound, 'false_BEEP4': oioioisound};
function correct_version(){
    var playyay = new Audio("COREET.mp3");
    playyay.play();
    true_3.style = "background-color: green";

}
function false_BEEP1(){
    soudn.false_BEEP1.play();
    false_1.style = "background-color: red";

}
function false_BEEP2(){
    false_2.style = "background-color: red";
    soudn.false_BEEP2.play();

}
function false_BEEP4(){
    false_4.style = "background-color: red";
    soudn.false_BEEP4.play();
}

false_1.addEventListener("click", false_BEEP1);
false_2.addEventListener("click", false_BEEP2);
false_4.addEventListener("click", false_BEEP4);
true_3.addEventListener("click", correct_version);
nonsound.addEventListener("click", function(){
   
});
reset.addEventListener("click", function(){
    location.reload();
});
//nonsound.addEventListener("dblclick", function(){
 //   oioioisound.paused = true;
    
//});
