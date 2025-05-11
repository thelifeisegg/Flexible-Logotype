let horror = new Array(3);
let romance = new Array(3);
let comedy = new Array(3);
let drama = new Array(3);
let crime = new Array(3);
let action = new Array(3);
let thriller = new Array(3);
let scifi = new Array(3);
let fantasy = new Array(3);
let animation = new Array(3);

let horrorName = ['어스', '장화, 홍련', '컨저링'];
let romanceName = ['그녀', '노트북','타이타닉'];
let comedyName = ['나 홀로 집에', '바비', '세 얼간이'];
let dramaName = ['기생충', '어느 가족', '콜 미 바이\n유어 네임'];
let crimeName = ['세븐', '올드보이', '캐치 미\n이프 유 캔'];
let actionName = ['범죄도시', '어벤져스', '존윅'];
let thrillerName = ['노인을 위한\n나라는 없다', '서브스턴스', '양들의 침묵'];
let scifiName = ['듄', '에이리언', '인터스텔라'];
let fantasyName = ['나니아 연대기', '반지의 제왕', '해리포터'];
let animationName = ['센과 치히로의\n행방불명', '월-E', '코코'];

let horrorOrder = [0,1,2];
let romanceOrder = [0,1,2];
let comedyOrder = [0,1,2];
let dramaOrder = [0,1,2];
let crimeOrder = [0,1,2];
let actionOrder = [0,1,2];
let thrillerOrder = [0,1,2];
let scifiOrder = [0,1,2];
let fantasyOrder = [0,1,2];
let animationOrder = [0,1,2];

let horrorCount = 0;
let romanceCount = 0;
let comedyCount = 0;
let dramaCount = 0;
let crimeCount = 0;
let actionCount = 0;
let thrillerCount = 0;
let scifiCount = 0;
let fantasyCount = 0;
let animationCount = 0;

let state = 0;
let stage = 0;

let writer;

function preload(){
  for(let i=0; i<3; i++){
    let fileNumber = i+1;
    let fileName = '0'+fileNumber+'.png';
    console.log(fileName);
    horror[i] = loadImage('horror/'+fileName);
    romance[i] = loadImage('romance/'+fileName);
    comedy[i] = loadImage('comedy/'+fileName);
    drama[i] = loadImage('drama/'+fileName);
    crime[i] = loadImage('crime/'+fileName);
    action[i] = loadImage('action/'+fileName);
    thriller[i] = loadImage('thriller/'+fileName);
    scifi[i] = loadImage('scifi/'+fileName);
    fantasy[i] = loadImage('fantasy/'+fileName);
    animation[i] = loadImage('ani/'+fileName);
  }
}


function setup() {
  createCanvas(800, 800);
  
  horrorOrder = shuffle(horrorOrder);
  romanceOrder = shuffle(romanceOrder);
  comedyOrder = shuffle(comedyOrder);
  dramaOrder = shuffle(dramaOrder);
  crimeOrder = shuffle(crimeOrder);
  actionOrder = shuffle(actionOrder);
  thrillerOrder = shuffle(thrillerOrder);
  scifiOrder = shuffle(scifiOrder);
  fantasyOrder = shuffle(fantasyOrder);
  animationOrder = shuffle(animationOrder);
  console.log(horrorOrder);
  
  let mm = month();
  let dd = day();
  let ho = hour();
  let mi = minute();
  let se = second();
  let dataName = 'data_'+mm+dd+'_'+ho+mi+se+'.txt';
  writer = createWriter(dataName);
}

function draw() {
  background(0);
  
  if(state == 0){
    displayText(stage);
    displayhorror(stage);
    displayromance(stage);
    displaycomedy(stage);
    displaydrama(stage);
    displaycrime(stage);
    displayaction(stage);
    displaythriller(stage);
    displayscifi(stage);
    displayfantasy(stage);
    displayanimation(stage);
  }else if(state == 1){
    textFont('Galmuri9');
    textSize(35);
    textAlign(CENTER, CENTER);
    text('Good job! 당신만의 로고가 만들어졌어요', width/2, height/2);
  }
}
  
function displayText(stageNum){
  fill(255);
  textFont('Galmuri9');
  textSize(30);
  textAlign(CENTER);
  text('내가 좋아하는 영화 장르는? _ ' + (stageNum+1), width/2, 90);
}

