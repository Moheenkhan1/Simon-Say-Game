let gameseq=[];
let userseq=[];

let level=0;
let start=false;

let btns=['red','blue','green','yellow'];
let h2=document.querySelector('.level');

document.addEventListener('keypress',function(){
    if(start==false){
        console.log('game started')
        start=true;

        levelup();
    }
    
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    
    let rdmIdx=Math.floor(Math.random()*3);
    let rdmClr=btns[rdmIdx];
    let rdmbtn=document.querySelector(`.${rdmClr}`)
    // console.log(rdmIdx);
    // console.log(rdmClr);
    // console.log(rdmbtn);
    
    btnFlash(rdmbtn);

    gameseq.push(rdmClr);
    console.log(gameseq)
}

function checkseq(Idx){
    if(userseq[Idx]==gameseq[Idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score Was <b> ${level} </b> <br>Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnpress(btn){
//    console.log(this);
let butn=this;
   userFlash(butn);

   usercolor=butn.getAttribute("id");
//    console.log(usercolor);

   userseq.push(usercolor);
//    console.log(userseq);

   checkseq(userseq.length-1);
}

allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" ,btnpress);
}

function reset(){
    start=false;
    level=0;
    userseq=[];
    gameseq=[];
}
