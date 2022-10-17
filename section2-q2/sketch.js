// チェッカー
function setup() {
  createCanvas(200, 200);
  noStroke();
  let size= width/8
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
       if((i + j)%2 == 1){
         fill(125);
         rect(25*i,25*j,25,25);
           if(j<3){
            fill(255,0,0);
            ellipse(25*(i+0.5),25*(j+0.5),20)
           }
           if(4<j){
            fill(0);
            ellipse(25*(i+0.5),25*(j+0.5),20)
           }
      }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}