function displayhorror(stageNum){
  let idx = horrorOrder[stageNum];
  image(horror[idx], 30, 150, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(horrorName[idx], 100, 370);
}
  
function displayromance(stageNum){
  let idx = romanceOrder[stageNum];
  image(romance[idx], 30+150, 150, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(romanceName[idx], 100+150, 370);
}
  
function displaycomedy(stageNum){
  let idx = comedyOrder[stageNum];
  image(comedy[idx], 30+300, 150, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(comedyName[idx], 100+300, 370);
}
  
function displaydrama(stageNum){
  let idx = dramaOrder[stageNum];
  image(drama[idx], 30+450, 150, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(dramaName[idx], 100+450, 370);
}
  
function displaycrime(stageNum){
  let idx = crimeOrder[stageNum];
  image(crime[idx], 30+600, 150, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(crimeName[idx], 100+600, 370);
}
  
function displayaction(stageNum){
  let idx = actionOrder[stageNum];
  image(action[idx], 30, 450, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(actionName[idx], 100, 670);
}
  
function displaythriller(stageNum){
  let idx = thrillerOrder[stageNum];
  image(thriller[idx], 30+150, 450, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(thrillerName[idx], 100+150, 670);
}
  
function displayscifi(stageNum){
  let idx = scifiOrder[stageNum];
  image(scifi[idx], 30+300, 450, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(scifiName[idx], 100+300, 670);
}
  
function displayfantasy(stageNum){
  let idx = fantasyOrder[stageNum];
  image(fantasy[idx], 30+450, 450, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(fantasyName[idx], 100+450, 670);
}
  
function displayanimation(stageNum){
  let idx = animationOrder[stageNum];
  image(animation[idx], 30+600, 450, 140, 190);
  fill(255)
  textFont('Galmuri9')
  textSize(20);
  textAlign(CENTER);
  text(animationName[idx], 100+600, 670);
}

function mouseReleased(){
  if(mouseX > 30 && mouseX < 30+140 && mouseY > 150 && mouseY < 150+190){
    stage = stage + 1; 
    horrorCount = horrorCount + 1;
    console.log('H: '+horrorCount);
  }else if(mouseX > 30+140+20 && mouseX < 30+140+20+140 && mouseY > 150 && mouseY < 150+190){
    stage = stage + 1; 
    romanceCount = romanceCount + 1;
    console.log('R: '+romanceCount);
  }else if(mouseX > 30+140+20+140+20 && mouseX < 30+140+20+140+20+140 && mouseY > 150 && mouseY < 150+190){
    stage = stage + 1; 
    comedyCount = comedyCount + 1;
    console.log('C: '+comedyCount);
  }else if(mouseX > 30+140+20+140+20+140+20 && mouseX < 30+140+20+140+20+140+20+140 && mouseY > 150 && mouseY < 150+190){
    stage = stage + 1; 
    dramaCount = dramaCount + 1;
    console.log('D: '+dramaCount);
  }else if(mouseX > 30+140+20+140+20+140+20+140+20 && mouseX < 30+140+20+140+20+140+20+140+140 && mouseY > 150 && mouseY < 150+190){
    stage = stage + 1; 
    crimeCount = crimeCount + 1;
    console.log('CR: '+crimeCount);
  }else if(mouseX > 30 && mouseX < 30+140 && mouseY > 450 && mouseY < 450+190){
    stage = stage + 1; 
    actionCount = actionCount + 1;
    console.log('A: '+actionCount);
  }else if(mouseX > 30+140+20 && mouseX < 30+140+20+140 && mouseY > 450 && mouseY < 450+190){
    stage = stage + 1; 
    thrillerCount = thrillerCount + 1;
    console.log('T: '+thrillerCount);
  }else if(mouseX > 30+140+20+140+20 && mouseX < 30+140+20+140+20+140 && mouseY > 450 && mouseY < 450+190){
    stage = stage + 1; 
    scifiCount = scifiCount + 1;
    console.log('S: '+scifiCount);
  }else if(mouseX > 30+140+20+140+20+140+20 && mouseX < 30+140+20+140+20+140+20+140 && mouseY > 450 && mouseY < 450+190){
    stage = stage + 1; 
    fantasyCount = fantasyCount + 1;
    console.log('F: '+fantasyCount);
  }else if(mouseX > 30+140+20+140+20+140+20+140+20 && mouseX < 30+140+20+140+20+140+20+140+20+140 && mouseY > 450 && mouseY < 450+190){
    stage = stage + 1; 
    animationCount = animationCount + 1;
    console.log('AN: '+animationCount);
  }
  if(stage == 3){
    state = 1;
    let data_msg = '' + horrorCount +','+ romanceCount +','+ comedyCount +','+ dramaCount +','+ crimeCount +','+ actionCount +','+ thrillerCount +','+ scifiCount +','+ fantasyCount +','+ animationCount;
    writer.print(data_msg);
    writer.close();
    writer.clear();
  }
}