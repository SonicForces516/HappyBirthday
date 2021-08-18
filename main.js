const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{	
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img)
    {
        block_image_object = Img;

        vlock_image block_image_object.scaleToWidth
    })
}

function playSound(){
	
}
