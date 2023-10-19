
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let testImg;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    testIMG=loadImage('test.png');

    firstRun=false
  }
  Image(testImg, 500, 80)
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB,50);
  background(0)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  strokeWeight (9)

  circle(520, 30, 20);
  circle(20, 30, 20);
   var ballSize = map(bass, 0, 100, 60, 20);
   var drumHight = map(drum, 0, 100, height, 0+ballSize/2);
   
   translate(width / 10, height / 10);
   rotate(PI / 9.0);

   
  

   fill(20, 40, 100);//10
   ellipse(width/1.05,drumHight, ballSize);

   fill(25, 40, 300);//7
   ellipse(width/1.55,drumHight, ballSize);
   
   fill(45, 150, 45);//4
   ellipse(width/2.8,drumHight, ballSize);

   
   
   fill(24, 56, 160);//1
   ellipse(width/20,drumHight, ballSize);

   
   fill(120, 10, 255);//2
   ellipse(width/6.9,drumHight, ballSize);

   fill(78, 149, 90);//3
   ellipse(width/3.96,drumHight, ballSize);

   fill(46, 149, 80);//5
   ellipse(width/2.2,drumHight, ballSize);

   fill(28, 149, 227);//6
   ellipse(width/1.8,drumHight, ballSize);


   fill(39, 149, 227);//8
   ellipse(width/1.34,drumHight, ballSize);

   fill(56, 149, 227);//9
   ellipse(width/1.18,drumHight, ballSize);

     var drumMap =map(drum, 0, 100, 5, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,80,80);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+20;
      line(LineStart, lineStep, lineEnd, lineStep);
     }

     var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,40,40);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+70;
      line(LineStart, lineStep, lineEnd, lineStep);
     }

     var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,20,20);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+123;
      line(LineStart, lineStep, lineEnd, lineStep);
     }

     var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,20,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+177;
      line(LineStart, lineStep, lineEnd, lineStep);
     }

     var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+230;
      line(LineStart, lineStep, lineEnd, lineStep);

   
     }

     var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+285;
      line(LineStart, lineStep, lineEnd, lineStep);

   
     }

     
    }
  
