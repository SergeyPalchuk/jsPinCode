
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btnc = document.getElementById('btnc');
let btn0 = document.getElementById('btn0');
let btnok = document.getElementById('btnok');
let backspace = document.getElementById('bckspc');
let buttons = [btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];
buttons[0].onclick = function(){
  document.getElementById('pass').value += '0';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
buttons[1].onclick = function(){
  document.getElementById('pass').value += '1';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
buttons[2].onclick = function(){
  document.getElementById('pass').value += '2';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
buttons[3].onclick = function(){
  document.getElementById('pass').value += '3';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
buttons[4].onclick = function(){
  document.getElementById('pass').value += '4';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
buttons[5].onclick = function(){
  document.getElementById('pass').value += '5';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
buttons[6].onclick = function(){
  document.getElementById('pass').value += '6';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
buttons[7].onclick = function(){
  document.getElementById('pass').value += '7';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
buttons[8].onclick = function(){
  document.getElementById('pass').value += '8';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
buttons[9].onclick = function(){
  document.getElementById('pass').value += '9';
  if(document.getElementById('pass').value.length>4){
      document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
    }
}
btnc.onclick = function(){
  document.getElementById('pass').value = "";
}
btnok.onclick = function(){
  if(document.getElementById('pass').value === '1957') { document.location.href = "logged.html";} else{ alert('PIN is wrong');}
}
backspace.onclick = function(){
  document.getElementById('pass').value = document.getElementById('pass').value.substring(0 , document.getElementById('pass').value.length-1);
}
