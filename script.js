var man = document.getElementById('man');

man.style.border="solid red 10px";

man.style.display="inline-block";
man.style.position="absolute";
man.style.left="0px";

var manPos = 0;
var setManPos = function(e) {
  manPos += 10;
  man.style.left=manPos + "px";
};

man.addEventListener('click',setManPos);
