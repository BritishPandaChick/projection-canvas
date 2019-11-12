//creating a canvas using JS
var canvas = document.createElement("canvas");
//making the canvas fullscreen
var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

var fov = 250; //pixels are 250px away from us

var ctx = canvas.getContext("2d");
//appending the canvas to the body
document.body.appendChild(canvas);

//an array of pixels with 3 dimensional coordinates
//a square sheet of dots separated by 5px
for(var x = -250; x < 250; i += 5){
  for(var z = -250; z < 250; z += 5) {
    pixels.push({x:x, y:60, z:z});
  }
}

//time to draw the pixels
function render(){
  //grabbing a screenshot of the canvas using getImageData
  var imagedata = canvas.getImageData(0,0,w,h);
  //looping through all pixel points
  var i = pixels.length;
  while(i--){
    var pixel = pixels[i];
    //calculating 2d position for 3d coordinates
    //fov = field of view = denotes how far the pixels are from us
    var scale = fov/(fov+pixel.z)
  }

  //marking the points green
  //putting imagedata back on the canvas
}

render();
