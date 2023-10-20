
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB,10);
  background(0)
  rectMode(CENTER)
  strokeWeight (4)


  //top light 
  circle(520, 30, 20);
  circle(20, 30, 20);
  circle(50, 30, 20);
  circle(80, 30, 20);
  circle(110, 30, 20);
  circle(140, 30, 20);
  circle(170, 30, 20);
  circle(200, 30, 20);
  circle(230, 30, 20);
  circle(260, 30, 20);
  circle(290, 30, 20);
  circle(320, 30, 20);
  circle(350, 30, 20);
  circle(380, 30, 20);
  circle(410, 30, 20);
  circle(440, 30, 20);
  circle(470, 30, 20);
  circle(490, 30, 20);


 //bike
//wheel
fill(255);
ellipse(250, 400, 200, 200);
fill(0);
ellipse(250, 400, 160, 160);

fill(255);
ellipse(250, 400, 40, 40);

//steel ring
fill(255);
ellipse(250, 350, 40, 80);
fill(255);
ellipse(250, 450, 40, 80);

fill(255);
ellipse(200, 400, 80, 40);
fill(255);
ellipse(300, 400, 80, 40);

//axle
fill(0);
ellipse(250, 400, 30, 30);
fill(255);
ellipse(250, 400, 20, 20);



//wheel
  ellipse(200, 200, 80, 80);
  ellipse(350, 200, 80, 80);
  line(200,200,230,120);
  line(210,110,250,130);
  line(210,110,225,110);
  line(250,130,260,125);

  ellipse(290, 200, 30, 30);
  line(295,175,285,225);
  line(285,175,305,175);
  line(275,225,295,225);

  line(290,185,350,200);
  line(290,215,350,200);

  line(220,150,275,195);
  line(295,175,310,145);
  line(310,145,370,150);
  line(350,200,355,150);
   
  triangle(310,145,285,133,325,135);


  
  fill(255);
ellipse(130,740,100,100);
ellipse(130,740,85,85);
ellipse(130,740,10,10);//left wheel
ellipse(410,740,100,100);
ellipse(410,740,85,85);
line(130,740,245,630);//support 1

line(130,740,255,715);//support 2

line(255,715,245,630);
line(245,630,230,600);

rect(230,600,30,15);//support 3

line(245,630,390,610);
line(255,715,390,610);
line(390,610,410,740);
line(390,610,400,590);

ellipse(408,590,15,15);

ellipse(255,720,35,35);
line(255,720,280,740);
line(270,740,290,740);







//Mickey
fill(0,0,0);
ellipse(400,515,100,100);//head
ellipse(350,465,65,65);//ear
ellipse(450,465,65,65);

fill(255,217,193);//脸
ellipse(400,540,68,50);
ellipse(385,510,35,65);
ellipse(415,510,35,65);

fill(255,255,255);//eye+nose+mouse
ellipse(390,515,15,35);
ellipse(410,515,15,35);
fill(0,0,0);
ellipse(400,535,25,15);
ellipse(390,523,8,20);
ellipse(410,523,8,20);
fill(255,255,255);
ellipse(392,525,3,6);
ellipse(412,525,3,6);
ellipse(405,535,6,4);

stroke(0);
strokeWeight(1);
fill(255,0,0);
beginShape();
vertex(380, 540);
bezierVertex(380, 550,420, 550,420, 540);
bezierVertex(420, 575, 380, 575, 380,540);
endShape();

//mountain
// Blue above yellow
strokeCap(ROUND);
stroke(138, 166, 178);
strokeWeight(5);
line(367, 1038, 391, 1044);
line(391, 1044, 443, 1048);
line(443, 1048, 498, 1043);
beginShape();
strokeWeight(0);
fill(93, 33, 33); // Red mountain
vertex(0, 891);
vertex(11, 886);
vertex(25, 886);
vertex(71, 874);
vertex(94, 873);
vertex(137, 873);
vertex(16, 870);
vertex(181, 874);
vertex(245, 910);
vertex(282, 920);
vertex(301, 936);
vertex(353, 1021);
vertex(370, 1041);
vertex(395, 1065);
vertex(424, 1083);
vertex(444, 1093);
vertex(0, 1093);
endShape(CLOSE);
beginShape();
strokeWeight(0);
fill(46, 67, 50); // mountain part2
vertex(333, 959);
vertex(356, 952);
vertex(393, 934);
vertex(424, 927);
vertex(457, 909);
vertex(469, 899);
vertex(518, 881);
vertex(538, 879);
vertex(550, 878);
vertex(550, 960);
vertex(391, 961);
vertex(354, 959);
endShape(CLOSE);



