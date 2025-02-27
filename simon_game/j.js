let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","blue"];
let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started == false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let radIdx=Math.floor(Math.random()*3);
    let radColor=btns[radIdx];
    let radBtn=document.querySelector(`.${radColor}`);
    gameSeq.push(radColor);
    console.log(gameSeq);
    gameFlash(radBtn);
}
function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function checkAns(idx){
    let indx=level-1;
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        h2.innerHTML=`Game over!Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}