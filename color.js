0//Declare the Color Object with our new keyword below here.
const Color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  var redinten= red/255
  redinten= redinten*100
  Math.round(redinten)
  return redinten
};

//greenIntensity
Color.greenIntensity = function(rgb){
  var greeninten= green/255
  greeninten= greeninten*100
  Math.round(greeninten)
  return greeninten
};

//blueIntensity
Color.blueIntensity = function(rgb){
  var blueinten= blue/255
  blueinten= blueinten*100
  Math.round(blueinten)
  return blueinten
};

//brightness
Color.brightness = function(rgb){
  var bright = (Color.greenIntensity + Color.blueIntensity + Color.redIntensity)/3
  return bright
}

//complement
color.complement = function(rgb){
  var comp= [];
  comp[0]= 255-rgb[0];
  comp[1]= 255-rgb[1];
  comp[2]= 255-rgb[2];
  return comp;
}

console.log(Color.complement([200,5,31]));
