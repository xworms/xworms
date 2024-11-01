const svg = document.getElementById("svg");

scrollwotd = 0;
arraywotd = [
  "worm",
  "My sex drive has run out of storage.",
  "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?",
  "She gets out to check and man door hand hook car door...",
  "PayPal MOD APK (Unlimited Money) V8.16.0 Latest Version download now",
  "bayboy say he wanna getta jawnnang jiggla sna'appated, fuk-ma-knu'le'n'sees",
  "?",
  "unpa mije",
  "👽👽👽",
  "June 12th 2048 01:46:23 AM EST J9V5+FW3, Niti Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014, India.",
  "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively",
];

function newWord(){
  wotd.innerHTML = arraywotd[scrollwotd];
  if (scrollwotd == arraywotd.length-1){
    scrollwotd = 0;
  }
  else{
    scrollwotd += 1;
  }
}

window.onload = function(){
  shitten = ["dog.gif","rabbit.gif","bingle-dong-bingle.gif","ive-gone.gif","killer-fish-san-diego.gif","plink-wide-cat.gif","goatbigman.gif","livebitternreaction.gif","shoebill-bird.gif"];
  shat.src = shitten[Math.floor(Math.random()*shitten.length)]
  newWord();
}

for (i=0;i<8;i++){
  const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
  
  const n = 100/Math.pow(1.62,i);
  
  const radius = document.createAttribute("r");
  const stroke = document.createAttribute("stroke");
  const strokeWidth = document.createAttribute("stroke-width");
  const fill = document.createAttribute("fill");
  
  radius.value = n+"vw";
  stroke.value = "#B0B";
  strokeWidth.value = "3";
  fill.value = "#0000";

  circle.setAttributeNode(radius);
  circle.setAttributeNode(stroke);
  circle.setAttributeNode(strokeWidth);
  circle.setAttributeNode(fill);
  
  svg.appendChild(circle);
}

function doNothing(){}; //does nothing

function pissClick(){
  for (const circle of svg.children){
    circle.setAttribute("filter", "blur(20px)");
  }
}
function pissNotClick(){
  for (const circle of svg.children){
    circle.setAttribute("filter", "blur(20px)");
  }
}

onmousemove = function(event){
  let x = event.clientX;
  let y = event.clientY;
  let wx = window.innerWidth;
  let wy = window.innerHeight;
  let s = window.scrollY;

  let circleColor = 150+y*75/wy;
  setTimeout(function(){
  for (const circle of svg.children){
    circle.setAttribute("stroke","rgb("+circleColor+",0,"+circleColor+")");
    circle.setAttribute("stroke-width",x*16/wx+1);
  }

  document.getElementById("piss").style.filter = "grayscale("+y/wy+")";
  document.getElementById("shat").style.opacity = (y/wy)*0.1;

  let cursor1 = document.getElementById("cursor1");
  let ys = y+s;
  
  cursor1.style.transform = "translate("+x+"px,"+ys+"px)";
  },100);
  setTimeout(function(){
    let cursor2 = document.getElementById("cursor2");
    let ys = y+s;
    
    cursor2.style.transform = "translate("+x+"px,"+ys+"px)";
  },120);
  setTimeout(function(){
    let cursor3 = document.getElementById("cursor3");
    let ys = y+s;
    
    cursor3.style.transform = "translate("+x+"px,"+ys+"px)";
  },300);
  setTimeout(function(){
    let cursor4 = document.getElementById("cursor4");
    let ys = y+s;
    cursor4.style.transform = "translate("+x+"px,"+ys+"px)";
  },400);
  setTimeout(function(){
    let cursor5 = document.getElementById("cursor5");
    let ys = y+s;
    
    cursor5.style.transform = "translate("+x+"px,"+ys+"px)";
  },500);

  wormCursor.style.display = "initial";
  wormX = wormCursor.style.transform;
  wormX = wormX.substring(10,wormX.length-1);
  wormY = parseInt(wormX.split(",")[1]);
  wormX = parseInt(wormX.split(",")[0]);
  wormCursor.style.transform = "translate("+(wormX+((x-wormX)/50))+"px,"+(wormY+((y-wormY)/50))+"px)";
}

let scrollFont = 0;
function font(){
  let font = ['Play With Fire','Whitelisa','MTF Memory','Female Underwear','Sofia Sans'];
  document.body.style.fontFamily = '\''+font[scrollFont]+'\'';
  if (scrollFont == font.length-1){
    scrollFont = 0;
  }
  else{
    scrollFont += 1;
  }
}


var p = 0;
var pmax = 3;
var links = document.getElementById('links');

function clear(){
  for (const link of links.getElementsByTagName("a")){
  link.style.transform = "translateX(calc(50% + 5px))";
  }
}
function move(direction){
  clear();
  if (p >= 3 && direction == 1){
    p = 0;
  }
  if (p <= 1 && direction == -1){
    p = 4;
  }
  p += direction;
  document.getElementById(p).style.transform = "translateX(-50%)";
  console.log(p);
}
clear();
move(1);