// Lighthouse
fill(194, 207, 189); // Gray1
quad(138, 869, 142, 817, 146, 817, 146, 872);
fill(120, 134, 111); // Gray2
quad(146, 817, 146, 872, 156, 872, 156, 817);
fill(63, 74, 78); // Gray3
quad(156, 817, 156, 872, 165, 870, 160, 817);
strokeWeight(3);
stroke(129, 146, 140); // Black
line(138, 816, 163, 816);
strokeWeight(0);
triangle(138, 815, 163, 815, 151, 804);
fill(62, 107, 64);



  
   var ballSize = map(bass, 0, 100, 60, 20);
   var drumHight = map(drum, 0, 100, height, 0+ballSize/2);
   
   translate(width / 10, height / 10);
   rotate(PI / 9.0);

   
  

   fill(20, 40, 100);//circle10
   ellipse(width/1.05,drumHight, ballSize);

   fill(25, 40, 300);//circle7
   ellipse(width/1.55,drumHight, ballSize);
   
   fill(45, 150, 45);//circle4
   ellipse(width/2.8,drumHight, ballSize);

   
   
   fill(24, 56, 160);//circle/1
   ellipse(width/20,drumHight, ballSize);

   
   fill(120, 10, 255);//circle2
   ellipse(width/6.9,drumHight, ballSize);

   fill(78, 149, 90);//circle3
   ellipse(width/3.96,drumHight, ballSize);

   fill(46, 149, 80);//circle5
   ellipse(width/2.2,drumHight, ballSize);

   fill(28, 149, 227);//circle6
   ellipse(width/1.8,drumHight, ballSize);


   fill(39, 149, 227);//circle8
   ellipse(width/1.34,drumHight, ballSize);

   fill(56, 149, 227);//circle9
   ellipse(width/1.18,drumHight, ballSize);

   fill(56, 149, 227);//circle9
   ellipse(width/-18,drumHight, ballSize);

   //suqares

     var drumMap =map(drum, 0, 100, 5, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,80,80);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+-10;
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
     var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+350;
      line(LineStart, lineStep, lineEnd, lineStep);
    
    }  
   
    
    var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i-20;
      line(LineStart, lineStep, lineEnd, lineStep);
    
    }  

    var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i-70;
      line(LineStart, lineStep, lineEnd, lineStep);
    
    }  

    var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i-80;
      line(LineStart, lineStep, lineEnd, lineStep);
    
    }  

    var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+340;
      line(LineStart, lineStep, lineEnd, lineStep);
    
    }  

    var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+400;
      line(LineStart, lineStep, lineEnd, lineStep);
    
    }  

    var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+460;
      line(LineStart, lineStep, lineEnd, lineStep);
    
    }  

    var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+520;
      line(LineStart, lineStep, lineEnd, lineStep);
    
    }  

    var drumMap =map(drum, 0, 50, 2, 20);
     var lengthOfLine = 600;
     var LineStart = -50;
     var lineEnd = LineStart+lengthOfLine;
     stroke(drumMap,10,60);
  
     for(var i =1; i <= drumMap; i++){
      var lineStep = i+135;
      line(LineStart, lineStep, lineEnd, lineStep);
    
    }  

    var drumMap =map(drum, 0, 50, 2, 20);
    var lengthOfLine = 600;
    var LineStart = -50;
    var lineEnd = LineStart+lengthOfLine;
    stroke(drumMap,10,60);
 
    for(var i =1; i <= drumMap; i++){
     var lineStep = i+25;
     line(LineStart, lineStep, lineEnd, lineStep);
   
   }  

   var drumMap =map(drum, 0, 50, 2, 20);
    var lengthOfLine = 600;
    var LineStart = -50;
    var lineEnd = LineStart+lengthOfLine;
    stroke(drumMap,10,60);
 
    for(var i =1; i <= drumMap; i++){
     var lineStep = i+535;
     line(LineStart, lineStep, lineEnd, lineStep);
   
   }  
  }  
