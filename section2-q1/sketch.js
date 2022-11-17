// 小手調べ
function setup(){

  noFill();

  for(let i = 10; i >0; i--){

    // BLANK[1]
    if(5<i){
      stroke(255,0,0);
    }
    else{
    stroke(0,0,255);
    }
    ellipse(50,50,i*10-10);
  }
}

