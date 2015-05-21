var man = document.getElementById('man');
var body = document.getElementById('body');

man.style.position="absolute";
man.style.left="0px";

var backgroundImages =
  [ "goat.jpg"
  , "space.jpg"
  , "http://images6.alphacoders.com/309/309839.jpg"
  , "http://images.alphacoders.com/175/175551.jpg"
  , "http://www.sdaiq.org/wp-content/uploads/2015/04/eiffel_tower_wallpaper_hd.jpg"
  , "http://img1.gtsstatic.com/wallpapers/77cab72c08db8fb474df1442d201932d_large.jpeg"
  , "http://www.hdwallpaperscool.com/wp-content/uploads/2014/09/penguins-desktop-wallpaper-for-background-full-free.jpg"
  , "https://mcluckiehistory.wikispaces.com/file/view/article-new-thumbnail_ehow_images_a05_67_rp_make-mayan-pyramid-800x800.jpg/446584156/article-new-thumbnail_ehow_images_a05_67_rp_make-mayan-pyramid-800x800.jpg"
  , "https://farm3.staticflickr.com/2112/2539113272_fe03760aa8_z.jpg"
  ];
var backgroundIndex = 0;
var setBackground = function(s){
  var string = "url('" + s + "')"
  document.body.style.backgroundImage = string;
};
setBackground(backgroundImages[0]);
var advanceBackground = function() {
  backgroundIndex ++;
  if(backgroundIndex === backgroundImages.length){
    backgroundIndex = 0;
  }
  setBackground(backgroundImages[backgroundIndex]);
};

var width = function() {
  return document.body.clientWidth - 294;
};

var manPos = 0;
var advance = 1;
var height = 0;
var dropping = 50;
var setManPos = function(e) {
  var checkHeight = function(){
    if(height >= 500){
      dropping = -50;
    }
    else if(height < 0){
      dropping = 50;
    }
  };
  if(manPos >= width()){
    advance = -1;
    man.style.transform="rotateY(180deg)";
    height += dropping;
    man.style.top=height + "px";
    checkHeight();
    advanceBackground();
  }
  else if(manPos <= 0){
    advance = 1;
    man.style.transform="";
    height += dropping;
    man.style.top=height + "px";
    checkHeight();
    advanceBackground();
  }
  manPos += advance;
  man.style.left=manPos + "px";
};

var intervalID = window.setInterval(setManPos, 1/*8*/);

man.addEventListener('click',setManPos);
