var man = document.getElementById('man');
var body = document.getElementById('body');

man.style.position="absolute";
man.style.left="0px";

var manPos = 0;
var advance = 1;
var height = 0;
var dropping = 50;
var setManPos = function(e) {
  if(manPos >= 200/*900*/){
    advance = -1;
    man.style.transform="rotateY(180deg)";
    height += dropping;
    man.style.top=height + "px";
  }
  else if(manPos <= 0){
    advance = 1;
    man.style.transform="";
    height += dropping;
    man.style.top=height + "px";
  }
  if(height >= 500){
    dropping = -50;
  }
  else if(height < 0){
    dropping = 50;
  }
  manPos += advance;
  man.style.left=manPos + "px";
};

var intervalID = window.setInterval(setManPos, 1/*8*/);

man.addEventListener('click',setManPos);