function copy(){
  navigator.clipboard.writeText("worm68");
  document.getElementById("copy").style.display = "initial";
}


function time() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  document.getElementById("tim").innerHTML = ('0'+h).slice(-2)+":"+('0'+m).slice(-2)+":"+('0'+s).slice(-2);

  var day = d.getDay();
  var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  var date = d.getDate().toString();
  if (date.slice(-1) == '1' && date != '11'){
    dateEnd = 'st';
  }
  else if (date.slice(-1) == '2' && date != '12'){
    dateEnd = 'nd';
  }
  else if (date.slice(-1) == '3' && date != '13'){
    dateEnd = 'rd';
  }
  else{
    dateEnd = 'th';
  }
  document.getElementById("dat").innerHTML = days[day-1] + ' ' + date + dateEnd;
}
//why do i have tot edo thsi again man what tht eghelll
function tpTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  document.getElementById("tim").innerHTML = ('0'+h).slice(-2)+":"+('0'+m).slice(-2)+":"+('0'+s).slice(-2);
  
  var d = new Date();
  var day = d.getDay();
  var days = ['tenpo suno mun', 'tenpo suno seli', 'tenpo suno telo', 'tenpo suno kasi', 'tenpo suno kiwen', 'tenpo suno ma', 'tenpo suno suno'];
  var date = d.getDate();
  document.getElementById("dat").innerHTML = days[day-1] + ' ' + date;
}
//oh my god 3 times 
function jpTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  document.getElementById("tim").innerHTML = ('0'+h).slice(-2)+":"+('0'+m).slice(-2)+":"+('0'+s).slice(-2);

  var d = new Date();
  var day = d.getDay();
  var days = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'];
  var date = d.getDate();
  document.getElementById("dat").innerHTML = days[day-1] + ' ' + date + "日";
}


function scroll(){
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

  sideWorm.style.rotate = scrollPos + "deg";
}


function spawnWorm(){
  var xDirection = 1;
  var yDirection = 1;
  var spd = 10;
  
  var worm = document.createElement("img");
  worm.src = "worm.svg";
  var id = "bounceWorm"+Math.floor(Math.random()*1000);
  worm.setAttribute("id",id);
  worm.setAttribute("class","bounceWorm");
  worm.style.transform = "translate("+Math.random()*window.innerWidth+"px,"+Math.random()*window.innerHeight+"px)";
  document.body.appendChild(worm);
  function bounce(){
    var pos = document.getElementById(id).style.transform.split("(")[1].slice(0,-1).split(",");
    var x = parseInt(pos[0]);
    var y = parseInt(pos[1]);
    var xMax = window.innerWidth-15;
    var yMax = window.innerHeight;
    if (x >= xMax-15){
      xDirection = -1;
    }
    if (x <= 0){
      xDirection = 1;
    }
    if (y >= yMax-15){
      yDirection = -1;
    }
    if (y <= 0){
      yDirection = 1;
    }
    x += xDirection*spd;
    y += yDirection*spd;
      document.getElementById(id).style.transform = "translate("+x+"px,"+y+"px)";
  }
  setInterval(function(){bounce()},30)
}


function toggle(id){
  let the = document.getElementById(id);
  if (the.style.display != "none"){
    the.style.display = "none";
  }
  else {
    the.style.display = "initial";
  }
}


function refrigerator(imoverherestrokinm){
  let fridge = document.getElementById('fridge');
  let thenyoud = document.getElementById('description');
  let yes = document.getElementById('yes');
  let no = document.getElementById('no');
  let okay = document.getElementById('okay');
  yes.style.display = "initial";
  no.style.display = "initial";
  okay.style.display = "none";
  if (imoverherestrokinm == 'yes'){
    description.innerHTML = "Then you'd better go catch it!";
    fridge.style.animationName = "fridge";
    fridge.style.display = "initial";
  }
  else if (imoverherestrokinm == 'no'){
    description.innerHTML = "Then you'd better go fix it i guess";
  }
  else if (imoverherestrokinm == 'un'){
    description.innerHTML = "これはアメリカンジョウクです";
  }
  else if (imoverherestrokinm == 'uun'){
    description.innerHTML = "あー、そうだ。";
  }
  yes.style.display = "none";
  no.style.display = "none";
  okay.style.display = "initial";
}

// let c = document.getElementById('juego');
// let ctx = c.getContext('2d');

// class shape{
//   constructor(x,y,width,height,color){
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }
// }

// let player = new shape(100,100,50,50,"red");

// function moveObject(class o,x,y){
//   ctx.beginPath();
//   ctx.rect(o.x+x,o.y+y,o.width,o.height);
//   ctx.fillStyle = o.color;
//   ctx.fill();
//   o.x = o.x+x;
//   o.y = o.y+y;
// }

// function frame(){
//   // ctx.beginPath();
//   // ctx.rect(0,0,c.width,c.height);
//   // ctx.fillStyle = "white";
//   // ctx.fill();
//   moveObject(player,0,5);
// }

// setInterval(function(){frame()},100)
setInterval(function(){scroll()},10)