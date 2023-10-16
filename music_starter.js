
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(255)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  strokeWeight (9)
   
   var ballSize = map(bass, 0, 100, 40, 150);
   var drumHight = map(drum, 0, 100, height, 0+ballSize/2);
   
   
   
   fill(60,30,90);
   ellipse(width/2,drumHight, ballSize);
   
   fill(60,200,90);
   ellipse(width/4,drumHight, ballSize);

   
     var drumMap =map(drum, 0, 100, 5, 70);
     var lengthOfLine = 300;
     var LineStart = 100;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,80,80);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+20;
      line(LineStart, lineStep, lineEnd, lineStep);
     }

     var drumMap =map(drum, 0, 50, 2, 40);
     var lengthOfLine = 300;
     var LineStart = 50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,40,40);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+70;
      line(LineStart, lineStep, lineEnd, lineStep);
     }

     var drumMap =map(drum, 0, 50, 2, 40);
     var lengthOfLine = 220;
     var LineStart = 20;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,20,20);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+123;
      line(LineStart, lineStep, lineEnd, lineStep);
     }

     var drumMap =map(drum, 0, 50, 2, 40);
     var lengthOfLine = 200;
     var LineStart = 5;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,20,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+177;
      line(LineStart, lineStep, lineEnd, lineStep);
     }

     var drumMap =map(drum, 0, 50, 2, 40);
     var lengthOfLine = 100;
     var LineStart = 5;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+230;
      line(LineStart, lineStep, lineEnd, lineStep);
     }
    }
  
