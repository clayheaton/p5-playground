var sketch02 = function ( p ) {
    var offsetFromTop;
    var boxHalfWidth;
    var boxHeight;  
  
    p.setup = function() {
      p.createCanvas(400, 400);
      offsetFromTop = 50;
      boxHalfWidth = 101;
      boxHeight = 275;
    };
  
    p.draw = function() {
      p.background(230);
      p.fill(0, 0, 255, 100);
      p.ellipse(p.width*0.5, p.height*0.5, p.width*0.3, p.height*0.3);
      p.drawMask();
    }
  
    p.drawMask = function() {
      // Cover all in white
      p.fill(255);
      p.noStroke();
      p.beginShape();
      p.vertex(0, 0);
      p.vertex(p.width, 0);
      p.vertex(p.width, p.height);
      p.vertex(0, p.height);
    
      // Make the cutout with counter-clockwise winding
      // to reveal the center sketch area.
      p.beginContour();
      p.vertex(p.width*0.5 - boxHalfWidth, offsetFromTop);
      p.vertex(p.width*0.5 - boxHalfWidth, offsetFromTop + boxHeight);
      p.vertex(p.width*0.5 + boxHalfWidth, offsetFromTop + boxHeight);
      p.vertex(p.width*0.5 + boxHalfWidth, offsetFromTop);
      p.endContour();
      
      p.endShape();
      p.noFill();
    }
  };
  
  var myp5 = new p5(sketch02, 's2');