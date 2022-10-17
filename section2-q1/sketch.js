// 小手調べ
function setup(){

  noFill();

  for(let i = 10; i >0; i--){
   
  for(let i = 0; i < 10; i++){ellipse(0, 0, 0);

    // BLANK[1]
    if(5<i){
      stroke(255,0,0);
    }
    else{
      stroke(0,0,255);
    ellipse(50,50,i*10-10);
    }
  }
}
}

