var man = document.getElementById('man');
var body = document.getElementById('body');

man.style.position="absolute";
man.style.left="0px";

var manPos = 0;
var advance = 1;
var setManPos = function(e) {
  if(manPos >= 900){
    advance = -1;
    man.style.transform="rotateY(180deg)";
  }
  if(manPos <= 0){
    advance = 1;
    man.style.transform="";
  }
  manPos += advance;
  man.style.left=manPos + "px";
};

var intervalID = window.setInterval(setManPos, 8);

man.addEventListener('click',setManPos);
