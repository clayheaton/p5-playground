var sketch07 = function ( p ) {
  
    p.setup = function() {
      p.createCanvas(500, 400);
    };
  
    p.draw = function() {
      p.background(230);
      p.fill(0, 0, 255, 100);
      p.ellipse(p.width*0.5, p.height*0.5, 100, 100);
    }
  
  };
  
  var myp5 = new p5(sketch07, 's7');